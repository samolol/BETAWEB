import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section id="reseni" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <Reveal>
            <div className="section-tint-mint rounded-[2.2rem] border border-[var(--color-line)] p-7 shadow-[var(--shadow-soft)] sm:p-8">
              <SectionHeading
                eyebrow="Řešení"
                title={siteContent.benefits.title}
                description={siteContent.benefits.description}
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {siteContent.benefits.items.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 70}>
                <article
                  className={`interactive-card interactive-card-soft surface-glow rounded-[1.8rem] border p-6 shadow-[var(--shadow-soft)] ${
                    index === 0
                      ? "section-tint-sky border-[rgba(125,185,208,0.18)]"
                      : index === 1
                        ? "section-tint-warm border-[rgba(203,150,100,0.18)]"
                        : "bg-white/82"
                  }`}
                >
                  <span className="mb-4 inline-flex rounded-full border border-[rgba(31,123,112,0.14)] bg-white/76 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Výsledek
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
