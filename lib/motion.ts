// Shared motion tokens — Emil Kowalski-style strong custom easing curves.
// Never hand-type these inline; import from here so every animation in the
// app stays visually consistent and any future retune happens in one place.

/** Strong ease-out for anything entering/exiting. Framer Motion cubic-bezier tuple. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Strong ease-in-out for elements moving/morphing on screen. */
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

/** UI animation duration budget (seconds, Framer Motion scale) — keep entrances under this. */
export const DURATION_UI = 0.25;
