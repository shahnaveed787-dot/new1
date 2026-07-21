import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  sessionCookieOptions,
  verifyAdminSessionToken,
  type AdminSession,
} from "@/lib/admin-session";

export {
  ADMIN_SESSION_COOKIE,
  sessionCookieOptions,
  type AdminSession,
};

function requireSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing or too short. Run: npm run setup:admin",
    );
  }
  return secret;
}

function getPasswordHash(): string | null {
  const b64 = process.env.ADMIN_PASSWORD_HASH_B64;
  if (b64) {
    try {
      return Buffer.from(b64, "base64").toString("utf8");
    } catch {
      return null;
    }
  }
  // Legacy fallback (may be corrupted by env $-expansion)
  return process.env.ADMIN_PASSWORD_HASH || null;
}

export function isAdminConfigured() {
  return Boolean(
    process.env.ADMIN_USERNAME &&
      getPasswordHash() &&
      process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_SESSION_SECRET.length >= 32,
  );
}

export async function verifyAdminCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const expectedUser = process.env.ADMIN_USERNAME;
  const hash = getPasswordHash();

  if (!expectedUser || !hash) return false;

  const userOk =
    username.length === expectedUser.length && username === expectedUser;

  const passOk = await bcrypt.compare(password, hash);
  return userOk && passOk;
}

export async function issueAdminSession(username: string) {
  return createAdminSessionToken(username, requireSessionSecret());
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const jar = await cookies();
  const token = jar.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifyAdminSessionToken(token, requireSessionSecret());
}
