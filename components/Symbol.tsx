import Image from "next/image";

type Props = {
  /** 크기는 이 클래스에서 결정합니다 (예: "size-6", "w-full aspect-square"). */
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
      {alive && (
        <span
          aria-hidden
          className="symbol-glow pointer-events-none absolute -inset-[35%] rounded-full"
        />
      )}
      <Image
        src="/symbol.webp"
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        priority={priority}
        className={`relative object-contain ${alive ? "symbol-alive" : ""}`}
      />
    </span>
  );
}
