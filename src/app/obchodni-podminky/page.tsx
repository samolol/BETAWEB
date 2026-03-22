import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site";

const terms = siteContent.legal.terms;

export const metadata: Metadata = {
  title: `${terms.pageTitle} | ${siteContent.brand.name}`,
  description: terms.pageDescription,
  alternates: {
    canonical: terms.href,
  },
};

export default function TermsPage() {
  const supplierDetails = [
    siteContent.brand.name,
    siteContent.contact.ico,
    `Email: ${siteContent.contact.email}`,
  ];

  return (
    <main className="flex-1 py-10 sm:py-14">
      <Container className="max-w-5xl">
        <div className="rounded-[2.4rem] border border-[var(--color-line)] bg-white/84 p-6 shadow-[var(--shadow-card)] backdrop-blur sm:p-8 lg:p-10">
          <ButtonLink href="/" variant="ghost">
            {terms.backLabel}
          </ButtonLink>

          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {terms.introTitle}
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight text-[var(--color-text)] sm:text-5xl">
              {terms.pageTitle}
            </h1>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              {terms.pageDescription}
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {terms.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
              >
                <h2 className="text-xl font-semibold text-[var(--color-text)]">
                  {section.title}
                </h2>

                {section.showSupplierDetails ? (
                  <div className="mt-5 rounded-[1.4rem] border border-[var(--color-line)] bg-white/70 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                      Dodavatel
                    </p>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                      {supplierDetails.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                ) : null}

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm leading-7 text-[var(--color-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,238,228,0.76))] px-6 py-5 shadow-[var(--shadow-soft)]">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              V {terms.closingPlace}, dne {terms.closingDate}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
