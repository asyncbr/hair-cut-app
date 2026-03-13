"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { PageHeroContent } from "@/lib/types";

export function PageHero({ eyebrow, title, description }: PageHeroContent) {
  return (
    <Section className="pb-12 pt-14 sm:pb-16 sm:pt-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">{description}</p>
        </div>
      </Container>
    </Section>
  );
}
