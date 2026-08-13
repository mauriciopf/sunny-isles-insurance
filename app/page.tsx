import type { Metadata } from "next";
import Link from "next/link";
import { defaultMetadata } from "@/lib/metadata";
import { getFaqSchema } from "@/lib/structured-data";
import { homeFaqs, business } from "@/lib/constants";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CoverageGrid from "@/components/CoverageGrid";
import FloridaSection from "@/components/FloridaSection";
import CondoFeature from "@/components/CondoFeature";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";
import HomeFAQ from "@/components/HomeFAQ";
import HomeCTA from "@/components/HomeCTA";

export const metadata: Metadata = defaultMetadata;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqSchema(homeFaqs as unknown as Array<{ question: string; answer: string }>)),
        }}
      />
      <Hero />
      <TrustStrip />

      {/* SEO intro paragraph — immediately signals topic + location to Google */}
      <section className="bg-white border-b border-sand-100" aria-label="About Sunny Isles Insurance">
        <div className="container-wide py-10">
          <p className="text-navy-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            <strong className="text-navy-900">Sunny Isles Insurance</strong> is a
            local insurance agency serving{" "}
            <Link href="/sunny-isles-beach-insurance" className="text-ocean-500 hover:underline font-medium">
              Sunny Isles Beach, FL
            </Link>{" "}
            and surrounding communities in Miami-Dade County and South Florida.
            We help individuals, families and businesses explore{" "}
            <Link href="/auto-insurance" className="text-ocean-500 hover:underline">auto</Link>,{" "}
            <Link href="/condo-insurance" className="text-ocean-500 hover:underline">condo (HO-6)</Link>,{" "}
            <Link href="/homeowners-insurance" className="text-ocean-500 hover:underline">homeowners</Link>,{" "}
            <Link href="/flood-insurance" className="text-ocean-500 hover:underline">flood</Link>,{" "}
            <Link href="/renters-insurance" className="text-ocean-500 hover:underline">renters</Link> and{" "}
            <Link href="/business-insurance" className="text-ocean-500 hover:underline">business insurance</Link>{" "}
            options with personalized guidance. Call{" "}
            <a href={business.phoneHref} className="text-ocean-500 font-medium hover:underline">
              {business.phoneDisplay}
            </a>{" "}
            or{" "}
            <Link href="/quote" className="text-ocean-500 font-medium hover:underline">
              request a quote online
            </Link>
            .
          </p>
        </div>
      </section>

      <CoverageGrid />
      <FloridaSection />
      <CondoFeature />
      <WhyUs />
      <ProcessSteps />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
