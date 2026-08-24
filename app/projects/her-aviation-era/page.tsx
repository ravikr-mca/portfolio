import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroGlow } from "@/components/hero-glow";

export const metadata: Metadata = {
  title: "Her Aviation Era — case study",
  description:
    "How a 350k-follower inbox became a production SaaS with 800+ active users — solo-built with AI-augmented engineering.",
};

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Supabase (Postgres, RLS, Auth)",
  "Tailwind CSS",
  "Vercel",
  "GitHub Actions",
  "Stripe",
  "PayPal",
  "Razorpay",
  "PostHog",
  "Claude Code",
];

const features = [
  {
    title: "Live Hiring Feed",
    body: "A fully automated daily pipeline scrapes 50+ international airlines for crew openings. Vague listings are rejected in an admin panel; one click publishes the curated feed to every user's dashboard.",
  },
  {
    title: "Aspirant Toolkit",
    body: "Six interactive tools: airline eligibility matcher (50+ airlines), BMI and body-standards checker, tattoo and grooming checker, salary estimator, aptitude/SJT practice, and a self-intro script builder.",
  },
  {
    title: "Interview Bank",
    body: "151 real interview questions with model answers and STAR breakdowns, gated by a freemium model across 15+ product surfaces.",
  },
  {
    title: "Cabin Crew Academy",
    body: "18 study modules, each with 7 lessons, a quiz, and a flashcard deck — plus a mock interview studio, premium CV templates, 1:1 coaching bookings, and direct crew Q&A.",
  },
  {
    title: "Growth engineering",
    body: "Product analytics identify engaged free users; a templated win-back email goes to that exact segment in one click from the admin panel (PostHog + Resend).",
  },
  {
    title: "Admin console",
    body: "Revenue reporting split by currency, customer insight badges, booking availability management, and a curated hiring-feed review queue.",
  },
  {
    title: "Group Discussion prep",
    body: "A dedicated GD prep track with its own pricing tier, built to cover a recruitment stage most competitors ignore.",
  },
  {
    title: "Airline profile pages & open days",
    body: "SEO-indexed profile pages per airline plus an open-days calendar with free/gated alerts, routed and scroll-fixed for mobile.",
  },
];

const discipline = [
  "Staged releases: feature branch → staging environment → production, with two verification checkpoints",
  "Gated CI/CD on every PR via GitHub Actions, plus a manually-confirmed production migration job",
  "Governed database migrations with an expand/contract schema strategy for zero-downtime changes",
  "Postgres Row-Level Security audited and enforced; GDPR-aligned account deletion",
  "Encrypted daily 3-2-1 backup and disaster-recovery pipeline",
  "SemVer-tagged releases with a public what's-new feed",
  "Test coverage raised from 61% to a 90% CI-enforced floor, risk-weighted toward money, access, and API surfaces",
];

export default function CaseStudyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-8 sm:px-6">
      <header className="relative pt-16 sm:pt-20">
        <HeroGlow />
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="size-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            All projects
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Case study · Jan 2026 — present
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Her Aviation Era
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The complete preparation platform for aspiring cabin crew —
            designed, architected, and shipped by one engineer, reaching 800+
            active users.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://heraviationera.com" target="_blank" rel="noreferrer">
                Visit heraviationera.com
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </header>

      <Reveal className="mt-12">
        <div className="relative aspect-[8/5] overflow-hidden rounded-xl border bg-muted">
          <Image
            src="/images/her-aviation-era.png"
            alt="Her Aviation Era landing page — the all-in-one cabin crew prep platform"
            fill
            className="object-cover object-top"
          />
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          The inbox was the market research
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            My wife is an active Emirates cabin crew member, and I manage her
            social media — 350k+ combined followers across Instagram, TikTok,
            and YouTube. Her inbox was flooded daily with the same questions:
            how do I prepare, what are the minimum requirements, am I eligible?
          </p>
          <p>
            That inbox was a measurable, recurring problem statement. Instead of
            answering one DM at a time, I turned it into a product — and the
            demand it predicted showed up immediately: 800+ active users and
            counting.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          What I built
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card p-5">
              <h3 className="text-sm font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Startup-grade engineering discipline, team of one
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          I directed the full software development lifecycle — scoping,
          architecture, implementation, testing, deployment, and DevOps — in
          close AI-augmented collaboration with Claude, treating an AI agent as
          a genuine engineering partner rather than an autocomplete.
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {discipline.map((item) => (
            <li key={item.slice(0, 32)} className="flex gap-3">
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Monetization
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          A freemium model with tiered feature gating across 15+ product
          surfaces, backed by three payment gateways — Stripe, PayPal, and
          Razorpay — supporting both USD and INR billing with a yearly founding
          membership.
        </p>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Stack</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="px-3 py-1.5 text-sm font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}
