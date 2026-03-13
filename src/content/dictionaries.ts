import type {
  CompanyInfo,
  ContactDetails,
  Differentiator,
  FooterLinkGroup,
  HeroContent,
  HomePageContent,
  Language,
  NavItem,
  PageHeroContent,
  ProcessStep,
  Project,
  SeoConfig,
  Service,
  SocialLink,
  TrustItem,
} from "@/lib/types";

export type SiteDictionary = {
  seo: SeoConfig;
  company: CompanyInfo;
  navigation: NavItem[];
  footerLinkGroups: FooterLinkGroup[];
  socials: SocialLink[];
  trustItems: TrustItem[];
  differentiators: Differentiator[];
  processSteps: ProcessStep[];
  homePageContent: HomePageContent;
  services: Service[];
  projects: Project[];
  contactDetails: ContactDetails;
  pageHeroes: Record<"services" | "work" | "about" | "contact", PageHeroContent>;
  aboutPageContent: {
    intro: string;
    points: string[];
  };
  pageCopy: {
    services: {
      eyebrow: string;
      title: string;
      description: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaPrimaryLabel: string;
      ctaSecondaryLabel: string;
    };
    work: {
      eyebrow: string;
      title: string;
      description: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaPrimaryLabel: string;
      ctaSecondaryLabel: string;
    };
    about: {
      philosophyEyebrow: string;
      noticeEyebrow: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaDescription: string;
      ctaPrimaryLabel: string;
      ctaSecondaryLabel: string;
    };
  };
  ui: {
    navbarCta: string;
    mobileNavbarCta: string;
    primaryNavigationAriaLabel: string;
    toggleMenuAriaLabel: string;
    footerConnectTitle: string;
    footerCopyright: string;
    projectCard: {
      challengeLabel: string;
      approachLabel: string;
      outcomeLabel: string;
    };
    contactSection: {
      eyebrow: string;
      title: string;
      primaryLabel: string;
      secondaryLabel: string;
      fitEyebrow: string;
      phoneLabel: string;
      emailLabel: string;
      responseLabel: string;
    };
    languageSwitcher: {
      label: string;
      current: string;
    };
  };
};

export const defaultLanguage: Language = "en";

export const languageOptions: Array<{ value: Language; shortLabel: string }> = [
  { value: "en", shortLabel: "EN" },
  { value: "pt", shortLabel: "PT" },
];

