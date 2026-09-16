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
  title:
    "Wind Mitigation Credits in Sunny Isles Beach | 2026 Form & Roof Age",
  description:
    "Florida’s OIR-B1-1802 form changed April 1, 2026, and Citizens revised HO-4/HO-6 credit tables July 1. A Sunny Isles Beach guide to HVHZ inspections, high-rise MIT-BT forms, and the 15-year roof-age rule.",
  path: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Do I need a new wind mitigation inspection in Sunny Isles Beach in 2026?",
    answer:
      "Not automatically. Florida’s Uniform Mitigation Verification Inspection Form is generally valid for up to five years if the structure has not changed and the form is accurate. Inspections completed on or after April 1, 2026 must use OIR-B1-1802 (Rev. 04/26). Citizens still accepts the older Rev. 01/12 form if it was completed within five years before April 1, 2026 and nothing material has changed. A new inspection is worth doing after a roof replacement, opening-protection upgrades, a sale (credits do not transfer from a prior owner), or when a carrier will not apply credits without current photos.",
  },
  {
    question:
      "What wind mitigation form does a Sunny Isles Beach condo use?",
    answer:
      "It depends on building height. Citizens uses OIR-B1-1802 for single-family homes and for residential buildings with one to three stories. Personal-residential condo unit owners in buildings with four or more stories generally need the Building Type II and III Mitigation Inspection Form (MIT-BT II and III). Most Collins Avenue towers in ZIP 33160 fall into that second bucket. The association’s master-policy inspection is not a substitute for the unit-owner form your HO-6 carrier asks for.",
  },
  {
    question:
      "Can an insurer drop my Sunny Isles Beach home because the roof is old?",
    answer:
      "Age alone is not supposed to be the whole story. Under Florida Statute 627.7011, an insurer may not refuse to issue or renew a homeowners policy solely because of roof age if the roof is less than 15 years old. For a roof that is at least 15 years old, the insurer must allow you to pay for an authorized inspection first. If that inspection shows five or more years of remaining useful life, the insurer may not refuse solely because of age. Condition, leaks, and code issues can still matter. Senate Bill 808, which would have rewritten parts of those roofing rules, died in committee on March 13, 2026, so the 2022 statutory floor is still the one in force this hurricane season.",
  },
  {
    question:
      "Do wind mitigation credits cover flood or storm surge on a barrier island?",
    answer:
      "No. Wind-loss mitigation credits apply to the windstorm portion of a homeowners, condo, or renters premium. They do not buy flood coverage. Storm surge at Sunny Isles Beach is generally treated as flooding and needs a separate flood policy. Opening protection and a documented roof can still reduce wind damage — and the hurricane deductible still applies to wind claims.",
  },
  {
    question:
      "Does a previous owner’s wind mitigation inspection transfer when I buy?",
    answer:
      "Generally no. The current property owner must attest to the inspection. Citizens’ consumer FAQ states that mitigation credits cannot be transferred from a prior owner and that a new Uniform Mitigation Verification Inspection form is required because the current owner has to sign the fraud statement. Budget a new inspection into a 33160 closing, not a copy of the seller’s 2019 PDF.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Wind Mitigation Credits in Sunny Isles Beach",
    href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-07";

export default function WindMitigationSunnyIslesArticle() {
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
                "Wind Mitigation Credits in Sunny Isles Beach in 2026: New Form, Roof Age, and HVHZ Rules",
              description:
                "A Sunny Isles Beach guide to Florida’s April 2026 OIR-B1-1802 wind mitigation form, Citizens’ July 1 HO-4/HO-6 credit tables, high-rise MIT-BT inspections, and the 15-year roof-age rule in Miami-Dade’s High-Velocity Hurricane Zone.",
              path: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
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
              Homeowners Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Wind Mitigation Credits in Sunny Isles Beach in 2026: New Form,
            Roof Age, and HVHZ Rules
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The inspection form changed on April 1. Citizens rewrote condo and
            renters credit tables on July 1. Roof age still cannot be the only
            reason a carrier walks away. None of that is automatic on a
            Collins Avenue closing — the paperwork has to match the building
            you actually own.
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
                Sunny Isles Beach sits in Miami-Dade County’s High-Velocity
                Hurricane Zone, on a barrier island between Golden Beach and
                Haulover Inlet. Wind is priced into every{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                and{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                quote here. Wind-loss mitigation credits are how Florida law
                tells carriers to price a documented roof, a documented
                roof-to-wall connection, and documented opening protection
                differently from a house that has none of those features. The
                credits never replace a{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood policy
                </Link>
                , and they do not erase a hurricane deductible. They do change
                the wind portion of the premium — if the right form, with the
                right photos, is on the file.
              </p>
              <p>
                This week is a reminder of why the file still matters. Atlantic
                hurricane season runs June 1 through November 30. Climatological
                peak clusters around early September. Citizens’ offices are
                closed Monday, September 7, 2026 for Labor Day (claims can
                still be reported 24/7); regular hours resume September 8. An
                inspection scheduled after a named-storm watch is posted is
                usually too late to change this year’s wind credits. The
                paperwork that already exists — or a quiet-week appointment
                before the next tropical wave — is the useful version.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Two Buildings, Two Forms
              </h2>
              <p>
                Most of ZIP 33160 is high-rise condominiums along Collins
                Avenue (A1A). A smaller pocket of houses and townhomes sits
                west of the beach and in adjoining 33180. Florida does not
                treat those as the same inspection.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Houses and low-rise residential (OIR-B1-1802)",
                    desc: "The Uniform Mitigation Verification Inspection Form is for single-family dwellings, one-to-four-unit residential buildings, and residential buildings of one to three stories — including smaller apartment or condo buildings. Inspections completed on or after April 1, 2026 must use OIR-B1-1802 (Rev. 04/26).",
                  },
                  {
                    title: "Towers four stories and taller (MIT-BT II and III)",
                    desc: "Citizens requires the Building Type II and III Mitigation Inspection Form for personal-residential condo unit owners — and for commercial-residential applicants — seeking mitigation credits in buildings with four or more stories. That is the typical Collins Avenue tower. A unit-owner HO-6 credit is not the same document as the association’s master-policy inspection.",
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
                If you own a unit in a 30-story building, do not pay for an
                OIR-B1-1802 attic inspection of a roof you do not control. Ask
                the carrier which form it will actually score. Then ask the
                association for current opening-protection and building
                documentation the inspector can use. The master policy still
                covers the structure; your{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                still needs its own credits if the carrier files them.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Changed on April 1, 2026
              </h2>
              <p>
                Section 627.0629, Florida Statutes, requires the Office of
                Insurance Regulation to review wind-resistive features and the
                discounts attached to them by January 1, 2025 and every five
                years after that. OIR commissioned a 2024 Residential
                Wind-Loss Mitigation Study from Applied Research Associates.
                The first visible product of that cycle is a rewritten
                inspection form.
              </p>
              <p>
                OIR-B1-1802 (Rev. 04/26) took effect April 1, 2026 under Rule
                69O-170.0155, Florida Administrative Code. It replaced the
                Rev. 01/12 form that had been in the field for more than a
                decade. Citizens’ March 19, 2026 bulletin is the practical
                summary:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    New inspections must use Rev. 04/26.
                  </strong>{" "}
                  Submitting the retired 2012 form after the effective date
                  can draw a performance violation for the agent.
                </li>
                <li>
                  <strong className="text-navy-800">
                    A clean older form can still ride.
                  </strong>{" "}
                  If no structural changes were made, Citizens will continue
                  to accept OIR-B1-1802 (Rev. 01/12) completed within five
                  years prior to April 1, 2026. The form remains valid for up
                  to five years statewide, provided nothing material changes
                  and no inaccuracies turn up.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Existing feature definitions were tightened.
                  </strong>{" "}
                  Building code, roof covering, roof-deck attachment,
                  roof-to-wall attachment, secondary water resistance (SWR),
                  and opening protection all have updated language and
                  documentation rules.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Three new fields matter in Miami-Dade.
                  </strong>{" "}
                  Region is now tied to design wind speed (HVHZ is its own
                  bucket). Roof slope is recorded, including mixed slopes on
                  a single-family home. FORTIFIED Home™ Roof, Silver, and
                  Gold certificates can support specific roof and
                  opening-protection items instead of reinventing the same
                  proof.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Photos are no longer optional.
                  </strong>{" "}
                  Every field must be completed. Agents are told to confirm
                  required photographs are attached before submitting.
                  Citizens’ own wind-loss mitigation guide for the 04/26 form
                  is explicit: attic access is still required to score
                  roof-to-wall, roof-deck, and SWR features.
                </li>
              </ul>
              <p>
                Citizens also told agents, at rollout, that the new fields
                would not immediately change the credits already in its
                systems. That was April. The next move landed on July 1.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Changed on July 1, 2026
              </h2>
              <p>
                OIR approved updates to Citizens’ rates and wind-loss
                mitigation tables for new and renewal policies effective on or
                after July 1, 2026. The statewide headline was an average 8.8%
                decrease for homeowners multiperil and 5.1% for homeowners
                wind-only — with caps that differ by form and by whether the
                policy is primary. Those averages are not a Sunny Isles Beach
                quote. Territory, construction, and deductible still decide
                the number.
              </p>
              <p>
                The quieter, more local change is the one that hits this ZIP
                code. Citizens revised the wind-loss mitigation tables for:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Homeowners 4 – Contents Broad Form (CIT HO-4)</li>
                <li>Homeowners 6 – Unit-Owners Form (CIT HO-6)</li>
                <li>Homeowners 4 – Contents Wind-Only Form (HW-4)</li>
                <li>Homeowners 6 – Unit-Owners Wind-Only Form (HW-6)</li>
              </ul>
              <p>
                That is the inventory that covers most barrier-island
                residents: condo unit owners and tenants. If your{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  renters
                </Link>{" "}
                or HO-6 renewal was on or after July 1 and the wind credit
                looks different from last year’s declarations page, the table
                — not a mystery surcharge — is the first place to look. The
                same July filing is also why association master-policy costs
                and personal-line HO-6 rates moved in opposite directions;
                see{" "}
                <Link
                  href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                  className="text-ocean-500 hover:underline"
                >
                  why Florida condo insurance got more expensive in 2026
                </Link>
                .
              </p>
              <p>
                OIR’s consumer page still lists the older Windstorm Mitigation
                Discount exhibits (OIR-B1-1699 and OIR-B1-1700) and the
                Notice of Premium Discounts form (OIR-B1-1655) as updates
                pending. Carriers must still describe their hurricane
                mitigation discounts on their websites (s. 627.0629, effective
                October 1, 2023). Read the carrier’s current table, not a 2006
                exhibit printed in a binder.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Roof Age Is Not a Shortcut to a Nonrenewal
              </h2>
              <p>
                For a house or townhome, roof age is often the first
                underwriting question a private carrier asks in Miami-Dade. It
                is not supposed to be the only question. Florida Statute
                627.7011(5) — in force for policies issued or renewed on or
                after July 1, 2022 — sets a floor:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  An insurer may not refuse to issue or renew a homeowners
                  policy solely because of roof age if the roof is{" "}
                  <strong className="text-navy-800">less than 15 years old</strong>
                  .
                </li>
                <li>
                  If the roof is at least 15 years old, the insurer must allow
                  a roof inspection by an authorized inspector at the
                  homeowner’s expense before requiring replacement as a
                  condition of issuing or renewing.
                </li>
                <li>
                  If that inspection shows{" "}
                  <strong className="text-navy-800">
                    five or more years of remaining useful life
                  </strong>
                  , the insurer may not refuse solely because of age.
                </li>
                <li>
                  Roof age is calculated from the last date 100% of the roof
                  surface was built or replaced to the code then in effect —
                  or from the start of a partial replacement that later
                  reached 100%.
                </li>
              </ul>
              <p>
                “Solely because of age” is the phrase that does the work.
                Visible damage, active leaks, missing underlayment, or a
                failed inspection can still take a house off the admitted
                market. A 12-year-old roof in poor condition is not protected
                by the calendar. A 22-year-old tile roof with a current
                useful-life letter is not automatically uninsurable.
              </p>
              <p>
                Two 2026 bills would have rewritten pieces of this. Senate
                Bill 808 (Roofing Requirements for Property Insurance) and its
                House companion died in committee on March 13, 2026. They
                never took effect. If a contractor or a blog cites a July 1,
                2026 expansion of the roof-age statute, check the Florida
                Senate history before you budget a reroof to keep a policy.
              </p>
              <p>
                On a Collins Avenue condo, the association — not the unit
                owner — usually owns the roof. Your underwriting problem is
                more often opening protection, interior water, and{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  how hurricane damage is split between wind, surge, and flood
                </Link>
                . A special assessment for a roof or SIRS reserve is a
                different conversation from an HO-3 roof-age nonrenewal.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Actually Moves a Miami-Dade Wind Credit
              </h2>
              <p>
                Credits apply to the windstorm portion of the premium, not to
                the whole bill. Liability, contents, and flood do not get
                cheaper because the inspector photographed a hip roof. In the
                HVHZ, the features that tend to matter on a documented house
                are:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">Opening protection.</strong>{" "}
                  Miami-Dade and Broward are the HVHZ. Impact-rated windows,
                  doors, and skylights — or code-compliant shutters stored on
                  site — are the credit most coastal owners can still add
                  after the house is built. Damaged or missing protection is
                  now its own documentation problem on the 04/26 form.
                </li>
                <li>
                  <strong className="text-navy-800">Roof covering and age.</strong>{" "}
                  A permitted reroof to current HVHZ fastening schedules is
                  often what unlocks a private-market quote. Bring the
                  closed-out permit, not a contractor invoice.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Roof-deck and roof-to-wall connections.
                  </strong>{" "}
                  These usually require attic access. Clips, wraps, and
                  documented retrofit connectors have tighter uplift
                  thresholds on the new form. Spray-foam deck adhesive is now
                  a scored pathway when it meets the listed capacity.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Secondary water resistance.
                  </strong>{" "}
                  A self-adhering membrane over the deck, or a foamed deck,
                  is what keeps rain out after wind lifts covering. It is
                  easy to miss on an older 33160 house if nobody goes in the
                  attic.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Florida Building Code / South Florida Building Code.
                  </strong>{" "}
                  Homes permitted under the 2001 Florida Building Code or
                  later — and, in Miami-Dade and Broward, the 1994 South
                  Florida Building Code — often have several features already
                  in the base rate. The inspector still has to mark the code
                  path; “unknown” does not get the discount.
                </li>
                <li>
                  <strong className="text-navy-800">FORTIFIED designation.</strong>{" "}
                  A current IBHS FORTIFIED Roof, Silver, or Gold certificate
                  can now support listed items on OIR-B1-1802. It is not
                  required. It is useful if you already paid for the
                  designation.
                </li>
              </ul>
              <p>
                Florida’s Department of Financial Services still runs My Safe
                Florida Home for eligible homeowners and a My Safe Florida
                Condo Pilot for associations. FDEM’s Elevate Florida
                residential mitigation program is the newer statewide grant
                lane. Eligibility, funding windows, and matching rules change;
                check the managing agency before treating a grant as a 2026
                roof budget.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Credits Do Not Transfer, and Flood Still Does Not Come Along
              </h2>
              <p>
                If you bought a house this year with a seller’s 2022
                mitigation PDF in the closing packet, assume the carrier will
                not use it. Citizens’ published FAQ is direct: you must
                provide a new form because the current owner has to attest
                that the inspector was there, and mitigation credits cannot be
                transferred from a prior owner. The same logic shows up on
                private-market applications.
              </p>
              <p>
                A takeout from Citizens does not preserve undocumented
                credits either. If a Depopulation Packet is sitting on the
                counter — the next personal-lines assumption on the public
                calendar is October 20, with a choice deadline of October 5 —
                compare the new carrier’s wind credits and hurricane
                deductible, not only the estimated premium.{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  How 2026 takeout offers work for a Sunny Isles Beach HO-6
                </Link>{" "}
                is a separate decision from whether the inspection on file is
                still valid.
              </p>
              <p>
                Wind mitigation also does not close the water gap that
                actually floods a ground-floor garage or a first-floor unit.
                Storm surge is{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  generally excluded from homeowners and HO-6 forms
                </Link>
                . NFIP and private flood policies have waiting periods.
                Buying flood the week a watch is posted for Miami-Dade is
                usually too late for this storm.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist for 33160 This Season
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Find the form already on the policy.
                  </strong>{" "}
                  Date, revision (01/12 vs. 04/26), and whether photos are
                  attached. If it is older than five years, or the roof or
                  openings have changed, schedule a new inspection on the
                  current form.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Match the form to the building.
                  </strong>{" "}
                  Houses and three-story walk-ups: OIR-B1-1802. Four stories
                  and up: MIT-BT II and III for the unit-owner credit. Ask
                  before you pay an inspector who only carries the 1802.
                </li>
                <li>
                  <strong className="text-navy-800">Use a qualified inspector.</strong>{" "}
                  OIR tells consumers to verify the inspector is authorized
                  under s. 627.711(2)(a). Citizens may independently verify
                  any form under s. 627.711(8). An expired license is a
                  rejected credit.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Pull permits before the appointment.
                  </strong>{" "}
                  Miami-Dade roof and shutter permits, product-approval
                  numbers, and FORTIFIED certificates are what fill blanks
                  the inspector cannot see from the street.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If the roof is 15 or older, get the useful-life letter.
                  </strong>{" "}
                  Do it before a nonrenewal deadline, not after. The statute
                  gives you that inspection right; it does not pause a
                  carrier’s timeline if you wait.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep flood and the hurricane deductible in view.
                  </strong>{" "}
                  Credits shrink the wind premium. They do not shrink a 2% or
                  5% hurricane deductible on Coverage A, and they do not
                  insure surge.
                </li>
              </ul>
              <p>
                If you want a local reading of a current inspection against a
                Sunny Isles Beach house or HO-6 — including whether a July 1
                table change actually shows up on your declarations page —
                start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>{" "}
                or{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                . A quote request does not bind coverage. Coverage exists only
                when an insurer issues it. OIR’s wind-mitigation consumer page
                and Citizens’ inspection guides are public; your appointed
                agent still has to file the form.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any credit or premium,
                  or a recommendation of any inspector or mitigation product.
                  Form versions, five-year validity, Citizens’ July 1, 2026
                  HO-4/HO-6 table updates, and the roof-age rules in s.
                  627.7011 are described as OIR, Citizens, and Florida law
                  state them as of this writing. Wind mitigation discounts
                  vary by insurer, territory, construction, and the features
                  actually documented. Senate Bill 808 (2026) died in
                  committee and did not become law. Coverage, deductibles, and
                  eligibility depend on the actual policy forms and
                  underwriting. Review your declarations page and speak with a
                  licensed Florida insurance professional about your
                  situation.
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
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability coverage for South Florida homes.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 coverage that sits beside the association master policy.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, flood, and hurricane deductibles locally.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood and wind are treated as different losses.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "Wind credits do not satisfy Citizens’ $400k flood requirement.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 2026 assumption dates and how a takeout can change wind credits.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "2026 HO-6 rate cuts vs. association master-policy increases.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "Wind credits do not pay a SIRS or recertification special assessment.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 coverage, contents flood, and how July 1 wind credits show up for tenants.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach",
                  href: "/renters-insurance",
                  desc: "HO-4 wind credits were part of Citizens’ July 1 table update.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote",
                  desc: "Start a no-obligation quote for home, condo, or renters.",
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
            Wind Mitigation Questions for 2026
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
            Review Wind Credits on a Sunny Isles Beach Policy
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners or HO-6 quote and we will help you match the
            inspection form, roof documentation, and opening protection to
            what carriers will actually score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=home"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Home Quote
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
