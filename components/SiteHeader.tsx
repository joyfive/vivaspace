import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";

/* 좁은 화면에서는 워드마크와 부딪히므로 핵심 두 개만 남깁니다. */
const nav = [
  { href: "/#products", label: "Products", compact: true },
  { href: "/#process", label: "Process", compact: false },
  { href: "/#about", label: "About", compact: false },
  { href: "/contact", label: "Contact", compact: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container wide>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-[0.8125rem] text-ink transition-opacity hover:opacity-60"
          >
            <Wordmark />
          </Link>

          <nav aria-label="주요 메뉴">
            <ul className="flex items-center gap-5 sm:gap-8">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className={item.compact ? "" : "hidden sm:block"}
                >
                  <Link
                    href={item.href}
                    className="group inline-flex items-baseline gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-faint transition-colors hover:text-ink"
                  >
                    {/* 인덱스는 라벨보다 작고 연하게. hover 에서만 브랜드 컬러가 켜집니다. */}
                    <span
                      aria-hidden
                      className="meta hidden text-[0.5625rem] text-line-strong transition-colors group-hover:text-[var(--viva)] sm:inline"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
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
