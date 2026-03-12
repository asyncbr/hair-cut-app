import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustBar } from "@/components/sections/trust-bar";
import { seoConfig } from "@/config/seo";
import { contactDetails } from "@/content/contact";
import { differentiators, homePageContent, processSteps, trustItems } from "@/content/company";
import { featuredProjects } from "@/content/projects";
import { services } from "@/content/services";

const pageSeo = seoConfig.pages.home;

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

const sections = {
  trust: <TrustBar intro={homePageContent.trustIntro} items={trustItems} />,
  services: (
    <ServicesGrid
      eyebrow={homePageContent.servicesHeading.eyebrow}
      title={homePageContent.servicesHeading.title}
      description={homePageContent.servicesHeading.description}
      services={services}
    />
  ),
  differentiators: (
    <DifferentiatorsSection
      eyebrow={homePageContent.differentiatorsHeading.eyebrow}
      title={homePageContent.differentiatorsHeading.title}
      description={homePageContent.differentiatorsHeading.description}
      items={differentiators}
    />
  ),
  projects: (
    <ProjectGrid
      eyebrow={homePageContent.projectsHeading.eyebrow}
      title={homePageContent.projectsHeading.title}
      description={homePageContent.projectsHeading.description}
      projects={featuredProjects}
    />
  ),
  process: (
    <ProcessSection
      eyebrow={homePageContent.processHeading.eyebrow}
      title={homePageContent.processHeading.title}
      description={homePageContent.processHeading.description}
      steps={processSteps}
    />
  ),
  cta: (
    <CTASection
      eyebrow={homePageContent.cta.eyebrow}
      title={homePageContent.cta.title}
      description={homePageContent.cta.description}
      primary={{ href: contactDetails.whatsappHref, label: homePageContent.cta.primaryLabel }}
      secondary={{ href: `mailto:${contactDetails.email}`, label: homePageContent.cta.secondaryLabel }}
    />
  ),
};

export default function HomePage() {
  return (
    <>
      <HeroSection {...homePageContent.hero} />
      {homePageContent.sectionOrder.map((section) => (
        <div key={section}>{sections[section]}</div>
      ))}
    </>
  );
}
