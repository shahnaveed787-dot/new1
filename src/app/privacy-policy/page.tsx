import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { privacyPolicyPage } from "@/content/static-pages";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privacyPolicyPage.metaTitle,
  description: privacyPolicyPage.metaDescription,
  path: `/${privacyPolicyPage.slug}/`,
});

export default function PrivacyPolicyPage() {
  return <StaticContentPage page={privacyPolicyPage} />;
}
