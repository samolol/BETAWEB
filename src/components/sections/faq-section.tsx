import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={siteContent.faq.title}
          description={siteContent.faq.description}
        />

        <div className="mt-10 space-y-4">
          {siteContent.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[var(--color-text)]">
                {item.question}
                <span className="text-2xl leading-none text-[var(--color-accent)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
