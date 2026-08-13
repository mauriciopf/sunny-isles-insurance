import type { MetadataRoute } from "next";
import { business } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Local landing page — high SEO priority
    { url: `${base}/sunny-isles-beach-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },

    // Insurance service pages
    { url: `${base}/condo-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/auto-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/homeowners-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/flood-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/renters-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business-insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Company pages
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Resources hub
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },

    // Resource articles
    { url: `${base}/resources/condo-insurance-florida`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/resources/flood-insurance-basics`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources/florida-auto-pip`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes;
}
