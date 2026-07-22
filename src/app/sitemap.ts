import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { importantPages } from "@/content/static-pages";
import { permalink } from "@/lib/permalinks";
import {
  guideSectionStepByStep,
  guideSectionWithColor,
  guideSectionsRemaining,
  learningRoadmap,
} from "@/content/homepage";

/**
 * Sitemap: home + published pages, with homepage images for Image SEO.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-07-21");

  const homepageImageUrls = [
    absoluteUrl("/images/perf/v2/hero.webp"),
    absoluteUrl(guideSectionStepByStep.image),
    absoluteUrl(guideSectionWithColor.image),
    ...guideSectionsRemaining.map((section) => absoluteUrl(section.image)),
    ...learningRoadmap.map((step) => absoluteUrl(step.image)),
  ];

  return [
    {
      url: absoluteUrl("/"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
      images: homepageImageUrls,
    },
    ...importantPages.map((page) => ({
      url: absoluteUrl(permalink(page.href)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
