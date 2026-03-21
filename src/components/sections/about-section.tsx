import Image from "next/image";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(340px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--color-line)] bg-white/84 shadow-[var(--shadow-card)]">
            <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),transparent)]" />
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

          <div>
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
          </div>
        </div>

        <div className="mt-10 rounded-[2.2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(241,248,246,0.72))] p-7 shadow-[var(--shadow-soft)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Na čem si zakládám
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {siteContent.about.points.map((point, index) => (
              <li
                key={point}
                className={`rounded-[1.5rem] border px-5 py-4 text-sm leading-7 text-[var(--color-text)] shadow-[var(--shadow-soft)] ${
                  index === 1
                    ? "border-[rgba(203,150,100,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,239,228,0.92))]"
                    : "border-[var(--color-line)] bg-white/82"
                }`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
