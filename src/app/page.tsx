"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  clientResults,
  experienceHighlights,
  proofPoints,
  projects,
  services,
  skillsByOutcome,
} from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

export default function HomePage() {
  return (
    <main className="space-y-24 pb-24">
      <motion.section
        className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 pt-16 sm:px-6 md:grid-cols-[1.05fr,0.95fr] md:pt-24 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-7">
          <motion.div variants={fadeUp()}>
            <Badge variant="neon">Available for new builds and ongoing partnerships</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp(0.1)}
            className="text-4xl font-display uppercase leading-[1.05] tracking-[0.12em] text-foreground md:text-6xl"
          >
            BizOps Engineer
            <span className="block text-gradient">Automation + SEO</span>
            Systems
          </motion.h1>
          <motion.p
            variants={fadeUp(0.2)}
            className="max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I build conversion-ready websites, SEO foundations, and automation workflows for
            service businesses. Strategy, build, and launch all in one neon-lit workshop.
          </motion.p>
          <motion.div variants={fadeUp(0.3)} className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Book a Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View Work</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/assets/resume.pdf" download>
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {proofPoints.map((point) => (
              <motion.div key={point.title} variants={fadeUp()}>
                <Card className="panel-angled p-5">
                  <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{point.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp(0.25)} className="relative">
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl" />
          <div className="absolute -right-8 top-8 h-28 w-28 rounded-3xl border border-accent/40 bg-surface/60 shadow-neon" />
          <div className="absolute left-6 top-24 h-16 w-32 rounded-full border border-border/60 bg-surface-2/80" />
          <div className="absolute right-10 bottom-14 h-12 w-12 rounded-full border border-accent-2/60 bg-surface/70 shadow-halo" />

          <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface/60 p-4">
            <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_40%,hsl(var(--accent)_/_0.08),transparent_60%)]" />
            <Image
              src="/images/img1.png"
              alt="Portrait of Mahmoud Atiyah"
              width={520}
              height={640}
              priority
              className="relative z-10 h-full w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["SEO + Local", "Funnels", "Automations"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-[1200px] space-y-10 px-4 sm:px-6 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()}>
          <Badge variant="accent">Featured projects</Badge>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
            Projects That Drive Results
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            A mix of websites, branding, SEO, and automation systems built for local businesses.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.article key={project.slug} variants={fadeUp()}>
              <Card className="overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.hero.image}
                    alt={project.hero.alt}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="neon">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                  </div>
                  <div className="grid gap-2 text-sm text-muted-foreground">
                    {project.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-fit">
                    <Link
                      href={`/work/${encodeURIComponent(
                        project.slug.trim().toLowerCase()
                      )}`}
                    >
                      View Project
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-8">
          <Badge variant="accent">Services</Badge>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
            What I Build
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp()}>
              <Card className="panel-angled p-6">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-8">
          <Badge variant="accent">Experience</Badge>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
            Experience Across Ops and Engineering
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experienceHighlights.map((item) => (
            <motion.div key={item.title} variants={fadeUp()}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-8">
          <Badge variant="accent">Skills</Badge>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
            Skills Built Around Outcomes
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
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 2xl:max-w-[1320px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()} className="mb-8">
          <Badge variant="accent">Client results</Badge>
          <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
            Outcomes Over Hype
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Real results, real businesses. Metrics vary by project, but the goal is always clear:
            more leads, faster response, stronger brand presence.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {clientResults.map((result) => (
            <motion.div key={result.title} variants={fadeUp()}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{result.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{result.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 2xl:max-w-[1200px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp()}>
          <Card className="panel-angled border-accent/40 bg-[linear-gradient(130deg,hsl(var(--surface)),hsl(var(--surface-2)))] p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <Badge variant="neon">Ready to build</Badge>
                <h2 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-4xl">
                  Let&apos;s ship your next conversion win
                </h2>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                  Tell me about your next launch, and I will map the fastest path to measurable
                  growth.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`mailto:${siteConfig.email}`}>Email Me</Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  );
}
