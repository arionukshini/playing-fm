import type { Track } from '../types/music';
import { relativeTime } from '../utils/time';

interface RecentTrackRowProps {
  track: Track;
}

export function RecentTrackRow({ track }: RecentTrackRowProps) {
  return (
    <li className="flex items-center gap-3 py-2.5">
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-ink">
        {track.artworkUrl ? (
          <img src={track.artworkUrl} alt="" className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-sm text-paper">{track.name}</p>
        <p className="truncate font-mono text-xs text-mist/70">{track.artist}</p>
      </div>
      {track.playedAt && (
        <span className="shrink-0 font-mono text-[11px] text-mist/50">
          {relativeTime(track.playedAt)}
        </span>
      )}
    </li>
  );
}
