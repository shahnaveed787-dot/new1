type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Simple in-memory rate limit (per-process). Fine for a single admin login.
 * Call only on failed attempts so a correct password is never blocked by prior mistakes.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSec: 0 };
  }

  if (current.count >= limit) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  buckets.set(key, current);
  return { ok: true, retryAfterSec: 0 };
}

export function isRateLimited(
  key: string,
  limit: number,
): { limited: boolean; retryAfterSec: number } {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    return { limited: false, retryAfterSec: 0 };
  }
  if (current.count >= limit) {
    return {
      limited: true,
      retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }
  return { limited: false, retryAfterSec: 0 };
}

export function clearRateLimit(key?: string) {
  if (key) buckets.delete(key);
  else buckets.clear();
}
