import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "border border-white/20 bg-[linear-gradient(135deg,var(--color-accent),#328b80)] text-white shadow-[0_18px_44px_rgba(31,123,112,0.24)] ring-1 ring-white/12 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(31,123,112,0.28)] hover:brightness-[1.03]",
  secondary:
    "border border-[var(--color-line-strong)] bg-white/82 text-[var(--color-text)] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:border-[rgba(31,123,112,0.22)] hover:bg-white hover:shadow-[var(--shadow-float)]",
  ghost:
    "px-0 text-[var(--color-text)] hover:translate-x-0.5 hover:text-[var(--color-accent)]",
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
