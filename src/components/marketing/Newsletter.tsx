import { withBasePath } from "@/lib/paths";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="scroll-mt-24 py-14 md:py-20"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-card bg-gradient-to-br from-green to-accent-teal px-6 py-10 text-white shadow-lift sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="newsletter-title" className="font-display text-3xl md:text-4xl">
              Get a free weekly tree sketch prompt
            </h2>
            <p className="mt-3 text-lg text-white/90">
              Short, cheerful practice ideas for kids and beginners — no spam, just
              drawing joy.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              action={withBasePath("/#newsletter")}
              method="get"
              toolname="join_newsletter"
              tooldescription="Join the TreeDraw newsletter for a free weekly tree sketch prompt."
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                toolparamdescription="Email address for the weekly tree sketch prompt"
                className="touch-target min-w-0 flex-1 rounded-button border-0 px-4 py-3 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-sun"
              />
              <button
                type="submit"
                className="touch-target rounded-button bg-sun px-6 py-3 font-bold text-ink transition-colors hover:bg-sun-dark"
              >
                Join the list
              </button>
            </form>
            <p className="mt-3 text-sm text-white/80">
              Newsletter signup launches soon — your email goes to our coming-soon page for now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
