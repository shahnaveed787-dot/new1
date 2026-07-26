/**
 * Drawing tutorial pages — post-name permalinks under /%slug%/.
 */

export type TutorialParagraphLink = {
  /** Exact phrase to wrap as a link (first match in the target paragraph). */
  text: string;
  href: string;
  /** Paragraph index within the section (0-based). */
  paragraphIndex: number;
};

export type TutorialList = {
  type: "bullet" | "number";
  items: string[];
  /** Render after this paragraph index (0-based). */
  afterParagraph: number;
};

export type TutorialSection = {
  heading: string;
  paragraphs: string[];
  lists?: TutorialList[];
  links?: TutorialParagraphLink[];
  /** Optional illustration shown after the section paragraphs */
  image?: string;
  imageAlt?: string;
};

export type TutorialPage = {
  slug: string;
  /** ready = full lesson live; coming-soon = placeholder page */
  status: "ready" | "coming-soon";
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  difficulty: "Beginner" | "Easy" | "Intermediate" | "Fun";
  time: string;
  image: string;
  imageAlt: string;
  updatedLabel: string;
  /** Case-insensitive phrases to bold when found in title/headings/body */
  boldPhrases?: readonly string[];
  /** Optional homepage (or other) link inside the intro paragraph */
  introLink?: {
    text: string;
    href: string;
    /** Which match to wrap when the phrase appears more than once */
    match?: "first" | "last";
  };
  sections: TutorialSection[];
};

/** Target keywords for the Christmas tree drawing lesson */
export const CHRISTMAS_TREE_BOLD_PHRASES = [
  "christmas tree drawing with gifts",
  "christmas tree with lights drawing",
  "easy drawing of a christmas tree",
  "grinch christmas tree drawing",
  "cartoon christmas tree drawing",
  "christmas tree cartoon drawing",
  "christmas tree picture drawing",
  "outline christmas tree drawing",
  "simple christmas tree drawing",
  "easy christmas tree drawing",
  "cute christmas tree drawing",
  "christmas tree easy drawing",
  "christmas tree drawing ideas",
  "christmas tree line drawing",
  "drawing of a christmas tree",
  "drawing a christmas tree",
  "tree drawing christmas",
  "cristmas tree drawing",
  "grinch tree drawing",
  "christmas tree drawing",
] as const;

/** Target keywords for the palm tree drawing lesson */
export const PALM_TREE_BOLD_PHRASES = [
  "black and white plam tree",
  "palm tree drawing realistic",
  "palm tree outline drawing",
  "date palm tree drawing",
  "palm tree leaves drawing",
  "palm tree drawing easy",
  "easy palm tree drawing",
  "palm tree easy drawing",
  "drawing palm tree",
  "palm tree drawing",
  "pom tree drawing",
] as const;

