import Link from "next/link";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductGrid";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { Symbol } from "@/components/Symbol";
import { HeroConstruction } from "@/components/HeroConstruction";
import { ArrowLink } from "@/components/ArrowLink";
import { brandKeywords, company, process as buildSteps } from "@/data/company";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero.
          Structured outside, alive inside.
          배경 · 타이포 · 그리드는 정적으로, 심볼과 glow 만 살아 있습니다. */}
      <section className="relative overflow-hidden border-b border-line">
        <Container wide>
          <div className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 lg:py-24">
            <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-10">
              {/* 메시지 */}
              <div className="hero-enter">
                <p className="eyebrow">{company.name}</p>

                {/* weight 대비 자체가 Idea → Shape 의 변화를 암시합니다. */}
                <h1 className="display mt-8 text-[clamp(2.75rem,6.4vw,5.75rem)] text-ink">
                  <span className="block font-light">Where ideas</span>
                  <span className="block font-bold">take shape.</span>
                </h1>

                <p className="mt-8 text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-snug tracking-tight text-ink">
                  {company.taglineKo}
                </p>

                <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                  {company.description}
                </p>

                <div className="mt-12">
                  <HeroCta />
                </div>
              </div>

              {/* 심볼 — 컨테이너 없이 공간에 직접 떠 있는 오브젝트 */}
              <div className="relative">
                <ProcessAnnotation />

                <div className="relative mx-auto aspect-square w-[76%] max-w-[33rem] sm:w-[58%] lg:mr-0 lg:ml-[14%] lg:w-[84%] lg:translate-y-[5%]">
                  <HeroConstruction />
                  <Symbol
                    alive
                    priority
                    className="h-full w-full"
                    sizes="(min-width: 1024px) 33rem, 70vw"
                  />
                </div>
              </div>
            </div>

            <BottomUtility />
          </div>
        </Container>
      </section>

      {/* 02 — Product first. 회사 설명보다 만든 것이 먼저입니다. */}
      <section id="products" className="scroll-mt-16 border-b border-line">
        <Container wide>
          <div className="py-20 sm:py-28">
            <SectionHead
              eyebrow="Selected Products"
              title="만들어 운영하고 있는 것들"
              meta={`${services.length} products`}
            />

            <div className="mt-12">
              <ProductGrid services={services} />
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — How we build. */}
      <section id="process" className="scroll-mt-16 border-b border-line bg-surface">
        <Container wide>
          <div className="py-20 sm:py-28">
            <SectionHead
              eyebrow="How we build"
              title={company.method}
              meta={`${buildSteps.length} steps`}
            />

            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              떠오른 것을 그대로 만들지 않습니다. 구조로 정리하고, 만들 수 있는
              단위로 자른 다음에야 제품이 됩니다.
            </p>

            <div className="mt-16">
              <ProcessDiagram />
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — About. 규모를 과장하지 않습니다. */}
      <section id="about" className="scroll-mt-16 border-b border-line">
        <Container wide>
          <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <p className="eyebrow">About</p>
              <p className="display mt-7 text-[clamp(1.75rem,3.4vw,2.5rem)] text-ink">
                {company.essence}
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="text-lg leading-[1.75] text-ink">{company.about}</p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                {company.descriptionEn}
              </p>

              <dl className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {brandKeywords.map((keyword) => (
                  <div key={keyword.en} className="border-t border-line pt-5">
                    <dt className="text-[0.9375rem] font-semibold tracking-tight text-ink">
                      {keyword.en}
                      <span className="ml-2 text-sm font-normal text-faint">
                        {keyword.ko}
                      </span>
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">
                      {keyword.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* 05 — Contact. */}
      <section className="bg-surface">
        <Container wide>
          <div className="py-20 sm:py-28">
            <p className="eyebrow">Contact</p>
            <p className="display mt-7 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] text-ink">
              Contact {company.name}
            </p>
            <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              제품에 대한 문의도, 그 밖의 제안도 같은 주소로 받습니다.
            </p>
            <div className="mt-9">
              <ArrowLink href="/contact">문의 안내 보기</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Description 아래 CTA. fill 애니메이션 없이 테두리와 화살표만 반응합니다. */
function HeroCta() {
  return (
    <Link
      href="/#products"
      className="group inline-flex items-center gap-5"
    >
      <span className="flex size-14 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-[var(--viva)]">
        <span
          aria-hidden
          className="block text-base leading-none text-ink transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink transition-[letter-spacing] duration-300 group-hover:tracking-[0.22em]">
        Our Products
      </span>
    </Link>
  );
}

/** 심볼 옆의 process 주석. 콘텐츠가 아니라 그래픽이라 heading 으로 두지 않습니다. */
function ProcessAnnotation() {
  return (
    <p
      aria-hidden
      className="absolute right-0 top-0 hidden text-[0.625rem] uppercase leading-[1.9] tracking-[0.2em] text-faint/70 lg:block"
    >
      {buildSteps.map((stage) => (
        <span key={stage.step} className="block">
          {stage.step}
        </span>
      ))}
    </p>
  );
}

/** 히어로 하단 보조 그래픽 — 데스크톱에서만 노출합니다. */
function BottomUtility() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-8 hidden items-end justify-between lg:flex"
    >
      <div className="flex flex-col gap-3">
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-faint">
          Scroll
        </span>
        <span className="h-10 w-px bg-line-strong" />
        <span className="size-1 rounded-full bg-[var(--viva)]" />
      </div>

      <p className="text-right text-[0.625rem] uppercase leading-[1.9] tracking-[0.2em] text-faint">
        <span className="block">Structure ideas.</span>
        <span className="block">Make them real.</span>
      </p>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-line pb-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-4 text-[clamp(1.5rem,3vw,2.25rem)] text-ink">
          {title}
        </h2>
      </div>
      {meta && <p className="meta text-faint">{meta}</p>}
    </div>
  );
}
