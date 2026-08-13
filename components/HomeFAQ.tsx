"use client";

import { useState } from "react";
import { homeFaqs } from "@/lib/constants";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="section-py bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4"
            >
              Insurance Questions from Sunny Isles Beach Residents
            </h2>
            <p className="text-lg text-navy-500">
              Common questions about insurance in Sunny Isles Beach and South Florida.
            </p>
          </div>

          <dl className="space-y-3">
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                className="border border-sand-200 rounded-2xl overflow-hidden"
              >
                <dt>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-sand-50 transition-colors"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="font-semibold text-navy-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border border-navy-200 flex items-center justify-center transition-transform ${
                        openIndex === i ? "rotate-45 bg-navy-900 border-navy-900" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className={`w-3 h-3 ${openIndex === i ? "text-white" : "text-navy-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-navy-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
