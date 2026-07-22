import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/homepage";

export function Hero() {
  return (
    <section className="bg-hero-gradient relative overflow-hidden" aria-labelledby="homepage-h1">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <p className="mb-3 inline-flex rounded-pill bg-white/80 px-3 py-1 text-sm font-bold text-green-dark shadow-soft">
            {heroContent.subheading}
          </p>
          <h1
            id="homepage-h1"
            className="font-display text-balance text-4xl text-ink sm:text-5xl md:text-6xl"
          >
            {heroContent.h1}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted md:text-xl">
            {heroContent.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={heroContent.primaryCta.href}
              className="touch-target inline-flex items-center justify-center rounded-button bg-accent-coral px-6 py-3 text-center text-base font-bold text-white shadow-soft transition-colors hover:bg-accent-coral-dark"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="touch-target inline-flex items-center justify-center rounded-button border-2 border-green bg-white px-6 py-3 text-center text-base font-bold text-green-dark transition-colors hover:bg-green-light"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="hero-media overflow-hidden p-3 sm:p-4">
            <Image
              src="/images/perf/v2/hero.webp"
              alt="easy tree drawing"
              title="easy tree drawing"
              width={720}
              height={640}
              priority
              fetchPriority="high"
              // Pre-flattened opaque WebP (~40KB) — skip optimizer for fastest LCP
              unoptimized
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 92vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
