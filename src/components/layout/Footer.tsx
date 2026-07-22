import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Drawing Tutorials", href: "/#tree-drawing-guide" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/#faqs" },
  { label: "Contact", href: "/contact/" },
] as const;

const importantLinks = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-bark/15 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="space-y-4">
          <Logo variant="stacked" tone="dark" />
          <p className="text-cream/80">
            Easy and simple tree drawing lessons for kids, parents, teachers, and
            curious beginners.
          </p>
          <p className="text-sm text-cream/60">
            Social profiles coming soon — follow updates via our{" "}
            <Link
              href="/contact/"
              className="font-bold text-cream underline underline-offset-2 hover:text-white"
            >
              Contact page
            </Link>
            .
          </p>
        </div>
        <div>
          <p className="font-display text-xl text-cream">Explore</p>
          <ul className="mt-4 space-y-2">
            {exploreLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="text-cream/85 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xl text-cream">Important</p>
          <ul className="mt-4 space-y-2">
            {importantLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/85 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-cream/60 sm:px-6">
        © {new Date().getFullYear()} TreeDraw. All rights reserved.
      </div>
    </footer>
  );
}
