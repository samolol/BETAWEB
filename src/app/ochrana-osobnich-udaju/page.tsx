import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site";

const privacy = siteContent.legal.privacy;

export const metadata: Metadata = {
  title: `${privacy.pageTitle} | ${siteContent.brand.name}`,
  description: privacy.pageDescription,
  alternates: {
    canonical: privacy.href,
  },
};

export default function PrivacyPage() {
  const controllerDetails = [
    siteContent.brand.name,
    siteContent.contact.ico,
    siteContent.contact.email,
  ];

  return (
    <main className="flex-1 py-10 sm:py-14">
      <Container className="max-w-5xl">
        <div className="rounded-[2.4rem] border border-[var(--color-line)] bg-white/84 p-6 shadow-[var(--shadow-card)] backdrop-blur sm:p-8 lg:p-10">
          <ButtonLink href="/" variant="ghost">
            {privacy.backLabel}
          </ButtonLink>

          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              GDPR
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight text-[var(--color-text)] sm:text-5xl">
              {privacy.pageTitle}
            </h1>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              {privacy.pageDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.controllerHeading}
              </h2>
              <div className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                <p className="font-medium text-[var(--color-text)]">
                  {controllerDetails[0]}
                </p>
                <p>{controllerDetails[1]}</p>
                <p>
                  Email:{" "}
                  <a
                    className="text-[var(--color-text)] underline decoration-[rgba(31,123,112,0.35)] underline-offset-4 transition hover:text-[var(--color-accent)]"
                    href={`mailto:${siteContent.contact.email}`}
                  >
                    {controllerDetails[2]}
                  </a>
                </p>
              </div>
            </section>

            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.dataHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {privacy.dataItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.purposeHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {privacy.purposeItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.accessHeading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                {privacy.accessItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] md:col-span-2">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.retentionHeading}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {privacy.retentionText}
              </p>
            </section>

            <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] md:col-span-2">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                {privacy.rightsHeading}
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--color-muted)] sm:grid-cols-2">
                {privacy.rightsItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
