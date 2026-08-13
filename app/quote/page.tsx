import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import QuoteForm from "@/components/QuoteForm";
import type { InsuranceType } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Get a Quote | Sunny Isles Insurance",
  description:
    "Request a personalized insurance quote for auto, condo, home, flood, renters or business insurance. Quick, simple, no obligation.",
  path: "/quote",
});

interface QuotePageProps {
  searchParams: Promise<{ type?: string }>;
}

const validTypes: InsuranceType[] = [
  "auto",
  "condo",
  "home",
  "renters",
  "flood",
  "business",
  "other",
];

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const typeParam = params.type;
  const defaultType =
    typeParam && validTypes.includes(typeParam as InsuranceType)
      ? (typeParam as InsuranceType)
      : undefined;

  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: "Get a Quote", href: "/quote" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />

      {/* Page hero */}
      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li>
                <Link href="/" className="hover:text-white/70 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70" aria-current="page">
                Get a Quote
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Request a Quote
          </h1>
          <p className="text-white/60 max-w-md">
            A few quick details and we&rsquo;ll take it from there. No
            obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-py-lg bg-sand-50">
        <div className="container-wide">
          <QuoteForm defaultType={defaultType} />
        </div>
      </section>
    </>
  );
}
