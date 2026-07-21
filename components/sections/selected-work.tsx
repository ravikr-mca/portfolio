import { projects } from "@/content/profile";
import { ProjectCarousel } from "@/components/project-carousel";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function SelectedWork() {
  return (
    <section aria-label="Selected work" className="pt-24">
      <Reveal>
        <SectionHeading
          label="01 — Work"
          title="Selected work"
          link={{ href: "/projects", text: "All projects" }}
        />
      </Reveal>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
