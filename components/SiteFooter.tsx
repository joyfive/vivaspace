import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { company } from "@/data/company";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const businessLines = [
    company.nameKo,
    company.businessNumber ? `사업자등록번호 ${company.businessNumber}` : null,
    company.mailOrderNumber
      ? `통신판매업신고 ${company.mailOrderNumber}`
      : null,
    company.address,
  ].filter(Boolean) as string[];

  return (
    <footer className="border-t border-line">
      <Container wide>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Wordmark className="text-[0.8125rem] text-ink" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              {company.taglineKo}
            </p>
            <p className="meta mt-3 text-faint">{company.method}</p>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow">Business</p>
            <address className="mt-5 space-y-1 text-sm not-italic text-muted">
              {businessLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-current"
              >
                {company.email}
              </a>
            </p>
          </div>

          <div className="lg:col-span-3 lg:text-right">
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm lg:justify-end">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="meta mt-10 text-faint">
              © {company.foundedYear} {company.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
