"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const filters = [
  "All",
  "Web & SEO Systems",
  "Branding & Identity",
  "Automation & Ops",
  "Engineering Apps",
];

export function WorkClient() {
  return (
    <main className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-10 sm:px-6 sm:pt-12 md:pt-16 2xl:max-w-[1320px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={fadeUp()}>
          <Badge variant="accent">Work</Badge>
          <h1 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] sm:text-3xl md:text-5xl">
            Work + Projects
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Filter by focus area to see how each project blends experience, conversion, and
            technical execution.
          </p>
        </motion.div>

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
                ? projects
                : projects.filter((study) => study.categories.includes(filter));

            return (
              <TabsContent key={filter} value={filter}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid gap-5 sm:gap-6 lg:grid-cols-2"
                >
                  {items.map((study) => (
                    <motion.article key={study.slug} variants={fadeUp()}>
                      <Card className="overflow-hidden">
                        <div className="relative">
                          <Image
                            src={study.hero.image}
                            alt={study.hero.alt}
                            width={1200}
                            height={800}
                            className="h-44 w-full object-cover sm:h-56"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            {study.categories.map((category) => (
                              <Badge key={category} variant="neon">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4 p-4 sm:p-6">
                          <div>
                            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                              {study.title}
                            </h2>
                            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                              {study.summary}
                            </p>
                          </div>

                          <div className="grid gap-3 text-xs text-muted-foreground sm:text-sm">
                            <div>
                              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Role
                              </span>
                              <p className="mt-1 text-foreground/90">{study.role}</p>
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Stack
                              </span>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {study.stack.slice(0, 4).map((tool) => (
                                  <Badge key={tool} variant="default">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Deliverables
                              </span>
                              <ul className="mt-2 space-y-1">
                                {study.deliverables.slice(0, 2).map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Results
                              </span>
                              <ul className="mt-2 space-y-1">
                                {study.outcomes.slice(0, 2).map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <Button asChild variant="outline" className="w-full sm:w-fit">
                            <Link
                              href={`/work/${encodeURIComponent(
                                study.slug.trim().toLowerCase()
                              )}`}
                            >
                              View Project
                            </Link>
                          </Button>
                        </div>
                      </Card>
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.div>
    </main>
  );
}
