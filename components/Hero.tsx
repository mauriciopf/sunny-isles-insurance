import Link from "next/link";
import { business } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
      aria-label="Hero section"
    >
      {/* Background gradient layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #060d1a 0%, #0c1b33 40%, #132540 70%, #1c314e 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle geometric skyline overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900'%3E%3Crect x='1100' y='200' width='60' height='700' fill='%23ffffff'/%3E%3Crect x='1170' y='100' width='80' height='800' fill='%23ffffff'/%3E%3Crect x='1260' y='250' width='50' height='650' fill='%23ffffff'/%3E%3Crect x='1320' y='300' width='120' height='600' fill='%23ffffff'/%3E%3Crect x='960' y='350' width='40' height='550' fill='%23ffffff'/%3E%3Crect x='1010' y='280' width='70' height='620' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
        aria-hidden="true"
      />

      {/* Right side architectural glow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(14,165,233,0.18) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Horizontal light line — coastal horizon */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/30 to-transparent"
        style={{ top: "55%" }}
        aria-hidden="true"
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 py-32 md:py-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-screen lg:min-h-0 lg:py-40">
          {/* Content — left weighted */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Pre-headline / tagline */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
              <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">
                Sunny Isles Beach &middot; South Florida
              </span>
            </div>

            {/* SEO-optimized H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4">
              Insurance Agency in{" "}
              <span className="text-gradient">Sunny Isles Beach</span>
            </h1>

            {/* Brand tagline */}
            <p className="text-base sm:text-lg font-medium text-white/50 mb-4 tracking-wide">
              Florida Insurance. Made Personal.
            </p>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/65 leading-relaxed max-w-lg mb-10">
              Auto, home, condo, flood and business insurance with personalized
              guidance for Sunny Isles Beach and across Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-ocean-500/30 text-base"
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
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/85 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
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

            {/* Reassurance */}
            <p className="text-sm text-white/40">
              Simple process. Personal guidance. No obligation.
            </p>
          </div>

          {/* Visual — right column */}
          <div
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-end"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-lg xl:max-w-xl">
              {/* Primary tower shape */}
              <svg
                viewBox="0 0 480 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full opacity-90"
              >
                {/* Background glow */}
                <ellipse
                  cx="280"
                  cy="300"
                  rx="180"
                  ry="260"
                  fill="url(#glow)"
                  opacity="0.2"
                />

                {/* Main tower — center */}
                <rect
                  x="200"
                  y="80"
                  width="80"
                  height="520"
                  rx="4"
                  fill="url(#tower1)"
                  opacity="0.9"
                />
                {/* Windows — main tower */}
                {[100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460].map(
                  (y) => (
                    <g key={y}>
                      <rect
                        x="212"
                        y={y}
                        width="14"
                        height="18"
                        rx="1"
                        fill="rgba(14,165,233,0.4)"
                      />
                      <rect
                        x="254"
                        y={y}
                        width="14"
                        height="18"
                        rx="1"
                        fill="rgba(14,165,233,0.3)"
                      />
                    </g>
                  )
                )}

                {/* Left tower */}
                <rect
                  x="100"
                  y="160"
                  width="55"
                  height="440"
                  rx="3"
                  fill="url(#tower2)"
                  opacity="0.7"
                />
                {[180, 210, 240, 270, 300, 330, 360, 390, 420].map((y) => (
                  <rect
                    key={y}
                    x="112"
                    y={y}
                    width="12"
                    height="16"
                    rx="1"
                    fill="rgba(56,189,248,0.25)"
                  />
                ))}

                {/* Right tower — tall */}
                <rect
                  x="320"
                  y="120"
                  width="70"
                  height="480"
                  rx="3"
                  fill="url(#tower3)"
                  opacity="0.75"
                />
                {[140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440].map(
                  (y) => (
                    <g key={y}>
                      <rect
                        x="330"
                        y={y}
                        width="11"
                        height="14"
                        rx="1"
                        fill="rgba(14,165,233,0.35)"
                      />
                      <rect
                        x="368"
                        y={y}
                        width="11"
                        height="14"
                        rx="1"
                        fill="rgba(14,165,233,0.2)"
                      />
                    </g>
                  )
                )}

                {/* Far right small tower */}
                <rect
                  x="410"
                  y="240"
                  width="40"
                  height="360"
                  rx="2"
                  fill="url(#tower4)"
                  opacity="0.5"
                />

                {/* Ground / water reflection */}
                <rect
                  x="0"
                  y="590"
                  width="480"
                  height="10"
                  fill="rgba(14,165,233,0.15)"
                />
                <rect
                  x="0"
                  y="598"
                  width="480"
                  height="2"
                  fill="rgba(14,165,233,0.08)"
                />

                {/* Aqua accent top glow on main tower */}
                <rect
                  x="200"
                  y="78"
                  width="80"
                  height="4"
                  rx="2"
                  fill="rgba(14,165,233,0.8)"
                />

                {/* Horizon line */}
                <line
                  x1="0"
                  y1="586"
                  x2="480"
                  y2="586"
                  stroke="rgba(14,165,233,0.3)"
                  strokeWidth="1"
                />

                <defs>
                  <linearGradient
                    id="glow"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#1565c0" />
                  </linearGradient>
                  <linearGradient
                    id="tower1"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#243a62" />
                    <stop offset="100%" stopColor="#1c314e" />
                  </linearGradient>
                  <linearGradient
                    id="tower2"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1c2f52" />
                    <stop offset="100%" stopColor="#132540" />
                  </linearGradient>
                  <linearGradient
                    id="tower3"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#243a62" />
                    <stop offset="100%" stopColor="#172d4d" />
                  </linearGradient>
                  <linearGradient
                    id="tower4"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#1c314e" />
                    <stop offset="100%" stopColor="#0c1b33" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating stat cards */}
              <div className="absolute top-20 -left-4 xl:-left-12 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
                <p className="text-white/50 text-xs mb-1">Coverage Types</p>
                <p className="text-white font-bold text-xl">6+</p>
              </div>
              <div className="absolute bottom-32 -right-4 xl:-right-8 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
                <p className="text-white/50 text-xs mb-1">Service Area</p>
                <p className="text-white font-bold text-base">All Florida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs uppercase tracking-widest">
          Explore
        </span>
        <svg
          className="w-4 h-4 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
