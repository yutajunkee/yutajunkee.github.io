import type { MetadataRoute } from "next";
import { PORTRAITS, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: "2026-09-29",
      changeFrequency: "monthly",
      priority: 1,
      images: PORTRAITS.map((item) => `${SITE_URL}${item.url}`),
    },
  ];
}
