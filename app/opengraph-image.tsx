import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${company.name} — ${company.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#8b8b93",
          }}
        >
          VIVASPACE
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#111113",
            }}
          >
            {company.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#56565e" }}>
            {company.descriptionEn}
          </div>
        </div>
        <div style={{ display: "flex", height: 6, background: "#2445e5", width: 120 }} />
      </div>
    ),
    size,
  );
}
