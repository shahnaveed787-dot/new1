import type { Metadata } from "next";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | TreeDraw",
  },
  description: "That page could not be found. Return home for easy and simple tree drawing lessons.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ComingSoon
      title="Page not found"
      description="That link wandered off the trail. Head home for easy and simple tree drawing lessons."
    />
  );
}
