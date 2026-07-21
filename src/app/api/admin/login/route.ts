import { NextResponse } from "next/server";
import {
  isAdminConfigured,
  issueAdminSession,
  sessionCookieOptions,
  verifyAdminCredentials,
  ADMIN_SESSION_COOKIE,
} from "@/lib/admin-auth";
import { isRateLimited, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_FAILED_ATTEMPTS = 8;
const WINDOW_MS = 15 * 60 * 1000;

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  return `admin-login:${ip}`;
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;
  try {
    const url = new URL(origin);
    return url.host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          "Admin login is not configured. Run npm run setup:admin and restart the server.",
      },
      { status: 503 },
    );
  }

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const key = clientKey(request);
  const blocked = isRateLimited(key, MAX_FAILED_ATTEMPTS);
  if (blocked.limited) {
    return NextResponse.json(
      { error: "Too many login attempts. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(blocked.retryAfterSec) },
      },
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 },
    );
  }

  const valid = await verifyAdminCredentials(username, password);
  if (!valid) {
    rateLimit(key, MAX_FAILED_ATTEMPTS, WINDOW_MS);
    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 },
    );
  }

  const token = await issueAdminSession(username);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, sessionCookieOptions());
  return response;
}
