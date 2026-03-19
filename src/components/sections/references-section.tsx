import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReferencesSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Reference"
          title={siteContent.references.title}
          description={siteContent.references.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.references.items.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
            >
              <div className="flex min-h-52 items-end bg-[linear-gradient(145deg,rgba(15,118,110,0.12),rgba(17,24,39,0.02))] p-6">
                <span className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Ukázka {index + 1}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
          {siteContent.references.note}
        </p>
      </Container>
    </section>
  );
}
