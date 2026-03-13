"use client";

import { useDictionary } from "@/components/providers/language-provider";
import { CTASection } from "@/components/sections/cta-section";
import { ProjectGrid } from "@/components/sections/project-grid";
import { PageHero } from "@/components/ui/page-hero";

export function WorkPageClient() {
  const dictionary = useDictionary();

  return (
    <>
      <PageHero {...dictionary.pageHeroes.work} />
      <ProjectGrid
        eyebrow={dictionary.pageCopy.work.eyebrow}
        title={dictionary.pageCopy.work.title}
        description={dictionary.pageCopy.work.description}
        projects={dictionary.projects}
      />
      <CTASection
        eyebrow={dictionary.pageCopy.work.ctaEyebrow}
        title={dictionary.pageCopy.work.ctaTitle}
        description={dictionary.pageCopy.work.ctaDescription}
        primary={{ href: dictionary.contactDetails.whatsappHref, label: dictionary.pageCopy.work.ctaPrimaryLabel }}
        secondary={{
          href: `mailto:${dictionary.contactDetails.email}`,
          label: dictionary.pageCopy.work.ctaSecondaryLabel,
        }}
      />
    </>
  );
}
