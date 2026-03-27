import Image from "next/image";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="o-mne" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(340px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal>
            <div className="interactive-card interactive-card-soft hero-sheen relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-white/84 shadow-[var(--shadow-card)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]" />
              <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-[rgba(125,185,208,0.14)] blur-3xl" />
              <div className="relative aspect-[4/4.8]">
                <Image
                  src="/images/about-workspace-placeholder.svg"
                  alt="Placeholder pracovního prostoru freelancera nebo menšího studia."
                  fill
                  sizes="(max-width: 1023px) 100vw, 36vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={90}>
            <div className="section-tint-sky rounded-[2.3rem] border border-[var(--color-line)] p-7 shadow-[var(--shadow-soft)] sm:p-8">
              <SectionHeading
                eyebrow="O mně"
                title={siteContent.about.title}
                description={siteContent.about.paragraphs[0]}
              />
              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)]">
                {siteContent.about.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {siteContent.about.points.map((point, index) => (
                  <Reveal key={point} delayMs={index * 70}>
                    <div className="interactive-card rounded-[1.4rem] border border-[var(--color-line)] bg-white/76 px-4 py-3 text-sm font-medium text-[var(--color-text)] shadow-[var(--shadow-soft)]">
                      {point}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
