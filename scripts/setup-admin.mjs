/**
 * One-time local admin credential setup.
 * Writes .env.local (gitignored). Prints the password once — store it safely.
 *
 * Stores the bcrypt hash as base64 so Next.js env $-expansion cannot corrupt it.
 */
import { randomBytes } from "node:crypto";
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import bcrypt from "bcryptjs";

const root = resolve(import.meta.dirname, "..");
const envPath = resolve(root, ".env.local");

const username = process.argv[2] || "admin";
const password = process.argv[3] || randomBytes(12).toString("base64url");
const sessionSecret = randomBytes(32).toString("hex");
const passwordHash = bcrypt.hashSync(password, 12);
const passwordHashB64 = Buffer.from(passwordHash, "utf8").toString("base64");

function stripQuotes(value) {
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

const lines = {
  NEXT_PUBLIC_SITE_URL: "http://localhost/new1",
  ADMIN_USERNAME: username,
  ADMIN_PASSWORD_HASH_B64: passwordHashB64,
  ADMIN_SESSION_SECRET: sessionSecret,
};

let existing = {};
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const i = line.indexOf("=");
    const key = line.slice(0, i);
    if (
      key === "ADMIN_PASSWORD_HASH" ||
      key === "ADMIN_PASSWORD_HASH_B64" ||
      key === "ADMIN_SESSION_SECRET"
    ) {
      continue;
    }
    existing[key] = stripQuotes(line.slice(i + 1));
  }
}

const merged = { ...existing, ...lines };
const body =
  Object.entries(merged)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n") + "\n";

writeFileSync(envPath, body);

console.log("");
console.log("Admin credentials saved to .env.local (gitignored)");
console.log("--------------------------------------------------");
console.log(`Login URL : http://localhost:3000/admin/login`);
console.log(`Username  : ${username}`);
console.log(`Password  : ${password}`);
console.log("--------------------------------------------------");
console.log("Store this password securely. It will not be shown again.");
console.log("Restart the Next.js server after running this script.");
console.log("");
