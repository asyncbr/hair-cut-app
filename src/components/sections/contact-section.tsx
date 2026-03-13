"use client";

import { useDictionary } from "@/components/providers/language-provider";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { ContactDetails } from "@/lib/types";

export function ContactSection({ details }: { details: ContactDetails }) {
  const dictionary = useDictionary();

  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {dictionary.ui.contactSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-foreground)]">{dictionary.ui.contactSection.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{details.intro}</p>
            <div className="mt-8 flex flex-col gap-3">
              <LinkButton href={details.whatsappHref} label={dictionary.ui.contactSection.primaryLabel} className="w-full" />
              <LinkButton
                href={`mailto:${details.email}`}
                label={dictionary.ui.contactSection.secondaryLabel}
                className="w-full"
                variant="secondary"
              />
            </div>
            <div className="mt-6 space-y-2 text-sm text-[var(--color-muted)]">
              <p>{dictionary.ui.contactSection.phoneLabel}: {details.phone}</p>
              <p>{dictionary.ui.contactSection.emailLabel}: {details.email}</p>
              <p>{dictionary.ui.contactSection.responseLabel}: {details.responseTime}</p>
            </div>
          </div>
          <div className="rounded-[1.8rem] border border-[var(--color-border)] bg-white/4 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {dictionary.ui.contactSection.fitEyebrow}
            </p>
            <ul className="mt-6 grid gap-3">
              {details.projectTypes.map((projectType) => (
                <li key={projectType} className="rounded-2xl border border-white/8 px-4 py-3 text-sm text-[var(--color-foreground)]">
                  {projectType}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
