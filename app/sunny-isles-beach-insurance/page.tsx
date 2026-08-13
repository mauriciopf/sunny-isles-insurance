import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";
import { business } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Agency Serving Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Sunny Isles Insurance is a local insurance agency in Sunny Isles Beach, FL. We help residents and businesses explore auto, condo, home, flood, renters and business insurance. Call 412-583-2544.",
  path: "/sunny-isles-beach-insurance",
});

const faqs = [
  {
    question: "Is Sunny Isles Insurance based in Sunny Isles Beach?",
    answer:
      "Sunny Isles Insurance is focused on serving Sunny Isles Beach and the surrounding South Florida area, including Aventura, North Miami Beach, Bal Harbour, Miami Beach and Miami-Dade County.",
  },
  {
    question: "What insurance do Sunny Isles Beach condo owners typically need?",
    answer:
      "Condo owners in Sunny Isles Beach generally benefit from an HO-6 insurance policy that covers their personal belongings, interior improvements, personal liability, and potentially loss assessments — coverage that typically falls outside what a condominium association's master policy provides.",
  },
  {
    question: "Do I need flood insurance in Sunny Isles Beach?",
    answer:
      "Sunny Isles Beach's coastal location along the Atlantic makes flood awareness important for property owners. Standard homeowners and condo insurance policies do not typically cover flood damage from external water sources. A separate flood insurance policy is often worth discussing with an agent.",
  },
  {
    question: "Can I get auto insurance through Sunny Isles Insurance?",
    answer:
      "Yes. We help drivers in Sunny Isles Beach and South Florida explore auto insurance options including liability, Personal Injury Protection (PIP), collision, comprehensive, and uninsured motorist coverage.",
  },
  {
    question: "How do I get an insurance quote in Sunny Isles Beach?",
    answer:
      "You can request a quote online through our Get My Quote form, or call us at 412-583-2544. The initial form takes just a few minutes.",
  },
  {
    question: "Do you serve areas near Sunny Isles Beach?",
    answer:
      "Yes. We serve customers in Aventura, North Miami Beach, Bal Harbour, Miami Beach, Miami-Dade County and throughout Florida, subject to product availability.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Sunny Isles Beach Insurance", href: "/sunny-isles-beach-insurance" },
];

