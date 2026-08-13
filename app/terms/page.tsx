import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { business, disclaimer } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | Sunny Isles Insurance",
  description: "Terms of Use for Sunny Isles Insurance.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <section className="bg-navy-900 pt-28 pb-12">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Terms of Use</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms of Use</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12">
            <div className="space-y-8 text-navy-600 text-sm leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Acceptance of Terms</h2>
                <p>By accessing or using {business.domain}, you agree to these Terms of Use. If you do not agree, please do not use the website.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Informational Purpose Only</h2>
                <p>The content on this website is provided for general informational purposes only. It does not constitute insurance advice, a binding quote, an offer to provide insurance, or the creation of an insurance policy.</p>
                <p className="mt-3">{disclaimer}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">No Coverage Binding</h2>
                <p>Submitting a quote request form on this website does not create, bind, or modify insurance coverage. Coverage is only effective when formally confirmed and issued by the appropriate insurer or authorized party.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Accuracy of Information</h2>
                <p>We strive to provide accurate and current information, but we make no warranty or guarantee regarding the accuracy, completeness, or suitability of any content on this website for any particular purpose.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Links and Third-Party Content</h2>
                <p>This website may contain links to third-party websites. We are not responsible for the content, accuracy, or privacy practices of any third-party websites.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Intellectual Property</h2>
                <p>All content on this website — including text, design, graphics, and code — is the property of {business.name} or its licensors and may not be reproduced without permission.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Changes to These Terms</h2>
                <p>We reserve the right to update these Terms of Use at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Contact</h2>
                <p>
                  Questions about these terms? Contact us at{" "}
                  <a href={business.phoneHref} className="text-ocean-500 font-semibold">{business.phoneDisplay}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
