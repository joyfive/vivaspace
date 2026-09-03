import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { company } from "@/data/company";

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
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 sm:gap-8">
          <div>
            <Wordmark className="text-[0.9375rem] text-ink" />
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

          <div className="sm:text-right">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:justify-end">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-sm text-faint">
              © {company.foundedYear} {company.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
