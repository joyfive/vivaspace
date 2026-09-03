import Image from "next/image";
import type { Service } from "@/data/services";

/**
 * 대표 이미지가 없는 서비스는 포인트 컬러 패널로 대체합니다.
 * 스크린샷을 추가하려면 public/services/<slug>.png 를 넣고
 * data/services.ts 의 image 필드를 채우세요.
 */
export function ServiceHero({ service }: { service: Service }) {
  if (service.image) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          width={service.image.width}
          height={service.image.height}
          priority
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
        className="text-[clamp(1.75rem,6vw,3.25rem)] font-semibold uppercase tracking-[0.22em]"
        style={{
          color: "color-mix(in oklab, var(--product-accent) 72%, var(--bg))",
        }}
      >
        {service.wordmark}
      </span>
    </div>
  );
}
