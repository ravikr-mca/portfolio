import Link from "next/link";
import { articles } from "@/content/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Writing() {
  return (
    <section aria-label="Latest writing" className="pt-24">
      <Reveal>
        <SectionHeading
          label="06 — Writing"
          title="Latest writing"
          link={{ href: "/articles", text: "All articles" }}
        />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={0.05 * i} className="h-full">
            <Link
              href={`/articles/${article.slug}`}
              className="group flex h-full flex-col rounded-xl border bg-card p-5 transition-colors hover:border-foreground/25 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <h3 className="text-base font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.summary}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
                {formatDate(article.date)} · {article.readingTime}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
