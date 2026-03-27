import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShowcaseSection() {
  return (
    <section id="reference" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(25,36,54,0.96),rgba(31,49,65,0.98))] px-6 py-10 shadow-[0_38px_110px_rgba(31,37,49,0.24)] sm:px-8 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,123,112,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(203,150,100,0.24),transparent_24%),radial-gradient(circle_at_70%_24%,rgba(125,185,208,0.12),transparent_18%)]" />

          <div className="relative">
            <Reveal>
              <SectionHeading
                eyebrow="Reference"
                title={siteContent.showcase.title}
                description={siteContent.showcase.description}
                theme="inverse"
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {siteContent.showcase.items.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 90}>
                  <article
                    className={`interactive-card interactive-card-strong surface-glow group rounded-[2rem] border p-6 sm:p-7 ${
                      index === 1
                        ? "border-[rgba(203,150,100,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                        : "border-[rgba(255,255,255,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
                    }`}
                  >
                    <div className="flex h-full flex-col justify-between gap-8">
                      <div>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72 transition duration-300 ease-[var(--ease-standard)] group-hover:border-white/16 group-hover:bg-white/14">
                          Ukázka {index + 1}
                        </span>
                        <h3 className="font-display mt-5 text-[2rem] leading-[1.02] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/70">
                          {item.subtitle}
                        </p>
                      </div>

                      <ButtonLink
                        className="w-full"
                        href={item.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant={index === 1 ? "primary" : "secondary"}
                      >
                        Otevřít ukázku
                      </ButtonLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
