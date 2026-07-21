import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { disclaimerPage } from "@/content/static-pages";

export const metadata: Metadata = {
  title: {
    absolute: disclaimerPage.metaTitle,
  },
  description: disclaimerPage.metaDescription,
  alternates: {
    canonical: `/${disclaimerPage.slug}`,
  },
};

export default function DisclaimerPage() {
  return <StaticContentPage page={disclaimerPage} />;
}
