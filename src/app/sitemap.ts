import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { importantPages } from "@/content/static-pages";
import { permalink } from "@/lib/permalinks";

/**
 * Sitemap: home + published pages only (Explore / Important).
 * No unpublished coming-soon post or category URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-07-21");

  return [
    {
      url: absoluteUrl("/"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...importantPages.map((page) => ({
      url: absoluteUrl(permalink(page.href)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
