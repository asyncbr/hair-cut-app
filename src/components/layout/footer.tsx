"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useDictionary } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";

export function Footer() {
  const dictionary = useDictionary();
  const resolveHref = (href: string) => (href === "/" ? "/northline/" : href);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <h2 className="text-lg font-semibold text-[var(--color-foreground)]">{dictionary.company.name}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{dictionary.company.description}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">{dictionary.company.location}</p>
          <LanguageSwitcher className="mt-6" />
        </div>

        {dictionary.footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={resolveHref(link.href)} className="text-sm text-[var(--color-muted)] transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
            {dictionary.ui.footerConnectTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {dictionary.socials.map((social) => (
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
        <p className="text-sm text-[var(--color-muted)]">{dictionary.ui.footerCopyright}</p>
      </Container>
    </footer>
  );
}
