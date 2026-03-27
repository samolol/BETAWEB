import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="problem" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="section-tint-warm rounded-[2.5rem] border border-[var(--color-line)] px-6 py-10 shadow-[var(--shadow-card)] sm:px-8 lg:px-10 lg:py-12">
          <Reveal>
            <SectionHeading
              eyebrow="Problém"
              title={siteContent.services.title}
              description={siteContent.services.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.services.items.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <article
                  className={`interactive-card interactive-card-soft surface-glow group rounded-[1.9rem] border p-7 ${
                    index === 0
                      ? "border-[rgba(31,123,112,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(237,244,242,0.94))] shadow-[var(--shadow-card)]"
                      : index === 2
                        ? "border-[rgba(203,150,100,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,239,228,0.92))] shadow-[var(--shadow-soft)]"
                        : "bg-white/82 shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-[1.2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,248,246,0.95))] text-sm font-semibold text-[var(--color-accent)] shadow-[var(--shadow-soft)] transition duration-300 ease-[var(--ease-standard)] group-hover:scale-[1.06] group-hover:border-[rgba(31,123,112,0.16)]">
                    {item.title.slice(0, 2).toUpperCase()}
                  </div>
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
