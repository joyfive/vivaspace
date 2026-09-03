import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service } from "@/data/services";
import { platformLabel, statusLabel } from "@/data/services";
import { StatusBadge } from "./StatusBadge";

export function ProductRow({ service }: { service: Service }) {
  return (
    <li
      data-product
      className="border-t border-line last:border-b"
      style={
        {
          "--pa-light": service.accent.light,
          "--pa-dark": service.accent.dark,
        } as CSSProperties
      }
    >
      <Link
        href={`/services/${service.slug}`}
        className="group -mx-4 flex flex-col gap-4 px-4 py-9 transition-colors duration-200 hover:bg-surface sm:flex-row sm:items-baseline sm:gap-10 sm:py-11"
      >
        <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
          <span
            aria-hidden
            className="size-2 shrink-0 rounded-full"
            style={{ backgroundColor: "var(--product-accent)" }}
          />
          <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-[1.375rem]">
            {service.name}
          </h3>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {service.summary}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <StatusBadge status={service.status} />
            <span className="text-xs text-faint">
              {service.platforms.map((p) => platformLabel[p]).join(" · ")}
            </span>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent sm:self-center">
          <span className="border-b border-transparent transition-colors duration-200 group-hover:border-current">
            자세히 보기
          </span>
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
          <span className="sr-only">
            {service.name} — {statusLabel[service.status]}
          </span>
        </span>
      </Link>
    </li>
  );
}
