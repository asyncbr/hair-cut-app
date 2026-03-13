"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/lib/types";

type ServicesGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
};

export function ServicesGrid({ eyebrow, title, description, services }: ServicesGridProps) {
  return (
    <Section id="services">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
                {service.icon}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--color-foreground)]">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{service.longDescription}</p>
              <ul className="mt-6 grid gap-3 text-sm text-[var(--color-foreground)]">
                {service.bulletPoints.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
