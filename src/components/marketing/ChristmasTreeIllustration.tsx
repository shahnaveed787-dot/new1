import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

/** Approximate fairy-light spots over the tree foliage (percent of media box). */
const LIGHTS: Array<{ top: string; left: string; delay: string; size?: "sm" | "md" }> = [
  { top: "13%", left: "50%", delay: "0s" },
  { top: "18%", left: "44%", delay: "0.35s", size: "sm" },
  { top: "19%", left: "56%", delay: "0.7s", size: "sm" },
  { top: "26%", left: "40%", delay: "0.15s" },
  { top: "25%", left: "52%", delay: "0.9s" },
  { top: "28%", left: "61%", delay: "0.45s", size: "sm" },
  { top: "34%", left: "36%", delay: "1.1s" },
  { top: "33%", left: "47%", delay: "0.2s", size: "sm" },
  { top: "35%", left: "58%", delay: "0.6s" },
  { top: "41%", left: "42%", delay: "0.8s" },
  { top: "40%", left: "54%", delay: "0.1s", size: "sm" },
  { top: "43%", left: "64%", delay: "1.3s" },
  { top: "48%", left: "34%", delay: "0.55s", size: "sm" },
  { top: "49%", left: "48%", delay: "0.95s" },
  { top: "47%", left: "60%", delay: "0.3s" },
  { top: "55%", left: "38%", delay: "1.2s" },
  { top: "54%", left: "52%", delay: "0.4s", size: "sm" },
  { top: "56%", left: "66%", delay: "0.75s" },
  { top: "62%", left: "44%", delay: "0.25s" },
  { top: "63%", left: "57%", delay: "1.05s", size: "sm" },
  { top: "68%", left: "40%", delay: "0.5s", size: "sm" },
  { top: "69%", left: "53%", delay: "0.85s" },
];

/**
 * Christmas tree art with CSS-only light twinkle.
 * Full width of the article column; scales down cleanly on phones.
 */
export function ChristmasTreeIllustration({ src, alt }: Props) {
  return (
    <div className="hero-media xmas-tree-media relative mt-8 aspect-[682/1024] w-full overflow-hidden bg-[#f5efe4]">
      <Image
        src={src}
        alt={alt}
        title={alt}
        fill
        priority
        className="object-contain"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 92vw, 768px"
      />
      <div className="xmas-lights" aria-hidden="true">
        {LIGHTS.map((light) => (
          <span
            key={`${light.top}-${light.left}`}
            className={`xmas-light${light.size === "sm" ? " xmas-light--sm" : ""}`}
            style={{
              top: light.top,
              left: light.left,
              animationDelay: light.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