export const tutorials: TutorialPage[] = [
  {
    slug: "christmas-tree-drawing",
    status: "ready",
    title: "Simple and Easy Christmas Tree Drawing For Beginners 2026",
    metaTitle: "Simple and Easy Christmas Tree Drawing For Beginners 2026",
    metaDescription:
      "Learn Christmas tree drawing with easy step-by-step tutorials, cute, cartoon, outline, Grinch, gifts, lights and simple ideas for every skill level.",
    intro: "",
    difficulty: "Easy",
    time: "15 min",
    image: "/images/tutorials/christmas-tree.webp",
    imageAlt: "christmas tree drawing",
    updatedLabel: "Updated July 25, 2026",
    boldPhrases: CHRISTMAS_TREE_BOLD_PHRASES,
    sections: [
      {
        heading: "Drawing a Christmas Tree",
        paragraphs: [
          "Christmas tree drawing starts with learning a simple structure rather than focusing on decorations straight away. Begin by sketching a light vertical guideline to keep the tree balanced, then stack three or four triangular layers that gradually widen toward the bottom. This creates the classic evergreen silhouette seen in most festive illustrations. Once the outline is complete, add a short trunk and refine the branch edges with soft zigzag strokes to give the tree a more natural appearance.",
          "As you become more comfortable with tree drawing christmas, experiment with different branch shapes, tree heights, and trunk widths instead of aiming for perfection on your first attempt. A clean foundation makes it much easier to decorate your artwork with ornaments, lights, presents, or seasonal backgrounds later in the drawing process.",
        ],
        links: [{ text: "tree drawing", href: "/", paragraphIndex: 1 }],
        image: "/images/tutorials/simple-christmas-tree-drawing.webp",
        imageAlt: "simple christmas tree drawing",
      },
      {
        heading: "Cute Christmas Tree Drawing",
        paragraphs: [
          "A Cute Christmas Tree Drawing focuses on personality rather than realism. Instead of sharp triangular branches, use rounded edges and soft curves to create a friendlier appearance. Large sparkling eyes, a smiling face, rosy cheeks, and oversized ornaments instantly make the tree look more playful and appealing for children.",
          "A Christmas tree cartoon drawing follows many of the same principles but exaggerates proportions even further. The trunk can be slightly wider, the branches more curved and the decorations brighter and bolder just like cartoon christmas tree drawing. Thick outlines and simple coloring work especially well for greeting cards, classroom activities, coloring pages or holiday crafts where a fun style is more important than realistic detail.",
        ],
      },
      {
        heading: "Outline Christmas Tree Drawing",
        paragraphs: [
          "An Outline Christmas Tree Drawing is one of the easiest styles to create because it focuses only on the outer shape of the tree. Begin with a clean zigzag or layered triangular outline before adding a small trunk. Keep the interior simple so the drawing can later be coloured, shaded, or used as a printable template.",
          "A Christmas Tree Line Drawing takes this idea a step further by using consistent line weight throughout the illustration. Rather than adding texture or heavy shading, rely on smooth continuous lines to define the branches and decorations. This minimalist approach is perfect for colouring books, holiday crafts, vinyl cutting projects, and modern festive designs where simplicity creates a cleaner finished result.",
        ],
      },
      {
        heading: "Christmas Tree Picture Drawing",
        paragraphs: [
          "A easy drawing of a christmas tree transforms a simple sketch into a complete holiday scene. Once the tree itself is finished, begin adding surrounding details that tell a festive story. Snow-covered ground, wrapped presents, glowing stars, ornaments, candy canes, stockings, fireplaces, or a snowy village in the background all help create a more engaging illustration.",
          "Pay attention to the overall composition by leaving enough space around the grinch christmas tree drawing instead of filling every corner with decorations. Adding depth through overlapping objects and simple shadows makes the finished Christmas picture feel more balanced while still keeping the drawing easy enough for beginners to complete.",
        ],
      },
      {
        heading: "Christmas Tree Drawing Ideas",
        paragraphs: [
          "If you're looking for Christmas Tree Easy Drawing try experimenting with different themes instead of drawing the same traditional evergreen every time. A snowy pine tree, rustic farmhouse tree, candy-themed tree, minimalist Scandinavian design, vintage Christmas tree, or colourful cartoon version can each create a unique holiday illustration.",
          "You can also explore creative art styles such as pencil sketching, coloured pencils, markers, watercolours, digital art, or black-and-white ink drawings. Changing the decorations, ornaments, star topper, or background scenery allows every Christmas tree drawing to have its own personality while helping you develop new artistic skills.",
        ],
      },
      {
        heading: "Christmas Tree Drawing With Gifts",
        paragraphs: [
          "A Christmas Tree Drawing With Gifts instantly creates a more festive holiday scene. After completing the tree, sketch several gift boxes of different sizes beneath the branches. Overlap the presents slightly to make the arrangement look more natural, then add ribbon lines, bows, and decorative wrapping patterns to give each gift its own unique appearance.",
          "To make the illustration even more magical, include a Christmas Tree With Lights Drawing by weaving a loose string of lights around each layer of branches. Draw small bulbs at even intervals, then colour them using traditional festive shades such as red, green, yellow, and blue. Finish by adding ornaments, a bright star on top, and a few scattered snowflakes to create a warm and cheerful Christmas scene that feels complete without becoming overcrowded.",
        ],
      },
      {
        heading: "Decorating Your Holiday Evergreen",
        paragraphs: [
          "A beautifully decorated evergreen is often the centrepiece of holiday celebrations, bringing warmth, colour, and festive spirit to homes, classrooms, and greeting cards. After sketching the basic shape, the decorating stage allows you to add personality and creativity while making the artwork feel complete. Every ornament, ribbon, and decorative element contributes to the overall composition, so it's worth taking your time and planning where each detail will be placed.",
          "Start by selecting a theme before adding decorations. A traditional festive design may include classic red and gold ornaments, candy canes, bows, and a bright star at the top. For a more modern appearance, choose a limited colour palette such as silver and blue or white and gold to create a clean, elegant look. Rustic decorations featuring pinecones, wooden ornaments, dried orange slices, and burlap ribbons can also give the illustration a cosy woodland feel.",
          "Balance is important when placing ornaments. Instead of arranging them in perfectly straight rows, distribute them unevenly across the branches to mimic how real decorations naturally hang. Mixing different ornament sizes and shapes helps create visual interest while preventing large empty spaces. Strings of lights should gently wrap around the branches, following the natural flow rather than forming rigid lines. If colouring your artwork, leave tiny white highlights inside the bulbs to create the illusion of glowing lights.",
          "Don't forget the finishing touches around the base. Wrapped presents, a soft tree skirt, scattered pinecones, festive stockings, or a layer of freshly fallen snow can complete the entire scene. Adding subtle shadows beneath decorations and along the lower branches creates depth and makes the artwork appear more realistic. Finally, consider drawing a simple background such as a cosy living room, a snowy landscape, or a starry winter sky to transform a standalone sketch into a complete seasonal illustration that captures the joy and atmosphere of the holidays.",
        ],
      },
    ],
  },
  {
    slug: "palm-tree-drawing",
    status: "ready",
    title: "Palm Tree Drawing a Complete Guide for Beginners and Artists",
    metaTitle: "Palm Tree Drawing Easy, Simple & Realistic Sketch Guide 2026",
    metaDescription:
      "Learn palm tree drawing with easy, realistic, outline and date palm tutorials. Follow simple steps to draw palm tree leaves and beautiful sketches.",
    intro:
      "Palm tree drawing are among the most recognizable trees in the world. Their tall trunks, graceful leaves, and tropical appearance make them a favourite subject for artists of every skill level. Whether you enjoy sketching with a pencil, colouring with markers, or creating digital artwork, learning how to draw a palm tree is both fun and rewarding. By understanding the basic structure, proportions, and leaf patterns, you can create realistic or simple illustrations that capture the beauty of these iconic tropical trees.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/tutorials/palm-tree-drawing.webp",
    imageAlt: "palm tree drawing",
    updatedLabel: "Updated July 26, 2026",
    boldPhrases: PALM_TREE_BOLD_PHRASES,
    introLink: { text: "trees", href: "/" },
    sections: [
      {
        heading: "How to Start a Palm Tree Drawing and Drawing Palm Tree",
        paragraphs: [
          "If you're new to palm tree drawing or simply learning the basics of drawing palm tree illustrations, start by observing the tree's natural structure. Unlike oak or maple trees, palm trees have a single slender trunk topped with a crown of long, feather-like fronds. Breaking the tree into simple geometric shapes makes the process much easier.",
          "Begin with a light vertical guideline to establish the trunk. Sketch a small oval at the top to represent the crown where the leaves will grow. From this point, draw curved guidelines extending outward like a fan. These lines will later become individual palm fronds. Working with light pencil strokes allows you to adjust proportions before adding details.",
          "Professional illustrators often recommend using reference photos to understand the natural curve of the trunk and the way fronds overlap. This simple observation greatly improves the overall realism of your artwork.",
        ],
      },
      {
        heading: "Understanding the Structure of a Palm Tree",
        paragraphs: [
          "Before adding details, it's important to understand the anatomy of a palm tree. Every healthy palm generally includes:",
          "Unlike broadleaf trees, palm trees don't have thick branches. Instead, all leaves emerge from the crown at the top. This unique structure makes palm trees much easier to draw than many other tree species.",
        ],
        lists: [
          {
            type: "bullet",
            afterParagraph: 0,
            items: [
              "A tall cylindrical trunk",
              "A crownshaft (depending on species)",
              "Long arching fronds",
              "Leaflets attached to each frond",
              "Fibrous bark texture",
              "Roots hidden beneath the ground",
            ],
          },
        ],
      },
      {
        heading:
          "Creating a Palm Tree Drawing Easy, Easy Palm Tree Drawing and Palm Tree Easy Drawing",
        paragraphs: [
          "Many beginners search for palm tree drawing easy, easy palm tree drawing, or palm tree easy drawing because they want a simple method without complicated details. Fortunately, palm trees are ideal for beginners due to their straightforward shape.",
          "Start by drawing:",
          "Avoid making every leaf identical. Natural variation gives the tree a more believable appearance. Some leaves may point downward while others spread outward. Small imperfections actually improve the final drawing.",
          "Once comfortable with the basic version, you can experiment with thicker trunks, additional leaves, coconuts, or beach scenery.",
        ],
        lists: [
          {
            type: "number",
            afterParagraph: 1,
            items: [
              "A slightly curved trunk.",
              "A small circle or oval at the top.",
              "Five to eight long curved lines extending outward.",
              "Add leaflets along each curved line.",
              "Finish by drawing a few horizontal texture lines across the trunk.",
            ],
          },
        ],
      },
      {
        heading: "Adding Details to Palm Tree Leaves Drawing",
        paragraphs: [
          "The most eye-catching feature of any palm tree leaves drawing is the graceful fronds. Rather than drawing each leaf as one solid shape, imagine a central stem called the rachis with dozens of narrow leaflets growing from both sides.",
          "Begin each frond with one sweeping curved line. Then sketch small angled strokes extending from each side toward the tip. Keep the leaflets shorter near the ends and slightly longer near the middle to create a natural appearance.",
          "Remember that gravity affects the leaves. Older fronds often droop downward while younger leaves remain upright. Overlapping fronds also add depth and dimension to your illustration.",
          "Using different pencil pressure creates texture. Light strokes suggest younger leaves, while darker lines emphasize shadows between overlapping fronds.",
        ],
      },
      {
        heading: "Making a Palm Tree Drawing Realistic",
        paragraphs: [
          "Once you've mastered the basics, you can move on to a palm tree drawing realistic style. Realism comes from observation rather than excessive detail.",
          "Pay close attention to:",
          "Instead of outlining every surface, gradually build values with soft graphite shading. The trunk often appears darker beneath the crown where shadows naturally collect.",
          "Palm fronds rarely remain perfectly straight. Gentle bends, twists, and uneven leaf spacing make the drawing feel alive. Adding subtle highlights where sunlight strikes the leaves enhances realism even further.",
          "If you're drawing an entire tropical landscape, include sand dunes, rocks, distant mountains, ocean waves, or a sunset sky to create environmental context.",
        ],
        lists: [
          {
            type: "bullet",
            afterParagraph: 1,
            items: [
              "Bark texture",
              "Natural trunk curvature",
              "Leaf overlap",
              "Shadow direction",
              "Lighting",
              "Perspective",
              "Depth",
            ],
          },
        ],
      },
      {
        heading: "Drawing a Palm Tree Outline Drawing",
        paragraphs: [
          "A clean palm tree outline drawing is useful for colouring books, classroom activities, children's worksheets, craft projects, logos, and beginner practice.",
          "Instead of adding shading, focus entirely on clean outer edges.",
          "Keep the process simple:",
          "Outline drawings work particularly well with markers, coloured pencils, digital colouring apps, and Cricut craft projects because they provide a clean template without distracting details.",
        ],
        lists: [
          {
            type: "bullet",
            afterParagraph: 2,
            items: [
              "Draw one continuous trunk.",
              "Create a rounded crown.",
              "Add evenly spaced fronds.",
              "Outline each frond clearly.",
              "Remove unnecessary sketch lines.",
            ],
          },
        ],
      },
      {
        heading: "Creating a Black and White Palm Tree Illustration",
        paragraphs: [
          "A black and white palm tree illustration relies entirely on line work, contrast, and shading instead of colour. This style is popular in tattoo designs, colouring pages, architectural sketches, and ink illustrations.",
          "Begin with confident outlines before adding texture using cross-hatching, stippling, or directional pencil strokes. Dark shadows beneath overlapping fronds create strong contrast and make the leaves stand out.",
          "Negative space is equally important. Leaving portions of the paper white helps separate individual fronds while giving the drawing a cleaner and more professional appearance.",
          "Even without colour, careful use of light and shadow can produce an eye-catching tropical illustration.",
        ],
        image: "/images/tutorials/palm-tree-drawing-easy.webp",
        imageAlt: "palm tree drawing easy",
      },
      {
        heading: "How to Draw a Date Palm Tree Drawing",
        paragraphs: [
          "A date palm tree drawing often features a thicker trunk with a diamond-shaped bark pattern left behind by old leaf bases.",
          "When drawing a date palm:",
          "Date palms are commonly found throughout the Middle East, North Africa, and parts of South Asia. Their fruit clusters create an instantly recognisable appearance and make excellent focal points in botanical illustrations.",
          "Artists often study real photographs to understand how the fruit hangs beneath the leaves while maintaining natural balance within the composition.",
        ],
        lists: [
          {
            type: "bullet",
            afterParagraph: 1,
            items: [
              "Make the trunk wider.",
              "Add textured bark patterns.",
              "Draw denser fronds.",
              "Include hanging clusters of dates beneath the crown.",
            ],
          },
        ],
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "Palm trees are one of the easiest yet most rewarding subjects for artists of all experience levels. Their distinctive silhouette, flowing leaves, and tropical charm make them perfect for pencil sketches, digital illustrations, colouring pages, botanical studies, and landscape artwork. By understanding the trunk structure, mastering the leaf patterns, and practising realistic shading, you'll steadily improve your drawing skills.",
          "Whether your goal is a simple beginner-friendly sketch, a clean outline, a detailed botanical illustration, or a realistic tropical landscape, consistent practice and careful observation are the keys to creating beautiful palm tree artwork that looks both natural and visually appealing.",
        ],
      },
    ],
  },
  {
    slug: "cherry-blossom-sakura-tree-drawing",
    status: "coming-soon",
    title: "Cherry Blossom / Sakura Tree Drawing",
    metaTitle: "Cherry Blossom Sakura Tree Drawing | Spring Tutorial",
    metaDescription:
      "Draw a cherry blossom (sakura) tree with elegant branches and soft flower clusters — an easy spring tree drawing for beginners.",
    intro:
      "Sakura trees celebrate spring with delicate blooms and graceful branches. Keep the canopy airy and the flowers in soft clusters.",
    difficulty: "Intermediate",
    time: "25 min",
    image: "/images/categories/cherry-blossom.svg",
    imageAlt: "Cherry blossom sakura tree drawing with pink flower clusters",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "An elegant trunk with spreading branches and pink blossom clusters — classic cherry blossom / sakura style.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Draw a slender trunk that splits into two or three main branches. Keep the forks open and upward so the tree feels light.",
          "Add thinner twigs that reach outward. Leave space between branches — sakura canopies look best when they are not packed solid.",
          "Place blossom clusters as soft cloud shapes or small flower groups along the outer branches. A few falling petals near the ground finish the spring mood.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Use pale pink for blooms and a soft gray-brown for bark. Less ink on the leaves means the flowers stay the star of the drawing.",
        ],
      },
    ],
  },
  {
    slug: "willow-tree-drawing",
    status: "coming-soon",
    title: "Willow Tree Drawing",
    metaTitle: "Willow Tree Drawing | Easy Weeping Willow Tutorial",
    metaDescription:
      "Learn willow tree drawing with a weeping canopy, hanging branches, and calm landscape tips for beginners and kids.",
    intro:
      "Willow trees are known for long hanging branches. Capture that gentle waterfall of leaves with soft vertical strokes.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/tutorials/willow-tree.svg",
    imageAlt: "Willow tree drawing with long weeping branches",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A weeping willow with a rounded upper canopy and long cascading branch lines.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Start with a short trunk and a soft dome shape for the top of the canopy.",
          "From the dome, draw long curved lines that hang down and slightly outward. Overlap groups of lines so the curtain of leaves feels full.",
          "Darken a few front strands and keep back strands lighter. Add a pond edge or grass line for a peaceful scene.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Think “hanging curtains,” not stiff sticks. Slight curves and uneven lengths make the willow feel alive.",
        ],
      },
    ],
  },
  {
    slug: "pine-evergreen-conifer-tree-drawing",
    status: "coming-soon",
    title: "Pine / Evergreen / Conifer Tree Drawing",
    metaTitle: "Pine Evergreen Conifer Tree Drawing | Beginner Guide",
    metaDescription:
      "Draw pine, evergreen, and conifer trees with stacked layers or triangle forms — a clear beginner tutorial for forest scenes.",
    intro:
      "Pines and other evergreens stay green all year. Learn a simple layered method that works for pine, fir, and conifer shapes.",
    difficulty: "Beginner",
    time: "12 min",
    image: "/images/tutorials/pine-tree.svg",
    imageAlt: "Pine evergreen conifer tree drawing with layered triangular branches",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A classic conifer silhouette — pointed top, layered branches, and a narrow trunk.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Draw a tall center line. Build the tree with stacked triangles or zigzag layers that get wider toward the ground.",
          "Add a thin trunk peeking out at the base. Soften each layer with short needle strokes or jagged edges.",
          "Shade the underside of each layer slightly darker. A few ground marks or snow patches finish a forest feel.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Keep the top sharp and the bottom widest. Mixing two or three pine sizes makes a quick evergreen forest.",
        ],
      },
    ],
  },
  {
    slug: "oak-tree-drawing",
    status: "coming-soon",
    title: "Oak Tree Drawing",
    metaTitle: "Oak Tree Drawing | Strong Trunk and Round Canopy",
    metaDescription:
      "Learn oak tree drawing with a sturdy trunk, broad canopy, and simple leaf clusters — ideal for beginners and nature sketches.",
    intro:
      "Oaks feel strong and grounded. A thick trunk and a wide, rounded canopy make this a great first “finished” tree.",
    difficulty: "Beginner",
    time: "15 min",
    image: "/images/tutorials/oak-tree.svg",
    imageAlt: "Oak tree drawing with a thick trunk and round leafy canopy",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A sturdy oak with a thick trunk, forked branches, and a full round canopy.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Sketch a thick trunk that widens at the ground. Split it into a few strong branches inside the canopy area.",
          "Build the canopy as overlapping cloud shapes or soft ovals. Keep the outer edge bumpy, not a perfect circle.",
          "Add leaf texture with short clustered marks. Darken one side of the trunk and place a ground shadow for weight.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Oaks look best when the trunk feels heavy enough to hold the canopy. Leave tiny gaps of sky in the leaves for airiness.",
        ],
      },
    ],
  },
  {
    slug: "seasonal-tree-drawing",
    status: "coming-soon",
    title: "Seasonal Tree Drawing (Fall / Winter / Spring / Bare)",
    metaTitle: "Seasonal Tree Drawing | Fall Winter Spring Bare Trees",
    metaDescription:
      "Practice seasonal tree drawing — fall colors, winter bare branches, spring buds, and simple ways to show each season clearly.",
    intro:
      "One tree structure can tell four seasons. Change leaves, color, and detail to move from spring bloom to winter bare branches.",
    difficulty: "Easy",
    time: "20 min",
    image: "/images/categories/seasonal-trees.svg",
    imageAlt: "Seasonal tree drawing showing fall winter spring and bare variations",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A shared trunk-and-branch structure, then four seasonal looks: spring, summer/fall color, winter bare, and a transitional bare-ready sketch.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Draw one clear trunk and branch map lightly. Duplicate it (or redraw) for each season so comparisons stay fair.",
          "Spring: soft buds and light green or pink accents. Fall: warm orange-red clusters and a few falling leaves. Winter: erase foliage and emphasize branch forks.",
          "Bare trees should show thicker limbs near the trunk and thinner tips. Add a simple ground line or snowdrift to lock the season.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Season is mostly about canopy density and color. Keep the skeleton consistent so learners see what actually changed.",
        ],
      },
    ],
  },
  {
    slug: "tree-parts-drawing",
    status: "coming-soon",
    title: "Tree Parts Drawing (Branches / Trunk / Bark / Roots / Leaves)",
    metaTitle: "Tree Parts Drawing | Trunk Branches Bark Roots Leaves",
    metaDescription:
      "Learn tree parts drawing — trunk, branches, bark, roots, and leaves — with clear beginner diagrams and practice tips.",
    intro:
      "Understanding tree parts makes every later tutorial easier. Practice each part on its own, then combine them into a full tree.",
    difficulty: "Beginner",
    time: "18 min",
    image: "/images/categories/tree-parts.svg",
    imageAlt: "Tree parts drawing diagram of trunk branches bark roots and leaves",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "Labeled studies of trunk, bark texture, branch forks, roots, and leaf or needle clusters.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Trunk: draw two lines that are farther apart at the base. Bark: add short vertical or cracked marks without covering the whole trunk.",
          "Branches: start thick near the trunk and get thinner as they split. Roots: curve a few lines into the ground like gentle claws.",
          "Leaves: practice both “cloud canopy” clusters and simple leaf shapes. Combine all parts into one small finished tree at the end.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Drawing parts separately builds confidence fast. When something looks off in a full tree, check which part needs a second look.",
        ],
      },
    ],
  },
  {
    slug: "dead-spooky-scary-tree-drawing",
    status: "coming-soon",
    title: "Dead / Spooky / Scary Tree Drawing",
    metaTitle: "Dead Spooky Scary Tree Drawing | Halloween Tree Tutorial",
    metaDescription:
      "Draw dead, spooky, and scary trees with twisted branches, rough bark, and dramatic silhouettes — great for Halloween scenes.",
    intro:
      "Spooky trees use twist, silhouette, and texture more than leaves. Lean into crooked limbs and dramatic negative space.",
    difficulty: "Intermediate",
    time: "22 min",
    image: "/images/categories/dead-tree.svg",
    imageAlt: "Dead spooky scary tree drawing with twisted bare branches",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A bare, twisted tree with claw-like branches and rough bark — ideal for Halloween or moody landscapes.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Sketch a leaning trunk with an uneven base. Push branches in irregular directions — avoid perfect symmetry.",
          "Sharpen branch tips and add broken stubs. Overlap limbs so some pass in front of others for depth.",
          "Add bark cracks, knot holes, and a bold ground shadow. A moon circle or fog line boosts the spooky mood quickly.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Negative space between branches matters as much as the ink. Keep some sky holes so the silhouette stays readable.",
        ],
      },
    ],
  },
  {
    slug: "fruit-tree-drawing",
    status: "coming-soon",
    title: "Fruit Tree Drawing",
    metaTitle: "Fruit Tree Drawing | Apple Orange Lemon Tree Tutorial",
    metaDescription:
      "Learn fruit tree drawing with a simple canopy and round fruits — apple, orange, or lemon style trees for beginners and kids.",
    intro:
      "Fruit trees are cheerful and easy to customize. Start with a friendly canopy, then add round fruits as finishing accents.",
    difficulty: "Easy",
    time: "18 min",
    image: "/images/categories/fruit-tree.svg",
    imageAlt: "Fruit tree drawing with colorful round fruits in the canopy",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A leafy fruit tree with a clear trunk and scattered round fruits (apple, orange, lemon, or mixed).",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Draw a trunk and a rounded canopy cloud. Keep the canopy slightly uneven for a natural look.",
          "Add a few inner branches peeking through gaps. Place fruit as simple ovals — not too many, and not all the same size.",
          "Color fruit brighter than the leaves so they pop. A tiny ground shadow and maybe one fallen fruit finish the scene.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Cluster fruit in small groups of two or three. Leaving leaf gaps around fruit makes the drawing clearer at a glance.",
        ],
      },
    ],
  },
  {
    slug: "different-tree-species-drawing",
    status: "coming-soon",
    title: "Different Tree Species Drawing",
    metaTitle: "Different Tree Species Drawing | Compare Tree Types",
    metaDescription:
      "Practice different tree species drawing — compare oak, pine, palm, willow, and more so you can recognize and sketch each type.",
    intro:
      "Species practice trains your eye. Draw several tree types side by side and notice what makes each silhouette unique.",
    difficulty: "Intermediate",
    time: "30 min",
    image: "/images/tutorials/maple-leaf.svg",
    imageAlt: "Different tree species drawing comparison of multiple tree types",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A comparison strip of several species: oak (round canopy), pine (layered point), palm (fronds), willow (weeping), and one of your choice.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Divide your page into panels. In each panel, sketch only the silhouette first — no detail yet.",
          "Ask: Is the canopy round, pointed, hanging, or fan-shaped? Is the trunk thick, thin, or curved?",
          "Add just enough bark and leaf texture to confirm the species. Label each panel so the differences stick in memory.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Species recognition is mostly silhouette. If two trees look too similar, exaggerate the canopy shape before adding detail.",
        ],
      },
    ],
  },
  {
    slug: "nature-scene-tree-drawing",
    status: "coming-soon",
    title: "Nature Scene Tree Drawing (Forest / Jungle / Rainforest)",
    metaTitle: "Nature Scene Tree Drawing | Forest Jungle Rainforest",
    metaDescription:
      "Draw nature scenes with trees — forest, jungle, and rainforest tips for layering trunks, canopies, and depth in one composition.",
    intro:
      "Nature scenes are about layers. Learn how to place near, mid, and far trees for forest, jungle, or rainforest moods.",
    difficulty: "Intermediate",
    time: "30 min",
    image: "/images/categories/nature-trees.svg",
    imageAlt: "Nature scene tree drawing of a forest jungle rainforest landscape",
    updatedLabel: "Updated July 25, 2026",
    sections: [
      {
        heading: "What you will draw",
        paragraphs: [
          "A layered landscape with foreground, middle-ground, and background trees — adaptable to forest, jungle, or rainforest.",
        ],
      },
      {
        heading: "Step-by-step",
        paragraphs: [
          "Block three depth bands. Background trees are smaller, lighter, and simpler. Middle trees show clearer trunks. Foreground trees have the most detail.",
          "Forest: mix oak-like rounds and pine points. Jungle/rainforest: taller trunks, denser overlapping canopies, and vines or broad leaves in front.",
          "Unify the scene with one light direction and a shared ground path, river, or mist line so the trees feel like one place.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Overlap is your friend. Let canopies hide parts of trunks behind them — that single trick creates depth fast.",
        ],
      },
    ],
  },
];

export const tutorialSlugs = tutorials.map((tutorial) => tutorial.slug);

export function getTutorialBySlug(slug: string): TutorialPage | undefined {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}
