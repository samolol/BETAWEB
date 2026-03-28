import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  return (
    <section id="cenik" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ceník"
            title={siteContent.pricing.title}
            description={siteContent.pricing.description}
          />
        </Reveal>

        <div className="section-shell section-tint-neutral relative mt-10 rounded-[2.6rem] border border-[var(--color-line)] px-5 py-6 shadow-[var(--shadow-card)] sm:px-6 lg:px-8">
          <div className="bg-glow ambient-drift absolute -left-14 top-10 h-40 w-40 rounded-full bg-[rgba(20,184,166,0.12)]" />
          <div className="bg-glow ambient-drift absolute right-0 top-0 h-32 w-32 rounded-full bg-[rgba(56,189,248,0.1)] [animation-delay:-10s]" />
          <div className="mt-2 grid gap-5 xl:grid-cols-3 xl:items-start">
          {siteContent.pricing.plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delayMs={index * 80}
              rotateDeg={plan.featured ? -1.2 : 1}
            >
              <article
                className={`interactive-card hover-sheen relative rounded-[2rem] border p-7 ${
                  plan.featured
                    ? "interactive-card-premium glass-panel xl:-translate-y-5 border-[rgba(31,123,112,0.22)] shadow-[var(--shadow-card)]"
                    : index === 2
                      ? "section-tint-sky border-[rgba(125,185,208,0.16)] shadow-[var(--shadow-soft)]"
                      : "glass-panel border-[var(--color-line)] shadow-[var(--shadow-soft)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                      {plan.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="micro-badge text-[var(--color-accent)]">Doporučeno</span>
                  ) : null}
                </div>

                <p className="font-display mt-8 text-[3.15rem] leading-none tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.45rem]">
                  {plan.price}
                </p>

                <ul className="mt-8 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_0_6px_rgba(31,123,112,0.08)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  className="mt-8 w-full"
                  href="#kontakt"
                  variant={plan.featured ? "primary" : "secondary"}
                >
                  Nezávazně poptat
                </ButtonLink>
              </article>
            </Reveal>
          ))}
          </div>
        </div>

        <Reveal delayMs={90}>
          <div className="glass-panel section-tint-warm mt-8 rounded-[2rem] border border-[var(--color-line)] px-5 py-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              {siteContent.pricing.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
