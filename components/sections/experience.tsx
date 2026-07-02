import { experience } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section aria-label="Experience" className="pt-24">
      <Reveal>
        <SectionHeading label="04 — Experience" title="Where I've worked" />
      </Reveal>
      <ol className="space-y-10">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`}>
            <Reveal delay={0.04 * i}>
              <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
                <p className="pt-0.5 font-mono text-xs text-muted-foreground">
                  {job.period}
                </p>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {job.role}{" "}
                    <span className="font-normal text-muted-foreground">
                      · {job.company}
                    </span>
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {job.location}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)} className="flex gap-3">
                        <span
                          className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
