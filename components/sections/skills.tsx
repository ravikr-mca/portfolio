import { skillGroups } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section aria-label="Skills" className="pt-24">
      <Reveal>
        <SectionHeading label="05 — Skills" title="What I bring" />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={0.03 * i} className="h-full">
            <div className="h-full bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {group.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
