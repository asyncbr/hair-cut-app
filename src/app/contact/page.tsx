import type { Metadata } from "next";

import { ContactPageClient } from "@/components/pages/contact-page-client";
import { defaultLanguage, getDictionary } from "@/content/dictionaries";

const pageSeo = getDictionary(defaultLanguage).seo.pages.contact;

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

export default function ContactPage() {
  return <ContactPageClient />;
}
