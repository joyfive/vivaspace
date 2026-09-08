import Image from "next/image";

/**
 * Kitfolio 카드 비주얼.
 *
 * 실사 사진 대신 실제 제품 화면 세 장을 겹쳐 씁니다. 각 레이어는 제품 구조를
 * 하나씩 맡습니다.
 *
 *   Flex Work Calculator — 대표 기능. 입력 → 결과라는 구조가 보이면 충분합니다.
 *   CSS Unit Converter   — 하나가 아니라 여러 개의 도구라는 사실.
 *   Kitfolio Home        — 도구를 찾아 들어가는 허브.
 *
 * 화면은 코드로 다시 그리지 않습니다. kitfolio.app 을 그대로 캡처한 것이라
 * 제품이 바뀌면 이미지만 다시 찍으면 됩니다.
 *
 * 배경은 흰색입니다. 캡처 자체가 Kitfolio 의 lavender-blue 배경을 물고 있어서,
 * 뒤를 같은 색으로 깔면 화면 경계가 사라집니다. 흰 바닥이어야 제품 배경색이
 * 제품의 것으로 읽힙니다. hover 에서는 카드 본문과 같이 핑크로 옅게 물듭니다
 * (--product-canvas 계열 — 다크에서도 밝게 유지합니다).
 *
 * 좌표는 모두 컨테이너 기준 백분율이고 비율도 이 컴포넌트가 직접 들고
 * 있습니다. 겹침이 비율에 민감하기 때문에, 놓는 쪽에서 높이를 정하면
 * 세 장이 한꺼번에 잘립니다. 카드와 상세 페이지는 폭만 주면 됩니다.
 *
 * 보조 레이어는 메인의 핵심 숫자(하루 평균 · 부족 시간 · 이번 달 목표)를
 * 가리지 않는 높이에서만 겹칩니다.
 */
export function KitfolioVisual() {
  return (
    <div className="relative isolate aspect-[16/10] w-full overflow-hidden bg-[var(--product-canvas)] transition-colors duration-200 group-hover:bg-[var(--product-canvas-hover)] sm:aspect-[16/9] lg:aspect-[16/8]">
      {/* 01 — 대표 기능. 실제 앱 화면이라 회전·perspective 를 주지 않습니다. */}
      <Shot
        src="/images/products/kitfolio/kitfolio-flex-work.webp"
        alt="Kitfolio Flex Work Calculator interface"
        width={1400}
        height={788}
        sizes="(min-width: 640px) 40rem, 88vw"
        priority
        className="left-[6%] top-[8%] w-[88%] rounded-[14px] group-hover:-translate-y-0.5 sm:left-[15%] sm:top-[9%] sm:w-[76%] sm:rounded-[16px]"
      />

      {/* 02 — 허브. 가장 뒤에서 받쳐 주는 layer 라 대비를 조금 낮춥니다.
              좁은 화면에서는 과밀해지므로 내립니다. */}
      <Shot
        src="/images/products/kitfolio/kitfolio-discovery.webp"
        alt=""
        width={700}
        height={457}
        sizes="14rem"
        className="bottom-[7%] left-[3%] z-10 hidden w-[27%] rounded-[10px] opacity-95 group-hover:-translate-y-[3px] sm:block sm:rounded-[12px]"
      />

      {/* 03 — 앞으로 나온 작은 기능 패널. 세 장 중 가장 위입니다. */}
      <Shot
        src="/images/products/kitfolio/kitfolio-unit-converter.webp"
        alt="Kitfolio CSS Unit Converter interface"
        width={760}
        height={570}
        sizes="(min-width: 640px) 16rem, 42vw"
        className="bottom-[4%] right-[3%] z-20 w-[42%] rotate-[0.6deg] rounded-[10px] group-hover:-translate-y-[5px] sm:w-[28%] sm:rounded-[12px]"
      />
    </div>
  );
}

/**
 * 세 장에 같은 treatment 를 씁니다. MacBook mockup 이 아니라 "화면이 살짝 떠
 * 있다" 정도만 표현합니다.
 */
function Shot({
  className,
  ...props
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className: string;
}) {
  return (
    <Image
      {...props}
      className={`absolute h-auto border border-[rgba(20,30,60,0.08)] bg-white transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        boxShadow:
          "0 10px 30px rgba(20, 30, 60, 0.06), 0 2px 8px rgba(20, 30, 60, 0.04)",
      }}
    />
  );
}
