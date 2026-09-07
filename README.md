# playing.fm

A personal "now playing" status page. Shows what you're listening to right
now (or the last thing you played), backed by Last.fm, with a background
that shifts atmosphere based on the album artwork.

_Your music, right now._

## Setup

```bash
npm install
cp .env.example .env
```

Fill in `.env`:

- `VITE_LASTFM_API_KEY` — from https://www.last.fm/api/account/create
- `VITE_LASTFM_USERNAME` — the Last.fm account to display
- `VITE_DISPLAY_NAME`, `VITE_SPOTIFY_URL`, `VITE_AOTY_URL` — optional profile info

```bash
npm run dev
```

Build for production with `npm run build`; output lands in `dist/`.

## Architecture

Data fetching is fully separated from the UI behind a provider interface
(`src/types/music.ts#MusicProvider`). Version 1 ships one implementation:

```
MusicProvider (interface)
└── LastFmProvider   — src/providers/LastFmProvider.ts
```

`useNowPlaying` (a hook) polls whatever provider it's given and exposes a
normalized `NowPlayingState`. Every component downstream (`AlbumArt`,
`TrackInfo`, `RecentlyPlayed`, ...) only ever sees the normalized `Track`
shape — nothing in `src/components` knows Last.fm exists.

This means a future `SpotifyProvider` (or a provider that merges both, using
Spotify for exact playback progress and Last.fm as the scrobble history) can
be dropped in without touching any UI code — just implement `MusicProvider`
and swap what `App.tsx` constructs.

`src/config/profile.ts` holds the single-profile config for V1. It's shaped
so that a future multi-user version can replace the static object with a
fetch keyed by an `/@username` route param without changing its consumers:

```ts
{
  displayName,
  lastfmUsername,
  links: { spotify, lastfm, aoty }
}
```

## Notable behavior

- Polls every `VITE_POLL_INTERVAL_MS` (default 15s), pauses while the tab is
  hidden, and refetches immediately when it becomes visible again.
- Ambient background color is sampled live from the current album artwork
  (`src/utils/ambientColor.ts`) — best-effort, and falls back to a neutral
  glow if the image can't be read (e.g. blocked by CORS).
- Missing artwork, API failures, and an unconfigured `.env` each get their
  own tasteful fallback state instead of a blank screen or console error.
- No playback progress bar — Last.fm doesn't report elapsed time, and this
  intentionally doesn't fake one. That's the kind of thing a future
  Spotify-backed provider could add.

## Notes for a future multi-user platform

- The Last.fm API key is currently read client-side via Vite env vars,
  which is fine for a single self-hosted profile. A multi-tenant version
  should move the fetch behind a small server route so each user isn't
  exposing (or sharing) the same key.
- Routing is intentionally absent in V1 — there's exactly one profile.
  Adding `/@username` is mostly a matter of resolving `profile` from a
  route param instead of `import.meta.env`.
