import type { MetadataRoute } from "next";
import { articles, site } from "@/content/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/projects`, priority: 0.8 },
    { url: `${site.url}/projects/her-aviation-era`, priority: 0.8 },
    { url: `${site.url}/articles`, priority: 0.6 },
    ...articles.map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      priority: 0.5,
    })),
  ];
}
