"use client";

import { useId, useState, type CSSProperties } from "react";

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

const PREVIEW_ITEMS_COUNT = 2;
const PREVIEW_ANSWER_LENGTH = 40;

function createPreview(answer: string) {
  if (answer.length <= PREVIEW_ANSWER_LENGTH) {
    return answer;
  }

  return `${answer.slice(0, PREVIEW_ANSWER_LENGTH).trimEnd()}…`;
}

function FaqCard({
  item,
  preview,
  className,
  style,
}: {
  item: FaqSectionItem;
  preview?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <article
      className={`interactive-card hover-tilt-soft hover-sheen rounded-[1.7rem] border p-6 shadow-[var(--shadow-soft)] ${className ?? ""}`.trim()}
      style={style}
    >
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        {item.question}
      </h3>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
        {preview ? createPreview(item.answer) : item.answer}
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
  const previewItems = items.slice(0, PREVIEW_ITEMS_COUNT);
  const extraItems = items.slice(PREVIEW_ITEMS_COUNT);

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
          {previewItems.map((item, index) => (
            <Reveal
              key={item.question}
              delayMs={index * 70}
              rotateDeg={index % 2 === 0 ? 0.6 : -0.6}
            >
              <FaqCard
                item={item}
                preview
                className={
                  index === 0
                    ? "glass-panel border-[rgba(31,123,112,0.14)]"
                    : "border-[var(--color-line)] bg-white/82"
                }
              />
            </Reveal>
          ))}
        </div>

        <div
          id={contentId}
          className={`overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-[var(--ease-standard)] ${
            expanded
              ? "mt-4 max-h-[240rem] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="space-y-4 pt-1">
            {extraItems.map((item, index) => (
              <article
                key={item.question}
                className={`transition-[opacity,transform] duration-300 ease-[var(--ease-standard)] ${
                  expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: expanded ? `${index * 45}ms` : "0ms" }}
              >
                <FaqCard
                  item={item}
                  className={
                    index === 1
                      ? "glass-panel border-[rgba(31,123,112,0.14)]"
                      : "border-[var(--color-line)] bg-white/82"
                  }
                />
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
      </Container>
    </section>
  );
}
