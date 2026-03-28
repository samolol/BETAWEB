"use client";

import Image from "next/image";
import { type CSSProperties, useRef } from "react";

import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const heroVisuals = [
  {
    src: "/images/hero-browser-placeholder.svg",
    alt: "Placeholder vizuálu moderního business webu v browser mockupu.",
  },
  {
    src: "/images/hero-notebook-placeholder.svg",
    alt: "Placeholder fotografie pracovního stolu nebo notebooku při návrhu webu.",
  },
  {
    src: "/images/hero-lifestyle-placeholder.svg",
    alt: "Placeholder fotografie malého businessu nebo lokální služby.",
  },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M12 2 13.8 8.2 20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 40 12" className="h-3 w-10" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4" fill="currentColor" />
      <circle cx="20" cy="6" r="4" fill="currentColor" opacity="0.65" />
      <circle cx="34" cy="6" r="4" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function WindowLines() {
  return (
    <svg viewBox="0 0 72 44" className="h-8 w-14" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="69" height="41" rx="10" stroke="currentColor" opacity="0.28" />
      <rect x="10" y="12" width="24" height="4" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="10" y="21" width="48" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="10" y="28" width="36" height="3" rx="1.5" fill="currentColor" opacity="0.28" />
    </svg>
  );
}

export function HeroSection() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = stageRef.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    node.style.setProperty("--parallax-x", `${x * 18}px`);
    node.style.setProperty("--parallax-y", `${y * 18}px`);
  }

  function resetParallax() {
    const node = stageRef.current;

    if (!node) {
      return;
    }

    node.style.setProperty("--parallax-x", "0px");
    node.style.setProperty("--parallax-y", "0px");
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-22 pt-12 sm:pb-24 sm:pt-18 lg:pb-30 lg:pt-22"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_left,rgba(31,123,112,0.24),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(203,150,100,0.28),transparent_24%),radial-gradient(circle_at_62%_32%,rgba(125,185,208,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.82),transparent)]" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(440px,1fr)] lg:items-center">
          <Reveal className="max-w-3xl" rotateDeg={-1.2}>
            <p className="hero-sheen inline-flex rounded-full border border-[rgba(31,123,112,0.14)] bg-white/84 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] shadow-[var(--shadow-soft)]">
              {siteContent.brand.eyebrow}
            </p>

            <h1 className="font-display mt-7 max-w-5xl text-[3.25rem] leading-[0.9] text-[var(--color-text)] sm:text-[4.45rem] lg:text-[5.35rem]">
              {siteContent.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-[1.15rem]">
              {siteContent.hero.description}
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ButtonLink className="min-w-[12rem]" href="#kontakt">
                {siteContent.hero.primaryCta}
              </ButtonLink>
              <p className="text-sm font-medium text-[var(--color-muted)]">
                {siteContent.hero.offerNote}
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.hero.highlights.map((item, index) => (
                <Reveal key={item} delayMs={index * 70} rotateDeg={index === 1 ? -1 : 1}>
                  <div
                    className={`interactive-card interactive-card-soft hover-sheen rounded-[1.4rem] border px-4 py-3 text-sm leading-6 shadow-[var(--shadow-soft)] ${
                      index === 1
                        ? "section-tint-warm border-[rgba(203,150,100,0.22)]"
                        : "glass-panel"
                    }`}
                  >
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delayMs={140} rotateDeg={1.4}>
            <div
              ref={stageRef}
              className="parallax-stage relative min-h-[35rem] sm:min-h-[40rem]"
              onPointerMove={handlePointerMove}
              onPointerLeave={resetParallax}
            >
              <div className="accent-orb -left-8 top-12 h-44 w-44 bg-[rgba(31,123,112,0.18)]" />
              <div className="accent-orb -right-2 bottom-10 h-48 w-48 bg-[rgba(203,150,100,0.18)]" />
              <div className="accent-orb right-[20%] top-[16%] h-36 w-36 bg-[rgba(125,185,208,0.16)]" />

              <div
                className="parallax-layer hero-sheen interactive-card interactive-card-premium absolute left-0 top-7 z-20 w-[72%] overflow-hidden rounded-[2.3rem] border border-white/60 bg-white/88 shadow-[var(--shadow-card)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "0.95",
                    ["--parallax-strength-y" as string]: "0.95",
                  } as CSSProperties
                }
              >
                <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,240,231,0.94))] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef8574]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f3bf62]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#64bd8c]" />
                  <span className="ml-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-muted)] shadow-[var(--shadow-soft)]">
                    webnamiru.online
                  </span>
                </div>
                <div className="relative aspect-[5/4.25]">
                  <Image
                    src={heroVisuals[0].src}
                    alt={heroVisuals[0].alt}
                    fill
                    sizes="(max-width: 1023px) 80vw, 31vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div
                className="parallax-layer interactive-card absolute right-1 top-0 z-10 w-[38%] overflow-hidden rounded-[1.95rem] border border-white/60 bg-white/84 shadow-[var(--shadow-soft)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "-0.52",
                    ["--parallax-strength-y" as string]: "-0.58",
                    ["--parallax-rotate" as string]: "-1.2deg",
                  } as CSSProperties
                }
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={heroVisuals[1].src}
                    alt={heroVisuals[1].alt}
                    fill
                    sizes="(max-width: 1023px) 40vw, 18vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className="parallax-layer interactive-card absolute bottom-0 right-12 z-10 w-[48%] overflow-hidden rounded-[1.95rem] border border-white/60 bg-white/84 shadow-[var(--shadow-soft)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "-0.34",
                    ["--parallax-strength-y" as string]: "0.75",
                    ["--parallax-rotate" as string]: "1.1deg",
                  } as CSSProperties
                }
              >
                <div className="relative aspect-[4/3.1]">
                  <Image
                    src={heroVisuals[2].src}
                    alt={heroVisuals[2].alt}
                    fill
                    sizes="(max-width: 1023px) 46vw, 21vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className="parallax-layer glass-panel hover-sheen interactive-card absolute left-[47%] top-[41%] z-30 max-w-[17rem] rounded-[1.7rem] border border-white/60 px-5 py-4 shadow-[var(--shadow-float)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "1.15",
                    ["--parallax-strength-y" as string]: "-0.85",
                  } as CSSProperties
                }
              >
                <div className="flex items-center gap-2 text-[var(--color-accent)]">
                  <SparkIcon />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    První dojem
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-[var(--color-text)]">
                  Přehledný web, který působí klidně, současně a důvěryhodně.
                </p>
              </div>

              <div
                className="parallax-layer micro-badge absolute left-5 top-[70%] z-30 text-[var(--color-text)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "0.82",
                    ["--parallax-strength-y" as string]: "0.55",
                  } as CSSProperties
                }
              >
                <DotIcon />
              </div>

              <div
                className="parallax-layer micro-badge absolute right-[8%] top-[24%] z-30 text-[var(--color-accent)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "-0.95",
                    ["--parallax-strength-y" as string]: "-0.75",
                  } as CSSProperties
                }
              >
                <WindowLines />
              </div>

              <div
                className="parallax-layer micro-badge absolute right-[22%] bottom-[8%] z-30 text-[var(--color-warm)]"
                style={
                  {
                    ["--parallax-strength-x" as string]: "-0.6",
                    ["--parallax-strength-y" as string]: "0.62",
                  } as CSSProperties
                }
              >
                <SparkIcon />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
