import { inline, ProseBlocks } from "@/components/ProseBlocks";
import type { Section } from "@/data/prose";

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
          <ProseBlocks blocks={section.blocks} email={email} />
        </section>
      ))}
    </>
  );
}
