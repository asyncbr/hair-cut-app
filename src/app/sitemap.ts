import type { MetadataRoute } from "next";

import { praiaDoCorteContent } from "@/content/customers/praia-do-corte";
import { defaultLanguage, getDictionary } from "@/content/dictionaries";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const northlineSeo = getDictionary(defaultLanguage).seo;
  const northlinePages = [
    "/northline/",
    ...Object.values(northlineSeo.pages)
      .filter((page) => page.path !== "/")
      .map((page) => page.path),
  ];

  return [
    {
      url: absoluteUrl(praiaDoCorteContent.site.domain, praiaDoCorteContent.seo.canonicalPath),
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...northlinePages.map((path) => ({
      url: absoluteUrl(praiaDoCorteContent.site.domain, path),
      lastModified: "2026-03-24",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
