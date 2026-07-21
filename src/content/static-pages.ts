/**
 * Static site pages — post-name permalink slugs (no dates/IDs).
 */

export type StaticSection = {
  heading: string;
  paragraphs: string[];
};

export type StaticPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: StaticSection[];
  updatedLabel: string;
};

export const importantPages = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
] as const;

export const aboutPage: StaticPage = {
  slug: "about",
  title: "About Us",
  metaTitle: "About TreeDraw | Easy and Simple Tree Drawing",
  metaDescription:
    "Learn about TreeDraw — a friendly educational platform for easy and simple tree drawing for kids, parents, teachers, and beginners.",
  intro:
    "TreeDraw is a colorful learning home for anyone who wants to draw trees with confidence. We build clear, step-by-step lessons that feel like a product kids and adults can grow with — not a cluttered blog feed.",
  updatedLabel: "Updated July 18, 2026",
  sections: [
    {
      heading: "Our mission",
      paragraphs: [
        "We believe drawing should feel joyful from the first pencil stroke. TreeDraw exists to make easy and simple tree drawing accessible for children ages 5–15, supportive for parents and teachers, and satisfying for hobby artists who want calm, structured practice.",
        "Every lesson starts with big shapes, then adds branches, leaves, shadows, and color — so beginners always know what to do next.",
      ],
    },
    {
      heading: "Who we make lessons for",
      paragraphs: [
        "Kids who want a win they can finish in one sitting. Parents looking for screen-light creative time. Teachers who need short, classroom-ready warm-ups. Adults returning to drawing after years away.",
        "If you can hold a pencil, you can start here. Fancy supplies are optional; curiosity is required.",
      ],
    },
    {
      heading: "How TreeDraw is different",
      paragraphs: [
        "We focus deeply on trees because they teach proportion, branching, texture, and color in one friendly subject. Mastering trees builds skills that transfer to landscapes and storytelling art later.",
        "The homepage owns the “easy and simple tree drawing” learning path. Category and tutorial pages will grow around that core with the same post-name permalink style — clean URLs like /pine-tree-drawing, never dated archive links.",
      ],
    },
  ],
};

export const contactPage = {
  slug: "contact",
  title: "Contact Us",
  metaTitle: "Contact TreeDraw | Questions & Classroom Requests",
  metaDescription:
    "Contact TreeDraw with questions about tree drawing lessons, classroom use, or feedback. We love hearing from parents, teachers, and young artists.",
  intro:
    "Have a question, a classroom idea, or a tree style you want us to teach next? Send a note — we read every message from parents, teachers, and young artists.",
  email: "hello@treedraw.studio",
  updatedLabel: "Updated July 18, 2026",
} as const;

export const privacyPolicyPage: StaticPage = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | TreeDraw",
  metaDescription:
    "Read the TreeDraw Privacy Policy to learn how we handle information on our easy and simple tree drawing educational website.",
  intro:
    "Your privacy matters. This Privacy Policy explains what information TreeDraw may collect, how we use it, and the choices you have while using our educational website.",
  updatedLabel: "Effective July 18, 2026",
  sections: [
    {
      heading: "Information we collect",
      paragraphs: [
        "If you contact us or join a future newsletter, you may share your name, email address, and message content. We use that information only to respond to you or send the updates you requested.",
        "Like most websites, our hosting provider may automatically log basic technical data such as browser type, device type, and pages visited to keep the site secure and fast. We do not use that data to build advertising profiles of children.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        "We use contact details to answer questions, improve lessons, and — only if you opt in — send occasional drawing prompts or product updates. We do not sell personal information.",
        "If analytics tools are added later, we will prefer privacy-respecting options and update this page accordingly.",
      ],
    },
    {
      heading: "Children’s privacy",
      paragraphs: [
        "TreeDraw is designed for families and classrooms. We do not knowingly collect personal information from children under 13 without a parent or guardian. If you believe a child submitted personal data to us, email hello@treedraw.studio and we will delete it promptly.",
      ],
    },
    {
      heading: "Cookies and local storage",
      paragraphs: [
        "Essential cookies or local storage may be used so the site works correctly (for example, remembering basic preferences). We do not run third-party ad trackers on the homepage today.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can request access to or deletion of personal information you have sent us by emailing hello@treedraw.studio. You may also unsubscribe from any future email list using the link in those messages.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about this Privacy Policy? Reach us at hello@treedraw.studio or visit our Contact page.",
      ],
    },
  ],
};

