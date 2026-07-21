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
    type: "website",
  },
};

/** Site home — lives at domain root (https://treedrawing.us/), not a postname slug. */
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
