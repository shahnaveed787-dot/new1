import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { drawingCategories, popularDrawings } from "@/content/homepage";

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", icon: "YT" },
  { label: "Pinterest", href: "https://pinterest.com", icon: "Pin" },
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-bark/15 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
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
            <li>
              <Link className="hover:text-sun" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-sun" href="/easy-and-simple-tree-drawing#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-sun" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-sun" href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:text-sun" href="/sitemap.xml">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-xl text-sun">Categories</p>
          <ul className="mt-4 space-y-2">
            {drawingCategories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link className="hover:text-sun" href={cat.href}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl text-sun">Popular Tutorials</p>
          <ul className="mt-4 space-y-2">
            {popularDrawings.map((item) => (
              <li key={item.slug}>
                <Link className="hover:text-sun" href={item.href}>
                  {item.title}
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
