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
  title: "NFIP vs Private Flood in Sunny Isles Beach | 2026 Guide",
  description:
    "A 2026 Sunny Isles Beach shopping guide: NFIP $250k/$100k caps vs private flood, 30-day vs 10–15-day waits, no ALE on the federal form, and why the Sept. 24 king-tide window — not a Bermuda invest — is the calendar.",
  path: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "What are the NFIP coverage caps for a house in Sunny Isles Beach?",
    answer:
      "In the Regular Program, the National Flood Insurance Program caps a residential dwelling at $250,000 and contents at $100,000. Those numbers have not moved with Miami-Dade replacement costs. On a barrier-island house or townhome in ZIP 33160, the federal dwelling cap is often a known shortfall, not a full-replacement number. Contents on the Standard Flood Insurance Policy are generally settled at actual cash value. Temporary housing after a flood is not covered.",
  },
  {
    question:
      "Does NFIP pay for a hotel if flood or surge makes my home unlivable?",
    answer:
      "No. FEMA’s Standard Flood Insurance Policy does not pay additional living expenses — hotel stays, short-term rent, meals, or extra commuting — while the building is repaired. A homeowners or HO-6 policy’s loss-of-use wording applies after a covered wind or fire loss, not after flood. Private flood and Florida “preferred” or “supplemental” flood forms under section 627.715 can add that layer. Confirm the form, not the brochure.",
  },
  {
    question:
      "If I buy flood insurance this week, when does it actually start?",
    answer:
      "A new NFIP policy generally waits 30 days, with narrow exceptions such as certain mortgage closings, a coverage change at renewal, or a one-day wait after a map change into a high-risk zone. Bought on September 18, 2026, that clock typically runs to about October 18 — after the next king-tide window opens on September 24, and before the east-coast annual predicted peak on October 27. Private residential flood in Florida commonly quotes a 10- to 15-day wait, and moratoriums still appear once a named storm is in the basin. A Bermuda invest does not shorten either clock.",
  },
  {
    question:
      "Will a private flood policy satisfy my lender and Citizens?",
    answer:
      "Often, if the form meets the federal private-flood definition in 42 U.S.C. § 4012a(b) and the limit the lender or Citizens actually asked for. Florida’s Office of Insurance Regulation can certify that an authorized policy equals or exceeds NFIP coverage; only certified forms may be advertised that way. Citizens accepts NFIP or qualifying private flood plus form CIT FW01, and for dwelling policies it generally wants Coverage A at least equal to the Citizens dwelling limit or the NFIP Regular Program maximum you are eligible for — $250,000. Ask the lender and, if you are with Citizens, your agent to confirm the declarations page before you cancel an NFIP policy.",
  },
  {
    question:
      "If I leave NFIP for a private policy, can I go back at the same rate?",
    answer:
      "Not always. Section 627.715(8) requires the agent to give you a signed written notice before placing flood with an admitted or surplus-lines insurer if the property currently has subsidized NFIP coverage: if you drop that subsidized policy, the full risk rate may apply if you later return to the program. Continuous-coverage and grandfathering rules are a federal NFIP issue, not a private-carrier marketing claim. Read the notice before you swap.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "NFIP vs Private Flood in Sunny Isles Beach",
    href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-18";

export default function NfipVsPrivateFloodSunnyIslesArticle() {
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
                "NFIP vs Private Flood Insurance in Sunny Isles Beach in 2026: $250k Caps, Waiting Periods, and King Tides",
              description:
                "A Sunny Isles Beach homeowners shopping guide to NFIP Regular Program caps versus private and supplemental flood, 30-day versus 10–15-day waits, additional living expenses, lender and Citizens acceptance, and why the September 24–October 15 king-tide window is the calendar in a record-quiet Atlantic season.",
              path: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
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
            NFIP vs Private Flood Insurance in Sunny Isles Beach in 2026: $250k
            Caps, Waiting Periods, and King Tides
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A quiet Atlantic week is not a reason to wait. The federal dwelling
            cap, the 30-day clock, and the next king-tide window are the
            shopping facts for ZIP 33160 homes — not a Bermuda invest that is
            already fading.
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
                As of Friday, September 18, 2026, the Atlantic has still not
                produced a hurricane. Five named storms — Arthur, Bertha,
                Cristobal, Dolly, and Edouard — remained tropical storms. That
                broke the satellite-era record for the latest first hurricane,
                which had been September 11 (Gustav in 2002 and Humberto in
                2013). A low a few hundred miles east of Bermuda, tagged Invest
                98L, briefly looked like it might become Fay. The National
                Hurricane Center’s 2 a.m. EDT outlook this morning cut the
                formation chance to 10 percent in both 48 hours and seven days
                and said development is becoming increasingly unlikely. Bermuda
                was the watch area, not Miami-Dade. None of that changes how{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood insurance
                </Link>{" "}
                works on a barrier island.
              </p>
              <p>
                Two clocks on the island do. The South Florida Water Management
                District’s 2026 east-coast king-tide calendar lists September
                24–October 15 next — six days from this writing — and a stretch
                through October 22–November 12 whose annual maximum predicted
                peak is October 27. King tides are not hurricanes. They are the
                highest astronomical tides of the year, and on Sunny Isles Beach
                they regularly put sunny-day water on Collins Avenue and the
                low streets behind it. Standard{" "}
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
                policies still treat that water as flood. This article is the
                residential shopping comparison this site has not published yet:
                National Flood Insurance Program limits versus private and
                supplemental flood for houses and units in 33160. It is not a
                recap of{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  who Citizens forces to buy flood
                </Link>
                , and it is not the{" "}
                <Link
                  href="/resources/collins-avenue-business-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Collins Avenue storefront
                </Link>{" "}
                guide.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why a Quiet Peak Is Still a Buying Window
              </h2>
              <p>
                A new NFIP policy generally waits 30 days. Bought today, that
                coverage typically attaches around October 18 — after the
                September 24 king-tide window has already opened, and about nine
                days before the October 27 predicted annual peak. Private
                residential flood in Florida commonly quotes a shorter wait,
                often in the 10- to 15-day range. That is still a wait. It is
                not same-day coverage because a tropical outlook mentioned
                Bermuda on Thursday.
              </p>
              <p>
                Thursday’s National Hurricane Center outlook had given Invest
                98L as much as a 40 percent chance of forming. Overnight, showers
                around the low stayed disorganized and the odds fell to 10
                percent. AccuWeather’s Alex DaSilva told reporters the U.S.
                impact, if the system organized at all, was expected to be low.
                That sequence is useful only as a reminder: waiting periods and
                binding moratoriums follow the cone and the carrier’s bulletin,
                not a headline. El Niño wind shear is a large part of why the
                Main Development Region has been hostile, and NOAA still
                expected a below-normal season. Roughly half of a typical
                Atlantic season’s named-storm activity still occurs after
                September 10. The season runs through November 30.
              </p>
              <p>
                President Trump signed H.R. 6500 on September 2, 2026, which
                substituted December 11, 2026 for September 30 in the National
                Flood Insurance Act’s authorization dates. You can still buy an
                NFIP policy this week. December 11 is also when the broader
                continuing resolution ends, so the next NFIP deadline rides with
                federal funding. Existing policies stay in force through their
                terms. A 30-day wait that starts in late November can finish
                after December 11. Neither date is a substitute for binding
                before the water is in the street. September 30 “cliff” posts
                still circulating online are out of date.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Federal Form Actually Buys on a 33160 Property
              </h2>
              <p>
                The NFIP writes residential risks on the Standard Flood
                Insurance Policy. In the Regular Program the caps are $250,000
                for the building and $100,000 for contents. Those are the
                numbers lenders and Citizens often treat as “maximum available”
                when they accept less than the dwelling’s replacement cost.
                They are not sized to a rebuilt single-family house east of
                Biscayne Boulevard, and they are not sized to a renovated
                Collins Avenue interior once you add cabinets, flooring, and
                appliances the unit owner is responsible for.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Dwelling — $250,000 Regular Program cap",
                    desc: "Pays for direct physical loss by or from flood to the insured building. Replacement-cost settlement on the building is available only when the building is the principal residence and you insure to the NFIP’s valuation rules. Increased Cost of Compliance (up to $30,000 for elevation or floodproofing after a substantial-damage declaration) counts against the $250,000 building cap. It is not extra money on top.",
                  },
                  {
                    title: "Contents — $100,000, generally actual cash value",
                    desc: "Furniture, clothing, and most personal property inside the building. Depreciation applies. Jewelry, art, and similar items sit on small sublimits. Property in a basement or below the lowest elevated floor is tightly limited. Landscaping, pools, decks, patios, fences, and seawalls are outside the form. A parked car is a comprehensive auto claim, not a flood-policy claim.",
                  },
                  {
                    title: "No additional living expenses",
                    desc: "The federal form does not pay for a hotel, a short-term rental, meals, or extra commuting while the house or unit is unlivable. That is the gap that surprises people after surge, because the HO-3 or HO-6 loss-of-use wording they remember is a wind-and-fire conversation — not a flood form.",
                  },
                  {
                    title: "30-day wait, with narrow exceptions",
                    desc: "No wait when you buy in connection with making, increasing, extending, or renewing a mortgage. No wait on a coverage change at renewal. A one-day wait can apply if FEMA newly maps the property into a high-risk zone and you buy within the map-change window. Voluntary purchase — the usual case for a household that simply decided this week — is 30 days.",
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
                Do not borrow unincorporated Miami-Dade’s Community Rating
                System number for a Sunny Isles Beach quote. Unincorporated
                Miami-Dade is Class 3 (a 35% NFIP discount for eligible
                policies). The City of Sunny Isles Beach has published a Class 8
                rating, which is a 10% NFIP discount. CRS applies to qualifying
                NFIP policies. It does not apply to a private form unless that
                carrier independently prices a similar credit, and it does not
                make a homeowners policy cover surge.
              </p>
              <p>
                Most of the island sits in a Special Flood Hazard Area — Zone AE
                along much of the Collins Avenue strip, with VE (wave) pockets
                on the open Atlantic. A published commercial illustration at
                18050 Collins Avenue (Zone AE, base-flood elevation 7.0 feet)
                is a reminder that “beachfront” here is inside the 1% annual
                floodplain, not adjacent to it. Confirm the parcel on FEMA’s
                Flood Map Service Center and the city’s flood-risk portal; do
                not copy a neighbor’s zone letter.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Private Flood Can Add — and What Florida Law Calls It
              </h2>
              <p>
                Florida Statute 627.715 lets authorized insurers write personal
                lines residential flood or excess flood on a standard, preferred,
                customized, flexible, or supplemental basis. Citizens may not
                write flood at all. Surplus-lines export is allowed. The statute
                is a menu, not a guarantee that every carrier offers every
                flavor on a 33160 address:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">Standard</strong> must
                  match the NFIP Standard Flood Insurance Policy — same flood
                  definition, deductibles, and loss adjustment. It is a private
                  chassis with federal-shaped coverage.
                </li>
                <li>
                  <strong className="text-navy-800">Preferred</strong> keeps
                  that chassis and must add three things the NFIP form lacks:
                  certain water intrusion from outside the structure, additional
                  living expenses, and replacement-cost settlement on contents
                  that are repaired or replaced, up to the limit.
                </li>
                <li>
                  <strong className="text-navy-800">Flexible</strong> can
                  tailor the limit (including a mortgage-balance cap), the
                  deductible, actual-cash-value versus replacement-cost on the
                  dwelling, whether ALE is in or out, and whether contents are
                  covered at all. Read those elections. A cheaper flexible
                  quote that drops contents or ALE is a different product.
                </li>
                <li>
                  <strong className="text-navy-800">Supplemental
                  (excess)</strong> sits on top of an NFIP or standard/preferred
                  policy. The statute expressly allows it to pick up jewelry,
                  art, deductibles, and additional living expenses. This is the
                  usual way to insure a house whose rebuild cost is well above
                  $250,000 without abandoning the federal layer a lender already
                  accepted.
                </li>
              </ul>
              <p>
                Private primary policies can also quote dwelling limits well
                above $250,000 in a single form — sometimes into the millions —
                with shorter waiting periods. They are not automatically cheaper
                on a coastal AE or VE risk, and they are not automatically
                broader. Some exclude storm surge, impose a named-storm waiting
                period, or cap loss of use. Some will not write a ground-floor
                unit or a house seaward of Coastal Construction Control Line
                without elevation-certificate detail. Compare the declarations,
                the flood definition, and the waiting-period endorsement against
                the NFIP form — not a one-line premium.
              </p>
              <p>
                Lenders subject to the mandatory purchase requirement may accept
                private flood that meets 42 U.S.C. § 4012a(b). An authorized
                insurer may ask the Office of Insurance Regulation to certify
                that a form equals or exceeds NFIP coverage; only then may the
                carrier or agent advertise that certification. Knowingly
                claiming a non-certified form is certified is an unfair trade
                practice under section 626.9541. If a mortgage servicer is in
                the file, send the declarations and the certification (if any)
                before you non-renew the NFIP policy.
              </p>
              <p>
                One more Florida-specific warning: section 627.715(8) requires
                a signed written notice before an agent moves a property that
                currently has subsidized NFIP coverage onto an admitted or
                surplus-lines flood policy. Dropping a subsidized NFIP policy
                can mean the full risk rate applies if you later return to the
                program. Continuous coverage is how some pre-FIRM discounts and
                grandfathered rating survive. A private quote that looks cheaper
                this year can be expensive to reverse. Ask whether the current
                NFIP rate is subsidized before you swap.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Houses, Townhomes, and Collins Avenue HO-6 Units Are Different
                Shoppers
              </h2>
              <p>
                A single-family or townhome policy in the 33160 / 33180 pocket
                is usually a dwelling-limit problem. If the rebuild cost is
                $800,000, an NFIP $250,000 building layer leaves $550,000 of
                flood uninsured unless you add excess/supplemental flood or a
                private primary that will write the full amount. Additional
                living expenses are the second column: a family that cannot
                occupy a flooded house for three months is living on savings
                unless the flood form says otherwise.{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens already requires flood
                </Link>{" "}
                on personal-residential wind policies with Coverage A of
                $400,000 or more, including many Zone X houses. Proof is NFIP
                or qualifying private plus CIT FW01. The mandate tells you that
                you must have a policy. It does not tell you whether $250,000
                is enough.
              </p>
              <p>
                A high-rise{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                is usually a contents-and-improvements problem. The association
                may carry an NFIP Residential Condominium Building Association
                Policy (RCBAP) — or a private master flood — on the structure
                and common elements. That is not your furniture, and it is not
                automatically your upgraded kitchen. Citizens currently exempts
                condominium unit-owner policies from the statutory flood
                mandate. The exemption is not a statement that surge cannot
                reach the floor. Unit owners typically shop contents flood
                (NFIP $100,000 actual cash value, or a private form with a
                higher limit and replacement cost) and, where the master policy
                is bare-walls or underinsured, a unit-level building/improvements
                layer. Loss of use after flood is still absent from the federal
                contents form.{" "}
                <Link
                  href="/resources/renters-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Tenants
                </Link>{" "}
                are on a contents-only version of the same split; this piece is
                for owners.
              </p>
              <p>
                Neither an HO-6 takeout nor a July 1 personal-lines rate change
                starts a flood policy.{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  Wind, storm surge, and flood remain three different claims
                </Link>
                .{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Wind-mitigation credits
                </Link>{" "}
                change the wind premium. They never substitute for flood.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist Before September 24
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Pull the zone and the elevation file, not a hallway rumor.
                  </strong>{" "}
                  FEMA’s map, the City of Sunny Isles Beach flood-risk portal,
                  and the Building Department (305.947.2150) beat a neighbor’s
                  Zone X story. Use the city’s CRS Class 8, not Miami-Dade
                  Class 3, on any NFIP quote.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Price three stacks on the same values.
                  </strong>{" "}
                  NFIP only; NFIP plus supplemental/excess; and a private
                  primary. Building, contents, and additional living expenses
                  as separate columns. If replacement cost sits above $250,000,
                  the federal cap is a known shortfall.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Start the wait against the tide calendar, not the outlook.
                  </strong>{" "}
                  September 24–October 15 is next. October 27 is the east-coast
                  predicted annual peak. An NFIP 30-day wait started today
                  finishes around October 18. A private 10- to 15-day wait can
                  finish before that peak. A wait started the afternoon a watch
                  is posted for Miami-Dade generally cannot.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you have a lender or Citizens, match their proof rules
                    before you cancel NFIP.
                  </strong>{" "}
                  Mandatory-purchase private flood has a federal definition.
                  Citizens wants CIT FW01 plus a qualifying declarations page.
                  OIR certification is the only form of “equals NFIP” an agent
                  may advertise.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If the current NFIP rate is subsidized, read the 627.715(8)
                    notice.
                  </strong>{" "}
                  Leaving the program can change the rate at which you are
                  allowed back in. That is a five-year decision, not a one-year
                  premium hunt.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not treat a fading Bermuda invest as a closed season.
                  </strong>{" "}
                  Invest 98L’s odds dropped to 10 percent this morning. The
                  next named storm would still be Fay. Binding restrictions
                  follow the cone. December 11 is the next shared NFIP funding
                  date, not a reason to skip the wait that starts when you
                  actually bind.
                </li>
              </ul>
              <p>
                If you want a local reading of an NFIP declarations page
                against a private or excess quote for a Sunny Isles Beach house
                or unit — including whether $250,000 / $100,000 is enough, how
                ALE is worded, and whether the form will satisfy a lender or
                Citizens — start a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>
                . A quote request does not bind coverage. Coverage exists only
                when an insurer issues it. Floodsmart.gov, FEMA’s Flood Map
                Service Center, Florida Statute 627.715, Citizens’ flood page,
                and the city’s flood-risk portal are public sources; an
                appointed agent still has to place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any premium or claim
                  payment, or a recommendation of any carrier or product. 2026
                  Atlantic hurricane-season statistics, the National Hurricane
                  Center’s 2 a.m. EDT September 18, 2026 Tropical Weather
                  Outlook for Invest 98L (10 percent formation chance in 48
                  hours and seven days), South Florida Water Management District
                  2026 east-coast king-tide windows (including the October 27
                  predicted annual peak), H.R. 6500’s December 11, 2026 NFIP
                  extension, NFIP Regular Program residential caps of $250,000
                  dwelling and $100,000 contents, NFIP’s exclusion of additional
                  living expenses, CRS Class 8 for the City of Sunny Isles
                  Beach, Florida Statute 627.715 (including standard, preferred,
                  flexible, and supplemental flood and the subsidized-NFIP
                  notice in subsection (8)), 42 U.S.C. § 4012a(b), and Citizens’
                  acceptance of qualifying NFIP or private flood plus form CIT
                  FW01 are described as those agencies and statutes state them
                  as of this writing. The FEMA Zone AE / 7.0-foot BFE example
                  for 18050 Collins Avenue is a public flood-layer illustration,
                  not a quote for that address. Eligibility, deductibles,
                  waiting periods, and required limits depend on the actual
                  policy, flood zone, lender, and underwriting. Review your
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
                  label: "Ordinance or Law Coverage in Sunny Isles Beach (2026)",
                  href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
                  desc: "NFIP ICC’s $30,000 is a flood sublimit. It does not replace 25% or 50% ordinance or law on the HO-3.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood options for coastal properties.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "The dedicated hotel-bill guide: Coverage D on HO-3/HO-6 versus NFIP’s no-ALE form.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "The parked car is comprehensive, not NFIP. Collins Avenue garages and the Sept. 24 tide window.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood is a separate policy from wind and HO-3 — the starting point before this shopping comparison.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "The $400k Coverage A rule tells you that you must buy. This guide is which form to buy.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three different claims on this island.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling and wind coverage still exclude flood from external water.",
                },
                {
                  label: "Condo Insurance in Florida",
                  href: "/resources/condo-insurance-florida",
                  desc: "HO-6 vs. the association master policy — including who insures the interior after surge.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "Contents-only flood for tenants is a different stack than an owner’s dwelling layer.",
                },
                {
                  label: "Collins Avenue Business Insurance (2026)",
                  href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
                  desc: "Commercial NFIP caps are $500k/$500k and still exclude business income.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "Wind credits do not substitute for flood coverage.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Compare NFIP, excess, and private primary on the same 33160 values.",
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
            NFIP vs Private Flood Questions for 2026
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
            Compare NFIP and Private Flood for a Sunny Isles Beach Property
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a flood quote and we will help match dwelling and contents
            values, additional living expenses, waiting periods, and whether
            NFIP, excess, or a private primary fits a 33160 house or unit.
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
