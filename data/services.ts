/**
 * 운영 중인 서비스 목록.
 * 서비스를 추가하려면 아래 배열에 항목 하나를 더하면 됩니다.
 * 홈의 카드, /services/[slug] 상세 페이지, sitemap 이 모두 이 파일에서 생성됩니다.
 */

export type ServiceStatus = "live" | "beta" | "preparing";

export type Platform = "ios" | "android" | "web";

export type Service = {
  slug: string;
  /** 표기용 이름 (한글 서비스는 한글 우선) */
  name: string;
  /** 라틴 표기 — 상세 페이지 상단의 대문자 로고 자리 */
  wordmark: string;
  /** 한 줄 소개 */
  tagline: string;
  /** 홈 카드 본문 */
  summary: string;
  /** 상세 페이지 About 본문 */
  about: string;
  features: { title: string; description: string }[];
  platforms: Platform[];
  status: ServiceStatus;
  /** 브랜드 포인트 컬러 (light / dark) */
  accent: { light: string; dark: string };
  links: {
    appStore?: string;
    googlePlay?: string;
    website?: string;
  };
  /** 대표 이미지 — public/ 기준 경로. 없으면 컬러 패널로 대체됩니다. */
  image?: { src: string; alt: string; width: number; height: number };
  /** 서비스 전용 문의 이메일. 없으면 회사 대표 이메일을 사용합니다. */
  contactEmail?: string;
};

export const services: Service[] = [
  {
    slug: "bookggom",
    name: "책꼼",
    wordmark: "BOOKGGOM",
    tagline: "병렬 독서를 위한 독서 기록 앱",
    summary: "여러 권을 동시에 읽는 사람을 위한 병렬 독서 기록 앱",
    about:
      "여러 권의 책을 종이책, 전자책, 오디오북 등 다양한 매체로 동시에 읽는 독자를 위한 기록 서비스입니다. 지금 어디까지 읽었는지, 어떤 책이 멈춰 있는지를 한 화면에서 확인할 수 있습니다.",
    features: [
      {
        title: "여러 권의 진행 상태 관리",
        description: "동시에 읽는 책들의 진행률과 최근 기록을 한눈에 확인합니다.",
      },
      {
        title: "종이책 · 전자책 · 오디오북 기록",
        description: "매체가 달라도 페이지, 퍼센트, 재생 시간으로 각각 기록합니다.",
      },
      {
        title: "독서 환경별 기록",
        description: "언제 어디서 읽었는지를 함께 남겨 나의 독서 패턴을 확인합니다.",
      },
      {
        title: "독서 히스토리",
        description: "완독한 책과 지나온 기록이 쌓여 나만의 독서 연표가 됩니다.",
      },
    ],
    platforms: ["ios", "android"],
    status: "preparing",
    accent: { light: "#B4462B", dark: "#F08A66" },
    links: {},
  },
  {
    slug: "then",
    name: "Then",
    wordmark: "THEN",
    tagline: "마지막으로 했던 날과 흐른 시간을 기록하는 앱",
    summary: "계획하지 않고 했던 날만 남기는 일상 기록 앱",
    about:
      "\u201c침구를 언제 세탁했더라?\u201d, \u201c머리 자른 지 얼마나 됐지?\u201d 같은 물음을 위한 앱입니다. 할 일을 계획하거나 습관을 평가하지 않고, 기억하고 싶은 것을 적어 실제로 했던 날짜만 남깁니다. 모든 기록은 기기 안에만 저장되며 네트워크 없이 동작합니다.",
    features: [
      {
        title: "했던 날짜만 기록",
        description:
          "계획도 목표도 없이 실제로 했던 날만 남깁니다. 오늘 했다면 한 번 눌러 기록합니다.",
      },
      {
        title: "흐른 시간 한눈에",
        description:
          "마지막 기록으로부터 얼마나 지났는지 목록에서 바로 확인합니다.",
      },
      {
        title: "시간축과 공유 카드",
        description:
          "지나온 날짜를 손으로 그린 듯한 시간축에서 돌아보고, 한 장의 카드로 만들어 공유합니다.",
      },
      {
        title: "로그인 없이, 오프라인으로",
        description:
          "계정도 광고도 없습니다. 기록과 반복 알림은 내 기기에만 저장됩니다.",
      },
    ],
    platforms: ["ios", "android"],
    status: "preparing",
    accent: { light: "#9A7B1F", dark: "#D9BC63" },
    links: {},
  },
  {
    slug: "cinegauge",
    name: "CineGauge",
    wordmark: "CINEGAUGE",
    tagline: "영화 흥행 데이터를 한눈에 보는 박스오피스 서비스",
    summary: "영화 흥행 데이터를 한눈에 보는 박스오피스 데이터 서비스",
    about:
      "일별 · 누적 관객 수와 순위 변동을 정리해 보여주는 박스오피스 데이터 서비스입니다. 숫자를 찾아다니지 않아도 지금 어떤 영화가 어떻게 움직이고 있는지 파악할 수 있습니다.",
    features: [
      {
        title: "일별 박스오피스",
        description: "매일 갱신되는 관객 수와 순위를 정리해 보여줍니다.",
      },
      {
        title: "누적 흥행 추이",
        description: "개봉 이후의 흐름을 그래프로 따라갈 수 있습니다.",
      },
      {
        title: "작품 비교",
        description: "여러 작품의 성적을 같은 기준 위에 놓고 비교합니다.",
      },
      {
        title: "관심 작품 추적",
        description: "지켜보고 있는 작품의 변화를 이어서 확인합니다.",
      },
    ],
    platforms: ["web"],
    status: "preparing",
    accent: { light: "#1F5FBF", dark: "#79A9F0" },
    links: {},
  },
  {
    slug: "kitfolio",
    name: "Kitfolio",
    wordmark: "KITFOLIO",
    tagline: "일상과 업무에 필요한 웹 기반 유틸리티 모음",
    summary: "일상과 업무에 필요한 웹 기반 유틸리티 모음",
    about:
      "설치 없이 브라우저에서 바로 쓰는 작은 도구들을 한곳에 모았습니다. 자주 필요하지만 매번 검색하게 되는 변환 · 계산 · 정리 도구를 일관된 형태로 제공합니다.",
    features: [
      {
        title: "설치 없이 바로 사용",
        description: "브라우저만 있으면 어떤 기기에서든 동일하게 동작합니다.",
      },
      {
        title: "자주 쓰는 도구 모음",
        description: "변환, 계산, 정리 등 반복되는 작업을 위한 도구를 제공합니다.",
      },
      {
        title: "일관된 사용 방식",
        description: "도구가 늘어나도 조작 방식은 같아서 새로 배울 것이 없습니다.",
      },
      {
        title: "가벼운 동작",
        description: "가능한 작업은 브라우저 안에서 처리해 빠르게 끝냅니다.",
      },
    ],
    platforms: ["web"],
    status: "live",
    accent: { light: "#2A7A5F", dark: "#68C4A2" },
    links: { website: "https://kitfolio.app" },
    image: {
      src: "/kitfolio-thumbnail.webp",
      alt: "노트북 화면에 열린 Kitfolio — 직무별로 정리된 도구 목록",
      width: 1731,
      height: 909,
    },
    contactEmail: "support@kitfolio.app",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const statusLabel: Record<ServiceStatus, string> = {
  live: "서비스 중",
  beta: "베타",
  preparing: "준비 중",
};

export const platformLabel: Record<Platform, string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
};
