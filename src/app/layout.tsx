import type { Metadata } from "next";

import "./globals.css";

import { SiteChrome } from "@/components/layout/site-chrome";
import { praiaDoCorteContent } from "@/content/customers/praia-do-corte";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(praiaDoCorteContent.site.domain),
  title: {
    default: praiaDoCorteContent.seo.title,
    template: `%s | ${praiaDoCorteContent.site.name}`,
  },
  description: praiaDoCorteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: praiaDoCorteContent.site.domain,
    title: praiaDoCorteContent.seo.ogTitle,
    description: praiaDoCorteContent.seo.ogDescription,
    locale: praiaDoCorteContent.site.locale,
    siteName: praiaDoCorteContent.site.name,
    images: [
      {
        url: absoluteUrl(praiaDoCorteContent.site.domain, praiaDoCorteContent.site.logo),
        width: 1200,
        height: 630,
        alt: `Logo da ${praiaDoCorteContent.site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: praiaDoCorteContent.seo.ogTitle,
    description: praiaDoCorteContent.seo.ogDescription,
    images: [absoluteUrl(praiaDoCorteContent.site.domain, praiaDoCorteContent.site.logo)],
  },
  icons: {
    icon: [{ url: praiaDoCorteContent.site.logo, type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
