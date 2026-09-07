import { useMemo } from 'react';
import { LastFmProvider } from './providers/LastFmProvider';
import { useNowPlaying } from './hooks/useNowPlaying';
import { profile, POLL_INTERVAL_MS } from './config/profile';
import { relativeTime } from './utils/time';
import { Background } from './components/Background';
import { StatusReadout } from './components/StatusReadout';
import { AlbumArt } from './components/AlbumArt';
import { TrackInfo } from './components/TrackInfo';
import { RecentlyPlayed } from './components/RecentlyPlayed';
import { ProfileLinks } from './components/ProfileLinks';
import { StateFallback } from './components/StateFallback';

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY || '';

export default function App() {
  const provider = useMemo(
    () => new LastFmProvider(profile.lastfmUsername, API_KEY),
    [],
  );
  const { status, current, recent, error } = useNowPlaying(provider, POLL_INTERVAL_MS);

  const showUnconfigured = error === 'missing-config';
  const showLoading = status === 'loading' && !current;
  const showError = status === 'error' && !current && !showUnconfigured;
  const showEmpty = status === 'ready' && !current;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center px-6">
      <Background artworkUrl={current?.artworkUrl} />

      <main className="flex w-full flex-1 flex-col items-center justify-center py-24">
        {showUnconfigured && <StateFallback kind="unconfigured" />}
        {showLoading && <StateFallback kind="loading" />}
        {showError && <StateFallback kind="error" />}
        {showEmpty && <StateFallback kind="empty" />}

        {current && (
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <StatusReadout
              isLive={current.isNowPlaying}
              relativeTime={current.playedAt ? relativeTime(current.playedAt) : undefined}
            />
            <div className="mt-6">
              <AlbumArt src={current.artworkUrl} alt={`${current.name} by ${current.artist}`} />
            </div>
            <div className="mt-7">
              <TrackInfo name={current.name} artist={current.artist} album={current.album} />
            </div>

            <RecentlyPlayed tracks={recent} />
            <ProfileLinks links={profile.links} />
          </div>
        )}
      </main>

      <footer className="flex flex-col items-center gap-1 pb-8 text-center font-mono text-[10px] tracking-[0.15em] text-mist/30">
        <span>{profile.displayName.toUpperCase()}</span>
        <span>YOUR MUSIC, RIGHT NOW</span>
      </footer>
    </div>
  );
}
