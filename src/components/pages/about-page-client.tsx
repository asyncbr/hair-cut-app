"use client";

import { useDictionary } from "@/components/providers/language-provider";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export function AboutPageClient() {
  const dictionary = useDictionary();

  return (
    <>
      <PageHero {...dictionary.pageHeroes.about} />
      <Section className="pt-6">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {dictionary.pageCopy.about.philosophyEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-foreground)]">{dictionary.company.tagline}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{dictionary.aboutPageContent.intro}</p>
          </article>
          <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-white/4 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {dictionary.pageCopy.about.noticeEyebrow}
            </p>
            <ul className="mt-6 grid gap-4">
              {dictionary.aboutPageContent.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/8 px-4 py-4 text-sm leading-7 text-[var(--color-foreground)]">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {dictionary.differentiators.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </Container>
      </Section>
      <CTASection
        eyebrow={dictionary.pageCopy.about.ctaEyebrow}
        title={dictionary.pageCopy.about.ctaTitle}
        description={dictionary.pageCopy.about.ctaDescription}
        primary={{ href: dictionary.contactDetails.whatsappHref, label: dictionary.pageCopy.about.ctaPrimaryLabel }}
        secondary={{
          href: `mailto:${dictionary.contactDetails.email}`,
          label: dictionary.pageCopy.about.ctaSecondaryLabel,
        }}
      />
    </>
  );
}
