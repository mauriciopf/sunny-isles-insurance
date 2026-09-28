import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Resources | Sunny Isles Beach Insurance Guides",
  description:
    "Educational guides and answers to common Florida insurance questions — additional living expenses vs NFIP’s hotel gap, September 2026 homeowners rate cuts, auto comprehensive vs king-tide flooding, NFIP vs private flood, special assessments vs HO-6 loss assessment, Collins Avenue business insurance, Citizens’ 2026 flood mandate, renters HO-4 and contents flood, wind mitigation credits, Citizens takeout letters, 2026 condo costs, auto options, hurricane vs. flood coverage, HO-6, auto PIP, and more. From Sunny Isles Insurance in Sunny Isles Beach.",
  path: "/resources",
});

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
];

const articles = [
  {
    slug: "additional-living-expenses-sunny-isles-beach-2026",
    title:
      "Additional Living Expenses in Sunny Isles Beach in 2026: Who Pays If Wind or Flood Keeps You Out",
    description:
      "A 330-day hurricane drought is still a Coverage D conversation. How Sunny Isles Beach owners should read HO-3 and HO-6 loss of use versus NFIP’s hotel gap during September–October king tides.",
    category: "Homeowners Insurance",
    readTime: "9 min read",
  },
  {
    slug: "homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
    title:
      "Florida Homeowners Insurance Rate Cuts in 2026: What Sunny Isles Beach Owners Should Shop at Renewal",
    description:
      "OIR approved four more HO decreases on September 22 for 62,000 policies. Gonzalo is a Cabo Verde fish storm. How Sunny Isles Beach owners should read statewide averages against HVHZ, flood, and a Citizens renewal.",
    category: "Homeowners Insurance",
    readTime: "9 min read",
  },
  {
    slug: "auto-insurance-flood-king-tide-sunny-isles-beach-2026",
    title:
      "Does Auto Insurance Cover King Tide Flooding in Sunny Isles Beach in 2026?",
    description:
      "Tropical Storm Fay is a distant fish storm. King tides start September 24. How Sunny Isles Beach drivers should read comprehensive vs PIP, garage flooding, and why NFIP never covers the car.",
    category: "Auto Insurance",
    readTime: "9 min read",
  },
  {
    slug: "nfip-vs-private-flood-sunny-isles-beach-2026",
    title:
      "NFIP vs Private Flood Insurance in Sunny Isles Beach in 2026: $250k Caps, Waiting Periods, and King Tides",
    description:
      "A record-quiet Atlantic week is still a 30-day NFIP wait. How Sunny Isles Beach owners should compare the $250k/$100k federal caps, private and supplemental flood, additional living expenses, and the September 24 king-tide window.",
    category: "Flood Insurance",
    readTime: "9 min read",
  },
  {
    slug: "special-assessments-ho6-sunny-isles-beach-2026",
    title:
      "Special Assessments vs HO-6 Loss Assessment Coverage in Sunny Isles Beach in 2026",
    description:
      "A record-quiet Atlantic peak is the window to size the HO-6 limit that pays a storm assessment. How Sunny Isles Beach owners should read a 2026 letter — SIRS and 25-year recertification vs. the $2,000 statutory floor.",
    category: "Condo Insurance",
    readTime: "9 min read",
  },
  {
    slug: "collins-avenue-business-insurance-sunny-isles-beach-2026",
    title:
      "Business Insurance on Collins Avenue in Sunny Isles Beach in 2026: BOP, Flood, and Liquor Liability",
    description:
      "A record-quiet Atlantic peak does not cover a ground-floor storefront. What a BOP includes — and why flood, liquor liability, and workers’ compensation sit outside it — for Collins Avenue businesses in ZIP 33160.",
    category: "Business Insurance",
    readTime: "9 min read",
  },
  {
    slug: "citizens-flood-mandate-sunny-isles-beach-2026",
    title:
      "Citizens Flood Insurance Mandate in Sunny Isles Beach in 2026: The $400k Rule and the 2027 Deadline",
    description:
      "Citizens already requires flood for $400k+ Coverage A homes — including Zone X. HO-6 condos stay exempt. How Sunny Isles Beach homeowners should use a record-quiet 2026 peak, NFIP’s Dec. 11 extension, and the January 1, 2027 remaining phase-in.",
    category: "Flood Insurance",
    readTime: "9 min read",
  },
  {
    slug: "renters-insurance-sunny-isles-beach-2026",
    title:
      "Renters Insurance in Sunny Isles Beach in 2026: HO-4, Contents Flood, and Hurricane Deductibles",
    description:
      "Peak hurricane season is quiet so far in 2026 — which is the NFIP waiting-period window. How Sunny Isles Beach tenants should read HO-4 coverage, contents-only flood, hurricane deductibles, and lease additional-insured rules.",
    category: "Renters Insurance",
    readTime: "9 min read",
  },
  {
    slug: "wind-mitigation-credits-sunny-isles-beach-2026",
    title:
      "Wind Mitigation Credits in Sunny Isles Beach in 2026: New Form, Roof Age, and HVHZ Rules",
    description:
      "Florida’s OIR-B1-1802 form changed April 1, 2026, and Citizens revised HO-4/HO-6 credit tables July 1. How Miami-Dade HVHZ homes and Collins Avenue condos should document inspections — and what the 15-year roof-age rule still does.",
    category: "Homeowners Insurance",
    readTime: "9 min read",
  },
  {
    slug: "citizens-takeout-offer-sunny-isles-beach-2026",
    title: "Got a Citizens Takeout Letter in Sunny Isles Beach? What It Means for Your HO-6 in 2026",
    description:
      "The October 20, 2026 Citizens assumption is next — choice deadline October 5. How the 20% takeout rule works for coastal condo owners, and what to compare besides the estimated premium.",
    category: "Condo Insurance",
    readTime: "9 min read",
  },
  {
    slug: "why-florida-condo-insurance-is-getting-more-expensive",
    title: "Why Florida Condo Insurance Is Getting More Expensive",
    description:
      "Citizens cut many personal-line rates in 2026, but condo association master policies went up. How Sunny Isles Beach owners should read HO-6 relief, July 1 commercial-residential increases, and SIRS assessments.",
    category: "Condo Insurance",
    readTime: "9 min read",
  },
  {
    slug: "best-auto-insurance-sunny-isles-beach-2026",
    title: "Best Auto Insurance Options in Sunny Isles Beach in 2026",
    description:
      "Florida auto rates are falling in 2026, but PIP is still required. A Sunny Isles Beach guide to comparing coverage — not just the headline premium — for Miami-Dade drivers.",
    category: "Auto Insurance",
    readTime: "8 min read",
  },
  {
    slug: "hurricane-damage-home-insurance-sunny-isles",
    title: "Does Home Insurance Cover Hurricane Damage in Sunny Isles Beach?",
    description:
      "Wind, storm surge, and flood are often three different insurance conversations. A 2026 guide for Sunny Isles Beach homeowners and condo owners on hurricane deductibles, Miami-Dade's HVHZ, and what to review before peak season.",
    category: "Homeowners Insurance",
    readTime: "8 min read",
  },
  {
    slug: "condo-insurance-florida",
    title: "What Does Condo Insurance Cover in Florida?",
    description:
      "Florida condominium owners face a unique coverage situation — your unit, belongings, and liability may not be covered by your association's master policy. Here's what to understand about HO-6 insurance in Sunny Isles Beach and across Florida.",
    category: "Condo Insurance",
    readTime: "6 min read",
  },
  {
    slug: "flood-insurance-basics",
    title: "Does Homeowners Insurance Cover Flooding in Florida?",
    description:
      "A common misconception. Standard homeowners and condo policies generally do not cover flooding from external water sources. Here's what South Florida property owners need to know about flood insurance.",
    category: "Flood Insurance",
    readTime: "5 min read",
  },
  {
    slug: "florida-auto-pip",
    title: "Understanding Personal Injury Protection (PIP) in Florida",
    description:
      "Florida operates under a no-fault insurance system, making PIP coverage an important part of auto insurance for Sunny Isles Beach and South Florida drivers. Here's a plain-language overview.",
    category: "Auto Insurance",
    readTime: "5 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />

      {/* Hero */}
      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Resources</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
            <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Insurance, Explained Clearly
          </h1>
          <p className="text-lg text-white/65 max-w-xl leading-relaxed">
            Practical guides and answers to common Florida insurance questions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-py-lg bg-sand-50">
        <div className="container-wide max-w-4xl">
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-sand-200 rounded-2xl p-7 hover:border-navy-200 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ocean-600 bg-ocean-50 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-navy-400">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-ocean-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-navy-500 leading-relaxed mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/resources/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-500 hover:text-ocean-600 transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-navy-900 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-white/60 mb-6 text-sm">
              Our team is here to help. Reach out directly or start a quote request.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Get a Quote
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
