import type { Profile } from '../config/profile';
import { SpotifyIcon, LastFmIcon, AotyIcon } from './icons';

interface ProfileLinksProps {
  links: Profile['links'];
}

const LINK_META = [
  { key: 'spotify', label: 'Spotify', Icon: SpotifyIcon },
  { key: 'lastfm', label: 'Last.fm', Icon: LastFmIcon },
  { key: 'aoty', label: 'Album of the Year', Icon: AotyIcon },
] as const;

export function ProfileLinks({ links }: ProfileLinksProps) {
  const active = LINK_META.filter((meta) => links[meta.key]);
  if (active.length === 0) return null;

  return (
    <nav className="mt-14 flex items-center gap-6" aria-label="Profile links">
      {active.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={links[key]}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-mist/50 transition-colors hover:text-paper"
        >
          <Icon className="h-4 w-4" />
          <span className="font-mono text-[11px] tracking-wide">{label}</span>
        </a>
      ))}
    </nav>
  );
}
