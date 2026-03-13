"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useDictionary } from "@/components/providers/language-provider";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dictionary = useDictionary();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(18,13,11,0.86)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-[var(--color-foreground)]">
          <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)]">
            N
          </span>
          <span>
            <span className="block text-sm font-semibold">{dictionary.company.name}</span>
            <span className="block text-xs text-[var(--color-muted)]">{dictionary.company.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label={dictionary.ui.primaryNavigationAriaLabel}>
          {dictionary.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition hover:text-[var(--color-foreground)]",
                pathname === item.href ? "text-[var(--color-foreground)]" : "text-[var(--color-muted)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <LinkButton href={dictionary.contactDetails.whatsappHref} label={dictionary.ui.navbarCta} />
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={dictionary.ui.toggleMenuAriaLabel}
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </Container>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            <LanguageSwitcher className="justify-between px-1 py-2" />
            {dictionary.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href={dictionary.contactDetails.whatsappHref}
              label={dictionary.ui.mobileNavbarCta}
              className="mt-2 w-full"
            />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
