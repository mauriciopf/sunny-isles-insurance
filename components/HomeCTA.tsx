import Link from "next/link";
import { business } from "@/lib/constants";

export default function HomeCTA() {
  return (
    <section
      className="section-py-lg bg-navy-900 overflow-hidden relative"
      aria-labelledby="cta-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      {/* Gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,165,233,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto"
        >
          Protect What Matters. Start With a Conversation.
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          Tell us what you need to insure and take the first step toward finding
          coverage that fits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-ocean-500/30 text-base w-full sm:w-auto justify-center"
          >
            Get My Quote
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
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-base w-full sm:w-auto justify-center"
            aria-label={`Call us at ${business.phoneDisplay}`}
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

        <p className="text-sm text-white/35 mt-6">
          Simple process. Personal guidance. No obligation.
        </p>
      </div>
    </section>
  );
}
