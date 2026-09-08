import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * 파비콘 · OG 이미지는 ImageResponse 로 빌드 타임에 렌더됩니다.
 * Satori 는 외부 URL 을 읽지 않으므로 심볼 PNG 를 data URI 로 인라인합니다.
 */
export async function symbolDataUri(size: 256 | 512 = 512) {
  const file = await readFile(
    path.join(process.cwd(), "public", `symbol-${size}.png`),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

/** 브랜드 그라디언트 — 로고 Red Pink 팔레트에서 그대로 가져왔습니다. */
export const BRAND_GRADIENT =
  "linear-gradient(135deg, #FF8A3D 0%, #FF6B6D 38%, #FF2E6E 100%)";

export const BRAND = {
  bg: "#FFFFFF",
  ink: "#171719",
  muted: "#5A5A60",
  faint: "#6C6C74",
  viva: "#FF2E6E",
} as const;
