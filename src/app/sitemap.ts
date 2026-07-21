import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { importantPages } from "@/content/static-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date("2026-07-18");

  return [
    {
      url: absoluteUrl("/easy-and-simple-tree-drawing"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/"),
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...importantPages.map((page) => ({
      url: absoluteUrl(page.href),
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
