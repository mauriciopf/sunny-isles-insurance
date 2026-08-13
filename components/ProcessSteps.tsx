import Link from "next/link";
import { processSteps } from "@/lib/constants";

export default function ProcessSteps() {
  return (
    <section
      className="section-py-lg bg-sand-100"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4"
          >
            Getting Started Takes Minutes
          </h2>
          <p className="text-lg text-navy-500">
            A straightforward process designed to get you the right information
            without unnecessary complexity.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[55%] h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-2 border-sand-200 group-hover:border-ocean-200 shadow-sm mb-6 transition-colors mx-auto">
                  <span className="text-3xl font-bold text-navy-200 group-hover:text-ocean-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-semibold text-navy-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base shadow-md"
          >
            Start My Quote
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
        </div>
      </div>
    </section>
  );
}
