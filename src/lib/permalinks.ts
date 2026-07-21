/**
 * WordPress-style "Post name" permalinks: /%postname%/
 * No dates, IDs, or query strings — only the slug.
 */

/** Build a postname permalink (always leading slash, trailing slash, no double slashes). */
export function permalink(slugOrPath: string): string {
  const cleaned = slugOrPath
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\/+/g, "/");

  if (!cleaned) return "/";

  // Allow in-page hashes: easy-and-simple-tree-drawing#faqs
  const [pathPart, hash] = cleaned.split("#");
  const path = `/${pathPart.replace(/^\/+|\/+$/g, "")}/`;
  return hash ? `${path}#${hash}` : path;
}

/** Category archive permalink (WordPress category base). */
export function categoryPermalink(slug: string): string {
  return permalink(`category/${slug.replace(/^\/+|\/+$/g, "")}`);
}

/** Reserved system paths that must never be treated as post slugs. */
export const RESERVED_PATHS = new Set([
  "admin",
  "api",
  "category",
  "images",
  "_next",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
]);

/** Learning-path step postnames (formerly /tutorial-step/...). */
export const LEARNING_STEP_SLUGS = [
  "basic-shapes",
  "trunk",
  "branches",
  "leaves",
  "shadows",
  "color",
] as const;

/** Tutorial / coming-soon postnames at the site root. */
export const POST_SLUGS = [
  "drawing-collection",
  "step-by-step-tutorials",
  "coming-soon",
  "how-to-draw-a-simple-oak-tree",
  "pine-tree-drawing-for-beginners",
  "cartoon-apple-tree-drawing",
  "winter-bare-tree-sketch",
  "cherry-blossom-tree-drawing",
  "autumn-tree-drawing",
  "dead-tree-drawing",
  "fruit-tree-drawing",
  "draw-a-willow-tree",
  "rainbow-tree-for-kids",
  "palm-tree-drawing",
  "maple-leaf-close-up",
  "smiling-cartoon-tree",
  "treehouse-adventure",
  "nighttime-glow-tree",
  "family-tree-poster",
  ...LEARNING_STEP_SLUGS,
] as const;

export type PostSlug = (typeof POST_SLUGS)[number];

export function isPostSlug(slug: string): slug is PostSlug {
  return (POST_SLUGS as readonly string[]).includes(slug);
}

export function isLearningStepSlug(slug: string): boolean {
  return (LEARNING_STEP_SLUGS as readonly string[]).includes(slug);
}

export function titleFromPostname(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
