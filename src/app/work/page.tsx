import type { Metadata } from "next";

import { WorkPageClient } from "@/components/pages/work-page-client";
import { defaultLanguage, getDictionary } from "@/content/dictionaries";

const pageSeo = getDictionary(defaultLanguage).seo.pages.work;

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  alternates: {
    canonical: pageSeo.path,
  },
  openGraph: {
    title: pageSeo.ogTitle,
    description: pageSeo.ogDescription,
    url: pageSeo.path,
  },
  twitter: {
    title: pageSeo.ogTitle,
    description: pageSeo.ogDescription,
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
