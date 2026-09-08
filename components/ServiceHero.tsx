import Image from "next/image";
import type { Service } from "@/data/services";
import { getProductVisual } from "./products";

/**
 * 제품 비주얼이 등록돼 있으면 홈 카드와 같은 화면을 씁니다.
 * 없으면 대표 이미지, 그것도 없으면 제품 포인트 컬러 필드로 대체합니다.
 * 스크린샷을 추가하려면 public/ 에 파일을 넣고
 * data/services.ts 의 image 필드를 채우세요.
 */
export function ServiceHero({ service }: { service: Service }) {
  const Visual = getProductVisual(service.slug);

  if (Visual) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line">
        <Visual />
      </div>
    );
  }

  if (service.image) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          width={service.image.width}
          height={service.image.height}
          priority
          sizes="(min-width: 1024px) 68rem, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl border border-line sm:aspect-[21/9]"
      style={{
        background:
          "linear-gradient(150deg, color-mix(in oklab, var(--product-accent) 20%, var(--bg)) 0%, var(--surface) 72%)",
      }}
    >
      <span
        className="text-[clamp(1.5rem,5vw,3rem)] font-semibold uppercase tracking-[0.24em]"
        style={{
          color: "color-mix(in oklab, var(--product-accent) 72%, var(--bg))",
        }}
      >
        {service.wordmark}
      </span>
    </div>
  );
}
