import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PageHero } from "@/components/ui/page-hero";
import { seoConfig } from "@/config/seo";
import { contactDetails } from "@/content/contact";
import { pageHeroes } from "@/content/pages";
import { services } from "@/content/services";

const pageSeo = seoConfig.pages.services;

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
  return (
    <>
      <PageHero {...pageHeroes.services} />
      <ServicesGrid
        eyebrow="What we offer"
        title="Clear service options for routine upkeep and important moments"
        description="Choose the appointment that matches your current style, maintenance level, and how polished you want the finish to feel."
        services={services}
      />
      <CTASection
        eyebrow="Not sure what to book?"
        title="Describe the look you want and Northline will point you to the right service."
        description="A short message is enough to sort out whether you need a full cut, a beard cleanup, or a more complete grooming session."
        primary={{ href: contactDetails.whatsappHref, label: "Ask on WhatsApp" }}
        secondary={{ href: `mailto:${contactDetails.email}`, label: "Email the shop" }}
      />
    </>
  );
}
