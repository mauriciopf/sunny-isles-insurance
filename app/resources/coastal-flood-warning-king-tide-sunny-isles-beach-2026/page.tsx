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
  title: "Coastal Flood Warning | Sunny Isles Beach 2026",
  description:
    "NWS Miami upgraded Coastal Miami-Dade to a Coastal Flood Warning through Wednesday. King tides peak Tuesday. How ZIP 33160 should read significant flooding, a 40 mph wind advisory, and a quiet Atlantic.",
  path: "/resources/coastal-flood-warning-king-tide-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does a Coastal Flood Warning freeze new Citizens coverage in Sunny Isles Beach?",
    answer:
      "No. Citizens pauses new and increased coverage statewide when a tropical-storm or hurricane watch or warning is issued for any part of Florida. National Weather Service Miami’s 1:20 a.m. EDT October 26 coastal hazard message keeps Coastal Miami-Dade — including Sunny Isles Beach and Haulover — on a Coastal Flood Warning until 8 p.m. Wednesday. That is a flood product (CF.W), not a tropical watch. The National Hurricane Center’s 8 a.m. EDT October 26 outlook from Forecaster Hagen says tropical cyclone formation is not expected during the next seven days. The October 10 lift after Isaias remains the last bind bulletin.",
  },
  {
    question:
      "Does a Wind Advisory start a hurricane deductible in ZIP 33160?",
    answer:
      "No. NWS Miami’s 1:18 a.m. EDT October 26 wind advisory is northeast winds 20 to 25 mph with frequent gusts up to 40 mph from 11 a.m. Monday through 8 p.m. Tuesday for metro and coastal Miami-Dade, Broward, and Palm Beach. Tree limbs, unsecured objects, and a few power outages are the listed impacts. Florida Statute 627.4025 still needs an NHC-declared hurricane plus a hurricane warning for some part of Florida. Neither is in force this morning. A 40 mph gust on Collins Avenue is typically an all-other-perils or wind-hail file, not a hurricane-percentage deductible. Read the October 19 deductible-trigger guide for how that statute works. This page is the flood-warning follow-up.",
  },
  {
    question:
      "Will flood insurance I buy today cover this week’s king tides in Sunny Isles Beach?",
    answer:
      "Usually no. A new National Flood Insurance Program application dated October 26 typically becomes effective around November 25 — after Miami-Dade’s October 24–30 king-tide window, after Tuesday’s east-coast annual peak, and after the November 6–9 window. November 23–26 is the nearer federal window, and even that sits at the edge of a 30-day wait. Private flood commonly waits 10 to 15 days, which from today is about November 5–10. That misses this week’s warning; it may catch November 6–9. Coverage already in force is a different file. Waiting periods, lender exceptions, and map revisions are in the policy, not in a warning headline.",
  },
  {
    question:
      "Does a Coastal Flood Warning mean HO-6 covers standing salt water on Collins Avenue?",
    answer:
      "Generally no. A warning is a more serious coastal-flood product than Friday’s advisory. It still does not convert a wind claim into a flood claim. Standing salt water from the Atlantic or the Intracoastal is a flood file. A personal condominium policy covers the unit interior and belongings for named perils or open perils on that form. External flood is a separate NFIP or private flood policy. The association master policy is a third file. NWS Miami’s warning text — numerous roads may be closed; low-lying homes, businesses, and some critical infrastructure inundated — describes the water. It does not rewrite the HO-6 exclusion.",
  },
  {
    question:
      "What changed between Friday’s Coastal Flood Advisory and Monday’s Warning?",
    answer:
      "Severity and duration. Friday’s National Weather Service Miami product was a Coastal Flood Advisory (CF.Y) through Saturday for moderate flooding of lots, parks, and roads, with a note that it might be extended or upgraded Sunday into Monday at the king-tide peak. Overnight, the 1:20 a.m. EDT October 26 message continued that advisory only until 2 a.m. this morning and put a Coastal Flood Warning (CF.W) in force until 8 p.m. Wednesday for Coastal Miami-Dade and Coastal Broward. The warning’s listed impact is significant coastal flooding: numerous road closures and inundation of low-lying property, including homes, businesses, and some critical infrastructure. That is the shopping-advice change the October 23 advisory page reserved. It is still not a tropical-storm watch and it is still not a hurricane deductible.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Coastal Flood Warning and King Tide in Sunny Isles Beach",
    href: "/resources/coastal-flood-warning-king-tide-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-26";

export default function CoastalFloodWarningKingTideSunnyIslesBeach2026Article() {
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
                "Coastal Flood Warning in Sunny Isles Beach This Week: Significant King-Tide Flooding Is Still a Flood File",
              description:
                "A Sunny Isles Beach guide to National Weather Service Miami’s October 26 Coastal Flood Warning, Tuesday’s king-tide peak, a 40 mph wind advisory, and why a quiet Atlantic still does not start a hurricane deductible.",
              path: "/resources/coastal-flood-warning-king-tide-sunny-isles-beach-2026",
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
              Flood Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Coastal Flood Warning in Sunny Isles Beach This Week:
            Significant King-Tide Flooding Is Still a Flood File
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The local product upgraded from an advisory to a warning.
            Tuesday is still the east-coast annual peak. ZIP 33160 should
            treat this week as flood, tide, and comprehensive — not as a
            hurricane claim.
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
                Monday morning, October 26, the Atlantic is still quiet
                and the barrier island is not. The National Hurricane
                Center’s 8 a.m. EDT Tropical Weather Outlook from
                Forecaster Hagen has no tropical cyclone in the Atlantic,
                the Caribbean, or the Gulf of America, and it does not
                expect formation during the next seven days. National
                Weather Service Miami’s 1:20 a.m. EDT coastal hazard
                message upgraded Coastal Miami-Dade — including Sunny
                Isles Beach and Haulover — from Friday’s{" "}
                <strong className="text-navy-800">
                  Coastal Flood Advisory
                </strong>{" "}
                to a{" "}
                <strong className="text-navy-800">
                  Coastal Flood Warning
                </strong>{" "}
                until 8 p.m. Wednesday, with significant flooding, road
                closures, and inundation of low-lying homes and
                businesses.
              </p>
              <p>
                That warning is the shopping-advice change the{" "}
                <Link
                  href="/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 23 advisory page
                </Link>{" "}
                reserved. An advisory through Saturday was moderate
                flooding of lots, parks, and roads. A warning through
                Wednesday is significant coastal flooding during the
                highest predicted tides of the fall. Friday’s product
                already said the advisory might need to be extended or
                upgraded Sunday into Monday at the king-tide peak. That
                upgrade happened overnight. It is still not a
                tropical-storm watch, and it still does not start a
                hurricane deductible.
              </p>
              <p>
                Keep the lanes. This page is not a rewrite of how{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  wind, storm surge, and flood
                </Link>{" "}
                split on an HO-3. It is not the{" "}
                <Link
                  href="/resources/josephine-hurricane-deductible-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 19 statutory-deductible how-to
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 21 king-tide auto comprehensive guide
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 18 NFIP versus private shopping worksheet
                </Link>
                . A Coastal Flood Warning on Collins Avenue, a 40 mph
                wind advisory, a marine gale warning, and a quiet
                Atlantic outlook are four different products.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Atlantic Is Quiet. The Tide Table Is Not.
              </h2>
              <p>
                The National Hurricane Center’s 2026 North Atlantic
                summary as of 09 UTC October 26 still lists ten named
                storms, one hurricane, and one major hurricane.
                Accumulated cyclone energy sits at 19.5 — 83 percent
                below the 1991–2020 normal. Direct deaths and U.S. damage
                in that preliminary table are still listed as zero.
                Isaias (October 6–10, peak 105 kt / 959 mb) remains the
                only hurricane. Josephine is still storm 10: a
                subtropical storm, October 21–22, 55 kt / 988 mb, 1.5
                ACE, closed as a post-tropical cyclone off Nantucket with
                no Florida watches. The next Atlantic name would be Kyle.
                It is unused this morning.
              </p>
              <p>
                That quiet season is why a Coastal Flood Warning is easy
                to misread as “hurricane weather” on a phone. It is not.
                NWS Miami’s 6:51 a.m. EDT Area Forecast Discussion ties
                this week’s rain, northeasterly gusts, and major coastal
                flooding to a mid-level low near northern Cuba and the
                Bahamas, a tight pressure gradient under a sprawling
                ridge, and king tides associated with the full moon — not
                to a tropical cyclone. A soaked Collins Avenue garage is
                still flood. A soaked car is still{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive
                </Link>
                . A 40 mph gust that drops a tree limb is typically
                all-other-perils or wind-hail, not Florida Statute
                627.4025.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Warning Actually Says for Coastal Miami-Dade
              </h2>
              <p>
                Friday’s 12:36 a.m. EDT October 23 product was a Coastal
                Flood Advisory until 8 p.m. Saturday: moderate flooding
                of lots, parks, and roads, with only isolated closures
                expected. Overnight, NWS Miami continued that advisory
                only until 2 a.m. Monday and put a Coastal Flood Warning
                in force for Coastal Miami-Dade (FLZ173) and Coastal
                Broward (FLZ172) until 8 p.m. EDT Wednesday. The text is
                specific: significant coastal flooding expected; numerous
                roads may be closed; low-lying property including homes,
                businesses, and some critical infrastructure will be
                inundated; some shoreline erosion will occur. Take the
                necessary actions to protect flood-prone property. Do not
                drive around barricades or through water of unknown
                depth.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Coastal Flood Warning through 8 p.m. Wednesday",
                    desc: "In force for Coastal Miami-Dade and Coastal Broward. Sunny Isles Beach and Haulover sit in that zone. Significant flooding at high tide is the expected impact, not a tropical-storm warning. CBS Miami’s 8:31 a.m. EDT October 26 forecast independently confirms a coastal flood warning and street-flooding risk through Tuesday.",
                  },
                  {
                    title: "Wind Advisory 11 a.m. Monday–8 p.m. Tuesday",
                    desc: "NWS Miami’s 1:18 a.m. EDT message posts northeast winds 20 to 25 mph with frequent gusts up to 40 mph for metro and coastal Miami-Dade, including ZIP 33160. Impacts: unsecured objects, tree limbs, a few power outages, difficult driving for high-profile vehicles. That is not a hurricane watch. Binding wind this morning does not create flood coverage for 8:50 a.m. high tide.",
                  },
                  {
                    title: "High Rip Current Risk through Wednesday evening",
                    desc: "Also in force for Coastal Miami-Dade. Dangerous rip currents are a beach-safety product. They are not a Citizens freeze and they are not flood insurance.",
                  },
                  {
                    title: "Do not import Palm Beach surf or a marine gale onto Collins Avenue",
                    desc: "Coastal Palm Beach (FLZ168) keeps a High Surf Advisory until 8 p.m. Wednesday with 8- to 13-foot breaking waves, plus the same flood warning. NWS Miami’s Area Forecast Discussion talks about 10- to 12-foot surf across the Palm Beaches. Miami-Dade is not on that high-surf advisory. A Gale Warning is in force through Wednesday morning for coastal waters from Deerfield Beach to Ocean Reef, with northeast winds 25 to 30 knots and seas 9 to 13 feet, occasionally 17. That is a marine product. It is not a tropical-storm watch.",
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
                Offshore, NWS Miami’s 3:51 a.m. EDT marine forecast keeps
                the Gale Warning through Wednesday morning for Deerfield
                Beach to Ocean Reef, then a Small Craft Advisory from
                8 a.m. to 8 p.m. Wednesday. Intracoastal waters are
                listed as very rough in exposed areas. Biscayne Bay sits
                under a Small Craft Advisory through Wednesday evening
                in the 6:51 a.m. discussion. A gale warning over the
                Atlantic waters is not a tropical-storm watch. Citizens’
                bind rule — agents may not bind new or increased coverage
                when a tropical-storm or hurricane watch or warning is
                posted for any part of Florida — is not tripped by a
                coastal-flood warning, a wind advisory, a rip-current
                statement, or rough bay water. The{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 lift after Isaias
                </Link>{" "}
                is still the last bind bulletin.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Tuesday Is Still the East-Coast Annual Peak — and Today
                Matches It
              </h2>
              <p>
                Miami-Dade Emergency/Risk Management’s king-tide calendar
                still lists October 24–30 as the highest predicted
                window, then November 6–9 and November 23–26. The South
                Florida Water Management District’s east-coast window of
                October 22–November 12 still has the annual peak on
                October 27. National Weather Service Miami’s 6:51 a.m.
                discussion now puts medium-to-high confidence that tidal
                gauges will reach major flood stage over the next few
                high-tide cycles, exacerbated by coastal showers and
                strong northeast winds. Rainfall is generally expected
                under an inch, with a few localized 1- to 2-inch amounts
                near the coast. The flood risk this week is the tide
                plus onshore flow, not a tropical rainfall total.
              </p>
              <p>
                NOAA Station 8723080 at Haulover Pier, datum MLLW, is the
                public gauge for this barrier island. Official
                predictions as of this morning:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">
                    NOAA Haulover Pier 8723080 predicted tides, October
                    26–30, 2026, MLLW feet
                  </caption>
                  <thead>
                    <tr className="border-b border-sand-200 text-left text-navy-900">
                      <th className="py-2 pr-4 font-semibold">Date</th>
                      <th className="py-2 pr-4 font-semibold">High</th>
                      <th className="py-2 font-semibold">Low</th>
                    </tr>
                  </thead>
                  <tbody className="text-navy-600">
                    <tr className="border-b border-sand-100">
                      <td className="py-2 pr-4">Mon Oct 26 (warning in force)</td>
                      <td className="py-2 pr-4">
                        8:50 a.m. 3.51 ft / 8:54 p.m. 3.19 ft
                      </td>
                      <td className="py-2">
                        2:24 a.m. 0.00 ft / 2:57 p.m. 0.41 ft
                      </td>
                    </tr>
                    <tr className="border-b border-sand-100">
                      <td className="py-2 pr-4">Tue Oct 27 (annual peak)</td>
                      <td className="py-2 pr-4">
                        9:36 a.m. 3.51 ft / 9:39 p.m. 3.16 ft
                      </td>
                      <td className="py-2">
                        3:09 a.m. −0.10 ft / 3:43 p.m. 0.40 ft
                      </td>
                    </tr>
                    <tr className="border-b border-sand-100">
                      <td className="py-2 pr-4">Wed Oct 28 (warning through 8 p.m.)</td>
                      <td className="py-2 pr-4">
                        10:24 a.m. 3.45 ft / 10:27 p.m. 3.10 ft
                      </td>
                      <td className="py-2">
                        3:56 a.m. −0.13 ft / 4:32 p.m. 0.44 ft
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Thu Oct 29</td>
                      <td className="py-2 pr-4">
                        11:15 a.m. 3.34 ft / 11:20 p.m. 3.00 ft
                      </td>
                      <td className="py-2">
                        4:47 a.m. −0.06 ft / 5:24 p.m. 0.52 ft
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Those are predicted astronomical tides. Onshore wind,
                rain on already-high water, and wave run-up are why NWS
                Miami is talking about major flood stage — not because a
                named storm is approaching Florida. County king-tide
                guidance is unchanged on the basic safety file: move cars
                off low streets before high tide, do not drive through
                salt water, wash a car that did with fresh water, and
                treat flood water as a health hazard. That is also the
                insurance file. A parked car on Collins Avenue is{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive, not PIP and not NFIP
                </Link>
                . A ground-floor lobby or a storage cage is flood, not
                the{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                . A Collins Avenue storefront that takes on salt water is
                still the flood layer outside a{" "}
                <Link
                  href="/resources/collins-avenue-business-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  business owners policy
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A 40 mph Gust Is Not a Hurricane Deductible
              </h2>
              <p>
                The wind advisory is the product most likely to get
                mixed into the flood file. Gusts to 40 mph can move
                patio furniture, break small limbs, and knock out a few
                lines. If that damage is covered, it is usually on the
                wind or all-other-perils side of an HO-3, HO-6, or HO-4
                — with that form’s ordinary deductible, not the hurricane
                percentage. Florida Statute 627.4025 still needs an
                NHC-declared hurricane and a hurricane warning for some
                part of Florida. This morning’s outlook has neither. The{" "}
                <Link
                  href="/resources/josephine-hurricane-deductible-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 19 how-to
                </Link>{" "}
                already covers named-storm deductibles, surplus-lines
                menus, and the calendar-year credit from Isaias. Do not
                reread it as if this morning’s warning reopened that
                clock.
              </p>
              <p>
                Rain through a roof that was already sound is still not
                a flood claim, and it is still not a hurricane claim.
                Water that comes up from the street, the garage ramp, or
                the Intracoastal is still flood. Additional living
                expenses still follow a covered peril. A hotel after
                king-tide flood is not on the NFIP dwelling form — see
                the{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 28 ALE guide
                </Link>
                . Private flood may include extra living expense. Ask
                that question on a quote dated for November, not for
                this morning’s 8:50 a.m. high.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                An Application Dated Today Misses This Week’s Warning
              </h2>
              <p>
                The shopping change is the wait against a warning that is
                already in force, not a new federal form. The{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 18 NFIP versus private guide
                </Link>{" "}
                still has the $250,000 / $100,000 Regular Program caps,
                no additional living expenses on the federal dwelling
                form, contents actual cash value, and Florida Statute
                627.715 private-flood categories. What changed this
                morning is the calendar against an application dated
                October 26, and the fact that NWS is now using the
                warning tier rather than the advisory tier.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "NFIP 30-day wait from today ≈ November 25",
                    desc: "That date sits after October 24–30 and after November 6–9. November 23–26 is the nearer federal window, and a 30-day wait from October 26 lands on November 25 — the last days of that window, not a clean catch. A new NFIP policy does not pick up this morning’s 3.51-foot high or Tuesday’s annual peak. Lender-required exceptions and map-revision rules still sit in the actual application.",
                  },
                  {
                    title: "Private flood 10–15 days from today ≈ November 5–10",
                    desc: "The shorter private wait generally misses this week’s warning. It may catch November 6–9 if the carrier binds on those terms. Private flood can include extra living expense that NFIP does not. Ask that question on the quote, and do not assume a 33160 high-rise garage is covered because the unit has an HO-6.",
                  },
                  {
                    title: "Coverage already in force is the live file",
                    desc: "If flood is already bound, this week is a claims and mitigation week, not a shopping week. Photograph vehicles and ground-floor rooms before high tide, move cars off Collins Avenue and low garage stalls if you can, and keep receipts if you pay for a higher garage or a hotel. A warning that forecasts inundation of homes and businesses is the moment to document — not the moment to start an NFIP application for Tuesday’s tide.",
                  },
                  {
                    title: "Citizens flood proof is still a December file",
                    desc: "Households that stayed with Citizens still face the December 1 wind-for-flood condition on HO-3 and similar house forms if required flood lapses. HO-6 and tenant forms stay outside that wind drop. This week’s warning does not move that date. Read the October 5 form guide only as a pointer.",
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
                Public Law 119-103 still authorizes the National Flood
                Insurance Program through December 11, 2026. That cliff
                is a late-November article if Congress has not acted. It
                is not a reason to republish the shopping guide this
                morning. A November 5 choice deadline for the November 17
                Citizens assumption is still on the personal-lines
                calendar if you have that packet — it is not this week’s
                flood file. Jewelry and scheduled personal property on a
                Collins Avenue HO-6 remain a Coverage C sublimit
                conversation — typically $1,000 per item / $10,000 per
                loss on many Florida unit-owners worksheets unless
                scheduled — and still not this week’s flood file.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What ZIP 33160 Should Do Before This Morning’s High Tide
              </h2>
              <p>
                The useful work this morning is not renaming a quiet
                Atlantic. It is matching the Coastal Flood Warning to
                the policy that actually pays standing salt water,
                matching the parked car to comprehensive, and leaving
                the hurricane-percentage deductible on the shelf.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  Confirm whether{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    flood insurance
                  </Link>{" "}
                  is already in force on the house, the unit’s
                  improvements and contents, or the association’s master
                  policy. An HO-3, HO-6, or HO-4 still generally excludes
                  external flood. A takeout that moved on October 20 did
                  not buy that layer. A warning does not either.
                </li>
                <li>
                  If you drive in 33160 this week, treat Collins Avenue,
                  low garage stalls, and flooded side streets as a{" "}
                  <Link
                    href="/auto-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    comprehensive
                  </Link>{" "}
                  risk. Florida PIP still does not repair the car.
                  Miami-Dade physical-damage inspection rules before
                  adding comprehensive still apply if you are shopping
                  that coverage after the fact. Photograph the vehicle
                  before 8:50 a.m. if it has to stay on a low street.
                </li>
                <li>
                  Ground-floor{" "}
                  <Link
                    href="/business-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    Collins Avenue businesses
                  </Link>{" "}
                  should not assume a BOP pays salt water. The warning
                  text lists inundation of businesses. Commercial flood
                  is still a separate NFIP General Property Form or
                  private flood file, and neither typically pays lost
                  bookings the way a wind business-income endorsement
                  might.
                </li>
                <li>
                  If a hotel bill is the worry, read{" "}
                  <Link
                    href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    additional living expenses
                  </Link>{" "}
                  against the peril. Wind ALE does not follow a king-tide
                  flood. NFIP’s dwelling form still has no Coverage D.
                  Private flood may.
                </li>
                <li>
                  Citizens can still bind new and increased coverage this
                  morning because Florida is not under a tropical watch.
                  Binding wind on Monday does not create flood coverage
                  for Monday’s or Tuesday’s high tide.
                </li>
                <li>
                  A November 5 choice deadline for the November 17
                  Citizens assumption is still on the personal-lines
                  calendar if you have that packet. Do not file an Offer
                  Form code because a flood warning is in effect. That
                  round stays on the{" "}
                  <Link
                    href="/resources/citizens-october-20-takeout-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    October 20 calendar page
                  </Link>
                  .
                </li>
              </ul>
              <p>
                Request a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                , a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                , or an{" "}
                <Link
                  href="/quote?type=auto"
                  className="text-ocean-500 hover:underline"
                >
                  auto quote
                </Link>{" "}
                if you want a 33160 worksheet against this week’s
                warning, Tuesday’s peak, and the next king-tide window.
                A quote request does not bind coverage.
              </p>

              <div className="bg-sand-50 border border-sand-200 rounded-2xl p-5 mt-8">
                <p className="text-xs text-navy-500 leading-relaxed">
                  <strong className="text-navy-700">Sources and limits. </strong>
                  The National Hurricane Center Tropical Weather Outlook
                  at 8 a.m. EDT October 26, 2026 (Forecaster Hagen:
                  tropical cyclone formation not expected during the next
                  7 days), the North Atlantic summary as of 09 UTC
                  October 26 (10 named storms / 1 hurricane / 1 major
                  hurricane / ACE 19.5, 83% below the 1991–2020 normal;
                  Josephine subtropical storm October 21–22, 55 kt /
                  988 mb, 1.5 ACE; Isaias October 6–10 peak 105 kt /
                  959 mb still the only hurricane; 0 direct deaths / $0
                  U.S. damage listed), National Weather Service Miami
                  coastal hazard message at 1:20 a.m. EDT October 26
                  (Coastal Flood Warning until 8 p.m. Wednesday for
                  Coastal Miami-Dade and Coastal Broward, significant
                  flooding, numerous road closures, inundation of
                  low-lying homes, businesses, and some critical
                  infrastructure; Coastal Flood Advisory continued only
                  until 2 a.m. Monday; High Rip Current Risk through
                  Wednesday evening; High Surf Advisory until 8 p.m.
                  Wednesday for Coastal Palm Beach only, 8–13 ft), NWS
                  Miami Wind Advisory at 1:18 a.m. EDT October 26
                  (northeast 20–25 mph, frequent gusts up to 40 mph,
                  11 a.m. Monday–8 p.m. Tuesday, FLZ068-072-074-168-172-
                  173), NWS Miami Area Forecast Discussion at 6:51 a.m.
                  EDT October 26 (major coastal flooding each high tide;
                  tidal gauges expected to reach major flood stage;
                  Wind Advisory; Gale Warning Atlantic waters until
                  8 a.m. Wednesday; Small Craft Advisory Biscayne Bay;
                  rainfall generally under an inch), NWS Miami marine
                  forecast at 3:51 a.m. EDT October 26 (Gale Warning
                  Deerfield Beach–Ocean Reef through Wednesday morning,
                  northeast 25–30 kt, seas 9–13 ft occasionally 17), CBS
                  Miami at 8:31 a.m. EDT October 26 (coastal flood
                  warning and wind advisory; gusts near 40 mph), Miami-
                  Dade ERM king-tide windows of October 24–30, November
                  6–9, and November 23–26, SFWMD’s east-coast window of
                  October 22–November 12 with annual peak October 27,
                  NOAA Station 8723080 Haulover Pier MLLW predictions,
                  Citizens’ October 10, 2026 binding-suspension lift and
                  statewide watch/warning bind rule, Florida Statute
                  627.4025, and Public Law 119-103’s NFIP authorization
                  through December 11, 2026 are described as those
                  agencies stated them as of this writing. Eligibility,
                  deductibles, waiting periods, and required limits
                  depend on the actual policy and underwriting. Review
                  your documents and speak with a licensed Florida
                  insurance professional about your situation.
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
                  label: "Coastal Flood Advisory This Weekend in Sunny Isles Beach",
                  href: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
                  desc: "Friday’s advisory through Saturday is the product this warning upgraded. Josephine still did not start a hurricane deductible.",
                },
                {
                  label: "If Josephine Forms, Does a Hurricane Deductible Apply?",
                  href: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
                  desc: "The October 19 statutory how-to this follow-up does not rewrite. A 40 mph wind advisory is not a Florida hurricane warning.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims. A Coastal Flood Warning is the flood file.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A soaked 33160 car this week is still comprehensive. A warning does not move it to HO-6.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The $250k/$100k worksheet. A 30-day wait from today misses October 27 and November 6–9.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is still excluded from HO-3 and HO-6, warning or not.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "A hotel after king-tide flood is not on the NFIP dwelling form.",
                },
                {
                  label: "Collins Avenue Business Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
                  desc: "The warning lists inundation of businesses. A BOP still does not pay salt water.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "A flood warning and a wind advisory are not a tropical-storm watch. Citizens can still bind this morning.",
                },
                {
                  label: "Citizens Takeout Happened October 20",
                  href: "/resources/citizens-october-20-takeout-sunny-isles-beach-2026",
                  desc: "Assumption mail is a different envelope from this week’s flood warning. November 5 is still the next choice deadline.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A $400k Coverage A house already needed flood. The warning did not create that requirement.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for this week’s warning and Tuesday’s king-tide peak.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 still sits beside the master policy. Standing salt water is usually the flood layer.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling and wind coverage still exclude flood from external water.",
                },
                {
                  label: "Auto Insurance in Sunny Isles Beach",
                  href: "/auto-insurance",
                  desc: "Comprehensive for salt water. PIP does not repair the car.",
                },
                {
                  label: "Business Insurance in Sunny Isles Beach",
                  href: "/business-insurance",
                  desc: "Ground-floor Collins Avenue storefronts still need a flood file outside the BOP.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the flood layer this week’s warning and Tuesday’s peak still require.",
                },
                {
                  label: "Request an Auto Quote",
                  href: "/quote?type=auto",
                  desc: "Check comprehensive before this morning’s 3.51-foot high on Haulover Pier.",
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
            Coastal Flood Warning Questions for 2026
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
            Match the Warning to Flood — Not to a Hurricane Deductible
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a flood, condo, or auto quote and we will help
            compare a Sunny Isles Beach policy against this week’s
            Coastal Flood Warning, Tuesday’s king-tide peak, and a
            hurricane deductible that still has not started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=flood"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Flood Quote
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
