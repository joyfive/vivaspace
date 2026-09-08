import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { shareImage } from "@/lib/seo";
import "./globals.css";

/**
 * 타이포는 CDN 으로 불러옵니다.
 * 라틴 · 숫자는 Geist, 한글은 Pretendard 가 받도록 폴백 체인을 짜 두었습니다
 * (globals.css 의 --font-sans).
 */
const GEIST_CSS =
  "https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..500&display=swap";
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: company.seo.title,
    /* 하위 페이지는 "Contact | VIVASPACE" 형태가 됩니다. */
    template: `%s | ${company.name}`,
  },
  description: company.seo.description,
  applicationName: company.name,
  keywords: [
    company.name,
    company.nameKo,
    ...services.map((service) => service.name),
    "독립 소프트웨어 스튜디오",
    "소프트웨어 스튜디오",
    "앱 개발",
  ],
  authors: [{ name: company.name, url: company.siteUrl }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "ko_KR",
    url: company.siteUrl,
    title: company.seo.shareTitle,
    description: company.seo.shareDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.shareTitle,
    description: company.seo.shareDescription,
    images: [shareImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.nameKo,
  url: company.siteUrl,
  logo: `${company.siteUrl}/symbol-512.png`,
  slogan: company.tagline,
  description: company.aboutEn.join(" "),
  email: company.email,
  foundingDate: String(company.foundedYear),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seoul",
    addressCountry: "KR",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: service.name,
      description: service.tagline,
      url: `${company.siteUrl}/services/${service.slug}`,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href={GEIST_CSS} />
        <link rel="stylesheet" href={PRETENDARD_CSS} />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
