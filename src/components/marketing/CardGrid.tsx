import { TutorialCard } from "@/components/marketing/TutorialCard";
import { CategoryCard } from "@/components/marketing/CategoryCard";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import type { CategoryCard as CategoryCardData, TutorialCard as TutorialCardData } from "@/content/homepage";

type TutorialGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TutorialCardData[];
  id?: string;
};

export function TutorialCardGrid({
  eyebrow,
  title,
  description,
  items,
  id,
}: TutorialGridProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          id={id ? `${id}-title` : undefined}
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.slug}>
              <TutorialCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type CategoryGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: CategoryCardData[];
};

export function CategoryCardGrid({
  eyebrow,
  title,
  description,
  items,
}: CategoryGridProps) {
  return (
    <section id="categories" className="scroll-mt-24 bg-green-light/40 py-14 md:py-20" aria-labelledby="categories-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          id="categories-title"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug}>
              <CategoryCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
