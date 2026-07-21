"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/content/profile";
import { ProjectCard } from "@/components/project-card";
import { EASE_OUT } from "@/lib/motion";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div
      className="relative"
      role="region"
      aria-label="Project carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") scrollByCard(1);
        if (e.key === "ArrowLeft") scrollByCard(-1);
      }}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            data-carousel-card
            className="w-[280px] shrink-0 snap-start sm:w-[320px]"
            initial={reduceMotion ? undefined : { opacity: 0, transform: "translateY(24px)" }}
            whileInView={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, margin: "-40px", amount: 0.3 }}
            transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.05, ease: EASE_OUT }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
        <div className="w-px shrink-0" aria-hidden="true" />
      </div>

      <div className="mt-1 flex items-center gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous project"
            className="flex size-9 items-center justify-center rounded-full border text-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next project"
            className="flex size-9 items-center justify-center rounded-full border text-foreground transition-[background-color,transform] duration-150 ease-out hover:bg-accent active:scale-90 disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-border">
          <motion.div
            className="absolute inset-0 origin-left rounded-full bg-foreground/60"
            animate={{ transform: `scaleX(${Math.max(0.12, progress)})` }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "linear" }}
          />
        </div>

        <span className="font-mono text-xs tabular-nums text-muted-foreground">
          {projects.length} projects
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent sm:w-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent sm:w-10"
        aria-hidden="true"
      />
    </div>
  );
}
