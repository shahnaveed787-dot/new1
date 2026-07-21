import Link from "next/link";
import type { StaticPage } from "@/content/static-pages";
import { importantPages } from "@/content/static-pages";

type Props = {
  page: StaticPage;
};

export function StaticContentPage({ page }: Props) {
  return (
    <main id="main-content" className="bg-hero-gradient flex-1">
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-bold uppercase tracking-wider text-accent-teal">
          {page.updatedLabel}
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 text-lg text-ink-muted md:text-xl">{page.intro}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading} aria-labelledby={`h-${section.heading}`}>
              <h2
                id={`h-${section.heading}`}
                className="font-display text-2xl text-ink md:text-3xl"
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-3 text-lg leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <nav
          className="mt-14 rounded-card bg-white/80 p-6 shadow-soft"
          aria-label="Important pages"
        >
          <p className="font-display text-xl text-ink">Important pages</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {importantPages.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-bold text-green-dark underline decoration-sky underline-offset-2 hover:text-green"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
