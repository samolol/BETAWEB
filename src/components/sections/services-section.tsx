import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="problem" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="section-shell section-tint-mint rounded-[2.5rem] border border-[var(--color-line)] px-6 py-10 shadow-[var(--shadow-card)] sm:px-8 lg:px-10 lg:py-12">
          <div className="bg-glow ambient-drift absolute -left-16 top-10 h-48 w-48 rounded-full bg-[rgba(20,184,166,0.12)]" />
          <div className="bg-glow ambient-drift absolute right-6 top-4 h-36 w-36 rounded-full bg-[rgba(56,189,248,0.1)] [animation-delay:-8s]" />
          <Reveal>
            <SectionHeading
              eyebrow="Problém"
              title={siteContent.services.title}
              description={siteContent.services.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.services.items.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80} rotateDeg={index === 1 ? -1.1 : 1}>
                <article
                  className={`interactive-card interactive-card-soft hover-sheen group relative rounded-[1.9rem] border p-7 ${
                    index === 0
                      ? "glass-panel border-[rgba(31,123,112,0.16)] shadow-[var(--shadow-card)]"
                      : index === 2
                        ? "section-tint-warm border-[rgba(203,150,100,0.18)] shadow-[var(--shadow-soft)]"
                        : "section-tint-sky border-[rgba(125,185,208,0.14)] shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <span className="micro-badge mb-6 text-[var(--color-accent)]">
                    {item.title.slice(0, 2).toUpperCase()}
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
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
