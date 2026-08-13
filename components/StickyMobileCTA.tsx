"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { business } from "@/lib/constants";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Quick action bar"
    >
      <div className="flex bg-navy-900 border-t border-navy-700 safe-area-inset-bottom">
        <a
          href={business.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white/80 hover:text-white hover:bg-navy-800 transition-colors text-sm font-semibold"
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
          Call Us
        </a>
        <div className="w-px bg-navy-700" />
        <Link
          href="/quote"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-ocean-500 hover:bg-ocean-400 text-white text-sm font-semibold transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
