/** Formats a past timestamp as "5 minutes ago", "2 hours ago", etc. */
export function relativeTime(fromMs: number, nowMs: number = Date.now()): string {
  const diffSec = Math.max(0, Math.floor((nowMs - fromMs) / 1000));

  if (diffSec < 60) return 'just now';

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} minute${diffMin === 1 ? '' : 's'} ago`;

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return `${diffHour} hour${diffHour === 1 ? '' : 's'} ago`;

  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 7) return `${diffDay} day${diffDay === 1 ? '' : 's'} ago`;

  const diffWeek = Math.floor(diffDay / 7);
  return `${diffWeek} week${diffWeek === 1 ? '' : 's'} ago`;
}
