"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { business, navMain, navInsurance } from "@/lib/constants";
import MobileNav from "./MobileNav";
import LogoIcon from "./ui/LogoIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setInsuranceOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Sunny Isles Insurance — Home"
            >
              <LogoIcon
                className={`w-8 h-8 transition-colors ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              />
              <span
                className={`font-semibold text-base leading-tight transition-colors ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                Sunny Isles Insurance
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navMain.map((item) =>
                'hasDropdown' in item && item.hasDropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    ref={dropdownRef}
                  >
                    <button
                      onClick={() => setInsuranceOpen((p) => !p)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setInsuranceOpen(false);
                      }}
                      aria-expanded={insuranceOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                        scrolled
                          ? "text-navy-800 hover:text-navy-900 hover:bg-navy-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          insuranceOpen ? "rotate-180" : ""
                        }`}
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
                    </button>

                    {insuranceOpen && (
                      <div
                        className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-xl border border-navy-100/60 py-1.5 z-50"
                        role="menu"
                      >
                        {navInsurance.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            onClick={() => setInsuranceOpen(false)}
                            className="block px-4 py-2.5 text-sm text-navy-800 hover:bg-navy-50 hover:text-ocean-500 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      scrolled
                        ? "text-navy-800 hover:text-navy-900 hover:bg-navy-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={business.phoneHref}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-navy-700 hover:text-navy-900"
                    : "text-white/80 hover:text-white"
                }`}
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
                {business.phoneDisplay}
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center gap-1 bg-ocean-500 hover:bg-ocean-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-navy-900 hover:bg-navy-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
