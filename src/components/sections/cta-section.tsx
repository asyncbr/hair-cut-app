import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type CtaSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: {
    href: string;
    label: string;
  };
  secondary: {
    href: string;
    label: string;
  };
};

export function CTASection({ eyebrow, title, description, primary, secondary }: CtaSectionProps) {
  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(217,162,95,0.14),rgba(26,19,16,0.96))] px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{eyebrow}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={primary.href} label={primary.label} />
            <LinkButton href={secondary.href} label={secondary.label} variant="secondary" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
