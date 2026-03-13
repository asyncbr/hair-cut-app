"use client";

import { useDictionary } from "@/components/providers/language-provider";
import { CTASection } from "@/components/sections/cta-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PageHero } from "@/components/ui/page-hero";

export function ServicesPageClient() {
  const dictionary = useDictionary();

  return (
    <>
      <PageHero {...dictionary.pageHeroes.services} />
      <ServicesGrid
        eyebrow={dictionary.pageCopy.services.eyebrow}
        title={dictionary.pageCopy.services.title}
        description={dictionary.pageCopy.services.description}
        services={dictionary.services}
      />
      <CTASection
        eyebrow={dictionary.pageCopy.services.ctaEyebrow}
        title={dictionary.pageCopy.services.ctaTitle}
        description={dictionary.pageCopy.services.ctaDescription}
        primary={{ href: dictionary.contactDetails.whatsappHref, label: dictionary.pageCopy.services.ctaPrimaryLabel }}
        secondary={{
          href: `mailto:${dictionary.contactDetails.email}`,
          label: dictionary.pageCopy.services.ctaSecondaryLabel,
        }}
      />
    </>
  );
}
