import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_16px_40px_rgba(15,118,110,0.24)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]",
  secondary:
    "border border-[var(--color-line-strong)] bg-white/85 text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost: "text-[var(--color-text)] hover:text-[var(--color-accent)]",
};

export function ButtonLink({
  children,
  className = "",
  href = "#",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
