import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const badgeLabels = ["Jasně", "Důvěra", "Akce"];

export function BenefitsSection() {
  return (
    <section id="reseni" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <Reveal>
            <div className="glass-panel section-tint-mint rounded-[2.2rem] border border-[var(--color-line)] p-7 shadow-[var(--shadow-soft)] sm:p-8">
              <SectionHeading
                eyebrow="Řešení"
                title={siteContent.benefits.title}
                description={siteContent.benefits.description}
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {siteContent.benefits.items.map((item, index) => (
              <Reveal
                key={item.title}
                delayMs={index * 70}
                rotateDeg={index === 1 ? -1.1 : 1}
              >
                <article
                  className={`interactive-card interactive-card-soft hover-sheen relative rounded-[1.9rem] border p-6 shadow-[var(--shadow-soft)] ${
                    index === 0
                      ? "section-tint-sky border-[rgba(125,185,208,0.18)] sm:translate-y-6"
                      : index === 1
                        ? "section-tint-warm border-[rgba(203,150,100,0.18)]"
                        : "glass-panel border-[var(--color-line)] xl:translate-y-10"
                  }`}
                >
                  <span className="micro-badge mb-4 text-[var(--color-accent)]">
                    {badgeLabels[index] ?? "Výsledek"}
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
