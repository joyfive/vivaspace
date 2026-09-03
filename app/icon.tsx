import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#111113",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          borderRadius: 7,
        }}
      >
        V
      </div>
    ),
    size,
  );
}
