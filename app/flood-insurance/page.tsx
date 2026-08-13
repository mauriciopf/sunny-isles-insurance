import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Flood Insurance Sunny Isles Beach, FL | South Florida Flood Coverage",
  description:
    "Flood insurance for Sunny Isles Beach and South Florida coastal properties. Understand your flood risk and explore NFIP and private flood coverage options.",
  path: "/flood-insurance",
});

const faqs = [
  {
    question: "Does my homeowners insurance cover flooding?",
    answer:
      "Standard homeowners and condo insurance policies typically do not cover flooding from external water sources — such as storm surge, overflowing rivers, or heavy rainfall. Flood insurance is generally a separate policy.",
  },
  {
    question: "Who provides flood insurance?",
    answer:
      "Flood insurance can be obtained through the National Flood Insurance Program (NFIP) or through private flood insurance carriers. Both options have different terms, coverage structures, and pricing. An agent can help you understand the differences.",
  },
  {
    question: "Do I need flood insurance if I'm not in a high-risk zone?",
    answer:
      "Many flood insurance claims come from properties outside of designated high-risk flood zones. Florida's flat terrain and heavy rainfall make flooding a consideration across many areas. Whether flood insurance makes sense for your situation is worth discussing with an agent.",
  },
  {
    question: "Is flood insurance required?",
    answer:
      "If you have a federally backed mortgage on a property in a high-risk flood zone, flood insurance is typically required by the lender. Even if it's not required, it may be worth considering given Florida's flood exposure.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Flood Insurance", href: "/flood-insurance" },
];

export default function FloodInsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }} />

      <InsurancePageHero
        badge="Flood Insurance · Sunny Isles Beach, FL"
        headline="Flood Insurance in Sunny Isles Beach"
        subheadline="Sunny Isles Beach's coastal location makes flood awareness especially relevant. Standard homeowners policies don't cover flooding — a separate flood policy may be needed."
        ctaHref="/quote?type=flood"
        breadcrumb={breadcrumb}
      />

      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Understanding Flood Coverage in Florida</h2>
          <p className="text-navy-500 leading-relaxed mb-10">
            Florida&rsquo;s geography — flat terrain, low elevation, heavy seasonal rainfall, and significant coastal exposure — creates flood risk across a wide range of properties, not just those immediately on the water.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              { title: "Flood Coverage is Separate", description: "Standard homeowners and condo insurance policies do not typically include flood coverage. A separate flood policy is generally required to cover flood-related losses." },
              { title: "NFIP vs. Private Flood Insurance", description: "Flood insurance can be purchased through the National Flood Insurance Program (NFIP) or private carriers. Each has different coverage structures, pricing, and availability." },
              { title: "Waiting Periods", description: "Flood insurance policies often have a waiting period before coverage goes into effect. Planning ahead — before a storm event — is important." },
              { title: "Understanding Your Flood Zone", description: "FEMA designates flood zones that affect insurance requirements and risk assessment. Knowing your property's flood zone is a useful starting point for any flood insurance conversation." },
            ].map((item) => (
              <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 text-sm text-navy-700">
            <strong className="text-navy-900">Important:</strong> Flood insurance availability, terms and pricing vary significantly. This information is for general educational purposes only. Contact us to discuss your specific situation.
          </div>
        </div>
      </section>

      <section className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Flood Insurance Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Understand Your Flood Exposure</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Request a quote or reach out to discuss your property&rsquo;s flood risk and coverage options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?type=flood" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Get a Flood Quote
            </Link>
            <Link href="/homeowners-insurance" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Explore Homeowners Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
