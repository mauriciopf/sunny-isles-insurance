"use client";

import Link from "next/link";
import { useEffect } from "react";
import { business, navInsurance, navMain } from "@/lib/constants";
import LogoIcon from "./ui/LogoIcon";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-navy-900 flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-navy-700">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5"
            aria-label="Sunny Isles Insurance — Home"
          >
            <LogoIcon className="w-7 h-7 text-white" />
            <span className="text-white font-semibold text-sm">
              Sunny Isles Insurance
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-navy-800"
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex-1 overflow-y-auto py-6 px-6"
          aria-label="Mobile navigation"
        >
          {/* Insurance products */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-aqua-400 mb-3">
              Insurance
            </p>
            <div className="space-y-1">
              {navInsurance.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 text-white/80 hover:text-white hover:bg-navy-800 rounded-lg transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Other nav items */}
          <div className="border-t border-navy-700 pt-6 space-y-1">
            {navMain
              .filter((item) => !('hasDropdown' in item && item.hasDropdown))
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 text-white/80 hover:text-white hover:bg-navy-800 rounded-lg transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 py-6 border-t border-navy-700 space-y-3">
          <Link
            href="/quote"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-ocean-500 hover:bg-ocean-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm"
          >
            Get My Quote
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 w-full border border-navy-600 hover:border-navy-500 text-white/80 hover:text-white font-medium py-3.5 px-6 rounded-xl transition-colors text-sm"
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
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
