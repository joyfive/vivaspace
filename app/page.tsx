import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductGrid";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { Symbol } from "@/components/Symbol";
import { ArrowLink } from "@/components/ArrowLink";
import { brandKeywords, company, process as buildSteps } from "@/data/company";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero. 화면에서 움직이는 것은 심볼 하나뿐입니다. */}
      <section className="border-b border-line">
        <Container wide>
          <div className="grid items-center gap-16 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-36">
            <div className="lg:col-span-7">
              <p className="eyebrow">{company.name}</p>

              <h1 className="display mt-7 text-[clamp(2.5rem,8vw,4.75rem)] text-ink">
                {company.tagline}
              </h1>

              <p className="mt-7 text-xl leading-snug tracking-tight text-ink sm:text-2xl">
                {company.taglineKo}
              </p>

              <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {company.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <Symbol
                alive
                priority
                className="mx-auto aspect-square w-[62%] max-w-[26rem] sm:w-[46%] lg:w-full"
                sizes="(min-width: 1024px) 26rem, 60vw"
              />
            </div>
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
