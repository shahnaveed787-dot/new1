import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChristmasTreeIllustration } from "@/components/marketing/ChristmasTreeIllustration";
import type {
  TutorialList,
  TutorialPage,
  TutorialParagraphLink,
  TutorialSection,
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

type TextLink = {
  text: string;
  href: string;
  match?: "first" | "last";
};

function findBoldRanges(
  text: string,
  phrases: readonly string[],
): Array<{ start: number; end: number }> {
  if (!phrases.length || !text) return [];

  const lower = text.toLowerCase();
  const taken = new Array<boolean>(text.length).fill(false);
  const ranges: Array<{ start: number; end: number }> = [];
  const sorted = [...phrases].sort((a, b) => b.length - a.length);

  for (const phrase of sorted) {
    const needle = phrase.toLowerCase();
    if (!needle) continue;

    let from = 0;
    while (from <= lower.length - needle.length) {
      const idx = lower.indexOf(needle, from);
      if (idx === -1) break;

      let overlaps = false;
      for (let i = idx; i < idx + needle.length; i += 1) {
        if (taken[i]) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        for (let i = idx; i < idx + needle.length; i += 1) {
          taken[i] = true;
        }
        ranges.push({ start: idx, end: idx + needle.length });
      }

      from = idx + 1;
    }
  }

  return ranges.sort((a, b) => a.start - b.start);
}

function getLinkRange(
  text: string,
  link: TextLink | undefined,
): { start: number; end: number; href: string; label: string } | null {
  if (!link?.text) return null;
  const idx =
    link.match === "last"
      ? text.lastIndexOf(link.text)
      : text.indexOf(link.text);
  if (idx === -1) return null;
  return {
    start: idx,
    end: idx + link.text.length,
    href: link.href,
    label: link.text,
  };
}

function renderTextSlice(
  fullText: string,
  start: number,
  end: number,
  linkRange: ReturnType<typeof getLinkRange>,
  keyPrefix: string,
): ReactNode {
  const slice = fullText.slice(start, end);
  if (!linkRange || linkRange.end <= start || linkRange.start >= end) {
    return slice;
  }

  const localStart = Math.max(linkRange.start, start) - start;
  const localEnd = Math.min(linkRange.end, end) - start;

  return (
    <>
      {slice.slice(0, localStart)}
      <Link
        key={`${keyPrefix}-link`}
        href={linkRange.href}
        className="font-bold text-green-dark underline decoration-sky underline-offset-2 hover:text-green"
      >
        {slice.slice(localStart, localEnd)}
      </Link>
      {slice.slice(localEnd)}
    </>
  );
}

function enrichTutorialText(
  text: string,
  boldPhrases: readonly string[] | undefined,
  link?: TextLink,
): ReactNode {
  const ranges = findBoldRanges(text, boldPhrases ?? []);
  const linkRange = getLinkRange(text, link);

  if (!ranges.length) {
    return renderTextSlice(text, 0, text.length, linkRange, "plain");
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  ranges.forEach((range, index) => {
    if (cursor < range.start) {
      parts.push(
        <span key={`t-${index}-before`}>
          {renderTextSlice(
            text,
            cursor,
            range.start,
            linkRange,
            `t-${index}`,
          )}
        </span>,
      );
    }

    parts.push(
      <strong key={`b-${index}`} className="font-bold text-ink">
        {renderTextSlice(text, range.start, range.end, linkRange, `b-${index}`)}
      </strong>,
    );
    cursor = range.end;
  });

  if (cursor < text.length) {
    parts.push(
      <span key="t-tail">
        {renderTextSlice(text, cursor, text.length, linkRange, "tail")}
      </span>,
    );
  }

  return parts;
}

function enrichParagraph(
  paragraph: string,
  paragraphIndex: number,
  links: TutorialParagraphLink[] | undefined,
  boldPhrases: readonly string[] | undefined,
): ReactNode {
  const link = links?.find((item) => item.paragraphIndex === paragraphIndex);
  return enrichTutorialText(
    paragraph,
    boldPhrases,
    link ? { text: link.text, href: link.href } : undefined,
  );
}

function renderSectionList(
  list: TutorialList,
  boldPhrases: readonly string[] | undefined,
): ReactNode {
  const ListTag = list.type === "number" ? "ol" : "ul";
  return (
    <ListTag
      className={`mt-3 space-y-2 text-lg leading-relaxed text-ink-muted ${
        list.type === "number" ? "list-decimal pl-6" : "list-disc pl-6"
      }`}
    >
      {list.items.map((item) => (
        <li key={item.slice(0, 48)}>
          {enrichTutorialText(item, boldPhrases)}
        </li>
      ))}
    </ListTag>
  );
}

function renderSectionBody(
  section: TutorialSection,
  boldPhrases: readonly string[] | undefined,
): ReactNode {
  return section.paragraphs.map((paragraph, paragraphIndex) => (
    <div key={paragraph.slice(0, 48)}>
      <p className="mt-3 text-lg leading-relaxed text-ink-muted">
        {enrichParagraph(
          paragraph,
          paragraphIndex,
          section.links,
          boldPhrases,
        )}
      </p>
      {section.lists
        ?.filter((list) => list.afterParagraph === paragraphIndex)
        .map((list) => (
          <div key={`${list.type}-${list.afterParagraph}-${list.items[0]}`}>
            {renderSectionList(list, boldPhrases)}
          </div>
        ))}
    </div>
  ));
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
            {enrichTutorialText(page.title, page.boldPhrases)}
          </h1>
          {page.slug === "christmas-tree-drawing" ? (
            <ChristmasTreeIllustration
              src={page.image}
              alt={page.imageAlt}
            />
          ) : (
            <div
              className={`hero-media relative mt-8 w-full overflow-hidden bg-cream ${
                page.slug === "palm-tree-drawing"
                  ? "aspect-[819/1024]"
                  : "aspect-[16/10]"
              }`}
            >
              <Image
                src={page.image}
                alt={page.imageAlt}
                title={page.imageAlt}
                fill
                priority={page.slug === "palm-tree-drawing"}
                className={`object-contain ${
                  page.slug === "palm-tree-drawing" ? "" : "p-4"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 92vw, 768px"
                unoptimized={/\.svg$/i.test(page.image)}
              />
            </div>
          )}
          {page.intro ? (
            <p className="mt-5 text-lg text-ink-muted md:text-xl">
              {enrichTutorialText(
                page.intro,
                page.boldPhrases,
                page.introLink,
              )}
            </p>
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
                  {enrichTutorialText(section.heading, page.boldPhrases)}
                </h2>
                {renderSectionBody(section, page.boldPhrases)}
                {section.image ? (
                  <div className="hero-media relative mt-6 aspect-[819/1024] w-full overflow-hidden bg-cream">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.heading}
                      title={section.imageAlt ?? section.heading}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 92vw, 768px"
                    />
                  </div>
                ) : null}
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
