import { testimonials } from "@/content/homepage";

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
              <blockquote className="flex-1 text-lg text-ink-muted">
                “{item.quote}”
              </blockquote>
              <footer className="mt-5">
                <p className="font-display text-lg text-ink">{item.name}</p>
                <p className="text-sm font-semibold text-green-dark">{item.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
