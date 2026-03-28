type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "default",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const isInverse = theme === "inverse";

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      {eyebrow ? (
        <p
          className={`micro-badge mb-5 ${
            isInverse
              ? "border-white/16 bg-white/8 text-[#e7f7f4]"
              : "text-[var(--color-accent)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[2.45rem] leading-[0.95] tracking-[-0.04em] sm:text-[3.1rem] ${
          isInverse ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-2xl text-[1.02rem] leading-7 sm:text-lg sm:leading-8 ${
          isInverse ? "text-white/72" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
