import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve(import.meta.dirname, "..", ".env.local");
const siteUrl = process.argv[2] || "http://localhost/new1";

if (!existsSync(envPath)) {
  console.error("Missing .env.local — run npm run setup:admin first");
  process.exit(1);
}

const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
let found = false;
const next = lines.map((line) => {
  if (line.startsWith("NEXT_PUBLIC_SITE_URL=")) {
    found = true;
    return `NEXT_PUBLIC_SITE_URL=${siteUrl}`;
  }
  return line;
});
if (!found) next.unshift(`NEXT_PUBLIC_SITE_URL=${siteUrl}`);
writeFileSync(envPath, next.filter((l, i, a) => l || i < a.length - 1).join("\n").replace(/\n*$/, "\n"));
console.log(`NEXT_PUBLIC_SITE_URL set to ${siteUrl}`);
