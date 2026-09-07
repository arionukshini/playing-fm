interface AlbumArtProps {
  src?: string;
  alt: string;
}

export function AlbumArt({ src, alt }: AlbumArtProps) {
  return (
    <div
      key={src ?? 'fallback'}
      className="relative aspect-square w-56 shrink-0 overflow-hidden rounded-sm bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] animate-art-in sm:w-64 md:w-72"
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-mist/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>
      )}
    </div>
  );
}
