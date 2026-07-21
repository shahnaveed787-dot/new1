import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "treedraw_admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 hours

export type AdminSession = {
  sub: string;
  role: "admin";
};

function encodeSecret(secret: string) {
  return new TextEncoder().encode(secret);
}

export async function createAdminSessionToken(
  username: string,
  secret: string,
) {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(username)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(encodeSecret(secret));
}

export async function verifyAdminSessionToken(
  token: string,
  secret: string,
): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, encodeSecret(secret), {
      algorithms: ["HS256"],
    });
    if (payload.role !== "admin" || typeof payload.sub !== "string") {
      return null;
    }
    return { sub: payload.sub, role: "admin" };
  } catch {
    return null;
  }
}

export function sessionCookieOptions(maxAge = SESSION_TTL_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge,
  };
}
