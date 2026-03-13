"use client";

import { useDictionary } from "@/components/providers/language-provider";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/ui/page-hero";

export function ContactPageClient() {
  const dictionary = useDictionary();

  return (
    <>
      <PageHero {...dictionary.pageHeroes.contact} />
      <ContactSection details={dictionary.contactDetails} />
    </>
  );
}
