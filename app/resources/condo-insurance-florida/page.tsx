import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getArticleSchema,
} from "@/lib/structured-data";
import { business } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "What Does Condo Insurance Cover in Florida? | Sunny Isles Insurance",
  description:
    "A clear explanation of HO-6 condo insurance in Florida — what it covers, how it works with your association's master policy, and why it matters for Sunny Isles Beach condo owners.",
  path: "/resources/condo-insurance-florida",
});

const faqs = [
  {
    question: "Is condo insurance required in Florida?",
    answer:
      "Florida law does not universally require individual condo owners to carry HO-6 insurance, but many mortgage lenders require it as a condition of a loan. Some condominium associations also require it under their bylaws. Even when not required, most condo owners benefit from having individual coverage.",
  },
  {
    question: "What is the difference between an HO-6 policy and an HOA master policy?",
    answer:
      "A condominium association's master policy typically insures the building structure and common areas. An HO-6 policy is the individual unit owner's own coverage — covering personal belongings, interior improvements, personal liability, and potentially loss assessments.",
  },
  {
    question: "Does condo insurance cover loss assessment charges?",
    answer:
      "Some HO-6 policies include loss assessment coverage, which can help if your condo association charges unit owners for a special assessment following damage to common areas. Coverage terms, limits, and conditions vary by policy.",
  },
  {
    question: "Does condo insurance cover flood damage?",
    answer:
      "Standard HO-6 condo insurance generally does not cover flooding from external water sources. For Sunny Isles Beach condo owners, flood insurance is a separate policy worth discussing with an agent given the coastal location.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Condo Insurance in Florida", href: "/resources/condo-insurance-florida" },
];

const dateModified = "2026-08-13";