export default function SunnyIslesBeachInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />

      {/* Hero */}
      <section
        className="bg-navy-900 pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden"
        aria-label="Sunny Isles Beach insurance agency hero"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(14,165,233,0.3) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">
                Sunny Isles Beach Insurance
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
            <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">
              Sunny Isles Beach, Florida
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Insurance Agency Serving Sunny Isles Beach, FL
          </h1>

          <p className="text-lg text-white/65 max-w-xl mb-10 leading-relaxed">
            Sunny Isles Insurance helps individuals, families and businesses in
            Sunny Isles Beach explore auto, condo, home, flood, renters and
            business insurance — with personal guidance and a simple process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg text-sm"
            >
              Get My Quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-py bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-5">
            Insurance for Sunny Isles Beach Residents &amp; Businesses
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-navy-500 leading-relaxed">
            <div className="space-y-4">
              <p>
                Sunny Isles Beach is a coastal city in Miami-Dade County, known
                for its high-rise oceanfront condominiums, residential
                communities, and active local business environment. Insurance
                for Sunny Isles Beach property owners and residents has
                specific considerations that differ from inland Florida
                communities.
              </p>
              <p>
                Condominium owners here often need to understand the
                relationship between their building&rsquo;s master insurance
                policy and their own individual HO-6 coverage. Flood exposure
                is a meaningful consideration given the coastal location.
                Vehicles, businesses, and personal property all have their
                own coverage needs.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Sunny Isles Insurance helps local residents and business owners
                navigate these decisions without making insurance feel more
                complicated than it needs to be. We focus specifically on this
                market, which means our conversations are relevant to the
                real insurance considerations that come with living in South
                Florida.
              </p>
              <p>
                Whether you&rsquo;re a condo owner in one of Sunny Isles Beach&rsquo;s
                high-rise towers, a homeowner in the area, a vehicle owner
                commuting through Miami-Dade, or a local business owner —
                we can help you understand your options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="section-py bg-sand-50" aria-labelledby="coverage-local-heading">
        <div className="container-wide">
          <h2
            id="coverage-local-heading"
            className="text-3xl font-bold text-navy-900 mb-3"
          >
            Insurance Coverage in Sunny Isles Beach
          </h2>
          <p className="text-navy-500 mb-10 max-w-2xl">
            We help Sunny Isles Beach residents and businesses explore the
            following coverage types. Click any category for more detail.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Condo Insurance (HO-6)",
                href: "/condo-insurance",
                cta: "Explore Condo Insurance",
                featured: true,
                body: "Sunny Isles Beach's condo-centric community makes HO-6 insurance particularly important. Your association's master policy typically won't cover your personal belongings, interior improvements or personal liability.",
              },
              {
                title: "Auto Insurance",
                href: "/auto-insurance",
                cta: "Explore Auto Insurance",
                body: "Auto insurance for drivers navigating Sunny Isles Beach, Collins Avenue, and South Florida roads. Coverage options include liability, PIP, collision and comprehensive.",
              },
              {
                title: "Homeowners Insurance",
                href: "/homeowners-insurance",
                cta: "Explore Homeowners Insurance",
                body: "Coverage for residential properties in the Sunny Isles Beach area. Dwelling, personal property, liability and storm-related coverage considerations.",
              },
              {
                title: "Flood Insurance",
                href: "/flood-insurance",
                cta: "Explore Flood Insurance",
                body: "Sunny Isles Beach's coastal location along the Atlantic Ocean makes flood insurance a serious consideration. Standard policies typically don't cover flooding.",
              },
              {
                title: "Renters Insurance",
                href: "/renters-insurance",
                cta: "Explore Renters Insurance",
                body: "Affordable coverage for renters in Sunny Isles Beach condos and apartments. Protect your belongings and personal liability.",
              },
              {
                title: "Business Insurance",
                href: "/business-insurance",
                cta: "Explore Business Insurance",
                body: "Commercial coverage for businesses operating in Sunny Isles Beach and Miami-Dade County. General liability, commercial property, BOP and more.",
              },
            ].map((item) => (
              <div
                key={item.href}
                className={`bg-white rounded-2xl p-7 border flex flex-col ${
                  item.featured
                    ? "border-aqua-400/60 shadow-md"
                    : "border-sand-200"
                }`}
              >
                {item.featured && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-aqua-600 bg-aqua-100 px-2.5 py-1 rounded-full mb-4 w-fit">
                    Key Sunny Isles Coverage
                  </span>
                )}
                <h3 className="font-semibold text-navy-900 text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed flex-1 mb-5">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-500 hover:text-ocean-600 transition-colors"
                >
                  {item.cta}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* South Florida insurance context */}
      <section className="section-py bg-navy-900">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-5">
            Why Sunny Isles Beach Insurance Is Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-white/65 leading-relaxed mb-10">
            <div className="space-y-4">
              <p>
                Florida insurance operates differently than insurance in most
                other states. For Sunny Isles Beach specifically, several factors
                make local market knowledge particularly valuable:
              </p>
              <ul className="space-y-3">
                {[
                  "Condominium association master policies vary significantly — understanding what yours covers is essential before selecting your own coverage.",
                  "Coastal flood exposure from the Atlantic Ocean makes flood insurance a consideration that inland residents may not face.",
                  "Florida's no-fault auto insurance system affects how personal injury protection works for local drivers.",
                  "South Florida's storm season and wind exposure create insurance considerations specific to this region.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-aqua-400 flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p>
                Sunny Isles Insurance focuses on this specific market — Sunny
                Isles Beach, Aventura, North Miami Beach, and the surrounding
                Miami-Dade area. This means the insurance conversations we have
                are directly relevant to where you live and what you own, not
                generic national insurance advice.
              </p>
              <p>
                Our goal is to make insurance easier to understand so you can
                make more informed decisions about your coverage — without
                unnecessary pressure or complicated corporate processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-py bg-sand-100">
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            Service Area
          </h2>
          <p className="text-navy-500 mb-8 leading-relaxed">
            Our primary focus is{" "}
            <strong className="text-navy-800">Sunny Isles Beach, FL</strong>{" "}
            and the surrounding South Florida communities. We also work with
            customers throughout Florida, subject to product availability and
            eligibility.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Sunny Isles Beach",
              "Aventura",
              "North Miami Beach",
              "Bal Harbour",
              "Miami Beach",
              "Miami-Dade County",
              "South Florida",
              "Statewide Florida",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-sand-200 text-navy-700 text-sm font-medium px-4 py-2 rounded-xl"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Frequently Asked Questions — Sunny Isles Beach Insurance
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-sand-50 border border-sand-200 rounded-2xl px-6 py-5 group"
              >
                <summary className="font-semibold text-navy-900 text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <svg
                    className="w-4 h-4 text-navy-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Insurance Help in Sunny Isles Beach
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Request a quote online or call us directly. We&rsquo;re here to help
            Sunny Isles Beach residents find the right coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-10 py-4 rounded-xl transition-colors text-sm"
            >
              Get My Quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-xl transition-colors text-sm"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              Call {business.phoneDisplay}
            </a>
          </div>
          <p className="text-xs text-white/30 mt-5">
            Sunny Isles Insurance &mdash; {business.serviceAreaFull}
          </p>
        </div>
      </section>
    </>
  );
}
