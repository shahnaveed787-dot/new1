import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { LearningRoadmap } from "@/components/marketing/LearningRoadmap";
import { DrawingTips } from "@/components/marketing/DrawingTips";
import { GuideSections } from "@/components/marketing/GuideSections";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { Newsletter } from "@/components/marketing/Newsletter";
import { Contact } from "@/components/marketing/Contact";
import {
  guideSections,
  guideSectionStepByStep,
  guideSectionWithColor,
  guideSectionsRemaining,
  faqs,
  homepageMeta,
  heroContent,
  learningRoadmap,
} from "@/content/homepage";
import { buildPageMetadata } from "@/lib/page-metadata";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToDrawTreeSchema,
  buildImageObjectsSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  jsonLdScript,
} from "@/lib/seo";

const HERO_IMAGE = "/images/perf/v2/hero.webp";

const homepageImages = [
  { url: HERO_IMAGE, name: "easy tree drawing" },
  {
    url: guideSectionStepByStep.image,
    name: guideSectionStepByStep.imageAlt,
  },
  {
    url: guideSectionWithColor.image,
    name: guideSectionWithColor.imageAlt,
  },
  ...guideSectionsRemaining.map((section) => ({
    url: section.image,
    name: section.imageAlt,
  })),
  ...learningRoadmap.map((step) => ({
    url: step.image,
    name: step.imageAlt,
  })),
];

export const metadata: Metadata = buildPageMetadata({
  title: homepageMeta.title,
  description: homepageMeta.description,
  path: homepageMeta.canonicalPath,
  ogType: "website",
  image: {
    url: HERO_IMAGE,
    width: 720,
    height: 640,
    alt: "easy tree drawing",
  },
});

/** Site home — lives at domain root (https://treedrawing.us/), not a postname slug. */
export default function HomePage() {
  const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildArticleSchema({
      headline: heroContent.h1,
      description: homepageMeta.description,
      path: homepageMeta.canonicalPath,
      datePublished: "2026-07-18",
      dateModified: "2026-07-23",
      sectionHeadings: guideSections.map((s) => s.heading),
      images: homepageImages.map((image) => image.url),
    }),
    buildHowToDrawTreeSchema(),
    ...buildImageObjectsSchema(homepageImages),
    buildFaqSchema(faqs),
    buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <main id="main-content">
        <Hero />
        <GuideSections
          sections={[guideSectionStepByStep, guideSectionWithColor]}
          id="featured-tree-lessons"
        />
        <div className="cwv-defer">
          <LearningRoadmap />
        </div>
        <div className="cwv-defer">
          <GuideSections
            sections={guideSectionsRemaining}
            id="tree-drawing-guide"
          />
        </div>
        <div className="cwv-defer">
          <DrawingTips />
          <Testimonials />
          <FAQ />
          <Newsletter />
          <Contact />
        </div>
      </main>
    </>
  );
}