export const disclaimerPage: StaticPage = {
  slug: "disclaimer",
  title: "Disclaimer",
  metaTitle: "Disclaimer | TreeDraw",
  metaDescription:
    "TreeDraw disclaimer for educational tree drawing content, results, and third-party links.",
  intro:
    "TreeDraw provides educational art content for learning and enjoyment. Please read this disclaimer so expectations stay clear for families, teachers, and learners.",
  updatedLabel: "Effective July 18, 2026",
  sections: [
    {
      heading: "Educational purpose",
      paragraphs: [
        "Our tutorials, tips, and examples are for general educational and entertainment use. They are not professional art certification, therapy, or medical advice.",
        "Drawing outcomes vary by age, practice time, and materials. Progress is personal — celebrate effort as much as finished pictures.",
      ],
    },
    {
      heading: "No guarantees",
      paragraphs: [
        "We work hard to keep lessons clear and friendly, but we do not guarantee specific skill results, classroom outcomes, or uninterrupted site availability.",
        "Placeholder tutorial and category pages may appear as “coming soon” while we build the full library.",
      ],
    },
    {
      heading: "External links",
      paragraphs: [
        "TreeDraw may link to social profiles or helpful resources. We are not responsible for the content, privacy practices, or availability of third-party sites.",
      ],
    },
    {
      heading: "Adult supervision",
      paragraphs: [
        "Young children should use the site with a parent, guardian, or teacher nearby — especially when following links or submitting contact forms.",
      ],
    },
  ],
};

export const termsPage: StaticPage = {
  slug: "terms-and-conditions",
  title: "Terms and Conditions",
  metaTitle: "Terms and Conditions | TreeDraw",
  metaDescription:
    "Terms and Conditions for using TreeDraw’s easy and simple tree drawing website and educational materials.",
  intro:
    "Welcome to TreeDraw. By using this website, you agree to these Terms and Conditions. If you do not agree, please do not use the site.",
  updatedLabel: "Effective July 18, 2026",
  sections: [
    {
      heading: "Using TreeDraw",
      paragraphs: [
        "You may browse lessons and practice drawings for personal, family, and classroom learning. Please use the site respectfully and lawfully.",
        "Do not attempt to disrupt the service, scrape content at abusive rates, or misuse contact forms for spam.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "Unless otherwise noted, TreeDraw owns the site design, branding, original illustrations, and written lesson copy. You may practice from the lessons and share your own student artwork.",
        "Please do not copy our lesson text or graphics to republish as your own course, product, or website without written permission.",
      ],
    },
    {
      heading: "Classroom and personal use",
      paragraphs: [
        "Teachers and parents may use TreeDraw activities with students and children for non-commercial educational purposes. Redistributing our full lesson library as a paid pack requires permission.",
      ],
    },
    {
      heading: "User messages",
      paragraphs: [
        "If you send feedback or ideas through our Contact page, you grant TreeDraw permission to use that feedback to improve the product. We will not publish a child’s name or private details without consent from a parent or guardian.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "TreeDraw is provided “as is.” To the fullest extent allowed by law, we are not liable for indirect or incidental damages arising from your use of the site or reliance on any lesson.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update these Terms and Conditions as TreeDraw grows. The “Effective” date at the top of this page will change when we do. Continued use after updates means you accept the revised terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about these terms? Email hello@treedraw.studio or visit /contact.",
      ],
    },
  ],
};
