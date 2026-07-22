/**
 * Homepage content data — keep copy reviewable independent of components.
 * H1 keyword cluster "Easy and Simple Tree Drawing" is owned solely by this page.
 */

export const siteConfig = {
  name: "TreeDraw",
  tagline: "Learn to draw trees, one friendly step at a time",
  url: "https://treedrawing.us",
  locale: "en",
} as const;

export const homepageMeta = {
  title: "Easy and Simple Tree Drawing Tutorial | Beginner to Pro",
  description:
    "Learn tree drawing with easy step-by-step tutorials. Master tree sketch drawing and tree pencil drawing techniques to create realistic trees for all levels.",
  /** Domain root is the site home (not a postname slug). */
  canonicalPath: "/",
} as const;

export const heroContent = {
  h1: "Easy and Simple Tree Drawing",
  subheading: "For kids ages 5–15, parents, teachers, and hobby artists",
  intro:
    "Welcome to TreeDraw — a friendly place to learn easy and simple drawing tree at your own pace. Whether you are picking up a pencil for the first time or helping a child discover art, our lessons keep drawing tree simple, clear, and fun. Start with basic shapes, grow your skills branch by branch, and finish with trees you will be proud to show. No fancy tools required — just curiosity, a pencil, and a little practice each day.",
  primaryCta: {
    label: "Explore Drawing Tutorials",
    href: "/#tree-drawing-guide",
  },
  secondaryCta: {
    label: "Start Learning Path",
    href: "/#learning-path",
  },
} as const;

export type Difficulty = "Beginner" | "Easy" | "Intermediate" | "Fun";

