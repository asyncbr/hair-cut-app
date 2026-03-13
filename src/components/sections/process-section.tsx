"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProcessStep } from "@/lib/types";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
};

export function ProcessSection({ eyebrow, title, description, steps }: ProcessSectionProps) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.step} className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
