import dynamic from "next/dynamic";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { navLinks } from "@/content/homepage";

const SearchBar = dynamic(
  () =>
    import("@/components/layout/SearchBar").then((mod) => mod.SearchBar),
  {
    loading: () => (
      <div
        className="h-12 w-full max-w-xl animate-pulse rounded-pill bg-white/80"
        aria-hidden="true"
      />
    ),
  },
);

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-green/20 bg-cream/95 supports-[backdrop-filter]:bg-cream/90 supports-[backdrop-filter]:backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 pt-2 sm:px-6 sm:pt-3">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex flex-wrap items-center justify-end gap-1">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="touch-target inline-flex items-center rounded-button px-3 py-2 text-sm font-bold text-ink transition-colors hover:bg-green-light hover:text-green-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Lightweight mobile nav — horizontal scroll contained, no page overflow */}
        <nav aria-label="Mobile primary" className="mt-2 lg:hidden">
          <ul className="-mx-1 flex gap-2 overflow-x-auto overscroll-x-contain px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <li key={`m-${link.href}-${link.label}`} className="shrink-0">
                <Link
                  href={link.href}
                  className="touch-target inline-flex items-center rounded-pill bg-white px-3 py-2 text-sm font-bold text-ink shadow-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-b border-green" aria-hidden="true" />

        <div className="py-2.5 sm:py-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
