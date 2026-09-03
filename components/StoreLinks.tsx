import type { Service } from "@/data/services";

type StoreLink = { label: string; href: string };

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function StoreLinks({ service }: { service: Service }) {
  const links: StoreLink[] = [
    service.links.appStore && { label: "App Store", href: service.links.appStore },
    service.links.googlePlay && {
      label: "Google Play",
      href: service.links.googlePlay,
    },
    service.links.website && {
      label: hostname(service.links.website),
      href: service.links.website,
    },
  ].filter(Boolean) as StoreLink[];

  if (links.length === 0) {
    return (
      <p className="text-[0.9375rem] text-muted">
        현재 출시를 준비하고 있습니다. 공개되면 이 페이지에서 안내드립니다.
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-bg"
          >
            {link.label}
            <span aria-hidden className="text-xs opacity-60">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
