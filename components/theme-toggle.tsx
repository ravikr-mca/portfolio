"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="active:scale-90"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <span className="relative flex size-4.5 items-center justify-center">
        <Sun
          className="absolute size-4.5 rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] dark:-rotate-90 dark:scale-0 dark:opacity-0"
          aria-hidden="true"
        />
        <Moon
          className="absolute size-4.5 rotate-90 scale-0 opacity-0 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] dark:rotate-0 dark:scale-100 dark:opacity-100"
          aria-hidden="true"
        />
      </span>
    </Button>
  );
}
