import type { FooterLinkGroup, NavItem } from "@/lib/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Results", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Pages",
    links: navigation,
  },
  {
    title: "Popular",
    links: [
      { label: "House Cut", href: "/services/" },
      { label: "Beard Sculpt", href: "/services/" },
      { label: "Membership", href: "/services/" },
      { label: "Book a Chair", href: "/contact/" },
    ],
  },
];
