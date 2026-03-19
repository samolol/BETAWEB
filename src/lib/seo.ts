import type { Metadata } from "next";

import { siteContent } from "@/content/site";

const siteUrl = `https://${siteContent.brand.domain}`;

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    keywords: siteContent.seo.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: siteContent.brand.name,
      locale: "cs_CZ",
      title: siteContent.seo.ogTitle,
      description: siteContent.seo.ogDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: siteContent.seo.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteContent.seo.ogTitle,
      description: siteContent.seo.ogDescription,
      images: ["/opengraph-image"],
    },
    category: "business",
  };
}

export function buildBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteContent.brand.name,
    url: siteUrl,
    email: siteContent.contact.email,
    telephone: siteContent.contact.phone,
    areaServed: siteContent.brand.location,
    serviceType: [
      "Tvorba webů na míru",
      "Firemní weby",
      "Landing page",
      "Redesign webu",
      "Technická správa webu",
    ],
    description: siteContent.seo.description,
  };
}

export const siteUrlValue = siteUrl;
