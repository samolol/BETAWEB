# Web na míru

Jednostránkový prezentační web pro `webnamiru.online` postavený na `Next.js`, `TypeScript` a `Tailwind CSS`.

## Spuštění lokálně

V PowerShellu na Windows používejte kvůli lokální politice spouštění raději `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
```

Produkční build:

```bash
npm.cmd run build
```

Web poběží na [http://localhost:3000](http://localhost:3000).

## Co je hotové

- one-page homepage v češtině
- sticky header a anchor navigace
- hero, služby, proč si vybrat mě, postup, reference placeholdery, ceník, o mně, FAQ, kontakt
- validovaný kontaktní formulář napojený na Formspree
- metadata, Open Graph, sitemap, robots a JSON-LD schema
- připraveno pro deploy na Vercel

## Kde co upravit

- texty, ceny, FAQ, reference placeholdery a kontaktní údaje: `src/content/site.ts`
- SEO texty, title, description, keywords, OG texty: `src/content/site.ts`
- schema.org skladba a metadata helper: `src/lib/seo.ts`
- barvy, pozadí a vizuální tokeny: `src/app/globals.css`
- logika formuláře a validační texty: `src/components/contact-form.tsx`
- Formspree endpoint: `.env.local` nebo Vercel env `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Struktura projektu

```text
src/
  app/
    globals.css
    icon.svg
    layout.tsx
    opengraph-image.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    contact-form.tsx
    layout/
      site-footer.tsx
      site-header.tsx
    sections/
      about-section.tsx
      benefits-section.tsx
      contact-section.tsx
      faq-section.tsx
      final-cta-section.tsx
      hero-section.tsx
      pricing-section.tsx
      process-section.tsx
      references-section.tsx
      services-section.tsx
    ui/
      button-link.tsx
      container.tsx
      section-heading.tsx
  content/
    site.ts
  lib/
    contact-schema.ts
    seo.ts
```

## Formspree

1. Ve Formspree vytvořte nový formulář.
2. V detailu formuláře zkopírujte jeho endpoint ve tvaru `https://formspree.io/f/xxxxxx`.
3. Do `.env.local` v kořeni projektu vložte:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

4. Na Vercelu nastavte stejnou proměnnou v `Project Settings -> Environment Variables`.
5. Po změně env proměnných restartujte lokální dev server a na Vercelu proveďte nový deploy.

Formulář zachovává klientskou validaci, loading stav, chybové a úspěšné hlášky. Pokud endpoint chybí, UI zobrazí bezpečnou chybovou zprávu v češtině.
