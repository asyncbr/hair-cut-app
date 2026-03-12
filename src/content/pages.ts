import type { PageHeroContent } from "@/lib/types";

export const pageHeroes: Record<"services" | "work" | "about" | "contact", PageHeroContent> = {
  services: {
    eyebrow: "Services",
    title: "Barber services designed for daily confidence, not just the first day out of the chair",
    description:
      "Northline offers focused services for clients who care about shape, consistency, and booking the right appointment for their routine.",
  },
  work: {
    eyebrow: "Results",
    title: "A closer look at how Northline adapts the service to the client",
    description:
      "These examples show the thinking behind each appointment: lifestyle, maintenance level, timing, and the finish that will hold up best.",
  },
  about: {
    eyebrow: "About Northline",
    title: "A barber shop built on repeatable quality and a relaxed chair experience",
    description:
      "Northline blends traditional barber detail with modern appointment discipline so every visit feels personal, straightforward, and worth rebooking.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Book directly and keep the process simple",
    description:
      "Whether you know the exact service you need or want quick guidance before booking, Northline keeps the first conversation easy.",
  },
};

export const aboutPageContent = {
  intro:
    "Northline Barber Co. was built for clients who want a dependable shop: one that combines strong technique, a calm atmosphere, and enough attention to detail that every appointment feels considered.",
  points: [
    "Appointments are paced to leave room for consultation, precision, and finishing details instead of rushing clients through a volume-first schedule.",
    "Every haircut is approached with shape, grow-out, and maintainability in mind so the result still works days after the appointment.",
    "Northline serves regular maintenance clients, first-time visitors, and event-based bookings with the same emphasis on consistency and clear communication.",
  ],
};
