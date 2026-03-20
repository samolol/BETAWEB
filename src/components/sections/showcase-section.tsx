import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShowcaseSection() {
  return (
    <section id="ukazky" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#0f1723_0%,#101c2b_55%,#122233_100%)] px-6 py-10 shadow-[0_40px_120px_rgba(15,23,35,0.26)] sm:px-8 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,118,109,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_28%)]" />

          <div className="relative">
            <SectionHeading
              eyebrow="Ukázky"
              title={siteContent.showcase.title}
              description={siteContent.showcase.description}
              theme="inverse"
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {siteContent.showcase.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(13,23,35,0.82),rgba(16,28,43,0.96))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-7"
                >
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/68">
                        {item.subtitle}
                      </p>
                    </div>

                    <ButtonLink
                      className="w-full"
                      href={item.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Otevřít ukázku
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
