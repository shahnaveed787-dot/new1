import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";
import { buildPageMetadata } from "@/lib/page-metadata";
import { permalink } from "@/lib/permalinks";

export function comingSoonMetadata(title: string, slug: string): Metadata {
  return buildPageMetadata({
    title: `${title} — Coming Soon`,
    description: `${title} is coming soon on TreeDraw. Meanwhile, explore easy and simple tree drawing on the homepage.`,
    path: permalink(slug),
    // Post-name URL: index + follow while the lesson is prepared.
    noIndex: false,
  });
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
