import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { termsPage } from "@/content/static-pages";

export const metadata: Metadata = {
  title: {
    absolute: termsPage.metaTitle,
  },
  description: termsPage.metaDescription,
  alternates: {
    canonical: `/${termsPage.slug}`,
  },
};

export default function TermsAndConditionsPage() {
  return <StaticContentPage page={termsPage} />;
}
