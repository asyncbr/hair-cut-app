"use client";

import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { HeroContent } from "@/lib/types";

export function HeroSection({ eyebrow, title, description, primaryCta, secondaryCta, featurePanel, stats }: HeroContent) {
  return (
    <Section className="overflow-hidden pb-16 pt-14 sm:pt-20 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={primaryCta.href} label={primaryCta.label} />
              <LinkButton href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(217,162,95,0.24),_transparent_58%)] blur-2xl" />
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(165deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-card)]">
              <div className="grid gap-4 rounded-[1.5rem] bg-[rgba(12,8,7,0.74)] p-5">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
                      <p className="text-lg font-semibold text-[var(--color-foreground)]">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-accent-soft)] p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-accent)]">{featurePanel.eyebrow}</p>
                  <p className="mt-4 text-2xl font-semibold text-[var(--color-foreground)]">{featurePanel.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{featurePanel.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
