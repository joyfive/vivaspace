import Link from "next/link";
import type { ComponentProps } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">;

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
  ...rest
}: Props) {
  const content = (
    <>
      <span className="border-b border-transparent transition-colors duration-200 group-hover:border-current">
        {children}
      </span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </>
  );

  const classes = `group inline-flex items-center gap-1.5 text-sm font-medium text-accent ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