const enSeo: SeoConfig = {
  defaultTitle: "Northline Barber Co. | Precision Cuts, Beard Work, and Classic Service",
  titleTemplate: "%s | Northline Barber Co.",
  defaultDescription:
    "Northline Barber Co. delivers sharp cuts, tailored beard work, hot towel shaves, and a relaxed neighborhood shop experience with easy booking.",
  siteUrl: "https://northlinebarber.com",
  locale: "en_US",
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

const ptSeo: SeoConfig = {
  defaultTitle: "Northline Barber Co. | Cortes Precisos, Barba Bem Feita e Atendimento Clássico",
  titleTemplate: "%s | Northline Barber Co.",
  defaultDescription:
    "A Northline Barber Co. entrega cortes alinhados, barba desenhada, toalha quente e uma experiência de barbearia de bairro com agendamento simples.",
  siteUrl: "https://northlinebarber.com",
  locale: "pt_BR",
  pages: {
    home: {
      title: "Uma barbearia feita para precisão, ritmo e presença",
      description:
        "Conheça uma barbearia moderna com disciplina clássica: cortes premium, barba desenhada, toalha quente e horários confiáveis.",
      path: "/",
      ogTitle: "Cortes marcantes, fades limpos e um atendimento que respeita seu tempo",
      ogDescription:
        "A Northline Barber Co. une ambiente refinado e técnica consistente para manutenção do dia a dia e preparo para ocasiões especiais.",
    },
    services: {
      title: "Serviços",
      description:
        "Conheça os serviços da Northline, incluindo corte da casa, skin fade, barba, toalha quente e planos de manutenção.",
      path: "/services/",
      ogTitle: "Serviços de barbearia para cortes precisos, barba e grooming premium",
      ogDescription:
        "Opções claras de serviço, linguagem direta e grooming pensado para qualidade repetível.",
    },
    work: {
      title: "Resultados",
      description:
        "Veja como a Northline adapta o atendimento para diferentes perfis, de executivos a noivos em semana de casamento.",
      path: "/work/",
      ogTitle: "Situações reais de grooming e resultados de assinatura",
      ogDescription:
        "Uma visão em formato de estudo de caso sobre como a Northline entrega grooming sob medida para diferentes rotinas, estilos e ocasiões.",
    },
    about: {
      title: "Sobre",
      description:
        "Conheça a Northline Barber Co., nossa filosofia de atendimento e o padrão aplicado em cada horário.",
      path: "/about/",
      ogTitle: "Sobre a Northline Barber Co.",
      ogDescription:
        "Uma barbearia de bairro focada em consistência, hospitalidade e grooming que permanece bonito entre uma visita e outra.",
    },
    contact: {
      title: "Contato",
      description:
        "Agende seu próximo horário, tire dúvidas sobre disponibilidade ou fale com a Northline por telefone, e-mail ou WhatsApp.",
      path: "/contact/",
      ogTitle: "Agende com a Northline Barber Co.",
      ogDescription:
        "Canais rápidos para agendamentos, dúvidas sobre horários e indicação do serviço ideal.",
    },
  },
};

export const dictionaries: Record<Language, SiteDictionary> = {
  en: {
    seo: enSeo,
    company: {
      name: "Northline Barber Co.",
      legalName: "Northline Barber Company LLC",
      tagline: "Precision barbering with a calm, modern shop experience",
      description:
        "Northline Barber Co. is a neighborhood barber shop focused on clean technique, reliable appointment flow, and grooming that looks sharp long after you leave the chair.",
      foundedLabel: "Built for regulars, first-timers, and important occasions",
      location: "Chicago, Illinois",
    },
    navigation: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Results", href: "/work/" },
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
    footerLinkGroups: [
      {
        title: "Pages",
        links: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Results", href: "/work/" },
          { label: "About", href: "/about/" },
          { label: "Contact", href: "/contact/" },
        ],
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
    ],
    socials: [
      {
        label: "WhatsApp",
        href: "https://wa.me/13125550148?text=Hi%20Northline%2C%20I%27d%20like%20to%20book%20a%20barber%20appointment.",
      },
      {
        label: "Email",
        href: "mailto:bookings@northlinebarber.com",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/northlinebarberco",
      },
    ],
    trustItems: [
      { value: "45 min", label: "Standard appointments that never feel rushed" },
      { value: "7 days", label: "A week of shape and structure from every cut" },
      { value: "Hot towel", label: "Traditional finishing details when the service calls for it" },
      { value: "By design", label: "Style recommendations matched to face shape and routine" },
    ],
    differentiators: [
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
    ],
    processSteps: [
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
    ],
    homePageContent: {
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
      } satisfies HeroContent,
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
          "These examples show how Northline adapts consultation, timing, and finishing details to the person in the chair instead of pushing everyone toward the same result.",
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
    },
    services: [
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
    ],
    projects: [
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
    ],
    contactDetails: {
      email: "bookings@northlinebarber.com",
      phone: "+1 (312) 555-0148",
      whatsappNumber: "13125550148",
      whatsappHref:
        "https://wa.me/13125550148?text=Hi%20Northline%2C%20I%27d%20like%20to%20book%20a%20barber%20appointment.",
      responseTime: "Usually within the same business day",
      intro:
        "Reach out with the service you are considering, your preferred appointment window, and whether this is a routine cleanup or a special-occasion booking.",
      projectTypes: [
        "First-time haircut consultations",
        "Skin fades and taper appointments",
        "Beard sculpting and cleanup sessions",
        "Hot towel shaves for event prep",
        "Recurring membership and maintenance bookings",
      ],
    },
    pageHeroes: {
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
    },
    aboutPageContent: {
      intro:
        "Northline Barber Co. was built for clients who want a dependable shop: one that combines strong technique, a calm atmosphere, and enough attention to detail that every appointment feels considered.",
      points: [
        "Appointments are paced to leave room for consultation, precision, and finishing details instead of rushing clients through a volume-first schedule.",
        "Every haircut is approached with shape, grow-out, and maintainability in mind so the result still works days after the appointment.",
        "Northline serves regular maintenance clients, first-time visitors, and event-based bookings with the same emphasis on consistency and clear communication.",
      ],
    },
    pageCopy: {
      services: {
        eyebrow: "What we offer",
        title: "Clear service options for routine upkeep and important moments",
        description:
          "Choose the appointment that matches your current style, maintenance level, and how polished you want the finish to feel.",
        ctaEyebrow: "Not sure what to book?",
        ctaTitle: "Describe the look you want and Northline will point you to the right service.",
        ctaDescription:
          "A short message is enough to sort out whether you need a full cut, a beard cleanup, or a more complete grooming session.",
        ctaPrimaryLabel: "Ask on WhatsApp",
        ctaSecondaryLabel: "Email the shop",
      },
      work: {
        eyebrow: "Signature outcomes",
        title: "Northline appointments are shaped around context, not one-size-fits-all templates",
        description:
          "The best result depends on how you wear the style, how often you book, and whether the appointment is for maintenance or a key event.",
        ctaEyebrow: "Ready for your version?",
        ctaTitle: "Book an appointment that fits your schedule and the look you need.",
        ctaDescription:
          "Northline can help you plan the right timing for routine upkeep, event grooming, or a complete refresh.",
        ctaPrimaryLabel: "Book on WhatsApp",
        ctaSecondaryLabel: "Send appointment details",
      },
      about: {
        philosophyEyebrow: "Shop philosophy",
        noticeEyebrow: "What clients notice",
        ctaEyebrow: "Visit Northline",
        ctaTitle: "If you want a barber you can keep coming back to, start with one well-planned appointment.",
        ctaDescription:
          "Northline works best for clients who value consistency, clear communication, and a cut that still looks right after the first day.",
        ctaPrimaryLabel: "Book on WhatsApp",
        ctaSecondaryLabel: "Email Northline",
      },
    },
    ui: {
      navbarCta: "Book Now",
      mobileNavbarCta: "Book on WhatsApp",
      primaryNavigationAriaLabel: "Primary",
      toggleMenuAriaLabel: "Toggle menu",
      footerConnectTitle: "Connect",
      footerCopyright: "© 2026 Northline Barber Co. Crafted for consistent grooming.",
      projectCard: {
        challengeLabel: "Challenge",
        approachLabel: "Approach",
        outcomeLabel: "Outcome",
      },
      contactSection: {
        eyebrow: "Contact options",
        title: "Book quickly, confirm clearly.",
        primaryLabel: "Book on WhatsApp",
        secondaryLabel: "Send an email",
        fitEyebrow: "Good fit for",
        phoneLabel: "Phone",
        emailLabel: "Email",
        responseLabel: "Expected response",
      },
      languageSwitcher: {
        label: "Language",
        current: "Current",
      },
    },
  },
  pt: {
    seo: ptSeo,
    company: {
      name: "Northline Barber Co.",
      legalName: "Northline Barber Company LLC",
      tagline: "Barbearia de precisão com uma experiência moderna e tranquila",
      description:
        "A Northline Barber Co. é uma barbearia de bairro focada em técnica limpa, fluxo confiável de agenda e grooming que continua bonito muito depois de você sair da cadeira.",
      foundedLabel: "Feita para clientes fiéis, primeiras visitas e ocasiões importantes",
      location: "Chicago, Illinois",
    },
    navigation: [
      { label: "Início", href: "/" },
      { label: "Serviços", href: "/services/" },
      { label: "Resultados", href: "/work/" },
      { label: "Sobre", href: "/about/" },
      { label: "Contato", href: "/contact/" },
    ],
    footerLinkGroups: [
      {
        title: "Páginas",
        links: [
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/services/" },
          { label: "Resultados", href: "/work/" },
          { label: "Sobre", href: "/about/" },
          { label: "Contato", href: "/contact/" },
        ],
      },
      {
        title: "Mais buscados",
        links: [
          { label: "Corte da Casa", href: "/services/" },
          { label: "Barba Desenhada", href: "/services/" },
          { label: "Plano Mensal", href: "/services/" },
          { label: "Agendar Horário", href: "/contact/" },
        ],
      },
    ],
    socials: [
      {
        label: "WhatsApp",
        href: "https://wa.me/13125550148?text=Oi%20Northline%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20barbearia.",
      },
      {
        label: "E-mail",
        href: "mailto:bookings@northlinebarber.com",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/northlinebarberco",
      },
    ],
    trustItems: [
      { value: "45 min", label: "Horários padrão que nunca parecem apressados" },
      { value: "7 dias", label: "Uma semana de forma e estrutura saindo de cada corte" },
      { value: "Toalha quente", label: "Acabamentos tradicionais quando o serviço pede" },
      { value: "Sob medida", label: "Recomendações de estilo alinhadas ao rosto e à rotina" },
    ],
    differentiators: [
      {
        title: "Cortes que crescem bem",
        description:
          "A Northline trabalha forma, equilíbrio e retirada de peso para que o corte continue parecendo intencional entre uma visita e outra.",
      },
      {
        title: "Barba com estrutura",
        description:
          "Cada serviço de barba é desenhado, alinhado e proporcional ao corte, sem ser tratado como um complemento qualquer.",
      },
      {
        title: "Uma barbearia que respeita seu tempo",
        description:
          "Os horários são organizados com espaço real para consulta, técnica e acabamento, mantendo o fluxo do dia confiável.",
      },
      {
        title: "Estilo sem achismo",
        description:
          "O cliente sai com orientação prática sobre manutenção, produto e frequência ideal de retorno para o estilo escolhido.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Entender o visual",
        description:
          "Cada atendimento começa com uma conversa rápida sobre comprimento, formato, manutenção e o nível de acabamento que você espera.",
      },
      {
        step: "02",
        title: "Construir a silhueta",
        description:
          "O corte é estruturado de acordo com o formato da cabeça, os redemoinhos naturais e o resultado que melhor se encaixa na sua rotina.",
      },
      {
        step: "03",
        title: "Refinar os detalhes",
        description:
          "Nuca, linhas, transição com a barba e textura recebem atenção para que o serviço pareça completo e não básico.",
      },
      {
        step: "04",
        title: "Definir a manutenção",
        description:
          "Você sai com indicação de produto, orientação de finalização e o melhor intervalo para manter o mesmo padrão na próxima visita.",
      },
    ],
    homePageContent: {
      hero: {
        eyebrow: "Disciplina clássica. Atmosfera moderna.",
        title: "Cortes marcantes, barba bem desenhada e uma cadeira que vale a volta.",
        description:
          "A Northline Barber Co. entrega cortes precisos, skin fade, barba esculpida e serviço com toalha quente em um espaço pensado para quem quer qualidade sem complicação.",
        primaryCta: {
          label: "Agendar horário",
          href: "/contact/",
        },
        secondaryCta: {
          label: "Ver serviços",
          href: "/services/",
        },
        featurePanel: {
          eyebrow: "Dentro da barbearia",
          title: "Luz quente, ferramentas limpas e uma experiência de cadeira que parece tranquila do começo ao fim.",
          description:
            "A Northline foi pensada para transmitir precisão e calma ao mesmo tempo, com atenção real aos detalhes que fazem o resultado aparecer de imediato.",
        },
        stats: [
          { value: "Cortes", label: "Corte da casa, tesoura, taper e skin fade" },
          { value: "Barbas", label: "Aparar, alinhar, desenhar e equilibrar com o corte" },
          { value: "Acabamento", label: "Toalha quente, finalização com produto e detalhes limpos" },
        ],
      } satisfies HeroContent,
      trustIntro:
        "A Northline foi criada para clientes que querem a consistência de uma barbearia de bairro com o cuidado, o conforto e a confiabilidade de um espaço de grooming contemporâneo.",
      sectionOrder: ["trust", "services", "differentiators", "projects", "process", "cta"],
      servicesHeading: {
        eyebrow: "Serviços",
        title: "Grooming pensado para a forma como você realmente usa o cabelo",
        description:
          "Cada serviço foi desenhado para rotinas reais, seja para uma manutenção rápida, um novo visual para um evento importante ou um barbeiro fixo no longo prazo.",
      },
      differentiatorsHeading: {
        eyebrow: "Por que Northline",
        title: "A diferença está na consistência",
        description:
          "Os clientes voltam porque os detalhes permanecem alinhados, o tempo é respeitado e a experiência continua sólida do agendamento ao acabamento.",
      },
      projectsHeading: {
        eyebrow: "Na cadeira",
        title: "Três objetivos de grooming que resolvemos toda semana",
        description:
          "Estes exemplos mostram como a Northline adapta consulta, timing e acabamento à pessoa atendida, sem empurrar todo mundo para o mesmo resultado.",
      },
      processHeading: {
        eyebrow: "Processo",
        title: "Uma rotina simples que gera cortes melhores",
        description:
          "Os atendimentos da Northline seguem um fluxo claro para que cada resultado pareça pensado, repetível e fácil de manter depois da visita.",
      },
      cta: {
        eyebrow: "Reserve sua cadeira",
        title: "Precisa de um corte novo para o trabalho, para o fim de semana ou para um reset completo?",
        description:
          "Escolha o horário, diga o que você precisa e a Northline ajuda a encontrar o serviço certo sem transformar isso em algo complicado.",
        primaryLabel: "Mandar mensagem para agendar",
        secondaryLabel: "Enviar e-mail",
      },
    },
    services: [
      {
        slug: "house-cut",
        title: "Corte da Casa",
        shortDescription: "Um corte completo ajustado ao seu crescimento, rotina e acabamento preferido.",
        longDescription:
          "O Corte da Casa da Northline inclui consulta, máquina e tesoura quando necessário, limpeza de nuca e finalização para um resultado bem resolvido no dia a dia.",
        bulletPoints: [
          "Consulta detalhada antes do primeiro passo",
          "Máquina e tesoura conforme a necessidade",
          "Nuca e contornos incluídos",
          "Finalização com orientação de styling",
        ],
        icon: "CC",
      },
      {
        slug: "skin-fade-taper",
        title: "Skin Fade ou Taper",
        shortDescription: "Transições limpas e blend preciso para quem quer um acabamento mais técnico.",
        longDescription:
          "Ideal para laterais baixas, graduação limpa e topo equilibrado, esse serviço atende quem quer uma silhueta mais marcada e um crescimento mais organizado.",
        bulletPoints: [
          "Opções low, mid ou high fade",
          "Controle de textura no topo",
          "Perímetro limpo e bem definido",
          "Equilíbrio pensado para o formato do rosto",
        ],
        icon: "SF",
      },
      {
        slug: "beard-sculpt",
        title: "Barba Desenhada",
        shortDescription: "Aparo estruturado com linhas limpas e proporção alinhada ao corte.",
        longDescription:
          "O trabalho de barba na Northline foca em forma, densidade e encaixe com o corte para que o conjunto fique forte de frente e de perfil.",
        bulletPoints: [
          "Definição de bochecha e pescoço",
          "Controle de volume e retirada de excesso",
          "Integração com costeletas ou fade",
          "Orientação de óleo e manutenção",
        ],
        icon: "BD",
      },
      {
        slug: "hot-towel-shave",
        title: "Barba com Toalha Quente",
        shortDescription: "Uma experiência clássica com preparação, amolecimento da pele e acabamento de perto.",
        longDescription:
          "Para quem quer um ritual mais tradicional de barbearia, esse serviço combina toalha quente, preparo da pele, detalhamento preciso e finalização calmante.",
        bulletPoints: [
          "Toalha quente e preparo da pele",
          "Shave rente com atenção ao detalhe",
          "Finalização calmante pós-barba",
          "Ótimo para eventos ou resets mensais",
        ],
        icon: "TQ",
      },
      {
        slug: "membership-maintenance",
        title: "Plano de Manutenção",
        shortDescription: "Um plano recorrente para quem quer linhas limpas e agenda previsível todo mês.",
        longDescription:
          "Feito para clientes com rotina corrida, o plano reserva espaço recorrente de grooming e evita que o corte chegue ao ponto de pedir uma correção completa.",
        bulletPoints: [
          "Prioridade na agenda",
          "Visitas de manutenção com valor reduzido",
          "Cadência de retorno recomendada",
          "Pensado para profissionais e clientes fixos",
        ],
        icon: "PM",
      },
    ],
    projects: [
      {
        slug: "executive-refresh",
        name: "Renovação Executiva",
        category: "Rotina Profissional",
        shortDescription: "Um corte de baixa manutenção para um cliente que precisava de um perfil mais limpo para escritório e viagens.",
        challenge:
          "O cliente queria um visual alinhado para reuniões, mas sem depender de muito produto ou de finalização diária.",
        solution:
          "A Northline construiu um formato em tesoura com taper suave e textura controlada para o corte sustentar forma durante dias longos de trabalho.",
        stack: ["Consulta", "Tesoura", "Taper Suave", "Orientação de Styling"],
        outcome:
          "O resultado permaneceu limpo com pouco esforço e criou uma frequência de retorno que encaixou no ciclo de três semanas do cliente.",
        image: "/favicon/favicon.svg",
        alt: "Silhueta refinada de corte executivo",
        featured: true,
      },
      {
        slug: "wedding-week-grooming",
        name: "Grooming para Semana de Casamento",
        category: "Preparação para Evento",
        shortDescription: "Corte e barba coordenados no timing certo para fotos, traje formal e um fim de semana inteiro de eventos.",
        challenge:
          "O cliente precisava de um visual que funcionasse no jantar, na cerimônia e no brunch do dia seguinte sem parecer recém-cortado demais nas fotos.",
        solution:
          "A Northline marcou o atendimento no intervalo ideal, manteve o fade limpo sem exagerar no frescor e suavizou a barba para um acabamento mais atemporal.",
        stack: ["Estratégia de Timing", "Fade", "Barba", "Acabamento para Foto"],
        outcome:
          "O corte ficou muito bem nas imagens do fim de semana e ainda parecia natural alguns dias depois do evento.",
        image: "/favicon/favicon.svg",
        alt: "Detalhamento de corte e barba para evento formal",
        featured: true,
      },
      {
        slug: "monthly-membership-client",
        name: "Cliente de Plano Mensal",
        category: "Manutenção de Longo Prazo",
        shortDescription: "Um plano recorrente para um cliente que prefere permanecer sempre alinhado em vez de esperar por uma correção total.",
        challenge:
          "Agendamentos irregulares faziam cada visita exigir correções maiores, tomar mais tempo e reduzir a consistência do corte ao longo dos meses.",
        solution:
          "A Northline colocou o cliente em uma cadência estruturada com limpezas programadas, retoques de barba e orientação de produto ajustada ao estilo escolhido.",
        stack: ["Plano Mensal", "Visitas de Manutenção", "Barba", "Planejamento de Rotina"],
        outcome:
          "Hoje o cliente mantém contorno limpo o ano inteiro e perde menos tempo decidindo quando é a hora certa de voltar.",
        image: "/favicon/favicon.svg",
        alt: "Fluxo consistente de grooming para cliente recorrente",
        featured: true,
      },
    ],
    contactDetails: {
      email: "bookings@northlinebarber.com",
      phone: "+1 (312) 555-0148",
      whatsappNumber: "13125550148",
      whatsappHref:
        "https://wa.me/13125550148?text=Oi%20Northline%2C%20quero%20agendar%20um%20hor%C3%A1rio%20na%20barbearia.",
      responseTime: "Normalmente no mesmo dia útil",
      intro:
        "Fale com a Northline dizendo qual serviço você está considerando, sua janela ideal de horário e se o objetivo é manutenção de rotina ou preparação para uma ocasião especial.",
      projectTypes: [
        "Consultas para primeira visita",
        "Skin fade e taper",
        "Barba desenhada e manutenção",
        "Toalha quente para preparação de evento",
        "Planos recorrentes e agenda fixa",
      ],
    },
    pageHeroes: {
      services: {
        eyebrow: "Serviços",
        title: "Serviços de barbearia pensados para confiança diária, não só para o primeiro dia depois do corte",
        description:
          "A Northline oferece serviços objetivos para quem valoriza forma, consistência e o agendamento certo para a própria rotina.",
      },
      work: {
        eyebrow: "Resultados",
        title: "Um olhar mais próximo sobre como a Northline adapta o atendimento ao cliente",
        description:
          "Esses exemplos mostram o raciocínio por trás de cada atendimento: estilo de vida, manutenção, timing e o acabamento que melhor sustenta o resultado.",
      },
      about: {
        eyebrow: "Sobre a Northline",
        title: "Uma barbearia construída sobre qualidade repetível e uma experiência tranquila na cadeira",
        description:
          "A Northline combina detalhe clássico de barbearia com disciplina moderna de agenda para que cada visita seja pessoal, direta e digna de retorno.",
      },
      contact: {
        eyebrow: "Contato",
        title: "Agende de forma direta e mantenha o processo simples",
        description:
          "Se você já sabe exatamente o serviço ou só quer uma orientação rápida antes de marcar, a primeira conversa na Northline é objetiva.",
      },
    },
    aboutPageContent: {
      intro:
        "A Northline Barber Co. foi criada para clientes que querem uma barbearia confiável: técnica forte, ambiente calmo e atenção suficiente aos detalhes para que cada atendimento pareça realmente pensado.",
      points: [
        "Os horários são organizados para deixar espaço real para consulta, precisão e acabamento, em vez de empurrar o cliente por uma agenda de volume.",
        "Cada corte é pensado com formato, crescimento e manutenção em mente para que o resultado continue funcionando depois do primeiro dia.",
        "A Northline atende clientes fixos, primeiras visitas e serviços para eventos com o mesmo compromisso com consistência e comunicação clara.",
      ],
    },
    pageCopy: {
      services: {
        eyebrow: "O que fazemos",
        title: "Opções claras de serviço para manutenção de rotina e momentos importantes",
        description:
          "Escolha o atendimento que combina com seu estilo atual, o nível de manutenção que você quer e o acabamento que espera.",
        ctaEyebrow: "Não sabe o que agendar?",
        ctaTitle: "Descreva o visual que você quer e a Northline indica o serviço ideal.",
        ctaDescription:
          "Uma mensagem curta já basta para definir se você precisa de um corte completo, uma limpeza de barba ou um grooming mais completo.",
        ctaPrimaryLabel: "Perguntar no WhatsApp",
        ctaSecondaryLabel: "Enviar e-mail",
      },
      work: {
        eyebrow: "Resultados de assinatura",
        title: "Os atendimentos da Northline são moldados pelo contexto, não por um modelo engessado",
        description:
          "O melhor resultado depende de como você usa o visual, com que frequência volta e se o horário é para manutenção ou para um evento importante.",
        ctaEyebrow: "Pronto para o seu caso?",
        ctaTitle: "Agende um horário que combine com sua agenda e com o visual que você precisa.",
        ctaDescription:
          "A Northline ajuda a acertar o timing ideal para manutenção de rotina, grooming para eventos ou uma renovação completa.",
        ctaPrimaryLabel: "Agendar no WhatsApp",
        ctaSecondaryLabel: "Enviar detalhes do horário",
      },
      about: {
        philosophyEyebrow: "Filosofia da barbearia",
        noticeEyebrow: "O que os clientes percebem",
        ctaEyebrow: "Visite a Northline",
        ctaTitle: "Se você quer um barbeiro para voltar sempre, comece com um horário bem pensado.",
        ctaDescription:
          "A Northline funciona melhor para quem valoriza consistência, comunicação clara e um corte que continua certo depois do primeiro dia.",
        ctaPrimaryLabel: "Agendar no WhatsApp",
        ctaSecondaryLabel: "Enviar e-mail para a Northline",
      },
    },
    ui: {
      navbarCta: "Agendar",
      mobileNavbarCta: "Agendar no WhatsApp",
      primaryNavigationAriaLabel: "Navegação principal",
      toggleMenuAriaLabel: "Abrir menu",
      footerConnectTitle: "Conecte-se",
      footerCopyright: "© 2026 Northline Barber Co. Feita para grooming consistente.",
      projectCard: {
        challengeLabel: "Contexto",
        approachLabel: "Abordagem",
        outcomeLabel: "Resultado",
      },
      contactSection: {
        eyebrow: "Canais de contato",
        title: "Agende rápido e confirme com clareza.",
        primaryLabel: "Agendar no WhatsApp",
        secondaryLabel: "Enviar e-mail",
        fitEyebrow: "Ideal para",
        phoneLabel: "Telefone",
        emailLabel: "E-mail",
        responseLabel: "Retorno esperado",
      },
      languageSwitcher: {
        label: "Idioma",
        current: "Atual",
      },
    },
  },
};

export function getDictionary(language: Language = defaultLanguage) {
  return dictionaries[language];
}
