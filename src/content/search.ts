/** Placeholder search dataset — swap for real tutorials later. */

export type SearchEntry = {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  href: string;
};

export const searchDataset: SearchEntry[] = [
  {
    id: "1",
    title: "How to Draw a Simple Oak Tree",
    category: "Beginner",
    keywords: ["oak", "simple", "beginner", "canopy"],
    href: "/how-to-draw-a-simple-oak-tree",
  },
  {
    id: "2",
    title: "Pine Tree Drawing for Beginners",
    category: "Evergreen",
    keywords: ["pine", "evergreen", "triangle", "christmas"],
    href: "/pine-tree-drawing-for-beginners",
  },
  {
    id: "3",
    title: "Cherry Blossom Tree Drawing",
    category: "Seasonal",
    keywords: ["cherry", "blossom", "pink", "spring"],
    href: "/cherry-blossom-tree-drawing",
  },
  {
    id: "4",
    title: "Cartoon Apple Tree Drawing",
    category: "Kids",
    keywords: ["cartoon", "apple", "fruit", "kids"],
    href: "/cartoon-apple-tree-drawing",
  },
  {
    id: "5",
    title: "Winter Bare Tree Sketch",
    category: "Sketch",
    keywords: ["winter", "bare", "branches", "sketch"],
    href: "/winter-bare-tree-sketch",
  },
  {
    id: "6",
    title: "Treehouse Adventure",
    category: "Fun",
    keywords: ["treehouse", "house", "adventure", "kids"],
    href: "/treehouse-adventure",
  },
  {
    id: "7",
    title: "Family Tree Poster",
    category: "Projects",
    keywords: ["family", "diagram", "poster", "names"],
    href: "/family-tree-poster",
  },
  {
    id: "8",
    title: "Autumn Tree Drawing",
    category: "Seasonal",
    keywords: ["autumn", "fall", "orange", "leaves"],
    href: "/autumn-tree-drawing",
  },
];
