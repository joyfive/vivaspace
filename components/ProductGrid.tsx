import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service } from "@/data/services";
import { platformsText } from "@/data/services";
import { getProductVisual } from "./products";
import { StatusBadge } from "./StatusBadge";

/**
 * Modular layout — 단순 카드 리스트가 아니라 크기가 다른 모듈로 짭니다.
 * 레이아웃 자체가 "구조화한다"는 성격을 보여주는 자리입니다.
 *
 * 서비스가 늘어나도 손댈 곳은 없습니다. 출시된 제품이 앞에, 큰 모듈로 놓이고
 * 나머지는 dense flow 가 빈칸을 메웁니다.
 */

const statusRank = { live: 0, beta: 1, preparing: 2 } as const;

function isFeatured(service: Service) {
  return (
    service.status === "live" ||
    Boolean(service.image) ||
    Boolean(getProductVisual(service.slug))
  );
}

export function ProductGrid({ services }: { services: Service[] }) {
  const ordered = [...services].sort(
    (a, b) => statusRank[a.status] - statusRank[b.status],
  );

  return (
    <ul className="grid grid-flow-dense gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
      {ordered.map((service) => (
        <ProductTile key={service.slug} service={service} />
      ))}
      <NextTile />
    </ul>
  );
}

function ProductTile({ service }: { service: Service }) {
  const featured = isFeatured(service);

  return (
    <li
      data-product
      className={`bg-bg ${featured ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"}`}
      style={
        {
          "--pa-light": service.accent.light,
          "--pa-dark": service.accent.dark,
        } as CSSProperties
      }
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col transition-[background-color,box-shadow] duration-200 hover:bg-surface hover:shadow-[inset_0_0_0_1px_var(--line-strong)]"
      >
        <AccentRule />
        {featured && <FeaturedVisual service={service} />}

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <span
            className="meta uppercase"
            style={{ color: "var(--product-accent)" }}
          >
            {service.wordmark}
          </span>

          <h3
            className={`mt-3 font-semibold tracking-tight text-ink ${
              featured ? "text-2xl sm:text-[1.75rem]" : "text-xl"
            }`}
          >
            {service.name}
          </h3>

          <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
            {service.summary}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8">
            <StatusBadge status={service.status} />
            <span className="meta text-faint">
              {platformsText(service)}
            </span>
            <span
              aria-hidden
              className="ml-auto text-sm text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-ink"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

/**
 * 제품 비주얼 → 대표 이미지 → 제품 컬러 필드 순으로 씁니다.
 * 비주얼은 자기 비율을 직접 들고 있어서 폭만 넘겨받습니다.
 */
function FeaturedVisual({ service }: { service: Service }) {
  const Visual = getProductVisual(service.slug);

  if (Visual) return <Visual />;

  if (service.image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-surface lg:aspect-[3/1]">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 56rem, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="aspect-[16/9] lg:aspect-[3/1]"
      style={{
        background:
          "linear-gradient(140deg, color-mix(in oklab, var(--product-accent) 22%, var(--bg)) 0%, var(--surface) 76%)",
      }}
    />
  );
}

/** 제품 컬러가 드러나는 유일한 자리입니다. hover 에서만 조금 진해집니다. */
function AccentRule() {
  return (
    <div
      aria-hidden
      className="h-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "linear-gradient(90deg, var(--product-accent) 0%, color-mix(in oklab, var(--product-accent) 12%, var(--bg)) 100%)",
      }}
    />
  );
}

/** 다음 제품 자리 — 스튜디오가 멈춰 있지 않다는 표시입니다. */
function NextTile() {
  return (
    <li className="bg-bg lg:col-span-2">
      <div aria-hidden className="h-1 bg-line" />
      <div className="flex h-full flex-col p-7 sm:p-8">
        <span className="meta uppercase text-faint">Next</span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-faint">
          다음 제품
        </h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-faint">
          지금 구조를 잡고 있습니다. 형태가 갖춰지면 이 자리에 올라옵니다.
        </p>
      </div>
    </li>
  );
}
