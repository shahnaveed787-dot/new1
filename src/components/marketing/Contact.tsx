import { withBasePath } from "@/lib/paths";

type ContactProps = {
  /** "section" keeps the homepage H2; "page" omits it because the Contact route already has an H1. */
  variant?: "section" | "page";
};

export function Contact({ variant = "section" }: ContactProps) {
  const isPage = variant === "page";

  return (
    <section
      id="contact"
      className={`scroll-mt-24 py-14 md:py-20 ${isPage ? "" : "bg-cream-dark/60"}`}
      aria-labelledby={isPage ? undefined : "contact-title"}
      aria-label={isPage ? "Contact form" : undefined}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          {isPage ? null : (
            <>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
                Contact
              </p>
              <h2 id="contact-title" className="font-display text-3xl text-ink md:text-4xl">
                Say hello — we love tree questions
              </h2>
            </>
          )}
          <p className={`text-lg text-ink-muted ${isPage ? "" : "mt-4"}`}>
            Parents, teachers, and young artists: tell us what you want to learn next.
            We read every message.
          </p>
          <ul className="mt-6 space-y-2 text-ink">
            <li>
              <strong className="text-green-dark">Email:</strong>{" "}
              <a
                className="underline decoration-sky underline-offset-2"
                href="mailto:hello@treedraw.studio"
              >
                hello@treedraw.studio
              </a>
            </li>
            <li>
              <strong className="text-green-dark">For schools:</strong> lesson packs and
              classroom tips coming soon.
            </li>
          </ul>
        </div>
        <form
          className="card-surface grid gap-4 p-6"
          action={withBasePath("/coming-soon")}
          method="get"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-ink">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="touch-target w-full rounded-button border-2 border-green/15 bg-cream px-4 py-2.5 text-ink focus:border-sky focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-ink">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="touch-target w-full rounded-button border-2 border-green/15 bg-cream px-4 py-2.5 text-ink focus:border-sky focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-ink">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full rounded-button border-2 border-green/15 bg-cream px-4 py-2.5 text-ink focus:border-sky focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="touch-target rounded-button bg-green px-6 py-3 font-bold text-white transition-colors hover:bg-green-dark"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
