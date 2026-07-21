"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroGlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[560px] overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-1/4 top-0 size-[420px] rounded-full bg-emerald-500/15 blur-[110px] dark:bg-emerald-400/10"
        animate={
          reduceMotion
            ? undefined
            : {
                transform: [
                  "translate(0px, 0px)",
                  "translate(40px, 20px)",
                  "translate(-20px, 40px)",
                  "translate(0px, 0px)",
                ],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-16 size-[380px] rounded-full bg-sky-500/10 blur-[110px] dark:bg-sky-400/10"
        animate={
          reduceMotion
            ? undefined
            : {
                transform: [
                  "translate(0px, 0px)",
                  "translate(-30px, 30px)",
                  "translate(30px, -10px)",
                  "translate(0px, 0px)",
                ],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
    </div>
  );
}
