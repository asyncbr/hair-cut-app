import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { PageHero } from "@/components/ui/page-hero";
import { seoConfig } from "@/config/seo";
import { contactDetails } from "@/content/contact";
import { pageHeroes } from "@/content/pages";
import { projects } from "@/content/projects";

const pageSeo = seoConfig.pages.work;

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
  return (
    <>
      <PageHero {...pageHeroes.work} />
      <ProjectGrid
        eyebrow="Signature outcomes"
        title="Northline appointments are shaped around context, not one-size-fits-all templates"
        description="The best result depends on how you wear the style, how often you book, and whether the appointment is for maintenance or a key event."
        projects={projects}
      />
      <CTASection
        eyebrow="Ready for your version?"
        title="Book an appointment that fits your schedule and the look you need."
        description="Northline can help you plan the right timing for routine upkeep, event grooming, or a complete refresh."
        primary={{ href: contactDetails.whatsappHref, label: "Book on WhatsApp" }}
        secondary={{ href: `mailto:${contactDetails.email}`, label: "Send appointment details" }}
      />
    </>
  );
}
