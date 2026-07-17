import Image from "next/image";
import { guideSections } from "@/content/homepage";

export function GuideSections() {
  return (
    <section
      id="tree-drawing-guide"
      className="scroll-mt-24 bg-white/60 py-14 md:py-20"
      aria-label="Tree Drawing Guide"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
            Tree Drawing Guide
          </p>
          <p className="font-display text-3xl text-ink md:text-4xl">
            Everything you need to know about drawing trees
          </p>
          <p className="mt-3 text-lg text-ink-muted">
            Clear, quotable lessons for beginners — written so kids, parents, and
            teachers can follow along.
          </p>
        </div>

        <div className="space-y-16">
          {guideSections.map((section, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 grid items-center gap-8 md:grid-cols-2"
              >
                <div className={reverse ? "md:order-2" : undefined}>
                  <h2 className="font-display text-2xl text-ink md:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                    {section.paragraph}
                  </p>
                </div>
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-card shadow-soft ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
