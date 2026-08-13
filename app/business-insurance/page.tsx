import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Business Insurance Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Commercial insurance for businesses in Sunny Isles Beach and Miami-Dade County. General liability, BOP, commercial property and more. Get a quote today.",
  path: "/business-insurance",
});

const faqs = [
  { question: "What types of business insurance are common for small businesses?", answer: "Common options include general liability, commercial property, business owners policies (BOPs), professional liability (errors and omissions), commercial auto, and workers compensation. The right combination depends on your business type, size, and risk profile." },
  { question: "What is a Business Owners Policy (BOP)?", answer: "A BOP typically bundles general liability and commercial property coverage into a single policy, often at a more favorable cost than purchasing each separately. Eligibility and terms vary by insurer and business type." },
  { question: "Does my homeowners policy cover business activities?", answer: "In most cases, standard homeowners or renters policies do not cover business-related losses. If you operate a business from home, a separate business policy or endorsement may be worth exploring." },
  { question: "Is workers compensation required in Florida?", answer: "Florida has workers compensation requirements for most businesses with employees, though specifics depend on industry and number of employees. Consulting with an agent or reviewing state guidelines can help clarify your obligations." },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Business Insurance", href: "/business-insurance" },
];

export default function BusinessInsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }} />

      <InsurancePageHero
        badge="Business Insurance · Sunny Isles Beach, FL"
        headline="Business Insurance in Sunny Isles Beach"
        subheadline="Explore commercial coverage options for Sunny Isles Beach and Miami-Dade businesses. From general liability to commercial property, we help you understand your options."
        ctaHref="/quote?type=business"
        breadcrumb={breadcrumb}
      />

      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Commercial Coverage to Consider</h2>
          <p className="text-navy-500 leading-relaxed mb-10">
            Every business has a different risk profile. The right insurance structure depends on your industry, operations, number of employees, and assets. We help business owners understand what options may be appropriate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "General Liability", description: "Covers bodily injury, property damage, and certain advertising injury claims arising from your business operations. A foundational coverage for most businesses." },
              { title: "Commercial Property", description: "Protects your business location, equipment, inventory, and other physical assets from covered perils like fire, theft, and certain weather events." },
              { title: "Business Owners Policy (BOP)", description: "Combines general liability and commercial property coverage, often with additional business interruption coverage, into a single package policy." },
              { title: "Professional Liability", description: "Also known as errors and omissions (E&O) insurance. Covers claims arising from professional mistakes, negligence, or failure to perform services as promised." },
              { title: "Commercial Auto", description: "Coverage for vehicles used for business purposes. Personal auto policies typically do not cover commercial use." },
              { title: "Workers Compensation", description: "Provides benefits to employees who suffer work-related injuries or illnesses. Required for most Florida employers depending on industry and employee count." },
            ].map((item) => (
              <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-navy-50 border border-navy-100 rounded-2xl p-6 text-sm text-navy-600">
            <strong className="text-navy-800">Note:</strong> Coverage availability, eligibility, and terms vary by insurer, industry, and individual circumstances. This information is for general educational purposes only.
          </div>
        </div>
      </section>

      <section className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Business Insurance Questions</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Explore Business Coverage Options</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/quote?type=business" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Get a Business Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
