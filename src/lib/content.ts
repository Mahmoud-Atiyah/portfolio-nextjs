export type Project = {
  slug: string;
  title: string;
  client: string;
  categories: string[];
  summary: string;
  role: string;
  timeline: string;
  hero: {
    image: string;
    alt: string;
  };
  outcomes: string[];
  context: string;
  goals: string[];
  constraints: string[];
  deliverables: string[];
  stack: string[];
  solution: string[];
  seoAutomationNotes: string[];
  gallery: { image: string; alt: string }[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export type Experiment = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  hero: {
    image: string;
    alt: string;
  };
  links: { label: string; href: string }[];
};

export const proofPoints = [
  {
    title: "Speed to launch",
    description: "Rapid builds that move from idea to live site in weeks.",
  },
  {
    title: "SEO baked in",
    description: "Local search structure, schema, and page-level intent mapping.",
  },
  {
    title: "Automation ready",
    description: "Zapier, n8n, and Make flows that keep teams responsive.",
  },
  {
    title: "Brand systems",
    description: "Identity and collateral that stay consistent across channels.",
  },
];

export const services = [
  {
    title: "Conversion-first web builds",
    description: "Premium Next.js or WordPress sites tuned for speed, clarity, and trust.",
  },
  {
    title: "Landing pages + funnels",
    description: "Offer positioning, proof, and CTA flow designed to lift bookings.",
  },
  {
    title: "SEO + local visibility",
    description: "Service pages, structured data, and on-page optimizations that rank.",
  },
  {
    title: "Automation + CRM",
    description: "Lead routing, follow-ups, and tagging pipelines that save hours.",
  },
  {
    title: "Branding + collateral",
    description: "Logos, social templates, flyers, and print-ready assets.",
  },
];

export const experienceHighlights = [
  {
    title: "BizOps systems delivery",
    description: "Work that connects marketing, operations, and engineering into one pipeline.",
  },
  {
    title: "SEO-first architecture",
    description: "Service pages, intent mapping, and schema that surface in local search.",
  },
  {
    title: "Automation + CRM ops",
    description: "Lead routing, tagging, and follow-ups connected to GoHighLevel and Zapier.",
  },
  {
    title: "Brand systems",
    description: "Logos, social templates, and print-ready collateral that stay consistent.",
  },
];

export const clientResults = [
  {
    title: "Baraka Wash",
    description: "Instant quote flow paired with CRM automations and follow-up cadence.",
  },
  {
    title: "Prime Steam Care",
    description: "Brand system and collateral that boosted local recognition.",
  },
  {
    title: "Absher 360",
    description: "Marketplace launch kit with searchable profiles and lead routing.",
  },
];

export const skillsByOutcome = [
  {
    title: "Conversion + SEO",
    items: ["Landing page strategy", "Local SEO", "Schema markup", "Analytics setup"],
  },
  {
    title: "Automation + Ops",
    items: ["Lead routing", "CRM workflows", "Zapier and n8n", "Follow-up sequences"],
  },
  {
    title: "Engineering Delivery",
    items: ["Next.js", "React", "TypeScript", "API integrations"],
  },
  {
    title: "Brand Systems",
    items: ["Brand identity", "Print collateral", "UI systems", "Social content"],
  },
];

export const tooling = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "WordPress",
  "Elementor",
  "ACF / CPT UI",
  "Figma",
  "Photoshop",
  "Canva",
  "Zapier",
  "n8n",
  "Make.com",
  "GoHighLevel",
];

