import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/profile";
import { ContributionGraph } from "@/components/contribution-graph";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          GitHub activity
        </p>
        <div className="mt-4">
          <ContributionGraph />
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · Built with Next.js —{" "}
            <a
              href={`${site.github}/portfolio`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              source on GitHub
            </a>
          </p>
          <ul className="flex items-center gap-4" aria-label="Social links">
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4.5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