export type TutorialCard = {
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  time: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type CategoryCard = {
  slug: string;
  name: string;
  description: string;
  difficulty: Difficulty;
  time: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraph: string;
  image: string;
  imageAlt: string;
};

export type RoadmapStep = {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const featuredTutorials: TutorialCard[] = [
  {
    slug: "how-to-draw-a-simple-oak-tree",
    title: "How to Draw a Simple Oak Tree",
    description: "Round canopy, sturdy trunk — perfect first finished tree.",
    difficulty: "Beginner",
    time: "15 min",
    image: "/images/tutorials/oak-tree.svg",
    imageAlt: "Simple oak tree drawing with a round leafy canopy and thick trunk",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "pine-tree-drawing-for-beginners",
    title: "Pine Tree Drawing for Beginners",
    description: "Stack triangles to build a classic evergreen in minutes.",
    difficulty: "Easy",
    time: "12 min",
    image: "/images/tutorials/pine-tree.svg",
    imageAlt: "Beginner pine tree drawing made from stacked triangle layers",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "cartoon-apple-tree-drawing",
    title: "Cartoon Apple Tree Drawing",
    description: "A cheerful fruit tree with bold shapes and bright apples.",
    difficulty: "Fun",
    time: "20 min",
    image: "/images/tutorials/apple-tree.svg",
    imageAlt: "Cartoon apple tree drawing with round canopy and red apples",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "winter-bare-tree-sketch",
    title: "Winter Bare Tree Sketch",
    description: "Practice branching patterns without leaves in the way.",
    difficulty: "Easy",
    time: "18 min",
    image: "/images/tutorials/bare-tree.svg",
    imageAlt: "Winter bare tree sketch showing clear trunk and branch structure",
    href: "/#tree-drawing-guide",
  },
];

export const popularDrawings: TutorialCard[] = [
  {
    slug: "cherry-blossom-tree-drawing",
    title: "Cherry Blossom Tree Drawing",
    description: "Soft pink blooms and elegant branching for spring vibes.",
    difficulty: "Intermediate",
    time: "25 min",
    image: "/images/categories/cherry-blossom.svg",
    imageAlt: "Cherry blossom tree drawing with pink flower clusters",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "autumn-tree-drawing",
    title: "Autumn Tree Drawing",
    description: "Warm oranges and reds for a glowing fall canopy.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/categories/autumn-tree.svg",
    imageAlt: "Autumn tree drawing with orange and red fall foliage",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "dead-tree-drawing",
    title: "Dead Tree Drawing",
    description: "Twisty limbs and texture for dramatic spooky scenes.",
    difficulty: "Intermediate",
    time: "22 min",
    image: "/images/categories/dead-tree.svg",
    imageAlt: "Dead tree drawing with twisted bare branches",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "fruit-tree-drawing",
    title: "Fruit Tree Drawing",
    description: "Oranges, apples, or lemons — add fruit with simple ovals.",
    difficulty: "Easy",
    time: "18 min",
    image: "/images/categories/fruit-tree.svg",
    imageAlt: "Fruit tree drawing with colorful round fruits in the canopy",
    href: "/#tree-drawing-guide",
  },
];

export const drawingCategories: CategoryCard[] = [
  {
    slug: "cherry-blossom-tree-drawing",
    name: "Cherry Blossom Tree Drawing",
    description: "Delicate blooms and airy branches for spring scenes.",
    difficulty: "Intermediate",
    time: "25 min",
    image: "/images/categories/cherry-blossom.svg",
    imageAlt: "Cherry blossom category thumbnail showing pink blossoms on branches",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "pine-tree-drawing",
    name: "Pine Tree Drawing",
    description: "Evergreen layers from triangle stacks to needle details.",
    difficulty: "Beginner",
    time: "15 min",
    image: "/images/categories/pine-tree.svg",
    imageAlt: "Pine tree category thumbnail with layered evergreen shape",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "autumn-tree-drawing",
    name: "Autumn Tree Drawing",
    description: "Fall color palettes and wind-tossed leaf clusters.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/categories/autumn-tree.svg",
    imageAlt: "Autumn tree category thumbnail with warm fall colors",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "dead-tree-drawing",
    name: "Dead Tree Drawing",
    description: "Bare silhouettes, knobby bark, and moody moods.",
    difficulty: "Intermediate",
    time: "22 min",
    image: "/images/categories/dead-tree.svg",
    imageAlt: "Dead tree category thumbnail with stark bare limbs",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "tree-parts",
    name: "Tree Parts",
    description: "Roots, trunk, bark, branches, and leaves up close.",
    difficulty: "Beginner",
    time: "10 min",
    image: "/images/categories/tree-parts.svg",
    imageAlt: "Tree parts category thumbnail labeling trunk, branch, and leaf",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "fruit-tree-drawing",
    name: "Fruit Tree Drawing",
    description: "Orchard trees loaded with simple, colorful fruit.",
    difficulty: "Easy",
    time: "18 min",
    image: "/images/categories/fruit-tree.svg",
    imageAlt: "Fruit tree category thumbnail with apples in the canopy",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "seasonal-trees",
    name: "Seasonal Trees",
    description: "One tree through spring, summer, fall, and winter.",
    difficulty: "Easy",
    time: "30 min",
    image: "/images/categories/seasonal-trees.svg",
    imageAlt: "Seasonal trees category thumbnail showing four seasonal tree stages",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "nature-trees",
    name: "Nature Trees",
    description: "Forest scenes, wild shapes, and outdoor sketching tips.",
    difficulty: "Beginner",
    time: "20 min",
    image: "/images/categories/nature-trees.svg",
    imageAlt: "Nature trees category thumbnail of a forest tree cluster",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "tree-sizes",
    name: "Tree Sizes",
    description: "Tiny saplings to towering giants — scale made simple.",
    difficulty: "Beginner",
    time: "12 min",
    image: "/images/categories/tree-sizes.svg",
    imageAlt: "Tree sizes category thumbnail comparing small, medium, and large trees",
    href: "/#tree-drawing-guide",
  },
];

export const latestTutorials: TutorialCard[] = [
  {
    slug: "draw-a-willow-tree",
    title: "Draw a Willow Tree",
    description: "Long flowing branches that look like gentle curtains.",
    difficulty: "Intermediate",
    time: "24 min",
    image: "/images/tutorials/willow-tree.svg",
    imageAlt: "Willow tree drawing with long hanging branches",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "rainbow-tree-for-kids",
    title: "Rainbow Tree for Kids",
    description: "Colorful canopy rings that make practice feel like play.",
    difficulty: "Fun",
    time: "15 min",
    image: "/images/tutorials/rainbow-tree.svg",
    imageAlt: "Rainbow tree drawing with multicolored canopy rings for kids",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "palm-tree-drawing",
    title: "Palm Tree Drawing",
    description: "Curvy trunk and fan leaves for a sunny beach scene.",
    difficulty: "Easy",
    time: "16 min",
    image: "/images/tutorials/palm-tree.svg",
    imageAlt: "Palm tree drawing with curved trunk and fan-shaped leaves",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "maple-leaf-close-up",
    title: "Maple Leaf Close-Up",
    description: "Learn leaf veins before you tackle a full maple tree.",
    difficulty: "Beginner",
    time: "10 min",
    image: "/images/tutorials/maple-leaf.svg",
    imageAlt: "Maple leaf close-up drawing showing veins and pointed lobes",
    href: "/#tree-drawing-guide",
  },
];

export const studentFavorites: TutorialCard[] = [
  {
    slug: "smiling-cartoon-tree",
    title: "Smiling Cartoon Tree",
    description: "Add a friendly face — kids love this quick win.",
    difficulty: "Fun",
    time: "12 min",
    image: "/images/tutorials/cartoon-tree.svg",
    imageAlt: "Smiling cartoon tree drawing with a friendly face on the trunk",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "treehouse-adventure",
    title: "Treehouse Adventure",
    description: "A cozy treehouse nestled in strong branches.",
    difficulty: "Intermediate",
    time: "30 min",
    image: "/images/perf/v2/guides/tree-house.webp",
    imageAlt: "Treehouse adventure drawing with a wooden house in the branches",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "nighttime-glow-tree",
    title: "Nighttime Glow Tree",
    description: "Stars, soft shadows, and a tree lit by moonlight.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/tutorials/night-tree.svg",
    imageAlt: "Nighttime glow tree drawing under a moon and stars",
    href: "/#tree-drawing-guide",
  },
  {
    slug: "family-tree-poster",
    title: "Family Tree Poster",
    description: "Turn relatives into a beautiful branching diagram.",
    difficulty: "Easy",
    time: "25 min",
    image: "/images/perf/v2/guides/family-tree.webp",
    imageAlt: "Family tree poster drawing with named branches for relatives",
    href: "/#tree-drawing-guide",
  },
];

export const learningRoadmap: RoadmapStep[] = [
  {
    id: "basic-shapes",
    label: "Basic Shapes",
    description: "Circles, ovals, and lines become your tree blueprint.",
    image: "/images/roadmap/basic-shapes.jpg",
    imageAlt: "Basic shapes stage: circle canopy and rectangle trunk outlines",
  },
  {
    id: "trunk",
    label: "Trunk",
    description: "Draw a strong trunk that anchors the whole tree.",
    image: "/images/roadmap/trunk.jpg",
    imageAlt: "Trunk stage: thick tree trunk in progress without full canopy",
  },
  {
    id: "branches",
    label: "Branches",
    description: "Split thicker limbs into thinner natural forks.",
    image: "/images/roadmap/branches.jpg",
    imageAlt: "Branches stage: bare trunk with forking branches being drawn",
  },
  {
    id: "leaves",
    label: "Leaves",
    description: "Cluster leaf shapes or soft cloud canopies.",
    image: "/images/roadmap/leaves.jpg",
    imageAlt: "Leaves stage: tree with leafy clusters being added to branches",
  },
  {
    id: "shadows",
    label: "Shadows",
    description: "Add light and shade so the tree feels three-dimensional.",
    image: "/images/roadmap/shadows.jpg",
    imageAlt: "Shadows stage: tree drawing with shading on trunk and canopy",
  },
  {
    id: "color",
    label: "Color",
    description: "Bring your tree to life with greens, browns, and accents.",
    image: "/images/roadmap/color.jpg",
    imageAlt: "Color stage: finished tree with green leaves and brown trunk colored in",
  },
];

export const drawingTips = [
  {
    title: "Hold the pencil lightly",
    body: "A soft grip keeps lines loose and easy to erase. Squeeze too hard and your tree will look stiff before you even add leaves.",
  },
  {
    title: "Start with simple shapes",
    body: "Every tree begins as circles, ovals, and lines. Build the big shapes first, then refine — never start with tiny details.",
  },
  {
    title: "Draw lightly before details",
    body: "Sketch pale guidelines for the trunk and canopy. When the structure looks right, darken the final lines and add bark or leaves.",
  },
  {
    title: "Practice every day",
    body: "Ten focused minutes beats one long frustrated session. Small daily sketches train your eye faster than occasional marathons.",
  },
] as const;

/** Shown first after the hero: step-by-step lesson. */
export const guideSectionStepByStep: GuideSection = {
  id: "how-to-draw-a-tree-step-by-step",
  heading: "How to Draw a Tree Step by Step",
  paragraph:
    "Learning drawing of a tree step by step keeps beginners from feeling overwhelmed. First, mark the ground and sketch a trunk. Second, add a basic canopy shape — this basic drawing of a tree stage should stay light and erasable. Third, grow branches that get thinner as they reach outward. Fourth, add leaves or needles in clusters. Finally, deepen lines and add a simple shadow. This sequence works for the drawing of a tree of almost any kind, from oaks to pines. Whether you want a quick drawing of a tree for a school project or a careful drawing of a tree for your sketchbook, the same steps apply: structure first, details later, color last if you want it.",
  image: "/images/perf/v2/guides/step-by-step.webp",
  imageAlt: "simple tree drawing",
};

/** Shown with the step-by-step block, right after the learning roadmap. */
export const guideSectionWithColor: GuideSection = {
  id: "tree-drawing-with-color",
  heading: "Tree Drawing with Color",
  paragraph:
    "Color turns a line tree into a living scene. Start with a light base for foliage — yellow-green in sun, deeper green in shade — then layer richer hues so the canopy feels full. Trunks are rarely flat brown; try warm bark with cool gray shadows. Colored pencils, markers, or watercolor washes all work if you keep layers thin at first. Leave tiny speckles of paper white for sparkle in the leaves. Background colors matter too: a soft blue sky or pale sunset makes greens pop. Color is a chance to experiment — autumn oranges, spring pinks, or fantasy purples are all fair game once the drawing structure is solid.",
  image: "/images/perf/v2/guides/color-tree.webp",
  imageAlt: "Tree drawing with color showing layered green foliage and warm brown trunk",
};

/** Remaining guides after the hero featured block. */
export const guideSectionsRemaining: GuideSection[] = [
  {
    id: "what-is-tree-drawing",
    heading: "What is Tree Drawing?",
    paragraph:
      "Tree drawing is the skill of turning trunks, branches, and leaves into pictures on paper. It teaches you to notice how real trees grow — thick at the base, thinner toward the tips — and to translate that into simple marks anyone can make. For children, it builds hand control, patience, and confidence. For beginners of any age, trees are a perfect subject because you can start with a stick and a cloud shape, then slowly add bark, shadows, and color. Tree drawing is both art practice and nature study: you learn to look carefully, simplify what you see, and enjoy the process as much as the finished picture.",
    image: "/images/perf/v2/guides/what-is-tree-drawing.webp",
    imageAlt: "tree drawing",
  },
  {
    id: "tree-sketch-drawing",
    heading: "Tree Sketch Drawing",
    paragraph:
      "A sketch tree drawing captures the idea of a tree quickly, without worrying about perfect detail. Use loose lines for a tree line drawing that shows the silhouette first, then decide where thicker limbs should sit. Many artists begin with a tree outline drawing — a clean outer shape for the canopy and trunk — before filling in texture. Sketching trains your eye to see gesture: the lean of a trunk, the reach of a branch, the fluffy edge of leaves. Keep your pencil moving, erase freely, and treat each sketch as practice, not a final poster. Over time, your sketches become the foundation for polished drawings.",
    image: "/images/perf/v2/guides/tree-sketch.webp",
    imageAlt: "drawing of tree",
  },
  {
    id: "pencil-tree-drawing",
    heading: "Pencil Tree Drawing",
    paragraph:
      "A tree pencil drawing is one of the most approachable ways to learn shading and texture. With a single graphite pencil you can practice tree drawing with pencil from pale guidelines to darker final strokes. Start a pencil tree drawing by blocking the trunk and canopy lightly, then layer soft strokes for bark and leaf clusters. Vary pressure: light for distant leaves, firmer for the shadowed side of the trunk. You do not need expensive tools — an HB or 2B pencil and a kneaded eraser are enough. Pencil work also teaches patience; every drawing tree with pencil improves when you build values slowly instead of pressing hard on the first pass.",
    image: "/images/perf/v2/guides/pencil-tree.webp",
    imageAlt: "Pencil tree drawing demonstrating graphite shading on trunk and foliage",
  },
  {
    id: "realistic-detailed-tree-drawing",
    heading: "Realistic & Detailed Tree Drawing",
    paragraph:
      "Realistic tree drawing focuses on how light hits bark, how branches overlap, and how leaf masses form soft clumps rather than individual stickers. Begin with accurate proportions: the trunk should feel sturdy enough to support the canopy. Add bark with short, broken vertical marks, and suggest clusters of leaves instead of drawing every leaf. Study a real tree or a clear photo and notice negative spaces — the sky holes between branches. Detail comes last: a few sharp twigs, a root flare at the ground, and careful shadows under the canopy. Realistic work is slower, but each careful observation makes your simpler drawings stronger too.",
    image: "/images/perf/v2/guides/realistic-tree.webp",
    imageAlt: "Realistic detailed tree drawing with bark texture and overlapping branches",
  },
  {
    id: "cartoon-tree-drawing",
    heading: "Cartoon Tree Drawing",
    paragraph:
      "Cartoon trees exaggerate shapes so they feel playful and easy to read. Think big round canopies, chunky trunks, and maybe a smiling face or a tiny door for a storybook look. Bold outlines help kids color inside the lines, while simple leaf clouds keep the drawing fast. You can invent patterns — polka-dot leaves, spiral bark, or rainbow fruit — because cartoons celebrate imagination over botanical accuracy. Cartoon style is ideal for comics, classroom posters, and cheerful greeting cards. Once you master a few reusable shapes, you can draw whole cartoon forests in a single afternoon.",
    image: "/images/perf/v2/guides/cartoon-tree.webp",
    imageAlt: "cartoon tree drawing",
  },
  {
    id: "tree-drawing-images-pictures-reference",
    heading: "Tree Drawing Images, Pictures & Reference",
    paragraph:
      "Good drawing tree images help you see forms you might miss from memory alone. Collect tree pictures drawing references from parks, walks, or safe public photo libraries, and notice trunk thickness, canopy width, and how branches fork. A clear drawing tree reference shows lighting direction so your shadows stay consistent. Studying cool drawing tree examples from other artists can inspire style choices, but always sketch from real structure too so your work stays original. Keep a small reference folder for seasons and species. When you draw, glance at the reference, then look back at your page — train your memory, not just your tracing hand.",
    image: "/images/perf/v2/guides/reference.webp",
    imageAlt: "Tree drawing reference images and picture studies used for practice",
  },
  {
    id: "tree-drawing-for-kids",
    heading: "Tree Drawing for Kids",
    paragraph:
      "Drawing tree for kids should feel like play, not a test. Parents and teachers can offer chunky pencils, big paper, and short steps: trunk, fluff top, then decoration. Celebrate effort over perfection — a lopsided canopy still counts as a wonderful tree. Younger children enjoy stickers, stamps, or finger-painted leaves after the outline is ready. Older kids can try seasons, animals in the branches, or comic speech bubbles. Keep sessions short, praise specific choices (“I love how wide your trunk is!”), and display finished work. When adults draw alongside kids, everyone relaxes — shared sketching is one of the best ways to build lasting creative habits.",
    image: "/images/perf/v2/guides/kids-tree.webp",
    imageAlt: "Tree drawing for kids with large simple shapes and cheerful colors",
  },
  {
    id: "big-small-large-tree-drawing",
    heading: "Big, Small & Large Tree Drawing",
    paragraph:
      "Scale changes how a tree feels in a scene. A small sapling needs a thin trunk and a modest canopy, while a large tree drawing fills the page with a thick base and broad leaf masses. Practice drawing the same tree big and small so you learn which details survive at each size. Tiny trees work as background forest stamps; oversized trees become characters of their own. Compare trunk width to canopy height — giants look believable when the trunk is chunky enough. Playing with size also teaches composition: leave room for sky, ground, or a treehouse so your big, small, and large trees all have space to breathe.",
    image: "/images/perf/v2/guides/tree-sizes.webp",
    imageAlt: "Big small and large tree drawings shown side by side for scale practice",
  },
  {
    id: "tree-house-drawing",
    heading: "Tree House Drawing",
    paragraph:
      "A tree house drawing combines nature with imagination. First draw a strong tree that can “hold” the house — thick trunk, wide fork, or sturdy platform branch. Then add a simple wooden box, a peaked roof, and a tiny window or rope ladder. Keep the house smaller than the canopy so it feels nested, not glued on. Details like a railing, string lights, or a friendly flag turn the scene into a story. Kids especially love inventing who lives inside. Whether you sketch a cozy reading nook or a wild adventure fort, build the tree first, then settle the house into the branches so both feel connected.",
    image: "/images/perf/v2/guides/tree-house.webp",
    imageAlt: "Tree house drawing with a wooden cabin nestled in strong branches",
  },
  {
    id: "drawing-family-tree",
    heading: "Drawing Family Tree",
    paragraph:
      "Drawing a family tree is part art project, part keepsake. Unlike a forest tree, a family tree diagram uses a trunk for older generations and branches for children, cousins, and new additions. Start with a central trunk labeled with grandparents or the family name, then add branching lines to each person. Decorative leaves, photo circles, or name banners make the chart warm and readable. You can keep it botanical — real bark and leafy canopy — or flat and modern with clean boxes. Either way, planning the layout in pencil first prevents crowded names. A hand-drawn family tree makes a meaningful classroom project, reunion gift, or wall poster.",
    image: "/images/perf/v2/guides/family-tree.webp",
    imageAlt: "Drawing family tree diagram with labeled branches for relatives",
  },
];

export const guideSections: GuideSection[] = [
  guideSectionStepByStep,
  guideSectionWithColor,
  ...guideSectionsRemaining,
];

export const testimonials = [
  {
    name: "Maya R.",
    role: "Parent of two",
    rating: 5,
    image: "/images/testimonials/maya-r.svg",
    imageAlt: "Portrait of Maya R.",
    quote:
      "My kids finally ask to draw instead of scroll. The steps are clear enough for a 7-year-old and calm enough for me to enjoy too.",
  },
  {
    name: "Mr. Alvarez",
    role: "Art teacher",
    rating: 5,
    image: "/images/testimonials/mr-alvarez.svg",
    imageAlt: "Portrait of Mr. Alvarez",
    quote:
      "I use TreeDraw as a warm-up path in class. The roadmap from shapes to color matches how I already teach — just prettier.",
  },
  {
    name: "Jordan K.",
    role: "Hobby artist",
    rating: 5,
    image: "/images/testimonials/jordan-k.svg",
    imageAlt: "Portrait of Jordan K.",
    quote:
      "I came for simple trees and stayed for the practice habit. Short lessons, zero fluff, and I can see my trunks improving.",
  },
] as const;

export const faqs: FaqItem[] = [
  {
    question: "Is TreeDraw free to start?",
    answer:
      "Yes. The homepage lessons and beginner path are designed so anyone can start drawing trees without creating an account. Future premium packs may be optional — core beginner learning stays accessible.",
  },
  {
    question: "What age is TreeDraw for?",
    answer:
      "TreeDraw is built for children ages 5–15, with guidance parents and teachers can follow too. Adults who are new to drawing also find the simple steps welcoming.",
  },
  {
    question: "Do I need special art supplies?",
    answer:
      "No. A pencil, eraser, and paper are enough for every beginner lesson. Colored pencils or markers are optional once you reach the color stage.",
  },
  {
    question: "How is this different from a drawing blog?",
    answer:
      "TreeDraw is structured like a learning product: clear paths, practice stages, and reusable skills — not a long feed of unrelated posts. You always know what to draw next.",
  },
  {
    question: "Can teachers use these lessons in class?",
    answer:
      "Absolutely. Short timed activities, printable-friendly steps, and kid-safe language make the lessons easy to drop into art periods or rainy-day plans.",
  },
  {
    question: "Why focus only on trees?",
    answer:
      "Trees teach proportion, branching, texture, and color in one subject. Mastering trees builds skills that transfer to landscapes, characters, and still life later.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Drawing Tutorials", href: "/#tree-drawing-guide" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/#faqs" },
  { label: "Contact", href: "/contact/" },
] as const;
