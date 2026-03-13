"use client";

import { CTASection } from "@/components/sections/cta-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustBar } from "@/components/sections/trust-bar";
import { useDictionary } from "@/components/providers/language-provider";

export function HomePageClient() {
  const dictionary = useDictionary();
  const featuredProjects = dictionary.projects.filter((project) => project.featured);

  const sections = {
    trust: <TrustBar intro={dictionary.homePageContent.trustIntro} items={dictionary.trustItems} />,
    services: (
      <ServicesGrid
        eyebrow={dictionary.homePageContent.servicesHeading.eyebrow}
        title={dictionary.homePageContent.servicesHeading.title}
        description={dictionary.homePageContent.servicesHeading.description}
        services={dictionary.services}
      />
    ),
    differentiators: (
      <DifferentiatorsSection
        eyebrow={dictionary.homePageContent.differentiatorsHeading.eyebrow}
        title={dictionary.homePageContent.differentiatorsHeading.title}
        description={dictionary.homePageContent.differentiatorsHeading.description}
        items={dictionary.differentiators}
      />
    ),
    projects: (
      <ProjectGrid
        eyebrow={dictionary.homePageContent.projectsHeading.eyebrow}
        title={dictionary.homePageContent.projectsHeading.title}
        description={dictionary.homePageContent.projectsHeading.description}
        projects={featuredProjects}
      />
    ),
    process: (
      <ProcessSection
        eyebrow={dictionary.homePageContent.processHeading.eyebrow}
        title={dictionary.homePageContent.processHeading.title}
        description={dictionary.homePageContent.processHeading.description}
        steps={dictionary.processSteps}
      />
    ),
    cta: (
      <CTASection
        eyebrow={dictionary.homePageContent.cta.eyebrow}
        title={dictionary.homePageContent.cta.title}
        description={dictionary.homePageContent.cta.description}
        primary={{
          href: dictionary.contactDetails.whatsappHref,
          label: dictionary.homePageContent.cta.primaryLabel,
        }}
        secondary={{
          href: `mailto:${dictionary.contactDetails.email}`,
          label: dictionary.homePageContent.cta.secondaryLabel,
        }}
      />
    ),
  };

  return (
    <>
      <HeroSection {...dictionary.homePageContent.hero} />
      {dictionary.homePageContent.sectionOrder.map((section) => (
        <div key={section}>{sections[section]}</div>
      ))}
    </>
  );
}
