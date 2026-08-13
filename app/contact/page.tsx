import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { business } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Sunny Isles Insurance",
  description:
    "Get in touch with Sunny Isles Insurance. Call, message, or request a quote. Serving Sunny Isles Beach, South Florida and customers throughout Florida.",
  path: "/contact",
});

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />

      {/* Hero */}
      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">Contact</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
            <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Let&rsquo;s Talk
          </h1>
          <p className="text-lg text-white/65 max-w-md">
            Reach out by phone, send a message, or start a quote request. We&rsquo;re here to help.
          </p>
        </div>
      </section>

      <section className="section-py-lg bg-sand-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-1">Phone</p>
                    <a href={business.phoneHref} className="text-lg font-semibold text-navy-900 hover:text-ocean-500 transition-colors">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-1">Service Area</p>
                    <p className="text-navy-800 text-sm leading-relaxed">{business.serviceAreaFull}</p>
                  </div>
                </div>

                {/* Hours placeholder */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 mb-1">Hours</p>
                    <p className="text-navy-800 text-sm">
                      {business.hours || "Contact us for current hours"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="space-y-3">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-between bg-navy-900 hover:bg-navy-800 text-white rounded-2xl px-6 py-5 transition-colors group"
                  aria-label={`Call ${business.phoneDisplay}`}
                >
                  <div>
                    <p className="font-semibold text-sm">Call Us Now</p>
                    <p className="text-white/60 text-xs mt-0.5">{business.phoneDisplay}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-between bg-ocean-500 hover:bg-ocean-400 text-white rounded-2xl px-6 py-5 transition-colors group"
                >
                  <div>
                    <p className="font-semibold text-sm">Start a Quote Request</p>
                    <p className="text-white/70 text-xs mt-0.5">Quick online process, no obligation</p>
                  </div>
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white/90 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-3xl border border-sand-200 p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-1">Send a Message</h2>
              <p className="text-sm text-navy-500 mb-7">
                We&rsquo;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
