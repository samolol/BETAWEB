import { siteContent } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(360px,1.15fr)] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title={siteContent.contact.title}
              description={siteContent.contact.description}
            />

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
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

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
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

              <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
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
      </Container>
    </section>
  );
}
