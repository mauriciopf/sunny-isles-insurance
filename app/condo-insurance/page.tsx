import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Condo Insurance Sunny Isles Beach, FL | HO-6 Coverage",
  description:
    "HO-6 condo insurance for Sunny Isles Beach residents. Protect your unit, belongings, interior improvements and personal liability. Request a quote from Sunny Isles Insurance.",
  path: "/condo-insurance",
});

const faqs = [
  {
    question: "What is an HO-6 condo insurance policy?",
    answer:
      "An HO-6 policy is a type of insurance designed specifically for condominium owners. It typically provides coverage for your personal belongings, the interior of your unit, personal liability, and certain assessments — areas that may not be covered by your association's master policy.",
  },
  {
    question: "What does a condo association's master policy cover?",
    answer:
      "Association master policies vary significantly. Some cover only the building structure and common areas, while others extend to certain parts of individual units. It's important to review your association's documents to understand exactly what their policy covers before determining your own coverage needs.",
  },
  {
    question: "What is loss assessment coverage?",
    answer:
      "Loss assessment coverage can help protect you if your condo association levies a special assessment against unit owners — for example, following damage to common areas that exceeds the association's own coverage. Coverage terms and limits vary.",
  },
  {
    question: "Does condo insurance cover water damage?",
    answer:
      "Water damage coverage depends on the cause and your specific policy terms. Some types of water damage may be covered; others, like flooding from external sources, typically require separate flood insurance. It's worth discussing the specifics with an agent.",
  },
  {
    question: "Do I need to insure improvements to my unit?",
    answer:
      "If you've made upgrades or improvements to your unit — such as upgraded flooring, kitchen renovations, or custom fixtures — these may not be covered under your association's master policy and may warrant additional coverage under your HO-6 policy.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Condo Insurance", href: "/condo-insurance" },
];

export default function CondoInsurancePage() {
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

      <InsurancePageHero
        badge="Condo Insurance · HO-6 · Sunny Isles Beach"
        headline="Condo Insurance in Sunny Isles Beach"
        subheadline="Sunny Isles Beach is known for its high-rise condominium communities. Understanding the gap between your association's master policy and your individual HO-6 coverage is an important first step."
        ctaHref="/quote?type=condo"
        breadcrumb={breadcrumb}
      />

      {/* Intro */}
      <section className="section-py bg-white">
        <div className="container-wide max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-5">
                Condo Insurance in Sunny Isles Beach
              </h2>
              <p className="text-navy-500 leading-relaxed mb-4">
                Sunny Isles Beach is one of Miami-Dade County&rsquo;s most
                prominent high-rise communities, with condominium living as the
                dominant form of residential ownership. For condo owners here,
                understanding your insurance situation requires understanding
                two distinct policies: your association&rsquo;s master policy and
                your own individual HO-6 coverage.
              </p>
              <p className="text-navy-500 leading-relaxed mb-4">
                Association master policies vary widely — some cover only the
                building shell and common areas, while others extend further into
                individual units. Regardless of what the master policy covers,
                your personal belongings and certain liabilities will typically
                fall outside of it.
              </p>
              <p className="text-navy-500 leading-relaxed">
                An HO-6 condo insurance policy is designed to address that gap.
                Sunny Isles Insurance helps Sunny Isles Beach condo owners
                understand what their association covers and what additional
                protection may make sense for their situation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-navy-900 text-base">
                What Condo Insurance May Help Cover:
              </h3>
              {[
                {
                  title: "Personal Belongings",
                  desc: "Furniture, electronics, clothing and other personal items inside your unit.",
                },
                {
                  title: "Interior Improvements",
                  desc: "Upgrades you've made to flooring, fixtures, cabinets and other interior elements.",
                },
                {
                  title: "Personal Liability",
                  desc: "Coverage if someone is injured in your unit or if you're held responsible for certain types of damage.",
                },
                {
                  title: "Loss Assessment",
                  desc: "Certain special assessments levied by your condo association may be covered depending on your policy.",
                },
                {
                  title: "Additional Living Expenses",
                  desc: "Temporary housing costs if your unit becomes uninhabitable due to a covered loss.",
                },
                {
                  title: "Water Damage Considerations",
                  desc: "Certain types of water damage may be covered depending on the source and policy terms.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-sand-50 border border-sand-200 rounded-xl p-4"
                >
                  <span className="w-2 h-2 rounded-full bg-aqua-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-navy-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-aqua-50 border border-aqua-200 rounded-2xl p-6 text-sm text-navy-700">
            <strong className="text-navy-900">Important:</strong> Coverage
            terms and availability vary by insurer and individual circumstances.
            We encourage you to review your condominium association documents and
            consult with an agent to understand what coverage may be appropriate
            for your specific situation.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Condo Insurance Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white border border-sand-200 rounded-2xl px-6 py-5 group"
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
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Explore Your Condo Coverage Options
              </h2>
              <p className="text-white/60 mb-8">
                Request a quote online or speak with us directly. We&rsquo;ll help
                you understand your options without making it complicated.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote?type=condo"
                  className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
                >
                  Request a Condo Quote
                </Link>
              </div>
            </div>
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Related Coverage
              </p>
              <div className="space-y-3">
                {[
                  { label: "Flood Insurance in Sunny Isles", href: "/flood-insurance" },
                  { label: "Renters Insurance", href: "/renters-insurance" },
                  { label: "Homeowners Insurance", href: "/homeowners-insurance" },
                  { label: "Sunny Isles Beach Insurance Guide", href: "/sunny-isles-beach-insurance" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between bg-navy-800/60 border border-navy-700 hover:border-navy-600 rounded-xl px-5 py-4 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 text-navy-500 group-hover:text-white/50 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
