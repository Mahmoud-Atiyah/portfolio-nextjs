"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { skillsByOutcome, tooling } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function AboutClient() {
  return (
    <main className="mx-auto w-[min(1100px,92vw)] space-y-12 pb-24 pt-12 md:pt-16">
      <motion.section
        className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp()} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface/70 p-4">
            <Image
              src="/images/img2.png"
              alt="Mahmoud Atiyah portrait"
              width={520}
              height={680}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp(0.1)} className="space-y-6">
          <Badge variant="accent">About</Badge>
          <h1 className="text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
            BizOps-led delivery
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            I am a Houston-based BizOps Engineer who builds systems that connect marketing,
            operations, and engineering. The focus is practical: conversion-ready websites, SEO
            foundations, and automation that helps teams respond faster and close more work.
          </p>
          <p className="text-sm text-muted-foreground md:text-base">
            I deliver modern web builds beyond Elementor, design brand systems that stay
            consistent, and connect lead flows to CRMs with Zapier, n8n, and GoHighLevel. The common
            thread is clarity: clear positioning, clear conversion paths, and clear operations.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Card className="p-5">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Location
              </h2>
              <p className="mt-2 text-sm text-foreground/90">{siteConfig.location}</p>
            </Card>
            <Card className="p-5">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Focus
              </h2>
              <p className="mt-2 text-sm text-foreground/90">
                BizOps systems, conversion sites, SEO, automation, and brand systems.
              </p>
            </Card>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-8">
          <Badge variant="accent">Skills by outcome</Badge>
          <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] md:text-4xl">
            What I deliver
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillsByOutcome.map((group) => (
            <motion.div key={group.title} variants={fadeUp()}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-6">
          <Badge variant="accent">Tooling</Badge>
          <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] md:text-4xl">
            Stack + platforms
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-2">
          {tooling.map((tool) => (
            <motion.div key={tool} variants={fadeUp()}>
              <Badge variant="neon">{tool}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
