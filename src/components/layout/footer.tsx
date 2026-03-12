import Link from "next/link";

import { Container } from "@/components/ui/container";
import { company } from "@/content/company";
import { footerLinkGroups } from "@/content/navigation";
import { socials } from "@/content/socials";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <h2 className="text-lg font-semibold text-[var(--color-foreground)]">{company.name}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{company.description}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">{company.location}</p>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--color-muted)] transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
            Connect
          </h3>
          <ul className="mt-4 space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--color-muted)] transition hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-[var(--color-border)] py-6">
        <p className="text-sm text-[var(--color-muted)]">© 2026 {company.name}. Crafted for consistent grooming.</p>
      </Container>
    </footer>
  );
}
