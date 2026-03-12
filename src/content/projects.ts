import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "executive-refresh",
    name: "Executive Refresh",
    category: "Professional Routine",
    shortDescription: "A low-maintenance cut for a client who needed a cleaner profile for daily office wear and travel.",
    challenge:
      "The client wanted a style that looked polished in meetings but did not demand heavy product use or daily restyling.",
    solution:
      "Northline built a scissor-over-comb shape with a soft taper and controlled texture so the cut held form naturally through long workdays.",
    stack: ["Consultation", "Scissor Work", "Soft Taper", "Styling Advice"],
    outcome:
      "The result stayed neat with minimal effort and gave the client a rebooking rhythm that fit an every-three-week schedule.",
    image: "/favicon/favicon.svg",
    alt: "Refined executive haircut silhouette",
    featured: true,
  },
  {
    slug: "wedding-week-grooming",
    name: "Wedding Week Grooming",
    category: "Event Preparation",
    shortDescription: "A coordinated haircut and beard sculpt timed for photos, formalwear, and a full weekend of events.",
    challenge:
      "The client needed a look that would hold up across rehearsal dinner, ceremony, and next-day brunch without appearing overcut in photos.",
    solution:
      "Northline scheduled the appointment at the right interval, kept the fade clean without going too fresh, and softened the beard for a more timeless finish.",
    stack: ["Timing Strategy", "Fade Work", "Beard Sculpt", "Photo-Ready Finish"],
    outcome:
      "The haircut photographed cleanly throughout the weekend and still looked natural several days after the event.",
    image: "/favicon/favicon.svg",
    alt: "Formal event haircut and beard detailing",
    featured: true,
  },
  {
    slug: "monthly-membership-client",
    name: "Monthly Membership Client",
    category: "Long-Term Maintenance",
    shortDescription: "A recurring service plan for a client who prefers staying consistently sharp instead of waiting for a full reset.",
    challenge:
      "Irregular booking meant each visit required bigger corrections, taking more time and making the haircut less consistent month to month.",
    solution:
      "Northline moved the client into a structured cadence with scheduled cleanup visits, beard touchups, and product recommendations that matched the chosen style.",
    stack: ["Membership Plan", "Cleanup Visits", "Beard Maintenance", "Routine Planning"],
    outcome:
      "The client now maintains a cleaner outline year-round and spends less time deciding when it is time to book again.",
    image: "/favicon/favicon.svg",
    alt: "Consistent membership grooming workflow",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
