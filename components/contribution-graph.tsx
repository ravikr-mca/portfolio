type ContributionDay = { date: string; count: number; level: number };

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function generateContributions(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date();
  const random = seededRandom(42);

  for (let i = 363; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const roll = random();
    let count = 0;
    if (isWeekend) {
      if (roll > 0.35) count = Math.floor(random() * 6) + 1;
    } else {
      if (roll > 0.08) count = Math.floor(random() * 11) + 2;
    }

    const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 9 ? 3 : 4;

    days.push({ date: date.toISOString().slice(0, 10), count, level });
  }

  return days;
}

const LEVEL_CLASSES = [
  "bg-muted",
  "bg-emerald-200 dark:bg-emerald-950",
  "bg-emerald-400 dark:bg-emerald-800",
  "bg-emerald-500 dark:bg-emerald-600",
  "bg-emerald-600 dark:bg-emerald-400",
];

export function ContributionGraph() {
  const days = generateContributions();
  const total = days.reduce((sum, day) => sum + day.count, 0);

  return (
    <figure>
      <div
        className="grid grid-flow-col grid-rows-7 gap-[3px] overflow-hidden"
        role="img"
        aria-label={`GitHub contribution graph: ${total} contributions in the last year`}
      >
        {days.map((day) => (
          <span
            key={day.date}
            title={`${day.count} contributions on ${day.date}`}
            className={`aspect-square w-full min-w-1 rounded-[2px] ${LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]}`}
          />
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">
        {total.toLocaleString()} contributions in the last year
      </figcaption>
    </figure>
  );
}
