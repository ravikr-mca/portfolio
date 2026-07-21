import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/profile";

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg hover:shadow-black/5 active:scale-[0.98] active:duration-150 motion-reduce:hover:translate-y-0 dark:hover:shadow-black/20">
      <div className="relative aspect-[8/5] overflow-hidden border-b bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-400 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-[transform,opacity] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
          {project.tags.join(" · ")}
        </p>
      </div>
    </article>
  );

  const href =
    project.href ?? (project.caseStudy ? `/projects/${project.slug}` : undefined);

  if (href) {
    return (
      <Link href={href} className="block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-ring">
        {inner}
      </Link>
    );
  }
  return inner;
}
