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

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {siteContent.process.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-base font-semibold text-white">
                {index + 1}
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
