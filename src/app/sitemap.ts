import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/easy-and-simple-tree-drawing"),
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-07-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
