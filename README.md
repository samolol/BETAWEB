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
- validovaný kontaktní formulář s lokálním API handlerem
- metadata, Open Graph, sitemap, robots a JSON-LD schema
- připraveno pro deploy na Vercel

## Kde co upravit

- texty, ceny, FAQ, reference placeholdery a kontaktní údaje: `src/content/site.ts`
- SEO texty, title, description, keywords, OG texty: `src/content/site.ts`
- schema.org skladba a metadata helper: `src/lib/seo.ts`
- barvy, pozadí a vizuální tokeny: `src/app/globals.css`
- logika formuláře a validační texty: `src/components/contact-form.tsx`
- serverové zpracování formuláře: `src/app/api/contact/route.ts`

## Struktura projektu

```text
src/
  app/
    api/contact/route.ts
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
    contact.ts
    seo.ts
```

## Poznámka k formuláři

Formulář zatím nic neposílá e-mailem. Po validním odeslání:

- proběhne klientská i serverová validace
- data se odešlou na `POST /api/contact`
- server payload zaloguje
- UI zobrazí úspěch nebo chybu

Pro napojení na e-mailovou službu stačí doplnit implementaci v `src/lib/contact.ts`.
