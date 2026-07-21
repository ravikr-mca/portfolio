import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/profile";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroGlow } from "@/components/hero-glow";

const caseStudyProjects = projects.filter(
  (p) => p.caseStudy && p.slug !== "her-aviation-era"
);

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — case study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();
  const { caseStudy } = project;

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
            Case study · {project.year}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {caseStudy.role}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          {project.external ? (
            <div className="mt-6">
              <Button asChild>
                <a href={project.external} target="_blank" rel="noreferrer">
                  Visit live site
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          ) : null}
        </Reveal>
      </header>

      {project.image ? (
        <Reveal className="mt-12">
          <div className="relative aspect-[8/5] overflow-hidden rounded-xl border bg-muted">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      ) : null}

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Overview
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          {caseStudy.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Highlights
        </h2>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {caseStudy.highlights.map((item) => (
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
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Stack</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="px-3 py-1.5 text-sm font-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  );
}
