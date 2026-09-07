type IconProps = { className?: string };

export function SpotifyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M7 10.2c3-0.8 6.7-0.5 9.5 1.1M7.6 13.1c2.5-0.6 5.5-0.4 7.8 0.9M8.2 15.8c2-0.5 4.4-0.3 6.2 0.7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LastFmIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 15.5V9.8c0-0.4 0.4-0.6 0.7-0.3l2 3.2 2-3.2c0.3-0.3 0.7-0.1 0.7 0.3v5.7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AotyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 15V9l4 6 4-6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
