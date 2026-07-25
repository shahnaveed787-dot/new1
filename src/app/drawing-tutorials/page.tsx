import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tutorials } from "@/content/tutorials";
import { buildPageMetadata } from "@/lib/page-metadata";
import { permalink } from "@/lib/permalinks";
import {
  buildBreadcrumbSchema,
  buildWebPageSchema,
  jsonLdScript,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Drawing Tutorials | Easy Tree Drawing Lessons",
  description:
    "Browse easy tree drawing tutorials — Christmas, palm, sakura, willow, pine, oak, seasonal, fruit, spooky trees, and more beginner lessons.",
  path: "/drawing-tutorials/",
});

export default function DrawingTutorialsIndexPage() {
  const schemas = [
    buildWebPageSchema({
      name: "Drawing Tutorials",
      description:
        "Browse easy tree drawing tutorials for beginners, kids, and hobby artists.",
      path: "/drawing-tutorials/",
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Drawing Tutorials", path: "/drawing-tutorials/" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(schemas) }}
      />
      <main id="main-content" className="bg-hero-gradient flex-1">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
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
                Drawing Tutorials
              </li>
            </ol>
          </nav>

          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-accent-teal">
            Tree drawing lessons
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Drawing Tutorials
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted md:text-xl">
            Pick a tree type and follow clear steps — from Christmas trees and
            palms to sakura, oaks, seasonal trees, and full nature scenes.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => {
              const isReady = tutorial.status === "ready";
              return (
                <li key={tutorial.slug}>
                  <Link
                    href={permalink(tutorial.slug)}
                    className="card-surface flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lift"
                  >
                    <div className="relative aspect-[16/10] bg-cream">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.imageAlt}
                        title={tutorial.imageAlt}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized={/\.svg$/i.test(tutorial.image)}
                      />
                      {!isReady ? (
                        <span className="absolute right-3 top-3 rounded-button bg-ink/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                          Coming soon
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent-teal">
                        {isReady
                          ? `${tutorial.difficulty} · ${tutorial.time}`
                          : "Coming soon"}
                      </p>
                      <h2 className="font-display text-xl text-ink">
                        {tutorial.title}
                      </h2>
                      <p className="text-ink-muted">
                        {isReady
                          ? tutorial.intro ||
                            `${tutorial.sections[0]?.paragraphs[0]?.slice(0, 140) ?? ""}…`
                          : "This lesson is on our drawing easel. Open it for a coming-soon note, or start with the Christmas tree tutorial."}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
