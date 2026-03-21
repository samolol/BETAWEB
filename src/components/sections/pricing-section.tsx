import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  return (
    <section id="cenik" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Ceník"
          title={siteContent.pricing.title}
          description={siteContent.pricing.description}
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3 xl:items-start">
          {siteContent.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-7 ${
                plan.featured
                  ? "xl:-translate-y-3 border-[rgba(31,123,112,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,244,242,0.98))] shadow-[var(--shadow-card)]"
                  : "border-[var(--color-line)] bg-white/82 shadow-[var(--shadow-soft)]"
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
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Doporučeno
                  </span>
                ) : null}
              </div>

              <p className="font-display mt-8 text-[3rem] leading-none text-[var(--color-text)]">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
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
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,238,228,0.76))] px-5 py-5 shadow-[var(--shadow-soft)]">
          <p className="text-sm leading-7 text-[var(--color-muted)]">
            {siteContent.pricing.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
