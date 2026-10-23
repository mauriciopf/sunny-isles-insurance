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
    "Citizens Freeze Lifted After Isaias | Sunny Isles Beach 2026",
  description:
    "Citizens lifted its Isaias freeze Oct. 10 at 5 a.m. ET. How ZIP 33160 owners should bind again — and why king-tide flood still isn’t a Panhandle wind claim.",
  path: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Can a Sunny Isles Beach owner bind a new Citizens policy again after Hurricane Isaias?",
    answer:
      "Yes, as of 5 a.m. ET on Saturday, October 10, 2026. Citizens posted that the Isaias binding suspension was lifted and that all regular business operations have resumed. Agents can again bind new coverage and policy changes that increase coverage in Miami-Dade, including ZIP 33160. A new policy still only covers losses that happen after its effective date. It does not backdate to Friday’s Panhandle landfall or to Saturday’s king-tide high water on Collins Avenue.",
  },
  {
    question:
      "Did Miami-Dade have to be in a hurricane warning for the freeze — and for the lift?",
    answer:
      "No. Citizens’ rule is statewide: a tropical-storm or hurricane watch or warning for any part of Florida pauses new and increased binds in all 67 counties. The freeze started October 7 because the Panhandle was under warnings, not because Haulover Inlet was in the cone. The lift is also statewide. Governor DeSantis’s Executive Order 26-212 expanded the Isaias emergency to 30 counties from Escambia through Tampa Bay. Miami-Dade, Broward, and Monroe are not on that list. Binding in 33160 and claiming a Panhandle wind loss are still two different files.",
  },
  {
    question:
      "If I could not raise Coverage A during the freeze, can I increase it now and have it apply to Isaias?",
    answer:
      "You can shop and, if Citizens issues it, bind an increase now. You cannot make that increase apply to a loss that already happened. Coverage follows the effective date on the declarations page, not the date you first asked during the pause. Ordinance-or-law 25% vs 50% is still a rebuild line on a policy already in force — not a way to reopen Friday night’s storm. Read that statute in the separate ordinance-or-law guide.",
  },
  {
    question:
      "Does the lift mean king-tide flooding on Collins Avenue is now a wind claim?",
    answer:
      "No. Citizens resumed binding wind and other personal-lines coverage. Street and garage water from the October 7–13 king-tide window is still generally a flood file on a separate NFIP or private flood policy. A parked car is still comprehensive auto, not PIP and not NFIP. NWS Miami’s overnight coastal-flood statement through Monday evening names Coastal Collier, Mainland Monroe, and Far South Miami-Dade — not a Sunny Isles Beach hurricane warning, and not Isaias surge.",
  },
  {
    question:
      "Are private insurers also writing again, and is the October 20 takeout affected?",
    answer:
      "Citizens’ lift is Citizens only. Private admitted carriers can keep their own storm pauses. Florida Statute 624.4301 lets them skip the usual OIR advance notice when the pause is a hurricane that may make landfall in Florida and it ends within 72 hours after hurricane conditions are gone. Ask before you assume a private quote can bind today. The October 20 personal-lines assumption is still on the calendar; the October 5 choice deadline has already passed. A takeout moves an in-force policy. It is not a new bind, and the freeze lift does not reopen that choice window.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Citizens Binding Freeze Lifted After Hurricane Isaias",
    href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-12";

export default function CitizensBindingSuspensionLiftedIsaiasArticle() {
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
                "Citizens Binding Freeze Lifted After Isaias: When Sunny Isles Beach Can Bind Wind Coverage Again in 2026",
              description:
                "A Sunny Isles Beach guide to Citizens lifting its statewide Isaias binding suspension at 5 a.m. ET on October 10, 2026 — what ZIP 33160 owners can bind again, why a Destin landfall still is not a Collins Avenue wind claim, and why king-tide flooding remains a separate flood file.",
              path: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
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
            Citizens Binding Freeze Lifted After Isaias: When Sunny Isles
            Beach Can Bind Wind Coverage Again in 2026
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            The residual market reopened at 5 a.m. ET Saturday. Isaias is a
            Destin landfall, not a Haulover Inlet one. ZIP 33160 can bind
            again — it cannot backdate Friday night.
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
                Monday morning, October 12, the National Hurricane Center’s
                2 a.m. EDT Tropical Weather Outlook listed no tropical
                cyclones in the Atlantic. Forecaster Blake had an elongated
                low a few hundred miles west of the Cabo Verde Islands at
                20 percent through 48 hours and 20 percent through seven
                days — marginally conducive, then too much shear. Next
                name, if that feature ever earns one: Josephine. Isaias
                is already inland history.
              </p>
              <p>
                Friday night it was not. The National Hurricane Center’s
                8:30 p.m. CDT October 9 tropical cyclone update put
                Hurricane Isaias ashore near Destin, Florida — Okaloosa
                County — as a Category 2 hurricane. Maximum sustained
                winds 105 mph. Estimated central pressure 971 mb. Position
                30.4°N, 86.5°W, about 40 miles east of Pensacola and about
                50 miles west-northwest of Panama City. A WeatherFlow
                station near Santa Rosa Sound reported a 116 mph gust. The
                10 p.m. CDT discussion (Advisory 14) called it a 90-kt
                landfall and already had the radar structure degrading
                under shear. It did not become the major hurricane Friday
                morning’s Advisory 11 had flagged as likely. That is the
                Panhandle’s storm. It is not a rewrite of how{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  wind, storm surge, and flood split on a Sunny Isles
                  Beach claim
                </Link>
                .
              </p>
              <p>
                Citizens Property Insurance Corporation had frozen new
                and increased personal-lines binds statewide at 11:05 a.m.
                ET on October 7, while Isaias was still a tropical storm.
                That pause — and why a Panhandle warning locked ZIP 33160
                — is{" "}
                <Link
                  href="/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Friday’s freeze guide
                </Link>
                . This page is the follow-up that guide said to wait for:
                Citizens posted on October 10 that the Isaias binding
                suspension was lifted as of 5 a.m. ET that Saturday, and
                that all regular Citizens business operations have
                resumed. From Wednesday late morning to Saturday before
                dawn is a little under 66 hours. It was the second
                statewide freeze of 2026; Citizens’ alerts page shows an
                earlier pause July 19–22.
              </p>
              <p>
                King tides are still the local water. Miami-Dade’s October
                7–13 window is open through tomorrow. Today’s predicted
                highs around Miami Beach sit near 10:48 a.m. and 10:54 p.m.
                The South Florida Water Management District’s east-coast
                window of September 24 through October 15 still has three
                days. The east-coast annual peak remains October 27,
                inside the October 24–30 set. NWS Miami’s 11:02 p.m. EDT
                October 11 coastal-flood statement, extended through
                Monday evening, names isolated minor flooding in Coastal
                Collier County, Mainland Monroe, and Far South Miami-Dade
                — not Coastal Miami-Dade, and not a hurricane warning for
                Sunny Isles Beach. Do not file Saturday’s street water as
                Destin’s wind.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Lift Actually Reopened
              </h2>
              <p>
                Citizens’ October 10 bulletin is as short as the October 7
                freeze. The operative sentence is that the policy-binding
                suspension as a result of Hurricane Isaias has been
                lifted, and regular operations have resumed. Read that as
                a front-door unlock, not as a claim check.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "New applications can bind again",
                    desc: "A brand-new Citizens HO-3 west of Collins, an HO-6 in a 33160 tower, or an HO-4 for a renter is once again an application an agent can bind — if the risk still qualifies. Shop the quote. Do not treat the Saturday lift as automatic issuance. Coverage exists when Citizens issues it, with an effective date on or after that issuance.",
                  },
                  {
                    title: "Increases can bind again",
                    desc: "Raising Coverage A, adding an endorsement that increases the amount of insurance, or moving a 25% ordinance-or-law line to 50% if that change increases coverage is no longer blocked by the Isaias freeze. The increase still does not apply to a loss that already happened. Friday’s Panhandle landfall is not a 33160 reason to true-up a 2019 dwelling limit and then argue it should have been in force Thursday.",
                  },
                  {
                    title: "In-force policies never left",
                    desc: "The freeze was never a cancellation, a non-renewal, a takeout, or a December 1, 2026 form change. If Citizens had already issued the policy, it stayed in force on those terms through the pause and after the lift. Claims on covered losses still go through the usual process. The unlock does not enlarge what last week’s declarations page already said.",
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
                A quote request to this agency still does not bind
                coverage at Citizens or anywhere else. If a private{" "}
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
                company had its own storm pause, ask whether that
                moratorium is also down. Florida Statute 624.4301 normally
                makes an authorized insurer notify the Office of Insurance
                Regulation before a temporary suspension of writing new
                residential property policies. That notice clock does not
                apply to a hurricane-landfall pause that ceases within 72
                hours after hurricane conditions are no longer present in
                the state. Some private lists last week were
                warning-area-only. Citizens’ rule was statewide. Only
                Citizens can tell you Citizens is open. Only the private
                company can tell you it is.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Destin Landfall Is Still Not a 33160 Wind File
              </h2>
              <p>
                By Sunday, Isaias was a post-tropical cyclone. The Weather
                Prediction Center’s 11 a.m. EDT October 11 Advisory 20 put
                the remnant near 37.5°N, 84.0°W — about 180 miles
                northeast of Nashville — at 25 mph, moving east-northeast
                at 22 mph, dissipating over West Virginia that evening.
                Flash-flood language was Appalachians and Mid-Atlantic,
                not Biscayne Bay. At least four deaths have been linked to
                the storm. Panhandle recovery is the live insurance story
                in Florida this morning, not a Miami-Dade cone.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Executive Order 26-212
                  </strong>{" "}
                  (October 10) added Hillsborough, Pasco, and Pinellas
                  and brought the Isaias emergency to 30 counties from
                  Escambia through Tampa Bay. Miami-Dade, Broward, and
                  Monroe are not on that list. Binding in Sunny Isles
                  Beach does not put this city inside the disaster
                  declaration.
                </li>
                <li>
                  <strong className="text-navy-800">
                    OIR’s Isaias data call
                  </strong>{" "}
                  starts today, Monday, October 12. The Department of
                  Financial Services said the Office of Insurance
                  Regulation will collect property-claims handling data,
                  post results on a rolling basis, and monitor how
                  insurers handle claims in the coming weeks. That is a
                  Panhandle-and-warning-area claims clock. It is not a
                  33160 loss-count.
                </li>
                <li>
                  <strong className="text-navy-800">
                    DFS insurance villages
                  </strong>{" "}
                  are being stood up in the western Panhandle. Destin is
                  listed 9 a.m. to 4 p.m. Monday through Thursday;
                  Pensacola is also opening this week. Those hubs are for
                  people who had wind, surge, and debris in Okaloosa,
                  Escambia, Santa Rosa, Walton. They are not a Collins
                  Avenue claims desk.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Post-storm contractors
                  </strong>{" "}
                  follow every Florida landfall, including ones 500 miles
                  northwest of Haulover Inlet. DFS pointed residents to
                  the fraud hotline 1-800-378-0445 and FraudFreeFlorida.com,
                  and to the consumer helpline 1-877-693-5236 (1-877-MY-FL-CFO)
                  if a claim stalls. Do not sign a roof or garage “storm
                  repair” in 33160 because Destin had a Category 2.
                </li>
              </ul>
              <p>
                If wind later keeps you out of a house you already insured,{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  additional living expenses
                </Link>{" "}
                is Coverage D on the homeowners form. NFIP still does not
                buy the hotel. A binding lift does not buy the hotel
                either.{" "}
                <Link
                  href="/resources/ordinance-or-law-coverage-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Ordinance or law 25% vs 50%
                </Link>{" "}
                is still the HVHZ rebuild line on a policy already in
                force — not a freeze workaround, and not a Destin
                endorsement you can add to a 33160 house after landfall.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                King Tide Water Did Not Become Wind When Citizens Reopened
              </h2>
              <p>
                The insurance mistake this Monday is collapsing four
                calendars. Isaias made landfall near Destin Friday night.
                Citizens lifted the statewide freeze Saturday at 5 a.m. ET.
                The Atlantic is quiet again this morning. Collins Avenue
                can still take tide water through tomorrow because the
                October 7–13 king-tide window is not finished, and October
                27 is still the east-coast annual peak.
              </p>
              <p>
                Rising water from the tide — even salt water in a
                west-of-Collins driveway or a ground-floor garage — is
                generally a flood loss. Standard HO-3 and HO-6 forms still
                do not treat that as wind. The shopping comparison is still{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP versus private flood
                </Link>
                , including the Regular Program’s $250,000 dwelling and
                $100,000 contents caps and the usual waiting period. A
                Monday high tide is not a reason to start a new{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                application and expect it in force for tonight’s 10:54 p.m.
                peak. Keep the flood policy you already have. If Citizens
                is the wind carrier on a house that had to buy flood under
                the{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  $400,000 Coverage A rule
                </Link>
                , keep that flood in force for a second reason: the
                December 1, 2026 forms can treat a required flood lapse as
                a wind-claim problem. That is{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  the 12-26 flood-proof guide
                </Link>
                , not this lift.
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
                . The freeze never paid the vehicle. The lift does not
                either.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                HO-6 Towers, Takeouts, and What This Lift Is Not
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
                ). Citizens’ lift applies to new and increased
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
                can bind again with the rest of personal lines; contents
                flood is still a separate policy.
              </p>
              <p>
                The October 20 Citizens personal-lines assumption is still
                on the calendar. The October 5 choice deadline has already
                passed — as the freeze guide noted, and as this lift does
                not reopen. An assumption moves an existing policy. It is
                not a new bind you waited out the freeze to use, and the
                lift is not a second chance to register a preference.
                Compare the assuming form — including ordinance or law
                and hurricane deductible — in{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  the takeout guide
                </Link>
                . Do not open that letter and Saturday’s bulletin as if
                they were the same mail.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Not a Sunny Isles Beach landfall article.
                  </strong>{" "}
                  Landfall was Destin at 8:30 p.m. CDT October 9. Rainfall,
                  surge, and tornado language stayed Panhandle, Big Bend,
                  Alabama, then inland. If a later system puts Miami-Dade
                  in a watch, that is a different morning and a different
                  freeze. This page is the bind rule after the watches
                  came down.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not the December 1, 2026 form package.
                  </strong>{" "}
                  Wind-for-flood, the 14-day flood-document authorization,
                  and the three-stay short-term rental definition still
                  take effect for new and renewal business December 1. A
                  Saturday lift in October does not move that date up, and
                  those forms do not explain why you can bind today.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not a My Safe Florida Home application window
                    opening or closing.
                  </strong>{" "}
                  Grants reimburse eligible homestead hardening before a
                  loss. Reopening Citizens binds does not create a grant,
                  and a grant does not substitute for the policy you can
                  now try to bind.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not an NFIP reauthorization story.
                  </strong>{" "}
                  H.R. 6500 still runs the National Flood Insurance
                  Program through December 11, 2026. That cliff is a later
                  article if Congress has not acted. It is not why
                  Citizens reopened 33160 wind binds on October 10.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Not retroactive coverage for the freeze window.
                  </strong>{" "}
                  If you had no Citizens policy at 11:05 a.m. ET October
                  7, Saturday’s lift does not invent one for the days in
                  between. If you wanted a higher limit on Thursday, the
                  increase you bind this week starts when it is issued.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Do in 33160 Now That the Freeze Is Off
              </h2>
              <p>
                A quiet Atlantic Monday after a Destin landfall is not a
                reason to open a wind claim on Collins Avenue. It is a
                reason to finish the bind you could not finish last week,
                and to keep the flood and auto files honest through
                tomorrow’s last tides in this window.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  If you already have a Citizens or private wind policy,
                  pull the declarations page. Confirm Coverage A, the
                  hurricane deductible, ordinance or law, and that
                  required flood is actually in force. You can increase
                  Citizens limits again if the risk qualifies. You still
                  cannot make that increase apply to last week.
                </li>
                <li>
                  If you were waiting on a new HO-3, HO-6, or HO-4 with
                  Citizens, the application can move. Ask any private
                  company whether its own moratorium is down, and whether
                  that moratorium was statewide or warning-area only.
                </li>
                <li>
                  Do not cancel a required flood policy because the
                  residual market reopened. King tides run through
                  October 13 here, then again October 24–30, with the
                  east-coast annual peak October 27. The 12-26 Citizens
                  forms are not in force on every policy yet. Tonight’s
                  tide does not care.
                </li>
                <li>
                  Move cars off low street parking before remaining
                  highs in this window if your block takes water.
                  Comprehensive is the auto line; NFIP will not pay the
                  vehicle.
                </li>
                <li>
                  If you are in the October 20 takeout, this lift is not
                  your choice deadline. That date was October 5. Read the
                  assuming company’s form, not Saturday’s bulletin.
                </li>
                <li>
                  If last night’s tide left water in a unit or a house,
                  treat it as a flood question first. Do not wait to see
                  whether Destin’s remnant “counts as wind” in ZIP 33160.
                  It does not.
                </li>
                <li>
                  Do not hire a storm-chaser contractor for a building
                  that did not take Isaias wind. If someone in the
                  Panhandle needs claims help, DFS villages and the
                  1-877-693-5236 helpline are the state channels. A 33160
                  garage puddle is still a flood adjuster, not a Destin
                  roofing crew.
                </li>
              </ul>
              <p>
                If you want a local reading of a 33160 homeowners, condo,
                flood, or renters file — including whether a quote can
                actually bind now that Citizens has lifted — start a{" "}
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
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. Citizens’ bulletin and
                your form control; this page is a local reading of public
                sources as of October 12, 2026.
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
                  Hurricane Center’s Tropical Weather Outlook (2 a.m. EDT
                  October 12, 2026), Hurricane Isaias tropical cyclone
                  update (8:30 p.m. CDT October 9, 2026) and Discussion 14
                  (10 p.m. CDT October 9, 2026), Post-Tropical Cyclone
                  Isaias Advisory 20 (11 a.m. EDT October 11, 2026),
                  Citizens’ October 10, 2026 binding-suspension-lifted
                  bulletin, Citizens’ October 7, 2026 freeze bulletin,
                  Florida Statute 624.4301, Executive Order 26-212,
                  Florida Department of Financial Services’ October 10,
                  2026 Isaias resources release, Miami-Dade and South
                  Florida Water Management District 2026 king-tide
                  windows, and NWS Miami’s coastal flood statement (11:02
                  p.m. EDT October 11, 2026) are described as published on
                  the date above. Binding rules, private-company
                  moratoriums, deductibles, and flood versus wind
                  determinations vary by insurer, policy, and location. A
                  statewide lift is not a Miami-Dade hurricane warning,
                  and it is not retroactive coverage. Review your
                  declarations page and speak with a licensed Florida
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
                  label: "Coastal Flood Advisory This Weekend in Sunny Isles Beach (2026)",
                  href: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
                  desc: "A Coastal Flood Advisory is still not a tropical-storm watch. The October 10 lift remains the last bind bulletin.",
                },
                {
                  label: "Hurricane Isaias Binding Freeze in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-binding-suspension-isaias-sunny-isles-beach-2026",
                  desc: "The October 7 statewide pause this lift closed. Read why a Panhandle warning froze 33160 in the first place.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability — the HO-3 you can newly bind or increase at Citizens again after Saturday’s lift.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims. A Destin landfall does not rewrite a 33160 peril split.",
                },
                {
                  label: "Ordinance or Law Coverage in Sunny Isles Beach (2026)",
                  href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
                  desc: "25% vs 50% is the rebuild line on a policy already in force. The lift is not a workaround for last week.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "Wind-for-flood and the 14-day authorization start December 1. Saturday’s lift is a different bulletin.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "Keep required flood in force on $400k+ houses. A bind lift is not permission to lapse it.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 20 assumption of an existing policy — not a new bind, and not reopened by the lift.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "King tides through October 13 are still a separate flood policy, not Destin’s surge.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Caps and waiting periods. Tonight’s tide will not wait for a new flood application.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "The parked car on Collins is comprehensive. Citizens’ lift does not pay the vehicle.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "Coverage D pays the hotel after a covered wind loss. A moratorium lift does not.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "New HO-6 binds reopen with the rest of Citizens personal lines. The master policy is a different contract.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach",
                  href: "/renters-insurance",
                  desc: "A new HO-4 can bind again. Contents flood remains a separate policy.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=home",
                  desc: "Start a no-obligation quote. Binding still depends on the insurer — now that this freeze is off.",
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
            Binding Lift Questions
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
            The Freeze Is Off. Read the Policy — Then Quote What You Still Need
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a quote and we will help sort a Citizens lift from a
            king-tide flood file, and from a Panhandle hurricane that was
            never in Miami-Dade’s warning.
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
