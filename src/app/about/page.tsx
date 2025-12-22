import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "About Mahmoud Atiyah, web developer, automation partner, and brand designer.",
};

export default function AboutPage() {
  return <AboutClient />;
}
