import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "horizontal" | "stacked";
  href?: string;
  tone?: "light" | "dark";
};

export function Logo({
  variant = "horizontal",
  href = "/easy-and-simple-tree-drawing/",
  tone = "light",
}: LogoProps) {
  const stacked = variant === "stacked";
  const onDark = tone === "dark";

  return (
    <Link
      href={href}
      className={`touch-target inline-flex items-center focus-visible:outline-none ${
        stacked ? "flex-col" : "flex-row"
      }`}
      aria-label="Tree Drawing home"
    >
      <Image
        src="/images/perf/v2/logo.webp"
        alt="Tree Drawing — Draw Nature, Inspire Life"
        width={512}
        height={405}
        className={`${
          stacked
            ? "h-24 w-auto max-w-[200px] object-contain"
            : "h-14 w-auto max-w-[160px] object-contain sm:h-16 sm:max-w-[200px] md:h-20 md:max-w-[240px]"
        }${onDark ? " brightness-0 invert" : ""}`}
        sizes="(max-width: 640px) 140px, 200px"
        quality={75}
      />
    </Link>
  );
}
