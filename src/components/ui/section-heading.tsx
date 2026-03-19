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
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
            isInverse ? "text-[#8ff1e7]" : "text-[var(--color-accent)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          isInverse ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 sm:text-lg ${
          isInverse ? "text-white/68" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
