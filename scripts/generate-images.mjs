/**
 * Generates topic-specific SVG illustrations for homepage sections.
 * Each file is purpose-fit — not a generic repeated tree.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

function write(rel, svg) {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg.trim() + "\n");
}

const svg = (body, w = 640, h = 400) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#B8E4FF"/>
      <stop offset="100%" stop-color="#FFF9EF"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  ${body}
</svg>`;

// Logo mark
write(
  "logo-mark.svg",
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img">
  <rect width="64" height="64" rx="16" fill="#2E9E5B"/>
  <path d="M32 12c-8 8-14 14-14 22a14 14 0 0 0 28 0c0-8-6-14-14-22z" fill="#7DDE9A"/>
  <rect x="28" y="34" width="8" height="16" rx="2" fill="#8B5E3C"/>
  <path d="M40 20l10 2-8 4 6 8-10-3" fill="none" stroke="#FFC93C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
);

// Roadmap stages
write(
  "roadmap/basic-shapes.svg",
  svg(`
  <circle cx="320" cy="150" r="70" fill="none" stroke="#3FA9F5" stroke-width="6" stroke-dasharray="10 8"/>
  <rect x="292" y="220" width="56" height="100" rx="8" fill="none" stroke="#8B5E3C" stroke-width="6" stroke-dasharray="10 8"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Basic Shapes</text>
`),
);

write(
  "roadmap/trunk.svg",
  svg(`
  <rect x="288" y="120" width="64" height="180" rx="10" fill="#8B5E3C"/>
  <rect x="300" y="140" width="8" height="120" rx="2" fill="#6B4423" opacity=".45"/>
  <ellipse cx="320" cy="310" rx="90" ry="16" fill="#2E9E5B" opacity=".2"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Trunk</text>
`),
);

write(
  "roadmap/branches.svg",
  svg(`
  <rect x="300" y="160" width="40" height="140" rx="8" fill="#8B5E3C"/>
  <path d="M320 180 C260 150 220 140 190 130" fill="none" stroke="#8B5E3C" stroke-width="14" stroke-linecap="round"/>
  <path d="M320 200 C380 170 420 155 460 145" fill="none" stroke="#8B5E3C" stroke-width="12" stroke-linecap="round"/>
  <path d="M250 155 C230 120 210 110 190 100" fill="none" stroke="#A06B45" stroke-width="8" stroke-linecap="round"/>
  <path d="M400 165 C430 130 455 120 480 110" fill="none" stroke="#A06B45" stroke-width="8" stroke-linecap="round"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Branches</text>
`),
);

write(
  "roadmap/leaves.svg",
  svg(`
  <rect x="300" y="200" width="40" height="110" rx="8" fill="#8B5E3C"/>
  <ellipse cx="260" cy="160" rx="70" ry="55" fill="#2E9E5B"/>
  <ellipse cx="340" cy="130" rx="80" ry="60" fill="#3CB371"/>
  <ellipse cx="390" cy="175" rx="65" ry="50" fill="#2E9E5B"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Leaves</text>
`),
);

write(
  "roadmap/shadows.svg",
  svg(`
  <ellipse cx="360" cy="150" rx="110" ry="80" fill="#2E9E5B"/>
  <ellipse cx="300" cy="170" rx="70" ry="55" fill="#1F7A44"/>
  <rect x="300" y="200" width="40" height="110" rx="8" fill="#8B5E3C"/>
  <rect x="300" y="200" width="16" height="110" rx="6" fill="#6B4423" opacity=".55"/>
  <ellipse cx="300" cy="320" rx="70" ry="14" fill="#1A2E1F" opacity=".25"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Shadows</text>
`),
);

write(
  "roadmap/color.svg",
  svg(`
  <circle cx="200" cy="70" r="28" fill="#FFC93C"/>
  <ellipse cx="320" cy="150" rx="120" ry="90" fill="#2E9E5B"/>
  <ellipse cx="260" cy="170" rx="70" ry="55" fill="#00B8A9"/>
  <ellipse cx="380" cy="165" rx="65" ry="50" fill="#3CB371"/>
  <rect x="300" y="210" width="40" height="100" rx="8" fill="#8B5E3C"/>
  <rect x="120" y="310" width="400" height="30" rx="8" fill="#7DDE9A" opacity=".5"/>
  <text x="320" y="370" text-anchor="middle" font-family="Nunito,sans-serif" font-size="22" fill="#1A2E1F">Color</text>
`),
);

// Guide section images
const guides = {
  "what-is-tree-drawing": `
    <rect x="300" y="190" width="40" height="120" rx="8" fill="#8B5E3C"/>
    <circle cx="320" cy="150" r="90" fill="#7DDE9A" opacity=".9"/>
    <circle cx="270" cy="170" r="50" fill="#2E9E5B"/>
    <text x="120" y="80" font-family="Nunito,sans-serif" font-size="20" fill="#1A2E1F">Look → Simplify → Draw</text>`,
  "tree-sketch": `
    <path d="M320 90 C250 120 220 170 230 220 C180 210 160 250 180 290 C240 280 280 300 320 320 C360 300 400 280 460 290 C480 250 460 210 410 220 C420 170 390 120 320 90" fill="none" stroke="#1A2E1F" stroke-width="3"/>
    <path d="M320 220 L320 330" fill="none" stroke="#8B5E3C" stroke-width="4" stroke-dasharray="6 6"/>`,
  "pencil-tree": `
    <rect x="305" y="180" width="30" height="130" rx="6" fill="#6B4423"/>
    <ellipse cx="320" cy="150" rx="100" ry="85" fill="#4A5D50" opacity=".35"/>
    <path d="M250 140 Q320 80 390 140" fill="none" stroke="#1A2E1F" stroke-width="2"/>
    <g transform="translate(480 240) rotate(-25)">
      <rect x="0" y="0" width="18" height="120" rx="4" fill="#FFC93C"/>
      <polygon points="0,0 18,0 9,-28" fill="#FF6B5B"/>
    </g>`,
  "realistic-tree": `
    <path d="M320 320 L300 180 C260 160 230 120 250 90 C280 60 320 70 340 95 C380 70 420 95 400 140 C430 160 410 200 380 210 L340 320Z" fill="#2E9E5B"/>
    <path d="M318 320 L318 200" stroke="#6B4423" stroke-width="18" stroke-linecap="round"/>
    <path d="M310 240 C280 220 260 210 245 200" fill="none" stroke="#8B5E3C" stroke-width="8" stroke-linecap="round"/>
    <path d="M326 230 C360 210 390 200 410 185" fill="none" stroke="#8B5E3C" stroke-width="7" stroke-linecap="round"/>`,
  "cartoon-tree": `
    <circle cx="320" cy="150" r="100" fill="#3CB371"/>
    <circle cx="250" cy="180" r="55" fill="#2E9E5B"/>
    <circle cx="390" cy="180" r="55" fill="#2E9E5B"/>
    <rect x="295" y="220" width="50" height="100" rx="12" fill="#A06B45"/>
    <circle cx="305" cy="250" r="6" fill="#1A2E1F"/>
    <circle cx="335" cy="250" r="6" fill="#1A2E1F"/>
    <path d="M305 275 Q320 290 335 275" fill="none" stroke="#1A2E1F" stroke-width="4" stroke-linecap="round"/>`,
  "step-by-step": `
    <g>
      <rect x="40" y="80" width="120" height="160" rx="12" fill="#fff" stroke="#3FA9F5" stroke-width="3"/>
      <rect x="88" y="140" width="24" height="70" fill="#8B5E3C"/>
      <text x="100" y="270" text-anchor="middle" font-size="16" fill="#1A2E1F">1</text>
      <rect x="180" y="80" width="120" height="160" rx="12" fill="#fff" stroke="#3FA9F5" stroke-width="3"/>
      <rect x="228" y="150" width="24" height="60" fill="#8B5E3C"/>
      <circle cx="240" cy="130" r="35" fill="#7DDE9A"/>
      <text x="240" y="270" text-anchor="middle" font-size="16" fill="#1A2E1F">2</text>
      <rect x="320" y="80" width="120" height="160" rx="12" fill="#fff" stroke="#3FA9F5" stroke-width="3"/>
      <rect x="368" y="150" width="24" height="60" fill="#8B5E3C"/>
      <circle cx="380" cy="125" r="40" fill="#2E9E5B"/>
      <text x="380" y="270" text-anchor="middle" font-size="16" fill="#1A2E1F">3</text>
      <rect x="460" y="80" width="140" height="160" rx="12" fill="#fff" stroke="#FF6B5B" stroke-width="3"/>
      <rect x="515" y="150" width="28" height="60" fill="#8B5E3C"/>
      <circle cx="530" cy="120" r="45" fill="#2E9E5B"/>
      <circle cx="500" cy="140" r="28" fill="#00B8A9"/>
      <text x="530" y="270" text-anchor="middle" font-size="16" fill="#1A2E1F">4</text>
    </g>`,
  reference: `
    <rect x="80" y="70" width="200" height="220" rx="12" fill="#fff" stroke="#3FA9F5" stroke-width="4"/>
    <rect x="140" y="180" width="30" height="80" fill="#8B5E3C"/>
    <circle cx="155" cy="140" r="50" fill="#2E9E5B"/>
    <text x="180" y="320" text-anchor="middle" font-size="16" fill="#1A2E1F">Photo ref</text>
    <rect x="340" y="70" width="220" height="220" rx="12" fill="#fff" stroke="#FFC93C" stroke-width="4"/>
    <rect x="420" y="180" width="30" height="80" fill="#8B5E3C"/>
    <circle cx="435" cy="140" r="50" fill="none" stroke="#1A2E1F" stroke-width="3"/>
    <text x="450" y="320" text-anchor="middle" font-size="16" fill="#1A2E1F">Your sketch</text>`,
  "color-tree": `
    <circle cx="200" cy="70" r="30" fill="#FFC93C"/>
    <ellipse cx="320" cy="150" rx="120" ry="90" fill="#2E9E5B"/>
    <ellipse cx="250" cy="170" rx="70" ry="50" fill="#FF6B5B" opacity=".35"/>
    <ellipse cx="390" cy="160" rx="60" ry="45" fill="#FFC93C" opacity=".45"/>
    <rect x="300" y="210" width="40" height="100" rx="8" fill="#8B5E3C"/>`,
  "kids-tree": `
    <circle cx="320" cy="150" r="100" fill="#3FA9F5"/>
    <circle cx="250" cy="180" r="50" fill="#FF6B5B"/>
    <circle cx="390" cy="175" r="50" fill="#FFC93C"/>
    <rect x="295" y="220" width="50" height="100" rx="12" fill="#8B5E3C"/>
    <circle cx="280" cy="130" r="12" fill="#fff"/>
    <circle cx="350" cy="120" r="12" fill="#fff"/>`,
  "tree-sizes": `
    <g transform="translate(80 180)">
      <rect x="30" y="60" width="16" height="50" fill="#8B5E3C"/>
      <circle cx="38" cy="45" r="28" fill="#7DDE9A"/>
      <text x="38" y="140" text-anchor="middle" font-size="16" fill="#1A2E1F">Small</text>
    </g>
    <g transform="translate(250 120)">
      <rect x="40" y="80" width="24" height="80" fill="#8B5E3C"/>
      <circle cx="52" cy="60" r="48" fill="#2E9E5B"/>
      <text x="52" y="190" text-anchor="middle" font-size="16" fill="#1A2E1F">Medium</text>
    </g>
    <g transform="translate(430 60)">
      <rect x="50" y="120" width="34" height="120" fill="#8B5E3C"/>
      <circle cx="67" cy="90" r="70" fill="#1F7A44"/>
      <text x="67" y="270" text-anchor="middle" font-size="16" fill="#1A2E1F">Large</text>
    </g>`,
  "tree-house": `
    <rect x="300" y="200" width="40" height="120" rx="8" fill="#8B5E3C"/>
    <ellipse cx="320" cy="140" rx="130" ry="95" fill="#2E9E5B"/>
    <rect x="250" y="170" width="90" height="60" rx="6" fill="#FFC93C" stroke="#8B5E3C" stroke-width="3"/>
    <polygon points="245,170 295,135 345,170" fill="#FF6B5B"/>
    <rect x="285" y="195" width="20" height="28" fill="#3FA9F5"/>
    <line x1="250" y1="230" x2="220" y2="300" stroke="#8B5E3C" stroke-width="4"/>`,
  "family-tree": `
    <rect x="300" y="220" width="40" height="90" rx="8" fill="#8B5E3C"/>
    <circle cx="320" cy="80" r="36" fill="#FFC93C"/>
    <text x="320" y="86" text-anchor="middle" font-size="14" fill="#1A2E1F">Family</text>
    <path d="M320 116 L250 170 M320 116 L390 170 M250 170 L200 230 M250 170 L280 230 M390 170 L360 230 M390 170 L440 230" stroke="#2E9E5B" stroke-width="4"/>
    <circle cx="250" cy="170" r="24" fill="#7DDE9A"/>
    <circle cx="390" cy="170" r="24" fill="#7DDE9A"/>
    <circle cx="200" cy="230" r="18" fill="#3FA9F5"/>
    <circle cx="280" cy="230" r="18" fill="#3FA9F5"/>
    <circle cx="360" cy="230" r="18" fill="#3FA9F5"/>
    <circle cx="440" cy="230" r="18" fill="#3FA9F5"/>`,
};

for (const [name, body] of Object.entries(guides)) {
  write(`guides/${name}.svg`, svg(body));
}

// Categories & tutorials
const trees = {
  "categories/cherry-blossom": `
    <rect x="300" y="200" width="36" height="110" rx="8" fill="#8B5E3C"/>
    <path d="M318 210 C250 160 210 120 200 90" stroke="#8B5E3C" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M322 200 C390 150 430 120 450 95" stroke="#8B5E3C" stroke-width="10" fill="none" stroke-linecap="round"/>
    <circle cx="210" cy="100" r="14" fill="#FFB7C5"/><circle cx="240" cy="130" r="12" fill="#FF8FAB"/>
    <circle cx="430" cy="105" r="14" fill="#FFB7C5"/><circle cx="400" cy="140" r="12" fill="#FF8FAB"/>
    <circle cx="320" cy="150" r="16" fill="#FFB7C5"/>`,
  "categories/pine-tree": `
    <polygon points="320,60 250,160 390,160" fill="#1F7A44"/>
    <polygon points="320,110 230,220 410,220" fill="#2E9E5B"/>
    <polygon points="320,170 210,290 430,290" fill="#3CB371"/>
    <rect x="305" y="290" width="30" height="50" fill="#8B5E3C"/>`,
  "categories/autumn-tree": `
    <rect x="300" y="210" width="40" height="100" rx="8" fill="#8B5E3C"/>
    <ellipse cx="320" cy="150" rx="120" ry="90" fill="#FF8A3D"/>
    <ellipse cx="250" cy="170" rx="60" ry="45" fill="#FF6B5B"/>
    <ellipse cx="390" cy="165" rx="55" ry="40" fill="#FFC93C"/>`,
  "categories/dead-tree": `
    <path d="M320 330 L320 140" stroke="#5C4033" stroke-width="22" stroke-linecap="round"/>
    <path d="M320 180 C250 140 200 100 170 70" fill="none" stroke="#5C4033" stroke-width="10" stroke-linecap="round"/>
    <path d="M320 160 C390 120 440 90 480 60" fill="none" stroke="#5C4033" stroke-width="10" stroke-linecap="round"/>
    <path d="M250 130 C220 100 200 80 180 55" fill="none" stroke="#6B4423" stroke-width="6" stroke-linecap="round"/>
    <path d="M400 120 C440 90 460 70 490 50" fill="none" stroke="#6B4423" stroke-width="6" stroke-linecap="round"/>`,
  "categories/tree-parts": `
    <rect x="300" y="180" width="40" height="120" rx="8" fill="#8B5E3C"/>
    <circle cx="320" cy="130" r="70" fill="#2E9E5B"/>
    <path d="M320 300 C300 330 280 340 260 350" stroke="#6B4423" stroke-width="8" fill="none"/>
    <path d="M320 300 C340 330 360 340 380 350" stroke="#6B4423" stroke-width="8" fill="none"/>
    <text x="420" y="130" font-size="18" fill="#1A2E1F">Leaf</text>
    <text x="360" y="250" font-size="18" fill="#1A2E1F">Trunk</text>
    <text x="400" y="340" font-size="18" fill="#1A2E1F">Root</text>`,
  "categories/fruit-tree": `
    <rect x="300" y="210" width="40" height="100" rx="8" fill="#8B5E3C"/>
    <ellipse cx="320" cy="150" rx="120" ry="90" fill="#2E9E5B"/>
    <circle cx="280" cy="140" r="14" fill="#FF6B5B"/>
    <circle cx="340" cy="120" r="14" fill="#FF6B5B"/>
    <circle cx="360" cy="170" r="14" fill="#FFC93C"/>
    <circle cx="250" cy="175" r="14" fill="#FF6B5B"/>`,
  "categories/seasonal-trees": `
    <g transform="translate(20 100) scale(.45)"><rect x="300" y="210" width="40" height="100" fill="#8B5E3C"/><circle cx="320" cy="150" r="90" fill="#FFB7C5"/></g>
    <g transform="translate(170 100) scale(.45)"><rect x="300" y="210" width="40" height="100" fill="#8B5E3C"/><circle cx="320" cy="150" r="90" fill="#2E9E5B"/></g>
    <g transform="translate(320 100) scale(.45)"><rect x="300" y="210" width="40" height="100" fill="#8B5E3C"/><circle cx="320" cy="150" r="90" fill="#FF8A3D"/></g>
    <g transform="translate(470 100) scale(.45)"><rect x="300" y="210" width="40" height="100" fill="#8B5E3C"/><path d="M320 240 L320 120 M320 150 L260 100 M320 150 L380 100" stroke="#5C4033" stroke-width="12" fill="none"/></g>`,
  "categories/nature-trees": `
    <rect x="200" y="220" width="28" height="90" fill="#8B5E3C"/>
    <circle cx="214" cy="180" r="55" fill="#1F7A44"/>
    <rect x="300" y="200" width="36" height="110" fill="#8B5E3C"/>
    <circle cx="318" cy="150" r="75" fill="#2E9E5B"/>
    <rect x="420" y="230" width="24" height="80" fill="#8B5E3C"/>
    <circle cx="432" cy="190" r="48" fill="#3CB371"/>
    <ellipse cx="320" cy="330" rx="200" ry="18" fill="#7DDE9A" opacity=".5"/>`,
  "categories/tree-sizes": `
    <rect x="140" y="240" width="16" height="50" fill="#8B5E3C"/><circle cx="148" cy="220" r="28" fill="#7DDE9A"/>
    <rect x="280" y="180" width="28" height="110" fill="#8B5E3C"/><circle cx="294" cy="140" r="55" fill="#2E9E5B"/>
    <rect x="440" y="120" width="40" height="170" fill="#8B5E3C"/><circle cx="460" cy="80" r="70" fill="#1F7A44"/>`,
  "tutorials/oak-tree": `
    <rect x="295" y="200" width="50" height="110" rx="10" fill="#8B5E3C"/>
    <ellipse cx="320" cy="150" rx="130" ry="100" fill="#2E9E5B"/>
    <ellipse cx="250" cy="170" rx="60" ry="45" fill="#1F7A44"/>`,
  "tutorials/pine-tree": `
    <polygon points="320,50 240,150 400,150" fill="#1F7A44"/>
    <polygon points="320,100 220,220 420,220" fill="#2E9E5B"/>
    <polygon points="320,160 200,300 440,300" fill="#3CB371"/>
    <rect x="305" y="300" width="30" height="40" fill="#8B5E3C"/>`,
  "tutorials/apple-tree": `
    <rect x="300" y="210" width="40" height="100" rx="8" fill="#8B5E3C"/>
    <circle cx="320" cy="150" r="100" fill="#3CB371"/>
    <circle cx="280" cy="140" r="16" fill="#FF6B5B"/><circle cx="350" cy="130" r="16" fill="#FF6B5B"/>
    <circle cx="330" cy="180" r="16" fill="#FF6B5B"/>`,
  "tutorials/bare-tree": `
    <path d="M320 330 L320 130" stroke="#8B5E3C" stroke-width="20" stroke-linecap="round"/>
    <path d="M320 170 C260 140 220 120 180 90" fill="none" stroke="#8B5E3C" stroke-width="10" stroke-linecap="round"/>
    <path d="M320 160 C380 130 430 110 470 85" fill="none" stroke="#8B5E3C" stroke-width="10" stroke-linecap="round"/>
    <path d="M260 140 C230 110 210 90 190 70" fill="none" stroke="#A06B45" stroke-width="6"/>`,
  "tutorials/willow-tree": `
    <rect x="305" y="140" width="30" height="170" rx="8" fill="#8B5E3C"/>
    <path d="M200 120 Q240 200 220 320" fill="none" stroke="#2E9E5B" stroke-width="8"/>
    <path d="M250 100 Q280 210 260 330" fill="none" stroke="#3CB371" stroke-width="8"/>
    <path d="M320 90 Q330 220 320 330" fill="none" stroke="#2E9E5B" stroke-width="8"/>
    <path d="M390 100 Q370 210 380 330" fill="none" stroke="#3CB371" stroke-width="8"/>
    <path d="M440 120 Q410 200 430 320" fill="none" stroke="#2E9E5B" stroke-width="8"/>
    <ellipse cx="320" cy="110" rx="130" ry="40" fill="#1F7A44"/>`,
  "tutorials/rainbow-tree": `
    <rect x="300" y="220" width="40" height="90" rx="8" fill="#8B5E3C"/>
    <circle cx="320" cy="160" r="100" fill="#FF6B5B"/>
    <circle cx="320" cy="160" r="75" fill="#FFC93C"/>
    <circle cx="320" cy="160" r="50" fill="#3FA9F5"/>
    <circle cx="320" cy="160" r="28" fill="#2E9E5B"/>`,
  "tutorials/palm-tree": `
    <path d="M320 330 C300 260 310 200 330 140" fill="none" stroke="#C4A35A" stroke-width="22" stroke-linecap="round"/>
    <path d="M330 150 C280 120 220 130 180 150" fill="none" stroke="#2E9E5B" stroke-width="14" stroke-linecap="round"/>
    <path d="M330 150 C380 110 450 120 490 150" fill="none" stroke="#2E9E5B" stroke-width="14" stroke-linecap="round"/>
    <path d="M330 150 C300 90 260 70 220 60" fill="none" stroke="#3CB371" stroke-width="12" stroke-linecap="round"/>
    <path d="M330 150 C370 90 420 70 470 65" fill="none" stroke="#3CB371" stroke-width="12" stroke-linecap="round"/>`,
  "tutorials/maple-leaf": `
    <path d="M320 80 L350 150 L420 130 L370 190 L450 230 L360 230 L380 320 L320 260 L260 320 L280 230 L190 230 L270 190 L220 130 L290 150 Z" fill="#FF6B5B"/>
    <path d="M320 100 L320 300" stroke="#8B5E3C" stroke-width="4"/>`,
  "tutorials/cartoon-tree": `
    <circle cx="320" cy="150" r="105" fill="#3CB371"/>
    <rect x="292" y="230" width="56" height="90" rx="14" fill="#A06B45"/>
    <circle cx="300" cy="250" r="7" fill="#1A2E1F"/>
    <circle cx="340" cy="250" r="7" fill="#1A2E1F"/>
    <path d="M300 280 Q320 300 340 280" fill="none" stroke="#1A2E1F" stroke-width="5" stroke-linecap="round"/>`,
  "tutorials/night-tree": `
    <rect width="640" height="400" fill="#1A2E4A"/>
    <circle cx="500" cy="80" r="36" fill="#FFC93C"/>
    <circle cx="120" cy="60" r="3" fill="#fff"/><circle cx="200" cy="100" r="2" fill="#fff"/>
    <circle cx="420" cy="50" r="2" fill="#fff"/><circle cx="560" cy="140" r="3" fill="#fff"/>
    <rect x="300" y="200" width="40" height="120" rx="8" fill="#5C4033"/>
    <ellipse cx="320" cy="150" rx="120" ry="90" fill="#1F7A44"/>
    <ellipse cx="320" cy="150" rx="60" ry="40" fill="#FFC93C" opacity=".25"/>`,
};

for (const [name, body] of Object.entries(trees)) {
  write(`${name}.svg`, svg(body));
}

// Hero illustration
write(
  "hero-tree.svg",
  svg(`
  <circle cx="520" cy="70" r="40" fill="#FFC93C"/>
  <ellipse cx="280" cy="160" rx="140" ry="110" fill="#2E9E5B"/>
  <ellipse cx="200" cy="190" rx="80" ry="60" fill="#00B8A9"/>
  <ellipse cx="360" cy="180" rx="75" ry="55" fill="#3CB371"/>
  <rect x="255" y="230" width="50" height="120" rx="10" fill="#8B5E3C"/>
  <rect x="255" y="230" width="18" height="120" rx="8" fill="#6B4423" opacity=".4"/>
  <g transform="translate(420 220) rotate(-20)">
    <rect x="0" y="0" width="20" height="130" rx="5" fill="#FFC93C"/>
    <polygon points="0,0 20,0 10,-30" fill="#FF6B5B"/>
  </g>
  <ellipse cx="280" cy="360" rx="160" ry="20" fill="#2E9E5B" opacity=".25"/>
`, 640, 420),
);

console.log("Generated SVG illustrations in public/images");
