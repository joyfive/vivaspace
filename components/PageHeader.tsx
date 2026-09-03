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
    <Container>
      <header className="pt-16 pb-10 sm:pt-20 sm:pb-12">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </header>
    </Container>
  );
}
