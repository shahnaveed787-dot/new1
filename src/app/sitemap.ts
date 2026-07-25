import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { importantPages } from "@/content/static-pages";
import { tutorials } from "@/content/tutorials";
import { permalink } from "@/lib/permalinks";
import {
  guideSectionStepByStep,
  guideSectionWithColor,
  guideSectionsRemaining,
  learningRoadmap,
} from "@/content/homepage";

/**
 * Sitemap: home + published pages + drawing tutorials.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-07-25");

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
    {
      url: absoluteUrl("/drawing-tutorials/"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...importantPages.map((page) => ({
      url: absoluteUrl(permalink(page.href)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...tutorials.map((tutorial) => ({
      url: absoluteUrl(permalink(tutorial.slug)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: tutorial.status === "ready" ? 0.8 : 0.5,
      images: [absoluteUrl(tutorial.image)],
    })),
  ];
}
