import type { Metadata } from "next";
import { WorkClient } from "@/components/work/WorkClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Work | ${siteConfig.name}`,
  description: "Work across web, SEO, automation, and branding projects.",
};

export default function WorkPage() {
  return <WorkClient />;
}
