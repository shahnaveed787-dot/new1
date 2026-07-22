import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { aboutPage } from "@/content/static-pages";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  path: `/${aboutPage.slug}/`,
});

export default function AboutPage() {
  return <StaticContentPage page={aboutPage} />;
}
