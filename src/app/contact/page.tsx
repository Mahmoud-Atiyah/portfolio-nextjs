import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactClient } from "@/components/contact/ContactClient";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: "Book a call or request a project quote.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  );
}
