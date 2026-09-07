import { Equalizer } from './Equalizer';

interface StatusReadoutProps {
  isLive: boolean;
  relativeTime?: string;
}

export function StatusReadout({ isLive, relativeTime }: StatusReadoutProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] text-mist">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isLive ? 'bg-pulse animate-pulse-dot' : 'bg-mist/60'
          }`}
          aria-hidden="true"
        />
        <span className={isLive ? 'text-pulse' : undefined}>
          {isLive ? 'NOW PLAYING' : 'LAST LISTENED'}
        </span>
        {isLive && <Equalizer />}
      </div>
      {!isLive && relativeTime && (
        <span className="pl-[22px] font-mono text-[11px] text-mist/60">{relativeTime}</span>
      )}
    </div>
  );
}
