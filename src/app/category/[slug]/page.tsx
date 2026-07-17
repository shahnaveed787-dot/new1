import { ComingSoonPage, comingSoonMetadata } from "@/components/marketing/ComingSoonPage";
import { drawingCategories } from "@/content/homepage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return drawingCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return comingSoonMetadata(title);
}

export default async function CategoryPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <ComingSoonPage
      title={title}
      description={`The ${title} category page is being illustrated now. Head home to explore easy and simple tree drawing while we finish this path.`}
    />
  );
}
