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
    "Ordinance or Law Coverage in Sunny Isles Beach 2026 | 25% vs 50%",
  description:
    "Isaias formed Oct. 7. Florida HO-3 policies must offer 25% or 50% ordinance-or-law. How Sunny Isles Beach HVHZ rebuilds differ from NFIP’s $30k ICC.",
  path: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "What is ordinance or law coverage on a Sunny Isles Beach homeowners policy?",
    answer:
      "Ordinance or law — also called law and ordinance — pays additional costs to rebuild or repair a damaged dwelling to current building codes after a covered loss. Florida Statute 627.7011 requires homeowners insurers to offer it at 25% or 50% of the dwelling limit. Unless you signed an office-approved rejection, a dwelling policy is deemed to include the 25% option. It is not flood insurance, not a My Safe Florida Home grant, and not a wind-mitigation credit on the premium.",
  },
  {
    question:
      "Is 25% of Coverage A enough to rebuild a house in Miami-Dade’s HVHZ?",
    answer:
      "Often it is not the whole rebuild. Twenty-five percent of a $600,000 dwelling limit is $150,000 of extra code-upgrade money on top of the replacement-cost payment for the damaged dwelling — not an extra $150,000 of Coverage A. Sunny Isles Beach is in the High-Velocity Hurricane Zone. After a large wind loss, Miami-Dade can require current Florida Building Code opening protection, roof, and, if the floodplain 50% rule is also triggered, elevation to current flood standards. Those line items can exceed 25% of Coverage A. That is why the statute also requires insurers to offer 50%.",
  },
  {
    question:
      "Is Florida’s 50% ordinance-or-law offer the same as FEMA’s 50% substantial-damage rule?",
    answer:
      "No. They share a percentage and almost nothing else. Under 627.7011, ordinance-or-law extra costs may be limited to 25% or 50% of the dwelling limit, and that extra coverage applies only to the damaged portion unless total damage exceeds 50% of the structure’s replacement cost. FEMA’s substantial-damage test compares the cost of restoring the building to its pre-damage condition against 50% of the building’s pre-damage market value, excluding land. Cross that floodplain line in a Special Flood Hazard Area and the whole building may have to meet current flood codes. Insurance replacement cost and market value are different denominators.",
  },
  {
    question:
      "Does NFIP Increased Cost of Compliance replace ordinance or law after a hurricane?",
    answer:
      "No. ICC is Coverage D on a National Flood Insurance Program policy. FEMA’s current guidance still caps it at $30,000, and it pays only after a local floodplain administrator determines the building was substantially or repetitively damaged by flood. It is for elevation, relocation, demolition, or (non-residential) floodproofing required by the flood ordinance. A wind claim on an HO-3 is a different policy. King-tide street flooding on Collins Avenue this week is a flood file. Isaias, if it ever became a Miami-Dade wind event, would still be a wind file. Do not spend the ICC $30,000 in your head as a substitute for 50% ordinance or law on the house.",
  },
  {
    question:
      "Does a Collins Avenue HO-6 get the same 25% / 50% ordinance-or-law offers?",
    answer:
      "Florida Statute 627.7011 is written for homeowners’ policies as that term is commonly understood — typically an HO-3 on a house, not the association’s master policy and not every HO-6. A Collins Avenue unit owner does not rebuild the tower. The association rebuilds common elements; you may have a special-assessment and loss-assessment conversation, and a limited Coverage A conversation for interior improvements. If an HO-6 offers ordinance or law, it is usually tied to that smaller building-items limit, not to the building’s replacement cost. Do not read a 25% house statute onto a 40-story condominium.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Ordinance or Law Coverage in Sunny Isles Beach",
    href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-07";

export default function OrdinanceOrLawCoverageArticle() {
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
                "Ordinance or Law Coverage in Sunny Isles Beach in 2026: 25% vs 50% After a Hurricane",
              description:
                "A Sunny Isles Beach guide to Florida’s 25% and 50% ordinance-or-law offers on HO-3 policies — HVHZ rebuild costs, the two different 50% rules, and why NFIP’s $30,000 ICC is not a substitute.",
              path: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
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
            Ordinance or Law Coverage in Sunny Isles Beach in 2026: 25% vs
            50% After a Hurricane
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Tropical Storm Isaias is not a Collins Avenue landfall. It is
            the first named Gulf storm of a year with no hurricanes yet —
            and the week to check whether a 33160 house actually carries
            enough code-upgrade money to rebuild in Miami-Dade’s HVHZ.
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
                Wednesday morning, October 7, the National Hurricane
                Center’s 4 a.m. CDT Advisory 3 named the southwestern Gulf
                system Tropical Storm Isaias. Forecaster Papin placed the
                center near 22.0°N, 94.1°W — about 285 miles west of
                Progreso, Mexico, and about 580 miles southwest of the
                mouth of the Mississippi River. Maximum sustained winds:
                40 mph. Motion: east-northeast at 8 mph. Rapid
                strengthening is forecast. The National Hurricane Center
                expects a hurricane by Thursday and a peak near 110 mph
                over the central Gulf on Friday, then an approach to the
                U.S. northern Gulf Coast. There are no coastal watches in
                effect as of that advisory. Hurricane watches are likely
                later today for a portion of the northern Gulf, not for
                Miami-Dade. Rainfall of 3 to 6 inches, locally 10, is
                forecast from far southeastern Louisiana to the Florida
                Panhandle. Sunny Isles Beach is not in that sentence.
              </p>
              <p>
                Isaias is the ninth named Atlantic storm of 2026 —
                Arthur through Hanna, then this one. As of Advisory 3 it
                is still not a hurricane. AccuWeather’s
                latest-first-hurricane marker, October 8, 1905, is
                tomorrow. Melissa,
                October 13, 2025, is still the last Atlantic hurricane,
                359 days back. That drought is the insurance problem.
                People in ZIP 33160 have had almost a year to treat
                “rebuild to code” as a brochure line instead of a
                declarations-page percentage.
              </p>
              <p>
                This is not a rewrite of{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  how wind, surge, and flood split on a Sunny Isles Beach
                  claim
                </Link>
                . That guide is which peril pays. This one is what it
                costs to put the house back legally after a covered wind
                loss, once Miami-Dade’s High-Velocity Hurricane Zone and
                floodplain rules are in the permit. It is also not a
                rewrite of{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  OIR-B1-1802 wind-mitigation credits
                </Link>{" "}
                or{" "}
                <Link
                  href="/resources/my-safe-florida-home-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  My Safe Florida Home grants
                </Link>
                . Credits lower the premium. Grants reimburse hardening
                before a storm. Ordinance or law is the extra money after
                a covered loss when the building official will not stamp
                the 1998 plans.
              </p>
              <p>
                King tides started this morning. Miami-Dade’s enhanced
                tidal forecast lists October 7–13, with the highest
                predicted tide around October 10. The South Florida Water
                Management District’s east-coast window of September 24
                through October 15 is still open. The east-coast annual
                peak remains October 27, inside October 22–November 12.
                Those tides are a{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                claim. Isaias, on this morning’s track, is a northern-Gulf
                wind and surge problem. The paperwork to read this week
                on a house west of Collins Avenue is still the
                ordinance-or-law percentage on the{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                declarations page.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Ordinance or Law Actually Pays
              </h2>
              <p>
                Replacement cost on Coverage A pays to put back what was
                there, up to the dwelling limit, after a covered loss —
                minus the hurricane or all-other-peril deductible. It
                does not automatically pay to elevate a slab, to add
                impact openings the 1990s house never had, or to tear
                down the undamaged part of a structure that the building
                official will not let you splice onto a new code
                foundation.
              </p>
              <p>
                Florida Statute 627.7011 is the offer rule. Before
                issuing a homeowners policy, the insurer must offer
                replacement-cost dwelling coverage, and a version of that
                coverage that also includes costs necessary to meet
                applicable laws and ordinances regulating construction,
                use, or repair, including debris removal when the law
                requires tearing property down. Additional costs to meet
                those laws may be limited to 25 percent or 50 percent of
                the dwelling limit, as the policyholder selects.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "The 25% default",
                    desc: "Unless the insurer has your written refusal on an office-approved form, a policy covering the dwelling is deemed to include law-and-ordinance coverage limited to 25% of the dwelling limit. A signature by a named insured is conclusively presumed to be an informed rejection or election for everyone on the policy. If someone in the household signed a 25% form five years ago, do not assume you still have a live 50% offer sitting unused.",
                  },
                  {
                    title: "The 50% offer the statute still requires",
                    desc: "Even when the policy already includes 25%, the insurer must still offer 50% of the dwelling limit. The 18-point bold statement required at issuance and every renewal — “LAW AND ORDINANCE COVERAGE IS AN IMPORTANT COVERAGE THAT YOU MAY WISH TO PURCHASE. PLEASE DISCUSS WITH YOUR INSURANCE AGENT.” — is not decoration. The insurer must also notice availability on an office-approved form at least once every three years. Missing the notice is a code violation; it does not rewrite your limit.",
                  },
                  {
                    title: "Damaged portion vs. the whole house",
                    desc: "Under 627.7011(1)(b), the extra code money applies only to repairs of the damaged portion of the structure unless total damage to the structure exceeds 50% of the replacement cost of the structure. That 50% is an insurance-form test against replacement cost. It is not FEMA’s substantial-damage test against market value. Both can fire on the same house. They are not the same trigger.",
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
                A round number for a west-of-Collins house: $600,000
                Coverage A and 25% ordinance or law is $150,000 of extra
                code-upgrade limit, not an extra $150,000 of dwelling.
                Fifty percent is $300,000. Neither number is a guarantee
                that Miami-Dade’s permit will cost that much, or that
                little. It is the ceiling on that part of the form. If
                the upgrade bill is $400,000 and you bought 25%, the
                shortfall is not a wind-mitigation credit you can apply
                after the fact.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Two Different 50% Rules on One Barrier Island
              </h2>
              <p>
                Sunny Isles Beach sits in Miami-Dade’s High-Velocity
                Hurricane Zone, on a barrier island between Golden Beach
                and Haulover Inlet. Houses and low-rise attached homes
                west of Collins Avenue, and in adjoining 33180, are the
                buildings that typically carry an HO-3. High-rises along
                Collins Avenue (A1A) are usually{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                unit policies beside an association master policy. The
                ordinance-or-law statute is a house conversation first.
              </p>
              <p>
                After a large loss, two 50% tests can show up in the same
                permit file:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Florida 627.7011 — 50% of replacement cost.
                  </strong>{" "}
                  This is when the extra ordinance-or-law money on the
                  HO-3 can apply beyond the damaged portion. The
                  denominator is the structure’s replacement cost, the
                  number closer to Coverage A if the limit was set
                  honestly.
                </li>
                <li>
                  <strong className="text-navy-800">
                    NFIP / local floodplain — 50% of market value.
                  </strong>{" "}
                  Substantial damage (or substantial improvement) is a
                  community determination. If the cost of restoring the
                  building to its before-damaged condition equals or
                  exceeds 50% of the building’s pre-damage market value
                  — land excluded — a structure in a Special Flood Hazard
                  Area generally must be brought into compliance with
                  current floodplain management and Florida Building Code
                  flood provisions. That can mean elevation to the
                  required flood elevation, flood-resistant materials,
                  and flood openings. The public flood map example used
                  elsewhere on this site, 18050 Collins Avenue in AE with
                  a base flood elevation of 7.0 feet, is a reminder that
                  33160 is not “Zone X, so ignore the 50% rule.” Houses
                  west of Collins still need the actual FIRM panel, not
                  a Collins Avenue tower’s engineering narrative.
                </li>
              </ul>
              <p>
                Market value and replacement cost diverge on this island.
                A 1960s or 1970s slab house can have a modest appraiser
                building value and a much higher cost to rebuild to 2026
                HVHZ and flood standards. That is how a wind loss that
                looks “only partial” on the insurance worksheet can still
                trip a floodplain substantial-damage letter — and how 25%
                of Coverage A can disappear into elevation and opening
                protection before the roof is finished.
              </p>
              <p>
                Opening protection, roof-to-wall connections, and
                secondary water resistance still belong on the
                wind-mitigation inspection. They can also show up as
                ordinance-or-law costs after a loss if the current code
                requires them and the damaged house did not have them.
                The inspection credit is a premium file. The permit is a
                claim file. Do not collapse them.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                ICC’s $30,000 Is a Flood Check, Not a Wind Check
              </h2>
              <p>
                National Flood Insurance Program policies include
                Increased Cost of Compliance — Coverage D on the Standard
                Flood Insurance Policy. FEMA’s guidance, last updated
                January 12, 2026, still describes a cap of $30,000 to
                help elevate, relocate, demolish, or (for non-residential
                buildings) floodproof after a local official determines
                substantial or repetitive flood damage. The ICC claim is
                adjusted separately from the direct flood-loss claim. It
                does not pay because Isaias is in the Gulf. It does not
                pay because king tides start tonight. It pays after a
                flood, a substantial-damage or repetitive-loss
                determination, and a permit to do the mitigation the
                ordinance requires.
              </p>
              <p>
                Thirty thousand dollars does not elevate most 33160
                houses. It is a federal flood-policy sublimit, not
                Florida’s 25% or 50% HO-3 offer. Private flood may or may
                not include a similar increased-cost or extra living
                expense feature — that is the shopping question in{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP vs private flood in Sunny Isles Beach
                </Link>
                , not a reason to skip ordinance or law on the wind
                policy. Citizens’ December 1, 2026 personal-lines forms
                can also treat a required flood lapse as a wind-claim
                problem for houses; that is{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  the flood-proof and 14-day authorization guide
                </Link>
                , not this page. Keep the flood policy. Then read the
                ordinance-or-law percentage on the wind policy as a
                separate line.
              </p>
              <p>
                If wind keeps you out of the house,{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  additional living expenses
                </Link>{" "}
                is Coverage D on the HO-3. NFIP still does not buy the
                hotel. Ordinance or law does not buy the hotel either. It
                buys code. Three different lines. Three different
                shortfalls if you mix them.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                HO-6 Towers Are Not a 627.7011 House
              </h2>
              <p>
                Section 627.7011(6)(a) says the statute does not apply to
                policies not considered homeowners’ policies as that term
                is commonly understood in the insurance industry. A
                Collins Avenue condominium association rebuilds the
                building under a commercial-residential master policy.
                Unit owners typically carry HO-6 for interiors,
                belongings, liability, and{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  loss assessment after a special assessment
                </Link>
                . If the board has to meet current code on common
                elements, that cost shows up as an association claim and,
                often, an owner assessment — not as a 50% ordinance or
                law check written to one unit.
              </p>
              <p>
                Some HO-6 forms offer a limited ordinance-or-law
                extension on Coverage A building items (improvements,
                betterments, additions). That limit follows the unit’s
                interior, not the tower’s replacement cost. Do not shop a
                25% vs 50% house statute as if it rebuilds a 40-story
                envelope. The 2026 master-policy cost story is still{" "}
                <Link
                  href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                  className="text-ocean-500 hover:underline"
                >
                  why Florida condo insurance is getting more expensive
                </Link>
                . This page is for the detached or low-rise dwelling that
                actually receives the 627.7011 offers.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What This Is Not
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Not a first-hurricane landfall article.
                  </strong>{" "}
                  As of Advisory 3, Isaias is a 40-mph tropical storm
                  forecast to become a hurricane Thursday and threaten
                  the northern Gulf. If it reaches 74 mph, that is still
                  not a Sunny Isles Beach cone. A later “first hurricane
                  of 2026” update can wait for the upgrade. Do not treat
                  this page as a track forecast.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not the 15-year roof-age floor.
                  </strong>{" "}
                  Florida Statute 627.7011(5) also limits refusals based
                  solely on roof age. That subsection is already covered
                  in the wind-mitigation guide. This article is
                  627.7011(1)–(4): replacement cost and law and
                  ordinance. Same statute number, different job.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not a My Safe Florida Home application.
                  </strong>{" "}
                  Grants reimburse eligible homestead hardening —
                  including the $700,000 insured-value cap and the
                  association-only Condo Pilot — before a loss. Ordinance
                  or law pays after a covered loss when the code has
                  moved. A grant you did not use in 2026 does not become
                  a 50% ordinance claim in 2027.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not the October 20 Citizens takeout.
                  </strong>{" "}
                  The October 5 choice deadline has passed. Anyone still
                  in the October 20 assumption should compare
                  ordinance-or-law percentages on the assuming company’s
                  form, not only the estimated premium. That comparison
                  lives in{" "}
                  <Link
                    href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    the takeout guide
                  </Link>
                  . This page is the coverage line to look for on
                  whichever company actually writes the renewal.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Check This Week in 33160
              </h2>
              <p>
                A named storm 580 miles from the Mississippi is not a
                reason to open a flood claim on Collins Avenue. It is a
                reason to read the HO-3 while the king-tide window is
                already on the calendar and the first Gulf name of 2026
                is on the NHC page.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Pull the declarations page and find the ordinance or
                  law (law and ordinance) limit. Confirm whether it is
                  25% or 50% of Coverage A, or a flat dollar amount some
                  companies print instead.
                </li>
                <li>
                  If you only see 25%, ask for the 50% offer in writing
                  before a waiting period and a named storm overlap. The
                  statute says the 50% option still has to be offered.
                </li>
                <li>
                  Confirm Coverage A still tracks a 2026 rebuild in
                  HVHZ, not a 2019 purchase price. Ordinance or law is a
                  percentage of a limit. An outdated dwelling limit
                  shrinks both replacement cost and the code-upgrade
                  bucket.
                </li>
                <li>
                  Keep flood in force at the required limit if Citizens
                  is the wind carrier, and do not confuse ICC’s $30,000
                  with ordinance or law. King tides through October 13
                  are the flood calendar; the annual peak is still
                  October 27.
                </li>
                <li>
                  If the property is a Collins Avenue condo, stop
                  looking for a house 50% statute on the HO-6. Read the
                  master policy deductible, loss assessment, and whether
                  the unit form extends ordinance or law to Coverage A
                  improvements.
                </li>
                <li>
                  If you want the envelope hardened before a later
                  storm, that is still the My Safe Florida Home and
                  wind-mitigation file — separate from this claim
                  endorsement.
                </li>
              </ul>
              <p>
                If you want a local reading of a 33160 homeowners
                renewal — Coverage A, hurricane deductible, ordinance or
                law, and flood — start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="text-ocean-500 hover:underline"
                >
                  contact the agency
                </Link>
                . A quote request does not bind coverage. Coverage
                exists only when an insurer issues it. The statute and
                your form control; this page is a local reading of
                public sources as of October 7, 2026.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only.
                  It is not insurance advice, a guarantee of coverage or
                  any claim payment, or a recommendation of any insurer,
                  takeout company, or flood product. The National
                  Hurricane Center’s Tropical Storm Isaias Advisory 3
                  (4 a.m. CDT October 7, 2026), Florida Statute 627.7011
                  (2026), FEMA Increased Cost of Compliance guidance,
                  and South Florida Water Management District 2026
                  king-tide windows are described as published on the
                  date above. Ordinance-or-law limits, deductibles, and
                  floodplain substantial-damage determinations vary by
                  policy, building, and jurisdiction. HO-6 and
                  association master policies are not interchangeable
                  with HO-3 homeowners forms. Review your declarations
                  page and speak with a licensed Florida insurance
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
                  label: "Hurricane Isaias Binding Freeze in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
                  desc: "You cannot newly bind or increase a Citizens HO-3 this week. Read the 25% / 50% line on the policy you already have.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability — the HO-3 that actually carries the 25% / 50% ordinance-or-law offers.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims. Ordinance or law is the rebuild-to-code layer after wind.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "OIR-B1-1802 credits and the 15-year roof-age floor — premium files, not post-loss code money.",
                },
                {
                  label: "My Safe Florida Home Grants in Sunny Isles Beach (2026)",
                  href: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
                  desc: "Pre-loss HVHZ hardening grants. A grant you skip does not become ordinance or law after a storm.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "Coverage D pays the hotel. Ordinance or law pays the building official. Different lines.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "ICC’s $30,000 is a flood sublimit. It does not replace 50% ordinance or law on the HO-3.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "King tides this week and storm surge are still a separate flood policy.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "Keep required flood in force. A wind-for-flood lapse is not an ordinance-or-law problem.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "Compare ordinance-or-law percentages on the assuming form, not only the estimated premium.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 and the master policy rebuild the tower. 627.7011 is the house statute.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "If the association has to meet current code, the owner bill is often an assessment.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=home",
                  desc: "Start a no-obligation homeowners quote and ask for the ordinance-or-law line.",
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
            Ordinance or Law Questions
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
            Check the Ordinance-or-Law Line Before the Next Named Storm
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners quote and we will help read Coverage A,
            the hurricane deductible, and whether 25% or 50% is actually
            on the form.
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
