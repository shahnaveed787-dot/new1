import { guideSections } from "@/content/homepage";
import { ContentImage } from "@/components/marketing/ContentImage";
import type { GuideSection } from "@/content/homepage";

type GuideSectionsProps = {
  sections?: GuideSection[];
  id?: string;
};

export function GuideSections({
  sections = guideSections,
  id = "tree-drawing-guide",
}: GuideSectionsProps) {
  if (sections.length === 0) return null;

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-white/60 py-14 md:py-20"
      aria-label="Tree Drawing Guide"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-16">
          {sections.map((section, index) => {
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
                  className={`hero-media relative aspect-[16/10] overflow-hidden bg-cream ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  <ContentImage
                    src={section.image}
                    alt={section.imageAlt}
                    fit="contain"
                    sizes="(max-width: 768px) 100vw, 520px"
                    quality={75}
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
