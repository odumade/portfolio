import { portfolio } from "@/data/portfolio";
import { siteUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl(portfolio.siteUrl);
  const paths = [
    "",
    "/case-studies",
    "/blog",
    "/resume",
    "/privacy",
    "/terms",
    "/disclaimer",
    ...portfolio.projects.map((project) => `/case-studies/${project.slug}`),
    ...portfolio.blog.map((post) => `/blog/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
