import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export type CompanyInfo = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  foundedLabel: string;
  location: string;
};

export type TrustItem = {
  label: string;
  value: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
  icon: string;
};

export type Differentiator = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcome: string;
  image: string;
  alt: string;
  featured: boolean;
};

export type ContactDetails = {
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappHref: string;
  responseTime: string;
  intro: string;
  projectTypes: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
};

export type SeoConfig = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  locale: string;
  pages: Record<string, PageSeo>;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SectionOrder =
  | "trust"
  | "services"
  | "differentiators"
  | "projects"
  | "process"
  | "cta";

export type HomePageContent = {
  hero: HeroContent;
  trustIntro: string;
  sectionOrder: SectionOrder[];
  servicesHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  differentiatorsHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projectsHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  processHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};
