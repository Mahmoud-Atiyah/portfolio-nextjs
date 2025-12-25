import type { Metadata } from "next";
import { DesignClient } from "@/components/design/DesignClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Design | ${siteConfig.name}`,
  description: "Brand systems, logos, print collateral, and social content.",
};

export default function DesignPage() {
  return <DesignClient />;
}
