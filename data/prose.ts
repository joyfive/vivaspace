/**
 * 긴 본문(방침 · 고객지원)이 공유하는 블록 단위.
 *
 * 백틱으로 감싼 부분은 앱 안의 UI 값으로 렌더됩니다. 예: `없음`
 * 본문에 그대로 적힌 이메일 주소는 mailto 링크가 됩니다.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Section = { heading: string; blocks: Block[] };

/**
 * 구조화 데이터(JSON-LD)에 넣을 평문. 백틱과 블록 구분을 걷어내고
 * 한 문단으로 잇습니다.
 */
export function plainText(blocks: readonly Block[]): string {
  return blocks
    .map((block) =>
      block.type === "p" ? block.text : block.items.join(" "),
    )
    .join(" ")
    .replace(/`/g, "");
}
