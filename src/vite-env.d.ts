/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LASTFM_API_KEY: string;
  readonly VITE_LASTFM_USERNAME: string;
  readonly VITE_DISPLAY_NAME: string;
  readonly VITE_SPOTIFY_URL: string;
  readonly VITE_AOTY_URL: string;
  readonly VITE_POLL_INTERVAL_MS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
