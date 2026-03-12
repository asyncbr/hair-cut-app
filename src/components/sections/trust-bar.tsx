import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { TrustItem } from "@/lib/types";

type TrustBarProps = {
  intro: string;
  items: TrustItem[];
};

export function TrustBar({ intro, items }: TrustBarProps) {
  return (
    <Section className="py-10">
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/4 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">{intro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/8 bg-[var(--color-surface)] p-5">
                  <p className="text-base font-semibold text-[var(--color-foreground)]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
