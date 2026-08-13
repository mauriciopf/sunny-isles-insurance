export default function FloridaSection() {
  return (
    <section
      className="section-py-lg bg-navy-900 overflow-hidden"
      aria-labelledby="florida-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual side */}
          <div className="relative" aria-hidden="true">
            <div
              className="aspect-[4/3] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0c1b33 0%, #132540 50%, #1c314e 100%)",
              }}
            >
              {/* Abstracted Florida coastal composition */}
              <svg
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Sky gradient */}
                <rect width="600" height="450" fill="url(#sky)" />

                {/* Water */}
                <rect y="320" width="600" height="130" fill="url(#water)" />

                {/* Water shimmer lines */}
                {[330, 345, 358, 371, 384].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="600"
                    y2={y}
                    stroke="rgba(14,165,233,0.12)"
                    strokeWidth="1"
                  />
                ))}

                {/* Main tower — Sunny Isles style */}
                <rect
                  x="220"
                  y="60"
                  width="90"
                  height="265"
                  rx="5"
                  fill="url(#t1)"
                />
                {/* Balconies */}
                {[80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280].map(
                  (y) => (
                    <g key={y}>
                      <rect
                        x="215"
                        y={y}
                        width="100"
                        height="12"
                        rx="1"
                        fill="rgba(255,255,255,0.06)"
                      />
                      <rect
                        x="232"
                        y={y + 2}
                        width="14"
                        height="8"
                        rx="1"
                        fill="rgba(14,165,233,0.3)"
                      />
                      <rect
                        x="260"
                        y={y + 2}
                        width="14"
                        height="8"
                        rx="1"
                        fill="rgba(14,165,233,0.2)"
                      />
                      <rect
                        x="288"
                        y={y + 2}
                        width="14"
                        height="8"
                        rx="1"
                        fill="rgba(14,165,233,0.25)"
                      />
                    </g>
                  )
                )}

                {/* Left tower */}
                <rect
                  x="100"
                  y="140"
                  width="65"
                  height="185"
                  rx="3"
                  fill="url(#t2)"
                />
                {[155, 175, 195, 215, 235, 255, 275, 295].map((y) => (
                  <g key={y}>
                    <rect
                      x="112"
                      y={y}
                      width="10"
                      height="12"
                      rx="1"
                      fill="rgba(14,165,233,0.25)"
                    />
                    <rect
                      x="143"
                      y={y}
                      width="10"
                      height="12"
                      rx="1"
                      fill="rgba(14,165,233,0.2)"
                    />
                  </g>
                ))}

                {/* Right tower */}
                <rect
                  x="380"
                  y="100"
                  width="75"
                  height="225"
                  rx="3"
                  fill="url(#t3)"
                />
                {[115, 135, 155, 175, 195, 215, 235, 255, 275, 295].map(
                  (y) => (
                    <g key={y}>
                      <rect
                        x="392"
                        y={y}
                        width="11"
                        height="14"
                        rx="1"
                        fill="rgba(14,165,233,0.3)"
                      />
                      <rect
                        x="432"
                        y={y}
                        width="11"
                        height="14"
                        rx="1"
                        fill="rgba(14,165,233,0.2)"
                      />
                    </g>
                  )
                )}

                {/* Small far towers */}
                <rect
                  x="470"
                  y="180"
                  width="45"
                  height="145"
                  rx="2"
                  fill="url(#t4)"
                />
                <rect
                  x="30"
                  y="200"
                  width="50"
                  height="125"
                  rx="2"
                  fill="url(#t4)"
                />

                {/* Palm tree */}
                <line
                  x1="560"
                  y1="320"
                  x2="555"
                  y2="220"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M555 220 C548 208, 535 210, 528 205"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M555 220 C562 208, 575 210, 582 205"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M555 220 C553 210, 555 200, 555 193"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Aqua accent glow */}
                <ellipse
                  cx="265"
                  cy="320"
                  rx="120"
                  ry="20"
                  fill="rgba(14,165,233,0.15)"
                />

                <defs>
                  <linearGradient
                    id="sky"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#060d1a" />
                    <stop offset="60%" stopColor="#0c1b33" />
                    <stop offset="100%" stopColor="#132540" />
                  </linearGradient>
                  <linearGradient
                    id="water"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#0c2a4a" />
                    <stop offset="100%" stopColor="#060d1a" />
                  </linearGradient>
                  <linearGradient id="t1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#243a62" />
                    <stop offset="100%" stopColor="#1c314e" />
                  </linearGradient>
                  <linearGradient id="t2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1c314e" />
                    <stop offset="100%" stopColor="#132540" />
                  </linearGradient>
                  <linearGradient id="t3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#24405f" />
                    <stop offset="100%" stopColor="#1c314e" />
                  </linearGradient>
                  <linearGradient id="t4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#172d4d" />
                    <stop offset="100%" stopColor="#0c1b33" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 bg-aqua-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg">
              Sunny Isles Beach
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-aqua-400" aria-hidden="true" />
              <span className="text-aqua-400 text-xs font-semibold uppercase tracking-widest">
                Local Understanding
              </span>
            </div>

            <h2
              id="florida-heading"
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
            >
              Insurance Built for Florida Living
            </h2>

            <div className="space-y-5 text-white/65 leading-relaxed">
              <p>
                Florida insurance is different. Homes, condos, vehicles and
                businesses in South Florida face unique considerations — from
                coastal exposure and evolving market conditions to condominium
                association requirements and complex property arrangements.
              </p>
              <p>
                Sunny Isles Insurance helps customers understand their options
                without making insurance feel unnecessarily complicated. Our
                focus is South Florida, which means the conversations stay
                relevant to where you actually live and what you actually own.
              </p>
              <p>
                Whether you&rsquo;re in a high-rise on the beach, a family home
                in Miami-Dade, or running a business in the area, we work to
                make the process clear.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "6+", label: "Coverage Types" },
                { value: "FL", label: "State-Wide Service" },
                { value: "24/7", label: "Online Quoting" },
                { value: "0", label: "Obligation to Quote" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-800/60 border border-navy-700 rounded-xl p-4"
                >
                  <p className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
