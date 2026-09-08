import { ImageResponse } from "next/og";
import { company } from "@/data/company";
import { BRAND, BRAND_GRADIENT, symbolDataUri } from "@/lib/brand-image";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${company.name} — ${company.tagline}`;

export default async function OpengraphImage() {
  const symbol = await symbolDataUri(512);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: BRAND.bg,
          position: "relative",
        }}
      >
        {/* 살아 있는 요소는 심볼 하나. 나머지는 정적인 그리드입니다. */}
        <img
          src={symbol}
          width={470}
          height={470}
          alt=""
          style={{ position: "absolute", right: 46, top: 80 }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 80,
            width: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: BRAND.faint,
            }}
          >
            VIVASPACE
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: BRAND.ink,
              }}
            >
              {company.tagline}
            </div>
            <div style={{ display: "flex", fontSize: 32, color: BRAND.muted }}>
              {company.taglineKo}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              height: 6,
              width: 160,
              borderRadius: 3,
              background: BRAND_GRADIENT,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
