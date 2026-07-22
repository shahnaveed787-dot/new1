import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { aboutPage } from "@/content/static-pages";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: aboutPage.metaTitle,
  },
  description: aboutPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(`/${aboutPage.slug}`),
  },
};

export default function AboutPage() {
  return <StaticContentPage page={aboutPage} />;
}
