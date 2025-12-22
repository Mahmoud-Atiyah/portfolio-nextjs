import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();
  const staticRoutes = ["", "/work", "/about", "/experiments", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
    })),
    ...projects.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified,
    })),
  ];
}
