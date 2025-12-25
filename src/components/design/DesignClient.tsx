"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { designShowcase } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const filters = ["All", "Brand Systems", "Logo & Identity", "Print & Collateral", "Social Content"];

export function DesignClient() {
  const featured = designShowcase.filter((item) => item.featured);

  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-10 px-4 pb-24 pt-12 sm:px-6 md:space-y-12 md:pt-16 2xl:max-w-[1320px]">
      <motion.section variants={staggerContainer} initial="hidden" animate="show">
        <motion.div variants={fadeUp()} className="space-y-4">
          <Badge variant="accent">Design</Badge>
          <h1 className="text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
            Brand systems and visual assets
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Logos, collateral, and social content that keep brand presence consistent across
            touchpoints.
          </p>
        </motion.div>
      </motion.section>

      {featured.length > 0 && (
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.div variants={fadeUp()}>
            <Badge variant="neon">Featured</Badge>
            <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] md:text-4xl">
              Brand systems in focus
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <motion.article key={item.slug} variants={fadeUp()}>
                <DesignCard {...item} />
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section variants={staggerContainer} initial="hidden" animate="show">
        <Tabs defaultValue="All">
          <TabsList>
            {filters.map((filter) => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>

          {filters.map((filter) => {
            const items =
              filter === "All"
                ? designShowcase
                : designShowcase.filter((item) => item.categories.includes(filter));

            return (
              <TabsContent key={filter} value={filter}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid gap-5 sm:gap-6 md:grid-cols-2"
                >
                  {items.map((item) => (
                    <motion.article key={item.slug} variants={fadeUp()}>
                      <DesignCard {...item} />
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.section>
    </main>
  );
}

function DesignCard({
  slug,
  title,
  client,
  summary,
  categories,
  deliverables,
  hero,
}: {
  slug: string;
  title: string;
  client: string;
  summary: string;
  categories: string[];
  deliverables: string[];
  hero: { image: string; alt: string };
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={hero.image}
          alt={hero.alt}
          width={1200}
          height={800}
          className="h-48 w-full object-cover sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="neon">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{client}</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Deliverables
          </p>
          <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:text-sm">
            {deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild variant="outline" className="w-full sm:w-fit">
          <Link href={`/design/${encodeURIComponent(slug.trim().toLowerCase())}`}>
            View Design
          </Link>
        </Button>
      </div>
    </Card>
  );
}
