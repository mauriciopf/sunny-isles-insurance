import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Resources | Sunny Isles Beach Insurance Guides",
  description:
    "Educational guides and answers to common Florida insurance questions — condo coverage, flood risk, auto insurance PIP and more. From Sunny Isles Insurance.",
  path: "/resources",
});

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
];

const articles = [
  {
    slug: "condo-insurance-florida",
    title: "What Does Condo Insurance Cover in Florida?",
    description:
      "Florida condominium owners face a unique coverage situation — your unit, belongings, and liability may not be covered by your association's master policy. Here's what to understand about HO-6 insurance in Sunny Isles Beach and across Florida.",
    category: "Condo Insurance",
    readTime: "6 min read",
  },
  {
    slug: "flood-insurance-basics",
    title: "Does Homeowners Insurance Cover Flooding in Florida?",
    description:
      "A common misconception. Standard homeowners and condo policies generally do not cover flooding from external water sources. Here's what South Florida property owners need to know about flood insurance.",
    category: "Flood Insurance",
    readTime: "5 min read",
  },
  {
    slug: "florida-auto-pip",
    title: "Understanding Personal Injury Protection (PIP) in Florida",
    description:
      "Florida operates under a no-fault insurance system, making PIP coverage an important part of auto insurance for Sunny Isles Beach and South Florida drivers. Here's a plain-language overview.",
    category: "Auto Insurance",
    readTime: "5 min read",
  },
];

export default function ResourcesPage() {
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
              <li className="text-white/70" aria-current="page">Resources</li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
            <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Insurance, Explained Clearly
          </h1>
          <p className="text-lg text-white/65 max-w-xl leading-relaxed">
            Practical guides and answers to common Florida insurance questions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-py-lg bg-sand-50">
        <div className="container-wide max-w-4xl">
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-sand-200 rounded-2xl p-7 hover:border-navy-200 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-ocean-600 bg-ocean-50 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-navy-400">{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-ocean-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-navy-500 leading-relaxed mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/resources/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-500 hover:text-ocean-600 transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-navy-900 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h2>
            <p className="text-white/60 mb-6 text-sm">
              Our team is here to help. Reach out directly or start a quote request.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Get a Quote
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
