import Image from "next/image";
import { testimonials } from "@/content/homepage";

function StarRating({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;
        return (
          <svg
            key={index}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${filled ? "text-sun" : "text-bark/25"}`}
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z"
            />
          </svg>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-sky-light/50 py-14 md:py-20"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
            Love Notes
          </p>
          <h2 id="testimonials-title" className="font-display text-3xl text-ink md:text-4xl">
            What families and teachers say
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="card-surface flex flex-col p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={48}
                  height={48}
                  unoptimized
                  className="h-12 w-12 shrink-0 rounded-full bg-cream object-cover ring-2 ring-green-light"
                />
                <div className="min-w-0">
                  <p className="font-display text-lg leading-tight text-ink">
                    {item.name}
                  </p>
                  <p className="text-sm font-semibold text-green-dark">{item.role}</p>
                  <div className="mt-1">
                    <StarRating
                      rating={item.rating}
                      label={`${item.rating} out of 5 stars from ${item.name}`}
                    />
                  </div>
                </div>
              </div>
              <blockquote className="flex-1 text-lg text-ink-muted">
                “{item.quote}”
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
