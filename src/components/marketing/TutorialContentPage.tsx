import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChristmasTreeIllustration } from "@/components/marketing/ChristmasTreeIllustration";
import type {
  TutorialPage,
  TutorialParagraphLink,
} from "@/content/tutorials";
import { tutorials } from "@/content/tutorials";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  jsonLdScript,
} from "@/lib/seo";
import { permalink } from "@/lib/permalinks";

type Props = {
  page: TutorialPage;
};

function renderParagraphWithLinks(
  paragraph: string,
  paragraphIndex: number,
  links: TutorialParagraphLink[] | undefined,
): ReactNode {
  const applicable = links?.filter(
    (link) => link.paragraphIndex === paragraphIndex,
  );
  if (!applicable?.length) return paragraph;

  let nodes: ReactNode[] = [paragraph];

  for (const link of applicable) {
    const next: ReactNode[] = [];
    for (const node of nodes) {
      if (typeof node !== "string" || !node.includes(link.text)) {
        next.push(node);
        continue;
      }
      const [before, ...rest] = node.split(link.text);
      const after = rest.join(link.text);
      next.push(before);
      next.push(
        <Link
          key={`${link.href}-${link.text}-${paragraphIndex}`}
          href={link.href}
          className="font-bold text-green-dark underline decoration-sky underline-offset-2 hover:text-green"
        >
          {link.text}
        </Link>,
      );
      if (after) next.push(after);
    }
    nodes = next;
  }

  return nodes;
}

export function TutorialContentPage({ page }: Props) {
  const path = permalink(page.slug);
  const related = tutorials
    .filter(
      (tutorial) =>
        tutorial.slug !== page.slug && tutorial.status === "ready",
    )
    .slice(0, 4);

  const schemas = [
    buildWebPageSchema({
      name: page.title,
      description: page.metaDescription,
      path,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Drawing Tutorials", path: "/drawing-tutorials/" },
      { name: page.title, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: page.title,
      description: page.metaDescription,
      image: absoluteUrl(page.image),
      totalTime: "PT20M",
      step: (
        page.sections.find((section) =>
          /step|drawing a /i.test(section.heading),
        )?.paragraphs ??
        page.sections[0]?.paragraphs ?? [
          "Follow the tutorial steps on the page.",
        ]
      ).map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text,
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <main id="main-content" className="bg-hero-gradient flex-1">
        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
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
              <li>
                <Link
                  href="/drawing-tutorials/"
                  className="font-semibold text-green-dark hover:underline"
                >
                  Drawing Tutorials
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {page.title}
              </li>
            </ol>
          </nav>

          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-accent-teal">
            {page.updatedLabel} · {page.difficulty} · {page.time}
          </p>

          <h1 className="mt-6 font-display text-4xl text-ink md:text-5xl">
            {page.title}
          </h1>
          {page.slug === "christmas-tree-drawing" ? (
            <ChristmasTreeIllustration
              src={page.image}
              alt={page.imageAlt}
            />
          ) : (
            <div className="hero-media relative mt-8 aspect-[16/10] overflow-hidden bg-cream">
              <Image
                src={page.image}
                alt={page.imageAlt}
                title={page.imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 720px"
                unoptimized={/\.svg$/i.test(page.image)}
              />
            </div>
          )}
          {page.intro ? (
            <p className="mt-5 text-lg text-ink-muted md:text-xl">{page.intro}</p>
          ) : null}

          <div className="mt-10 space-y-10">
            {page.sections.map((section) => (
              <section
                key={section.heading}
                aria-labelledby={`h-${section.heading}`}
              >
                <h2
                  id={`h-${section.heading}`}
                  className="font-display text-2xl text-ink md:text-3xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-3 text-lg leading-relaxed text-ink-muted"
                  >
                    {renderParagraphWithLinks(
                      paragraph,
                      paragraphIndex,
                      section.links,
                    )}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <nav
            className="mt-14 rounded-card bg-white/80 p-6 shadow-soft"
            aria-label="More drawing tutorials"
          >
            <p className="font-display text-xl text-ink">More tutorials</p>
            <ul className="mt-3 flex flex-col gap-2">
              {related.map((tutorial) => (
                <li key={tutorial.slug}>
                  <Link
                    href={permalink(tutorial.slug)}
                    className="font-bold text-green-dark underline decoration-sky underline-offset-2 hover:text-green"
                  >
                    {tutorial.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/drawing-tutorials/"
                  className="font-bold text-green-dark underline decoration-sky underline-offset-2 hover:text-green"
                >
                  All drawing tutorials
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
