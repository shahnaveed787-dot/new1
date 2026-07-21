import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", icon: "YT" },
  { label: "Pinterest", href: "https://pinterest.com", icon: "Pin" },
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
] as const;

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
          <ul className="flex gap-2" aria-label="Social media">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl text-sun">Explore</p>
          <ul className="mt-4 space-y-2">
            {exploreLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link className="hover:text-sun" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl text-sun">Important</p>
          <ul className="mt-4 space-y-2">
            {importantLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link className="hover:text-sun" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-cream/70">
        © {new Date().getFullYear()} TreeDraw. Learn trees, grow creativity.
      </div>
    </footer>
  );
}
