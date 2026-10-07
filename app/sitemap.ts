import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    /* 제품별 고객지원 · 법적 고지 — 스토어 심사에서 참조하는 주소입니다. */
    { path: "/services/then/share", priority: 0.6 },
    { path: "/services/then/support", priority: 0.5 },
    { path: "/services/then/privacy", priority: 0.4 },
    { path: "/services/then/privacy?lan=en", priority: 0.4 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${company.siteUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
