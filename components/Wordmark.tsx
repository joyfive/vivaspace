import { Symbol } from "./Symbol";

/**
 * 심볼 + 워드마크 lockup.
 * 타이포는 철저히 중립적으로 두고, 개성은 심볼이 담당합니다.
 */
export function Wordmark({
  className = "",
  symbolClassName = "size-[1.35em]",
  withSymbol = true,
}: {
  className?: string;
  symbolClassName?: string;
  withSymbol?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {withSymbol && <Symbol className={symbolClassName} sizes="48px" />}
      <span
        className="font-semibold uppercase tracking-[0.2em]"
        aria-label="VIVASPACE"
      >
        Vivaspace
      </span>
    </span>
  );
}
