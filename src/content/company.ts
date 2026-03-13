import type { CompanyInfo, Differentiator, HomePageContent, ProcessStep, TrustItem } from "@/lib/types";

export const company: CompanyInfo = {
  name: "Northline Barber Co.",
  legalName: "Northline Barber Company LLC",
  tagline: "Precision barbering with a calm, modern shop experience",
  description:
    "Northline Barber Co. is a neighborhood barber shop focused on clean technique, reliable appointment flow, and grooming that looks sharp long after you leave the chair.",
  foundedLabel: "Built for regulars, first-timers, and important occasions",
  location: "Chicago, Illinois",
};

export const trustItems: TrustItem[] = [
  { value: "45 min", label: "Standard appointments that never feel rushed" },
  { value: "7 days", label: "A week of shape and structure from every cut" },
  { value: "Hot towel", label: "Traditional finishing details when the service calls for it" },
  { value: "By design", label: "Style recommendations matched to face shape and routine" },
];

export const differentiators: Differentiator[] = [
  {
    title: "Cuts that grow out clean",
    description:
      "Northline focuses on shape, balance, and weight removal so your haircut keeps looking intentional between appointments.",
  },
  {
    title: "Beard work with structure",
    description:
      "Every beard service is lined, blended, and proportioned to the haircut instead of treated as a separate afterthought.",
  },
  {
    title: "A shop that respects your time",
    description:
      "Appointment spacing is deliberate, so consultations stay focused and start times stay dependable throughout the day.",
  },
  {
    title: "Style without guesswork",
    description:
      "Clients leave with practical guidance on maintenance, product use, and booking rhythm based on the haircut they chose.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consult the look",
    description:
      "Each appointment starts with a quick conversation about length, shape, maintenance, and how polished or low-maintenance the result should be.",
  },
  {
    step: "02",
    title: "Build the silhouette",
    description:
      "The cut is structured around head shape, natural growth patterns, and the finish that best fits your routine.",
  },
  {
    step: "03",
    title: "Refine the details",
    description:
      "Necklines, edges, beard transitions, and texture are sharpened so the full service feels complete rather than basic.",
  },
  {
    step: "04",
    title: "Set the upkeep plan",
    description:
      "You leave with product suggestions, styling direction, and an ideal rebooking window to keep the same standard next visit.",
  },
];

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: "Classic discipline. Modern atmosphere.",
    title: "Sharp haircuts, tailored beard work, and a barber chair worth returning to.",
    description:
      "Northline Barber Co. delivers precision cuts, skin fades, beard sculpting, and hot towel service in a space designed for people who want quality without ceremony or delay.",
    primaryCta: {
      label: "Book an appointment",
      href: "/contact/",
    },
    secondaryCta: {
      label: "View services",
      href: "/services/",
    },
    featurePanel: {
      eyebrow: "Inside the shop",
      title: "Warm lighting, clean tools, and a chair experience that feels unrushed from start to finish.",
      description:
        "Northline is designed to feel sharp and calm at the same time, with enough attention on the details that the final result reads instantly.",
    },
    stats: [
      { value: "Cuts", label: "House cuts, scissor work, tapers, and skin fades" },
      { value: "Beards", label: "Trim, line, sculpt, and balance with your haircut" },
      { value: "Finish", label: "Hot towels, product styling, and clean final detailing" },
    ],
  },
  trustIntro:
    "Northline was built for clients who want the consistency of a true neighborhood barber shop with the polish, comfort, and reliability expected from a modern grooming space.",
  sectionOrder: ["trust", "services", "differentiators", "projects", "process", "cta"],
  servicesHeading: {
    eyebrow: "Services",
    title: "Grooming built around how you actually wear your hair",
    description:
      "Every service is designed around real routines, whether you need a fast weekly cleanup, a full reset before a big event, or a dependable barber for the long term.",
  },
  differentiatorsHeading: {
    eyebrow: "Why Northline",
    title: "The difference is in the consistency",
    description:
      "Clients come back because the details stay sharp, the timing stays honest, and the shop experience feels steady from booking to finish.",
  },
  projectsHeading: {
    eyebrow: "In the chair",
    title: "Three common grooming goals we solve every week",
    description:
      "This section uses case-study structure to show how different appointments are shaped around the client, not forced into the same generic service.",
  },
  processHeading: {
    eyebrow: "Process",
    title: "A simple routine that leads to better cuts",
    description:
      "Northline appointments follow a clear flow so every result feels considered, repeatable, and easy to maintain after you leave.",
  },
  cta: {
    eyebrow: "Book your chair",
    title: "Need a fresh cut before work, a weekend event, or a full grooming reset?",
    description:
      "Choose a time, share what you need, and Northline will help match you to the right service without overcomplicating the process.",
    primaryLabel: "Message to book",
    secondaryLabel: "Email the shop",
  },
};
