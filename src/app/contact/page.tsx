import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/ui/page-hero";
import { seoConfig } from "@/config/seo";
import { contactDetails } from "@/content/contact";
import { pageHeroes } from "@/content/pages";

const pageSeo = seoConfig.pages.contact;

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
  return (
    <>
      <PageHero {...pageHeroes.contact} />
      <ContactSection details={contactDetails} />
    </>
  );
}
