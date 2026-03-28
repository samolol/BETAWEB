import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section id="proces" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proces"
            title={siteContent.process.title}
            description={siteContent.process.description}
          />
        </Reveal>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-px line-connector lg:block" />

          {siteContent.process.steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 80} rotateDeg={index === 1 ? -1 : 1}>
              <article
                className={`interactive-card interactive-card-soft hover-sheen group relative overflow-hidden rounded-[1.95rem] border p-6 sm:p-7 ${
                  index === 1
                    ? "glass-panel border-[rgba(31,123,112,0.18)] shadow-[var(--shadow-card)]"
                    : index === 2
                      ? "section-tint-sky border-[rgba(125,185,208,0.16)] shadow-[var(--shadow-soft)]"
                      : "bg-white/82 shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="absolute left-6 right-6 top-0 h-px bg-[linear-gradient(90deg,rgba(31,123,112,0.32),rgba(125,185,208,0.18),transparent)]" />
                <div className="mb-6 flex items-center gap-4">
                  <div className="dot-connector flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(31,123,112,0.12)] bg-[rgba(31,123,112,0.1)] text-base font-semibold text-[var(--color-accent)] transition duration-300 ease-[var(--ease-standard)] group-hover:scale-[1.08] group-hover:bg-[rgba(31,123,112,0.14)]">
                    {index + 1}
                  </div>
                  {index < siteContent.process.steps.length - 1 ? (
                    <div className="hidden h-px flex-1 line-connector opacity-80 lg:block" />
                  ) : null}
                </div>

                <span className="micro-badge mb-4 text-[var(--color-accent)]">
                  Krok {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
