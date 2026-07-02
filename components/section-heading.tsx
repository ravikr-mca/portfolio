import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  id,
  label,
  title,
  link,
}: {
  id?: string;
  label: string;
  title: string;
  link?: { href: string; text: string };
}) {
  return (
    <div id={id} className="mb-8 flex items-end justify-between gap-4 scroll-mt-24">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      {link ? (
        <Link
          href={link.href}
          className="group inline-flex shrink-0 items-center gap-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.text}
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      ) : null}
    </div>
  );
}
