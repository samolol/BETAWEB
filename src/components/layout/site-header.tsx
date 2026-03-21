"use client";

import { useState } from "react";

import { siteContent } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3">
      <Container>
        <div className="rounded-full border border-[var(--color-line)] bg-[color:var(--color-surface-elevated)]/84 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <a
              className="flex items-center gap-3"
              href="#top"
              aria-label="Přejít na začátek stránky"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[linear-gradient(135deg,var(--color-accent),#4d9388)] text-sm font-bold text-white shadow-[0_12px_26px_rgba(31,123,112,0.22)]">
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

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavní navigace">
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
              <ButtonLink className="px-4 py-2.5" href="#kontakt">
                {siteContent.hero.primaryCta}
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/88 shadow-[var(--shadow-soft)] lg:hidden"
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
          </div>

          {isOpen ? (
            <div
              id="mobile-navigation"
              className="mt-4 border-t border-[var(--color-line)] pt-4 lg:hidden"
            >
              <div className="flex flex-col gap-4">
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
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
