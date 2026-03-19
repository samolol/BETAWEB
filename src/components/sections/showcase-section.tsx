import Image from "next/image";

import { siteContent, type ShowcaseItem } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function ShowcasePreview({ item }: { item: ShowcaseItem }) {
  const video = item.video;
  const hasVideo = Boolean(video?.src);

  if (video?.provider === "embed" && hasVideo) {
    return (
      <iframe
        className="h-full w-full border-0"
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  if (video?.provider === "local" && hasVideo) {
    return (
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={video.poster}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={video?.poster || item.previewImage}
      alt={item.previewAlt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority={item.featured}
    />
  );
}

export function ShowcaseSection() {
  return (
    <section id="ukazky" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#0f1723_0%,#101c2b_55%,#122233_100%)] px-6 py-10 shadow-[0_40px_120px_rgba(15,23,35,0.26)] sm:px-8 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,118,109,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_28%)]" />

          <div className="relative">
            <SectionHeading
              eyebrow="Ukázky"
              title={siteContent.showcase.title}
              description={siteContent.showcase.description}
              theme="inverse"
            />

            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {siteContent.showcase.items.map((item) => {
                const detailExternal = isExternalUrl(item.detailUrl);
                const demoExternal = isExternalUrl(item.demoUrl);

                return (
                  <article
                    key={item.title}
                    className={`overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(13,23,35,0.82),rgba(16,28,43,0.96))] shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${
                      item.featured ? "xl:col-span-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[18rem] overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(15,118,110,0.14),rgba(13,23,35,0.06))] sm:min-h-[22rem]">
                      <div className="absolute inset-0">
                        <ShowcasePreview item={item} />
                      </div>
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                        <span className="rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(8,15,25,0.68)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                          {item.subtitle}
                        </span>
                        <span className="rounded-full border border-[rgba(18,118,109,0.3)] bg-[rgba(18,118,109,0.16)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8ff1e7]">
                          {item.video ? "Video slot" : "Preview slot"}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(8,15,25,0.82))]" />
                    </div>

                    <div className="space-y-6 p-6 sm:p-7">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                          Showcase
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/68">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <ButtonLink
                          className="w-full bg-white/8 text-white shadow-none hover:bg-white/12"
                          href={item.detailUrl}
                          target={detailExternal ? "_blank" : undefined}
                          rel={detailExternal ? "noreferrer" : undefined}
                          variant="ghost"
                        >
                          Detail
                        </ButtonLink>
                        <ButtonLink
                          className="w-full"
                          href={item.demoUrl}
                          target={demoExternal ? "_blank" : undefined}
                          rel={demoExternal ? "noreferrer" : undefined}
                        >
                          Otevřít demo
                        </ButtonLink>
                      </div>

                      <ButtonLink
                        className="w-full rounded-[1.4rem] bg-[rgba(255,255,255,0.06)] px-5 py-4 text-white shadow-none hover:bg-[rgba(255,255,255,0.10)]"
                        href="#kontakt"
                        variant="ghost"
                      >
                        {item.ctaText}
                      </ButtonLink>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/62">
              {siteContent.showcase.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
