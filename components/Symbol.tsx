import Image from "next/image";

type Props = {
  /** 크기는 이 클래스에서 결정합니다 (예: "size-6", "h-full w-full"). */
  className?: string;
  /** 화면에서 유일하게 살아 움직이는 요소로 쓸 때만 true. 히어로 한 곳 전용입니다. */
  alive?: boolean;
  priority?: boolean;
  sizes?: string;
};

/**
 * 비바스페이스 심볼.
 * 이름은 항상 워드마크가 읽어주므로 심볼 자체는 장식으로 취급합니다.
 */
export function Symbol({
  className = "",
  alive = false,
  priority = false,
  sizes = "64px",
}: Props) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src="/symbol.webp"
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${alive ? "symbol-alive" : ""}`}
      />
    </span>
  );
}

/**
 * 심볼에서 번져 나오는 빛.
 * 심볼 정사각형을 감싸는 형제 요소로 두고, construction line 보다 먼저
 * 그려서 선이 빛 위에 또렷하게 남도록 합니다.
 *
 * 도달 범위는 심볼 반지름의 약 3배입니다. 경계가 드러나면 안 되므로
 * 그라디언트는 상자 끝(100%)에서 완전히 투명해집니다.
 */
export function SymbolGlow() {
  return (
    <span
      aria-hidden
      className="symbol-glow pointer-events-none absolute -inset-[75%]"
    />
  );
}
