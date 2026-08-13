import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema, getArticleSchema } from "@/lib/structured-data";
import { business } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Does Homeowners Insurance Cover Flooding? | Sunny Isles Insurance",
  description:
    "A common question for Florida homeowners and condo owners. Standard property insurance policies typically don't cover flooding. Here's what you need to know about flood insurance in South Florida.",
  path: "/resources/flood-insurance-basics",
});

const faqs = [
  {
    question: "Why doesn't homeowners insurance cover flooding?",
    answer:
      "Standard homeowners and condo insurance policies are designed to cover certain perils like fire, theft, and wind damage — but not flooding from external water sources. Flood insurance is typically a separate policy, often obtained through the National Flood Insurance Program (NFIP) or a private flood insurer.",
  },
  {
    question: "Is flood insurance required in Florida?",
    answer:
      "If you have a federally backed mortgage on a property in a designated high-risk flood zone, flood insurance is typically required by the lender. Even when not required, many Florida property owners choose to carry it given the state's flood exposure.",
  },
  {
    question: "How do I know my property's flood risk?",
    answer:
      "FEMA maintains Flood Insurance Rate Maps (FIRMs) that designate flood zones. You can search your property's flood zone on the FEMA Flood Map Service Center. An agent can also help you understand how your flood zone relates to insurance options.",
  },
  {
    question: "Is there a waiting period for flood insurance?",
    answer:
      "NFIP flood insurance policies typically have a 30-day waiting period before coverage takes effect. Private flood insurance may have different waiting periods. Planning ahead — before a storm season or weather event — is strongly recommended.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Flood Insurance Basics", href: "/resources/flood-insurance-basics" },
];

const dateModified = "2026-08-13";

export default function FloodInsuranceBasicsArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: "Does Homeowners Insurance Cover Flooding in Florida?", description: "Standard homeowners policies don't cover flooding. Here's what Florida property owners need to know about flood insurance.", path: "/resources/flood-insurance-basics", dateModified })) }} />

      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === breadcrumb.length - 1 ? <span className="text-white/70" aria-current="page">{crumb.name}</span> : <Link href={crumb.href} className="hover:text-white/70 transition-colors">{crumb.name}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-500/10 px-3 py-1 rounded-full">Flood Insurance</span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Does Homeowners Insurance Cover Flooding in Florida?
          </h1>
          <p className="text-lg text-white/65 max-w-xl">
            One of the most common insurance misunderstandings in Florida. Here&rsquo;s the clear answer — and why it matters for Sunny Isles Beach and South Florida property owners.
          </p>
          <p className="text-xs text-white/30 mt-4">By <strong className="text-white/50">{business.name}</strong></p>
        </div>
      </section>

      <article className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12">
            <div className="space-y-6 text-navy-600 leading-relaxed">

              <p className="text-lg text-navy-700 font-medium leading-relaxed">
                The short answer is: standard homeowners insurance policies generally do <strong className="text-navy-900">not</strong> cover flooding from external water sources. This distinction is important for every property owner in Florida — and particularly relevant in coastal communities like Sunny Isles Beach.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">What "Flooding" Means in Insurance Terms</h2>
              <p>
                In insurance, "flooding" typically refers to water that enters a property from external sources — overflowing bodies of water, storm surge, excessive rainfall accumulating on the ground, and similar events. This type of loss is explicitly excluded from most standard homeowners and condo insurance policies.
              </p>
              <p>
                Water damage from internal sources — a burst pipe, an overflowing appliance, a roof leak — is treated differently and may be covered under certain conditions in a standard policy. But when water enters from outside, a separate flood insurance policy is typically required.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">Why This Matters in South Florida</h2>
              <p>
                Florida&rsquo;s geography creates meaningful flood risk across the state — not just in coastal areas. Factors include:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Low-lying terrain that doesn&rsquo;t drain easily during heavy rainfall</li>
                <li>Proximity to the Atlantic Ocean, Gulf of Mexico, and inland waterways</li>
                <li>Storm surge risk during hurricane and tropical storm events</li>
                <li>High-intensity rainfall during Florida&rsquo;s wet season</li>
              </ul>
              <p>
                For Sunny Isles Beach specifically — a barrier island community on the Atlantic coast of Miami-Dade County — coastal flood exposure is a real consideration for property owners.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">Flood Insurance Options in Florida</h2>
              <p>There are two primary avenues for flood insurance in Florida:</p>

              <div className="space-y-4 my-4">
                {[
                  { title: "National Flood Insurance Program (NFIP)", desc: "The NFIP is administered by FEMA and has historically been the primary source of flood insurance for residential property owners. Coverage is available through participating insurance agents and carriers. NFIP policies have specific coverage limits and terms." },
                  { title: "Private Flood Insurance", desc: "Private flood insurance is available from select carriers and may offer different coverage options, limits, or pricing than NFIP policies. In some cases, private flood insurance can provide broader coverage or more favorable terms. Availability varies by property and location." },
                ].map((item) => (
                  <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-xl p-5">
                    <h3 className="font-semibold text-navy-900 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">The Waiting Period</h2>
              <p>
                One critical detail: NFIP flood insurance policies typically have a <strong className="text-navy-800">30-day waiting period</strong> before coverage takes effect. This means flood insurance must be purchased well in advance of a storm event — it cannot generally be obtained on short notice when a hurricane is approaching.
              </p>
              <p>
                Private flood insurance policies may have shorter waiting periods, but timing still matters. Planning ahead is strongly recommended for Florida property owners.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">Condo Owners and Flood Insurance</h2>
              <p>
                Condominium owners have an additional layer of complexity. Your association may carry its own flood insurance for the building and common areas, but this typically does not extend to your personal belongings or interior unit. Reviewing your association&rsquo;s insurance documents and understanding what your own HO-6 policy covers — and doesn&rsquo;t cover — is important.
              </p>
              <p>
                For Sunny Isles Beach condo owners, we recommend reviewing both your association&rsquo;s master policy and your own individual coverage with a licensed agent to understand your flood exposure.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <p className="text-sm leading-relaxed">
                  <strong className="text-navy-900">Important:</strong> This article is for general informational purposes only. Coverage terms, eligibility, and availability vary significantly. Consult with a licensed insurance professional for guidance specific to your property and situation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-navy-900 mb-5">Related Coverage &amp; Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Flood Insurance in Sunny Isles Beach", href: "/flood-insurance", desc: "Explore flood insurance options and request a quote." },
                { label: "Condo Insurance in Florida", href: "/resources/condo-insurance-florida", desc: "What HO-6 insurance covers for condo owners." },
                { label: "Homeowners Insurance", href: "/homeowners-insurance", desc: "Property coverage for South Florida homeowners." },
                { label: "Sunny Isles Beach Insurance Guide", href: "/sunny-isles-beach-insurance", desc: "All coverage options for Sunny Isles Beach residents." },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="bg-white border border-sand-200 hover:border-navy-300 rounded-2xl p-5 block transition-colors group">
                  <p className="font-semibold text-navy-900 text-sm group-hover:text-ocean-500 transition-colors mb-1">{link.label}</p>
                  <p className="text-xs text-navy-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="section-py bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Flood Insurance Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-sand-50 border border-sand-200 rounded-2xl px-6 py-5 group">
                <summary className="font-semibold text-navy-900 text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <svg className="w-4 h-4 text-navy-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Flood Insurance Options</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/quote?type=flood" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">Get a Flood Quote</Link>
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
