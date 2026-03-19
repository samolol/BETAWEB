"use client";

import { useState } from "react";

import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color:var(--color-surface-elevated)]/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a className="flex items-center gap-3" href="#top" aria-label="Přejít na začátek stránky">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-sm font-bold text-white shadow-[0_12px_24px_rgba(15,118,110,0.18)]">
            W
          </span>
          <span>
            <span className="block text-sm font-semibold text-[var(--color-text)]">
              {siteContent.brand.name}
            </span>
            <span className="block text-xs text-[var(--color-muted)]">
              {siteContent.brand.domain}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#kontakt">{siteContent.hero.primaryCta}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--color-text)] transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--color-text)] transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[var(--color-text)] transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </Container>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-line)] bg-[var(--color-surface-elevated)] lg:hidden"
        >
          <Container className="flex flex-col gap-5 py-5">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                className="text-base font-medium text-[var(--color-text)]"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#kontakt" onClick={() => setIsOpen(false)}>
              {siteContent.hero.primaryCta}
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
