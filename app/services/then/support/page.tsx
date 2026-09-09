import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { Container } from "@/components/Container";
import { ProseBlocks } from "@/components/ProseBlocks";
import { company } from "@/data/company";
import { plainText } from "@/data/prose";
import { shareImage } from "@/lib/seo";
import { THEN_SUPPORT_EMAIL, thenSupport } from "@/data/support/then-support";

const PATH = "/services/then/support";
const PRIVACY_PATH = "/services/then/privacy";

const DESCRIPTION =
  "Then 사용 중 도움이 필요할 때 보는 고객지원 페이지입니다. 문의 이메일과 자주 묻는 질문을 안내합니다.";

export const metadata: Metadata = {
  title: thenSupport.title,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: `${company.siteUrl}${PATH}`,
    title: thenSupport.title,
    description: DESCRIPTION,
    locale: "ko_KR",
    images: [shareImage],
  },
};

/**
 * 검색 결과에 질문·답변이 그대로 노출되도록 FAQPage 로 표시합니다.
 * 답변은 백틱과 블록 구분을 걷어낸 평문이어야 합니다.
 */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: thenSupport.title,
  url: `${company.siteUrl}${PATH}`,
  mainEntity: thenSupport.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: plainText(faq.blocks) },
  })),
};

export default function ThenSupportPage() {
  return (
    <>
      <Container wide>
        <header className="border-b border-line pb-10 pt-16 sm:pt-24">
          <nav aria-label="이동 경로" className="mb-12">
            <Link
              href="/services/then"
              className="group meta inline-flex items-center gap-2 text-faint transition-colors hover:text-ink"
            >
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                ←
              </span>
              Then
            </Link>
          </nav>

          <p className="eyebrow">Support</p>
          <h1 className="display mt-6 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] text-ink">
            {thenSupport.title}
          </h1>
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {thenSupport.intro}
          </p>
        </header>
      </Container>

      <Container wide>
        <div className="pb-24 pt-14 sm:pb-32">
          {/* 문의 — 스토어 심사자와 사용자가 가장 먼저 찾는 값이라 맨 위에 둡니다. */}
          <section aria-labelledby="support-contact">
            <h2 id="support-contact" className="eyebrow">
              Contact
            </h2>
            <a
              href={`mailto:${THEN_SUPPORT_EMAIL}`}
              className="group mt-5 inline-flex flex-wrap items-baseline gap-x-4 gap-y-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              <span className="border-b-2 border-line-strong pb-1 transition-colors duration-200 group-hover:border-accent">
                {THEN_SUPPORT_EMAIL}
              </span>
              <span
                aria-hidden
                className="text-lg text-accent transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
              {thenSupport.identity.map((row) => (
                <div key={row.label}>
                  <dt className="meta text-faint">{row.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 자주 묻는 질문 */}
          <SupportSection eyebrow="FAQ" title="자주 묻는 질문">
            <ol className="divide-y divide-line">
              {thenSupport.faqs.map((faq, index) => (
                <li
                  key={faq.question}
                  className="grid gap-x-4 gap-y-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_1fr]"
                >
                  <span aria-hidden className="meta pt-1 text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-ink">
                      {faq.question}
                    </h3>
                    <div className="legal-prose mt-3">
                      <ProseBlocks
                        blocks={faq.blocks}
                        email={THEN_SUPPORT_EMAIL}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </SupportSection>

          {/* 문의 전 확인 */}
          <SupportSection eyebrow="Checklist" title="문의할 때 알려주면 좋은 정보">
            <div className="legal-prose">
              <p>{thenSupport.checklist.intro}</p>
              <ul>
                {thenSupport.checklist.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SupportSection>

          {/* 개인정보처리방침 */}
          <SupportSection eyebrow="Privacy" title="개인정보처리방침">
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              Then이 기기 안에 무엇을 저장하고 무엇을 전송하지 않는지는
              개인정보처리방침에 정리되어 있습니다.
            </p>
            <div className="mt-5">
              <ArrowLink href={PRIVACY_PATH}>
                Then 개인정보처리방침
              </ArrowLink>
              <p className="mt-3 text-sm leading-relaxed text-faint">
                국문 · 영문으로 제공합니다.
              </p>
            </div>
          </SupportSection>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

/**
 * 좌측 라벨 · 우측 본문. 사이트의 다른 섹션과 같은 12칼럼 기준선 위에 놓입니다.
 * 라틴 라벨이 제목이고, 국문은 그 아래에 붙는 설명입니다.
 */
function SupportSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <h2 className="eyebrow">{eyebrow}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{title}</p>
      </div>
      <div className="max-w-[46rem] lg:col-span-9">{children}</div>
    </section>
  );
}
