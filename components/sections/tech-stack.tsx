import { techStack } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function TechStack() {
  return (
    <section aria-label="Tech stack" className="pt-24">
      <Reveal>
        <SectionHeading label="02 — Stack" title="Technologies I work with" />
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="px-3 py-1.5 text-sm font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
