import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoonPage, comingSoonMetadata } from "@/components/marketing/ComingSoonPage";
import { TutorialContentPage } from "@/components/marketing/TutorialContentPage";
import { getTutorialBySlug, tutorialSlugs } from "@/content/tutorials";
import { buildPageMetadata } from "@/lib/page-metadata";
import { permalink, PUBLISHED_PAGE_SLUGS } from "@/lib/permalinks";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tutorialSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) {
    return { title: "Tutorial not found" };
  }

  if (tutorial.status !== "ready") {
    return comingSoonMetadata(tutorial.title, tutorial.slug);
  }

  // Post-name permalink: /%postname%/ — index + follow
  return buildPageMetadata({
    title: tutorial.metaTitle,
    description: tutorial.metaDescription,
    path: permalink(tutorial.slug),
    ogType: "article",
    image: {
      url: tutorial.image,
      alt: tutorial.imageAlt,
    },
  });
}

export default async function TutorialSlugPage({ params }: Props) {
  const { slug } = await params;

  // Static routes (about, contact, …) win in the App Router; still guard here.
  if ((PUBLISHED_PAGE_SLUGS as readonly string[]).includes(slug)) {
    notFound();
  }

  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) notFound();

  if (tutorial.status !== "ready") {
    return (
      <ComingSoonPage
        title={tutorial.title}
        description={`${tutorial.title} is on our drawing easel. Check back soon — or browse the Christmas tree lesson while we finish this one.`}
      />
    );
  }

  return <TutorialContentPage page={tutorial} />;
}
