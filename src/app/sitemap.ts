import type { MetadataRoute } from "next";
import { designShowcase, projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();
  const staticRoutes = ["", "/work", "/design", "/about", "/experiments", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
    })),
    ...projects.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified,
    })),
    ...designShowcase.map((item) => ({
      url: `${baseUrl}/design/${item.slug}`,
      lastModified,
    })),
  ];
}
