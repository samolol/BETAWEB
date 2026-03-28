import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "hover-sheen border border-white/24 bg-[linear-gradient(135deg,var(--color-accent),#29b6d8_72%,#81d8f7)] text-white shadow-[0_18px_44px_rgba(31,123,112,0.24)] ring-1 ring-white/12 before:absolute before:inset-[1px] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_40%)] before:opacity-100 before:content-[''] hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_28px_64px_rgba(41,182,216,0.28)] hover:brightness-[1.05]",
  secondary:
    "hover-sheen border border-[rgba(31,123,112,0.18)] bg-white/78 text-[var(--color-text)] shadow-[var(--shadow-soft)] before:absolute before:inset-[1px] before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.28))] before:content-[''] hover:-translate-y-1.5 hover:scale-[1.015] hover:border-[rgba(31,123,112,0.24)] hover:bg-[linear-gradient(135deg,rgba(240,253,250,0.9),rgba(240,249,255,0.92))] hover:shadow-[var(--shadow-float)]",
  ghost:
    "interactive-link px-0 text-[var(--color-text)] hover:translate-x-0.5 hover:text-[var(--color-accent)]",
};

export function ButtonLink({
  children,
  className = "",
  href = "#",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classes = [
    "relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-[transform,box-shadow,background-color,color,filter,border-color] duration-300 ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} {...props}>
      <span className="relative z-10">{children}</span>
    </a>
  );
}
