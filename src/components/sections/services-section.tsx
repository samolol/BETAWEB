import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="sluzby" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Služby"
          title={siteContent.services.title}
          description={siteContent.services.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-line-strong)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-surface-soft)] text-sm font-semibold text-[var(--color-accent)]">
                {item.title.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
