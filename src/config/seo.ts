import { siteConfig } from "@/config/site";
import type { SeoConfig } from "@/lib/types";

export const seoConfig: SeoConfig = {
  defaultTitle: "Northline Barber Co. | Precision Cuts, Beard Work, and Classic Service",
  titleTemplate: "%s | Northline Barber Co.",
  defaultDescription:
    "Northline Barber Co. delivers sharp cuts, tailored beard work, hot towel shaves, and a relaxed neighborhood shop experience with easy booking.",
  siteUrl: siteConfig.siteUrl,
  locale: siteConfig.locale,
  pages: {
    home: {
      title: "A barber shop built around precision, pace, and presence",
      description:
        "Discover modern barbering with classic discipline: premium cuts, beard shaping, hot towel shaves, and dependable appointment times.",
      path: "/",
      ogTitle: "Sharp cuts, clean fades, and barber service that respects your time",
      ogDescription:
        "Northline Barber Co. pairs a polished shop atmosphere with consistent craftsmanship for everyday maintenance and special-occasion grooming.",
    },
    services: {
      title: "Services",
      description:
        "Explore Northline services including house cuts, skin fades, beard sculpting, hot towel shaves, and membership plans.",
      path: "/services/",
      ogTitle: "Barber services for sharp cuts, beard detailing, and premium grooming",
      ogDescription:
        "Clear service options, straightforward pricing language, and grooming built around repeatable quality.",
    },
    work: {
      title: "Results",
      description:
        "See how Northline approaches different client needs, from executive cleanup appointments to wedding-week grooming preparation.",
      path: "/work/",
      ogTitle: "Real grooming scenarios and signature barber outcomes",
      ogDescription:
        "A case-study style look at how Northline delivers tailored grooming for different routines, styles, and occasions.",
    },
    about: {
      title: "About",
      description:
        "Learn about Northline Barber Co., our service philosophy, and the standards behind every appointment.",
      path: "/about/",
      ogTitle: "About Northline Barber Co.",
      ogDescription:
        "A neighborhood barber shop focused on consistency, hospitality, and grooming that holds up between visits.",
    },
    contact: {
      title: "Contact",
      description:
        "Book your next appointment, ask about availability, or reach Northline Barber Co. by phone, email, or WhatsApp.",
      path: "/contact/",
      ogTitle: "Book with Northline Barber Co.",
      ogDescription:
        "Fast contact options for appointments, schedule questions, and service recommendations.",
    },
  },
};
