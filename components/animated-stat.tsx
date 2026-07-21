"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

// Parses "350k+" / "~1M" / "8+" into { prefix: "~", target: 350, suffix: "k+" }
function parseStat(value: string) {
  const match = value.match(/^(~?)(\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return { prefix, target: Number(digits), suffix };
}

export function AnimatedStat({ value }: { value: string }) {
  const parsed = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(parsed ? parsed.target : null);

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) return;
    const controls = animate(0, parsed.target, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  if (!parsed) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
