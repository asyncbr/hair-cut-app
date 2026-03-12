import type { MetadataRoute } from "next";

import { seoConfig } from "@/config/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seoConfig.pages).map((page) => ({
    url: absoluteUrl(seoConfig.siteUrl, page.path),
    lastModified: "2026-03-12",
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
