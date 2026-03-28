import Image from "next/image";

import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="section-shell glass-panel section-tint-warm relative overflow-hidden rounded-[2.7rem] border border-[var(--color-line)] px-6 py-8 shadow-[var(--shadow-card)] sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(203,150,100,0.16),transparent_42%)]" />
          <div className="accent-orb ambient-drift left-[8%] top-[10%] h-28 w-28 bg-[rgba(125,185,208,0.16)]" />
          <div className="accent-orb ambient-drift right-[16%] bottom-[14%] h-24 w-24 bg-[rgba(203,150,100,0.16)] [animation-delay:-8s]" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(380px,1.18fr)] lg:items-start">
            <Reveal rotateDeg={-1}>
              <div>
                <SectionHeading
                  eyebrow="Kontakt"
                  title={siteContent.contact.title}
                  description={siteContent.contact.description}
                />

                <div className="mt-8 space-y-4">
                  <div className="glass-panel hover-sheen interactive-card interactive-card-soft rounded-[1.8rem] border border-[var(--color-line)] p-5 shadow-[var(--shadow-soft)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      E-mail
                    </p>
                    <a
                      className="interactive-link mt-3 inline-block text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
                      href={`mailto:${siteContent.contact.email}`}
                    >
                      {siteContent.contact.email}
                    </a>
                  </div>

                  <div className="glass-panel hover-sheen interactive-card interactive-card-soft rounded-[1.8rem] border border-[var(--color-line)] p-5 shadow-[var(--shadow-soft)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      Telefon
                    </p>
                    <a
                      className="interactive-link mt-3 inline-block text-lg font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)]"
                      href={`tel:${siteContent.contact.phone.replaceAll(" ", "")}`}
                    >
                      {siteContent.contact.phone}
                    </a>
                  </div>

                  <div className="glass-panel hover-sheen interactive-card interactive-card-soft rounded-[1.8rem] border border-[var(--color-line)] p-5 shadow-[var(--shadow-soft)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      Spolupráce
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                      {siteContent.contact.availability}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120} rotateDeg={1}>
              <div className="relative">
                <div className="pointer-events-none absolute -right-6 -top-8 hidden w-32 lg:block">
                  <Image
                    src="/images/contact-mascot.svg"
                    alt="Dekorativní ilustrace vedle kontaktního formuláře."
                    width={320}
                    height={320}
                    className="float-slower h-auto w-full drop-shadow-[0_24px_48px_rgba(63,47,31,0.16)]"
                  />
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
