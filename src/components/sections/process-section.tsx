import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section id="spoluprace" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Spolupráce"
          title={siteContent.process.title}
          description={siteContent.process.description}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {siteContent.process.steps.map((step, index) => (
            <article
              key={step.title}
              className={`relative rounded-[1.85rem] border p-6 sm:p-7 ${
                index === 2
                  ? "border-[rgba(31,123,112,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(237,244,242,0.94))] shadow-[var(--shadow-card)]"
                  : "border-[var(--color-line)] bg-white/82 shadow-[var(--shadow-soft)]"
              }`}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(31,123,112,0.12)] bg-[rgba(31,123,112,0.1)] text-base font-semibold text-[var(--color-accent)]">
                  {index + 1}
                </div>
                {index < siteContent.process.steps.length - 1 ? (
                  <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(31,123,112,0.18),transparent)] lg:block" />
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
