import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
            <a
              href={about.architectureLink.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 pt-2 text-foreground transition-colors hover:text-muted-foreground"
            >
              📌 {about.architectureLink.label}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
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
