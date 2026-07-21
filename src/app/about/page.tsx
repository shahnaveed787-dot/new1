import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { aboutPage } from "@/content/static-pages";

export const metadata: Metadata = {
  title: {
    absolute: aboutPage.metaTitle,
  },
  description: aboutPage.metaDescription,
  alternates: {
    canonical: `/${aboutPage.slug}`,
  },
};

export default function AboutPage() {
  return <StaticContentPage page={aboutPage} />;
}
