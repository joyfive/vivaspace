import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PolicyBody } from "@/components/PolicyBody";
import { company } from "@/data/company";
import {
  type Locale,
  locales,
  resolveLocale,
  THEN_CONTACT_EMAIL,
  thenPrivacy,
} from "@/data/legal/then-privacy";

const PATH = "/projects/then/privacy";

/** 국문이 기본이라 쿼리 없이도 열립니다. */
function hrefFor(locale: Locale) {
  return locale === "ko" ? PATH : `${PATH}?lan=${locale}`;
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lan);
  const doc = thenPrivacy[locale];

  return {
    title: doc.title,
    description:
      locale === "ko"
        ? "Then 은 기록을 기기 안에만 저장하는 로컬 전용 앱입니다. 수집 · 전송하는 정보가 없습니다."
        : "Then is a local-only app that keeps every record on the device. Nothing is collected or transmitted.",
    alternates: {
      canonical: hrefFor(locale),
      languages: {
        ko: hrefFor("ko"),
        en: hrefFor("en"),
      },
    },
    openGraph: {
      type: "article",
      url: `${company.siteUrl}${hrefFor(locale)}`,
      title: doc.title,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
  };
}

export default async function ThenPrivacyPage({ searchParams }: Props) {
  const locale = resolveLocale((await searchParams).lan);
  const doc = thenPrivacy[locale];

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

          <p className="eyebrow">Privacy Policy</p>
          <h1
            lang={locale}
            className="display mt-6 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] text-ink"
          >
            {doc.title}
          </h1>
          <p className="meta mt-6 text-faint">
            {doc.effectiveLabel} · {doc.effectiveDate}
          </p>

          <LanguageTabs current={locale} />
        </header>
      </Container>

      <Container wide>
        <div className="pb-24 pt-14 sm:pb-32">
          {/* 본문은 읽기 좋은 폭으로 제한하되 좌측 기준선은 헤더와 맞춥니다. */}
          <article lang={locale} className="legal-prose max-w-[46rem]">
            <PolicyBody
              intro={doc.intro}
              sections={doc.sections}
              email={THEN_CONTACT_EMAIL}
            />
          </article>
        </div>
      </Container>
    </>
  );
}

/**
 * 언어 전환. 쿼리(`?lan=`)만 바꾸는 실제 링크라 각 언어가 고유 URL 을 가지고
 * 자바스크립트 없이도 동작합니다.
 */
function LanguageTabs({ current }: { current: Locale }) {
  return (
    <nav aria-label="언어 선택" className="mt-10">
      <ul className="inline-flex overflow-hidden rounded-full border border-line-strong">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <Link
                href={hrefFor(locale)}
                hrefLang={locale}
                aria-current={active ? "true" : undefined}
                className={`block px-5 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  active
                    ? "bg-ink text-bg"
                    : "text-faint hover:bg-surface hover:text-ink"
                }`}
              >
                {thenPrivacy[locale].tabLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
