import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { disclaimerPage } from "@/content/static-pages";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: disclaimerPage.metaTitle,
  },
  description: disclaimerPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(`/${disclaimerPage.slug}`),
  },
};

export default function DisclaimerPage() {
  return <StaticContentPage page={disclaimerPage} />;
}
