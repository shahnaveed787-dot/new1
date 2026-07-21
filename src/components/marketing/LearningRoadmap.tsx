import Link from "next/link";
import { learningRoadmap } from "@/content/homepage";
import { ContentImage } from "@/components/marketing/ContentImage";

export function LearningRoadmap() {
  return (
    <section
      id="learning-path"
      className="scroll-mt-24 py-14 md:py-20"
      aria-labelledby="learning-path-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
            Beginner Learning Path
          </p>
          <h2 id="learning-path-title" className="font-display text-3xl text-ink md:text-4xl">
            Your step-by-step tree drawing roadmap
          </h2>
          <p className="mt-3 text-lg text-ink-muted">
            Tap each stage to open its practice page. Images show exactly what you
            draw at that step — from basic shapes to full color.
          </p>
        </div>

        <ol className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {learningRoadmap.map((step, index) => (
            <li key={step.id} className="relative">
              <Link
                href={step.href}
                className="card-surface lift-hover group flex h-full flex-col overflow-hidden focus-visible:outline-none"
              >
                <div className="relative aspect-square bg-gradient-to-br from-cream to-green-light">
                  <ContentImage
                    src={step.image}
                    alt={step.imageAlt}
                    sizes="(max-width: 768px) 50vw, 16vw"
                    className="transition-transform duration-200 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sun font-display text-lg font-bold text-ink shadow-soft">
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <p className="font-display text-lg text-ink">{step.label}</p>
                  <p className="text-sm text-ink-muted">{step.description}</p>
                </div>
              </Link>
              {index < learningRoadmap.length - 1 ? (
                <span
                  className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-green lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
