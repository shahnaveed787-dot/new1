/** Search only returns pages that are actually published. */

export type SearchEntry = {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  href: string;
};

export const searchDataset: SearchEntry[] = [
  {
    id: "home",
    title: "Easy and Simple Tree Drawing | Free Tutorials 2026",
    category: "Explore",
    keywords: ["home", "tree", "drawing", "tutorials", "beginner"],
    href: "/",
  },
  {
    id: "drawing-tutorials",
    title: "Drawing Tutorials",
    category: "Explore",
    keywords: ["tutorials", "lessons", "guide", "step", "draw"],
    href: "/#tree-drawing-guide",
  },
  {
    id: "about",
    title: "About",
    category: "Explore",
    keywords: ["about", "treedraw", "story"],
    href: "/about/",
  },
  {
    id: "faq",
    title: "FAQ",
    category: "Explore",
    keywords: ["faq", "questions", "help"],
    href: "/#faqs",
  },
  {
    id: "contact",
    title: "Contact",
    category: "Explore",
    keywords: ["contact", "email", "message"],
    href: "/contact/",
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    category: "Important",
    keywords: ["privacy", "policy", "data"],
    href: "/privacy-policy/",
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    category: "Important",
    keywords: ["disclaimer", "legal"],
    href: "/disclaimer/",
  },
  {
    id: "terms",
    title: "Terms and Conditions",
    category: "Important",
    keywords: ["terms", "conditions", "legal"],
    href: "/terms-and-conditions/",
  },
];
