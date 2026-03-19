import type { MetadataRoute } from "next";

import { siteUrlValue } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrlValue,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
