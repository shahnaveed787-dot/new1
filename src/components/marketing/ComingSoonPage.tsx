import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export function comingSoonMetadata(title: string): Metadata {
  return {
    title: `${title} — Coming Soon`,
    description: `${title} is coming soon on TreeDraw. Meanwhile, explore easy and simple tree drawing on the homepage.`,
    robots: { index: false, follow: true },
  };
}

export function ComingSoonPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return <ComingSoon title={title} description={description} />;
}
