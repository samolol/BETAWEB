import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="problem" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(246,238,228,0.82))] px-6 py-10 shadow-[var(--shadow-card)] sm:px-8 lg:px-10 lg:py-12">
          <SectionHeading
            eyebrow="Problém"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.services.items.map((item, index) => (
              <article
                key={item.title}
                className={`group rounded-[1.9rem] border p-7 transition duration-200 ${
                  index === 0 || index === 4
                    ? "border-[rgba(31,123,112,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(237,244,242,0.94))] shadow-[var(--shadow-card)] hover:-translate-y-1"
                    : "border-[var(--color-line)] bg-white/82 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-[1.2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,248,246,0.95))] text-sm font-semibold text-[var(--color-accent)] shadow-[var(--shadow-soft)]">
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
        </div>
      </Container>
    </section>
  );
}
