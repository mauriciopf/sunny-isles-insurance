import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { business, insuranceProducts } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About | Sunny Isles Insurance",
  description:
    "A modern Florida-focused insurance agency built around personal communication, clear guidance, and a better customer experience.",
  path: "/about",
});

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />

      {/* Hero */}
      <section className="bg-navy-900 pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
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
              <li className="text-white/70" aria-current="page">About</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
            <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            A More Personal Way to Navigate Insurance
          </h1>
          <p className="text-lg text-white/65 max-w-xl leading-relaxed">
            Sunny Isles Insurance was built around a simple idea: insurance
            should be easier to understand, easier to access, and more personal
            than the typical experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py-lg bg-white">
        <div className="container-wide max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-5">
                Why We Built This Agency
              </h2>
              <div className="space-y-4 text-navy-500 leading-relaxed">
                <p>
                  Florida insurance can be confusing. The market is unique,
                  policies vary significantly, and the experience of working with
                  large national insurance companies doesn&rsquo;t always feel
                  personal or helpful.
                </p>
                <p>
                  Sunny Isles Insurance exists to offer a different kind of
                  experience — one where you can actually talk to someone,
                  where explanations are clear, and where the conversation is
                  focused on what you need rather than what&rsquo;s easiest to
                  sell.
                </p>
                <p>
                  Our focus is South Florida — specifically Sunny Isles Beach
                  and the surrounding Miami-Dade area — because we believe
                  insurance works better when the person helping you actually
                  understands the local market.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Personal Communication",
                  description: "You can reach us by phone or through our contact form. We respond to questions and follow up on quote requests personally.",
                },
                {
                  title: "Straightforward Explanations",
                  description: "We focus on explaining coverage in plain language so you can make more informed decisions — not more confused ones.",
                },
                {
                  title: "Florida Market Focus",
                  description: "We concentrate on Florida insurance products and the specific considerations that come with living and owning property here.",
                },
                {
                  title: "Modern Experience",
                  description: "From online quoting to straightforward communication, we&rsquo;re built to work the way you actually want to work.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-aqua-500 flex-shrink-0 mt-2" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-py bg-sand-100">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-navy-900 mb-2 text-center">
            Coverage We Help You Explore
          </h2>
          <p className="text-navy-500 text-center mb-10">
            {business.serviceAreaFull}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {insuranceProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="bg-white border border-sand-200 hover:border-navy-300 rounded-2xl p-5 text-center transition-colors group"
              >
                <p className="font-semibold text-navy-900 text-sm group-hover:text-ocean-500 transition-colors">
                  {product.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Request a quote online or reach out directly. We&rsquo;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Get My Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
