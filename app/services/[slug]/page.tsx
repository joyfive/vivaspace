import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ServiceHero } from "@/components/ServiceHero";
import { StoreLinks } from "@/components/StoreLinks";
import { StatusBadge } from "@/components/StatusBadge";
import { company } from "@/data/company";
import { getService, platformLabel, services } from "@/data/services";

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
      <Container>
        <article className="py-16 sm:py-20 sm:pb-32">
          <nav aria-label="이동 경로" className="mb-12">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-ink"
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

          <header>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.75rem]">
              {service.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {service.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <StatusBadge status={service.status} />
              <span className="text-xs text-faint">
                {service.platforms.map((p) => platformLabel[p]).join(" · ")}
              </span>
            </div>
          </header>

          <div className="mt-12">
            <ServiceHero service={service} />
          </div>

          {/* About */}
          <section className="mt-20 border-t border-line pt-10">
            <h2 className="eyebrow">About</h2>
            <p className="mt-6 text-lg leading-[1.8] text-ink">
              {service.about}
            </p>
          </section>

          {/* Features */}
          <section className="mt-20 border-t border-line pt-10">
            <h2 className="eyebrow">Features</h2>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {service.features.map((feature, index) => (
                <li key={feature.title} className="bg-bg p-7">
                  <span
                    className="font-mono text-xs tabular-nums"
                    style={{ color: "var(--product-accent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink">
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
          <section className="mt-20 border-t border-line pt-10">
            <h2 className="eyebrow">Available on</h2>
            <div className="mt-6">
              <StoreLinks service={service} />
            </div>
          </section>

          {/* Contact */}
          <section className="mt-20 border-t border-line pt-10">
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              {service.name}에 대한 문의는{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-current"
              >
                {contactEmail}
              </a>
              로 보내주세요.
            </p>
          </section>
        </article>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
