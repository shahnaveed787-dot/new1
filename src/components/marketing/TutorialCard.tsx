import Link from "next/link";
import type { TutorialCard as TutorialCardData } from "@/content/homepage";
import { ContentImage } from "@/components/marketing/ContentImage";

const badgeStyles: Record<TutorialCardData["difficulty"], string> = {
  Beginner: "bg-green-light text-green-dark",
  Easy: "bg-sky-light text-sky-dark",
  Intermediate: "bg-cream-dark text-bark-dark",
  Fun: "bg-accent-coral-light text-accent-coral-dark",
};

type Props = {
  item: TutorialCardData;
};

export function TutorialCard({ item }: Props) {
  return (
    <article className="card-surface lift-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-cream to-green-light">
        <ContentImage
          src={item.image}
          alt={item.imageAlt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[item.difficulty]}`}
          >
            {item.difficulty}
          </span>
          <span className="text-sm font-semibold text-ink-muted">{item.time}</span>
        </div>
        <h3 className="font-display text-xl text-ink">{item.title}</h3>
        <p className="flex-1 text-ink-muted">{item.description}</p>
        <Link
          href={item.href}
          className="touch-target inline-flex items-center justify-center rounded-button bg-green px-4 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-green-dark"
        >
          Start Drawing
        </Link>
      </div>
    </article>
  );
}
