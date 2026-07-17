import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { TutorialCardGrid, CategoryCardGrid } from "@/components/marketing/CardGrid";
import { LearningRoadmap } from "@/components/marketing/LearningRoadmap";
import { DrawingTips } from "@/components/marketing/DrawingTips";
import { GuideSections } from "@/components/marketing/GuideSections";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { Newsletter } from "@/components/marketing/Newsletter";
import { Contact } from "@/components/marketing/Contact";
import {
  featuredTutorials,
  popularDrawings,
  drawingCategories,
  latestTutorials,
  studentFavorites,
  guideSections,
  faqs,
  homepageMeta,
  heroContent,
} from "@/content/homepage";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  jsonLdScript,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: homepageMeta.title,
  },
  description: homepageMeta.description,
  alternates: {
    canonical: homepageMeta.canonicalPath,
  },
  openGraph: {
    title: homepageMeta.title,
    description: homepageMeta.description,
    url: homepageMeta.canonicalPath,
    type: "article",
  },
};

export default function HomePage() {
  const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildArticleSchema({
      headline: heroContent.h1,
      description: homepageMeta.description,
      path: homepageMeta.canonicalPath,
      sectionHeadings: guideSections.map((s) => s.heading),
    }),
    buildFaqSchema(faqs),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: heroContent.h1, path: homepageMeta.canonicalPath },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <main id="main-content">
        <Hero />
        <TutorialCardGrid
          id="featured-tutorials"
          eyebrow="Featured Tutorials"
          title="Start with these friendly tree lessons"
          description="Hand-picked beginner tutorials to build confidence fast."
          items={featuredTutorials}
        />
        <TutorialCardGrid
          id="popular-drawings"
          eyebrow="Popular Drawings"
          title="Trees learners love right now"
          description="Seasonal favorites and expressive styles from our collection."
          items={popularDrawings}
        />
        <CategoryCardGrid
          eyebrow="Drawing Categories"
          title="Pick a tree style and start drawing"
          description="Every category links to a dedicated practice path (pages launching soon)."
          items={drawingCategories}
        />
        <LearningRoadmap />
        <TutorialCardGrid
          id="latest-tutorials"
          eyebrow="Latest Tutorials"
          title="Fresh sketches just added"
          description="New practice pages as we grow the TreeDraw library."
          items={latestTutorials}
        />
        <DrawingTips />
        <GuideSections />
        <TutorialCardGrid
          id="student-favorites"
          eyebrow="Student Favorites"
          title="Classroom and couch winners"
          description="The drawings kids ask to repeat — and teachers keep assigning."
          items={studentFavorites}
        />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
    </>
  );
}
