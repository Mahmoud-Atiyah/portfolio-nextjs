"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-foreground"
        >
          <span className="text-3xl font-display tracking-[0.12em] text-gradient">
            MA
          </span>
          <span className="hidden text-sm uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Neon Workshop
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground",
                isActive(item.href) && "text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline">
            <Link href={`mailto:${siteConfig.email}`}>Book a Call</Link>
          </Button>
          <Button asChild variant="neon">
            <Link href="/work">View Work</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative h-10 w-10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={cn(
              "absolute left-1/2 top-3 h-0.5 w-6 -translate-x-1/2 bg-foreground transition",
              open && "top-1/2 rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-foreground transition",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "absolute left-1/2 bottom-3 h-0.5 w-6 -translate-x-1/2 bg-foreground transition",
              open && "bottom-1/2 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border/70 bg-background/95 px-[4vw] py-4 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl border border-border/60 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground",
                isActive(item.href) && "border-accent/60 text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="justify-center">
            <Link href={`mailto:${siteConfig.email}`}>Book a Call</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
