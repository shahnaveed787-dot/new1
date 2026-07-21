import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { importantPages } from "@/content/static-pages";
import { drawingCategories } from "@/content/homepage";
import { POST_SLUGS, permalink, categoryPermalink } from "@/lib/permalinks";

/**
 * Home is the domain root. Pages/posts use WordPress-style /%postname%/.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-07-18");

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
    ...POST_SLUGS.map((slug) => ({
      url: absoluteUrl(permalink(slug)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...drawingCategories.map((cat) => ({
      url: absoluteUrl(categoryPermalink(cat.slug)),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
