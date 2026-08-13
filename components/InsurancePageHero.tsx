import Link from "next/link";
import { business } from "@/lib/constants";

interface InsurancePageHeroProps {
  badge: string;
  headline: string;
  subheadline: string;
  ctaHref?: string;
  ctaLabel?: string;
  breadcrumb?: { name: string; href: string }[];
}

export default function InsurancePageHero({
  badge,
  headline,
  subheadline,
  ctaHref = "/quote",
  ctaLabel = "Get My Quote",
  breadcrumb,
}: InsurancePageHeroProps) {
  return (
    <section
      className="relative bg-navy-900 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      aria-label={`${badge} hero`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(14,165,233,0.3) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-white/70" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/70 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
          <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">
            {badge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
          {headline}
        </h1>

        <p className="text-lg text-white/65 max-w-xl mb-10 leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg text-sm"
          >
            {ctaLabel}
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            aria-label={`Call ${business.phoneDisplay}`}
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
