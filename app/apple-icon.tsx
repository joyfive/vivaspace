import { ImageResponse } from "next/og";
import { BRAND, symbolDataUri } from "@/lib/brand-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS 홈 화면 아이콘은 투명 배경을 지원하지 않아 웜 화이트 바탕을 깔아줍니다. */
export default async function AppleIcon() {
  const symbol = await symbolDataUri(512);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: BRAND.bg,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={symbol} width={150} height={150} alt="" />
      </div>
    ),
    size,
  );
}
