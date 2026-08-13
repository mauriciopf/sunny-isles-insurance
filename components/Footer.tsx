import Link from "next/link";
import { business, footerLinks, disclaimer } from "@/lib/constants";
import LogoIcon from "./ui/LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="Sunny Isles Insurance — Home"
            >
              <LogoIcon className="w-7 h-7 text-aqua-400" />
              <span className="text-white font-semibold text-sm">
                Sunny Isles Insurance
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-4">
              Personal guidance for auto, condo, home, flood, renters and
              business insurance. Serving South Florida and customers across
              Florida.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-aqua-400 transition-colors"
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

          {/* Coverage */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Coverage
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.coverage.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 space-y-4">
          <p className="text-xs leading-relaxed text-white/40 max-w-4xl">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} {business.name}. All rights
              reserved.
            </p>
            <p>{business.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
