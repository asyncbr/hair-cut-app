import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Differentiator } from "@/lib/types";

type DifferentiatorsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Differentiator[];
};

export function DifferentiatorsSection({
  eyebrow,
  title,
  description,
  items,
}: DifferentiatorsSectionProps) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.6rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7"
            >
              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
