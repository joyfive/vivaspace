export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-semibold tracking-[0.18em] uppercase ${className}`}
      aria-label="VIVASPACE"
    >
      Vivaspace
    </span>
  );
}
