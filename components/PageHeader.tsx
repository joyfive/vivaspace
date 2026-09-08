import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Container wide>
      <header className="border-b border-line pb-12 pt-16 sm:pb-16 sm:pt-24">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display mt-6 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
      </header>
    </Container>
  );
}
