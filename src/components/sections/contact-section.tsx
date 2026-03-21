import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(239,247,245,0.76))] px-6 py-8 shadow-[var(--shadow-card)] sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(203,150,100,0.14),transparent_42%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,1.15fr)] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Kontakt"
                title={siteContent.contact.title}
                description={siteContent.contact.description}
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/82 p-5 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    E-mail
                  </p>
                  <a
                    className="mt-3 inline-block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                    href={`mailto:${siteContent.contact.email}`}
                  >
                    {siteContent.contact.email}
                  </a>
                </div>

                <div className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/82 p-5 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Telefon
                  </p>
                  <a
                    className="mt-3 inline-block text-lg font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                    href={`tel:${siteContent.contact.phone.replaceAll(" ", "")}`}
                  >
                    {siteContent.contact.phone}
                  </a>
                </div>

                <div className="rounded-[1.7rem] border border-[var(--color-line)] bg-white/82 p-5 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Spolupráce
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    {siteContent.contact.availability}
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
