import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company } from "@/data/company";
import { services } from "@/data/services";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    company.name,
    company.nameKo,
    ...services.map((service) => service.name),
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
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
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
  description: company.description,
  email: company.email,
  address: {
    "@type": "PostalAddress",
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
