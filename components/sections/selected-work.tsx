import { projects } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section aria-label="Selected work" className="pt-24">
      <Reveal>
        <SectionHeading
          label="01 — Work"
          title="Selected work"
          link={{ href: "/projects", text: "All projects" }}
        />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={0.05 * i} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
