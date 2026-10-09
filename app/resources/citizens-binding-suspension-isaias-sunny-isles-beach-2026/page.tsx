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
    "Citizens Binding Freeze in Sunny Isles Beach 2026 | Hurricane Isaias",
  description:
    "Isaias is 2026’s first hurricane. Citizens paused new and increased coverage statewide Oct. 7. Why a Panhandle warning still freezes ZIP 33160.",
  path: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does a Panhandle hurricane warning freeze a new Citizens policy in Sunny Isles Beach?",
    answer:
      "Yes, while the suspension is in effect. Citizens’ binding-suspension rule is statewide: agents may not bind applications for new coverage or policy changes for increased coverage, regardless of effective date, when the National Weather Service has issued a tropical-storm or hurricane watch or warning for any part of Florida. Miami-Dade does not have to be in the cone. A Hurricane Warning from Ocean Springs, Mississippi, to the Bay/Gulf County line is enough to freeze a 33160 bind.",
  },
  {
    question:
      "Is my existing Citizens HO-3 or HO-6 cancelled during the Isaias binding suspension?",
    answer:
      "No. A binding suspension is a pause on new and increased coverage. It is not a cancellation, a non-renewal, a takeout letter, or a December 1, 2026 form change. An in-force policy stays in force on the terms already issued. Claims on covered losses still go through the usual process. Do not read a statewide freeze as Citizens dropping ZIP 33160.",
  },
  {
    question:
      "Can I raise Coverage A or add 50% ordinance or law on a Citizens policy this week?",
    answer:
      "Not while the suspension is on. Increasing Coverage A, adding an endorsement that increases coverage, or binding a brand-new homeowners, condo, or renters policy is exactly what the rule stops — even if you ask for an effective date after landfall. Shop the quote. Do not expect it to bind until Citizens lifts the freeze. Florida’s 25% / 50% ordinance-or-law offers are still a separate statute; they are not a workaround for a storm moratorium.",
  },
  {
    question:
      "Does the Citizens freeze cover king-tide flooding on Collins Avenue this weekend?",
    answer:
      "No. The freeze is about binding wind and other Citizens personal-lines coverage. Saturday’s king-tide peak on a barrier-island street is still a flood file, usually on a separate NFIP or private flood policy — and a parked car is still a comprehensive auto question. Isaias’s storm-surge warning runs from the mouth of the Mississippi to the Suwannee River, not Haulover Inlet. Do not wait for a Panhandle landfall to decide whether last night’s street water was wind.",
  },
  {
    question:
      "When does the Citizens binding suspension lift, and do private companies freeze too?",
    answer:
      "Citizens said agents will get a follow-up when the suspension is lifted. Historically that follows the end of tropical-storm and hurricane watches and warnings for Florida, not the moment the eye is inland. Private admitted carriers can impose their own temporary pause on new residential writing. Florida Statute 624.4301 lets them skip the usual advance notice to the Office of Insurance Regulation when the pause is a hurricane that may make landfall in Florida and it ends within 72 hours after hurricane conditions are no longer present. Some private freezes are Panhandle-only. Citizens’ rule is not.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Citizens Binding Suspension During Hurricane Isaias",
    href: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-09";

export default function CitizensBindingSuspensionIsaiasArticle() {
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
                "Hurricane Isaias Binding Freeze in 2026: Why Sunny Isles Beach Still Can’t Add Wind Coverage",
              description:
                "A Sunny Isles Beach guide to Citizens’ statewide binding suspension during Hurricane Isaias — the first Atlantic hurricane of 2026 — and why a Panhandle warning still freezes new and increased coverage in ZIP 33160 while king-tide flooding remains a separate flood claim.",
              path: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
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
            Hurricane Isaias Binding Freeze in 2026: Why Sunny Isles Beach
            Still Can’t Add Wind Coverage
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The first Atlantic hurricane of 2026 is aimed at the northern
            Gulf, not Collins Avenue. Citizens still paused new and increased
            coverage in all 67 counties on October 7 — including ZIP 33160.
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
                Friday morning, October 9, the National Hurricane Center’s
                4 a.m. CDT Advisory 11 listed Hurricane Isaias near 26.4°N,
                88.0°W — about 200 miles south-southeast of the mouth of the
                Mississippi River and about 370 miles north-northeast of
                Progreso, Mexico. Forecaster Blake had Air Force and NOAA
                Hurricane Hunter data at 110 mph, gusts higher, central
                pressure 963 mb. Motion: north-northeast at 15 mph. The
                center is expected to approach the U.S. northern Gulf Coast
                this afternoon and make landfall inside the warning area
                tonight or early Saturday. Isaias is likely to become a
                major hurricane this morning. Slight weakening is expected
                before landfall. It is still forecast as a dangerous
                hurricane. Hurricane-force winds extend outward up to 30
                miles; tropical-storm-force winds, up to 185 miles. There
                is no Miami-Dade watch or warning in that advisory.
              </p>
              <p>
                Two days earlier, the same storm was a 40-mph tropical
                storm in the southwestern Gulf. On October 7 at 11:05 a.m.
                ET — while it was still Tropical Storm Isaias — Citizens
                Property Insurance Corporation suspended policy binding
                statewide. The rule is not a cone test. Agents may not bind
                applications for new coverage or policy changes for
                increased coverage, regardless of effective date, when the
                National Weather Service has issued a tropical-storm or
                hurricane watch or warning for any part of Florida. A
                Hurricane Warning from Ocean Springs, Mississippi, to the
                Bay/Gulf County line is “any part of Florida.” Sunny Isles
                Beach is the rest of the state.
              </p>
              <p>
                Late Wednesday night into Thursday, NHC upgraded Isaias to
                a hurricane — the first of 2026, and the latest first
                Atlantic hurricane in the satellite era. Advisory 7 at
                4 a.m. CDT October 8 already carried 80 mph near 23.3°N,
                91.2°W. Melissa, October 13, 2025, had been the last
                Atlantic hurricane for 360 days. The AccuWeather marker
                everyone in this series has been counting — October 8,
                1905 — arrived on the same calendar day the drought broke.
                That is weather history. It is not a Collins Avenue
                landfall, and it is not permission to treat a 33160
                declarations page as unfinished business you can finish
                this afternoon.
              </p>
              <p>
                This is not a rewrite of{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  how wind, storm surge, and flood split on a Sunny Isles
                  Beach claim
                </Link>
                . That guide is which peril pays after a loss. This one is
                whether you can even bind or increase the wind policy while
                a named hurricane is under a Florida warning 500 miles
                northwest of Haulover Inlet. It is also not{" "}
                <Link
                  href="/resources/ordinance-or-law-coverage-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  the 25% vs 50% ordinance-or-law offers
                </Link>
                {" "}
                we walked on October 7, when Isaias was still Advisory 3.
                Those percentages are what a house already on the books
                may pay to rebuild to code. They do not open a new bind
                during a freeze.
              </p>
              <p>
                King tides are the local water this week. Miami-Dade’s
                window is October 7–13, with the highest predicted tide
                around October 10. The South Florida Water Management
                District’s east-coast window of September 24 through
                October 15 is still open; the east-coast annual peak
                remains October 27. Overnight, NWS Miami had a coastal
                flood statement for coastal Miami-Dade through Saturday
                morning: isolated minor flooding on low-lying roads and
                property. That water is a{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                conversation. Isaias’s storm-surge warning runs from the
                mouth of the Mississippi River to the Suwannee River. Do
                not file them as the same storm.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Citizens Actually Suspended
              </h2>
              <p>
                Citizens’ October 7 bulletin is short. The operative
                sentence is the Binding Suspension Rule: when a tropical
                storm or hurricane watch or warning is up for any part of
                Florida, agents may not bind new coverage or increases,
                regardless of the effective date you write on the
                application. The bulletin promised a follow-up email when
                the suspension is lifted. As of this morning’s 110-mph
                advisory, that follow-up has not rewritten the October 7
                notice. The headline on Citizens’ page still says
                Tropical Storm Isaias. The storm does not.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "New applications do not bind",
                    desc: "A brand-new Citizens HO-3 on a house west of Collins, an HO-6 on a Collins Avenue tower, or an HO-4 for a renter is an application for new coverage. You can still talk through a quote. The agency cannot bind it onto the books while the freeze is on — including a request that the policy “start next week after landfall.” The rule says regardless of effective date.",
                  },
                  {
                    title: "Increases do not bind either",
                    desc: "Raising Coverage A, adding an endorsement that increases the amount of insurance, or otherwise expanding what the policy will pay is a policy change for increased coverage. That includes trying to move a 25% ordinance-or-law line to 50% if the change increases coverage. A freeze is not the week to true-up a 2019 dwelling limit against a 2026 HVHZ rebuild.",
                  },
                  {
                    title: "In-force policies are not cancelled",
                    desc: "If Citizens already issued the policy, it stays in force on those terms. This is not a non-renewal wave, not the October 20 takeout, and not the December 1, 2026 personal-lines forms. A binding suspension is a front-door lock. It is not an eviction of people already inside.",
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
                WINK News, reporting October 8, put the same rule in
                plain language: the restriction applies to all 67 Florida
                counties, including counties that are not in the storm’s
                direct path. That is the 33160 sentence. Aventura, North
                Miami Beach, Bal Harbour, and Miami Beach sit in the same
                freeze even though Advisory 11’s Hurricane Warning stops
                at the Bay/Gulf County line — the Florida Panhandle, not
                Miami-Dade’s High-Velocity Hurricane Zone.
              </p>
              <p>
                Renewals at the same coverage are a different file from
                new business. Citizens’ published rule names new coverage
                and increased coverage. Do not assume a routine renewal
                without a limit increase is frozen — and do not assume
                every private company uses Citizens’ sentence. Ask before
                you treat a renewal packet as a bind.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why a Northern-Gulf Landfall Still Hits a 33160 Bind
              </h2>
              <p>
                Advisory 11’s warning map is a Panhandle-and-Big-Bend
                map:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Hurricane Warning:
                  </strong>{" "}
                  Ocean Springs, Mississippi, to the Bay/Gulf County
                  line, Florida.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Tropical Storm Warning:
                  </strong>{" "}
                  east of the Bay/Gulf County line to the Aucilla River,
                  plus the Louisiana stretch west of Ocean Springs.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Storm Surge Warning:
                  </strong>{" "}
                  mouth of the Mississippi River to the Suwannee River.
                  A Storm Surge Watch continues Suwannee to Yankeetown.
                </li>
                <li>
                  <strong className="text-navy-800">Rainfall:</strong>{" "}
                  4 to 8 inches across southern Alabama, the Florida
                  Panhandle and Big Bend, and southwest Georgia, locally
                  15 inches in banding. That sentence does not include
                  Sunny Isles Beach.
                </li>
                <li>
                  <strong className="text-navy-800">Tornadoes:</strong>{" "}
                  late today and tonight in coastal Alabama, the Florida
                  Panhandle, and far southwest Georgia — then Saturday
                  across parts of eastern Alabama, the Panhandle,
                  Georgia, and the Carolinas. Not ZIP 33160.
                </li>
              </ul>
              <p>
                Citizens does not wait for Miami-Dade to enter that list.
                One Florida coastline under a tropical-storm or hurricane
                watch or warning turns the residual market off for new
                and increased binds everywhere it writes. That is
                conservative underwriting, not a forecast that Isaias
                will recurve to Collins Avenue. Do not use the freeze as
                a reason to skip a flood claim on a king-tide garage, and
                do not use the lack of a local cone as a reason you can
                still raise wind limits today.
              </p>
              <p>
                Private admitted companies are allowed to pause new
                residential writing too. Florida Statute 624.4301
                normally makes an authorized insurer notify the Office of
                Insurance Regulation before a temporary suspension of
                writing new residential property policies — on an
                office-approved form, the earlier of 20 business days
                before the effective date or 5 business days before
                telling agents. That notice clock does not apply to a
                temporary pause made in response to a hurricane that may
                make landfall in Florida, if the pause ceases within 72
                hours after hurricane conditions are no longer present in
                the state. The statute also does not require OIR approval
                before the pause. Some private moratoriums this week have
                been Panhandle-county lists. Citizens’ rule is statewide
                or it is not Citizens’ rule.
              </p>
              <p>
                If you already have a private{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                or{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                quote in motion, ask whether that company is on a
                moratorium, and whether it is Florida-wide or
                warning-area only. A quote request to this agency does
                not bind coverage at Citizens or anywhere else. Coverage
                exists when an insurer issues it.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                King Tide Water Is Still Not Isaias Wind
              </h2>
              <p>
                The insurance mistake this Friday is collapsing three
                calendars. Isaias is a northern-Gulf hurricane under
                Advisory 11. Citizens is in a statewide bind freeze
                because Florida’s Panhandle is under warnings. Collins
                Avenue can still take isolated minor coastal flooding
                through Saturday morning because October 10 is the local
                king-tide peak.
              </p>
              <p>
                Rising water from the tide — even salt water in a
                west-of-Collins driveway or a ground-floor garage — is
                generally a flood loss. Standard HO-3 and HO-6 forms
                still do not treat that as wind. The shopping comparison
                for a house or unit is still{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP versus private flood
                </Link>
                , including the Regular Program’s $250,000 dwelling and
                $100,000 contents caps and the usual waiting period. A
                Saturday high tide is not a reason to start a new flood
                application and expect it in force for Saturday’s high
                tide. Keep the flood policy you already have. If Citizens
                is the wind carrier on a house that had to buy flood
                under the{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  $400,000 Coverage A rule
                </Link>
                , keep that flood in force for a different reason: the
                December 1, 2026 forms can treat a required flood lapse
                as a wind-claim problem. That is{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  the 12-26 flood-proof guide
                </Link>
                , not this freeze.
              </p>
              <p>
                A car on a flooded street or in a flooded garage is still
                comprehensive, not PIP and not NFIP. That how-to is{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  auto insurance and king-tide flooding
                </Link>
                . If wind — somewhere, later — keeps you out of a 33160
                house,{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  additional living expenses
                </Link>{" "}
                is Coverage D on the homeowners form. NFIP still does not
                buy the hotel. A binding freeze does not buy the hotel
                either.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                HO-6 Towers, Takeouts, and What This Freeze Is Not
              </h2>
              <p>
                Collins Avenue condominiums still split the building
                (association master) from the unit (
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                ). Citizens’ freeze applies to new and increased
                personal-lines binds, including a new HO-6. It does not
                rewrite the master policy. It does not pay a special
                assessment. Loss-assessment limits are still the{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  $2,000 statutory floor conversation
                </Link>
                , not a storm-moratorium conversation. Renters on an HO-4
                sit in the same new-business freeze; contents flood is
                still a separate policy.
              </p>
              <p>
                The October 20 Citizens personal-lines assumption is
                still on the calendar. The October 5 choice deadline has
                already passed. An assumption moves an existing policy.
                It is not a new bind you can use to dodge the freeze, and
                the freeze is not a reason the assumption disappears.
                Compare the assuming form — including ordinance or law
                and hurricane deductible — in{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  the takeout guide
                </Link>
                . Do not open that letter and this bulletin as if they
                were the same mail.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Not a Sunny Isles Beach landfall article.
                  </strong>{" "}
                  Advisory 11’s forecast track is the northern Gulf.
                  Rainfall, surge, and tornado language is Panhandle,
                  Big Bend, Alabama, Georgia. If a later advisory puts
                  Miami-Dade in a watch, that is a different morning.
                  This page is the bind rule that already applies
                  without that watch.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not the December 1, 2026 form package.
                  </strong>{" "}
                  Wind-for-flood, the 14-day flood-document
                  authorization, and the three-stay short-term rental
                  definition take effect for new and renewal business
                  December 1. A binding suspension in October does not
                  move that date up, and those forms do not explain why
                  you cannot bind today.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not a My Safe Florida Home application window
                    closing.
                  </strong>{" "}
                  Grants reimburse eligible homestead hardening before
                  a loss. A freeze on new Citizens binds does not cancel
                  a grant file, and a grant does not substitute for a
                  policy you could not bind this week.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not an NFIP reauthorization story.
                  </strong>{" "}
                  H.R. 6500 still runs the National Flood Insurance
                  Program through December 11, 2026. That cliff is a
                  later article if Congress has not acted. It is not
                  why Citizens paused 33160 wind binds on October 7.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Do in 33160 While the Freeze Is On
              </h2>
              <p>
                A 110-mph hurricane 200 miles from the Mississippi is
                not a reason to open a wind claim on Collins Avenue. It
                is a reason to stop treating “I’ll add coverage when the
                cone looks closer” as a plan, and to keep the flood and
                auto files honest for a king-tide Saturday.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  If you already have a Citizens or private wind policy,
                  pull the declarations page. Confirm Coverage A, the
                  hurricane deductible, ordinance or law, and that
                  required flood is actually in force. You cannot
                  increase those Citizens limits today. You can still
                  read them.
                </li>
                <li>
                  Do not cancel a required flood policy to “save a week
                  of premium” during a king-tide window. The 12-26
                  Citizens forms are not in force on every policy yet.
                  The flood loss on Saturday morning does not care.
                </li>
                <li>
                  Move cars off low street parking before the October 10
                  peaks if your block takes water. Comprehensive is the
                  auto line; NFIP will not pay the vehicle.
                </li>
                <li>
                  If you were about to buy a new HO-3, HO-6, or HO-4
                  with Citizens, keep the application ready and wait for
                  the lift notice. Ask any private company whether it is
                  on its own moratorium, and whether that moratorium is
                  statewide or warning-area only.
                </li>
                <li>
                  If you are in the October 20 takeout, this freeze is
                  not your choice deadline. That date was October 5.
                  Read the assuming company’s form, not this bulletin.
                </li>
                <li>
                  If last night’s tide left water in a unit or a house,
                  treat it as a flood question first. Do not wait to see
                  whether Isaias’s residual swell “counts as wind.”
                </li>
              </ul>
              <p>
                If you want a local reading of a 33160 homeowners, condo,
                flood, or renters file — including whether a quote can
                actually bind after Citizens lifts — start a{" "}
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
                , a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                , or{" "}
                <Link
                  href="/contact"
                  className="text-ocean-500 hover:underline"
                >
                  contact the agency
                </Link>
                . A quote request does not bind coverage. Coverage
                exists only when an insurer issues it. Citizens’ bulletin
                and your form control; this page is a local reading of
                public sources as of October 9, 2026.
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
                  Hurricane Center’s Hurricane Isaias Advisory 11 (4 a.m.
                  CDT October 9, 2026), Advisory 7 (4 a.m. CDT October 8,
                  2026), Citizens’ October 7, 2026 binding-suspension
                  bulletin, Florida Statute 624.4301, Miami-Dade and
                  South Florida Water Management District 2026 king-tide
                  windows, and NWS Miami’s coastal flood statement are
                  described as published on the date above. Binding
                  rules, private-company moratoriums, deductibles, and
                  flood versus wind determinations vary by insurer,
                  policy, and location. A statewide freeze is not a
                  Miami-Dade hurricane warning. Review your declarations
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
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability — the HO-3 you cannot newly bind or increase at Citizens until the freeze lifts.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims. A Panhandle landfall does not rewrite a 33160 peril split.",
                },
                {
                  label: "Ordinance or Law Coverage in Sunny Isles Beach (2026)",
                  href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
                  desc: "25% vs 50% is the rebuild line on a policy already in force. It is not a freeze workaround.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "Wind-for-flood and the 14-day authorization start December 1. This week’s freeze is a different bulletin.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "Keep required flood in force on $400k+ houses. A bind freeze is not permission to lapse it.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 20 assumption of an existing policy — not a new bind, and not cancelled by Isaias.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "King tides this weekend are still a separate flood policy, not Advisory 11’s surge warning.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Caps and waiting periods. Saturday’s tide will not wait for a new flood application.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "The parked car on Collins is comprehensive. Citizens’ freeze does not pay the vehicle.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "Coverage D pays the hotel after a covered wind loss. A moratorium does not.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "New HO-6 binds freeze with the rest of Citizens personal lines. The master policy is a different contract.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach",
                  href: "/renters-insurance",
                  desc: "A new HO-4 is still new coverage. Contents flood remains a separate policy.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=home",
                  desc: "Start a no-obligation quote. Binding still depends on the insurer — and on whether a freeze is on.",
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
            Binding Freeze Questions
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
            Read the Policy You Already Have — Then Quote What You Still Need
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a quote and we will help sort a Citizens freeze from a
            king-tide flood file, and from a Panhandle hurricane that is
            not in Miami-Dade’s warning.
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
