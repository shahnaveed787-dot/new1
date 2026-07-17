import { ComingSoonPage, comingSoonMetadata } from "@/components/marketing/ComingSoonPage";
import { learningRoadmap } from "@/content/homepage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return learningRoadmap.map((step) => ({ slug: step.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return comingSoonMetadata(`${title} — Learning Step`);
}

export default async function TutorialStepPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <ComingSoonPage
      title={`${title} step coming soon`}
      description="This learning-path step will open as a full practice lesson soon. Meanwhile, follow the homepage roadmap images to practice each stage."
    />
  );
}
