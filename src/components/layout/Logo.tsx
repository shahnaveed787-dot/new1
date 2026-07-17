import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "horizontal" | "stacked";
  href?: string;
  tone?: "light" | "dark";
};

export function Logo({
  variant = "horizontal",
  href = "/easy-and-simple-tree-drawing",
  tone = "light",
}: LogoProps) {
  const stacked = variant === "stacked";
  const onDark = tone === "dark";

  return (
    <Link
      href={href}
      className={`touch-target inline-flex items-center gap-2 rounded-button focus-visible:outline-none ${
        stacked ? "flex-col text-center" : "flex-row"
      }`}
      aria-label="TreeDraw home"
    >
      <Image
        src="/images/logo-mark.svg"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
        priority
      />
      <span className={stacked ? "leading-tight" : ""}>
        <span
          className={`font-display text-2xl font-bold tracking-tight ${
            onDark ? "text-sun" : "text-green"
          }`}
        >
          TreeDraw
        </span>
        {stacked ? (
          <span
            className={`mt-0.5 block text-sm ${
              onDark ? "text-cream/80" : "text-ink-muted"
            }`}
          >
            Draw trees with joy
          </span>
        ) : null}
      </span>
    </Link>
  );
}
