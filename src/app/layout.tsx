import type { CSSProperties } from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import { absoluteUrl } from "@/lib/utils";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    locale: siteConfig.locale,
    siteName: "Northline Barber Co.",
    images: [
      {
        url: absoluteUrl(siteConfig.siteUrl, siteConfig.defaultOgImage),
        width: 1200,
        height: 630,
        alt: "Northline Barber Co. website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [absoluteUrl(siteConfig.siteUrl, siteConfig.defaultOgImage)],
  },
  icons: {
    icon: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={themeStyles}>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
