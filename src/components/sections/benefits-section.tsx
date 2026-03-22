import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section id="reseni" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="rounded-[2.2rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(241,248,246,0.76))] p-7 shadow-[var(--shadow-soft)] sm:p-8">
            <SectionHeading
              eyebrow="Řešení"
              title={siteContent.benefits.title}
              description={siteContent.benefits.description}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {siteContent.benefits.items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.8rem] border p-6 shadow-[var(--shadow-soft)] ${
                  index === 0 || index === 3
                    ? "border-[rgba(203,150,100,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(249,239,228,0.92))]"
                    : "border-[var(--color-line)] bg-white/82"
                }`}
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
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
