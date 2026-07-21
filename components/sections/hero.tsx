import { Download, Mail } from "lucide-react";
import { site, heroStats } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroGlow } from "@/components/hero-glow";
import { AnimatedStat } from "@/components/animated-stat";

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative pt-16 sm:pt-24">
      <HeroGlow />
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          {site.availability}
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m Ravi.
        </h1>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          {site.role} · {site.tagline} · {site.location}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.intro}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" />
              {site.email}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={site.resume} download="Ravi Kumar - Resume.pdf">
              <Download aria-hidden="true" />
              Download resume
            </a>
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.18}>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-card px-5 py-4">
              <dt className="order-2 mt-1 text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight">
                <AnimatedStat value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
