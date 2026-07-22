import type { Metadata } from "next";
import { Contact } from "@/components/marketing/Contact";
import { contactPage } from "@/content/static-pages";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: contactPage.metaTitle,
  },
  description: contactPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(`/${contactPage.slug}`),
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-hero-gradient flex-1">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-20">
        <p className="text-sm font-bold uppercase tracking-wider text-accent-teal">
          {contactPage.updatedLabel}
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          {contactPage.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted md:text-xl">
          {contactPage.intro}
        </p>
      </div>
      <Contact variant="page" />
    </main>
  );
}
