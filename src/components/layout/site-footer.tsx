import { siteContent } from "@/content/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white/80 py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[var(--color-text)]">{siteContent.footer.claim}</p>
          <p className="mt-1">{siteContent.footer.note}</p>
        </div>
        <div className="text-sm">
          <p>
            © {new Date().getFullYear()} {siteContent.brand.name}
          </p>
          <p>{siteContent.brand.domain}</p>
          <p>{siteContent.contact.ico}</p>
        </div>
      </Container>
    </footer>
  );
}
