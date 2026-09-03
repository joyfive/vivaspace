import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/#products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-[0.9375rem] text-ink transition-opacity hover:opacity-60"
          >
            <Wordmark />
          </Link>

          <nav aria-label="주요 메뉴">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
