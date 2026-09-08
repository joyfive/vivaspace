/**
 * Structure → Form.
 * 아이디어가 구조를 따라 흐르다 심볼이라는 형태로 수렴하는 모습을 그립니다.
 *
 * 이 레이어는 어디까지나 심볼을 보조하는 annotation 입니다.
 * 전부 지워도 히어로 레이아웃은 그대로 성립해야 합니다.
 *
 * 좌표계는 심볼 정사각형을 감싸는 박스 기준입니다. 심볼 중심이 viewBox 중심
 * (600, 475)에 오고, 반지름 약 250 의 원이 심볼 자리입니다. 선은 그 뒤를
 * 지나므로 심볼에 가려 자연스럽게 사라집니다.
 */

type Line = {
  d: string;
  /** 브랜드 컬러는 심볼 가까이 수렴하는 선에만 씁니다. */
  brand?: boolean;
  opacity: number;
  delay: number;
  /** 모바일에서는 선을 2개로 줄입니다. */
  compact?: boolean;
};

const lines: Line[] = [
  {
    d: "M -150 300 C 60 230 230 280 330 330 C 450 390 540 430 620 500",
    brand: true,
    opacity: 0.22,
    delay: 0.15,
    compact: true,
  },
  {
    d: "M 1290 -40 C 1150 130 1010 260 895 340 C 800 405 700 425 620 420",
    brand: true,
    opacity: 0.18,
    delay: 0.3,
    compact: true,
  },
  {
    d: "M -140 760 C 220 720 620 830 930 660 C 1040 600 1150 560 1290 520",
    opacity: 0.1,
    delay: 0.45,
  },
  {
    d: "M 430 -60 C 500 200 620 340 830 470 C 990 570 1080 760 1120 1010",
    opacity: 0.08,
    delay: 0.55,
  },
  { d: "M 60 940 L 1290 210", opacity: 0.055, delay: 0.65 },
];

type Node = {
  cx: number;
  cy: number;
  r: number;
  brand?: boolean;
  delay: number;
  compact?: boolean;
};

const nodes: Node[] = [
  { cx: 330, cy: 330, r: 5, brand: true, delay: 1.5, compact: true },
  { cx: 895, cy: 340, r: 5.5, brand: true, delay: 1.7, compact: true },
  { cx: 930, cy: 660, r: 4.5, delay: 1.9 },
];

export function HeroConstruction() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-[70%] -inset-y-[45%]"
    >
      <svg
        viewBox="0 0 1200 950"
        fill="none"
        className="h-full w-full overflow-visible"
      >
        {lines.map((line) => (
          <path
            key={line.d}
            d={line.d}
            pathLength={1}
            stroke={line.brand ? "var(--viva)" : "var(--ink)"}
            strokeOpacity={line.opacity}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className={`line-draw ${line.compact ? "" : "hidden lg:block"}`}
            style={{ animationDelay: `${line.delay}s` }}
          />
        ))}

        {nodes.map((node) => (
          <circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.brand ? "var(--viva)" : "var(--line-strong)"}
            className={`node-in ${node.compact ? "" : "hidden lg:block"}`}
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
