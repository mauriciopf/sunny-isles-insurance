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
  title: "Josephine Hurricane Deductible | Sunny Isles Beach 2026",
  description:
    "NHC’s Oct. 19 outlook: 0% in 48 hours, 40% in 7 days a non-tropical low could become subtropical Josephine. Fla. Stat. 627.4025 still needs an NHC hurricane and a Florida warning.",
  path: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "If Josephine forms this week, does my hurricane deductible apply in Sunny Isles Beach?",
    answer:
      "Not on this morning’s facts. Florida Statute 627.4025 defines a hurricane as a storm the National Hurricane Center has declared a hurricane, and it starts the deductible clock only when a hurricane warning is issued for any part of Florida. The 8 a.m. EDT October 19 outlook still describes a non-tropical low: near 0% chance of subtropical formation in 48 hours, 40% in seven days, then a northeast track away from the East Coast. A subtropical storm, if named Josephine, is a named storm. It is not automatically a hurricane, and it does not by itself start the statutory hurricane period.",
  },
  {
    question:
      "What is the difference between a hurricane deductible and a named-storm deductible?",
    answer:
      "The hurricane deductible is a Florida statutory concept. The Department of Financial Services repeats the same test: NHC must call the system a hurricane, and a hurricane warning must be up for some part of Florida, ending 72 hours after the last hurricane watch or warning statewide. A named-storm deductible is a policy term. Some surplus-lines and private forms apply a percentage to any NHC-named tropical or subtropical cyclone, even if it never becomes a hurricane. Read the declarations page. Do not assume the statute and the form use the same word.",
  },
  {
    question:
      "Does homeowners insurance cover this week’s high surf or rip currents in Sunny Isles Beach?",
    answer:
      "No as a beach-safety product, and usually no as an erosion product. National Weather Service Miami’s 1:40 a.m. EDT October 19 coastal hazard message keeps a High Rip Current Risk for Coastal Miami-Dade — including Sunny Isles Beach and Haulover — through Thursday evening. That is a swim warning. Beach erosion and lost sand are generally not a homeowners peril. Wind that opens a roof or a slider is a different file from water that comes up through a storm drain.",
  },
  {
    question:
      "If Collins Avenue floods from this swell, is that a wind claim?",
    answer:
      "Usually not. Standing salt water from the Atlantic or the Intracoastal is still generally treated as flood, whether the driver is a named hurricane, a subtropical storm, or an unnamed nor’easter. A standard HO-3 or HO-6 does not become a flood policy because the National Hurricane Center is watching a low off the Carolinas. National Flood Insurance Program waiting periods still apply. A new NFIP application dated October 19 typically becomes effective around November 18 — after the October 27 east-coast peak.",
  },
  {
    question:
      "Is Citizens frozen again because Josephine might form?",
    answer:
      "Not on this morning’s products. Citizens’ binding-suspension rule pauses new and increased coverage statewide when a tropical-storm or hurricane watch or warning is issued for any part of Florida. High surf, high rip-current risk, and small-craft advisories are not that trigger. The October 10 lift after Isaias remains the last bind bulletin. Watch the National Hurricane Center, not the surf report, for the next freeze.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Josephine Hurricane Deductible in Sunny Isles Beach",
    href: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-19";

export default function JosephineHurricaneDeductibleSunnyIslesBeach2026Article() {
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
                "If Josephine Forms This Week, Does a Hurricane Deductible Apply in Sunny Isles Beach in 2026?",
              description:
                "A Sunny Isles Beach guide to Florida’s statutory hurricane deductible versus a possible subtropical Josephine: NHC’s October 19 non-tropical low, why a named storm is not automatically a hurricane, and why this week’s rip currents still are not a flood policy.",
              path: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
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
            If Josephine Forms This Week, Does a Hurricane Deductible Apply
            in Sunny Isles Beach in 2026?
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The National Hurricane Center is watching a non-tropical low
            off the East Coast. Florida’s hurricane deductible still needs
            a hurricane — not a 40% subtropical chance, and not a rip
            current flag on Haulover.
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
                Monday morning, October 19, the National Hurricane Center’s
                8 a.m. EDT Tropical Weather Outlook from Forecaster Pasch
                still had no tropical cyclone in the Atlantic, the
                Caribbean, or the Gulf of America. What it did have was a
                storm-force non-tropical low along a front a few hundred
                miles off the southeast U.S. coast. The low is expected to
                meander for a couple of days. If it stays over the Gulf
                Stream and detaches from the front, it could briefly take
                on subtropical characteristics in the middle to latter
                part of the week. Formation chance: near 0 percent through
                48 hours, medium 40 percent through seven days. Then the
                system is forecast to turn northeast, away from the eastern
                United States, with conditions becoming unfavorable by the
                weekend. The next unused Atlantic name is still Josephine.
              </p>
              <p>
                The 2 a.m. EDT outlook already had the same disturbance.
                The season summary as of 09 UTC October 19 still lists
                nine named storms, one hurricane, and one major hurricane.
                Accumulated cyclone energy sits at 18.0 — 83 percent below
                the 1991–2020 normal. Isaias (October 6–10, peak 105 kt /
                959 mb, Destin landfall) remains the only hurricane in that
                table. Direct deaths and U.S. damage in the preliminary
                summary are still listed as zero. A 40% subtropical chance
                off the Carolinas is not a Miami-Dade hurricane warning.
              </p>
              <p>
                The local product is not a cone. National Weather Service
                Miami’s 1:40 a.m. EDT coastal hazard message keeps a High
                Rip Current Risk in effect for Coastal Miami-Dade —
                including Sunny Isles Beach and Haulover Beach — through
                Thursday evening. Coastal Broward adds a High Surf Advisory
                from 2 p.m. today through 8 p.m. Tuesday, with 6- to 8-foot
                breaking waves. Coastal Palm Beach keeps a High Surf
                Advisory through 8 a.m. Wednesday and 7- to 12-foot surf.
                Miami-Dade, as of that message, is on the rip-current
                product, not a high-surf advisory and not a coastal-flood
                statement. Offshore, the Miami office’s small-craft
                advisory for waters from Deerfield Beach to Ocean Reef
                still has northeast winds 20 to 30 knots and seas 8 to 13
                feet through 8 p.m. Wednesday.
              </p>
              <p>
                This page is the deductible-trigger file for an unnamed,
                possibly subtropical East Coast low. It is not a rewrite of
                the{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  August 28 wind-versus-surge-versus-flood hurricane guide
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 7 Isaias binding freeze
                </Link>{" "}
                or the{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 lift
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  king-tide auto comprehensive guide
                </Link>
                . A percentage deductible, a flood wait, and a rip-current
                flag are three different products. ZIP 33160 should not
                collapse them because a headline used the next name on the
                list.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Florida’s Hurricane Deductible Still Needs a Hurricane
              </h2>
              <p>
                Florida Statute 627.4025 is specific, and the Department of
                Financial Services repeats it for consumers. “Hurricane”
                means a storm system the National Hurricane Center has
                declared a hurricane. The duration, in Florida, begins when
                a hurricane warning is issued for any part of the state and
                ends 72 hours after the last hurricane watch or hurricane
                warning statewide is discontinued. “Hurricane coverage” is
                windstorm during that hurricane, including rain that enters
                after wind first makes an opening. “Hurricane deductible”
                is the deductible that applies to loss caused by a
                hurricane. When that deductible is applied, no other
                deductible under the policy may be applied to that
                hurricane loss.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Statutory hurricane deductible",
                    desc: "NHC must call it a hurricane, and a hurricane warning must be posted for some part of Florida. A subtropical storm, a tropical storm, a nor’easter, or a 40% outlook does not start that clock. Isaias did, because NHC named a hurricane and Florida had hurricane warnings — on the Panhandle, not in Miami-Dade.",
                  },
                  {
                    title: "Named-storm deductible (policy term)",
                    desc: "Some forms, especially surplus lines, apply a percentage to any NHC-named tropical or subtropical cyclone. If Josephine is named as a subtropical storm and never becomes a hurricane, this line — if it is on your declarations page — can still fire. The statute does not write that line for you. Surplus-lines deductibles are also outside the $500 / 2% / 5% / 10% menu in section 627.701.",
                  },
                  {
                    title: "All-other-perils or wind/hail deductible",
                    desc: "Wind from an unnamed frontal low, a tornado unconnected to a hurricane, or a local thunderstorm generally uses the all-other-perils deductible or a separate wind/hail deductible, not the hurricane percentage. That is often a flat dollar amount, and on a Collins Avenue HO-6 it is usually much smaller than 2% of Coverage A.",
                  },
                  {
                    title: "Calendar-year credit if a hurricane already hit",
                    desc: "For personal-lines residential policies with the same insurer or insurer group, the hurricane deductible is annual. Isaias was a Florida hurricane occurrence. If you already filed a wind claim from that storm with the same company group, a second hurricane this calendar year would use the remaining balance or the all-other-perils deductible, whichever is greater. An unnamed swell this week is not that second hurricane.",
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
                Pull the declarations page before you argue with a
                headline. Write down the hurricane deductible as a dollar
                amount — Florida requires the percentage to be shown that
                way — the named-storm deductible if one exists, and the
                all-other-perils deductible. A 2% hurricane deductible on
                a $400,000 Coverage A house is $8,000. The same house’s
                $1,000 all-other-perils deductible is the number that
                usually applies to wind that is not a statutory hurricane.
                Mixing those two figures is how a 33160 owner over-reserves
                cash for a rip-current week, or under-reserves it for the
                next real hurricane warning.
              </p>
              <p>
                Interior rain damage still needs an opening created by
                covered wind, even during a hurricane. Florida’s statutory
                definition of hurricane coverage says rain, sand, or dust
                that enters after the direct force of the windstorm first
                damages the building. A closed balcony slider that weeps
                during northeasterly swell is a seepage conversation, not
                a hurricane-percentage conversation. That rule does not
                loosen because the next name on the list is unused.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                This Week’s Alerts Are Surf, Not a Florida Hurricane Warning
              </h2>
              <p>
                NHC’s own outlook is blunt about impacts that do not depend
                on a name: high winds, coastal flooding, and dangerous
                surf along portions of the U.S. East Coast over the next
                few days, regardless of whether the low becomes
                subtropical. AccuWeather’s October 19 note, quoted in
                Florida coverage this morning, puts the heavier coastal
                effects closer to the Outer Banks, southeastern Virginia,
                and the mid-Atlantic, with onshore flow, rip currents, and
                some coastal flooding extending down the Florida Atlantic
                coast. That is a swell and tide problem. It is not a
                Miami-Dade hurricane watch.
              </p>
              <p>
                Keep the map honest. Coastal Miami-Dade’s in-force product
                this morning is High Rip Current Risk through Thursday
                evening. Do not import Palm Beach’s 7- to 12-foot surf
                heights across the county line as if they were a Sunny
                Isles Beach advisory. Do not treat a small-craft advisory
                on Biscayne Bay as a tropical-storm warning. Citizens’
                binding-suspension rule — agents may not bind new coverage
                or increased coverage, regardless of effective date, when
                a tropical-storm or hurricane watch or warning is issued
                for any part of Florida — is not tripped by a rip-current
                statement. The{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 lift
                </Link>{" "}
                is still the last bind bulletin. If NHC later posts a
                tropical-storm or hurricane watch or warning for any
                Florida county, that is a new freeze article. This outlook
                is not.
              </p>
              <p>
                A subtropical storm, if it forms and is named Josephine,
                would be the tenth named storm of 2026. NHC names
                subtropical cyclones from the same list. Naming does two
                insurance jobs and does not do a third. It can start a
                named-storm deductible on forms that use that language. It
                can, if watches or warnings go up for Florida, freeze
                Citizens binds. It does not, by itself, convert the
                statutory hurricane deductible to “on.” Only an NHC
                hurricane plus a Florida hurricane warning does that.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Swell Water on Collins Avenue Is Still Flood
              </h2>
              <p>
                Miami-Dade County Environmental Resources Management’s
                king-tide notice still marks October 24–30 as the highest
                predicted tides of the fall, then November 6–9 and November
                23–26. The South Florida Water Management District’s
                east-coast window of October 22–November 12 has already
                started on the calendar, with the annual maximum still
                October 27. The county’s own king-tide page is the
                sentence that matters this week: more severe flooding may
                result if king tides coincide with heavy rain, strong
                winds, or big waves.
              </p>
              <p>
                NOAA Station 8723080 at Haulover Pier — the tide point for
                North Miami Beach and Sunny Isles Beach — is still in the
                ordinary part of the month this morning. Official
                predictions for October 19: a 2.47-foot MLLW high at 2:58
                a.m., a 0.98-foot low at 9:12 a.m., a 2.67-foot high at
                3:45 p.m., and a 1.15-foot low at 9:54 p.m. Eight days out,
                October 27 is a different table: a −0.10-foot low at 3:09
                a.m., a 3.51-foot high at 9:36 a.m., a 0.40-foot low at
                3:43 p.m., and a 3.16-foot high at 9:39 p.m. This week’s
                swell is the setup. Next week’s perigean spring tide is
                the peak. They are adjacent, not the same event.
              </p>
              <p>
                A standard{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-3
                </Link>{" "}
                or{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                still does not pay for flood from external water. Storm
                surge, king-tide overflow, and wind-driven salt water in
                a garage or a ground-floor lobby are generally the{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                file, whether or not anyone ever names Josephine.{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Additional living expenses
                </Link>{" "}
                follow a covered wind or fire peril, not an NFIP
                contents form. The City of Sunny Isles Beach remains CRS
                Class 8 (a 10% NFIP discount), not unincorporated
                Miami-Dade’s Class 3 (35%).
              </p>
              <p>
                The waiting-period math from this morning is the same
                unforgiving calendar as last week, shifted three days.
                A new National Flood Insurance Program application dated
                October 19 typically becomes effective around November 18.
                That date is after the October 24–30 peak and after
                November 6–9. The November 23–26 king-tide set is the
                nearer federal window a new NFIP file started today can
                realistically reach. Private flood under Florida Statute
                627.715 commonly uses a 10- to 15-day wait, which from
                today lands around October 29–November 3 — inside the
                tail of the October 24–30 window, not in front of the
                27th. An already in-force flood policy is the live file
                for next week’s streets. Public Law 119-103 still carries
                NFIP authorization through December 11, 2026 — a date to
                watch, not a reason to republish the{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  shopping guide
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Cars, Sand, and What This Week Is Not
              </h2>
              <p>
                A parked car in a Collins Avenue garage, or on street
                parking if tide and swell push water over the curb, is
                still{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive auto
                </Link>
                , never NFIP and never the HO-3. Miami-Dade’s own
                king-tide advice is to move vehicles to higher ground
                before high tide and rinse salt water with fresh water.
                Do not drive through flooded lanes to “test” whether
                Josephine has been named. Naming does not change which
                policy pays for a soaked ECU.{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  PIP
                </Link>{" "}
                still does not repair the car.
              </p>
              <p>
                Beach erosion, lost dune, and sand in a pool are usually
                not a homeowners claim. A seawall or dock may have its
                own exclusions. A boat on a lift is a boat policy, not
                the house. Jewelry, watches, and art still sit on Coverage
                C special limits — often about $1,000 to $2,500 for theft
                — unless they are scheduled. That schedule is a different
                article. Do not drop it this week to chase a deductible
                question the swell does not trigger.
              </p>
              <p>
                Keep two other calendars in their lanes. The October 20
                Citizens personal-lines assumption is tomorrow. The
                choice deadline for that round was October 5 and has
                passed. If a Notice of Assumption arrives, read the{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  takeout guide
                </Link>
                ; do not treat this swell as a reason to ignore the
                assumption. November 17 (choice deadline November 5) and
                December 15 (choice deadline December 4) are the next
                rounds. Citizens’ December 1, 2026 personal-lines forms
                — including the wind-for-flood condition on HO-3 — are
                still a{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  December story
                </Link>
                , not this week’s deductible test.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A 33160 Checklist for This Week’s Outlook
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Read the deductible lines, not the storm name.
                  </strong>{" "}
                  Hurricane, named-storm, and all-other-perils are three
                  different numbers. A 40% subtropical chance does not
                  rewrite them. If you cannot find the dollar amount of
                  the hurricane deductible on the declarations page, ask
                  before the next real warning.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Treat street water as flood, even if Josephine is
                    never named.
                  </strong>{" "}
                  An in-force flood policy is the file that is live for
                  October 24–30. A new NFIP application today misses the
                  27th.{" "}
                  <Link
                    href="/quote?type=flood"
                    className="text-ocean-500 hover:underline"
                  >
                    Start a flood conversation
                  </Link>{" "}
                  for the November windows if the house, the HO-6
                  improvements, or the garage storage still has no flood
                  layer.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Move the car before high tide, not after the headline.
                  </strong>{" "}
                  Comprehensive is the auto conversation. Photograph the
                  stall if water is already in the garage. Do not start a
                  flooded engine.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Stay out of the surf.
                  </strong>{" "}
                  High Rip Current Risk through Thursday evening is a
                  life-safety product. It is not an insurance endorsement.
                  NWS Miami’s instruction is to swim near a lifeguard, or
                  not at all.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not wait for a freeze that is not in force.
                  </strong>{" "}
                  Citizens can still bind new and increased personal-lines
                  coverage this morning. If you have been putting off a
                  wind increase, an ordinance-or-law endorsement, or a
                  flood application, a quiet bind window is the point —
                  not a reason to assume the next name will close it.
                </li>
                <li>
                  <strong className="text-navy-800">
                    File wind claims even when they look smaller than the
                    hurricane percentage.
                  </strong>{" "}
                  DFS tells policyholders to report hurricane wind damage
                  so the calendar-year deductible is credited. That advice
                  is for an actual hurricane occurrence. This week’s swell
                  is more likely an all-other-perils or flood file. Report
                  what actually happened, on the policy that actually
                  applies.
                </li>
              </ul>
              <p>
                If you want a local reading of a Sunny Isles Beach
                declarations page against this morning’s outlook — hurricane
                versus named-storm versus flood — start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>
                , a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                , or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. The National Hurricane
                Center’s 2 a.m. and 8 a.m. EDT October 19 Tropical Weather
                Outlooks, the North Atlantic summary as of 09 UTC October
                19, National Weather Service Miami’s 1:40 a.m. EDT coastal
                hazard and marine messages, Florida Statute 627.4025, the
                Florida Department of Financial Services’ hurricane
                deductible explainer, Miami-Dade ERM’s king-tide windows,
                SFWMD’s east-coast annual peak of October 27, NOAA Station
                8723080 predictions, and Citizens’ October 10 bind lift
                are public sources; an appointed agent still has to place
                the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of any premium or
                  claim payment, or a recommendation of any carrier or
                  product. The National Hurricane Center Tropical Weather
                  Outlook at 8 a.m. EDT October 19, 2026 (Forecaster
                  Pasch: storm-force non-tropical low off the southeast
                  U.S. coast; 48-hour formation chance near 0%; 7-day
                  chance 40%; possible brief subtropical characteristics
                  mid-to-late week; northeast motion away from the eastern
                  United States later in the week), the 2 a.m. EDT October
                  19 outlook describing the same disturbance, the North
                  Atlantic summary as of 09 UTC October 19 (9 named storms
                  / 1 hurricane / 1 major hurricane / ACE 18.0, 83% below
                  the 1991–2020 normal; Isaias October 6–10 peak 105 kt /
                  959 mb), National Weather Service Miami coastal hazard
                  messages at 1:40 a.m. EDT October 19 (High Rip Current
                  Risk for Coastal Miami-Dade through Thursday evening;
                  High Surf Advisory for Coastal Broward 2 p.m. Monday–8
                  p.m. Tuesday with 6–8 ft surf; High Surf Advisory for
                  Coastal Palm Beach through 8 a.m. Wednesday with 7–12 ft
                  surf) and the Deerfield Beach–Ocean Reef small-craft
                  advisory (northeast 20–30 kt, seas 8–13 ft through 8
                  p.m. Wednesday), Florida Statute 627.4025, Florida
                  Statute 627.701, the Florida Department of Financial
                  Services’ hurricane-deductible consumer page, Miami-Dade
                  ERM king-tide windows of October 24–30, November 6–9,
                  and November 23–26, SFWMD’s east-coast window of October
                  22–November 12 with annual peak October 27, NOAA Station
                  8723080 Haulover Pier predictions, Citizens’ October 10,
                  2026 binding-suspension lift and statewide watch/warning
                  bind rule, and Public Law 119-103’s NFIP authorization
                  through December 11, 2026 are described as those
                  agencies stated them as of this writing. Eligibility,
                  deductibles, waiting periods, and required limits depend
                  on the actual policy and underwriting. Review your
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
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "The wind vs surge vs flood how-to this deductible-trigger page does not rewrite.",
                },
                {
                  label: "Ordinance or Law Coverage in Sunny Isles Beach (2026)",
                  href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
                  desc: "25% vs 50% rebuild coverage is a hurricane-loss conversation, not this week’s swell.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "Rip currents are not a tropical-storm watch. Citizens can still bind this morning.",
                },
                {
                  label: "Hurricane Isaias Binding Freeze in Sunny Isles Beach",
                  href: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
                  desc: "The October 7 freeze that actually required Florida watches — a Panhandle hurricane, not a 40% outlook.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A soaked car this week is still comprehensive, whether or not Josephine is ever named.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "A 30-day wait from today misses October 27. Shop the flood layer on its own worksheet.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "A hotel after flood is not on the NFIP dwelling form. Wind ALE is a different peril.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is still excluded from HO-3 and HO-6, named storm or not.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability coverage for South Florida homes.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 deductibles still sit on the unit form, not the association master policy.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for the swell and the October 27 king-tide peak.",
                },
                {
                  label: "Auto Insurance in Sunny Isles Beach",
                  href: "/auto-insurance",
                  desc: "Comprehensive for salt water. PIP does not repair the car.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "The Dec. 1 wind-for-flood condition is a December HO-3 story, not this week’s deductible test.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 20 assumption is tomorrow. The Oct. 5 choice deadline has passed.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Homeowners Quote",
                  href: "/quote?type=home",
                  desc: "Compare hurricane, named-storm, and all-other-perils deductibles on a 33160 declarations page.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the flood layer this week’s swell and next week’s king tide still require.",
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
            Josephine Deductible Questions for 2026
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
            Read the Deductible — Not Just the Next Name
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners, condo, or flood quote and we will help
            compare a Sunny Isles Beach declarations page against this
            week’s swell, next week’s king tide, and Florida’s hurricane
            deductible test.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=home"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Homeowners Quote
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
