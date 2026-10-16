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
  title: "Renters Insurance Rate Cuts in Sunny Isles Beach | HO-4 2026",
  description:
    "OIR’s −12.8% HO-4 average took effect Oct. 11 for ~122,000 policies. What ZIP 33160 tenants should shop before the Oct. 27 king-tide peak — besides the statewide cut.",
  path: "/resources/renters-insurance-rate-cuts-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Did Florida renters insurance rates go down in October 2026?",
    answer:
      "For one large admitted book, yes — on new business and at renewal, not mid-term. On October 2, 2026 the Florida Office of Insurance Regulation announced an average 12.8% decrease on HO-4 policies at American Modern Home Insurance Company, affecting about 121,898 exposures, effective October 11. OIR said some counties average 13.1% to 13.9%, with the company’s highest concentrations in Orange (−13.4%) and Broward (−13.8%). Those are carrier-wide averages. A Sunny Isles Beach high-rise tenant in Miami-Dade can see a different number than a renter in Orlando.",
  },
  {
    question:
      "If I rent in ZIP 33160, will I automatically get a 12.8% cut?",
    answer:
      "No. The 12.8% figure is American Modern’s statewide HO-4 average. OIR did not publish a Miami-Dade percentage in that bulletin. Barrier-island contents, a named-storm deductible, jewelry sublimits, and whether the lease extra-insured wording is on the form all move the bill more than a Tallahassee headline. If you are not on that company, the October 11 effective date is a reason to request competing quotes — not a notice that every 33160 renewal already dropped.",
  },
  {
    question:
      "Does a cheaper HO-4 cover king-tide flooding in Sunny Isles Beach?",
    answer:
      "No. A renters rate filing prices theft, fire, liability, and other covered perils on the HO-4. It does not price National Flood Insurance Program contents coverage or a private flood form under Florida Statute 627.715. Street and garage water from the October 24–30 king-tide window, including the October 27 annual peak, is still generally a flood file. NFIP contents-only coverage is typically capped at $100,000 actual cash value and carries a 30-day wait. A cheaper HO-4 that dropped flood from the conversation is not a bargain on Collins Avenue.",
  },
  {
    question:
      "If I buy flood insurance today, will it cover the October 27 king tide?",
    answer:
      "Usually not on an NFIP contents form. A standard 30-day National Flood Insurance Program waiting period that starts October 16 lands around November 15 — after both the October 27 east-coast peak and the November 6–9 window. Private flood under section 627.715 often uses a shorter wait, commonly 10 to 15 days, which still may miss the 27th depending on the binder date. The November 23–26 window is the nearer federal date a new NFIP application filed today can realistically reach. An in-force flood policy is a different file from a new one.",
  },
  {
    question:
      "Is this the same as the September 2026 homeowners rate-cut news?",
    answer:
      "No. The September 22 OIR bulletin was homeowners writers — One Alliance North America, Vyrd, Safe Harbor, and Unique — at renewal for more than 62,000 dwelling policies. This October HO-4 filing is tenant contents and liability. The landlord’s building, the association master policy, and an owner’s HO-6 are still not the renter’s form. Shop them on separate worksheets.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Renters Insurance Rate Cuts in Sunny Isles Beach",
    href: "/resources/renters-insurance-rate-cuts-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-16";

export default function RentersInsuranceRateCutsSunnyIslesBeach2026Article() {
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
                "Florida Renters Insurance Rate Cuts in 2026: What Sunny Isles Beach Tenants Should Shop at Renewal",
              description:
                "A Sunny Isles Beach shopping guide for the October 2, 2026 OIR HO-4 rate cut: American Modern’s −12.8% average effective October 11, why ZIP 33160 may not match Orange or Broward, and why king-tide flood still sits on a separate policy.",
              path: "/resources/renters-insurance-rate-cuts-sunny-isles-beach-2026",
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
            Florida Renters Insurance Rate Cuts in 2026: What Sunny Isles
            Beach Tenants Should Shop at Renewal
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Tallahassee put a 12.8% average HO-4 decrease in force on
            October 11. On a barrier island, the work is still comparing
            coverage — not celebrating a statewide average the king tide
            never priced.
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
                Friday morning, October 16, the National Hurricane Center’s
                8 a.m. EDT Tropical Weather Outlook was again a single
                sentence. Forecaster Beven: tropical cyclone formation is
                not expected during the next seven days. The 2 a.m. outlook
                from Forecaster Evans and Reinhart said the same. Next name
                on the 2026 Atlantic list, still unused: Josephine. The
                season summary as of 09 UTC October 16 still lists nine
                named storms, one hurricane, and one major hurricane.
                Accumulated cyclone energy sits at 18.0 — 83 percent below
                the 1991–2020 normal. Isaias (October 6–10) remains the only
                storm in that table with hurricane intensity, peak 105 kt /
                959 mb. Direct deaths and U.S. damage in the table are still
                listed as zero. A quiet cone is not the local deadline.
              </p>
              <p>
                The nearer calendar is on Collins Avenue. Miami-Dade County
                Environmental Resources Management’s October 13 notice still
                marks October 24–30 as the highest predicted tides of the
                fall, then November 6–9 and November 23–26. The South
                Florida Water Management District’s east-coast annual
                maximum remains October 27. NOAA Station 8723080 at
                Haulover Pier — the tide point for North Miami Beach and
                Sunny Isles Beach — predicts a 3.5-foot MLLW high around
                9:36 a.m. on the 27th, with a −0.1-foot low near 3:09 a.m.
                Today’s table is ordinary by comparison: a 2.6-foot overnight
                high, a 2.8-foot midday high, and lows near 0.7 and 1.1
                feet. Eight days from the peak, the insurance question for
                a 33160 renter is not Josephine. It is whether a cheaper{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-4
                </Link>{" "}
                actually followed the belongings, the lease, and the flood
                layer the rate filing never included.
              </p>
              <p>
                This page is the dedicated tenant-rate shopping file. It is
                not a rewrite of the{" "}
                <Link
                  href="/resources/renters-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 9 HO-4, contents-flood, and hurricane-deductible
                  guide
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 22 homeowners decrease round
                </Link>
                . It is not a{" "}
                <Link
                  href="/resources/short-term-rental-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  host listing or city short-term rental license
                </Link>
                . An owner-occupied HO-6, a landlord form, and a tenant
                HO-4 are three different stacks even when they share an
                address.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What OIR Put in Force on October 11 — and What It Did Not
              </h2>
              <p>
                The official bulletin, posted at 7:18 a.m. on October 2 by
                the Florida Office of Insurance Regulation, named one
                admitted renters writer. Commissioner Mike Yaworsky
                approved an average 12.8% decrease on HO-4 policies at
                American Modern Home Insurance Company, affecting about
                121,898 exposures. The change is effective October 11 for
                new policies and renewals. Five days into that effective
                window, the statewide average is no longer a pending
                filing. It is also not a ranking, and it is not a promise
                that every Sunny Isles Beach lease already reprints a
                12.8% line.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "American Modern HO-4 — 12.8% statewide average",
                    desc: "About 121,898 tenant exposures. OIR said some policyholders may see a larger cut than the average. The company’s highest concentration of this book is in Orange County (−13.4%) and Broward County (−13.8%), not in ZIP 33160.",
                  },
                  {
                    title: "More than 30 counties at −13.1% to −13.9%",
                    desc: "That band is still a county average inside one carrier’s filing. OIR did not publish a Miami-Dade percentage in the October 2 release. Do not import Broward’s −13.8% across the county line as if it were a Sunny Isles Beach quote.",
                  },
                  {
                    title: "Effective October 11 — new business and renewals",
                    desc: "The decrease does not rewrite a policy that is already in force for the current term. If the anniversary is later this fall, ask whether the new rate page applies to that renewal. If you are with a different writer, the bulletin is a shopping window, not an automatic endorsement.",
                  },
                  {
                    title: "An HO-4 still does not insure the building",
                    desc: "OIR’s own explainer in that release is the local fact people mix up: the tenant form covers personal belongings and personal liability. The physical structure remains the landlord’s or the association’s file. A cheaper renters premium does not become condo coverage.",
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
                Yaworsky’s line in the same bulletin was that OIR is
                “approving major rate decreases across the board, including
                decreases in insurance for our Florida renters,” and that
                the office will keep asking companies to do more. That is
                regulator language about a market. It is not a quote for a
                furnished one-bedroom on Collins Avenue, a seasonal winter
                rental off Atlantic Isles, or a ground-floor unit that
                stores bicycles in a floodable garage. American Modern is
                listed here as a public filing, not as a recommended
                carrier.
              </p>
              <p>
                Keep two other 2026 headlines in their lanes. The{" "}
                <Link
                  href="/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  September 22 homeowners approvals
                </Link>{" "}
                — One Alliance North America and Vyrd at 10.4%, Safe Harbor
                at 4.1%, Unique at 3.2% — were dwelling policies at renewal.
                Dairyland’s roughly $30 million Florida auto dividend after
                a 14% auto cut is still an auto story. If you are shopping
                a tenant form this week, keep the house filing and the auto
                dividend off the HO-4 comparison sheet.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why a 33160 Average Is Not an Orange County Average
              </h2>
              <p>
                Sunny Isles Beach is a narrow barrier island in Miami-Dade
                County. Most of the rental stock sits in high-rises along
                Collins Avenue, inside a Special Flood Hazard Area —
                typically Zone AE, with VE wave pockets on the open Atlantic
                — and inside Florida’s High Velocity Hurricane Zone. Rating
                models still price that geography whether or not the basin
                has another named storm on the board. A below-normal ACE
                year does not re-rate a 33160 contents policy as if it were
                inland Orange County, even when Orange is where this
                particular writer has concentration.
              </p>
              <p>
                Three local facts usually move a tenant renewal more than a
                Tallahassee average:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Coverage C and the hurricane deductible.
                  </strong>{" "}
                  On an HO-4 there is no Coverage A building limit to take
                  a percentage of. The named-storm or hurricane deductible
                  is often a flat dollar amount or a small percentage of
                  contents. A cheaper renewal that quietly raised that
                  deductible, or that lowered the contents limit to
                  manufacture a larger percentage, can erase the advertised
                  cut the first time wind-driven rain comes through a
                  balcony slider.{" "}
                  <Link
                    href="/resources/renters-insurance-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    Wind, surge, and flood remain three conversations
                  </Link>{" "}
                  on a tenant form too.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Special limits inside Coverage C.
                  </strong>{" "}
                  Jewelry, watches, and similar items often sit on a
                  theft sublimit of about $1,000 to $2,500 unless they are
                  scheduled. A Collins Avenue winter renter who brings a
                  ring, a watch, or art south is not fully insured just
                  because the HO-4 premium fell. Scheduling or a personal
                  articles form is a different line. Do not drop the
                  schedule to make the percentage look larger.
                </li>
                <li>
                  <strong className="text-navy-800">
                    The lease exhibit, not the press release.
                  </strong>{" "}
                  Florida does not require tenants to carry renters
                  insurance. Many Sunny Isles Beach leases and condominium
                  rental addenda do. Typical language asks for a liability
                  limit, a certificate, and the landlord, management
                  company, or association as additional interest or
                  additional insured. A cheaper policy that no longer
                  matches the exhibit can hold up keys even when OIR’s
                  average looks friendly.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The October 27 Tide Is Not on the HO-4 Invoice
              </h2>
              <p>
                An HO-4 rate cut does not shorten NFIP’s typical 30-day
                wait, raise the Regular Program $100,000 contents cap, or
                put a hotel on the federal flood form after surge.{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Additional living expenses
                </Link>{" "}
                follow a covered HO-4 peril — fire, theft, wind through a
                failed opening. Standing water from the Intracoastal or
                the Atlantic is still generally excluded. Standard NFIP
                contents forms do not pay loss of use. A private flood
                form under Florida Statute 627.715 may, if the contract
                actually says so.
              </p>
              <p>
                The waiting-period math from this morning is unforgiving
                against the tide calendar. A new NFIP contents application
                dated October 16 typically becomes effective around
                November 15. That date is after the October 24–30 peak
                window and after November 6–9. The November 23–26 king-tide
                set is the nearer federal window a new NFIP file started
                today can realistically reach. Private flood commonly uses
                a 10- to 15-day wait, which from today lands around October
                26–31 — close enough to the 27th that you should not assume
                the binder will beat the water. An already in-force flood
                policy is the only file that is live for next week’s
                streets.
              </p>
              <p>
                Citizens currently exempts tenant content policies from its
                statutory flood mandate. That exemption is eligibility to
                keep a Citizens HO-4 without buying flood. It is not a
                reason to skip contents flood if bicycles, seasonal
                clothing, or a storage cage sit where king-tide water can
                reach them. The City of Sunny Isles Beach remains CRS Class
                8 (a 10% NFIP discount), not unincorporated Miami-Dade’s
                Class 3 (35%).{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Shop the flood layer on its own worksheet
                </Link>
                . Public Law 119-103 still carries NFIP authorization
                through December 11, 2026 — a date to watch, not a reason
                to republish the shopping guide.
              </p>
              <p>
                A parked car in the garage is still{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive auto
                </Link>
                , never NFIP and never the HO-4. The{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 Citizens bind lift
                </Link>{" "}
                already reopened new and increased personal-lines coverage,
                including a new HO-4, after the Isaias freeze. A quiet
                outlook this Friday does not reopen a flood policy you
                never bought.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Seasonal Tenants, Snowbirds, and Who Is Not an HO-4
              </h2>
              <p>
                October is when winter leases start to print. A{" "}
                <Link
                  href="/resources/snowbird-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  snowbird who rents a 33160 unit for the season
                </Link>{" "}
                needs a tenant HO-4, not the owner’s HO-6 and not a
                northern renters policy that still names a New Jersey
                address. Florida’s 90-day presence test is an auto/PIP
                conversation. The lease insurance exhibit is the renters
                conversation. Bring both to the quote. A cheaper HO-4 that
                cannot certificate the association as the addendum requires
                is the wrong save.
              </p>
              <p>
                A unit advertised for nights is a different file. The city’s
                short-term vacation rental license, association consent, and
                guest-liability statement are not satisfied by a personal
                HO-4. Citizens’ December 1, 2026 forms still put a
                three-stay Business definition on HO-4 as well as HO-3 and
                HO-6. The wind-for-flood condition on those December forms
                does <em>not</em> apply to HO-4 — that is an owner-form
                problem. Do not mix the two. This rate-cut piece is for
                people who live in the unit, including for a winter season.
                It is not a hotel policy.
              </p>
              <p>
                The October 20 Citizens personal-lines assumption is next
                Tuesday. The choice deadline for that round was October 5
                and has passed. That calendar is mostly an HO-3 and HO-6{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  takeout
                </Link>{" "}
                conversation. A tenant HO-4 can still be a Citizens form;
                it is not this week’s 12.8% American Modern filing. If a
                Depopulation Packet is already in a unit owner’s mailbox,
                point them to the takeout guide rather than this page.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Renewal Checklist for ZIP 33160 Tenants
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Pull the declarations page before you shop the headline.
                  </strong>{" "}
                  Write down Coverage C, the liability limit, the
                  hurricane or named-storm deductible, the all-other-peril
                  deductible, loss-of-use, and any jewelry or scheduled
                  items. Ask every competing quote to match those lines,
                  then price differences in the open.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Confirm the cut is on your renewal, not last month’s
                    bulletin.
                  </strong>{" "}
                  October 11 is already in force for American Modern new
                  business and renewals. If you are with another writer, or
                  if the anniversary is November or December, request quotes
                  now so the bill is not the first time you see the number.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Match the lease additional-insured exhibit.
                  </strong>{" "}
                  A 12.8% average that cannot name the management company
                  or the association is not cheaper once keys are held.
                  Ask for the certificate language the addendum actually
                  uses.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Price contents flood on a second worksheet.
                  </strong>{" "}
                  NFIP’s 30-day wait from today misses the October 27
                  peak. An in-force flood policy, or a private form with a
                  documented binder date, is the live file.{" "}
                  <Link
                    href="/quote?type=flood"
                    className="text-ocean-500 hover:underline"
                  >
                    Start a flood conversation
                  </Link>{" "}
                  if the unit, the cage, or the garage storage still has
                  no flood layer.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep the car and the host listing off this sheet.
                  </strong>{" "}
                  Comprehensive auto covers king-tide water in the garage.
                  A live Airbnb calendar is a city license and a landlord
                  form. Neither is an HO-4 rate cut.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not drop coverage to manufacture a larger
                    percentage.
                  </strong>{" "}
                  Lower contents limits, a thinner liability grant, or a
                  higher hurricane deductible will make almost any renewal
                  look cheaper. That is a poor trade on a barrier island
                  that still has more than six weeks of hurricane season
                  left, through November 30.
                </li>
              </ul>
              <p>
                If you want a local reading of a Sunny Isles Beach renters
                renewal against this month’s OIR average — and against a
                contents-flood quote the rate cut never included — start a{" "}
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
                only when an insurer issues it. The October 2 OIR bulletin,
                National Hurricane Center outlooks and the 09 UTC October
                16 season summary, Miami-Dade ERM’s October 13 king-tide
                notice, SFWMD’s 2026 east-coast peak, NOAA Station 8723080
                predictions, and Citizens’ October 10 bind lift are public
                sources; an appointed agent still has to place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of any premium or
                  claim payment, or a recommendation of any carrier or
                  product. The Florida Office of Insurance Regulation’s
                  October 2, 2026 rental-insurance bulletin (American
                  Modern Home Insurance Company HO-4 average −12.8% /
                  approximately 121,898 exposures, effective October 11 for
                  new policies and renewals; some counties −13.1% to
                  −13.9%; Orange −13.4% and Broward −13.8% as the
                  company’s highest concentrations), National Hurricane
                  Center Tropical Weather Outlooks at 2 a.m. and 8 a.m.
                  EDT October 16, 2026, the North Atlantic summary as of
                  09 UTC October 16 (9 named storms / 1 hurricane / 1
                  major hurricane / ACE 18.0, 83% below the 1991–2020
                  normal), Miami-Dade ERM’s October 13, 2026 king-tide
                  windows, SFWMD’s east-coast annual peak of October 27,
                  NOAA Station 8723080 Haulover Pier predictions, Citizens’
                  October 10, 2026 binding-suspension lift, and Public Law
                  119-103’s NFIP authorization through December 11, 2026
                  are described as those agencies stated them as of this
                  writing. Eligibility, deductibles, waiting periods,
                  lease additional-insured rules, and required limits
                  depend on the actual policy, lease, and underwriting.
                  Review your documents and speak with a licensed Florida
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
                  label: "Renters Insurance in Sunny Isles Beach",
                  href: "/renters-insurance",
                  desc: "HO-4 coverage for belongings, liability, and loss of use.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "The how-to: contents flood, hurricane deductibles, and lease additional-insured rules.",
                },
                {
                  label: "Florida Homeowners Insurance Rate Cuts (2026)",
                  href: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
                  desc: "The September 22 dwelling-policy round is a different stack from this HO-4 filing.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "A cheaper HO-4 does not put a hotel on the NFIP contents form after surge.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Shop the flood layer on its own worksheet. A 30-day wait from today misses October 27.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A car in the garage is comprehensive — never the HO-4 or NFIP.",
                },
                {
                  label: "Snowbird Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/snowbird-insurance-sunny-isles-beach-2026",
                  desc: "A winter tenant still needs an HO-4 that names the Florida address and the lease exhibit.",
                },
                {
                  label: "Short-Term Rental Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/short-term-rental-insurance-sunny-isles-beach-2026",
                  desc: "A live listing is a city license and a landlord form — not this tenant rate cut.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "A new HO-4 can bind again. Contents flood remains a separate policy.",
                },
                {
                  label: "Citizens December 2026 Form Changes",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "HO-4 stays outside the wind-for-flood condition. The three-stay business definition still applies.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "Tenant HO-4 remains exempt from the statutory flood proof. Exemption is not a skip.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is still excluded from a standard HO-4 the same way it is from HO-3.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "July 1 HO-4 / HW-4 credit tables are a wind-premium story, not this rate filing.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for contents, separate from the renters decrease.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Renters Quote",
                  href: "/quote?type=renters",
                  desc: "Compare a 33160 HO-4 renewal against coverage — not only the statewide average.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the contents-flood layer the HO-4 decrease never included.",
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
            Renters Rate-Cut Questions for 2026
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
            Shop the HO-4 Renewal — Not Just the Headline
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a renters quote and we will help compare a Sunny Isles
            Beach HO-4 against lease wording, hurricane deductibles, and a
            contents-flood layer the October rate cut never included.
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
