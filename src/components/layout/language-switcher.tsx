"use client";

import { languageOptions } from "@/content/dictionaries";
import type { Language } from "@/lib/types";
import { cn } from "@/lib/utils";

import { useDictionary, useLanguage } from "../providers/language-provider";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const dictionary = useDictionary();

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {dictionary.ui.languageSwitcher.label}
      </span>
      <div className="inline-flex rounded-full border border-[var(--color-border)] bg-white/5 p-1">
        {languageOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value as Language)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition",
              language === option.value
                ? "bg-[var(--color-accent)] text-[#1b120d]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
            )}
            aria-pressed={language === option.value}
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
