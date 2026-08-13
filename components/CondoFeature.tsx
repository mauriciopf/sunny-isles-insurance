import Link from "next/link";
import { business } from "@/lib/constants";

export default function CondoFeature() {
  return (
    <section
      className="section-py-lg bg-sand-100"
      aria-labelledby="condo-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-aqua-100 text-aqua-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua-500" aria-hidden="true" />
              Condo Insurance
            </div>

            <h2
              id="condo-heading"
              className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6"
            >
              Own a Condo? Your Association&rsquo;s Policy Doesn&rsquo;t Cover
              Everything.
            </h2>

            <p className="text-lg text-navy-600 leading-relaxed mb-6">
              Your condominium association may insure parts of the building, but
              your unit, belongings, upgrades, personal liability and certain
              assessments can require separate coverage.
            </p>

            <p className="text-sm text-navy-500 leading-relaxed mb-10">
              Understanding the difference between what your association&rsquo;s
              master policy covers and what it doesn&rsquo;t is an important
              step. We help you review the gap and explore condo insurance
              options that may fit your situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/condo-insurance"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                Explore Condo Insurance
              </Link>
              <Link
                href="/quote?type=condo"
                className="inline-flex items-center justify-center gap-2 border border-navy-300 hover:border-navy-400 text-navy-800 hover:text-navy-900 font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                Request a Condo Quote
              </Link>
            </div>
          </div>

          {/* Visual — condo interior/exterior representation */}
          <div className="relative" aria-hidden="true">
            <div
              className="rounded-3xl overflow-hidden aspect-square"
              style={{
                background: "linear-gradient(145deg, #f5f1eb 0%, #ede6d6 100%)",
              }}
            >
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full p-8"
              >
                {/* Building facade */}
                <rect
                  x="80"
                  y="80"
                  width="340"
                  height="380"
                  rx="8"
                  fill="white"
                  stroke="#e0d4bc"
                  strokeWidth="1.5"
                />

                {/* Grid of windows/units */}
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <g key={`${row}-${col}`}>
                      <rect
                        x={110 + col * 78}
                        y={110 + row * 82}
                        width="58"
                        height="62"
                        rx="4"
                        fill={row === 1 && col === 1 ? "#e0f2fe" : "#f5f1eb"}
                        stroke={
                          row === 1 && col === 1 ? "#0ea5e9" : "#e0d4bc"
                        }
                        strokeWidth={row === 1 && col === 1 ? "2" : "1"}
                      />
                      {/* Balcony railing */}
                      <line
                        x1={110 + col * 78}
                        y1={172 + row * 82}
                        x2={168 + col * 78}
                        y2={172 + row * 82}
                        stroke="#e0d4bc"
                        strokeWidth="1.5"
                      />
                    </g>
                  ))
                )}

                {/* Highlighted unit — your unit */}
                <rect
                  x="188"
                  y="192"
                  width="58"
                  height="62"
                  rx="4"
                  fill="#dbeafe"
                  stroke="#1565c0"
                  strokeWidth="2.5"
                />
                <text
                  x="217"
                  y="227"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#1565c0"
                  fontWeight="600"
                >
                  Your
                </text>
                <text
                  x="217"
                  y="241"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#1565c0"
                  fontWeight="600"
                >
                  Unit
                </text>

                {/* Annotation */}
                <line
                  x1="246"
                  y1="223"
                  x2="310"
                  y2="200"
                  stroke="#1565c0"
                  strokeWidth="1.5"
                  strokeDasharray="4,3"
                />
                <rect
                  x="310"
                  y="185"
                  width="100"
                  height="30"
                  rx="6"
                  fill="#1565c0"
                />
                <text
                  x="360"
                  y="204"
                  textAnchor="middle"
                  fontSize="10"
                  fill="white"
                  fontWeight="600"
                >
                  HO-6 Coverage
                </text>

                {/* Ground floor entrance */}
                <rect
                  x="200"
                  y="420"
                  width="100"
                  height="40"
                  rx="4"
                  fill="#e0d4bc"
                />
                <rect
                  x="224"
                  y="410"
                  width="52"
                  height="50"
                  rx="3"
                  fill="#ccc0a0"
                />
              </svg>
            </div>

            {/* Coverage callout card */}
            <div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow-xl border border-sand-200 p-4 max-w-[200px]">
              <p className="text-xs font-semibold text-navy-900 mb-1">
                HO-6 Policy
              </p>
              <p className="text-xs text-navy-500">
                Interior, belongings, liability & loss assessment coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
