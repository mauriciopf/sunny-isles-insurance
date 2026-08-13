import type { Metadata } from "next";
import { business } from "./constants";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-default.png",
}: PageMetaOptions): Metadata {
  const url = `${business.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const defaultMetadata = buildMetadata({
  title: "Insurance Agency Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Looking for insurance in Sunny Isles Beach, FL? Sunny Isles Insurance helps with auto, condo, home, flood, renters and business insurance. Request a quote today.",
  path: "/",
});
