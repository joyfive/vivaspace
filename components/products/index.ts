import type { ComponentType } from "react";
import { KitfolioVisual } from "./KitfolioVisual";

/**
 * 제품 비주얼 레지스트리.
 *
 * 카드 컴포넌트 안에 absolute 좌표를 몰아넣지 않고 제품별로 독립시킵니다.
 * 책꼼 · Then · CineGauge 도 각자 다른 composition 을 가져야 하므로
 * 여기에 한 줄을 더하는 것으로 끝나게 둡니다.
 *
 * 등록된 제품은 홈 카드와 상세 페이지에서 같은 비주얼을 씁니다.
 */
export const productVisuals: Record<string, ComponentType> = {
  kitfolio: KitfolioVisual,
};

export function getProductVisual(slug: string): ComponentType | undefined {
  return productVisuals[slug];
}
