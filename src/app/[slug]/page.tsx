import { notFound } from "next/navigation";
import { ComingSoonPage, comingSoonMetadata } from "@/components/marketing/ComingSoonPage";

/** Placeholder routes reserved for future category/tutorial/legal pages. */
const PLACEHOLDER_SLUGS = new Set([
  "drawing-collection",
  "step-by-step-tutorials",
  "about",
  "privacy-policy",
  "terms",
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
]);

type Props = { params: Promise<{ slug: string }> };

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return Array.from(PLACEHOLDER_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!PLACEHOLDER_SLUGS.has(slug)) return {};
  return comingSoonMetadata(titleFromSlug(slug));
}

export default async function PlaceholderSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!PLACEHOLDER_SLUGS.has(slug)) notFound();

  return (
    <ComingSoonPage
      title={`${titleFromSlug(slug)} — coming soon`}
      description="We're painting this page next. Return to the homepage for easy and simple tree drawing lessons you can use today."
    />
  );
}
