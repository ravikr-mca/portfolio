import type { Metadata } from "next";
import { projects } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering work: production SaaS, high-traffic migrations, fintech journeys, and automation pipelines.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-8 sm:px-6">
      <section className="pt-16 sm:pt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From a solo-founded production SaaS to migrations serving a million
            monthly users — a selection of work across travel, fintech, and
            entertainment.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.04 * i} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
