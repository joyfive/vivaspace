import type { ReactNode } from "react";
import type { Block } from "@/data/prose";

/**
 * 백틱으로 감싼 부분은 앱 안의 UI 값(`없음` 등)이므로 code 로,
 * 본문에 그대로 적힌 이메일 주소는 mailto 링크로 바꿔 렌더합니다.
 */
export function inline(text: string, email?: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).flatMap((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (!email || !part.includes(email)) return part;

    return part.split(email).flatMap((chunk, chunkIndex) =>
      chunkIndex === 0
        ? [chunk]
        : [
            <a key={`${index}-${chunkIndex}`} href={`mailto:${email}`}>
              {email}
            </a>,
            chunk,
          ],
    );
  });
}

function BlockContent({ block, email }: { block: Block; email?: string }) {
  if (block.type === "p") return <p>{inline(block.text, email)}</p>;

  const items = block.items.map((item) => (
    <li key={item}>{inline(item, email)}</li>
  ));

  return block.type === "ol" ? <ol>{items}</ol> : <ul>{items}</ul>;
}

/** 블록 배열을 그대로 이어 그립니다. 감싸는 쪽에서 `.legal-prose` 를 답니다. */
export function ProseBlocks({
  blocks,
  email,
}: {
  blocks: readonly Block[];
  email?: string;
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockContent key={index} block={block} email={email} />
      ))}
    </>
  );
}
