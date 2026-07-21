import { redirect } from "next/navigation";
import { learningRoadmap } from "@/content/homepage";
import { permalink } from "@/lib/permalinks";

type Props = { params: Promise<{ slug: string }> };

/** Legacy /tutorial-step/:slug → WordPress postname /:slug/ */
export function generateStaticParams() {
  return learningRoadmap.map((step) => ({ slug: step.id }));
}

export default async function LegacyTutorialStepRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(permalink(slug));
}
