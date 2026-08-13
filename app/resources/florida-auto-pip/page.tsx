import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema, getArticleSchema } from "@/lib/structured-data";
import { business } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Understanding PIP Auto Insurance in Florida | Sunny Isles Insurance",
  description:
    "Florida uses a no-fault auto insurance system, making Personal Injury Protection (PIP) a key part of your coverage. Here's a plain-language guide for Sunny Isles Beach and South Florida drivers.",
  path: "/resources/florida-auto-pip",
});

const faqs = [
  {
    question: "Is PIP required for all vehicles in Florida?",
    answer:
      "PIP is generally required for most private passenger vehicles registered in Florida. Commercial vehicles, motorcycles, and certain other vehicle types have different requirements. Consulting with a licensed agent can help clarify what applies to your specific vehicle.",
  },
  {
    question: "Does PIP cover passengers in my vehicle?",
    answer:
      "Florida PIP coverage typically extends to you, relatives in your household, and passengers in your vehicle who don't have their own PIP coverage. Coverage terms and limits vary by policy.",
  },
  {
    question: "Does PIP cover the other driver's injuries?",
    answer:
      "No. PIP covers your own injuries and those of covered passengers regardless of fault. For injuries to other parties, bodily injury liability coverage is relevant. Understanding the different components of an auto policy is important for Florida drivers.",
  },
  {
    question: "What is the minimum PIP coverage in Florida?",
    answer:
      "Florida law generally requires a minimum level of PIP coverage for eligible vehicles. Coverage minimums and specific requirements can change over time — consulting with a licensed agent is the best way to ensure you understand your current obligations.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Florida Auto PIP Insurance", href: "/resources/florida-auto-pip" },
];

const dateModified = "2026-08-13";

export default function FloridaAutoPIPArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleSchema({ title: "Understanding PIP Auto Insurance in Florida", description: "Florida's no-fault system makes PIP insurance a key part of auto coverage. Here's what South Florida drivers need to know.", path: "/resources/florida-auto-pip", dateModified })) }} />

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
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-500/10 px-3 py-1 rounded-full">Auto Insurance</span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Understanding Personal Injury Protection (PIP) in Florida
          </h1>
          <p className="text-lg text-white/65 max-w-xl">
            Florida operates under a no-fault auto insurance system, making PIP
            an important part of coverage for Sunny Isles Beach and South Florida
            drivers. Here&rsquo;s a plain-language overview.
          </p>
          <p className="text-xs text-white/30 mt-4">By <strong className="text-white/50">{business.name}</strong></p>
        </div>
      </section>

      <article className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12">
            <div className="space-y-6 text-navy-600 leading-relaxed">

              <p className="text-lg text-navy-700 font-medium leading-relaxed">
                Florida is one of a handful of U.S. states that uses a no-fault auto insurance system. This means that after a car accident, your own insurance — specifically your Personal Injury Protection (PIP) coverage — helps pay for your medical expenses and certain other losses, regardless of who caused the accident.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">What Is No-Fault Auto Insurance?</h2>
              <p>
                In a traditional fault-based system, the at-fault driver&rsquo;s liability insurance pays for injuries to others. In a no-fault system like Florida&rsquo;s, each driver first turns to their own coverage — specifically PIP — for medical expenses and lost wages following an accident.
              </p>
              <p>
                The idea is to speed up the claims process and reduce litigation over minor accidents. However, it also means understanding your own coverage is particularly important for Florida drivers, including those in Sunny Isles Beach and throughout Miami-Dade County.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">What PIP Typically Covers</h2>
              <p>
                Personal Injury Protection generally covers:
              </p>
              <div className="space-y-3 my-4">
                {[
                  { title: "Medical Expenses", desc: "Costs related to treatment of injuries from a covered accident, up to your policy limit. This typically applies to you and covered household members." },
                  { title: "Lost Wages", desc: "A portion of income lost due to an inability to work following a covered accident. Coverage terms and percentages vary by policy." },
                  { title: "Death Benefits", desc: "In the event of a fatal accident, PIP may provide a death benefit to eligible survivors, subject to policy limits." },
                  { title: "Replacement Services", desc: "Some policies include coverage for services you can no longer perform due to accident-related injuries, such as household tasks." },
                ].map((item) => (
                  <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-xl p-5">
                    <h3 className="font-semibold text-navy-900 mb-1.5 text-sm">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">What PIP Doesn&rsquo;t Cover</h2>
              <p>PIP has important limitations:</p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>PIP does not cover damage to your vehicle (that&rsquo;s collision or comprehensive coverage)</li>
                <li>PIP does not cover the other driver&rsquo;s injuries (that&rsquo;s bodily injury liability)</li>
                <li>PIP has a coverage limit — expenses beyond that limit are your responsibility unless you have additional coverage</li>
                <li>PIP generally has a deductible — you pay the deductible amount before coverage applies</li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">Other Auto Coverage for Florida Drivers</h2>
              <p>PIP is one component of an auto insurance policy. Other coverages worth understanding for Sunny Isles Beach and South Florida drivers include:</p>
              <ul className="space-y-2 pl-5 list-disc">
                <li><strong className="text-navy-800">Bodily Injury Liability</strong> — Covers injury to others when you&rsquo;re at fault</li>
                <li><strong className="text-navy-800">Property Damage Liability</strong> — Covers damage you cause to another person&rsquo;s property</li>
                <li><strong className="text-navy-800">Collision</strong> — Covers damage to your vehicle from an accident</li>
                <li><strong className="text-navy-800">Comprehensive</strong> — Covers non-collision damage (theft, weather, falling objects)</li>
                <li><strong className="text-navy-800">Uninsured/Underinsured Motorist</strong> — Protection when the other driver has insufficient coverage</li>
              </ul>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <p className="text-sm leading-relaxed">
                  <strong className="text-navy-900">Important:</strong> Florida&rsquo;s auto insurance requirements and PIP regulations can change over time. This article is for general informational purposes only. For current coverage requirements and personalized guidance, consult with a licensed Florida insurance professional.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-navy-900 mb-5">Related Coverage &amp; Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Auto Insurance in Sunny Isles Beach", href: "/auto-insurance", desc: "Explore auto coverage options and request a quote." },
                { label: "Condo Insurance in Florida", href: "/resources/condo-insurance-florida", desc: "What HO-6 insurance covers for condo owners." },
                { label: "Sunny Isles Beach Insurance Guide", href: "/sunny-isles-beach-insurance", desc: "All coverage options for Sunny Isles Beach." },
                { label: "Back to Resources", href: "/resources", desc: "More educational insurance articles." },
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
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Auto Insurance Questions</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Explore Auto Insurance in Sunny Isles Beach</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="/quote?type=auto" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">Get an Auto Quote</Link>
            <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
