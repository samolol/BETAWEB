import Link from "next/link";

import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="py-8">
      <Container>
        <div className="section-tint-sky rounded-[1.9rem] border border-[var(--color-line)] px-5 py-5 shadow-[var(--shadow-soft)] backdrop-blur transition-[box-shadow,border-color] duration-300 ease-[var(--ease-standard)] hover:border-[rgba(31,123,112,0.12)] hover:shadow-[var(--shadow-float)] sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-[var(--color-text)]">{siteContent.footer.claim}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{siteContent.footer.note}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                className="interactive-link text-sm font-medium text-[var(--color-muted)]"
                href={siteContent.legal.privacy.href}
              >
                {siteContent.legal.privacy.linkLabel}
              </Link>
              <Link
                className="interactive-link text-sm font-medium text-[var(--color-muted)]"
                href={siteContent.legal.terms.href}
              >
                {siteContent.legal.terms.linkLabel}
              </Link>
            </div>
          </div>
          <div className="mt-4 text-sm text-[var(--color-muted)] sm:mt-0 sm:text-right">
            <p>
              © {new Date().getFullYear()} {siteContent.brand.name}
            </p>
            <p>{siteContent.brand.domain}</p>
            <p>{siteContent.contact.ico}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
