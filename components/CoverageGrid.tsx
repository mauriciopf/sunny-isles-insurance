import Link from "next/link";
import { insuranceProducts } from "@/lib/constants";

function ProductIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    auto: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    ),
    condo: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
    home: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
    flood: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    ),
    renters: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    ),
    business: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
      />
    ),
  };

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      {icons[id] ?? null}
    </svg>
  );
}

export default function CoverageGrid() {
  return (
    <section
      id="insurance"
      className="section-py-lg bg-sand-50"
      aria-labelledby="coverage-heading"
    >
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <h2
            id="coverage-heading"
            className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight"
          >
            Auto, Condo, Home &amp; Flood Insurance in Sunny Isles Beach
          </h2>
          <p className="text-lg text-navy-500">
            Sunny Isles Insurance helps individuals, families and businesses in
            Sunny Isles Beach and across South Florida explore coverage built
            around their needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {insuranceProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className={`group relative bg-white rounded-2xl p-7 border transition-all duration-200 card-hover flex flex-col ${
                'featured' in product && product.featured
                  ? "border-aqua-400/60 shadow-lg shadow-aqua-500/10"
                  : "border-sand-200 hover:border-navy-200"
              }`}
              aria-label={`Learn about ${product.label}`}
            >
              {'featured' in product && product.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-aqua-600 bg-aqua-100 px-2.5 py-1 rounded-full">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  'featured' in product && product.featured
                    ? "bg-aqua-500/10 text-aqua-600"
                    : "bg-navy-50 text-navy-600"
                }`}
              >
                <ProductIcon id={product.id} />
              </div>

              <h3 className="font-semibold text-navy-900 text-base mb-2">
                {product.label}
              </h3>
              <p className="text-sm text-navy-500 leading-relaxed flex-1 mb-5">
                {product.shortDescription}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-500 group-hover:gap-2.5 transition-all">
                {product.cta}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
