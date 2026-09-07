interface TrackInfoProps {
  name: string;
  artist: string;
  album?: string;
}

export function TrackInfo({ name, artist, album }: TrackInfoProps) {
  return (
    <div className="max-w-md">
      <h1 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl">
        {name}
      </h1>
      <p className="mt-2 font-mono text-sm text-mist">{artist}</p>
      {album && <p className="mt-0.5 font-mono text-xs text-mist/50">{album}</p>}
    </div>
  );
}
