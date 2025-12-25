import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const normalizeSlug = (slug: string) => decodeURIComponent(slug).trim().toLowerCase();

const findProjectBySlug = (slug: string) => {
  const normalized = normalizeSlug(slug);
  return projects.find((item) => normalizeSlug(item.slug) === normalized);
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: normalizeSlug(project.slug) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Work`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [
        {
          url: project.hero.image,
          width: 1200,
          height: 630,
          alt: project.hero.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1100px] space-y-10 px-4 pb-20 pt-10 sm:px-6 md:space-y-12 md:pb-24 md:pt-16 2xl:max-w-[1200px]">
      <section className="grid items-start gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface/70 p-3 sm:p-4">
          <Image
            src={project.hero.image}
            alt={project.hero.alt}
            width={1200}
            height={800}
            className="h-full w-full rounded-[24px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <Badge variant="accent">Work</Badge>
            <h1 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category} variant="neon">
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/work">Back to Work</Link>
            </Button>
            {project.links.map((link) => (
              <Button key={link.href} asChild variant="neon">
                <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Role</h2>
          <p className="mt-3 text-sm text-foreground/90">{project.role}</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Timeline</h2>
          <p className="mt-3 text-sm text-foreground/90">{project.timeline}</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <Badge key={tool} variant="default">
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr,1fr]">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">Context</h2>
          <p className="mt-3 text-sm text-muted-foreground">{project.context}</p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">Goals</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr,1fr]">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">Constraints</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.constraints.map((constraint) => (
              <li key={constraint} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2" />
                <span>{constraint}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">What I Delivered</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr,1fr]">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">Solution Highlights</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.solution.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">Results</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-foreground">SEO + Automation Notes</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.seoAutomationNotes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <Badge variant="accent">Gallery</Badge>
          <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em]">Project Visuals</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <Card key={`${image.image}-${index}`} className="overflow-hidden p-3">
              <Image
                src={image.image}
                alt={image.alt}
                width={1200}
                height={800}
                className="h-full w-full rounded-2xl object-cover"
              />
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
