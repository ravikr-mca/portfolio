export const site = {
  name: "Ravi Kumar",
  role: "Senior Frontend / Full-Stack Engineer",
  tagline: "Founder, Her Aviation Era",
  url: "https://ravikr-mca.github.io/portfolio",
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
};

export const projects: Project[] = [
  {
    slug: "her-aviation-era",
    title: "Her Aviation Era",
    description:
      "Founded and solo-built a production SaaS for aspiring cabin crew — 150+ active users in the first 7 days of launch.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe"],
    year: "2026",
    image: "/images/her-aviation-era.svg",
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
    image: "/images/tiket-flight.svg",
    featured: true,
  },
  {
    slug: "things-to-do-migration",
    title: "Things To Do migration",
    description:
      "Rebuilt tiket.com's entertainment-ticketing vertical on TypeScript and Next.js — ~50% faster page loads and smoother high-demand event launches.",
    tags: ["Next.js", "TypeScript", "Migration"],
    year: "2023",
    image: "/images/things-to-do.svg",
    featured: true,
  },
  {
    slug: "live-hiring-feed",
    title: "Live Hiring Feed",
    description:
      "Fully automated pipeline scraping 50+ international airlines daily for crew openings, with one-click curation from an admin panel to every user's dashboard.",
    tags: ["Automation", "Pipelines", "Supabase"],
    year: "2026",
    image: "/images/live-hiring-feed.svg",
    featured: true,
  },
  {
    slug: "tiket-live-streaming",
    title: "Tiket Live & VoD",
    description:
      "Developed and launched tiket.com's in-house live streaming and video-on-demand products on Next.js, optimized for in-app WebViews.",
    tags: ["Next.js", "Streaming", "WebView"],
    year: "2024",
    image: "/images/tiket-live.svg",
  },
  {
    slug: "aspirant-toolkit",
    title: "Aspirant Toolkit",
    description:
      "Six interactive tools for cabin-crew aspirants: airline eligibility matcher (50+ airlines), BMI checker, grooming checker, salary estimator, aptitude practice, and intro script builder.",
    tags: ["React", "Product", "Interactive tools"],
    year: "2026",
    image: "/images/aspirant-toolkit.svg",
  },
  {
    slug: "paytm-bank-current-accounts",
    title: "Paytm Bank Current Accounts",
    description:
      "Architected the full digital Current Accounts journey on the Paytm Bank consumer app, with a Node.js API layer for server-to-server security.",
    tags: ["React", "Node.js", "Fintech"],
    year: "2021",
    image: "/images/paytm-bank.svg",
  },
  {
    slug: "release-and-dr-pipeline",
    title: "Governed releases & 3-2-1 backups",
    description:
      "Two-environment release pipeline with gated CI/CD, automated migration checks, expand/contract schema strategy, and an encrypted daily 3-2-1 backup/disaster-recovery pipeline.",
    tags: ["GitHub Actions", "CI/CD", "PostgreSQL", "Security"],
    year: "2026",
    image: "/images/release-pipeline.svg",
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
