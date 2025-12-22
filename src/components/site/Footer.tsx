import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex w-[min(1200px,92vw)] flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-display text-foreground">{siteConfig.name}</div>
          <p className="mt-2 max-w-md">
            Building conversion-focused websites, brand systems, and automation workflows for
            local businesses.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            {siteConfig.email}
          </Link>
          <Link href={`tel:${siteConfig.phone}`} className="hover:text-foreground">
            {siteConfig.phone}
          </Link>
          <div className="flex gap-4">
            <Link href={siteConfig.links.linkedin} className="hover:text-foreground">
              LinkedIn
            </Link>
            <Link href={siteConfig.links.github} className="hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
