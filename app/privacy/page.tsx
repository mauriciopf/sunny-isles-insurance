import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { business, disclaimer } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Sunny Isles Insurance",
  description: "Privacy Policy for Sunny Isles Insurance.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <section className="bg-navy-900 pt-28 pb-12">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12 prose prose-navy max-w-none">
            <div className="space-y-8 text-navy-600 text-sm leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Overview</h2>
                <p>
                  {business.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of visitors to {business.domain}. This Privacy Policy explains how we collect, use, and handle information when you use our website or submit a quote request.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Information We Collect</h2>
                <p>We may collect information you voluntarily provide when you:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Submit a quote request form</li>
                  <li>Use our contact form</li>
                  <li>Call us directly</li>
                </ul>
                <p className="mt-3">This information may include your name, email address, phone number, ZIP code, and details about the insurance coverage you are exploring.</p>
                <p className="mt-3">We may also collect standard web analytics data (page views, browser type, etc.) through analytics tools. See the Analytics section below.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">How We Use Your Information</h2>
                <p>We use the information you provide to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Respond to your quote requests and inquiries</li>
                  <li>Follow up regarding insurance coverage options</li>
                  <li>Communicate with you about your request</li>
                  <li>Improve our website and services</li>
                </ul>
                <p className="mt-3">We do not sell your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Analytics</h2>
                <p>We may use analytics tools (such as Vercel Analytics or Google Analytics) to understand how visitors use our website. These tools may collect anonymized data about pages visited and general usage patterns. We configure these tools to respect privacy and do not use them to track individual users across unrelated websites.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Data Retention</h2>
                <p>We retain information you submit for as long as needed to fulfill the purposes described in this policy or as required by applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Your Rights</h2>
                <p>You may contact us to request access to, correction of, or deletion of personal information we hold about you. We will respond to reasonable requests in accordance with applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">Contact</h2>
                <p>
                  For privacy-related questions, please contact us at{" "}
                  <a href={business.phoneHref} className="text-ocean-500 font-semibold">{business.phoneDisplay}</a>
                  {business.email && (
                    <> or <a href={`mailto:${business.email}`} className="text-ocean-500 font-semibold">{business.email}</a></>
                  )}.
                </p>
              </div>

              <div className="bg-sand-50 border border-sand-200 rounded-xl p-4 text-xs text-navy-500">
                {disclaimer}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
