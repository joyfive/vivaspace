import type { ReactNode } from "react";

/**
 * Structure first — 모든 섹션은 같은 좌우 기준선 위에 놓입니다.
 * wide 는 히어로·모듈형 그리드처럼 화면을 넓게 쓰는 섹션 전용입니다.
 */
export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  const width = wide ? "max-w-[84rem]" : "max-w-[68rem]";
  return (
    <div className={`mx-auto w-full ${width} px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
