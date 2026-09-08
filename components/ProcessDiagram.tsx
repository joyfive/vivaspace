import { process } from "@/data/company";

/**
 * How we build — IDEA → STRUCTURE → UNIT → PRODUCT.
 * 비바스페이스의 방법론을 그대로 레이아웃으로 옮긴 자리라
 * 설명은 짧게 두고 구조가 먼저 읽히게 합니다.
 */
export function ProcessDiagram() {
  const last = process.length - 1;

  return (
    <ol className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
      {process.map((stage, index) => {
        /* 단계가 진행될수록 아이디어가 제품에 가까워지는 것을 컬러 농도로 표시합니다. */
        const density = 22 + (index / last) * 78;
        const tone = `color-mix(in oklab, var(--viva) ${density}%, var(--line-strong))`;

        return (
          <li key={stage.step} className="relative">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="size-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: tone }}
              />
              <span
                aria-hidden
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(90deg, ${tone} 0%, var(--line) 100%)`,
                }}
              />
            </div>

            <p className="meta mt-5 text-faint">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.1em] text-ink">
              {stage.step}
            </h3>
            <p className="mt-1 text-sm text-muted">{stage.ko}</p>

            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
              {stage.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
