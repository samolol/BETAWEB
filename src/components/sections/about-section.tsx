import Image from "next/image";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="o-mne" className="scroll-mt-28 py-20 sm:py-24">
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
      </Container>
    </section>
  );
}
