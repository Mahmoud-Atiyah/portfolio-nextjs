import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between 2xl:max-w-[1320px]">
        <div>
          <div className="text-2xl font-display text-foreground">{siteConfig.name}</div>
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
      <div className="mx-auto mt-6 w-full max-w-[1200px] px-4 text-xs text-muted-foreground/70 sm:px-6 2xl:max-w-[1320px]">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
