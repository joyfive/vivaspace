/**
 * 사업자 · 브랜드 기본 정보.
 * 사업자등록번호 등 확정되지 않은 값은 null 로 두면 화면에서 자동으로 숨겨집니다.
 */
export const company = {
  name: "VIVASPACE",
  nameKo: "비바스페이스",
  tagline: "Small products for everyday life.",
  taglineKo: "일상의 작은 필요를 제품으로 만듭니다.",
  description:
    "비바스페이스는 대한민국의 1인 소프트웨어 스튜디오입니다. 모바일 앱과 웹 서비스를 직접 기획하고 만들어 운영합니다.",
  descriptionEn: "Independent software studio based in Korea.",

  /** 대표자 — 개인정보처리방침의 개인정보 보호책임자 표기에만 사용합니다. */
  ceo: "오기쁨",
  /** 사업자등록번호 — 발급 후 실제 번호로 교체하세요. */
  businessNumber: null as string | null,
  /** 통신판매업 신고번호 — 해당되는 경우에만 값을 채우세요. */
  mailOrderNumber: null as string | null,
  country: "대한민국",
  /** 사업장 주소 — 공개할 경우에만 값을 채우세요. */
  address: null as string | null,

  email: "support@vivaspace.co.kr",
  siteUrl: "https://vivaspace.co.kr",

  foundedYear: 2026,
} as const;
