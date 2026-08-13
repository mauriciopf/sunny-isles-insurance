import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Renters Insurance Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Renters insurance for Sunny Isles Beach and South Florida. Protect your belongings and personal liability affordably. Request a quick quote today.",
  path: "/renters-insurance",
});

const faqs = [
  { question: "What does renters insurance cover?", answer: "Renters insurance typically covers your personal belongings (furniture, electronics, clothing, etc.), personal liability, and additional living expenses if your rental becomes uninhabitable due to a covered loss." },
  { question: "Does renters insurance cover my belongings if they're stolen outside my home?", answer: "Some renters insurance policies include off-premises personal property coverage, which may cover belongings stolen from your car or elsewhere. Coverage terms vary, so it's worth reviewing the specifics of any policy." },
  { question: "Is renters insurance required?", answer: "Some landlords and property management companies require tenants to maintain renters insurance. Even when it's not required, it provides an affordable layer of protection for your belongings and personal liability." },
  { question: "Does renters insurance cover flood damage?", answer: "Standard renters insurance policies generally do not cover flooding from external water sources. If flood coverage is a concern for your rental property, a separate flood policy may be worth exploring." },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Renters Insurance", href: "/renters-insurance" },
];

export default function RentersInsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(faqs)) }} />

      <InsurancePageHero
        badge="Renters Insurance · Sunny Isles Beach, FL"
        headline="Renters Insurance in Sunny Isles Beach"
        subheadline="Renters insurance provides affordable coverage for your personal belongings and personal liability — whether you rent in Sunny Isles Beach or anywhere in South Florida."
        ctaHref="/quote?type=renters"
        breadcrumb={breadcrumb}
      />

      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">What Renters Insurance Can Cover</h2>
          <p className="text-navy-500 leading-relaxed mb-10">
            Your landlord&rsquo;s insurance covers the building — not your belongings inside it. Renters insurance fills that gap at a cost that typically works for most budgets.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Personal Belongings", description: "Furniture, electronics, clothing and other personal items in your rental unit. Coverage typically applies to losses from covered events like fire, theft, or certain weather events." },
              { title: "Personal Liability", description: "If someone is injured in your rental unit or if you're responsible for damage to someone else's property, personal liability coverage can help." },
              { title: "Additional Living Expenses", description: "If a covered event makes your rental uninhabitable, additional living expenses coverage can help pay for temporary housing and related costs." },
              { title: "Medical Payments", description: "Some renters policies include coverage for medical expenses of guests who are injured in your home, regardless of fault." },
            ].map((item) => (
              <div key={item.title} className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Explore Renters Coverage?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?type=renters" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Get a Renters Quote
            </Link>
            <Link href="/condo-insurance" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Explore Condo Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
