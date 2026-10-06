import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ArrowLink";
import { Container } from "@/components/Container";
import { ServiceHero } from "@/components/ServiceHero";
import { StoreLinks } from "@/components/StoreLinks";
import { StatusBadge } from "@/components/StatusBadge";
import { company } from "@/data/company";
import { shareImage } from "@/lib/seo";
import {
  getService,
  platformLabel,
  platformsText,
  services,
} from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: `${service.name} — ${service.tagline}`,
    description: service.about,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${company.siteUrl}/services/${service.slug}`,
      title: `${service.name} — ${service.tagline}`,
      description: service.about,
      images: [shareImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const contactEmail = service.contactEmail ?? company.email;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: service.name,
    description: service.about,
    url: `${company.siteUrl}/services/${service.slug}`,
    operatingSystem: service.platforms
      .map((platform) => platformLabel[platform])
      .join(", "),
    applicationCategory: "UtilitiesApplication",
    publisher: { "@type": "Organization", name: company.name },
  };

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
      <Container wide>
        <article className="py-14 sm:py-20 sm:pb-32">
          <nav aria-label="이동 경로" className="mb-14">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 meta text-faint transition-colors hover:text-ink"
            >
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                ←
              </span>
              Products
            </Link>
          </nav>

          <header className="grid gap-8 border-b border-line pb-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p
                className="meta uppercase"
                style={{ color: "var(--product-accent)" }}
              >
                {service.wordmark}
              </p>
              <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">
                {service.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-snug tracking-tight text-muted">
                {service.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-x-6 gap-y-2 lg:col-span-4 lg:justify-end">
              <StatusBadge status={service.status} />
              <span className="meta text-faint">
                {platformsText(service)}
              </span>
            </div>
          </header>

          <div className="mt-12">
            <ServiceHero service={service} />
          </div>

          {/* About */}
          <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <h2 className="eyebrow lg:col-span-3">About</h2>
            <p className="text-lg leading-[1.8] text-ink lg:col-span-9">
              {service.about}
            </p>
          </section>

          {/* Features */}
          <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <h2 className="eyebrow lg:col-span-3">Features</h2>
            <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-9">
              {service.features.map((feature, index) => (
                <li key={feature.title} className="bg-bg p-7">
                  <span
                    className="meta"
                    style={{ color: "var(--product-accent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Available on */}
          <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <h2 className="eyebrow lg:col-span-3">Available on</h2>
            <div className="lg:col-span-9">
              <StoreLinks service={service} />
            </div>
          </section>

          {/* Contact */}
          <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <h2 className="eyebrow lg:col-span-3">Contact</h2>
            <div className="lg:col-span-9">
              <p className="text-[0.9375rem] leading-relaxed text-muted">
                {service.name}에 대한 문의는{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-current"
                >
                  {contactEmail}
                </a>
                로 보내주세요. {company.name}가 직접 만들고 운영합니다.
              </p>

              {/* 고객지원 페이지가 있는 서비스만 — 스토어의 Support URL 과 같은 곳입니다. */}
              {service.supportPath && (
                <div className="mt-6">
                  <ArrowLink href={service.supportPath}>
                    {service.name} 고객지원
                  </ArrowLink>
                  <p className="mt-3 text-sm leading-relaxed text-faint">
                    자주 묻는 질문과 문의 안내를 정리해 두었습니다.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Legal — 제품 전용 방침이 있는 서비스에만 붙습니다. */}
          {service.privacyPath && (
            <section className="mt-24 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
              <h2 className="eyebrow lg:col-span-3">Legal</h2>
              <div className="lg:col-span-9">
                <ArrowLink href={service.privacyPath}>
                  {service.name} 개인정보처리방침
                </ArrowLink>
                <p className="mt-3 text-sm leading-relaxed text-faint">
                  국문 · 영문으로 제공합니다.
                </p>
              </div>
            </section>
          )}
        </article>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
