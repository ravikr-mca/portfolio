import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/profile";
import { formatDate } from "@/components/sections/writing";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writing on AI-augmented engineering, large-scale frontend migrations, and building products solo.",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-8 sm:px-6">
      <section className="pt-16 sm:pt-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Articles
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Writing
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Notes on AI-augmented engineering, large-scale frontend migrations,
            and shipping production software as a team of one.
          </p>
        </Reveal>
        <div className="mt-10 space-y-5">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={0.04 * i}>
              <Link
                href={`/articles/${article.slug}`}
                className="group block rounded-xl border bg-card p-6 transition-colors hover:border-foreground/25 focus-visible:outline-2 focus-visible:outline-ring"
              >
                <h2 className="text-lg font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
    </div>
  );
}
