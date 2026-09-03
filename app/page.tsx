import { Container } from "@/components/Container";
import { ProductRow } from "@/components/ProductRow";
import { ArrowLink } from "@/components/ArrowLink";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container>
          <div className="py-24 sm:py-32 lg:py-40">
            <p className="eyebrow">{company.name}</p>
            <h1 className="mt-6 text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              {company.tagline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              {company.taglineKo}
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-16">
        <Container>
          <div className="py-20 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="eyebrow">Products</h2>
              <p className="text-xs text-faint">
                {services.length} services
              </p>
            </div>

            <ul className="mt-8">
              {services.map((service) => (
                <ProductRow key={service.slug} service={service} />
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Studio */}
      <section className="border-t border-line bg-surface">
        <Container>
          <div className="py-20 sm:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {company.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {company.descriptionEn}
              <br />
              {company.description}
            </p>
            <div className="mt-8">
              <ArrowLink href="/contact">Contact</ArrowLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
