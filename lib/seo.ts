import { company } from "@/data/company";

/**
 * 공유 카드(OG · Twitter) 이미지.
 *
 * 하위 페이지가 openGraph 를 직접 정의하면 루트에서 상속한 이미지까지 통째로
 * 덮어써집니다. 그래서 openGraph 를 따로 정의하는 페이지는 이 상수를 반드시
 * 함께 넣어야 합니다.
 *
 * width · height 는 public/og.png 의 실제 크기입니다. 이미지를 교체하면
 * 이 값도 함께 맞춰주세요. 선언값과 파일이 다르면 일부 크롤러가 카드를
 * 잘못된 비율로 잡습니다.
 */
export const shareImage = {
  url: "/og.png",
  width: 1730,
  height: 909,
  alt: company.seo.shareImageAlt,
} as const;
