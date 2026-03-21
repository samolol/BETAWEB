import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(31,123,112,0.1),rgba(255,255,255,0.9),rgba(203,150,100,0.12))] px-6 py-10 shadow-[var(--shadow-card)] sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-[rgba(203,150,100,0.18)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(31,123,112,0.16)] blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Další krok
              </p>
              <h2 className="font-display mt-4 text-[2.5rem] leading-[1.02] text-[var(--color-text)] sm:text-[3rem]">
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
