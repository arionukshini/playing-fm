interface StateFallbackProps {
  kind: 'loading' | 'error' | 'empty' | 'unconfigured';
}

const COPY: Record<StateFallbackProps['kind'], { title: string; body: string }> = {
  loading: {
    title: 'Tuning in',
    body: 'Fetching what\u2019s playing.',
  },
  error: {
    title: 'Signal lost',
    body: 'Couldn\u2019t reach Last.fm right now. This will retry automatically.',
  },
  empty: {
    title: 'Nothing played yet',
    body: 'Once a track is scrobbled, it\u2019ll show up here.',
  },
  unconfigured: {
    title: 'Not connected yet',
    body: 'Add a Last.fm username and API key in your environment to bring this page to life.',
  },
};

export function StateFallback({ kind }: StateFallbackProps) {
  const { title, body } = COPY[kind];
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="h-1.5 w-1.5 rounded-full bg-mist/40" aria-hidden="true" />
      <h1 className="font-display text-2xl text-paper">{title}</h1>
      <p className="max-w-xs font-mono text-xs text-mist/60">{body}</p>
    </div>
  );
}
