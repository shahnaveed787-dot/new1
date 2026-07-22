import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { disclaimerPage } from "@/content/static-pages";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: disclaimerPage.metaTitle,
  description: disclaimerPage.metaDescription,
  path: `/${disclaimerPage.slug}/`,
});

export default function DisclaimerPage() {
  return <StaticContentPage page={disclaimerPage} />;
}
