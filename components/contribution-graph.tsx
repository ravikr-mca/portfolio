import { site } from "@/content/profile";

type ContributionDay = { date: string; count: number; level: number };

async function getContributions(): Promise<ContributionDay[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.githubUser}?y=last`,
      { next: { revalidate: false } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { contributions: ContributionDay[] };
    return data.contributions ?? null;
  } catch {
    return null;
  }
}

const LEVEL_CLASSES = [
  "bg-muted",
  "bg-emerald-200 dark:bg-emerald-950",
  "bg-emerald-400 dark:bg-emerald-800",
  "bg-emerald-500 dark:bg-emerald-600",
  "bg-emerald-600 dark:bg-emerald-400",
];

export async function ContributionGraph() {
  const contributions = await getContributions();
  if (!contributions || contributions.length === 0) return null;

  const days = contributions.slice(-364);
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
