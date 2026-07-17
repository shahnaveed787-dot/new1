# TreeDraw — Easy and Simple Tree Drawing

Premium, SEO-first educational homepage for learning **easy and simple tree drawing**. Built with Next.js (App Router), Tailwind CSS, and static generation.

## Homepage

Canonical URL: [`/easy-and-simple-tree-drawing`](/easy-and-simple-tree-drawing)

`/` redirects to the canonical homepage permalink.

## Stack

- Next.js 16 (App Router, SSG)
- TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Fuse.js (lazy-loaded client search)
- `next/font` — Baloo 2 + Nunito (self-hosted, `display: swap`)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000/easy-and-simple-tree-drawing](http://localhost:3000/easy-and-simple-tree-drawing).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/components/layout    Header, Footer, SearchBar, Logo
src/components/marketing Hero, cards, roadmap, FAQ, etc.
src/content              homepage.ts, search.ts
src/lib/seo.ts           Article / FAQ / Breadcrumb schema helpers
public/llms.txt          AI/LLM site summary
public/images            Topic-specific SVG illustrations
```

## Deploy

Connect this repo to Vercel. Set optional `NEXT_PUBLIC_SITE_URL` to your production domain.
