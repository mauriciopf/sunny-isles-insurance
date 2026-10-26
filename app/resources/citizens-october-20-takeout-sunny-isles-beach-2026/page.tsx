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
  title: "October 20 Citizens Takeout | Sunny Isles Beach 2026",
  description:
    "Citizens’ Oct. 20 assumption is done. Choice for that round closed Oct. 5. A Sunny Isles Beach guide to the mail this week and the Nov. 5 deadline still open.",
  path: "/resources/citizens-october-20-takeout-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Did my Citizens policy in Sunny Isles Beach move on October 20, 2026?",
    answer:
      "Only if a takeout company had already selected it and no timely choice kept it at Citizens — or if you were ineligible to remain and Citizens assigned it. Citizens’ personal-lines calendar set October 20 as the assumption date. On that date it mails a Notice of Assumption and Nonrenewal plus a Certificate of Assumption to policies that moved, and an Unsuccessful Assumption Notice to policies that did not. The envelope may still be in transit on October 21. The choice deadline for that round was October 5. Silence was not staying.",
  },
  {
    question:
      "Can I reverse a Citizens takeout after the October 20 assumption?",
    answer:
      "No. Citizens’ depopulation rules treat a completed assumption as final. There is no 30-day window to send the policy back. Returning later means applying again and meeting current eligibility, including the 20% private-market test in Senate Bill 2-A and section 627.351(6). Read the September 4 takeout guide for how that test works. This page is the calendar after the date, not a rewrite of that how-to.",
  },
  {
    question:
      "What is the next Citizens takeout deadline if I still have a policy?",
    answer:
      "November 5, 2026 is the policyholder-choice deadline for the November 17 assumption. Packets for that round were mailed around September 28. December 15 is the last 2026 personal-lines date, with a December 4 choice deadline and packets around October 28. Always use the due date on your own Offer Form. A general calendar is orientation, not a substitute for the packet.",
  },
  {
    question:
      "Does this week’s coastal flood statement freeze Citizens binds in Sunny Isles Beach?",
    answer:
      "No. Citizens pauses new and increased coverage statewide when a tropical-storm or hurricane watch or warning is issued for any part of Florida. National Weather Service Miami’s 9:52 p.m. EDT October 20 coastal hazard message keeps a High Rip Current Risk and a Coastal Flood Statement — isolated minor flooding around high tide — for Coastal Miami-Dade through Thursday evening. Those are not tropical watches. The National Hurricane Center’s 8 a.m. EDT October 21 outlook is a non-tropical low off the mid-Atlantic with a 40% subtropical chance. The October 10 lift after Isaias remains the last bind bulletin.",
  },
  {
    question:
      "If my HO-6 moved yesterday, does that cover king-tide flooding on Collins Avenue?",
    answer:
      "No. A personal-lines takeout moves the unit or house policy. It does not become flood insurance. Standing salt water from the Atlantic or the Intracoastal is still generally a flood file, whether or not Josephine is ever named. Miami-Dade’s highest predicted tides of the year are October 24–30, with the east-coast annual peak on October 27. A new National Flood Insurance Program application dated October 21 typically becomes effective around November 20.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "October 20 Citizens Takeout in Sunny Isles Beach",
    href: "/resources/citizens-october-20-takeout-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-21";

export default function CitizensOctober20TakeoutSunnyIslesBeach2026Article() {
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
                "Citizens Takeout Happened October 20: What Sunny Isles Beach Should Check Before November 5, 2026",
              description:
                "A Sunny Isles Beach calendar for the October 20 Citizens assumption: what the mail this week means, why the October 5 choice deadline cannot be reopened, and the November 5 deadline still ahead — separate from this week’s rip currents and next week’s king tide.",
              path: "/resources/citizens-october-20-takeout-sunny-isles-beach-2026",
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
              Condo Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Citizens Takeout Happened October 20: What Sunny Isles Beach
            Should Check Before November 5, 2026
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Assumption mail is the file this week. A 40% Josephine outlook
            off the mid-Atlantic is not a reason to leave the envelope
            unopened, and it is not a Citizens freeze.
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
                Tuesday, October 20, was the date on Citizens Property
                Insurance Corporation’s 2026 personal-lines depopulation
                calendar. On an assumption date, Citizens mails a Notice of
                Assumption and Nonrenewal and a Certificate of Assumption
                to ZIP 33160 households whose{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                or house policy actually moved, and an Unsuccessful
                Assumption Notice to the ones that did not. Wednesday
                morning, that mail is still the story — not a rewrite of
                how the 20% rule works, and not a second Josephine
                deductible article.
              </p>
              <p>
                The choice deadline for that round was{" "}
                <strong className="text-navy-800">October 5</strong>. It
                has passed. Assigned-policy lists were due October 12.
                Takeout companies uploaded re-weights by October 15. If
                nobody registered a choice, Citizens assigned the policy
                to the participating company with the lowest estimated
                premium. There is no 30-day window to send it back. The{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 4 takeout guide
                </Link>{" "}
                still explains the packet, the 20% test, and why silence
                is not staying. This page is what to do after the date.
              </p>
              <p>
                Two other files stay in their lanes. The National
                Hurricane Center’s 8 a.m. EDT October 21 Tropical Weather
                Outlook from Forecaster Blake still has no tropical
                cyclone in the Atlantic, the Caribbean, or the Gulf of
                America. What it does have is Invest 93L: a storm-force
                non-tropical low a few hundred miles off the mid-Atlantic
                U.S. coast, a medium 40 percent chance of subtropical
                characteristics in both 48 hours and seven days, then a
                northeast track away from the East Coast by Friday. The
                next unused name is still Josephine. National Weather
                Service Miami’s 9:52 p.m. EDT October 20 coastal hazard
                message keeps Coastal Miami-Dade — including Sunny Isles
                Beach and Haulover — on a High Rip Current Risk through
                Friday evening and a Coastal Flood Statement for isolated
                minor flooding around high tide from 3 a.m. Wednesday
                through Thursday evening. Those products do not reopen
                October 5, and they do not freeze new Citizens binds.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Mail This Week Actually Means
              </h2>
              <p>
                Citizens’ agent calendar is specific about the two
                envelopes that leave on an assumption date. Read the
                heading before you compare a premium.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Notice of Assumption and Nonrenewal",
                    desc: "The policy moved. Citizens also sends a Certificate of Assumption. The takeout company generally services the existing Citizens forms through the end of the current term. Its own Office of Insurance Regulation–approved rates and forms apply at the first private renewal — which is when an estimated premium in an August packet can become a different hurricane deductible, water sublimit, or loss-assessment number.",
                  },
                  {
                    title: "Unsuccessful Assumption Notice",
                    desc: "The policy did not move on October 20. You are still with Citizens for now. That is not a lifetime pass. Packets for the November 17 round were already mailed around September 28. Remaining with Citizens on one date does not freeze you there for the next.",
                  },
                  {
                    title: "No envelope yet",
                    desc: "October 21 is the morning after the date. First-class mail from Tallahassee to a Collins Avenue concierge desk is not same-day. Check the Citizens policyholder portal and call your appointed agent before assuming you were skipped. Citizens Customer Care is 888-685-1555.",
                  },
                  {
                    title: "A November packet you already have",
                    desc: "Some 33160 households now have two files. The October 20 assumption mail is one. A Policyholder Choice packet dated around September 28 for the November 17 round is another. The due date on that second Offer Form is November 5 — 15 days from this morning. Do not file the wrong code on the wrong round.",
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
                A personal-lines takeout still does not rewrite the
                building. The association{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  master policy
                </Link>
                , the tower’s hurricane deductible, and any SIRS or
                25-year recertification assessment stay on the board’s
                contract. If the unit moved and the building did not, the
                job is matching the new HO-6 to the same walls-in or
                bare-walls form — not celebrating a lower estimate from
                August.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Dates That Are Still Open
              </h2>
              <p>
                Citizens publishes the rest of the 2026 personal-lines
                calendar. Use the date printed on your Offer Form. These
                are the public slots, not a prediction that your policy
                will be selected:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    November 17, 2026 assumption.
                  </strong>{" "}
                  Policyholder choice is due{" "}
                  <strong className="text-navy-800">November 5</strong>.
                  Packets went out around September 28. Assigned lists
                  are due November 12; re-weights November 16. If you
                  are still with Citizens and a September packet is on
                  the counter, that is the deadline that still moves.
                </li>
                <li>
                  <strong className="text-navy-800">
                    December 15, 2026 assumption.
                  </strong>{" "}
                  Choice deadline{" "}
                  <strong className="text-navy-800">December 4</strong>.
                  Packets are scheduled around October 28 — next
                  Wednesday. That round is the last personal-lines date
                  on the 2026 calendar.
                </li>
              </ul>
              <p>
                Florida’s Office of Insurance Regulation posts the
                companies approved to participate. For the October 20
                date, the 2026 take-out table still lists Praxis
                Reciprocal Exchange (consent order 403124-26-CO),
                Southern Oak Insurance Company (403123-26-CO), American
                Integrity Insurance Company (403122-26-CO), and Florida
                Peninsula Insurance Company (402860-26-CO). For November
                17 and December 15, the same public table still shows
                Southern Oak and American Integrity on the July 17
                orders. American Integrity’s order caps the three-date
                proposal at 36,960 personal-residential multi-peril
                policies, with no single period above one-third of that
                total. Being on that list means the company met OIR’s
                takeout filing standard for those dates. It is not a
                ranking, a solvency guarantee, or a recommendation for a
                Sunny Isles Beach unit.
              </p>
              <p>
                Policies renewing within 90 days of an assumption date
                sit in Citizens’ blackout and cannot be selected for
                that round. If you were not in the October 20 file, that
                is one ordinary reason. It is not a promise you will be
                skipped in November.
              </p>
              <p>
                The 20% rule did not change overnight. Under Senate Bill
                2-A and section 627.351(6), an offer of comparable
                coverage that is not more than 20% greater than
                Citizens’ estimated renewal premium still ends
                eligibility to remain. Work the math on the November
                packet the same way the{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September takeout guide
                </Link>{" "}
                already walked: a $2,000 Citizens estimate plus a $2,400
                private offer is the line. Do not re-argue October 5 on
                a November form.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                This Week’s Alerts Are Not a Freeze — and Not a Reason
                to Ignore the Envelope
              </h2>
              <p>
                Keep the map honest. NHC’s 8 a.m. EDT October 21 outlook
                puts AL93 off the mid-Atlantic, not over Haulover Inlet.
                Formation chance is medium 40 percent through 48 hours
                and through seven days — up from near 0 percent in 48
                hours on Monday’s outlook, still not a named storm.
                Regardless of status, NHC warns of high winds, coastal
                flooding, and dangerous surf along portions of the U.S.
                East Coast for the next few days, then a Friday
                acceleration away from the eastern United States with
                conditions turning unfavorable. A 40% subtropical chance
                is not a Miami-Dade hurricane warning. It is not a new
                deductible article. The{" "}
                <Link
                  href="/resources/josephine-hurricane-deductible-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 19 statutory-hurricane-deductible guide
                </Link>{" "}
                already covers Fla. Stat. 627.4025. Naming Josephine as
                a subtropical storm, posting Florida watches, or
                upgrading to a hurricane with a Florida hurricane
                warning would be a different file.
              </p>
              <p>
                The season summary as of 09 UTC October 21 still lists
                nine named storms, one hurricane, and one major
                hurricane. Accumulated cyclone energy sits at 18.0 — 84
                percent below the 1991–2020 normal. Isaias (October
                6–10, peak 105 kt / 959 mb) remains the only hurricane
                in that table. Direct deaths and U.S. damage in the
                preliminary summary are still listed as zero. A quiet
                basin is not a coverage plan, and it is not a reason the
                October 20 assumption waited.
              </p>
              <p>
                Local products, from NWS Miami’s 9:52 p.m. EDT October
                20 coastal hazard message:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Coastal Miami-Dade
                  </strong>{" "}
                  — High Rip Current Risk through Friday evening, and a
                  Coastal Flood Statement (not an advisory) from 3 a.m.
                  Wednesday through Thursday evening for isolated minor
                  flooding around high tide, with some water on
                  low-lying roads and property. Sunny Isles Beach and
                  Haulover sit in that zone.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Coastal Broward
                  </strong>{" "}
                  — the same rip-current and coastal-flood-statement
                  pairing. No high-surf advisory in that product.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Coastal Palm Beach
                  </strong>{" "}
                  — High Surf Advisory until 8 p.m. Friday with 5- to
                  9-foot breaking waves, plus the same rip and flood
                  statement. Do not import those surf heights across the
                  county line as if they were a Sunny Isles Beach
                  advisory.
                </li>
              </ul>
              <p>
                The Miami office’s 3:51 a.m. EDT October 21 coastal
                waters forecast keeps a Small Craft Advisory for waters
                from Deerfield Beach to Ocean Reef through Thursday
                evening: northeast 15 to 20 knots this morning,
                diminishing 10 to 15 this afternoon, seas 5 to 7 feet
                occasionally 9. By Sunday the same forecast has
                northeast 25 to 30 knots and seas 9 to 13 feet
                occasionally 17 — a marine week, not a tropical-storm
                watch. NWS Miami’s 9 a.m. EDT map also flags rounds of
                heavy rain and isolated flash flooding this weekend,
                with gusty winds that can drop limbs and move unsecured
                items. That weekend sits on top of the king-tide window
                that starts Saturday. Rip current, high surf, small
                craft, and a coastal flood statement are still not
                Citizens’ bind trigger. The{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 lift after Isaias
                </Link>{" "}
                remains the last bind bulletin. Agents may still bind
                new and increased personal-lines coverage this morning
                if the risk qualifies.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Takeout Does Not Cover Next Week’s King Tide
              </h2>
              <p>
                Miami-Dade County Environmental Resources Management’s
                October 13 outlook still lists king tides of October
                24–30 (highest predicted), November 6–9, and November
                23–26. The South Florida Water Management District’s
                east-coast window is October 22–November 12, with the
                annual maximum predicted peak on October 27. NOAA Station
                8723080 at Haulover Pier — the gauge Sunny Isles Beach
                actually uses — has ordinary mid-2-foot highs this
                morning (about 5:00 a.m. 2.73 ft and 5:25 p.m. 2.86 ft
                MLLW). Tuesday, October 27, is still the local peak:
                low around 3:09 a.m. at −0.10 ft, high around 9:36 a.m.
                at 3.51 ft, then 3.16 ft around 9:39 p.m.
              </p>
              <p>
                Street water on Collins Avenue is still generally{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>
                , whether the driver is a named hurricane, a subtropical
                Josephine that never forms, or an unnamed northeasterly
                swell. A standard HO-3 or HO-6 — Citizens yesterday or
                a takeout company this morning — does not become a flood
                policy because the National Hurricane Center is watching
                a low off the Carolinas. National Flood Insurance
                Program waiting periods still apply. A new NFIP
                application dated October 21 typically becomes effective
                around November 20: after October 27 and after November
                6–9. November 23–26 is the nearer federal window. Private
                flood commonly runs 10 to 15 days, which from this
                morning is about October 31–November 5 — the tail of
                October 24–30, not the 27th. See{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP versus private flood in Sunny Isles Beach
                </Link>
                . Public Law 119-103 still authorizes NFIP only through
                December 11; that cliff is a late-November file if
                Congress has not acted, not this morning’s takeout
                letter.
              </p>
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
                , never NFIP and never the HO-6. Miami-Dade’s own
                king-tide advice is to move vehicles to higher ground
                before high tide and rinse salt water with fresh water.{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  PIP
                </Link>{" "}
                still does not repair the car. A Dairyland Florida auto
                dividend is a different shopping file; do not collapse
                it into this assumption date.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                If the Policy Moved: What to Check Before the First
                Private Renewal
              </h2>
              <p>
                The takeout company is now the issuing insurer for that
                unit or house. Confirm four practical facts this week,
                then save the heavier worksheet for the first renewal
                offer:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Who services claims through the current term.
                  </strong>{" "}
                  Citizens forms usually stay in force until expiration.
                  The phone number on the assumption certificate is the
                  one that should answer a water claim this weekend, not
                  the old Citizens app.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Whether your agent is appointed with the new company.
                  </strong>{" "}
                  Takeout selections are supposed to be serviced by
                  appointed agents. If the envelope names a carrier your
                  current agent cannot service, ask who will handle the
                  renewal — before a November 5 packet for a different
                  policy sits on the same desk.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Flood, CIT FW01, and the December 1 condition.
                  </strong>{" "}
                  A takeout does not replace a flood policy already
                  required on a $400k+{" "}
                  <Link
                    href="/homeowners-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    homeowners
                  </Link>{" "}
                  wind policy. If you stayed with Citizens on an HO-3,
                  the{" "}
                  <Link
                    href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                    className="text-ocean-500 hover:underline"
                  >
                    December 1 wind-for-flood condition
                  </Link>{" "}
                  still applies at the next Citizens new or renewal
                  date. HO-4 and HO-6 remain outside that particular
                  flood-proof line. Either way, keep the flood
                  declarations where you can find them before October
                  27.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Loss assessment, water, and scheduled items at
                    renewal — not as a panic rewrite today.
                  </strong>{" "}
                  Florida’s $2,000 statutory floor on unit-owner loss
                  assessment is still a floor. A Collins Avenue tower
                  deductible is often larger than that number. Jewelry
                  and scheduled personal property still sit on Coverage
                  C special limits unless they are scheduled; that
                  schedule is a different article. Do not drop it this
                  week to chase an assumption certificate.
                </li>
              </ul>
              <p>
                If you own a house or townhome in the 33160 / 33180
                pocket rather than a high-rise, the same personal-lines
                machinery applied yesterday. Roof age, opening
                protection, and hurricane deductibles replace loss
                assessment on the worksheet. The assumption-final rule
                does not.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A 33160 Checklist for October 21
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Open whatever Citizens mailed, including the
                    unsuccessful notice.
                  </strong>{" "}
                  Assumption and non-assumption are both information.
                  Photograph the certificate. Put the new claims number
                  in the same place you kept Citizens’.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If a September 28 packet is still unanswered, treat
                    November 5 as a hard date.
                  </strong>{" "}
                  Have the agent register the choice, or use Citizens’
                  online Policyholder Choice tool with the policy number
                  and registration code on that Offer Form. Do not reuse
                  an October 5 code.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not wait for a freeze that is not in force.
                  </strong>{" "}
                  Rip currents and a coastal flood statement are not a
                  tropical-storm watch. If you have been putting off a
                  wind increase, an ordinance-or-law endorsement, or a
                  flood application, a quiet bind window is the point.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Treat street water as flood, takeout or not.
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
                    Move the car before high tide this weekend.
                  </strong>{" "}
                  Comprehensive is the auto conversation. Photograph the
                  stall if water is already in the garage. Do not start
                  a flooded engine.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Stay out of the surf.
                  </strong>{" "}
                  High Rip Current Risk through Friday evening is a
                  life-safety product. It is not an insurance
                  endorsement.
                </li>
              </ul>
              <p>
                If you want a local reading of a Sunny Isles Beach
                assumption certificate or a November 5 Offer Form
                against this morning’s outlook — takeout, flood, and
                whether Citizens can still bind — start a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                , a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>
                , or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage
                exists only when an insurer issues it. Citizens’
                2026 personal-lines depopulation calendar, the Office of
                Insurance Regulation take-out table and July 17, 2026
                consent orders, the National Hurricane Center’s 8 a.m.
                EDT October 21 Tropical Weather Outlook, the North
                Atlantic summary as of 09 UTC October 21, National
                Weather Service Miami’s 9:52 p.m. EDT October 20 coastal
                hazard message and 3:51 a.m. EDT October 21 waters
                forecast, Miami-Dade ERM’s king-tide windows, SFWMD’s
                east-coast annual peak of October 27, NOAA Station
                8723080 predictions, and Citizens’ October 10 bind lift
                are public sources; an appointed agent still has to
                place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only.
                  It is not insurance advice, a guarantee of any premium
                  or claim payment, or a recommendation of any carrier
                  or takeout company. Citizens’ 2026 personal-lines
                  depopulation calendar (October 20 assumption / October
                  5 choice; November 17 / November 5; December 15 /
                  December 4), Citizens’ agent notes that assumption
                  mail leaves on the assumption date, the Office of
                  Insurance Regulation 2026 take-out company table and
                  consent orders 403124-26-CO, 403123-26-CO,
                  403122-26-CO, and 402860-26-CO, Senate Bill 2-A and
                  section 627.351(6), the National Hurricane Center
                  Tropical Weather Outlook at 8 a.m. EDT October 21,
                  2026 (Forecaster Blake: AL93 storm-force non-tropical
                  low off the mid-Atlantic U.S. coast; 48-hour and
                  7-day formation chances medium 40%; possible
                  subtropical characteristics; northeast motion away
                  from the eastern United States by Friday), the North
                  Atlantic summary as of 09 UTC October 21 (9 named
                  storms / 1 hurricane / 1 major hurricane / ACE 18.0,
                  84% below the 1991–2020 normal; Isaias October 6–10
                  peak 105 kt / 959 mb), National Weather Service Miami
                  coastal hazard messages at 9:52 p.m. EDT October 20
                  (High Rip Current Risk for Coastal Miami-Dade through
                  Friday evening; Coastal Flood Statement for Coastal
                  Miami-Dade and Coastal Broward from 3 a.m. Wednesday
                  through Thursday evening; High Surf Advisory for
                  Coastal Palm Beach until 8 p.m. Friday with 5–9 ft
                  surf) and the Deerfield Beach–Ocean Reef small-craft
                  advisory (northeast 15–20 kt, seas 5–7 ft
                  occasionally 9 ft through Thursday evening),
                  Miami-Dade ERM king-tide windows of October 24–30,
                  November 6–9, and November 23–26, SFWMD’s east-coast
                  window of October 22–November 12 with annual peak
                  October 27, NOAA Station 8723080 Haulover Pier
                  predictions, Citizens’ October 10, 2026
                  binding-suspension lift and statewide watch/warning
                  bind rule, and Public Law 119-103’s NFIP authorization
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
                  desc: "The Coastal Flood Warning is still not a takeout letter. November 5 remains the next choice deadline.",
                },
                {
                  label: "Coastal Flood Advisory This Weekend in Sunny Isles Beach",
                  href: "/resources/coastal-flood-advisory-king-tide-sunny-isles-beach-2026",
                  desc: "Josephine was named after the October 20 assumption. The Coastal Flood Advisory is still not a takeout letter.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "The September 4 how-to this calendar page does not rewrite — 20% rule, silence, and HO-6 worksheets.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "If you stayed, Dec. 1 wind-for-flood still applies. A takeout is a different letter.",
                },
                {
                  label: "If Josephine Forms, Does a Hurricane Deductible Apply?",
                  href: "/resources/josephine-hurricane-deductible-sunny-isles-beach-2026",
                  desc: "A 40% subtropical outlook is still not Fla. Stat. 627.4025. Do not collapse it into takeout mail.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "Rip currents and a flood statement are not a tropical-storm watch. Citizens can still bind this morning.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "A 30-day wait from today misses October 27. The takeout did not buy that layer.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A soaked car this weekend is still comprehensive, whether or not the HO-6 moved yesterday.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "Compare the loss-assessment limit on a takeout — not only the August estimate.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A takeout does not replace flood already required on $400k+ Coverage A homes.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 coverage that sits beside the association master policy.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Takeout rules also applied yesterday to house policies in 33160.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for this week’s statement and next week’s king-tide peak.",
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
                  label: "Request a Condo Quote",
                  href: "/quote?type=condo",
                  desc: "Read an assumption certificate or a November 5 Offer Form against a 33160 unit.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the flood layer this week’s statement and next week’s king tide still require.",
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
            October 20 Takeout Questions for 2026
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
            Read the Assumption Mail — Not Just the Swell
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a condo, homeowners, or flood quote and we will help
            compare a Sunny Isles Beach packet against yesterday’s
            takeout date, the November 5 deadline, and next week’s king
            tide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=condo"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Condo Quote
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
