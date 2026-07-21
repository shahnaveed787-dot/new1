import type { Metadata } from "next";
import { StaticContentPage } from "@/components/marketing/StaticContentPage";
import { privacyPolicyPage } from "@/content/static-pages";

export const metadata: Metadata = {
  title: {
    absolute: privacyPolicyPage.metaTitle,
  },
  description: privacyPolicyPage.metaDescription,
  alternates: {
    canonical: `/${privacyPolicyPage.slug}`,
  },
};

export default function PrivacyPolicyPage() {
  return <StaticContentPage page={privacyPolicyPage} />;
}
