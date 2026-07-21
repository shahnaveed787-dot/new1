import type { FaqItem } from "@/content/homepage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://treedraw.studio";

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
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TreeDraw",
    url: absoluteUrl("/"),
    description:
      "Premium educational platform for easy and simple tree drawing tutorials for kids, beginners, parents, and teachers.",
    logo: absoluteUrl("/images/perf/v2/logo.webp"),
  };
}

export function buildArticleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  sectionHeadings?: string[];
}) {
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
    datePublished: input.datePublished ?? "2026-07-18",
    dateModified: input.dateModified ?? "2026-07-18",
    articleSection: input.sectionHeadings,
    inLanguage: "en",
  };
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

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TreeDraw",
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/easy-and-simple-tree-drawing/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
