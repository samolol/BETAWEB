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

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {siteContent.pricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.9rem] border p-7 shadow-[var(--shadow-card)] ${
                plan.featured
                  ? "border-[var(--color-accent)] bg-[linear-gradient(180deg,rgba(15,118,110,0.08),rgba(255,255,255,0.98))]"
                  : "border-[var(--color-line)] bg-[var(--color-surface)]"
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

              <p className="mt-8 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
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
                Nechat si připravit nabídku
              </ButtonLink>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
          {siteContent.pricing.note}
        </p>
      </Container>
    </section>
  );
}
