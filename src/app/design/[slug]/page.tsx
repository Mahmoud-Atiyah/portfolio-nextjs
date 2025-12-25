import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { designShowcase } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const normalizeSlug = (slug: string) => decodeURIComponent(slug).trim().toLowerCase();

const findDesignBySlug = (slug: string) => {
  const normalized = normalizeSlug(slug);
  return designShowcase.find((item) => normalizeSlug(item.slug) === normalized);
};

export function generateStaticParams() {
  return designShowcase.map((item) => ({ slug: normalizeSlug(item.slug) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = findDesignBySlug(slug);
  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | Design`,
    description: item.summary,
    openGraph: {
      title: `${item.title} | ${siteConfig.name}`,
      description: item.summary,
      images: [
        {
          url: item.hero.image,
          width: 1200,
          height: 630,
          alt: item.hero.alt,
        },
      ],
    },
  };
}

export default async function DesignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findDesignBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-12 px-4 pb-24 pt-12 sm:px-6 md:pt-16 2xl:max-w-[1320px]">
      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface/70 p-3 sm:p-4">
          <Image
            src={item.hero.image}
            alt={item.hero.alt}
            width={1200}
            height={800}
            priority
            className="h-full w-full rounded-[24px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <Badge variant="accent">Design</Badge>
            <h1 className="mt-4 text-3xl font-display uppercase tracking-[0.12em] md:text-5xl">
              {item.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">{item.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.categories.map((category) => (
              <Badge key={category} variant="neon">
                {category}
              </Badge>
            ))}
          </div>
          <Card className="p-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Deliverables</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {item.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-2" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/design">Back to Design</Link>
            </Button>
            {item.caseStudySlug && (
              <Button asChild variant="neon">
                <Link
                  href={`/work/${encodeURIComponent(
                    item.caseStudySlug.trim().toLowerCase()
                  )}`}
                >
                  View Related Case Study
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {item.gallery && item.gallery.length > 0 && (
        <section className="space-y-6">
          <div>
            <Badge variant="accent">Gallery</Badge>
            <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] md:text-4xl">
              Visual Assets
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {item.gallery.map((image, index) => (
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
      )}

      {item.videos && item.videos.length > 0 && (
        <section className="space-y-6">
          <div>
            <Badge variant="accent">Video</Badge>
            <h2 className="mt-4 text-2xl font-display uppercase tracking-[0.12em] md:text-4xl">
              Motion and social clips
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {item.videos.map((video) => (
              <Card key={video.src} className="overflow-hidden p-3">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {video.label}
                  </p>
                  <video
                    controls
                    preload="metadata"
                    poster={video.poster}
                    className="w-full rounded-2xl"
                  >
                    <source src={video.src} />
                  </video>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
