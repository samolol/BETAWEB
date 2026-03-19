import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2.2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(15,118,110,0.10),rgba(255,255,255,0.95))] px-6 py-10 shadow-[var(--shadow-card)] sm:px-8 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Další krok
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                {siteContent.finalCta.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {siteContent.finalCta.description}
              </p>
            </div>
            <ButtonLink className="w-full sm:w-auto" href="#kontakt">
              {siteContent.finalCta.buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
