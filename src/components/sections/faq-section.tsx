"use client";

import { useId, useState } from "react";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const PREVIEW_ITEMS_COUNT = 2;
const PREVIEW_ANSWER_LENGTH = 40;

function createPreview(answer: string) {
  if (answer.length <= PREVIEW_ANSWER_LENGTH) {
    return answer;
  }

  return `${answer.slice(0, PREVIEW_ANSWER_LENGTH).trimEnd()}…`;
}

export function FaqSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();
  const visibleItems = isExpanded
    ? siteContent.faq.items
    : siteContent.faq.items.slice(0, PREVIEW_ITEMS_COUNT);

  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={siteContent.faq.title}
            description={siteContent.faq.description}
          />
        </Reveal>

        <div className="mt-10">
          <div
            id={contentId}
            className={`grid gap-4 transition-[opacity,transform,max-height] duration-300 ease-[var(--ease-standard)] ${
              isExpanded
                ? "max-h-[240rem] opacity-100 translate-y-0"
                : "max-h-[30rem] opacity-100 translate-y-0"
            }`}
          >
            {visibleItems.map((item, index) => (
              <Reveal
                key={item.question}
                delayMs={index * 70}
                rotateDeg={index % 2 === 0 ? 0.6 : -0.6}
              >
                <article
                  className={`interactive-card hover-tilt-soft hover-sheen rounded-[1.7rem] border p-6 shadow-[var(--shadow-soft)] ${
                    index === 0 || (isExpanded && index === 3)
                      ? "glass-panel border-[rgba(31,123,112,0.14)]"
                      : "border-[var(--color-line)] bg-white/82"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {item.question}
                  </h3>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--color-muted)]">
                    {isExpanded ? item.answer : createPreview(item.answer)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={120}>
            <div className="mt-6 flex justify-start">
              <button
                type="button"
                className="hover-sheen inline-flex items-center justify-center rounded-full border border-[rgba(31,123,112,0.18)] bg-white/78 px-5 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-[rgba(31,123,112,0.24)] hover:bg-[linear-gradient(135deg,rgba(240,253,250,0.9),rgba(240,249,255,0.92))] hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                aria-expanded={isExpanded}
                aria-controls={contentId}
                onClick={() => setIsExpanded((value) => !value)}
              >
                {isExpanded ? "Skrýt FAQ" : "Zobrazit všechny"}
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
