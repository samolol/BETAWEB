import Image from "next/image";

import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const heroVisuals = [
  {
    src: "/images/hero-browser-placeholder.svg",
    alt: "Placeholder vizuálu moderního business webu v browser mockupu.",
  },
  {
    src: "/images/hero-notebook-placeholder.svg",
    alt: "Placeholder fotografie pracovního stolu nebo notebooku při návrhu webu.",
  },
  {
    src: "/images/hero-lifestyle-placeholder.svg",
    alt: "Placeholder fotografie malého businessu nebo lokální služby.",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-22 pt-12 sm:pb-24 sm:pt-18 lg:pb-30 lg:pt-22"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(31,123,112,0.22),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(203,150,100,0.24),transparent_24%),radial-gradient(circle_at_62%_32%,rgba(125,185,208,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.8),transparent)]" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.96fr)] lg:items-center">
          <Reveal className="max-w-3xl">
            <p className="hero-sheen inline-flex rounded-full border border-[rgba(31,123,112,0.14)] bg-white/84 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] shadow-[var(--shadow-soft)]">
              {siteContent.brand.eyebrow}
            </p>

            <h1 className="font-display mt-7 max-w-5xl text-[3.2rem] leading-[0.92] text-[var(--color-text)] sm:text-[4.35rem] lg:text-[5.15rem]">
              {siteContent.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-[1.15rem]">
              {siteContent.hero.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ButtonLink className="min-w-[12rem]" href="#kontakt">
                {siteContent.hero.primaryCta}
              </ButtonLink>
              <p className="text-sm font-medium text-[var(--color-muted)]">
                {siteContent.hero.offerNote}
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.hero.highlights.map((item, index) => (
                <Reveal key={item} delayMs={index * 80}>
                  <div
                    className={`interactive-card interactive-card-soft rounded-[1.4rem] border px-4 py-3 text-sm leading-6 shadow-[var(--shadow-soft)] ${
                      index === 1
                        ? "section-tint-warm border-[rgba(203,150,100,0.22)]"
                        : "bg-white/80"
                    }`}
                  >
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delayMs={120}>
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-[rgba(31,123,112,0.14)] blur-3xl" />
            <div className="absolute -right-4 bottom-8 h-44 w-44 rounded-full bg-[rgba(203,150,100,0.18)] blur-3xl" />
            <div className="absolute right-[18%] top-[18%] h-36 w-36 rounded-full bg-[rgba(125,185,208,0.14)] blur-3xl" />

            <div className="relative min-h-[34rem] sm:min-h-[39rem]">
              <div className="hero-sheen float-slow interactive-card interactive-card-soft absolute left-0 top-6 z-10 w-[72%] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/86 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,240,231,0.92))] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef8574]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f3bf62]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#64bd8c]" />
                  <span className="ml-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-muted)] shadow-[var(--shadow-soft)]">
                    webnamiru.online
                  </span>
                </div>
                <div className="relative aspect-[5/4.2]">
                  <Image
                    src={heroVisuals[0].src}
                    alt={heroVisuals[0].alt}
                    fill
                    sizes="(max-width: 1023px) 80vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="float-slower interactive-card absolute right-0 top-0 w-[39%] overflow-hidden rounded-[1.85rem] border border-white/60 bg-white/82 shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/4.8]">
                  <Image
                    src={heroVisuals[1].src}
                    alt={heroVisuals[1].alt}
                    fill
                    sizes="(max-width: 1023px) 40vw, 18vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="float-slow interactive-card absolute bottom-0 right-10 w-[46%] overflow-hidden rounded-[1.85rem] border border-white/60 bg-white/82 shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/3.2]">
                  <Image
                    src={heroVisuals[2].src}
                    alt={heroVisuals[2].alt}
                    fill
                    sizes="(max-width: 1023px) 46vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="hero-sheen float-slower interactive-card surface-glow absolute left-[46%] top-[44%] z-20 max-w-[17rem] rounded-[1.6rem] border border-white/60 bg-white/90 px-5 py-4 shadow-[var(--shadow-float)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  První dojem
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-[var(--color-text)]">
                  Přehledný web, který působí klidně, současně a důvěryhodně.
                </p>
              </div>

              <div className="hero-sheen interactive-card absolute left-6 top-[68%] z-20 rounded-full border border-white/60 bg-white/88 px-4 py-2 text-xs font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)]">
                Rychlý, responzivní, na míru
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
