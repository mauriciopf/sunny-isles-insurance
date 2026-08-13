import Link from "next/link";
import { business } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <section className="bg-navy-900 pt-28 pb-16">
        <div className="container-wide">
          <p className="text-aqua-400 text-sm font-semibold uppercase tracking-widest mb-4">
            404 — Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            This page doesn&rsquo;t exist.
          </h1>
          <p className="text-white/60 max-w-md">
            The page you&rsquo;re looking for may have moved or the URL may be
            incorrect.
          </p>
        </div>
      </section>

      <section className="section-py">
        <div className="container-wide max-w-2xl">
          <h2 className="text-xl font-bold text-navy-900 mb-6">
            Try one of these instead:
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "Homepage", href: "/" },
              { label: "Get a Quote", href: "/quote" },
              { label: "Condo Insurance", href: "/condo-insurance" },
              { label: "Auto Insurance", href: "/auto-insurance" },
              { label: "Homeowners Insurance", href: "/homeowners-insurance" },
              { label: "Flood Insurance", href: "/flood-insurance" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-sand-200 hover:border-navy-300 rounded-xl px-5 py-4 text-sm font-semibold text-navy-800 hover:text-ocean-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="bg-navy-900 rounded-2xl p-6 text-center">
            <p className="text-white/70 text-sm mb-3">
              Need help? Reach us directly.
            </p>
            <a
              href={business.phoneHref}
              className="text-aqua-400 font-semibold text-lg hover:text-white transition-colors"
              aria-label={`Call ${business.phoneDisplay}`}
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
