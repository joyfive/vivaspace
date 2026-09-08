import type { ReactNode } from "react";
import type { Block, Section } from "@/data/legal/then-privacy";

/**
 * 백틱으로 감싼 부분은 앱 안의 UI 값(`없음` 등)이므로 code 로,
 * 본문에 그대로 적힌 이메일 주소는 mailto 링크로 바꿔 렌더합니다.
 */
function inline(text: string, email?: string): ReactNode[] {
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
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{inline(item, email)}</li>
        ))}
      </ul>
    );
  }

  return <p>{inline(block.text, email)}</p>;
}

export function PolicyBody({
  intro,
  sections,
  email,
}: {
  intro: string;
  sections: readonly Section[];
  email?: string;
}) {
  return (
    <>
      <p>{inline(intro, email)}</p>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, index) => (
            <BlockContent key={index} block={block} email={email} />
          ))}
        </section>
      ))}
    </>
  );
}
