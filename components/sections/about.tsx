import Image from "next/image";
import { about } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section aria-label="About" className="pt-24">
      <Reveal>
        <SectionHeading id="about" label="03 — About" title={about.heading} />
        <div className="grid gap-8 sm:grid-cols-[1fr_200px]">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            <p className="pt-2 font-mono text-xs uppercase tracking-wider">
              {about.education}
            </p>
          </div>
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-xl border bg-muted sm:block">
            <Image
              src="/images/ravi.jpg"
              alt="Ravi Kumar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
