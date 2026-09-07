import { useState } from 'react';
import type { Track } from '../types/music';
import { RecentTrackRow } from './RecentTrackRow';
import { RECENT_PREVIEW_COUNT } from '../config/profile';

interface RecentlyPlayedProps {
  tracks: Track[];
}

export function RecentlyPlayed({ tracks }: RecentlyPlayedProps) {
  const [expanded, setExpanded] = useState(false);

  if (tracks.length === 0) return null;

  const visible = expanded ? tracks : tracks.slice(0, RECENT_PREVIEW_COUNT);
  const hasMore = tracks.length > RECENT_PREVIEW_COUNT;

  return (
    <section className="mt-12 w-full max-w-md">
      <h2 className="font-mono text-xs tracking-[0.2em] text-mist/70">RECENTLY PLAYED</h2>
      <ul className="mt-3 divide-y divide-thread">
        {visible.map((track) => (
          <RecentTrackRow key={track.id} track={track} />
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 font-mono text-xs text-mist/60 underline-offset-4 transition-colors hover:text-paper hover:underline"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  );
}
