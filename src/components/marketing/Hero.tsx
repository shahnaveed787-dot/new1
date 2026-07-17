import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/homepage";

export function Hero() {
  return (
    <section className="bg-hero-gradient relative overflow-hidden" aria-labelledby="homepage-h1">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
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
        <div className="relative mx-auto aspect-[640/420] w-full max-w-lg">
          <Image
            src="/images/hero-tree.svg"
            alt="Colorful beginner tree drawing with a pencil beside a leafy canopy"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 512px"
          />
        </div>
      </div>
    </section>
  );
}
