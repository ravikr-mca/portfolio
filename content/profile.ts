export const site = {
  name: "Ravi Kumar",
  role: "Senior Frontend / Full-Stack Engineer",
  tagline: "Lead Engineer, Her Aviation Era",
  url: "https://ravikr.vercel.app",
  location: "Dubai, UAE",
  availability: "Open to remote roles",
  email: "ravichoudhary1722@gmail.com",
  github: "https://github.com/ravikr-mca",
  githubUser: "ravikr-mca",
  linkedin: "https://www.linkedin.com/in/ravi-kumar-7834a480",
  resume: "/resume.pdf",
  intro:
    "Senior frontend / full-stack engineer with 8+ years shipping products at scale — tiket.com's Flight product (~1M MAU), Paytm's banking flows. Based in Dubai and actively looking for my next senior frontend or full-stack-leaning role. In the meantime, I've solo-built Her Aviation Era, a live production SaaS, with Claude as an AI engineering partner.",
};

export const heroStats = [
  { value: "8+", label: "years of engineering" },
  { value: "~1M", label: "MAU flight product" },
  { value: "800+", label: "active users" },
  { value: "350k+", label: "audience turned into insight" },
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
      "Led and solo-built a production SaaS for aspiring cabin crew — 800+ active users.",
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
      role: "Lead Engineer · Her Aviation Era",
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
      role: "Lead Engineer · Her Aviation Era",
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
    slug: "workspace-designer",
    title: "Workspace Designer · monis.rent",
    description:
      "An illustrated, drag-free room configurator for a furniture-rental challenge — swap desks, chairs, and monitors in a live SVG scene and rent the setup in one tap.",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind CSS 4"],
    year: "2026",
    image: "/images/workspace-designer.png",
    external: "https://workspace-designer-olive.vercel.app/",
    caseStudy: {
      role: "Solo build · Desent Solutions developer challenge",
      overview: [
        "The brief asked for a fun, visual alternative to a boring product catalog for monis.rent, a Bali furniture-rental service. Rather than a grid of product cards, I made the illustrated room itself the product page: a slot compositor places hand-drawn SVG items — desks, chairs, monitors, lighting, plants — into a live scene that updates as you build your setup.",
        "Every design decision was aimed at instant gratification and shareability: three starter bundles fill the room in one tap, the entire configuration is encoded into the URL so a setup can be shared or bookmarked with no account or database, and a running $/week total is always visible through to a checkout that closes the loop with real duration-based pricing and multi-month discounts.",
      ],
      highlights: [
        "Hand-drawn SVG scene compositor: desks swap without losing what's on them, monitors auto-arrange as you add more, floor items claim their own corners",
        "Shareable, stateless setups — the full configuration lives in the URL query string, no backend or database required",
        "Real-feeling pricing modeled on monis.rent's actual catalog: weekly rates, running total, and 1-week/1-month/3-month terms with 10–20% long-stay discounts",
        "Mobile-first and accessible: verified at 375/768/1440 with zero horizontal scroll, keyboard-operable controls, visible focus rings, 44px touch targets, and every spring/motion effect gated behind prefers-reduced-motion",
      ],
    },
  },
  {
    slug: "perch-feed",
    title: "Perch Feed",
    description:
      "A social-feed product demo grown from five timed frontend-assessment features into a complete app — explore, profiles, threaded comments, and notifications, with an original amber visual identity.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4"],
    year: "2026",
    image: "/images/perch-feed.png",
    external: "https://perch-feed.vercel.app/",
    caseStudy: {
      role: "Solo build · reconstructed from a timed frontend assessment",
      overview: [
        "Five of this app's features — repost, mentions autocomplete, infinite scroll that preserves scroll position, keyboard-driven navigation, and drafts with content warnings — were originally built against a real, proprietary codebase during a timed frontend engineering assessment. That repo isn't mine to share, so I rebuilt just the frontend logic and UX I personally designed from scratch, against a fully mocked data layer, and grew it into a complete product: explore/search, user profiles with followers, threaded comments, and notifications.",
        "The goal was portfolio-grade polish, not an assessment answer: an original warm-amber visual identity (OKLCH color, a small set of named accent roles rather than generic slate-and-indigo), purposeful motion — heartbeat likes, repost spin, staggered card entrance — and a distinct per-page identity via a gradient icon-badge header, all gated behind prefers-reduced-motion.",
      ],
      highlights: [
        "Rebuilt 5 assessment features from scratch against mock data: repost, @mention autocomplete, position-preserving infinite scroll, full keyboard navigation, and drafts with content warnings",
        "Extended into a complete social app: explore/search, profiles with followers, threaded comments, and a notifications feed",
        "Zero real backend — a typed in-memory mock API with simulated network latency, persisted to localStorage so state survives a reload, written to swap for a real backend with minimal UI changes",
        "One PostCard component with a variant prop drives both the compact feed card and the larger single-post detail view, so the two can never visually drift apart",
      ],
    },
  },
  {
    slug: "docwing-cv-builder",
    title: "DocWing CV Builder",
    description:
      "Free, private ATS-friendly CV builder — live preview, drag-and-drop sections, and an instant ATS score, with data that never leaves the browser.",
    tags: ["Next.js", "TypeScript", "Zustand", "Zod"],
    year: "2026",
    image: "/images/docwing.png",
    external: "https://docwing.vercel.app/",
    caseStudy: {
      role: "Solo build · first product of a small PDF/document-tools company",
      overview: [
        "Most free CV builders either lock the good templates behind a paywall or quietly ship your resume data to a server. DocWing's premise is the opposite: a fully client-side editor with a live preview, drag-and-drop section reordering, and a real-time ATS score that tells you exactly what to fix — with no sign-up and no data ever leaving the browser.",
        "The architecture is built to outlive its current form. The CV document is a single Zod schema with a `schemaVersion` and a `migrate()` path for forward compatibility, storage sits behind a `CvRepository` interface so a future Supabase-backed account system can drop in without touching any UI, and PDF export is behind its own abstraction so a planned server-rendered/WebView export path can replace the client-side renderer later without a rewrite.",
      ],
      highlights: [
        "Fully client-side editor: live preview, drag-and-drop sections (@dnd-kit), zero data sent to a server",
        "Real-time, synchronous ATS scoring and JD keyword matching as you type",
        "\"Fit to 1 page\": auto-shrinks a CV to a single A4 page instead of forcing manual trimming",
        "Schema-versioned CV document (Zod) with a migrate() path, so future format changes don't break saved resumes",
        "Storage, export, and templates all built behind clean interfaces (CvRepository, exportPdf()) specifically to support planned accounts, payments, and a server-rendered export without reworking the editor",
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
      role: "Lead Engineer · Her Aviation Era",
      overview: [
        "A team of one can't afford a bad deploy — there's no on-call rotation to catch it. So Her Aviation Era ships through the same governance a good platform team would enforce, automated end to end.",
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
  heading: "Between roles, still shipping",
  paragraphs: [
    "8+ years shipping consumer products at scale — tiket.com's Flight product (~1M MAU) and Paytm's banking flows. Based in Dubai, actively looking for my next senior frontend or full-stack-leaning role: full-time or B2B contract, remote, EU/US-East overlap.",
    "In the meantime, I've solo-built Her Aviation Era (heraviationera.com), now at 800+ users, as the only engineer — architecture, payments, and CI/CD, written with Claude Code and reviewed line-by-line behind 218 tests at a 90% coverage gate.",
    "AI doesn't replace taste — someone still has to know what good looks like, say no, and catch it when the machine gets it wrong.",
  ],
  education:
    "Master of Computer Applications (MCA) — Guru Gobind Singh Indraprastha University, Delhi",
  architectureLink: {
    label: "Architecture write-up",
    href: "https://github.com/ravikr-mca/her-aviation-era-architecture",
  },
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
    slug: "61-to-90-percent-coverage",
    title: "61% to 90%: How I Actually Raised Test Coverage on a Solo SaaS",
    summary:
      "Scoping coverage to the surfaces that matter, a local pre-commit gate that mirrors CI, and the gap between what Vitest reports and what Codecov enforces.",
    date: "2026-08-08",
    readingTime: "6 min read",
  },
  {
    slug: "debugging-in-a-black-box",
    title: "Debugging in a Black Box: What WebViews Taught Me About Cross-Platform Web",
    summary:
      "The specific, under-documented failure classes of shipping web products inside native app WebViews — and the debugging loop that survived contact with iOS and Android.",
    date: "2026-07-20",
    readingTime: "6 min read",
  },
  {
    slug: "why-i-didnt-fully-automate-hiring-feed",
    title: "The Judgment Call: Why I Didn't Fully Automate the Hiring Feed",
    summary:
      "Building an AI-assisted scraping pipeline for 50+ airlines, and the trade-off between full automation and a trustworthy result.",
    date: "2026-07-18",
    readingTime: "5 min read",
  },
  {
    slug: "shipping-saas-team-of-one",
    title: "Shipping a production SaaS as a team of one with Claude",
    summary:
      "How I run architecture, CI/CD, migrations, security, and product as a solo engineer by treating an AI agent as a real engineering partner.",
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
