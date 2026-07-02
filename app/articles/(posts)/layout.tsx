import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-8 sm:px-6">
      <div className="pt-16 sm:pt-20">
        <Link
          href="/articles"
          className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          All articles
        </Link>
        <article className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-headings:tracking-tight prose-a:underline-offset-4">
          {children}
        </article>
      </div>
    </div>
  );
}
