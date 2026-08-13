import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/structured-data";
import InsurancePageHero from "@/components/InsurancePageHero";

export const metadata: Metadata = buildMetadata({
  title: "Auto Insurance Sunny Isles Beach, FL | Sunny Isles Insurance",
  description:
    "Auto insurance for drivers in Sunny Isles Beach and South Florida. Explore liability, PIP, collision and comprehensive coverage. Get a personalized quote today.",
  path: "/auto-insurance",
});

const faqs = [
  {
    question: "What auto insurance coverage is common in Florida?",
    answer:
      "Florida drivers commonly consider liability coverage, Personal Injury Protection (PIP), collision, comprehensive, and uninsured/underinsured motorist coverage. Florida has specific minimum coverage requirements — consulting with an agent can help you understand your options.",
  },
  {
    question: "What is Personal Injury Protection (PIP)?",
    answer:
      "PIP is a type of no-fault coverage that can help with medical expenses and lost wages regardless of who caused an accident. It's a required coverage in Florida for most passenger vehicles.",
  },
  {
    question: "What's the difference between collision and comprehensive coverage?",
    answer:
      "Collision coverage generally helps pay for damage to your vehicle from an accident. Comprehensive generally covers damage from other causes such as weather, theft, or falling objects. Each has its own terms and deductible options.",
  },
  {
    question: "What is uninsured motorist coverage?",
    answer:
      "Uninsured motorist coverage can help protect you if you're involved in an accident with a driver who has no insurance or insufficient coverage. It's worth discussing with your agent whether this makes sense for your situation.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Auto Insurance", href: "/auto-insurance" },
];

export default function AutoInsurancePage() {
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
        badge="Auto Insurance · Sunny Isles Beach, FL"
        headline="Auto Insurance in Sunny Isles Beach"
        subheadline="Coverage options designed around how you drive and where you drive in Sunny Isles Beach and across South Florida."
        ctaHref="/quote?type=auto"
        breadcrumb={breadcrumb}
      />

      {/* Coverage overview */}
      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Auto Insurance for Sunny Isles Beach &amp; South Florida Drivers
          </h2>
          <p className="text-navy-500 leading-relaxed mb-4">
            Drivers in Sunny Isles Beach and Miami-Dade County navigate busy
            urban roads, highway corridors, and coastal routes daily. Florida&rsquo;s
            no-fault insurance system means your auto coverage works differently
            here than in many other states — and understanding your options
            before you need them matters.
          </p>
          <p className="text-navy-500 leading-relaxed mb-10">
            Sunny Isles Insurance helps local drivers explore coverage options
            that fit their vehicle, driving habits, and budget — without the
            pressure of a hard sell.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Liability Coverage",
                description:
                  "Helps cover costs if you're responsible for injury or property damage to others in an accident. Required coverage in Florida.",
              },
              {
                title: "Personal Injury Protection (PIP)",
                description:
                  "Provides coverage for medical expenses and lost wages resulting from an auto accident, regardless of fault. Generally required for Florida passenger vehicles.",
              },
              {
                title: "Collision Coverage",
                description:
                  "Helps pay for damage to your vehicle when it collides with another vehicle or object, subject to your deductible.",
              },
              {
                title: "Comprehensive Coverage",
                description:
                  "Covers damage to your vehicle from causes other than collision — such as weather events, theft, vandalism, or falling objects.",
              },
              {
                title: "Uninsured / Underinsured Motorist",
                description:
                  "Provides an additional layer of protection if you're in an accident with a driver who has no insurance or insufficient coverage to pay for your damages.",
              },
              {
                title: "Deductibles",
                description:
                  "The amount you pay out-of-pocket before your coverage applies. Choosing the right deductible depends on your individual situation and preference.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-sand-50 border border-sand-200 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy-50 border border-navy-100 rounded-2xl p-6 text-sm text-navy-600">
            <strong className="text-navy-800">Note:</strong> Coverage terms,
            availability, and requirements vary by insurer and individual
            circumstances. The information above is for general educational
            purposes only and does not represent a guarantee of coverage.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Common Questions
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

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Your Options?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Start a quote request online or give us a call to talk through your
            auto insurance options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=auto"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get My Auto Quote
            </Link>
            <Link
              href="/condo-insurance"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Explore Condo Insurance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
