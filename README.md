# VIVASPACE

> Where ideas take shape. — 아이디어가 살아 숨 쉬는 공간

비바스페이스 공식 웹사이트. 사업자 실체 확인, 운영 서비스 허브,
Google Play / App Store 개발자 계정용 공식 웹사이트 역할을 합니다.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

## 실행

```bash
npm install
npm run dev
```

```bash
npm run build   # 프로덕션 빌드 (모든 페이지 정적 생성)
npm run typecheck
```

## 구조

```
app/
├── page.tsx                  홈 — Hero / Products / Process / About / Contact
├── services/[slug]/page.tsx  서비스 상세 (동적 라우트)
├── contact/page.tsx          문의
├── privacy/page.tsx          개인정보처리방침
├── terms/page.tsx            이용약관
├── sitemap.ts · robots.ts    SEO
├── icon.tsx                  파비콘 (심볼 기반, 동적 생성)
├── apple-icon.tsx            iOS 홈 화면 아이콘 (동적 생성)
└── opengraph-image.tsx       OG 이미지 (동적 생성)

data/
├── company.ts                사업자 · 브랜드 정보 · 키워드 · Process 단계
└── services.ts               서비스 메타데이터 (단일 소스)

lib/brand-image.ts            ImageResponse 용 심볼 · 브랜드 상수
components/                   레이아웃 · UI 조각
public/symbol.webp            심볼 (웹 표시용)
public/symbol-512.png         심볼 (OG · apple-icon 용)
public/symbol-256.png         심볼 (파비콘 용)
```

홈의 카드, `/services/[slug]` 상세 페이지, `sitemap.xml`, JSON-LD가 모두
`data/services.ts` 하나에서 생성됩니다.

## 서비스 추가하기

`data/services.ts`의 `services` 배열에 항목을 하나 추가하면 끝입니다.
라우트, 홈 카드, 사이트맵, 구조화 데이터가 자동으로 따라옵니다.

```ts
{
  slug: "newapp",
  name: "새 서비스",
  wordmark: "NEWAPP",
  tagline: "한 줄 소개",
  summary: "홈 카드에 들어갈 설명",
  about: "상세 페이지 About 본문",
  features: [{ title: "...", description: "..." }],
  platforms: ["ios", "android"],   // "web" 도 가능
  status: "preparing",             // "live" | "beta" | "preparing"
  accent: { light: "#...", dark: "#..." },
  links: { appStore: "...", googlePlay: "...", website: "..." },
  contactEmail: "support@example.app",  // 생략하면 회사 대표 이메일 사용
}
```

대표 이미지는 `public/`에 파일을 넣고 `image` 필드(`src` · `alt` · `width` ·
`height`)를 채우면 컬러 패널 대신 실제 이미지가 표시됩니다. 채우지 않으면
서비스 포인트 컬러로 만든 패널이 자리를 대신합니다.

`links`에 `appStore` · `googlePlay` · `website`를 넣으면 상세 페이지의
Available on 섹션에 버튼으로 나옵니다. 하나도 없으면 "출시 준비 중" 안내가
대신 표시됩니다.

## 공개 전에 채워야 할 값

`data/company.ts`

| 항목 | 현재 | 비고 |
| --- | --- | --- |
| `businessNumber` | `null` | 사업자등록 후 실제 번호 입력. `null`이면 푸터에서 자동으로 숨겨집니다. |
| `mailOrderNumber` | `null` | 통신판매업 신고 대상인 경우에만 입력 |
| `address` | `null` | 사업장 주소를 공개할 경우 입력 |
| `email` | `support@vivaspace.co.kr` | 도메인 메일 개설 후 수신 확인 |
| `ceo` | `오기쁨` | 개인정보처리방침의 개인정보 보호책임자 표기에만 사용 (푸터·구조화 데이터에는 노출하지 않음) |
| `siteUrl` | `https://vivaspace.co.kr` | 확정된 도메인 (canonical · OG · sitemap 기준값) |

