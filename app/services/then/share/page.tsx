import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { Container } from "@/components/Container";
import { company } from "@/data/company";
import {
  getService,
  pendingPlatforms,
  platformLabel,
  serviceShareImage,
} from "@/data/services";

/**
 * 카톡 · SNS 에 뿌리는 Then 공유 랜딩.
 * 스토어 링크는 설치 목적지로만 쓰고, 공유되는 주소와 카드 문구는 여기서 통제합니다.
 * 짧은 주소 vivaspace.co.kr/then 이 이 페이지로 연결됩니다 (next.config.ts).
 */

const PATH = "/services/then/share";
const TITLE = "Then - 언제 했더라?";
const DESCRIPTION = "마지막으로 언제 했는지, 간단하게 기록하세요.";

const service = getService("then")!;
const image = serviceShareImage(service)!;

/* Play Console 획득 보고서에서 공유 페이지 유입을 따로 볼 수 있도록 referrer 를 붙입니다. */
function withPlayReferrer(url: string) {
  const referrer = "utm_source=vivaspace&utm_medium=share&utm_campaign=then";
  return `${url}&referrer=${encodeURIComponent(referrer)}`;
}

export const metadata: Metadata = {
  /* 공유 카드 제목이 그대로 보이도록 " | VIVASPACE" 템플릿을 쓰지 않습니다. */
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "ko_KR",
    url: `${company.siteUrl}${PATH}`,
    title: TITLE,
    description: DESCRIPTION,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [image],
  },
};

export default function ThenSharePage() {
  const googlePlay = service.links.googlePlay;
  const pending = pendingPlatforms(service);

  return (
    <div
      data-product
      style={
        {
          "--pa-light": service.accent.light,
          "--pa-dark": service.accent.dark,
        } as CSSProperties
      }
    >
      <Container>
        <article className="flex flex-col items-center py-14 text-center sm:py-24">
          <div className="w-full overflow-hidden rounded-2xl border border-line">
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="h-auto w-full"
            />
          </div>

          <h1 className="display mt-12 text-[clamp(1.75rem,5vw,2.75rem)] text-ink">
            {TITLE}
          </h1>
          <p className="mt-4 max-w-md text-lg leading-snug tracking-tight text-muted">
            {DESCRIPTION}
          </p>

          {googlePlay && (
            <a
              href={withPlayReferrer(googlePlay)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium tracking-tight text-bg transition-opacity duration-200 hover:opacity-85"
            >
              Google Play에서 다운로드
              <span aria-hidden className="text-sm opacity-70">
                ↗
              </span>
            </a>
          )}

          {pending.length > 0 && (
            <p className="mt-4 text-sm text-faint">
              {pending.map((p) => platformLabel[p]).join(" · ")} 버전은 준비
              중입니다.
            </p>
          )}

          <div className="mt-16">
            <ArrowLink href={`/services/${service.slug}`}>
              Then 자세히 보기
            </ArrowLink>
          </div>
        </article>
      </Container>
    </div>
  );
}
