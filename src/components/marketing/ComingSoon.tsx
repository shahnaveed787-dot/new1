import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

type ComingSoonProps = {
  title?: string;
  description?: string;
};

export function ComingSoon({
  title = "Coming soon",
  description = "This page is on our drawing easel. Check back soon — or return home to keep practicing easy and simple tree drawing.",
}: ComingSoonProps) {
  return (
    <main className="bg-hero-gradient flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <Logo variant="stacked" />
      <h1 className="mt-8 font-display text-4xl text-ink md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-lg text-lg text-ink-muted">{description}</p>
      <Link
        href="/"
        className="touch-target mt-8 inline-flex items-center justify-center rounded-button bg-accent-coral px-6 py-3 font-bold text-white hover:bg-accent-coral-dark"
      >
        Back to homepage
      </Link>
    </main>
  );
}
