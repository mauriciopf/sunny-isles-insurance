import { business } from "./constants";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: business.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${business.url}/resources?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["InsuranceAgency", "LocalBusiness"],
    name: business.name,
    url: business.url,
    telephone: "+1-412-583-2544",
    description:
      "Sunny Isles Insurance is a local insurance agency serving Sunny Isles Beach, Miami-Dade County, South Florida and customers throughout Florida. We help individuals, families and businesses explore auto, condo (HO-6), homeowners, flood, renters and business insurance options.",
    areaServed: [
      { "@type": "City", "name": "Sunny Isles Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Aventura", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "North Miami Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Bal Harbour", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "City", "name": "Miami Beach", "containedInPlace": { "@type": "State", "name": "Florida" } },
      { "@type": "AdministrativeArea", "name": "Miami-Dade County" },
      { "@type": "State", "name": "Florida" },
    ],
    serviceType: [
      "Auto Insurance",
      "Condo Insurance",
      "HO-6 Insurance",
      "Homeowners Insurance",
      "Flood Insurance",
      "Renters Insurance",
      "Business Insurance",
    ],
    knowsAbout: [
      "Auto Insurance",
      "Condo Insurance",
      "HO-6 Condo Insurance",
      "Homeowners Insurance",
      "Flood Insurance",
      "Renters Insurance",
      "Business Insurance",
      "Florida Insurance",
      "South Florida Insurance",
    ],
    // sameAs: [
    //   "https://www.instagram.com/PROFILE",
    //   "https://www.facebook.com/PROFILE",
    //   "https://www.linkedin.com/company/PROFILE",
    // ],
  };
}

export function getFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.url}${item.href}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  path,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${business.url}${path}`,
    author: {
      "@type": "Organization",
      name: business.name,
      url: business.url,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.url,
    },
    dateModified: dateModified ?? new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
  };
}
