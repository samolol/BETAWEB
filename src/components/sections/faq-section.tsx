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
          {siteContent.faq.items.map((item, index) => (
            <details
              key={item.question}
              className={`group rounded-[1.7rem] border p-6 shadow-[var(--shadow-soft)] ${
                index === 0 || index === 3
                  ? "border-[rgba(31,123,112,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(239,247,245,0.9))]"
                  : "border-[var(--color-line)] bg-white/82"
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[var(--color-text)]">
                {item.question}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/74 text-xl leading-none text-[var(--color-accent)] transition group-open:rotate-45">
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
