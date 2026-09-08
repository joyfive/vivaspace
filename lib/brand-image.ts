import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * 파비콘 · 앱 아이콘은 ImageResponse 로 빌드 타임에 렌더됩니다.
 * Satori 는 외부 URL 을 읽지 않으므로 심볼 PNG 를 data URI 로 인라인합니다.
 * (공유 카드 이미지는 디자인된 public/og.png 를 그대로 씁니다 — lib/seo.ts)
 */
export async function symbolDataUri(size: 256 | 512 = 512) {
  const file = await readFile(
    path.join(process.cwd(), "public", `symbol-${size}.png`),
  );
  return `data:image/png;base64,${file.toString("base64")}`;
}

export const BRAND = {
  bg: "#FFFFFF",
} as const;
