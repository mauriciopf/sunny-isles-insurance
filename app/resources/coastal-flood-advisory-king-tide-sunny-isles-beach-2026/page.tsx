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
  title: "Coastal Flood Advisory | Sunny Isles Beach 2026",
  description:
    "NWS Miami upgraded Coastal Miami-Dade to a Coastal Flood Advisory through Saturday. Josephine went post-tropical off Nantucket. How ZIP 33160 should read king-tide flood vs a hurricane deductible.",
  path: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Did Josephine trigger a hurricane deductible in Sunny Isles Beach?",
    answer:
      "No. The National Hurricane Center named Subtropical Storm Josephine (AL102026) at 5 p.m. AST October 21 about 265 miles south of Nantucket, issued a last advisory at 5 p.m. AST October 22 as a post-tropical cyclone 235 miles east-southeast of Nantucket, and never posted a coastal watch or warning. Florida Statute 627.4025 still needs an NHC-declared hurricane plus a hurricane warning for some part of Florida. Josephine was listed as a subtropical storm, 55 kt / 988 mb, October 21–22. It never became a hurricane while tropical or subtropical, and Florida never had a Josephine watch. Read the October 19 deductible-trigger guide for how that statute works. This page is the follow-up after the name was used.",
  },
  {
    question:
      "Does a Coastal Flood Advisory freeze new Citizens coverage in Sunny Isles Beach?",
    answer:
      "No. Citizens pauses new and increased coverage statewide when a tropical-storm or hurricane watch or warning is issued for any part of Florida. National Weather Service Miami’s 12:36 a.m. EDT October 23 coastal hazard message keeps Coastal Miami-Dade — including Sunny Isles Beach and Haulover — on a Coastal Flood Advisory until 8 p.m. Saturday and a High Rip Current Risk through Saturday evening. Those are not tropical watches. The National Hurricane Center’s 8 a.m. EDT October 23 outlook from Forecaster Beven says tropical cyclone formation is not expected during the next seven days. The October 10 lift after Isaias remains the last bind bulletin.",
  },
  {
    question:
      "Will flood insurance I buy today cover this weekend’s king tides in ZIP 33160?",
    answer:
      "Usually no. A new National Flood Insurance Program application dated October 23 typically becomes effective around November 22 — after Miami-Dade’s October 24–30 king-tide window, after the October 27 east-coast annual peak, and after the November 6–9 window. November 23–26 is the nearer federal window. Private flood commonly waits 10 to 15 days, which from today is about November 2–7. That can still miss this weekend and Tuesday’s peak; it may catch November 6–9. Coverage already in force is a different file. Waiting periods, lender exceptions, and map revisions are in the policy, not in a headline.",
  },
  {
    question:
      "Does an HO-6 cover standing salt water on Collins Avenue this weekend?",
    answer:
      "Generally no. Standing salt water from the Atlantic or the Intracoastal is still a flood file, whether or not Josephine was named off Massachusetts. A personal condominium policy covers the unit interior and belongings for named perils or open perils on that form. External flood is a separate NFIP or private flood policy. The association master policy is a third file. A Coastal Flood Advisory that warns of flooding of lots, parks, and roads does not convert a wind claim into a flood claim, and it does not start a hurricane deductible.",
  },
  {
    question:
      "If NWS upgrades to a Coastal Flood Warning Sunday, does that change the deductible?",
    answer:
      "It can change the flood conversation. It does not start Florida’s statutory hurricane deductible. National Weather Service Miami’s October 23 product already says the Coastal Flood Advisory may need to be extended into next week or upgraded to a warning Sunday into Monday when king tides peak and rain chances and onshore winds are highest. A warning is a more serious coastal-flood product. It is still not a tropical-storm or hurricane watch. Josephine is post-tropical south of Nova Scotia. Shop the flood layer and the parked car’s comprehensive coverage against the tide table, not against a New England extra-tropical low.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Coastal Flood Advisory and King Tide in Sunny Isles Beach",
    href: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-23";

export default function CoastalFloodAdvisoryKingTideSunnyIslesBeach2026Article() {
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
                "Coastal Flood Advisory This Weekend in Sunny Isles Beach: Josephine Did Not Trigger a Hurricane Deductible",
              description:
                "A Sunny Isles Beach guide to National Weather Service Miami’s October 23 Coastal Flood Advisory, the October 24–30 king-tide window, and why Subtropical Storm Josephine’s post-tropical track off Nantucket did not start a Florida hurricane deductible.",
              path: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
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
            Coastal Flood Advisory This Weekend in Sunny Isles Beach:
            Josephine Did Not Trigger a Hurricane Deductible
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The local product upgraded from a flood statement to an
            advisory. Josephine is already post-tropical off New England.
            ZIP 33160 should treat this weekend as flood and tide, not as
            a hurricane claim.
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
                Friday morning, October 23, two products that looked
                related on a phone are not the same file. The National
                Hurricane Center’s 8 a.m. EDT Tropical Weather Outlook
                from Forecaster Beven has no tropical cyclone in the
                Atlantic, the Caribbean, or the Gulf of America, and it
                does not expect formation during the next seven days.
                Josephine already used the name. National Weather Service
                Miami’s 12:36 a.m. EDT coastal hazard message upgraded
                Coastal Miami-Dade — including Sunny Isles Beach and
                Haulover — from this week’s Coastal Flood Statement to a{" "}
                <strong className="text-navy-800">
                  Coastal Flood Advisory
                </strong>{" "}
                until 8 p.m. Saturday, with moderate flooding of lots,
                parks, and roads.
              </p>
              <p>
                That advisory is the shopping-advice change the{" "}
                <Link
                  href="/resources/josephine-hurricane-deductible-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 19 deductible-trigger guide
                </Link>{" "}
                reserved. A 40% outlook was not a new article. A Miami-Dade
                coastal-flood advisory is. Josephine was named at 5 p.m.
                AST October 21 as Subtropical Storm Josephine, Advisory 1,
                about 265 miles south of Nantucket, with 65 mph winds and
                no coastal watches or warnings. The last National Hurricane
                Center advisory, number 5 at 5 p.m. AST October 22, listed
                a post-tropical cyclone 235 miles east-southeast of
                Nantucket, still with no coastal watches, then handed the
                system to High Seas Forecasts. Florida never posted a
                Josephine watch. A hurricane deductible did not start.
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
                . It is not Tuesday’s{" "}
                <Link
                  href="/resources/citizens-october-20-takeout-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 20 takeout calendar
                </Link>
                . A named storm off Massachusetts, a Coastal Flood
                Advisory on Collins Avenue, and a king-tide peak on
                Tuesday are three different products.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Josephine Closed as a Subtropical Storm Off New England
              </h2>
              <p>
                The National Hurricane Center’s 2026 North Atlantic
                summary as of 09 UTC October 23 lists ten named storms,
                one hurricane, and one major hurricane. Accumulated
                cyclone energy sits at 19.5 — 82 percent below the
                1991–2020 normal. Direct deaths and U.S. damage in that
                preliminary table are still listed as zero. Isaias
                (October 6–10, peak 105 kt / 959 mb) remains the only
                hurricane. Josephine is storm 10: a subtropical storm,
                October 21–22, 55 kt / 988 mb, 1.5 ACE. The archive
                labels it Subtropical Storm Josephine, not a hurricane.
              </p>
              <p>
                Advisory 1 was already a northeast track away from the
                United States. Advisory 5 put the center near 40.0°N,
                65.8°W, moving northeast at 17 mph, with a turn east
                south of Nova Scotia and Newfoundland. NHC said Josephine
                had become an extratropical cyclone and could reach
                hurricane-force winds as that extra-tropical low. Extra-
                tropical hurricane-force winds off New England are not
                Florida Statute 627.4025. The statute still needs an
                NHC-declared hurricane and a hurricane warning for some
                part of Florida. Neither happened for Josephine. The{" "}
                <Link
                  href="/resources/josephine-hurricane-deductible-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 19 how-to
                </Link>{" "}
                already covers named-storm deductibles, surplus-lines
                menus, and the calendar-year credit from Isaias. Do not
                reread it as if this morning’s advisory reopened that
                clock.
              </p>
              <p>
                A named-storm deductible on a surplus-lines form can apply
                to an NHC-named subtropical cyclone. Josephine was named.
                That still does not put Tuesday’s king-tide water on that
                line. The loss has to be caused by that storm at this
                location. NHC’s own last advisory put Josephine’s land
                hazards on the northeastern United States and the
                Mid-Atlantic, with large swells along the eastern
                seaboard. National Weather Service Miami’s Area Forecast
                Discussion at 7:53 a.m. EDT October 23 ties this
                weekend’s rain, northeasterly gusts, and moderate-to-
                major coastal flooding to a mid-level Atlantic trough or
                cutoff low and onshore flow over king tides — not to a
                center 235 miles east-southeast of Nantucket. A soaked
                Collins Avenue garage is still flood. A soaked car is
                still{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Local Product Upgraded: Statement to Advisory
              </h2>
              <p>
                Tuesday night’s 9:52 p.m. EDT October 20 coastal hazard
                message kept Coastal Miami-Dade on a Coastal Flood
                Statement — isolated minor flooding around high tide.
                Overnight, NWS Miami continued a Coastal Flood Advisory
                (CF.Y) for Coastal Miami-Dade and Coastal Broward until
                8 p.m. EDT Saturday. The text is specific: moderate
                coastal flooding; flooding of lots, parks, and roads with
                only isolated road closures expected; take the necessary
                actions to protect flood-prone property; do not drive
                around barricades or through water of unknown depth.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Coastal Flood Advisory through 8 p.m. Saturday",
                    desc: "In force for Coastal Miami-Dade (FLZ173) and Coastal Broward (FLZ172). Sunny Isles Beach and Haulover sit in that zone. Moderate flooding at high tide is the expected impact, not a tropical-storm warning.",
                  },
                  {
                    title: "Possible extension or warning Sunday–Monday",
                    desc: "The same Miami product says the advisory will either need to be extended into next week or upgraded to a warning Sunday into Monday when king tides peak and rain chances and onshore winds are highest. The 7:53 a.m. Area Forecast Discussion adds that major coastal flooding is possible late this weekend into early next week. A warning would be a more serious flood product. It still would not start a hurricane deductible.",
                  },
                  {
                    title: "High Rip Current Risk through Saturday evening",
                    desc: "Also in force for Coastal Miami-Dade. Dangerous rip currents are a beach-safety product. They are not a Citizens freeze and they are not flood insurance.",
                  },
                  {
                    title: "Do not import Palm Beach surf or Melbourne’s watch",
                    desc: "Coastal Palm Beach (FLZ168) keeps a High Surf Advisory until 8 a.m. Saturday with 6- to 8-foot breaking waves, plus the same flood advisory. NWS Melbourne posted a Coastal Flood Watch from late Saturday night through late Sunday night for Coastal St. Lucie and Coastal Martin — not Miami-Dade. Gale watches this morning are marine products from Sebastian Inlet to Jupiter Inlet. Do not copy those headlines onto Collins Avenue.",
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
                Offshore, NWS Miami’s 12:39 a.m. EDT marine message keeps
                a Small Craft Advisory for coastal waters from Deerfield
                Beach to Ocean Reef out 20 nautical miles until 8 p.m.
                Sunday, with northeast winds 15 to 25 knots and seas 4 to
                7 feet building to 10 to 15 feet on Sunday. Biscayne Bay
                adds a Small Craft Advisory from 5 p.m. today through
                11 p.m. Saturday. A small-craft advisory is not a
                tropical-storm watch. Citizens’ bind rule — agents may not
                bind new or increased coverage when a tropical-storm or
                hurricane watch or warning is posted for any part of
                Florida — is not tripped by an advisory, a rip-current
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
                Tuesday Is Still the East-Coast Annual Peak
              </h2>
              <p>
                Miami-Dade Emergency/Risk Management’s king-tide calendar
                still lists October 24–30 as the highest predicted window,
                then November 6–9 and November 23–26. The South Florida
                Water Management District’s east-coast window of October
                22–November 12 still has the annual peak on October 27.
                National Weather Service Miami’s own coastal product now
                puts that peak against rain and onshore winds, not against
                a quiet astronomical tide.
              </p>
              <p>
                NOAA Station 8723080 at Haulover Pier, datum MLLW, is the
                public gauge for this barrier island. Official predictions
                as of this morning:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <caption className="sr-only">
                    NOAA Haulover Pier 8723080 predicted tides, October
                    23–28, 2026, MLLW feet
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
                      <td className="py-2 pr-4">Fri Oct 23</td>
                      <td className="py-2 pr-4">6:38 a.m. 3.12 ft / 6:49 p.m. 3.06 ft</td>
                      <td className="py-2">12:16 a.m. 0.62 ft / 12:42 p.m. 0.70 ft</td>
                    </tr>
                    <tr className="border-b border-sand-100">
                      <td className="py-2 pr-4">Sat Oct 24 (window opens)</td>
                      <td className="py-2 pr-4">7:22 a.m. 3.30 ft / 7:30 p.m. 3.14 ft</td>
                      <td className="py-2">12:58 a.m. 0.39 ft / 1:27 p.m. 0.58 ft</td>
                    </tr>
                    <tr className="border-b border-sand-100">
                      <td className="py-2 pr-4">Tue Oct 27 (annual peak)</td>
                      <td className="py-2 pr-4">9:36 a.m. 3.51 ft / 9:39 p.m. 3.16 ft</td>
                      <td className="py-2">3:09 a.m. −0.10 ft / 3:43 p.m. 0.40 ft</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Wed Oct 28</td>
                      <td className="py-2 pr-4">10:24 a.m. 3.45 ft / 10:27 p.m. 3.10 ft</td>
                      <td className="py-2">3:56 a.m. −0.13 ft / 4:32 p.m. 0.44 ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Those are predicted astronomical tides. Onshore wind, rain
                on already-high water, and wave run-up are why NWS Miami
                is talking about a possible warning Sunday and Monday —
                not because Josephine is still a subtropical storm. County
                king-tide guidance is unchanged on the basic safety file:
                move cars off low streets before high tide, do not drive
                through salt water, wash a car that did with fresh water,
                and treat flood water as a health hazard. That is also the
                insurance file. A parked car on Collins Avenue is{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive, not PIP and not NFIP
                </Link>
                . A ground-floor lobby or a storage cage is flood, not the{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                An Application Dated Today Misses This Weekend
              </h2>
              <p>
                The shopping change is the wait, not a new federal form.
                The{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 18 NFIP versus private guide
                </Link>{" "}
                still has the $250,000 / $100,000 Regular Program caps, no
                additional living expenses on the federal dwelling form,
                contents actual cash value, and Florida Statute 627.715
                private-flood categories. What changed this morning is the
                calendar against an application dated October 23.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "NFIP 30-day wait from today ≈ November 22",
                    desc: "That date sits after October 24–30 and after November 6–9. November 23–26 is the nearer federal window. A new NFIP policy does not pick up Saturday’s advisory or Tuesday’s 3.51-foot high. Lender-required exceptions and map-revision rules still sit in the actual application.",
                  },
                  {
                    title: "Private flood 10–15 days from today ≈ November 2–7",
                    desc: "Even the shorter private wait generally misses this weekend and Tuesday’s peak. It may catch November 6–9 if the carrier binds on those terms. Private flood can include extra living expense that NFIP does not. Ask that question on the quote, and do not assume a 33160 high-rise garage is covered because the unit has an HO-6.",
                  },
                  {
                    title: "Coverage already in force is the live file",
                    desc: "If flood is already bound, this weekend is a claims and mitigation weekend, not a shopping weekend. Photograph vehicles before high tide, move them off Collins Avenue and low garage stalls if you can, and keep receipts if you pay for a higher garage or a hotel. Additional living expenses still follow a covered peril. NFIP’s dwelling form still has no hotel bill — see the September 28 ALE guide.",
                  },
                  {
                    title: "Citizens flood proof is a different December file",
                    desc: "Households that stayed with Citizens still face the December 1 wind-for-flood condition on HO-3 and similar house forms if required flood lapses. HO-6 and tenant forms stay outside that wind drop. This weekend’s advisory does not move that date. Read the October 5 form guide only as a pointer.",
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
                Insurance Program through December 11, 2026. That cliff is
                a late-November article if Congress has not acted. It is
                not a reason to republish the shopping guide this morning.
                Jewelry and scheduled personal property on a Collins
                Avenue HO-6 remain a Coverage C sublimit conversation —
                typically $1,000 per item / $10,000 per loss on many
                Florida unit-owners worksheets unless scheduled — and
                still not this weekend’s flood file.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What ZIP 33160 Should Do Before Saturday’s High Tide
              </h2>
              <p>
                The useful work this morning is not renaming Josephine.
                It is matching the Coastal Flood Advisory to the policy
                that actually pays standing salt water, and matching the
                parked car to comprehensive.
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
                  not buy that layer.
                </li>
                <li>
                  If you drive in 33160 this weekend, treat Collins
                  Avenue, low garage stalls, and flooded side streets as a{" "}
                  <Link
                    href="/auto-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    comprehensive
                  </Link>{" "}
                  risk. Florida PIP still does not repair the car. Miami-
                  Dade physical-damage inspection rules before adding
                  comprehensive still apply if you are shopping that
                  coverage after the fact.
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
                  Binding wind on Friday does not create flood coverage
                  for Saturday’s high tide.
                </li>
                <li>
                  A November 5 choice deadline for the November 17
                  Citizens assumption is still on the personal-lines
                  calendar if you have that packet. Do not file an Offer
                  Form code because a flood advisory is in effect. That
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
                if you want a 33160 worksheet against this weekend’s
                advisory, Tuesday’s peak, and the next king-tide window.
                A quote request does not bind coverage.
              </p>

              <div className="bg-sand-50 border border-sand-200 rounded-2xl p-5 mt-8">
                <p className="text-xs text-navy-500 leading-relaxed">
                  <strong className="text-navy-700">Sources and limits. </strong>
                  The National Hurricane Center Tropical Weather Outlook
                  at 8 a.m. EDT October 23, 2026 (Forecaster Beven:
                  tropical cyclone formation not expected during the next
                  7 days), Subtropical Storm Josephine Advisory 1 at
                  5 p.m. AST October 21 (AL102026; 37.4°N 69.5°W, about
                  265 miles south of Nantucket; 65 mph; 990 mb; no
                  coastal watches or warnings), Post-Tropical Cyclone
                  Josephine Advisory 5 and Discussion 5 at 5 p.m. AST
                  October 22 (40.0°N 65.8°W, about 235 miles
                  east-southeast of Nantucket and 335 miles south-
                  southwest of Halifax; 65 mph; 988 mb; last NHC
                  advisory; extra-tropical; no coastal watches), the
                  North Atlantic summary as of 09 UTC October 23 (10
                  named storms / 1 hurricane / 1 major hurricane / ACE
                  19.5, 82% below the 1991–2020 normal; Josephine
                  subtropical storm October 21–22, 55 kt / 988 mb, 1.5
                  ACE; Isaias October 6–10 peak 105 kt / 959 mb still the
                  only hurricane; 0 direct deaths / $0 U.S. damage
                  listed), National Weather Service Miami coastal hazard
                  message at 12:36 a.m. EDT October 23 (Coastal Flood
                  Advisory until 8 p.m. Saturday for Coastal Miami-Dade
                  and Coastal Broward, moderate flooding of lots, parks,
                  and roads; High Rip Current Risk through Saturday
                  evening; possible extension or upgrade to a warning
                  Sunday–Monday at king-tide peak; High Surf Advisory
                  until 8 a.m. Saturday for Coastal Palm Beach only, 6–8
                  ft), NWS Miami marine message at 12:39 a.m. EDT
                  (Small Craft Advisory Deerfield Beach–Ocean Reef until
                  8 p.m. Sunday, northeast 15–25 kt, seas 4–7 ft building
                  10–15 ft Sunday; Biscayne Bay Small Craft Advisory
                  5 p.m. Friday–11 p.m. Saturday), NWS Miami Area
                  Forecast Discussion at 7:53 a.m. EDT October 23
                  (moderate coastal flooding each high tide; major
                  coastal flooding possible late weekend into early next
                  week), NWS Melbourne Coastal Flood Watch for Coastal
                  St. Lucie and Coastal Martin (not Miami-Dade), Miami-
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
                  label: "Coastal Flood Warning This Week in Sunny Isles Beach (2026)",
                  href: "/resources/coastal-flood-warning-king-tide-sunny-isles-beach-2026",
                  desc: "Monday’s upgrade from advisory to warning. Significant flooding through Wednesday is still a flood file, not a hurricane deductible.",
                },
                {
                  label: "If Josephine Forms, Does a Hurricane Deductible Apply?",
                  href: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
                  desc: "The October 19 statutory how-to this follow-up does not rewrite. Josephine was named. Florida never posted a watch.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims. A Coastal Flood Advisory is the flood file.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A soaked 33160 car this weekend is still comprehensive. Josephine’s name does not move it to HO-6.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The $250k/$100k worksheet. A 30-day wait from today misses October 27 and November 6–9.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is still excluded from HO-3 and HO-6, named storm or not.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "A hotel after king-tide flood is not on the NFIP dwelling form.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "An advisory and a rip-current risk are not a tropical-storm watch. Citizens can still bind this morning.",
                },
                {
                  label: "Citizens Takeout Happened October 20",
                  href: "/resources/citizens-october-20-takeout-sunny-isles-beach-2026",
                  desc: "Assumption mail is a different envelope from this weekend’s flood advisory. November 5 is still the next choice deadline.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A $400k Coverage A house already needed flood. The advisory did not create that requirement.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for this weekend’s advisory and Tuesday’s king-tide peak.",
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
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the flood layer this weekend’s advisory and Tuesday’s peak still require.",
                },
                {
                  label: "Request an Auto Quote",
                  href: "/quote?type=auto",
                  desc: "Check comprehensive before Saturday’s 3.30-foot morning high on Haulover Pier.",
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
            Coastal Flood Advisory Questions for 2026
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
            Match the Advisory to Flood — Not to Josephine
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a flood, condo, or auto quote and we will help
            compare a Sunny Isles Beach policy against this weekend’s
            Coastal Flood Advisory, Tuesday’s king-tide peak, and a
            hurricane deductible that never started.
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
