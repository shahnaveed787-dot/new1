import type { FaqItem } from "@/content/homepage";

/** Preferred production origin (apex, no www). */
export const PREFERRED_SITE_URL = "https://treedrawing.us";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  // Never bake localhost into canonicals / sitemap / JSON-LD.
  if (!fromEnv || /localhost|127\.0\.0\.1/i.test(fromEnv)) {
    return PREFERRED_SITE_URL;
  }
  // Normalize accidental www to preferred apex host.
  if (/^https?:\/\/www\.treedrawing\.us$/i.test(fromEnv)) {
    return PREFERRED_SITE_URL;
  }
  return fromEnv;
}

export function getSiteUrl(): string {
  return resolveSiteUrl();
}

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  let normalized = path.startsWith("/") ? path : `/${path}`;
  // Prefer WordPress-style trailing slash on content paths (not files/query)
  if (
    normalized !== "/" &&
    !normalized.includes("?") &&
    !normalized.includes("#") &&
    !normalized.includes(".") &&
    !normalized.endsWith("/")
  ) {
    normalized = `${normalized}/`;
  }
  return `${resolveSiteUrl()}${normalized}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "TreeDraw",
    alternateName: "Tree Drawing",
    url: absoluteUrl("/"),
    description:
      "Educational platform for easy and simple tree drawing tutorials for kids, beginners, parents, and teachers.",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/perf/v2/logo.webp"),
    },
    image: absoluteUrl("/images/perf/v2/hero.webp"),
    email: "hello@treedraw.studio",
    foundingDate: "2026",
    areaServed: "Worldwide",
    knowsAbout: [
      "tree drawing",
      "drawing of a tree",
      "pencil tree drawing",
      "cartoon tree drawing",
      "art education for children",
    ],
  };
}

export function buildWebPageSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: "TreeDraw",
      url: absoluteUrl("/"),
    },
    inLanguage: "en",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TreeDraw",
    alternateName: "Tree Drawing",
    url: absoluteUrl("/"),
    description:
      "Easy and simple tree drawing tutorials for beginners, kids, parents, and teachers.",
    publisher: {
      "@type": "Organization",
      name: "TreeDraw",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/perf/v2/logo.webp"),
      },
    },
    inLanguage: "en",
  };
}

export function buildArticleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  sectionHeadings?: string[];
  /** Absolute or site-relative image paths for Image SEO. */
  images?: string[];
}) {
  const imageUrls = (input.images ?? []).map((src) => absoluteUrl(src));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(input.path),
    },
    author: {
      "@type": "Organization",
      name: "TreeDraw",
    },
    publisher: {
      "@type": "Organization",
      name: "TreeDraw",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/perf/v2/logo.webp"),
      },
    },
    ...(imageUrls.length > 0
      ? { image: imageUrls.length === 1 ? imageUrls[0] : imageUrls }
      : {}),
    datePublished: input.datePublished ?? "2026-07-18",
    dateModified: input.dateModified ?? "2026-07-18",
    articleSection: input.sectionHeadings,
    inLanguage: "en",
  };
}

/** ImageObject entries so crawlers can associate captions/alt with image URLs. */
export function buildImageObjectsSchema(
  images: { url: string; name: string; description?: string }[],
) {
  return images.map((image) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absoluteUrl(image.url),
    url: absoluteUrl(image.url),
    name: image.name,
    description: image.description ?? image.name,
    license: absoluteUrl("/"),
    acquireLicensePage: absoluteUrl("/"),
    creditText: "TreeDraw",
    creator: {
      "@type": "Organization",
      name: "TreeDraw",
    },
  }));
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildHowToDrawTreeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Draw a Tree Step by Step",
    description:
      "Learn easy and simple tree drawing with a clear beginner sequence from basic shapes to color.",
    image: absoluteUrl("/images/perf/v2/guides/step-by-step.webp"),
    totalTime: "PT20M",
    tool: [
      { "@type": "HowToTool", name: "Pencil" },
      { "@type": "HowToTool", name: "Paper" },
      { "@type": "HowToTool", name: "Eraser" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Mark the ground and trunk",
        text: "Sketch a ground line and a light trunk that anchors the tree.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add a basic canopy shape",
        text: "Draw a soft canopy oval or cloud shape that stays light and erasable.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Grow the branches",
        text: "Add branches that get thinner as they reach outward.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Cluster leaves or needles",
        text: "Place leaf or needle clusters instead of drawing every leaf.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Deepen lines and add shadow",
        text: "Strengthen final lines and add a simple ground shadow for depth.",
      },
    ],
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