export default function CondoInsuranceFloridaArticle() {
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
          __html: JSON.stringify(
            getArticleSchema({
              title: "What Does Condo Insurance Cover in Florida?",
              description:
                "A clear explanation of HO-6 condo insurance in Florida — what it covers, how it works with your HOA master policy, and why it matters.",
              path: "/resources/condo-insurance-florida",
              dateModified,
            })
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-white/70" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white/70 transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-500/10 px-3 py-1 rounded-full">
              Condo Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            What Does Condo Insurance Cover in Florida?
          </h1>
          <p className="text-lg text-white/65 max-w-xl">
            Understanding HO-6 insurance and how it relates to your condominium
            association&rsquo;s master policy — an important topic for Florida
            condo owners.
          </p>
          <p className="text-xs text-white/30 mt-4">
            By <strong className="text-white/50">{business.name}</strong>
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12">
            <div className="space-y-6 text-navy-600 leading-relaxed">

              <p className="text-lg text-navy-700 font-medium leading-relaxed">
                If you own a condominium in Florida — particularly in a community
                like Sunny Isles Beach — understanding your insurance situation
                involves understanding two separate policies: the association&rsquo;s
                master insurance policy and your own individual HO-6 condo
                insurance policy.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Is HO-6 Condo Insurance?
              </h2>
              <p>
                An HO-6 policy is an insurance product specifically designed for
                condominium unit owners. Unlike a standard homeowners policy
                (which covers the structure of a standalone home), an HO-6 policy
                is designed to cover what you own inside the unit — and what your
                association&rsquo;s master policy typically does not cover.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Does a Condo Association&rsquo;s Master Policy Cover?
              </h2>
              <p>
                Condominium association master policies vary significantly from
                one building to the next. Most cover:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>The building&rsquo;s exterior structure</li>
                <li>Common areas (lobbies, pools, hallways, parking structures)</li>
                <li>Shared systems (roofing, elevators, shared plumbing)</li>
              </ul>
              <p>
                Some master policies are &ldquo;bare walls in&rdquo; coverage, meaning they
                stop at the interior walls of each unit. Others are &ldquo;all-in&rdquo;
                policies that extend to original fixtures and finishes inside
                units. A third category — &ldquo;single entity&rdquo; — covers original
                building items but not individual improvements.
              </p>
              <p>
                Knowing exactly what your association&rsquo;s master policy covers is
                an important first step. Reviewing your association&rsquo;s insurance
                certificate and declarations is a good starting point.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What an HO-6 Policy May Cover
              </h2>
              <p>
                Regardless of how comprehensive your association&rsquo;s master policy
                is, certain things will typically require your own HO-6 coverage:
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Personal Belongings",
                    desc: "Your furniture, electronics, clothing, appliances and other personal items are generally not covered by an association's master policy. An HO-6 policy can provide coverage for these items in the event of a covered loss such as fire, theft, or certain water damage.",
                  },
                  {
                    title: "Interior Improvements and Upgrades",
                    desc: "If you've made upgrades to your unit — custom flooring, updated kitchen cabinets, renovated bathrooms — these improvements are typically not covered under a bare-walls or standard master policy. Your HO-6 policy can be structured to cover these improvements.",
                  },
                  {
                    title: "Personal Liability",
                    desc: "If a guest is injured in your unit, or if you're held responsible for certain types of damage to a neighbor's unit, your personal liability coverage provides an important layer of protection that an association's master policy generally won't provide.",
                  },
                  {
                    title: "Loss Assessment Coverage",
                    desc: "If your condo association incurs a loss that exceeds their insurance coverage — for example, damage to a common area — they may levy a special assessment against unit owners. Loss assessment coverage on your HO-6 policy can help cover your share of those charges, subject to policy terms and limits.",
                  },
                  {
                    title: "Additional Living Expenses",
                    desc: "If a covered event makes your unit uninhabitable — a fire, for example — additional living expense coverage can help pay for temporary housing while your unit is being repaired.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-sand-50 border border-sand-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-navy-900 mb-1.5 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Condo Insurance in Sunny Isles Beach
              </h2>
              <p>
                Sunny Isles Beach is home to a significant number of high-rise
                condominium communities along and near the Atlantic coast. Condo
                ownership here carries all the standard HO-6 insurance
                considerations — plus some that are particularly relevant to
                coastal South Florida:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">Flood exposure</strong> —
                  Standard condo insurance policies do not cover flooding from
                  external water sources. Given Sunny Isles Beach&rsquo;s coastal
                  location, flood insurance is a{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    separate coverage consideration
                  </Link>{" "}
                  worth discussing.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Water damage considerations
                  </strong>{" "}
                  — Water damage from internal sources (a pipe burst, for
                  example) is treated differently than flooding. Understanding
                  how your policy handles various water-related losses is
                  worthwhile.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Association documents
                  </strong>{" "}
                  — In Sunny Isles Beach and other South Florida condo
                  communities, each association&rsquo;s master policy is different.
                  Reviewing your association&rsquo;s insurance certificate alongside
                  a licensed agent can help identify any coverage gaps.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What HO-6 Policies Generally Don&rsquo;t Cover
              </h2>
              <p>
                Every policy has exclusions. Common exclusions in standard HO-6
                policies include:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Flooding from external sources (requires separate flood
                  insurance)
                </li>
                <li>
                  Earthquake damage (may require a separate endorsement or
                  policy)
                </li>
                <li>
                  Intentional damage
                </li>
                <li>
                  Normal wear and tear
                </li>
                <li>
                  Business property or activities (may require separate
                  commercial coverage)
                </li>
              </ul>
              <p>
                Coverage terms vary significantly between insurers and specific
                policies. Reviewing your policy documents carefully — and asking
                questions before you need to file a claim — is always worthwhile.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. Coverage
                  terms, availability, and conditions vary by insurer and
                  individual policy. Nothing in this article constitutes
                  insurance advice or creates coverage. Always review your
                  specific policy documents and consult with a licensed insurance
                  professional for guidance on your situation.
                </p>
              </div>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-navy-900 mb-5">
              Related Coverage
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "Explore HO-6 coverage options and request a quote.",
                },
                {
                  label: "Flood Insurance for South Florida",
                  href: "/flood-insurance",
                  desc: "Understand flood coverage for coastal properties.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "All insurance coverage options for Sunny Isles Beach.",
                },
                {
                  label: "Back to Resources",
                  href: "/resources",
                  desc: "More educational insurance articles.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-sand-200 hover:border-navy-300 rounded-2xl p-5 block transition-colors group"
                >
                  <p className="font-semibold text-navy-900 text-sm group-hover:text-ocean-500 transition-colors mb-1">
                    {link.label}
                  </p>
                  <p className="text-xs text-navy-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Condo Insurance Questions
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Explore Condo Insurance in Sunny Isles Beach
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a condo insurance quote or call us to talk through your
            coverage options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=condo"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Condo Quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
