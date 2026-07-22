import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/marketing/Contact";
import { contactPage } from "@/content/static-pages";
import { buildPageMetadata } from "@/lib/page-metadata";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  jsonLdScript,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
  path: `/${contactPage.slug}/`,
});

export default function ContactPage() {
  const schemas = [
    buildWebPageSchema({
      name: contactPage.title,
      description: contactPage.metaDescription,
      path: `/${contactPage.slug}/`,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: `/${contactPage.slug}/` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <main id="main-content" className="bg-hero-gradient flex-1">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-20">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-green-dark hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Contact
              </li>
            </ol>
          </nav>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-accent-teal">
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
    </>
  );
}
