import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "house-cut",
    title: "House Cut",
    shortDescription: "A full haircut tailored to your growth pattern, routine, and preferred finish.",
    longDescription:
      "The Northline House Cut covers consultation, clipper and scissor work, neckline cleanup, and finish styling for a polished everyday result.",
    bulletPoints: [
      "Detailed consultation before the first pass",
      "Clipper and scissor work as needed",
      "Neck and outline cleanup included",
      "Finished with styling guidance",
    ],
    icon: "HC",
  },
  {
    slug: "skin-fade-taper",
    title: "Skin Fade or Taper",
    shortDescription: "Clean blends and sharp transitions for clients who want a more technical finish.",
    longDescription:
      "Built for tight sides, clean graduation, and balanced top shape, this service is ideal for clients who want a sharper silhouette and cleaner grow-out.",
    bulletPoints: [
      "Low, mid, or high fade options",
      "Texture control through the crown",
      "Crisp perimeter detailing",
      "Balanced to suit face shape",
    ],
    icon: "SF",
  },
  {
    slug: "beard-sculpt",
    title: "Beard Sculpt",
    shortDescription: "Structured beard trimming with line refinement and proportion matched to the haircut.",
    longDescription:
      "Northline beard work focuses on shape and density management, keeping the beard intentional from profile to front view.",
    bulletPoints: [
      "Cheek and neckline definition",
      "Length balancing and bulk removal",
      "Blending into sideburns or fade",
      "Beard oil and maintenance advice",
    ],
    icon: "BS",
  },
  {
    slug: "hot-towel-shave",
    title: "Hot Towel Shave",
    shortDescription: "A classic straight-razor style experience with prep, softening, and close finishing.",
    longDescription:
      "For clients who want a more traditional barbershop ritual, this service layers hot towels, shave prep, precise detailing, and soothing aftercare.",
    bulletPoints: [
      "Hot towel prep and skin softening",
      "Close shave with careful detailing",
      "Calming post-shave finish",
      "Ideal for events or monthly resets",
    ],
    icon: "HT",
  },
  {
    slug: "membership-maintenance",
    title: "Maintenance Membership",
    shortDescription: "A recurring plan for clients who want sharp lines and predictable scheduling every month.",
    longDescription:
      "Designed for busy regulars, the membership reserves consistent grooming time and keeps your cut from slipping into a full correction appointment.",
    bulletPoints: [
      "Priority appointment access",
      "Reduced-rate cleanup visits",
      "Recommended rebooking cadence",
      "Built for professionals and regular clients",
    ],
    icon: "MM",
  },
];
