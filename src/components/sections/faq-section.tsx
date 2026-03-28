"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export type FaqSectionItem = {
  question: string;
  answer: string;
};

export type FaqSectionProps = {
  title: string;
  items: FaqSectionItem[];
  description?: string;
};

const VISIBLE_ITEMS_COUNT = 2;

function FaqCard({
  item,
  highlighted = false,
}: {
  item: FaqSectionItem;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`interactive-card hover-tilt-soft hover-sheen rounded-[1.7rem] border p-6 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[var(--ease-standard)] ${
        highlighted
          ? "glass-panel border-[rgba(31,123,112,0.14)]"
          : "border-[var(--color-line)] bg-white/82"
      }`}
    >
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        {item.question}
      </h3>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
        {item.answer}
      </p>
    </article>
  );
}

export function FaqSection({
  title,
  items,
  description,
}: FaqSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const hiddenContentRef = useRef<HTMLDivElement | null>(null);
  const [hiddenHeight, setHiddenHeight] = useState(0);

  const visibleItems = items.slice(0, VISIBLE_ITEMS_COUNT);
  const hiddenItems = items.slice(VISIBLE_ITEMS_COUNT);

  useEffect(() => {
    function updateHeight() {
      setHiddenHeight(hiddenContentRef.current?.scrollHeight ?? 0);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [items]);

  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description={description ?? ""}
          />
        </Reveal>

        <div className="mt-10 space-y-4">
          {visibleItems.map((item, index) => (
            <Reveal
              key={item.question}
              delayMs={index * 70}
              rotateDeg={index % 2 === 0 ? 0.6 : -0.6}
            >
              <FaqCard item={item} highlighted={index === 0} />
            </Reveal>
          ))}
        </div>

        {hiddenItems.length > 0 ? (
          <>
            <div
              id={contentId}
              className="overflow-hidden transition-[max-height] duration-300 ease-[var(--ease-standard)]"
              style={{ maxHeight: expanded ? `${hiddenHeight}px` : "0px" }}
              aria-hidden={!expanded}
            >
              <div
                ref={hiddenContentRef}
                className={`space-y-4 pt-4 transition-[opacity,transform] duration-300 ease-[var(--ease-standard)] ${
                  expanded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
              >
                {hiddenItems.map((item, index) => (
                  <article
                    key={item.question}
                    className="transition-[opacity,transform] duration-300 ease-[var(--ease-standard)]"
                    style={{
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0)" : "translateY(10px)",
                      transitionDelay: expanded ? `${index * 45}ms` : "0ms",
                    }}
                  >
                    <FaqCard item={item} highlighted={index === 1} />
                  </article>
                ))}
              </div>
            </div>

            <Reveal delayMs={120}>
              <div className="mt-6 flex justify-start">
                <button
                  type="button"
                  className="hover-sheen inline-flex items-center justify-center rounded-full border border-[rgba(31,123,112,0.18)] bg-white/78 px-5 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[rgba(31,123,112,0.24)] hover:bg-[linear-gradient(135deg,rgba(240,253,250,0.9),rgba(240,249,255,0.92))] hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                  aria-expanded={expanded}
                  aria-controls={contentId}
                  onClick={() => setExpanded((value) => !value)}
                >
                  {expanded ? "Skrýt FAQ" : "Rozbalit FAQ"}
                </button>
              </div>
            </Reveal>
          </>
        ) : null}
      </Container>
    </section>
  );
}
