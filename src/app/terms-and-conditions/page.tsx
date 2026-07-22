import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { termsPage } from "@/content/static-pages";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: termsPage.metaTitle,
  description: termsPage.metaDescription,
  path: `/${termsPage.slug}/`,
});

export default function TermsAndConditionsPage() {
  return <StaticContentPage page={termsPage} />;
}
