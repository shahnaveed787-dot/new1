import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { SearchBar } from "@/components/layout/SearchBar";
import { navLinks } from "@/content/homepage";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-green/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
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

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SearchBar />
          <nav aria-label="Mobile primary" className="lg:hidden">
            <ul className="flex gap-2 overflow-x-auto pb-1">
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
        </div>
      </div>
    </header>
  );
}
