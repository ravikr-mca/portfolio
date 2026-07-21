"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/articles", label: "Articles" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {site.name}
        </Link>
        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="mr-1 hidden items-center sm:flex">
            {nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/#about";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Button variant="ghost" size="icon" asChild>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
