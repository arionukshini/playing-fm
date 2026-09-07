export function Equalizer() {
  return (
    <span
      className="inline-flex h-3 items-end gap-[3px]"
      role="img"
      aria-label="Playing live"
    >
      <span className="w-[3px] bg-pulse animate-eq1" />
      <span className="w-[3px] bg-pulse animate-eq2" />
      <span className="w-[3px] bg-pulse animate-eq3" />
    </span>
  );
}
