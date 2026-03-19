import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.12),transparent_48%),radial-gradient(circle_at_top_right,rgba(13,148,136,0.10),transparent_34%)]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[var(--color-line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] shadow-[var(--shadow-card)]">
              {siteContent.brand.eyebrow}
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              {siteContent.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {siteContent.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#kontakt">{siteContent.hero.primaryCta}</ButtonLink>
              <ButtonLink href="#sluzby" variant="secondary">
                {siteContent.hero.secondaryCta}
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {siteContent.hero.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[linear-gradient(135deg,rgba(15,118,110,0.14),rgba(255,255,255,0.9))]" />
            <div className="relative rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  Strategie
                </span>
                <span className="text-sm text-[var(--color-muted)]">webnamiru.online</span>
              </div>

              <h2 className="mt-8 text-2xl font-semibold text-[var(--color-text)]">
                {siteContent.hero.panelTitle}
              </h2>

              <ul className="mt-6 space-y-4">
                {siteContent.hero.panelItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-soft)] px-4 py-4 text-sm leading-7 text-[var(--color-muted)]"
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-[var(--color-line)] bg-white p-5">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Výsledek pro klienta
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Přehledný web, který zjednoduší rozhodování návštěvníka a povede ho k poptávce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
