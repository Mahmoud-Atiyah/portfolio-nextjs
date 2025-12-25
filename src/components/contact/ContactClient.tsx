"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

export function ContactClient() {
  return (
    <main className="mx-auto w-full max-w-[1100px] space-y-12 px-4 pb-24 pt-12 sm:px-6 md:pt-16 2xl:max-w-[1200px]">
      <motion.section variants={staggerContainer} initial="hidden" animate="show">
        <motion.div variants={fadeUp()} className="space-y-4">
          <Badge variant="accent">Contact</Badge>
          <h1 className="text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
            Let&apos;s build your next launch
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Share a few details about your project and I will reply with timeline, next steps, and
            a clear scope. Typical response time: within 24 hours.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]"
      >
        <motion.div variants={fadeUp()}>
          <Card className="p-6 md:p-8">
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Name
                  </label>
                  <Input id="contact-name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-project"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Project type
                </label>
                <Input
                  id="contact-project"
                  name="project"
                  placeholder="Website, funnel, branding, automation"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-details"
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Project details
                </label>
                <Textarea
                  id="contact-details"
                  name="details"
                  placeholder="What are you trying to launch or improve?"
                  required
                />
              </div>
              <Button type="submit" size="lg">
                Send Project Details
              </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Prefer email? Reach me directly at {siteConfig.email}.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp()} className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground">Contact details</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="text-xs uppercase tracking-[0.2em]">Email</span>
                <Link href={`mailto:${siteConfig.email}`} className="block text-foreground/90">
                  {siteConfig.email}
                </Link>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em]">Phone</span>
                <Link href={`tel:${siteConfig.phone}`} className="block text-foreground/90">
                  {siteConfig.phone}
                </Link>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em]">Location</span>
                <p className="text-foreground/90">{siteConfig.location}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground">Availability</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Accepting new builds and optimization engagements. Most projects ship in 2-6 weeks
              depending on scope.
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild variant="outline">
                <Link href="/work">View Work</Link>
              </Button>
              <Button asChild variant="neon">
                <Link href={`mailto:${siteConfig.email}`}>Email Me</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  );
}
