import { useEffect, useRef, useState } from 'react';
import type { MusicProvider, NowPlayingState } from '../types/music';

/**
 * Polls a MusicProvider on an interval and exposes the latest state.
 * - Pauses polling while the tab is hidden (no wasted requests).
 * - Refetches immediately when the tab becomes visible again.
 * - Ignores overlapping/late responses from a previous in-flight request.
 */
export function useNowPlaying(provider: MusicProvider, intervalMs: number): NowPlayingState {
  const [state, setState] = useState<NowPlayingState>({
    status: 'loading',
    current: null,
    recent: [],
  });

  const requestIdRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const fetchOnce = async () => {
      const thisRequestId = ++requestIdRef.current;
      try {
        const next = await provider.getNowPlaying();
        if (cancelled || thisRequestId !== requestIdRef.current) return;
        setState(next);
      } catch {
        if (cancelled || thisRequestId !== requestIdRef.current) return;
        setState((prev) => ({ ...prev, status: 'error', error: 'unknown' }));
      }
    };

    const scheduleNext = () => {
      timer = setTimeout(async () => {
        if (document.visibilityState === 'visible') {
          await fetchOnce();
        }
        scheduleNext();
      }, intervalMs);
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchOnce();
      }
    };

    fetchOnce();
    scheduleNext();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, intervalMs]);

  return state;
}