`app/privacy/page.tsx`, `app/terms/page.tsx`의 `EFFECTIVE_DATE`도 실제
시행일로 맞춰주세요.

## 브랜드

| 항목 | 값 |
| --- | --- |
| Brand idea | 아이디어가 살아 숨 쉬는 공간 |
| Essence | Structured Imagination |
| Primary slogan | Where ideas take shape. |
| Secondary message | Structure ideas. Make them real. |
| Keywords | Alive · Structured · Tangible · Independent |

슬로건 · 키워드 · Process 단계는 모두 `data/company.ts` 한 곳에 있습니다.

## 디자인

컨셉은 **Structured outside, alive inside** 입니다.
레이아웃과 타이포는 차갑고 구조적으로, 생명력은 심볼 하나가 담당합니다.

### 컬러

Neutral 85 / Brand 15. 토큰은 `app/globals.css` 상단에 모여 있고
`prefers-color-scheme` 에 따라 다크 팔레트로 전환됩니다.

| 토큰 | 라이트 | 용도 |
| --- | --- | --- |
| `--bg` | `#FAF9F7` | Warm White — 완전한 흰색이 아닙니다 |
| `--ink` | `#171719` | Near Black |
| `--viva` | `#FF2E6E` | Viva Red — **면 · 그라디언트 전용** |
| `--coral` · `--pale` | `#FF6B6D` · `#FFBFA3` | 보조 · 넓은 면적 |
| `--accent` | `#C50F55` | **텍스트 · 링크 전용** |

브랜드 컬러는 "칠하는 색"과 "읽는 색"을 나눠 씁니다.
`--viva` 를 그대로 본문 글자색으로 쓰면 웜 화이트 배경에서 대비가 3.4:1 로
WCAG AA(4.5:1)에 못 미칩니다. 그래서 텍스트에는 `--accent`(5.6:1)를 쓰고,
브랜드 인상은 심볼과 그라디언트가 책임집니다. 다크 모드에서는 반대로
밝은 쪽(`#FF6B8E`, 7.2:1)이 읽히는 색입니다.

서비스마다 개별 포인트 컬러(`accent`)를 그대로 유지합니다. 비바스페이스
사이트 안이라고 해서 모든 제품을 Red Pink 로 통일하지 않습니다. 인라인 CSS
변수(`--pa-light` / `--pa-dark`)로 전달되어 해당 서비스 영역에서만 적용됩니다.

### 타이포그래피

라틴 · 숫자는 **Geist**, 한글은 **Pretendard** 가 받습니다. 폴백 체인
(`--font-sans`)이 글자별로 알아서 갈라주므로 언어별 클래스가 필요 없습니다.
수치 · 라벨은 **Geist Mono**(`.meta`).

두 폰트 모두 CDN 으로 불러옵니다 (`app/layout.tsx` 상단 상수).
버전을 고정해 두었으니 올릴 때 그 상수만 바꾸면 됩니다.

유틸리티: `.display`(짧고 큰 헤드라인) · `.eyebrow`(섹션 라벨) ·
`.meta`(모노 수치).

### 모션

살아 움직이는 요소는 **홈 히어로의 심볼 하나뿐**입니다
(`.symbol-alive` · `.symbol-glow`, 22~26초 주기). 나머지 UI 는 정적입니다.
`prefers-reduced-motion` 에서는 전역 가드가 애니메이션을 끕니다.

`<Symbol alive />` 는 히어로 전용입니다. 다른 곳에서 쓰면 "한 곳만
움직인다"는 규칙이 깨집니다.

### 심볼 에셋

`public/symbol.*` 는 원본 로고 PNG 에서 만들었습니다. 알파값 1짜리 유령
픽셀을 제거하고, 콘텐츠 경계로 크롭한 뒤, 8% 여백을 둔 정사각 캔버스에
중앙 정렬했습니다. 로고를 교체할 때도 같은 규격을 지켜야 헤더 · 파비콘 ·
OG 이미지의 정렬이 어긋나지 않습니다.
