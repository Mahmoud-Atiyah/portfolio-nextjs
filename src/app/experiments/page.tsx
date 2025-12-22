import type { Metadata } from "next";
import { ExperimentsClient } from "@/components/experiments/ExperimentsClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Experiments | ${siteConfig.name}`,
  description: "Experimental interactive and gameplay projects.",
};

export default function ExperimentsPage() {
  return <ExperimentsClient />;
}
