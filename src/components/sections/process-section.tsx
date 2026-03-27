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

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteContent.process.steps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 80}>
              <article
                className={`group interactive-card interactive-card-soft relative overflow-hidden rounded-[1.85rem] border p-6 sm:p-7 ${
                  index === 1
                    ? "section-tint-mint border-[rgba(31,123,112,0.18)] shadow-[var(--shadow-card)]"
                    : index === 2
                      ? "section-tint-sky border-[rgba(125,185,208,0.16)] shadow-[var(--shadow-soft)]"
                      : "bg-white/82 shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="absolute left-6 right-6 top-0 h-px bg-[linear-gradient(90deg,rgba(31,123,112,0.3),rgba(125,185,208,0.18),transparent)]" />
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(31,123,112,0.12)] bg-[rgba(31,123,112,0.1)] text-base font-semibold text-[var(--color-accent)] shadow-[var(--shadow-soft)] transition duration-300 ease-[var(--ease-standard)] group-hover:scale-[1.04]">
                    {index + 1}
                  </div>
                  {index < siteContent.process.steps.length - 1 ? (
                    <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(31,123,112,0.22),rgba(125,185,208,0.12),transparent)] lg:block" />
                  ) : null}
                </div>
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
