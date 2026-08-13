import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Homeowners Insurance Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Homeowners insurance for South Florida property owners. Dwelling, personal property, liability and wind coverage. Get a quote from Sunny Isles Insurance.",
  path: "/homeowners-insurance",
});

const faqs = [
  {
    question: "What does homeowners insurance typically cover?",
    answer:
      "Homeowners insurance policies commonly include dwelling coverage (the structure of your home), personal property coverage (your belongings), personal liability, and additional living expenses if you need to temporarily relocate after a covered loss. Coverage terms vary by policy.",
  },
  {
    question: "Are wind and storm events covered in Florida homeowners policies?",
    answer:
      "Wind and storm coverage is an important consideration for Florida homeowners. Depending on the policy, some wind coverage may be included while certain high-wind events may be subject to separate deductibles or coverage limitations. It's important to review the specific terms of any policy you're considering.",
  },
  {
    question: "Does homeowners insurance cover flooding?",
    answer:
      "Standard homeowners insurance generally does not cover flooding from external water sources. Separate flood insurance is typically needed to cover that type of loss. This is a particularly important consideration for Florida homeowners.",
  },
  {
    question: "What is a hurricane deductible?",
    answer:
      "Some Florida homeowners policies include a separate hurricane or wind deductible — often calculated as a percentage of the insured dwelling value rather than a flat dollar amount. Understanding how your deductible works before a loss is important.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Homeowners Insurance", href: "/homeowners-insurance" },
];

export default function HomeownersInsurancePage() {
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
        badge="Homeowners Insurance · South Florida"
        headline="Homeowners Insurance in Sunny Isles Beach"
        subheadline="Explore homeowners insurance for South Florida properties. Dwelling, personal property, liability and storm coverage options explained clearly."
        ctaHref="/quote?type=home"
        breadcrumb={breadcrumb}
      />

      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Coverage Areas to Understand
          </h2>
          <p className="text-navy-500 leading-relaxed mb-10">
            Florida homeowners face a unique insurance environment. Understanding
            what your policy covers — and what it doesn&rsquo;t — is important
            before you need it.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Dwelling Coverage",
                description:
                  "Covers the structure of your home — walls, roof, attached structures — in the event of a covered loss.",
              },
              {
                title: "Personal Property",
                description:
                  "Covers your belongings inside the home, including furniture, electronics, clothing and other personal items.",
              },
              {
                title: "Personal Liability",
                description:
                  "Helps cover legal costs and damages if you're held responsible for injuries or property damage to others.",
              },
              {
                title: "Additional Living Expenses",
                description:
                  "Covers temporary housing and related costs if a covered event makes your home uninhabitable.",
              },
              {
                title: "Wind & Storm Considerations",
                description:
                  "Florida policies may have specific wind or hurricane deductibles. Understanding your deductible structure is an important part of your overall coverage.",
              },
              {
                title: "Flood Coverage",
                description:
                  "Standard homeowners policies typically do not cover flood damage. A separate flood policy is usually needed for that type of protection.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy-50 border border-navy-100 rounded-2xl p-6 text-sm text-navy-600">
            <strong className="text-navy-800">Note:</strong> Coverage details,
            terms, and availability vary by insurer and individual circumstances.
            This information is for general educational purposes only.
          </div>
        </div>
      </section>

      <section className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-white border border-sand-200 rounded-2xl px-6 py-5 group">
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
          <h2 className="text-3xl font-bold text-white mb-4">Explore Your Homeowners Options</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/quote?type=home" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Get a Home Quote
            </Link>
            <Link href="/flood-insurance" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Explore Flood Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
