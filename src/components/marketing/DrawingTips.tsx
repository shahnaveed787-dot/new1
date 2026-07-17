import { drawingTips } from "@/content/homepage";

export function DrawingTips() {
  return (
    <section
      id="drawing-tips"
      className="scroll-mt-24 py-14 md:py-20"
      aria-labelledby="drawing-tips-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
            Drawing Tips
          </p>
          <h2 id="drawing-tips-title" className="font-display text-3xl text-ink md:text-4xl">
            Four habits that make every tree better
          </h2>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {drawingTips.map((tip, index) => (
            <li key={tip.title} className="card-surface flex gap-4 p-6">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun font-display text-xl font-bold text-ink"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{tip.title}</h3>
                <p className="mt-2 text-ink-muted">{tip.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
