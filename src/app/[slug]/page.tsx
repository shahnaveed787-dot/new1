import { notFound } from "next/navigation";
import { ComingSoonPage, comingSoonMetadata } from "@/components/marketing/ComingSoonPage";
import {
  isLearningStepSlug,
  isPostSlug,
  titleFromPostname,
  POST_SLUGS,
} from "@/lib/permalinks";

/**
 * WordPress-style postname route: /%postname%/
 * Handles tutorials + learning-path steps at the site root (no /tutorial-step/ prefix).
 */
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!isPostSlug(slug)) return {};

  const title = titleFromPostname(slug);
  if (isLearningStepSlug(slug)) {
    return comingSoonMetadata(`${title} — Learning Step`);
  }
  return comingSoonMetadata(title);
}

export default async function PostnamePage({ params }: Props) {
  const { slug } = await params;
  if (!isPostSlug(slug)) notFound();

  const title = titleFromPostname(slug);

  if (isLearningStepSlug(slug)) {
    return (
      <ComingSoonPage
        title={`${title} step coming soon`}
        description="This learning-path step will open as a full practice lesson soon. Meanwhile, follow the homepage roadmap images to practice each stage."
      />
    );
  }

  return (
    <ComingSoonPage
      title={`${title} — coming soon`}
      description="We're painting this page next. Return to the homepage for easy and simple tree drawing lessons you can use today."
    />
  );
}
