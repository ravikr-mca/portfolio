export const site = {
  name: "Ravi Kumar",
  role: "Senior Frontend / Full-Stack Engineer",
  tagline: "Founder, Her Aviation Era",
  url: "https://ravikr.vercel.app",
  location: "Dubai, UAE",
  availability: "Open to remote roles",
  email: "ravichoudhary1722@gmail.com",
  github: "https://github.com/ravikr-mca",
  githubUser: "ravikr-mca",
  linkedin: "https://www.linkedin.com/in/ravi-kumar-7834a480",
  resume: "/resume.pdf",
  intro:
    "Senior frontend / full-stack engineer with 8+ years shipping web products at millions-of-users scale across travel, fintech, and entertainment. Most recently I founded and solo-built Her Aviation Era, a live production SaaS — owning everything from architecture and CI/CD to security and payments, with Claude as an AI engineering partner.",
};

export const heroStats = [
  { value: "8+", label: "years of engineering" },
  { value: "~1M", label: "MAU flight product" },
  { value: "150+", label: "users in first 7 days" },
  { value: "285k+", label: "audience turned into insight" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  image?: string;
  href?: string;
  external?: string;
  featured?: boolean;
  caseStudy?: {
    role: string;
    overview: string[];
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "her-aviation-era",
    title: "Her Aviation Era",
    description:
      "Founded and solo-built a production SaaS for aspiring cabin crew — 150+ active users in the first 7 days of launch.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe"],
    year: "2026",
    image: "/images/her-aviation-era.png",
    href: "/projects/her-aviation-era",
    external: "https://heraviationera.com",
    featured: true,
  },
  {
    slug: "tiket-flight-revamp",
    title: "tiket.com Flight revamp",
    description:
      "Spearheaded the end-to-end migration of the Flight product from legacy React to Next.js + TypeScript, serving ~1M monthly active users.",
    tags: ["Next.js", "TypeScript", "WebView", "Performance"],
    year: "2022–2025",
    image: "/images/tiket-flight.png",
    external: "https://www.tiket.com/en-us/flights",
    featured: true,
    caseStudy: {
      role: "Senior Frontend Engineer · tiket.com · Jakarta, Indonesia",
      overview: [
        "tiket.com's Flight product is one of Indonesia's largest online travel surfaces, serving roughly a million monthly active users across web and in-app WebViews. The legacy React codebase had accumulated years of drift and was holding back both performance and feature velocity.",
        "I spearheaded the end-to-end revamp: migrating the product to Next.js and TypeScript with a fully responsive design, without ever pausing the feature roadmap. The migration ran route-by-route, with legacy and new surfaces serving traffic side by side.",
      ],
      highlights: [
        "Migrated the full Flight funnel — search, selection, booking — from legacy React to Next.js + TypeScript at ~1M MAU",
        "Delivered online check-in for web and in-app WebViews, improving the airline customer experience",
        "Debugged and optimized WebView behavior on iOS and Android simulators for consistent cross-platform behavior",
        "Improved page performance and resolved critical bugs across bus, train, ferry, and airport service modules",
      ],
    },
  },
  {
    slug: "things-to-do-migration",
    title: "Things To Do migration",
    description:
      "Rebuilt tiket.com's entertainment-ticketing vertical on TypeScript and Next.js — ~50% faster page loads and smoother high-demand event launches.",
    tags: ["Next.js", "TypeScript", "Migration"],
    year: "2023",
    image: "/images/things-to-do.png",
    external: "https://www.tiket.com/en-us/to-do",
    featured: true,
    caseStudy: {
      role: "Senior Frontend Engineer · tiket.com · Jakarta, Indonesia",
      overview: [
        "Things To Do is tiket.com's entertainment-ticketing vertical — attractions, events, concerts, and experiences. The legacy JavaScript codebase made every high-demand launch a risk and every refactor a gamble.",
        "I migrated the codebase to TypeScript first, then refactored the product onto Next.js. Typing the code as it moved surfaced years of silent contract drift between frontend and backend — most 'migration bugs' turned out to be pre-existing bugs that types finally made visible.",
      ],
      highlights: [
        "~50% improvement in page load times after the Next.js migration",
        "Full TypeScript migration improving code quality, maintainability, and developer productivity",
        "Supported high-demand ticket launches for concerts and sports events with rapid issue resolution",
      ],
    },
  },
  {
    slug: "live-hiring-feed",
    title: "Live Hiring Feed",
    description:
      "Fully automated pipeline scraping 50+ international airlines daily for crew openings, with one-click curation from an admin panel to every user's dashboard.",
    tags: ["Automation", "Pipelines", "Supabase"],
    year: "2026",
    image: "/images/live-hiring-feed.png",
    featured: true,
    external: "https://heraviationera.com",
    caseStudy: {
      role: "Founder & Full-Stack Engineer · Her Aviation Era",
      overview: [
        "Aspiring cabin crew chase openings across dozens of airline career sites, each with its own format and cadence. The Live Hiring Feed turns that scattered landscape into one curated stream inside Her Aviation Era.",
        "A fully automated pipeline scrapes 50+ international airlines daily for crew openings — open days, walk-ins, and online applications. New listings land in an admin review queue where vague or expired posts are rejected; one click publishes the curated feed to every user's dashboard.",
      ],
      highlights: [
        "Automated daily scraping across 50+ airline career sources",
        "Admin curation queue with one-click publish to all user dashboards",
        "Filterable feed by type (open day, walk-in, online) and airline",
        "Built on Supabase with scheduled jobs and typed ingestion pipelines",
      ],
    },
  },
  {
    slug: "tiket-live-streaming",
    title: "Tiket Live & VoD",
    description:
      "Developed and launched tiket.com's in-house live streaming and video-on-demand products on Next.js, optimized for in-app WebViews.",
    tags: ["Next.js", "Streaming", "WebView"],
    year: "2024",
    image: "/images/tiket-live.png",
    external: "https://www.tiket.com/en-us",
    caseStudy: {
      role: "Senior Frontend Engineer · tiket.com · Jakarta, Indonesia",
      overview: [
        "Tiket Live was tiket.com's in-house live streaming initiative — bringing live commerce and event streaming into the travel super-app, alongside a video-on-demand product.",
        "I developed and launched both products on Next.js, optimized specifically for in-app WebViews, and collaborated cross-functionally to integrate modules across tiket.com's verticals for a unified user experience.",
      ],
      highlights: [
        "Built and launched live streaming + VoD products on Next.js",
        "Optimized playback and UI for seamless in-app WebView integration on iOS and Android",
        "Cross-vertical module integration ensuring feature consistency across the super-app",
      ],
    },
  },
  {
    slug: "aspirant-toolkit",
    title: "Aspirant Toolkit",
    description:
      "Six interactive tools for cabin-crew aspirants: airline eligibility matcher (50+ airlines), BMI checker, grooming checker, salary estimator, aptitude practice, and intro script builder.",
    tags: ["React", "Product", "Interactive tools"],
    year: "2026",
    image: "/images/aspirant-toolkit.png",
    external: "https://heraviationera.com",
    caseStudy: {
      role: "Founder & Full-Stack Engineer · Her Aviation Era",
      overview: [
        "Before spending a single application on an airline, an aspirant needs to know one thing: do I actually qualify? The Toolkit answers that in minutes — interactive tools covering the full journey from qualifying to applying to interviewing, all in one place.",
        "Each tool encodes real airline requirements — height and arm-reach minimums, age brackets, grooming and tattoo policies — into instant, personalized results, turning scattered forum folklore into a product.",
      ],
      highlights: [
        "Airline Eligibility Matcher: enter height, reach, age, and grooming details — see which of 45+ airlines you qualify for right now",
        "BMI and body-standards checker, tattoo/grooming checker, and cabin crew salary estimator",
        "Aptitude and situational-judgement practice plus a self-intro script builder for interview day",
        "Freemium gating: core tools free, advanced tools drive Premium conversion",
      ],
    },
  },
  {
    slug: "paytm-bank-current-accounts",
    title: "Paytm Bank Current Accounts",
    description:
      "Architected the full digital Current Accounts journey on the Paytm Bank consumer app, with a Node.js API layer for server-to-server security.",
    tags: ["React", "Node.js", "Fintech"],
    year: "2021",
    image: "/images/paytm-bank.png",
    external: "https://paytm.com/",
    caseStudy: {
      role: "Senior Software Developer · Paytm Payments Bank · Noida, India",
      overview: [
        "Paytm Payments Bank runs inside India's largest consumer payments app, where the banking surfaces serve tens of millions of users. I spent three and a half years across Paytm's banking and platform teams, finishing as the architect of the Current Accounts digital journey.",
        "The Current Accounts journey covered the full flow — onboarding, KYC, account servicing — built on React.js in the consumer app. To harden security, I implemented a Node.js API layer between frontend and backend, moving sensitive calls to a server-to-server architecture, and established the coding standards and frontend architecture used across the bank's applications.",
      ],
      highlights: [
        "Architected the full digital Current Accounts journey on the Paytm Bank consumer app",
        "Node.js API layer between frontend and backend — server-to-server security architecture",
        "Established coding standards and frontend architecture for banking applications",
        "Earlier at Paytm: shared banking modules, storefront banners, an asset-tracking system (React/Redux + barcode), merchant loan onboarding with document upload and selfie capture",
        "Built Panel BFF — a Node.js authorization server for authentication across Movies, BoxOffice, FSM, BPMS, and Seller Panel",
      ],
    },
  },
  {
    slug: "release-and-dr-pipeline",
    title: "Governed releases & 3-2-1 backups",
    description:
      "Two-environment release pipeline with gated CI/CD, automated migration checks, expand/contract schema strategy, and an encrypted daily 3-2-1 backup/disaster-recovery pipeline.",
    tags: ["GitHub Actions", "CI/CD", "PostgreSQL", "Security"],
    year: "2026",
    image: "/images/release-pipeline.png",
    caseStudy: {
      role: "Founder & Full-Stack Engineer · Her Aviation Era",
      overview: [
        "A solo founder can't afford a bad deploy — there's no on-call rotation to catch it. So Her Aviation Era ships through the same governance a good platform team would enforce, automated end to end.",
        "Every change flows feature branch → staging environment → production with verification at each stage. Database changes are append-only migrations applied to staging first, and production migrations run through a manually-confirmed CI job that takes a pre-migration backup before touching anything.",
      ],
      highlights: [
        "Two-environment release pipeline (staging → production) with gated CI/CD on every PR via GitHub Actions",
        "Automated migration checks and an expand/contract schema strategy for zero-downtime changes",
        "Daily encrypted 3-2-1 backups: three copies, two storage types, one off-site (Cloudflare R2)",
        "Postgres Row-Level Security audited across all tables; GDPR-aligned account deletion",
        "SemVer-tagged releases with changelogs and a public what's-new feed",
      ],
    },
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "GitHub Actions",
  "Stripe",
  "Razorpay",
  "PayPal",
  "PostHog",
  "Claude Code",
];

export const about = {
  heading: "The inbox was the market research",
  paragraphs: [
    "My wife is an active Emirates cabin crew member, and I manage her social presence — 285k+ followers across Instagram, TikTok, and YouTube. Her inbox was flooded daily with the same questions: how do I prepare, what are the requirements, am I eligible?",
    "I turned that inbox into a product. Her Aviation Era is the complete preparation platform for aspiring cabin crew — and it reached 150+ active users in its first 7 days. I own the entire lifecycle: architecture, full-stack development, CI/CD, database migrations, security, and DevOps, shipping as a team of one in close collaboration with Claude.",
    "Before founding, I spent eight years building for scale — travel at tiket.com, banking at Paytm — and pioneered AI-augmented engineering practices on every team I joined.",
  ],
  education:
    "Master of Computer Applications (MCA) — Guru Gobind Singh Indraprastha University, Delhi",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Her Aviation Era",
    role: "Founder & Full-Stack Engineer",
    period: "Jan 2026 — Present",
    location: "Dubai, UAE · heraviationera.com",
    bullets: [
      "Designed and built the entire product end-to-end on Next.js, React, TypeScript, and Supabase — authentication, booking, content delivery, and a member dashboard.",
      "Architected a freemium model with tiered gating across 15+ surfaces and integrated three payment gateways (Stripe, PayPal, Razorpay) for USD and INR billing.",
      "Built a governed staging → production pipeline with gated CI/CD, automated migration checks, Row-Level Security, GDPR-aligned deletion, and daily encrypted 3-2-1 backups.",
      "Shipped 10+ major features solo, directing the full lifecycle in AI-augmented collaboration with Claude.",
    ],
  },
  {
    company: "tiket.com",
    role: "Senior Frontend Engineer",
    period: "Feb 2022 — Dec 2025",
    location: "Jakarta, Indonesia",
    bullets: [
      "Spearheaded the end-to-end revamp of the Flight product — legacy React to Next.js + TypeScript — supporting ~1M monthly active users.",
      "Migrated Things To Do to TypeScript and Next.js, achieving ~50% faster page loads; launched Tiket Live streaming and VoD products.",
      "Pioneered team-wide AI tooling (Cursor, Copilot, MCP servers for Figma/GitHub/JIRA), cutting design-to-component time from days to hours.",
    ],
  },
  {
    company: "Paytm Payments Bank",
    role: "Senior Software Developer",
    period: "Sep 2021 — Jan 2022",
    location: "Noida, India",
    bullets: [
      "Architected the full digital Current Accounts journey on the consumer banking app.",
      "Implemented a Node.js API layer between frontend and backend for server-to-server security; established frontend coding standards.",
    ],
  },
  {
    company: "Paytm",
    role: "Software Developer",
    period: "Feb 2018 — Aug 2021",
    location: "Noida, India",
    bullets: [
      "Built shared modules for the Paytm Bank consumer app, an asset-tracking system on React/Redux, and merchant loan onboarding flows.",
      "Shipped features across Movies, BoxOffice, and Seller Panel verticals, including a Node.js authorization server for cross-panel authentication.",
    ],
  },
  {
    company: "Qorql",
    role: "Web Developer",
    period: "Feb 2017 — Jan 2018",
    location: "Noida, India",
    bullets: [
      "Implemented an event-based queue management system with FCM push notifications and Firebase real-time database.",
      "Built an admin panel for centralized application and database management.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frameworks & libraries",
    items: ["Next.js", "React", "Redux", "Node.js"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "SQL (PostgreSQL)"],
  },
  {
    label: "Cloud, data & DevOps",
    items: ["Supabase (Postgres, RLS, Auth)", "Vercel", "GitHub Actions", "Firebase"],
  },
  {
    label: "Payments & growth",
    items: ["Stripe", "PayPal", "Razorpay", "PostHog", "Microsoft Clarity"],
  },
  {
    label: "AI-augmented engineering",
    items: [
      "Claude Code / Agent SDK",
      "Cursor AI",
      "GitHub Copilot",
      "MCP servers (Figma, GitHub, JIRA, Chrome DevTools)",
    ],
  },
  {
    label: "Mobile & platforms",
    items: ["iOS/Android simulators", "WebView debugging", "Git", "Webpack", "JIRA"],
  },
];

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
};

export const articles: Article[] = [
  {
    slug: "shipping-saas-team-of-one",
    title: "Shipping a production SaaS as a team of one with Claude",
    summary:
      "How I run architecture, CI/CD, migrations, security, and product as a solo founder by treating an AI agent as a real engineering partner.",
    date: "2026-06-20",
    readingTime: "8 min read",
  },
  {
    slug: "react-to-nextjs-at-1m-mau",
    title: "React → Next.js at 1M MAU: lessons from tiket.com",
    summary:
      "What actually matters when migrating a high-traffic product to Next.js: WebViews, performance budgets, and shipping without stopping the roadmap.",
    date: "2026-05-12",
    readingTime: "6 min read",
  },
];
