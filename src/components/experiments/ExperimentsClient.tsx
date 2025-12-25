"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { experiments } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ExperimentsClient() {
  return (
    <main className="mx-auto w-full max-w-[1100px] space-y-10 px-4 pb-24 pt-12 sm:px-6 md:pt-16 2xl:max-w-[1200px]">
      <motion.section variants={staggerContainer} initial="hidden" animate="show">
        <motion.div variants={fadeUp()} className="space-y-4">
          <Badge variant="accent">Experiments</Badge>
          <h1 className="text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
            R and D Playground
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Explorations in gameplay, mechanics, and interactive systems. These projects are
            intentionally experimental and separate from client delivery work.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {experiments.map((experiment) => (
            <motion.article key={experiment.slug} variants={fadeUp()}>
              <Card className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={experiment.hero.image}
                    alt={experiment.hero.alt}
                    width={1200}
                    height={800}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      {experiment.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{experiment.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experiment.stack.map((item) => (
                      <Badge key={item} variant="default">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experiment.links.map((link) => (
                      <Button key={link.href} asChild variant="outline" size="sm">
                        <Link href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
