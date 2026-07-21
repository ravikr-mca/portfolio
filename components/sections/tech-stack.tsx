import { techStack } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

function TechBadge({ tech }: { tech: string }) {
  return (
    <Badge
      variant="outline"
      className="shrink-0 px-3 py-1.5 text-sm font-normal transition-colors hover:border-foreground/40 hover:bg-accent"
    >
      {tech}
    </Badge>
  );
}

export function TechStack() {
  return (
    <section aria-label="Tech stack" className="pt-24">
      <Reveal>
        <SectionHeading label="02 — Stack" title="Technologies I work with" />
      </Reveal>
      <div className="group/marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent sm:w-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent sm:w-10" />
        <ul className="animate-marquee flex w-max gap-2 py-1">
          {techStack.map((tech) => (
            <li key={tech}>
              <TechBadge tech={tech} />
            </li>
          ))}
          {techStack.map((tech) => (
            <li key={`dup-${tech}`} aria-hidden="true" className="marquee-dup">
              <TechBadge tech={tech} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
