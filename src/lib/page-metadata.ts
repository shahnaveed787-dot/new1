import type { Metadata } from "next";
import { absoluteUrl, PREFERRED_SITE_URL } from "@/lib/seo";

const DEFAULT_OG_IMAGE = {
  url: "/images/perf/v2/hero.webp",
  width: 720,
  height: 640,
  alt: "easy tree drawing",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  /** Site path including leading slash, with or without trailing slash */
  path: string;
  ogType?: "website" | "article";
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  noIndex?: boolean;
};

/** Consistent title, description, canonical, Open Graph, and Twitter Card metadata. */
export function buildPageMetadata({
  title,
  description,
  path,
  ogType = "website",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt ?? title,
  };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "TreeDraw",
      locale: "en_US",
      type: ogType,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url.startsWith("http") ? image.url : absoluteUrl(image.url)],
    },
    metadataBase: new URL(PREFERRED_SITE_URL),
  };
}
