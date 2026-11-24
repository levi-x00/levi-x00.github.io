const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function parseMonthYear(text: string): { year: number; month: number } | null {
  const match = text.trim().match(/^([A-Za-z]+)\.?\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS.indexOf(match[1].slice(0, 3).toLowerCase());
  if (month === -1) return null;
  return { year: Number(match[2]), month };
}

/**
 * Turns a range such as "Sept 2024 - Present" into "1 yr 3 mos".
 * Both the start and end month are counted, the way LinkedIn does it.
 * "Present" uses `now`, so the value is fixed at build time on a static site.
 * Returns null when the range cannot be parsed.
 */
export function formatDuration(
  range: string,
  now: Date = new Date(),
): string | null {
  const [startText, endText] = range.split(/\s+-\s+/);
  if (!startText || !endText) return null;

  const start = parseMonthYear(startText);
  const end = /^present$/i.test(endText.trim())
    ? { year: now.getFullYear(), month: now.getMonth() }
    : parseMonthYear(endText);
  if (!start || !end) return null;

  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (total < 1) return null;

  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
