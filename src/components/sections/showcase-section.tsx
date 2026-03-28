import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const showcaseAccents = [
  { color: "text-[#8bd5d0]", label: "01" },
  { color: "text-[#ffd39f]", label: "02" },
  { color: "text-[#b7d7f6]", label: "03" },
];

function AccentIcon({ index }: { index: number }) {
  const accent = showcaseAccents[index] ?? showcaseAccents[0];

  return (
    <div className={`card-icon ${accent.color}`}>
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 8h16v16H8z"
          stroke="currentColor"
          strokeWidth="1.8"
          opacity="0.8"
        />
        <path
          d="M12 13h8M12 18h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">{accent.label}</span>
    </div>
  );
}

function PulseAccent() {
  return (
    <div className="relative h-2.5 w-2.5">
      <span className="absolute inset-0 rounded-full bg-white/90" />
      <span className="absolute inset-0 animate-ping rounded-full bg-white/35" />
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <section id="reference" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="section-shell relative overflow-hidden rounded-[2.6rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(25,36,54,0.96),rgba(31,49,65,0.98))] px-6 py-10 shadow-[0_38px_110px_rgba(31,37,49,0.24)] sm:px-8 lg:px-10 lg:py-12">
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
                <Reveal key={item.title} delayMs={index * 90} rotateDeg={index === 1 ? -1.1 : 1.1}>
                  <article
                    className={`interactive-card interactive-card-strong hover-sheen group relative overflow-hidden rounded-[2rem] border p-6 sm:p-7 ${
                      index === 1
                        ? "interactive-card-premium border-[rgba(203,150,100,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                        : "border-[rgba(255,255,255,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,transparent,rgba(255,255,255,0.03))]" />
                    <div className="relative flex h-full flex-col justify-between gap-8">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <AccentIcon index={index} />
                          <div className="micro-badge border-white/12 bg-white/8 text-white/72">
                            <PulseAccent />
                            <span>Ukázka {index + 1}</span>
                          </div>
                        </div>
                        <h3 className="font-display mt-6 text-[2rem] leading-[1.02] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-[16rem] text-sm leading-7 text-white/70">
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
