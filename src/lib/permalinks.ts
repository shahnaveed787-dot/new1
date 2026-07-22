/**
 * WordPress-style "Post name" permalinks: /%postname%/
 * Only for published pages/posts — not the site home (/).
 */

/** Build a postname permalink (leading + trailing slash). */
export function permalink(slugOrPath: string): string {
  const cleaned = slugOrPath
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/+/g, "/");

  if (!cleaned) return "/";

  const [pathPart, hash] = cleaned.split("#");
  const path = `/${pathPart.replace(/^\/+|\/+$/g, "")}/`;
  return hash ? `${path}#${hash}` : path;
}

/** Published site pages (Explore + Important). Home is `/` only. */
export const PUBLISHED_PAGE_SLUGS = [
  "about",
  "contact",
  "privacy-policy",
  "disclaimer",
  "terms-and-conditions",
] as const;

export function isPublishedPageSlug(slug: string): boolean {
  return (PUBLISHED_PAGE_SLUGS as readonly string[]).includes(slug);
}
