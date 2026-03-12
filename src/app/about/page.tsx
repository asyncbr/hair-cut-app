import type { Metadata } from "next";

import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { seoConfig } from "@/config/seo";
import { company, differentiators } from "@/content/company";
import { contactDetails } from "@/content/contact";
import { aboutPageContent, pageHeroes } from "@/content/pages";

const pageSeo = seoConfig.pages.about;

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

export default function AboutPage() {
  return (
    <>
      <PageHero {...pageHeroes.about} />
      <Section className="pt-6">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Shop philosophy</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-foreground)]">{company.tagline}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{aboutPageContent.intro}</p>
          </article>
          <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-white/4 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">What clients notice</p>
            <ul className="mt-6 grid gap-4">
              {aboutPageContent.points.map((point) => (
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
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </Container>
      </Section>
      <CTASection
        eyebrow="Visit Northline"
        title="If you want a barber you can keep coming back to, start with one well-planned appointment."
        description="Northline works best for clients who value consistency, clear communication, and a cut that still looks right after the first day."
        primary={{ href: contactDetails.whatsappHref, label: "Book on WhatsApp" }}
        secondary={{ href: `mailto:${contactDetails.email}`, label: "Email Northline" }}
      />
    </>
  );
}
