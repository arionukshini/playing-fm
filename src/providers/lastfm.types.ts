/** Raw shapes returned by Last.fm's user.getRecentTracks. Intentionally loose/partial. */

export interface LastFmImage {
  size: 'small' | 'medium' | 'large' | 'extralarge';
  '#text': string;
}

export interface LastFmTrackAttr {
  nowplaying?: 'true' | 'false';
}

export interface LastFmDate {
  uts: string;
  '#text': string;
}

export interface LastFmTrack {
  name: string;
  mbid?: string;
  url?: string;
  artist: { mbid?: string; '#text': string };
  album?: { mbid?: string; '#text': string };
  image?: LastFmImage[];
  date?: LastFmDate;
  '@attr'?: LastFmTrackAttr;
}

export interface LastFmRecentTracksResponse {
  recenttracks?: {
    track: LastFmTrack[];
    '@attr'?: Record<string, string>;
  };
  error?: number;
  message?: string;
}
