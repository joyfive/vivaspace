# VIVASPACE

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
├── page.tsx                  홈 — 서비스 허브
├── services/[slug]/page.tsx  서비스 상세 (동적 라우트)
├── contact/page.tsx          문의
├── privacy/page.tsx          개인정보처리방침
├── terms/page.tsx            이용약관
├── sitemap.ts · robots.ts    SEO
├── icon.tsx                  파비콘 (동적 생성)
└── opengraph-image.tsx       OG 이미지 (동적 생성)

data/
├── company.ts                사업자 · 브랜드 정보
└── services.ts               서비스 메타데이터 (단일 소스)

components/                   레이아웃 · UI 조각
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

## 디자인

화이트 베이스 · 거의 블랙에 가까운 텍스트 · 단일 브랜드 포인트 컬러
(`--accent`) · 단순한 그리드. 토큰은 `app/globals.css` 상단에 모여 있고,
`prefers-color-scheme`에 따라 다크 팔레트로 전환됩니다.

서비스마다 개별 포인트 컬러(`accent`)를 가지며, 인라인 CSS 변수
(`--pa-light` / `--pa-dark`)로 전달되어 해당 서비스 영역에서만 적용됩니다.
