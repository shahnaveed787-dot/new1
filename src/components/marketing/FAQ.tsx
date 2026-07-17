import { faqs } from "@/content/homepage";

export function FAQ() {
  return (
    <section id="faqs" className="scroll-mt-24 py-14 md:py-20" aria-labelledby="faqs-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
            FAQs
          </p>
          <h2 id="faqs-title" className="font-display text-3xl text-ink md:text-4xl">
            Questions families ask first
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="card-surface group p-5 open:shadow-lift"
            >
              <summary className="touch-target cursor-pointer list-none font-display text-xl text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span
                    className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-light text-green-dark transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-ink-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
