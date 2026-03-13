import type { Metadata } from "next";

import { ServicesPageClient } from "@/components/pages/services-page-client";
import { defaultLanguage, getDictionary } from "@/content/dictionaries";

const pageSeo = getDictionary(defaultLanguage).seo.pages.services;

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

export default function ServicesPage() {
  return <ServicesPageClient />;
}
