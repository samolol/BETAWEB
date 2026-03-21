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
          className={`mb-5 inline-flex rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            isInverse
              ? "border-white/16 bg-white/8 text-[#e7f7f4]"
              : "border-[rgba(31,123,112,0.14)] bg-white/75 text-[var(--color-accent)] shadow-[var(--shadow-soft)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-[2.35rem] leading-[1.02] sm:text-[3rem] ${
          isInverse ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-2xl text-base leading-8 sm:text-lg ${
          isInverse ? "text-white/72" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
