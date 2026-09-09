import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getArticleSchema,
} from "@/lib/structured-data";
import { business } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Renters Insurance in Sunny Isles Beach | HO-4 & Flood 2026",
  description:
    "A 2026 Sunny Isles Beach guide to HO-4 renters coverage, contents-only flood, hurricane deductibles, and lease additional-insured rules — and why a quiet peak season is the window to buy.",
  path: "/resources/renters-insurance-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does renters insurance cover hurricane damage in Sunny Isles Beach?",
    answer:
      "An HO-4 renters policy typically covers wind, hail, fire, theft, and certain other named perils that damage your belongings. Storm surge, overflow from the ocean or Intracoastal, and other flooding from external water are generally excluded. A ground-floor unit on Collins Avenue can have a covered wind claim (blown-in rain after a window fails) and an uncovered flood claim (standing water from surge) from the same storm. Contents-only flood insurance from the NFIP or a private carrier is the separate layer for surge.",
  },
  {
    question: "Does Florida law require renters insurance?",
    answer:
      "No. Florida does not require tenants to carry renters insurance. Many Sunny Isles Beach leases and condominium rental addenda do. Typical lease language asks for a minimum liability limit, a certificate of insurance, and the landlord, management company, or association listed as an additional interest or additional insured. Missing the certificate can hold up keys even when the premium is inexpensive.",
  },
  {
    question:
      "Do I need flood insurance if I rent a high-rise unit in ZIP 33160?",
    answer:
      "It depends on elevation and what you own. Storm surge and rising water are more likely to reach ground-floor, lobby-level, and parking-garage storage than a unit on a high floor. An HO-4 still does not cover flood at any floor. NFIP contents-only coverage is available up to $100,000 of personal property, generally at actual cash value, with a typical 30-day waiting period. Citizens currently exempts tenant content policies from its statutory flood mandate; that exemption is not a reason to skip flood if your belongings sit where water can reach them.",
  },
  {
    question: "What is a hurricane deductible on a renters policy?",
    answer:
      "Many Florida HO-4 policies apply a separate named-storm or hurricane deductible to wind claims, instead of the everyday deductible that applies to theft or a kitchen fire. On renters forms it is often a flat dollar amount ($500, $1,000, or $2,500) or a small percentage of Coverage C (your contents limit), not a percentage of a building you do not own. Read the declarations page before a named storm is in the Gulf. Additional living expenses generally follow a covered wind loss, not a flood loss, unless a flood policy says otherwise.",
  },
  {
    question:
      "Will the landlord’s or association’s policy cover my furniture?",
    answer:
      "Generally no. The building owner’s commercial or homeowners policy, and a condominium association’s master policy, are written for the structure and common elements. Your furniture, electronics, clothing, jewelry, and liability for a guest who is injured in the unit sit on your HO-4. If you rent a condo, the unit owner’s HO-6 is also not a substitute for your renters policy. Ask for the lease insurance exhibit, not a verbal “the building is covered.”",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Renters Insurance in Sunny Isles Beach",
    href: "/resources/renters-insurance-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-09";

export default function RentersInsuranceSunnyIslesArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema(breadcrumb)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title:
                "Renters Insurance in Sunny Isles Beach in 2026: HO-4, Contents Flood, and Hurricane Deductibles",
              description:
                "A Sunny Isles Beach tenant guide to Florida HO-4 coverage, NFIP contents-only flood, hurricane deductibles, and lease additional-insured rules during the quiet peak of the 2026 Atlantic hurricane season.",
              path: "/resources/renters-insurance-sunny-isles-beach-2026",
              dateModified,
            })
          ),
        }}
      />

      <section className="bg-navy-900 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-white/70" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/70 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-aqua-400 bg-aqua-500/10 px-3 py-1 rounded-full">
              Renters Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Renters Insurance in Sunny Isles Beach in 2026: HO-4, Contents
            Flood, and Hurricane Deductibles
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Peak hurricane season is here and the Atlantic has not produced a
            hurricane yet. That is not a reason to skip coverage on a barrier
            island. It is the waiting-period window most tenants waste.
          </p>
          <p className="text-xs text-white/30 mt-4">
            By <strong className="text-white/50">{business.name}</strong>
          </p>
        </div>
      </section>

      <article className="section-py bg-sand-50">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-3xl border border-sand-200 p-8 md:p-12">
            <div className="space-y-6 text-navy-600 leading-relaxed">
              <p className="text-lg text-navy-700 font-medium leading-relaxed">
                A Collins Avenue lease in ZIP 33160 does not come with
                furniture insurance. The tower&rsquo;s master policy, the unit
                owner&rsquo;s{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                , and the landlord&rsquo;s building coverage stop at walls,
                common elements, and the owner&rsquo;s own property. Your
                belongings, your liability if a guest is hurt in the unit, and
                a hotel bill after a covered wind loss sit on a{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  renters (HO-4)
                </Link>{" "}
                policy — plus a separate{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  contents flood
                </Link>{" "}
                policy if storm surge can reach what you own. Florida law does
                not require that stack. A Sunny Isles Beach lease often does.
              </p>
              <p>
                This week is the useful version of hurricane season, not the
                scary one. Atlantic season runs June 1 through November 30.
                Climatological peak clusters in early September. As of September
                8, 2026, the National Hurricane Center had listed five named
                storms — Arthur, Bertha, Cristobal, Dolly, and Edouard — and
                zero hurricanes. The satellite-era record for the latest first
                Atlantic hurricane is September 11 (2002 and 2013). The
                seven-day tropical outlook was empty. El Niño wind shear is a
                large part of why the basin is quiet. None of that cancels a
                30-day{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  flood waiting period
                </Link>
                , and none of it means a later storm cannot flood a
                ground-floor storage cage. Tropical Storm Edouard, which
                moved ashore near the Louisiana–Texas line on September 1,
                was a reminder that a system that never becomes a hurricane
                can still put water where belongings sit.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What an HO-4 Actually Insures in a 33160 Rental
              </h2>
              <p>
                Renters insurance is a contents, liability, and loss-of-use
                contract. It is not a cheaper homeowners policy and it is not
                a substitute for the association&rsquo;s master form. On a
                barrier island the practical split looks like this:
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Coverage C — your belongings",
                    desc: "Furniture, clothing, electronics, and similar personal property, usually for named perils such as fire, theft, vandalism, and windstorm or hail. Replacement-cost wording on contents is not automatic; actual cash value depreciates what you own. Jewelry, watches, fine art, and business property often have special sub-limits unless scheduled.",
                  },
                  {
                    title: "Personal liability and medical payments",
                    desc: "If a guest is injured in the unit, or you accidentally damage a neighbor’s property, liability is the coverage a lease is usually trying to force. Medical payments can help with a guest’s small injury bill regardless of fault. Limits of $100,000 are common on cheap policies; many Collins Avenue leases ask for $300,000 or $500,000.",
                  },
                  {
                    title: "Additional living expenses (loss of use)",
                    desc: "If a covered peril makes the unit uninhabitable, HO-4 can help with a hotel and extra living costs. A flood that fills a ground-floor unit is generally not a covered peril on the HO-4, so the hotel bill after surge is a flood-policy question — and standard NFIP contents forms do not include loss of use.",
                  },
                  {
                    title: "Off-premises personal property",
                    desc: "Some HO-4 forms extend a portion of Coverage C to property stolen from a car, a beach bag, or a parking garage. Terms vary. A scooter in the garage and a laptop in a rideshare are not automatically covered just because the unit is.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-sand-50 border border-sand-200 rounded-xl p-5"
                  >
                    <h3 className="font-semibold text-navy-900 mb-1.5 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p>
                If you are subletting, house-sitting, or on a short-term
                furnished rental, say so on the application. Occupancy and
                “who lives here” are underwriting facts. A vacation-rental
                host&rsquo;s policy is a different product from a
                twelve-month tenant HO-4.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Wind Is Usually Covered. Surge Is Not.
              </h2>
              <p>
                Sunny Isles Beach sits between Golden Beach and Haulover Inlet,
                in Miami-Dade County&rsquo;s High-Velocity Hurricane Zone.
                That geography is why{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  hurricane damage splits into wind, surge, and flood
                </Link>{" "}
                on an owner&rsquo;s policy — and why a tenant has the same
                split with less paperwork and more confusion.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Wind, rain after a failed opening, and theft after a storm
                  </strong>{" "}
                  are the HO-4 conversation. A named-storm or hurricane
                  deductible may apply. Citizens revised the wind-loss
                  mitigation tables for HO-4 and HW-4 (contents wind-only)
                  effective July 1, 2026; if your Citizens renters renewal
                  after that date shows a different wind credit, the table —
                  not a mystery surcharge — is the first place to look. See{" "}
                  <Link
                    href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    how 2026 wind-mitigation credits work in Sunny Isles Beach
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy-800">
                    Storm surge, overflow, and rising water
                  </strong>{" "}
                  are the flood conversation. They are excluded from a
                  standard HO-4 the same way they are excluded from HO-3 and
                  HO-6. A separate contents flood policy is how a tenant
                  insures the sofa, not the slab.
                </li>
              </ul>
              <p>
                Floor level changes the flood question more than the wind
                question. A unit on a high floor in a modern tower still
                needs an HO-4 for theft, fire, liability, and wind-driven
                rain. A ground-floor, mezzanine, or garage-storage tenant is
                the person who most often discovers after a surge that
                “the building had flood insurance” did not pay to replace
                their boxes.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Contents Flood: NFIP, Private, and the 30-Day Clock
              </h2>
              <p>
                FEMA&rsquo;s National Flood Insurance Program sells
                contents-only policies to renters in participating
                communities. Sunny Isles Beach participates. The published
                residential contents cap is $100,000. NFIP contents claims
                are generally paid at actual cash value, not replacement
                cost. Artwork, jewelry, furs, and business property typically
                face a $2,500 special limit unless the policy says otherwise.
                Coverage below the lowest elevated floor or in a basement is
                tightly limited — often a washer, a dryer, a freezer, and the
                food in it.
              </p>
              <p>
                A standard NFIP policy has a 30-day waiting period before
                coverage begins, with narrow exceptions such as certain loan
                closings and map revisions. Buying flood the afternoon a
                watch is posted for Miami-Dade is usually too late for that
                storm. Private flood can offer higher contents limits,
                replacement-cost wording, shorter waits, and sometimes loss
                of use. It is not automatically cheaper or broader; it has
                to be compared to the NFIP form, not assumed to replace it.
              </p>
              <p>
                Do not borrow the unincorporated Miami-Dade CRS number for a
                Sunny Isles Beach quote. Unincorporated Miami-Dade is a Class
                3 community (a 35% NFIP discount for eligible policies). The
                City of Sunny Isles Beach has published a Class 8 rating,
                which is a 10% NFIP discount. The city&rsquo;s flood-risk
                portal and Floodplain Coordinator are how SIB is trying to
                improve that class; they do not change today&rsquo;s CID
                discount. CRS applies to NFIP premiums. It does not make an
                HO-4 cover surge.
              </p>
              <p>
                Citizens currently states that condominium unit-owner
                policies, tenant content policies, and policies that exclude
                windstorm or hail are not required to buy flood to stay
                eligible for Citizens. A 2023 Citizens bulletin said tenant
                content policies would be brought into the mandate on January
                1, 2027, when the remaining personal-residential wind
                policies phase in. Homeowners already in the $400,000-and-up
                Coverage A band have been in the mandate since January 1,
                2026. For a renter, the legal exemption is not the same as
                “I do not flood.” Confirm the current Citizens flood page and
                your lease, not a 2023 PDF, before you treat 2027 as a
                reason to wait.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Lease Clause That Holds the Keys
              </h2>
              <p>
                The insurance exhibit in a Sunny Isles Beach rental packet
                is often stricter than Florida law. Read it before move-in
                day, not after the management office rejects the
                certificate:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Additional interest vs. additional insured.
                  </strong>{" "}
                  Landlords usually want to be listed so they receive notice
                  if the policy cancels. Some associations and luxury towers
                  require additional-insured wording. Those are different
                  endorsements. Ask which one the lease actually demands.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Certificate of insurance (COI).
                  </strong>{" "}
                  Many buildings will not release fobs until a certificate
                  naming the association or management company is on file.
                  Bind the policy, then have the certificate issued to the
                  exact legal name in the lease.
                </li>
                <li>
                  <strong className="text-navy-800">Liability minimums.</strong>{" "}
                  $300,000 and $500,000 limits show up often on oceanfront
                  leases. Matching a $25,000 contents limit to a $500,000
                  liability requirement is normal; do not buy a tiny
                  liability limit to save a few dollars if the lease forbids
                  it.
                </li>
                <li>
                  <strong className="text-navy-800">
                    The owner&rsquo;s HO-6 is not your HO-4.
                  </strong>{" "}
                  If you rent a condo, the unit owner still needs an HO-6
                  for the interior and loss assessment. You still need
                  renters for your contents and liability. Two policies, two
                  named insureds.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Hurricane Deductibles on a Tenant Form
              </h2>
              <p>
                Homeowners in this ZIP code argue about 2% and 5% of Coverage
                A. Tenants should not copy that math. On an HO-4 there is no
                dwelling limit to percentage against. The named-storm or
                hurricane deductible is usually a flat dollar amount or a
                percentage of Coverage C. On $40,000 of contents with a 2%
                hurricane deductible, the first $800 of a wind claim is
                yours. On the same limit with a $2,500 hurricane deductible,
                that number is $2,500. Neither figure is small if the loss
                is a ruined television and damp clothes — and neither pays
                for surge.
              </p>
              <p>
                Additional living expenses follow a covered HO-4 peril. If
                the building is closed because of flood damage to common
                areas, your HO-4 may not consider the unit a covered loss. A
                private flood form that includes loss of use is the product
                that sometimes fills that gap; NFIP contents-only generally
                does not. Read both forms before you assume a hotel is
                insured.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist Before the Next Named Storm
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Photograph what you own, now.
                  </strong>{" "}
                  Serial numbers, jewelry, electronics, and a walk-through
                  video stored off-site. NFIP and HO-4 claims both go faster
                  with proof of ownership.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Match the policy to the lease.
                  </strong>{" "}
                  Liability limit, additional interest or additional insured,
                  and the certificate&rsquo;s legal name. Then bind, then
                  send the COI.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Decide flood by floor and storage, not by “I rent.”
                  </strong>{" "}
                  Ground-floor, garage cages, and first-floor storage are
                  the surge problem. High-floor tenants still need HO-4;
                  flood is a separate judgment. Start the 30-day NFIP clock
                  during this quiet peak, not after Fay or Gonzalo appear
                  on a cone.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Ask for replacement cost on contents if it is offered.
                  </strong>{" "}
                  Actual cash value on five-year-old furniture is a smaller
                  check than the replacement aisle at the store.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Read the hurricane deductible on the declarations page.
                  </strong>{" "}
                  Flat dollar versus percentage of Coverage C. Confirm
                  whether additional living expenses wait on that same
                  deductible.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not skip auto because the tower has a garage.
                  </strong>{" "}
                  A parked car is not an HO-4 item.{" "}
                  <Link
                    href="/auto-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    Florida auto
                  </Link>{" "}
                  still needs PIP, and comprehensive is what responds to
                  flood or flying debris hitting the car — not renters.
                </li>
              </ul>
              <p>
                If you want a local reading of a Sunny Isles Beach lease
                exhibit against an HO-4 and a contents flood quote — including
                whether a July 1 Citizens HO-4 table change shows up on a
                renewal — start a{" "}
                <Link
                  href="/quote?type=renters"
                  className="text-ocean-500 hover:underline"
                >
                  renters quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. Floodsmart.gov and the City
                of Sunny Isles Beach flood-risk portal are public; your
                appointed agent still has to place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any premium or claim
                  payment, or a recommendation of any carrier or flood
                  product. 2026 Atlantic hurricane-season statistics are
                  described as public National Hurricane Center and
                  meteorological summaries stated them as of this writing.
                  NFIP contents limits, waiting periods, CRS Class 8 for the
                  City of Sunny Isles Beach, Citizens&rsquo; tenant-policy
                  flood exemption, and the July 1, 2026 HO-4 wind-mitigation
                  table updates are described as FEMA, the City, Citizens,
                  and Florida practice state them as of this writing. Lease
                  requirements, deductibles, and eligibility depend on the
                  actual lease, policy forms, and underwriting. Review your
                  documents and speak with a licensed Florida insurance
                  professional about your situation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-navy-900 mb-5">
              Related Coverage &amp; Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Renters Insurance in Sunny Isles Beach",
                  href: "/renters-insurance",
                  desc: "HO-4 coverage for belongings, liability, and loss of use.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood options for coastal properties.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood is a separate policy from wind and HO-4.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood for Sunny Isles Beach properties.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "July 1, 2026 HO-4 / HW-4 credit tables and HVHZ inspections.",
                },
                {
                  label: "What Does Condo Insurance Cover in Florida?",
                  href: "/resources/condo-insurance-florida",
                  desc: "The owner’s HO-6 is not a substitute for a tenant’s HO-4.",
                },
                {
                  label: "Understanding Florida Auto PIP",
                  href: "/resources/florida-auto-pip",
                  desc: "A parked car in the garage is still an auto policy, not renters.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=renters",
                  desc: "Start a no-obligation renters or flood quote.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-sand-200 hover:border-navy-300 rounded-2xl p-5 block transition-colors group"
                >
                  <p className="font-semibold text-navy-900 text-sm group-hover:text-ocean-500 transition-colors mb-1">
                    {link.label}
                  </p>
                  <p className="text-xs text-navy-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="section-py bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Renters Insurance Questions for 2026
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-sand-50 border border-sand-200 rounded-2xl px-6 py-5 group"
              >
                <summary className="font-semibold text-navy-900 text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <svg
                    className="w-4 h-4 text-navy-400 flex-shrink-0 group-open:rotate-180 transition-transform"
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
                </summary>
                <p className="text-sm text-navy-600 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Review an HO-4 for a Sunny Isles Beach Rental
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a renters quote and we will help match lease
            additional-insured wording, contents limits, and whether
            contents flood belongs on the same conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=renters"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Renters Quote
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
