/**
 * Provider-agnostic shape for a single track.
 * Any future provider (Spotify, etc.) must normalize its data into this shape.
 */
export interface Track {
  id: string;
  name: string;
  artist: string;
  album?: string;
  artworkUrl?: string;
  /** Unix ms timestamp of when this track was scrobbled/played. Undefined for the currently-playing track. */
  playedAt?: number;
  /** True if this is the track actively playing right now. */
  isNowPlaying: boolean;
  /** Optional deep link back to the source (e.g. Last.fm track page). */
  url?: string;
}

export interface NowPlayingState {
  status: 'loading' | 'ready' | 'error';
  /** The current or most recently played track, if any. */
  current: Track | null;
  /** Tracks played before `current`, most recent first. */
  recent: Track[];
  error?: string;
}

/**
 * The contract every music data source must implement.
 * V1 ships LastFmProvider only; SpotifyProvider (and others) can be
 * added later without touching any UI code.
 */
export interface MusicProvider {
  /** Fetch the latest listening state: current/last track + recent history. */
  getNowPlaying(): Promise<NowPlayingState>;
}
