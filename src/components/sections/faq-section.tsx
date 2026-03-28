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

export function FaqSection({
  title,
  items,
  description,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();
  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [answerHeights, setAnswerHeights] = useState<number[]>([]);

  useEffect(() => {
    function updateHeights() {
      setAnswerHeights(
        items.map((_, index) => answerRefs.current[index]?.scrollHeight ?? 0),
      );
    }

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
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
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const triggerId = `${baseId}-trigger-${index}`;

            return (
              <Reveal
                key={item.question}
                delayMs={index * 45}
                rotateDeg={index % 2 === 0 ? 0.5 : -0.5}
              >
                <article
                  className={`interactive-card hover-tilt-soft hover-sheen rounded-[1.7rem] border shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[var(--ease-standard)] ${
                    index === 0 || index === 3
                      ? "glass-panel border-[rgba(31,123,112,0.14)]"
                      : "border-[var(--color-line)] bg-white/82"
                  }`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) => (current === index ? null : index))
                      }
                    >
                      <span>{item.question}</span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/74 text-xl leading-none text-[var(--color-accent)] transition-[transform,background-color,border-color] duration-300 ease-[var(--ease-standard)] ${
                          isOpen
                            ? "rotate-45 border-[rgba(31,123,112,0.2)] bg-[rgba(240,253,250,0.92)]"
                            : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="overflow-hidden transition-[max-height] duration-300 ease-[var(--ease-standard)]"
                    style={{ maxHeight: isOpen ? `${answerHeights[index] ?? 0}px` : "0px" }}
                  >
                    <div
                      ref={(node) => {
                        answerRefs.current[index] = node;
                      }}
                      className={`px-6 pb-5 transition-[opacity,transform] duration-300 ease-[var(--ease-standard)] ${
                        isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                      }`}
                    >
                      <p className="border-t border-[var(--color-line)] pt-4 text-sm leading-7 text-[var(--color-muted)]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
