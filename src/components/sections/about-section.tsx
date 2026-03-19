import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
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

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Na čem si zakládám
            </p>
            <ul className="mt-6 space-y-4">
              {siteContent.about.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-soft)] px-5 py-4 text-sm leading-7 text-[var(--color-text)]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
