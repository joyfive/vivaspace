/**
 * 사업자 · 브랜드 기본 정보.
 * 사업자등록번호 등 확정되지 않은 값은 null 로 두면 화면에서 자동으로 숨겨집니다.
 */
export const company = {
  name: "VIVASPACE",
  nameKo: "비바스페이스",

  /** Primary slogan */
  tagline: "Where ideas take shape.",
  taglineKo: "아이디어가 살아 숨 쉬는 공간",
  /** Secondary message — 브랜드 방법론 */
  method: "Structure ideas. Make them real.",
  /** Brand essence */
  essence: "Structured Imagination",

  description:
    "아이디어를 구조화하고, 실현 가능한 단위로 만들고, 디지털 제품으로 구현합니다.",
  descriptionEn:
    "VIVASPACE is an independent software studio based in Seoul. We plan, design, build and operate our own digital products.",
  about:
    "비바스페이스는 서울에 있는 독립 소프트웨어 스튜디오입니다. 외부에서 받은 요구사항을 따라가는 대신, 직접 문제를 고르고 기획 · 디자인 · 개발 · 운영까지 스스로 책임집니다.",

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

/** 브랜드 판단 기준이 되는 네 개의 키워드. */
export const brandKeywords = [
  {
    en: "Alive",
    ko: "살아 있는",
    description: "완성해두고 멈추지 않고, 쓰이는 동안 계속 바뀌고 자랍니다.",
  },
  {
    en: "Structured",
    ko: "구조적인",
    description: "복잡한 생각을 관계와 순서로 정리한 뒤에 만들기 시작합니다.",
  },
  {
    en: "Tangible",
    ko: "만질 수 있는",
    description: "추상적인 아이디어를 실제로 쓸 수 있는 결과물까지 밀어붙입니다.",
  },
  {
    en: "Independent",
    ko: "독립적인",
    description: "트렌드를 따라가지 않고 스스로 문제를 골라 제품을 만듭니다.",
  },
] as const;

/** How we build — 아이디어가 제품이 되기까지의 네 단계. */
export const process = [
  {
    step: "IDEA",
    ko: "아이디어",
    description:
      "일상에서 반복적으로 걸리는 불편을 모읍니다. 시장이 아니라 실제로 겪은 문제에서 출발합니다.",
  },
  {
    step: "STRUCTURE",
    ko: "구조화",
    description:
      "흩어진 생각을 관계와 순서로 정리합니다. 무엇이 핵심이고 무엇이 곁가지인지 여기서 갈립니다.",
  },
  {
    step: "UNIT",
    ko: "단위화",
    description:
      "구조를 만들 수 있는 크기로 자릅니다. 한 번에 하나씩 완성되는 단위로 쪼갭니다.",
  },
  {
    step: "PRODUCT",
    ko: "제품",
    description:
      "단위를 쌓아 실제로 쓰이는 제품으로 만들고, 출시 이후에도 직접 운영합니다.",
  },
] as const;
