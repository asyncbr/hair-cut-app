"use client";

import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { LanguageProvider } from "@/components/providers/language-provider";
import { themeConfig } from "@/config/theme";

const themeStyles: CSSProperties = {
  "--color-background": themeConfig.colors.background,
  "--color-surface": themeConfig.colors.surface,
  "--color-surface-alt": themeConfig.colors.surfaceAlt,
  "--color-card": themeConfig.colors.card,
  "--color-foreground": themeConfig.colors.foreground,
  "--color-muted": themeConfig.colors.mutedForeground,
  "--color-accent": themeConfig.colors.accent,
  "--color-accent-strong": themeConfig.colors.accentStrong,
  "--color-accent-soft": themeConfig.colors.accentSoft,
  "--color-border": themeConfig.colors.border,
  "--radius-xl": themeConfig.radii.xl,
  "--radius-pill": themeConfig.radii.pill,
  "--shadow-card": themeConfig.shadows.card,
} as CSSProperties;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return children;
  }

  return (
    <div style={themeStyles}>
      <LanguageProvider>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </div>
  );
}
