import { company } from "@/data/company";

/**
 * 공유 카드(OG · Twitter) 이미지.
 *
 * 하위 페이지가 openGraph 를 직접 정의하면 루트에서 상속한 이미지까지 통째로
 * 덮어써집니다. 그래서 openGraph 를 따로 정의하는 페이지는 이 상수를 반드시
 * 함께 넣어야 합니다.
 *
 * 디자인된 PNG 로 교체할 때는 url 만 "/og.png" 로 바꾸고
 * app/opengraph-image.tsx 를 지우면 됩니다.
 */
export const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: company.seo.shareImageAlt,
} as const;