export const projects: Project[] = [
  {
    slug: "bureen-glass-services",
    title: "Bureen Glass Services",
    client: "Bureen Glass Services",
    categories: ["Web & SEO Systems"],
    summary:
      "Next.js service site with local SEO structure for glass and aluminum services.",
    role: "Web engineer + SEO",
    timeline: "3 weeks",
    hero: {
      image: "/images/bureen.png",
      alt: "Bureen Glass and Aluminum logo",
    },
    outcomes: [
      "Service pages organized by local intent",
      "Fast mobile layout focused on calls",
      "SEO metadata and schema-ready foundation",
    ],
    context:
      "Bureen needed a modern site that could compete in local search and clearly present service tiers.",
    goals: [
      "Launch a fast site for local services",
      "Clarify service categories and locations",
      "Improve search visibility with structured content",
    ],
    constraints: [
      "Limited photography at launch",
      "Tight timeline tied to active campaigns",
    ],
    deliverables: [
      "Multi-page service site",
      "Service and location page structure",
      "Call-first hero and contact flow",
      "SEO-ready metadata and sitemap",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Local SEO"],
    solution: [
      "Built a modular layout with service and location templates.",
      "Structured headings and internal links for local intent.",
      "Optimized for speed and clarity on mobile.",
    ],
    seoAutomationNotes: [
      "LocalBusiness schema and service keywords.",
      "Metadata and sitemap configured for crawlability.",
    ],
    gallery: [
      {
        image: "/images/bureen.png",
        alt: "Bureen Glass and Aluminum logo",
      },
      {
        image: "/images/bureen.png",
        alt: "Bureen Glass Services identity mark",
      },
    ],
    links: [
      {
        label: "Visit Site",
        href: "https://bureen-glass-aluminum.vercel.app/",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/bureen-glass-aluminum",
      },
    ],
    featured: true,
  },
  {
    slug: "eddie-calderon-attorney",
    title: "Eddie Calderon Attorney",
    client: "Eddie Calderon",
    categories: ["Web & SEO Systems"],
    summary:
      "Production-ready attorney website with structured practice pages and local SEO focus.",
    role: "Web engineer + SEO",
    timeline: "4 weeks",
    hero: {
      image: "/images/eddie.svg",
      alt: "Eddie Calderon Attorney logo",
    },
    outcomes: [
      "Practice area pages structured for search intent",
      "Trust-first layout with clear calls to action",
      "Metadata and on-page SEO foundation",
    ],
    context:
      "The firm needed a modern site that communicated trust, expertise, and local relevance.",
    goals: [
      "Present practice areas with clear structure",
      "Build a site optimized for local discovery",
      "Create a conversion-focused consultation flow",
    ],
    constraints: [
      "Strict tone requirements for legal services",
      "Limited time for content iteration",
    ],
    deliverables: [
      "Multi-page website architecture",
      "Consultation CTA flow",
      "SEO-friendly content structure",
      "Performance-optimized build",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Local SEO"],
    solution: [
      "Organized practice areas by user intent.",
      "Built a trust-first layout with clear hierarchy.",
      "Implemented SEO metadata and internal linking.",
    ],
    seoAutomationNotes: [
      "Local schema markup and metadata.",
      "Page-level intent mapping for practice areas.",
    ],
    gallery: [
      {
        image: "/images/eddie.svg",
        alt: "Eddie Calderon Attorney logo",
      },
      {
        image: "/images/eddie.svg",
        alt: "Eddie Calderon Attorney wordmark",
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/calderon-law-firm-website",
      },
    ],
    featured: true,
  },
  {
    slug: "baraka-wash",
    title: "Baraka Wash",
    client: "Baraka Wash",
    categories: ["Web & SEO Systems", "Automation & Ops", "Branding & Identity"],
    summary:
      "Conversion-focused service site with instant quote flow and automated follow-ups.",
    role: "BizOps builder + web developer",
    timeline: "4 weeks",
    hero: {
      image: "/images/BarakaWash.png",
      alt: "Baraka Wash website preview",
    },
    outcomes: [
      "Service pages mapped to Houston neighborhoods",
      "Lead form routed to GoHighLevel with automated follow-up",
      "Before and after gallery designed for fast scanning on mobile",
    ],
    context:
      "The brand needed a modern website that ranked locally and turned searchers into booked jobs.",
    goals: [
      "Launch a fast, mobile-first site",
      "Build a quote workflow that captures every lead",
      "Improve local SEO visibility for core services",
    ],
    constraints: [
      "Small team with limited time for manual lead routing",
      "Need to showcase credibility quickly on mobile",
    ],
    deliverables: [
      "Multi-section service site",
      "Instant quote funnel and form",
      "Review widgets and trust markers",
      "Automation flow to CRM",
    ],
    stack: ["WordPress", "Elementor", "GoHighLevel", "Zapier", "Local SEO"],
    solution: [
      "Structured service pages by job type and neighborhood intent.",
      "Designed a mobile-first funnel with sticky CTAs.",
      "Automated lead tagging and follow-ups to reduce response time.",
    ],
    seoAutomationNotes: [
      "LocalBusiness schema and service markup for search features.",
      "Trigger-based CRM workflows for quote follow-up sequences.",
    ],
    gallery: [
      {
        image: "/images/BarakaWash.png",
        alt: "Baraka Wash service page layout",
      },
      {
        image: "/images/BarakaWash.png",
        alt: "Baraka Wash before-and-after gallery",
      },
    ],
    links: [
      {
        label: "Visit Site",
        href: "https://barakawash.com/",
      },
    ],
    featured: true,
  },
  {
    slug: "absher-360",
    title: "Absher 360",
    client: "Absher 360",
    categories: ["Web & SEO Systems", "Branding & Identity", "Automation & Ops"],
    summary:
      "Marketplace concept with a compass-inspired brand system and searchable profiles.",
    role: "Brand designer + WordPress developer",
    timeline: "5 weeks",
    hero: {
      image: "/images/Absher360.png",
      alt: "Absher 360 marketplace preview",
    },
    outcomes: [
      "Custom directory structure for professionals",
      "Branded filters for quick service discovery",
      "CRM automation for new lead routing",
    ],
    context:
      "Absher 360 needed a marketplace identity and a directory that felt trustworthy and easy to search.",
    goals: [
      "Build a brand identity rooted in direction and discovery",
      "Create a scalable directory layout for professionals",
      "Automate lead routing into a CRM",
    ],
    constraints: [
      "Multiple service categories to manage",
      "Need to stay editable for non-technical admins",
    ],
    deliverables: [
      "Logo and compass-inspired visual system",
      "Directory templates with filters",
      "Professional profile fields and search",
      "Zapier lead routing to CRM",
    ],
    stack: ["WordPress", "Elementor", "ACF/CPT UI", "Zapier", "GoHighLevel"],
    solution: [
      "Designed the compass mark and gradient palette for the brand.",
      "Structured CPT templates for fast profile creation.",
      "Connected form submissions to CRM automation for follow-up.",
    ],
    seoAutomationNotes: [
      "Schema for service listings and profile pages.",
      "Automated tagging based on service category interest.",
    ],
    gallery: [
      {
        image: "/images/Absher360.png",
        alt: "Absher 360 directory layout",
      },
      {
        image: "/images/Absher360.png",
        alt: "Absher 360 brand system",
      },
    ],
    links: [
      {
        label: "Visit Site",
        href: "https://jo.absher360.com/",
      },
    ],
    featured: true,
  },
  {
    slug: "prime-steam-care",
    title: "Prime Steam Care",
    client: "Prime Steam Care",
    categories: ["Branding & Identity"],
    summary:
      "Premium logo, social system, and print collateral for a Houston-based steam cleaning team.",
    role: "Brand designer + visual systems",
    timeline: "3 weeks",
    hero: {
      image: "/images/prime-steam-care.png",
      alt: "Prime Steam Care logo",
    },
    outcomes: [
      "Unified logo suite for trucks, uniforms, and digital ads",
      "Reusable social templates for weekly offers",
      "Before and after layouts that highlight service outcomes",
    ],
    context:
      "Prime Steam Care needed a premium, consistent identity to stand out against larger franchises.",
    goals: [
      "Create a recognizable logo and color system",
      "Design print-ready collateral for door-to-door marketing",
      "Build social templates that can be reused weekly",
    ],
    constraints: [
      "Limited photo assets at launch",
      "Tight turnaround for a seasonal promo push",
    ],
    deliverables: [
      "Logo suite + brand palette",
      "Business cards and flyer templates",
      "Social post kit with before and after frames",
      "Brand usage guide for future vendors",
    ],
    stack: ["Photoshop", "Canva", "Print-ready templates"],
    solution: [
      "Built a bold mark and condensed wordmark for vehicle visibility.",
      "Created a modular social system that swaps photos without losing layout rhythm.",
      "Standardized typography and iconography for fast, consistent updates.",
    ],
    seoAutomationNotes: [
      "Produced QR-ready review cards to drive local feedback.",
      "Added CTA copy prompts for in-person lead capture.",
    ],
    gallery: [
      {
        image: "/images/prime-steam-care.png",
        alt: "Prime Steam Care identity system",
      },
      {
        image: "/images/prime-steam-care.png",
        alt: "Prime Steam Care brand mark",
      },
    ],
    links: [
      {
        label: "Visit Site",
        href: "https://primesteamcare.com/",
      },
    ],
  },
  {
    slug: "omar-cuts",
    title: "Omar Cuts",
    client: "Omar Cuts",
    categories: ["Web & SEO Systems", "Branding & Identity"],
    summary: "Modern barber site with booking focus, pricing clarity, and social proof.",
    role: "Web designer + front-end build",
    timeline: "2 weeks",
    hero: {
      image: "/images/omar-cuts.jpeg",
      alt: "Omar Cuts logo",
    },
    outcomes: [
      "Streamlined booking CTA placed above the fold",
      "Pricing and services presented in a scan-friendly grid",
      "Instagram-ready visuals baked into the layout",
    ],
    context:
      "Omar Cuts needed a clean, professional site that would drive appointments from social.",
    goals: [
      "Present services and pricing clearly",
      "Build a fast booking path from mobile",
      "Refresh the visual identity without overhauling the brand",
    ],
    constraints: [
      "Lean marketing budget",
      "Existing photos needed to be reused",
    ],
    deliverables: [
      "One-page marketing site",
      "Pricing and services layout",
      "CTA-driven booking section",
      "Social proof block",
    ],
    stack: ["WordPress", "Elementor", "Canva"],
    solution: [
      "Designed a compact, bold layout with clear service tiers.",
      "Anchored the layout on a sticky booking CTA for mobile users.",
      "Structured sections to highlight reviews and turnaround time.",
    ],
    seoAutomationNotes: [
      "Built a lightweight footer CTA for mobile conversions.",
      "Added location keywords to meta and headings.",
    ],
    gallery: [
      {
        image: "/images/omar-cuts.jpeg",
        alt: "Omar Cuts brand mark",
      },
      {
        image: "/images/omar-cuts.jpeg",
        alt: "Omar Cuts logo detail",
      },
    ],
    links: [
      {
        label: "Visit Site",
        href: "https://omarcuts.com/",
      },
    ],
  },
  {
    slug: "sereniskin-med-spa",
    title: "SereniSkin Med Spa",
    client: "SereniSkin Med Spa",
    categories: ["Web & SEO Systems", "Branding & Identity"],
    summary: "Premium med spa experience with service pages, booking, and SEO.",
    role: "Web designer + brand support",
    timeline: "4 weeks",
    hero: {
      image: "/images/MedSpa.png",
      alt: "SereniSkin Med Spa website preview",
    },
    outcomes: [
      "Service taxonomy with treatment detail pages",
      "Booking flow integrated into the layout",
      "Structured content for local visibility",
    ],
    context:
      "The spa needed a premium look and a clear path from discovery to booking.",
    goals: [
      "Showcase services with clear benefits",
      "Build a booking-ready site on mobile",
      "Reinforce trust with proof and reviews",
    ],
    constraints: [
      "Multiple service categories",
      "Need to retain clinical tone and clarity",
    ],
    deliverables: [
      "Multi-page site with service taxonomy",
      "Booking CTA placement",
      "Review and testimonial blocks",
      "SEO-friendly structure",
    ],
    stack: ["WordPress", "Elementor", "Local SEO"],
    solution: [
      "Created service pages that map to user intent.",
      "Balanced clinical tone with warm brand visuals.",
      "Built a CTA flow that stays visible on mobile.",
    ],
    seoAutomationNotes: [
      "LocalBusiness schema and service markup.",
      "Metadata tuned for service keywords.",
    ],
    gallery: [
      {
        image: "/images/MedSpa.png",
        alt: "SereniSkin service page layout",
      },
      {
        image: "/images/MedSpa.png",
        alt: "SereniSkin booking layout",
      },
    ],
    links: [],
  },
  {
    slug: "pullman-real-estate",
    title: "Pullman Real Estate",
    client: "Pullman Real Estate",
    categories: ["Web & SEO Systems", "Branding & Identity"],
    summary: "Property listing system with custom fields, filters, and branded templates.",
    role: "Web developer + brand support",
    timeline: "5 weeks",
    hero: {
      image: "/images/Pullman.png",
      alt: "Pullman Real Estate listings preview",
    },
    outcomes: [
      "Custom property type with structured fields",
      "Searchable listings and detail templates",
      "SEO-friendly listing pages",
    ],
    context:
      "Pullman needed a listing system that was easy to manage and fast to browse.",
    goals: [
      "Model property data with custom fields",
      "Improve browsing and filtering",
      "Support SEO for listing pages",
    ],
    constraints: [
      "Large media libraries",
      "Non-technical editors",
    ],
    deliverables: [
      "Custom property content type",
      "Filterable listing archive",
      "Detail template with CTA",
      "SEO-ready structure",
    ],
    stack: ["WordPress", "Elementor", "ACF/CPT UI", "Local SEO"],
    solution: [
      "Built structured listing templates that stay consistent.",
      "Designed filters for quick property scanning.",
      "Optimized listing pages for readability and trust.",
    ],
    seoAutomationNotes: [
      "Schema for listings and location signals.",
      "Metadata tuned for property search intent.",
    ],
    gallery: [
      {
        image: "/images/Pullman.png",
        alt: "Pullman listings layout",
      },
      {
        image: "/images/Pullman.png",
        alt: "Pullman property detail layout",
      },
    ],
    links: [],
  },
  {
    slug: "fixarji",
    title: "Fixarji",
    client: "Fixarji",
    categories: ["Web & SEO Systems"],
    summary: "Elementor site with service SEO structure for local discovery.",
    role: "Web builder + SEO",
    timeline: "2 weeks",
    hero: {
      image: "/images/fixarji.png",
      alt: "Fixarji website preview",
    },
    outcomes: [
      "Service pages organized for local intent",
      "Mobile-friendly layout with clear CTA",
      "SEO foundation for service keywords",
    ],
    context:
      "Fixarji needed a reliable service site that could rank and convert quickly.",
    goals: [
      "Launch a clean service site",
      "Improve local search structure",
      "Make contact and booking easy",
    ],
    constraints: [
      "Small content library",
      "Short build window",
    ],
    deliverables: [
      "Elementor site build",
      "Service page structure",
      "Mobile-first layout",
      "SEO meta and headings",
    ],
    stack: ["WordPress", "Elementor", "Local SEO"],
    solution: [
      "Structured services by audience needs.",
      "Built a clear CTA path on every page.",
      "Optimized headings for local search intent.",
    ],
    seoAutomationNotes: [
      "Local keywords aligned to service pages.",
      "Meta descriptions tuned for click-through.",
    ],
    gallery: [
      {
        image: "/images/fixarji.png",
        alt: "Fixarji service layout",
      },
      {
        image: "/images/fixarji.png",
        alt: "Fixarji CTA section",
      },
    ],
    links: [],
  },
  {
    slug: "full-stack-app",
    title: "Full Stack App",
    client: "Internal project",
    categories: ["Engineering Apps"],
    summary: "End-to-end CRUD app with React UI, Flask API, and MySQL data layer.",
    role: "Full-stack developer",
    timeline: "3 weeks",
    hero: {
      image: "/images/full-stack.jpg",
      alt: "Full stack app preview",
    },
    outcomes: [
      "Complete CRUD workflow",
      "REST API with data validation",
      "Responsive interface for data management",
    ],
    context:
      "A full-stack build to prove end-to-end delivery with a modern frontend and Python backend.",
    goals: [
      "Build a clean CRUD flow",
      "Connect frontend and backend",
      "Ship a responsive UI",
    ],
    constraints: [
      "Solo build with limited time",
      "Focus on core functionality over polish",
    ],
    deliverables: [
      "React frontend",
      "Flask API",
      "MySQL schema",
      "CRUD features",
    ],
    stack: ["React", "Flask", "MySQL"],
    solution: [
      "Created a clean API layer with validation.",
      "Built a responsive UI for data entry.",
      "Connected database operations with secure routing.",
    ],
    seoAutomationNotes: ["Not applicable"],
    gallery: [
      {
        image: "/images/full-stack.jpg",
        alt: "Full stack app UI",
      },
      {
        image: "/images/full-stack.jpg",
        alt: "Full stack app table view",
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/fullstack-flask-react-app",
      },
    ],
  },
  {
    slug: "portfolio-nextjs",
    title: "Portfolio Next.js",
    client: "Internal project",
    categories: ["Engineering Apps"],
    summary: "Next.js portfolio system with modular sections and performance focus.",
    role: "Web engineer",
    timeline: "2 weeks",
    hero: {
      image: "/next.svg",
      alt: "Next.js logo",
    },
    outcomes: [
      "App Router structure with reusable sections",
      "Performance-ready layout and metadata",
      "Clean information architecture",
    ],
    context:
      "A modern portfolio build to package work, skills, and project structure clearly.",
    goals: [
      "Build a scalable layout",
      "Keep performance in mind",
      "Present work with clarity",
    ],
    constraints: [
      "Single developer build",
      "Need to stay flexible for updates",
    ],
    deliverables: [
      "Next.js App Router build",
      "Reusable UI components",
      "Content-driven sections",
      "Metadata and sitemap setup",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    solution: [
      "Structured content into modular sections.",
      "Built reusable UI primitives for consistency.",
      "Optimized layout for fast iteration.",
    ],
    seoAutomationNotes: ["Metadata and sitemap configured for visibility."],
    gallery: [
      {
        image: "/next.svg",
        alt: "Next.js logo",
      },
      {
        image: "/next.svg",
        alt: "Next.js wordmark",
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/portfolio-nextjs",
      },
    ],
  },
  {
    slug: "react-portfolio",
    title: "React Portfolio",
    client: "Internal project",
    categories: ["Engineering Apps"],
    summary: "Legacy single-page portfolio built with React and custom components.",
    role: "Frontend developer",
    timeline: "1 week",
    hero: {
      image: "/react.svg",
      alt: "React logo",
    },
    outcomes: [
      "Responsive single-page layout",
      "Reusable component structure",
      "Clean section navigation",
    ],
    context:
      "A prior portfolio build that established a base for UI structure and content flow.",
    goals: [
      "Ship a responsive portfolio",
      "Practice component structure",
      "Showcase basic project layouts",
    ],
    constraints: [
      "Limited time for iteration",
      "Focused on front-end structure",
    ],
    deliverables: [
      "React single-page layout",
      "Project card system",
      "Section navigation",
      "Responsive styling",
    ],
    stack: ["React", "JavaScript"],
    solution: [
      "Built a clean single-page experience.",
      "Used reusable components for project cards.",
      "Kept layout lightweight and responsive.",
    ],
    seoAutomationNotes: ["Not applicable"],
    gallery: [
      {
        image: "/react.svg",
        alt: "React logo",
      },
      {
        image: "/react.svg",
        alt: "React atom mark",
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/react-portfolio",
      },
    ],
  },
];

export const experiments: Experiment[] = [
  {
    slug: "combat-fight",
    title: "Combat Fight",
    summary:
      "Third-person fighting prototype exploring combat loops, movement, and early mechanics.",
    stack: ["Unreal Engine 5", "Blueprints"],
    hero: {
      image: "/images/combat-fight.png",
      alt: "Combat Fight gameplay poster",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/combat-fight-unrealengine",
      },
    ],
  },
  {
    slug: "block-breaker",
    title: "Block Breaker",
    summary: "Unity 2D arcade build focused on physics, scoring, and progression.",
    stack: ["Unity", "C#"],
    hero: {
      image: "/images/block-breaker.png",
      alt: "Block Breaker gameplay poster",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Mahmoud-Atiyah/bricks-smasher-unity",
      },
    ],
  },
  {
    slug: "tic-tac-toe-variants",
    title: "Tic Tac Toe Variants",
    summary:
      "Python implementations across terminal, Tkinter, and Pygame with AI logic exploration.",
    stack: ["Python", "Tkinter", "Pygame"],
    hero: {
      image: "/images/tic-tac-toe.png",
      alt: "Tic Tac Toe gameplay poster",
    },
    links: [
      {
        label: "Terminal Repo",
        href: "https://github.com/Mahmoud-Atiyah/tic-tac-toe-python",
      },
      {
        label: "Tkinter Repo",
        href: "https://github.com/Mahmoud-Atiyah/tkinter-tic-tac-toe",
      },
      {
        label: "Pygame Repo",
        href: "https://github.com/Mahmoud-Atiyah/pygame-tic-tac-toe",
      },
    ],
  },
];
