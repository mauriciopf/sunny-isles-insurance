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
    "Snowbird Insurance in Sunny Isles Beach | Seasonal PIP & Vacancy 2026",
  description:
    "September 2026 closed with no Atlantic hurricane. How Sunny Isles Beach snowbirds should read vacant vs unoccupied HO-6, Florida’s 90-day PIP rule, and this week’s king tides.",
  path: "/resources/snowbird-insurance-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does a New York or New Jersey auto policy cover me if I drive in Sunny Isles Beach for the winter?",
    answer:
      "For a short visit, many out-of-state policies still respond to a crash in Florida. The trap is the 90-day clock. Florida Statute 627.733 requires a nonresident owner whose vehicle has been physically present in Florida for more than 90 days during the preceding 365 days — consecutive or not — to keep Florida no-fault security in force for as long as the car stays here. Florida Statute 324.022 applies the same 90-day test to $10,000 of property-damage liability. A northern “out-of-state coverage” clause generally does not convert the policy into Florida PIP. Count the days before the second trip south, not after a claim.",
  },
  {
    question:
      "If my Collins Avenue condo sits empty from May through October, is it vacant for insurance?",
    answer:
      "Usually not, if it remains furnished and you intend to return. Vacant and unoccupied are different words. A unit with furniture, kitchenware, and linens that you leave for the northern summer is typically unoccupied. A unit stripped of contents with no return date — a sale, an estate, a gut renovation — is vacant. Standard homeowners forms often limit vandalism and similar perils after 30 or 60 consecutive days of vacancy. Carrier endorsements can tighten that. Seasonal occupancy still has to be disclosed so the policy is rated as a second home, not as a primary residence you never occupy.",
  },
  {
    question:
      "Do I still need flood insurance on a Sunny Isles Beach condo I only use in winter?",
    answer:
      "The flood does not wait for you to land at MIA. Storm surge, king-tide street flooding, and other external water are excluded from a standard HO-6. The National Flood Insurance Program’s typical 30-day waiting period still applies to a voluntary purchase, and September’s hurricane shutout does not shorten it. If you cancel flood when you fly north and try to bind it in November, the next king-tide or late-season storm can arrive inside the wait. Citizens currently exempts HO-6 unit-owner policies from its statutory flood mandate; that exemption is not surge coverage.",
  },
  {
    question:
      "If I rent the unit on Airbnb in the summer, is it still a snowbird HO-6?",
    answer:
      "Often no. Short-term rental occupancy is a different underwriting question from seasonal personal use. Liability, contents, and loss-of-use wording can change, and some carriers will not write an HO-6 once the unit is a hotel substitute. Fair rental value on a homeowners or condo form is also not the same as additional living expenses for your own hotel. Tell the carrier the actual use before the first guest, not after a leak.",
  },
  {
    question:
      "Does a quiet Atlantic mean I can skip comprehensive on the car I leave in the building garage?",
    answer:
      "No. The National Hurricane Center’s September 30 advisory on Tropical Storm Hanna placed the center more than 1,200 miles east of Bermuda with no land threat, and September 2026 is closing without an Atlantic hurricane. That is weather. King-tide water on Collins Avenue is already on the local calendar — September 26–30 ends today, with October 7–13 and October 24–30 still ahead. Flooded cars are a comprehensive auto claim, never an NFIP claim. PIP does not repair the vehicle.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Snowbird Insurance in Sunny Isles Beach",
    href: "/resources/snowbird-insurance-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-30";

export default function SnowbirdInsuranceSunnyIslesArticle() {
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
                "Snowbird Insurance in Sunny Isles Beach in 2026: Seasonal Homes, Florida PIP, and Vacant Condos",
              description:
                "A Sunny Isles Beach guide to seasonal occupancy versus vacancy, Florida’s 90-day PIP and property-damage rules, and flood and garage risk as September 2026 closes with no Atlantic hurricane.",
              path: "/resources/snowbird-insurance-sunny-isles-beach-2026",
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
              Seasonal Residents
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Snowbird Insurance in Sunny Isles Beach in 2026: Seasonal Homes,
            Florida PIP, and Vacant Condos
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A record-quiet September does not rewrite occupancy, no-fault, or
            flood. The winter stack for a Collins Avenue condo is different
            from the policy you keep in the Northeast.
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
                Wednesday, September 30, the National Hurricane Center’s 9:00
                a.m. GMT advisory on Tropical Storm Hanna put the center about
                1,210 miles east of Bermuda, with 40 mph winds and a forecast
                to become a remnant low by tonight. No coastal watches. No
                Florida threat. Hanna is the eighth named storm of 2026. None
                of them reached 74 mph. September — the month that on average
                has already produced several hurricanes — is closing as a
                shutout. Public recaps put the last September without an
                Atlantic hurricane in 1994. The satellite-era record for the
                latest first hurricane of a season, September 11 in 2002 and
                2013, is already in the rearview. AccuWeather and others are
                now pointing at October 8, 1905, as the next date on the
                wall. That is weather. The insurance work this week is the
                snowbird calendar: flights south start in October, king tides
                are not finished, and a northern policy does not
                automatically become a Florida policy because Hanna is a
                fish storm.
              </p>
              <p>
                This site already explained{" "}
                <Link
                  href="/resources/florida-auto-pip"
                  className="text-ocean-500 hover:underline"
                >
                  how Florida PIP works for local drivers
                </Link>
                ,{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  why additional living expenses follow a covered peril
                </Link>
                , and{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  how HO-6 sits beside the association master policy
                </Link>
                . Those pieces assume you live here. This one is for the
                part-year resident — the New York, New Jersey, Ontario, or
                São Paulo household that keeps a unit in ZIP 33160, leaves it
                furnished from May to November, and drives or ships a car
                onto Collins Avenue when the heat breaks.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Vacant Is Not Unoccupied
              </h2>
              <p>
                The word that gets snowbirds in trouble is “vacant.” On most
                homeowners and condo forms, vacant means the place is
                substantially empty of contents and no one intends to live
                there on a set schedule — a house for sale, a probate estate,
                a unit gutted for renovation. Unoccupied means the furniture
                is still there, the kitchen still looks like a kitchen, and
                you intend to come back. A furnished Collins Avenue HO-6 that
                you leave for six northern months is usually unoccupied, not
                vacant. That distinction is why a standard vacancy clause —
                often 60 consecutive days on unendorsed ISO language, 30 days
                on some Florida filings — is not automatically a six-month
                coverage holiday.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Disclose seasonal occupancy up front",
                    desc: "Carriers rate a second home differently from a primary residence. If the application said you live in the unit year-round and the claims file shows six months of mail in Paramus, that is a misrepresentation conversation, not a technicality. Ask for the seasonal or secondary-residence underwriting, not a cheaper primary-home rate you cannot support.",
                  },
                  {
                    title: "Read the actual vacancy endorsement",
                    desc: "Some Florida carriers add manuscript language that treats long absence as vacancy, or that suspends water damage, theft, or vandalism after a stated number of days even when furniture remains. ISO’s 60-day vandalism example is not a promise your form matches it. Pull Section I conditions and every endorsement before you book the flight north.",
                  },
                  {
                    title: "Empty for sale is a different policy",
                    desc: "If you strip the unit to sell it, or you leave it mid-renovation with no contents, you have likely crossed into vacancy. Many admitted homeowners markets will non-renew and the risk moves to a dwelling or vacant-home form, often named-peril and actual cash value. A vacancy permit, if the carrier offers one, has dates and monitoring requirements. Bind it before the truck leaves, not after the leak.",
                  },
                  {
                    title: "Short-term rental is not snowbird use",
                    desc: "Listing the unit on a vacation-rental site while you are away is occupancy by guests, not seasonal personal use. Liability, contents, and loss-of-use can change. Some HO-6 markets will not write it. Fair rental value is a different sentence from additional living expenses for your own hotel — the loss-of-use guide on this site is that split, not this one.",
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
                Most of ZIP 33160 is high-rise condominium. The{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                still has to name the right occupancy. The association master
                policy does not become your contents, liability, or loss-of-use
                policy because you only sleep here in February. A{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  special assessment
                </Link>{" "}
                for building repairs arrives whether you are in the building
                or not. Houses and townhomes west of Collins Avenue, and in
                adjoining 33180, are the{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-3
                </Link>{" "}
                version of the same conversation: seasonal occupancy on the
                application, water shutoffs and leak sensors if the carrier
                asks for them, and a wind-mitigation file that still matters
                in the High Velocity Hurricane Zone even when Hanna is a
                remnant low.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The 90-Day Clock on the Car
              </h2>
              <p>
                Florida is a no-fault state.{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  Auto insurance
                </Link>{" "}
                here is not “whatever my New Jersey card already says.” Florida
                Statute 627.733 requires every nonresident owner or registrant
                of a motor vehicle that has been physically present in this
                state — whether operated or not — for more than 90 days during
                the preceding 365 days to maintain Florida personal injury
                protection continuously while the vehicle remains here. The
                days do not have to be consecutive. Six weeks in December and
                six weeks in March is 84 days; add a long weekend in April
                and you have crossed the line. Florida Statute 324.022 applies
                the same 90-day presence test to at least $10,000 of property
                damage liability.
              </p>
              <p>
                The security has to be a policy issued or delivered in Florida
                by an authorized or eligible motor vehicle insurer that
                actually provides the PIP benefits in sections 627.730 through
                627.7405. A northern “out-of-state coverage” or “broadening”
                clause is not a substitute. Florida PIP still pays 80 percent
                of medically necessary expenses and 60 percent of lost wages,
                up to a $10,000 combined limit, and treatment generally has to
                start within 14 days of the crash. Those mechanics are in our{" "}
                <Link
                  href="/resources/florida-auto-pip"
                  className="text-ocean-500 hover:underline"
                >
                  PIP explainer
                </Link>
                . The snowbird question is whether you are on a Florida form
                at all once the odometer and the calendar say you live here
                for a season.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Garaging address is underwriting, not a nickname.
                  </strong>{" "}
                  If the car sleeps in a 18000-block Collins Avenue garage
                  from November through April, the policy that still lists a
                  Long Island driveway is describing the wrong risk. Insurers
                  deny claims for misrepresented garaging. Seasonal or
                  two-state programs exist at some carriers; they have to be
                  asked for, not assumed.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Comprehensive is the king-tide policy for the car.
                  </strong>{" "}
                  Today is the last day of the September 26–30 king-tide
                  window that Miami Beach’s tidal calendar listed for 2026.
                  The next windows are October 7–13, with a high predicted
                  stand around October 10, and October 24–30, with the
                  highest predicted tides around October 26–27. The South
                  Florida Water Management District’s east-coast outlook
                  still runs September 24–October 15, then October 22–November
                  12, with the predicted annual peak on October 27. Street
                  water and a flooded garage stall are{" "}
                  <Link
                    href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    comprehensive auto claims
                  </Link>
                  . NFIP never covers the personal automobile. PIP never
                  repairs it.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Miami-Dade physical-damage inspections still exist.
                  </strong>{" "}
                  Florida Statute 627.744 can require a physical-damage
                  inspection before adding comprehensive or collision. Do not
                  wait until the week the car comes off the transport to
                  discover the photo is missing.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Flood Does Not Hibernate When You Fly North
              </h2>
              <p>
                A quiet Atlantic is a shopping window. It is not a flood
                holiday. External water — storm surge, king-tide flooding,
                rainfall that overwhelms drains — is excluded from a standard{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>
                , HO-6, or{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  renters
                </Link>{" "}
                form. The building can be dry on the 32nd floor and the
                ground-floor garage still under salt water. The{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                stack is the same one year-round residents use: NFIP or
                private flood under Florida Statute 627.715, contents limits
                that match what you actually leave in the unit, and a waiting
                period that does not care that Hanna is east of Bermuda.
              </p>
              <p>
                NFIP’s typical 30-day wait still applies to a voluntary
                purchase. If you cancel flood in May to “save the premium”
                and try to bind it when you land in November, you can sit
                inside the wait through the late-October tide peak. Private
                flood often binds faster, commonly on the order of 10 to 15
                days, but that is a market fact, not a statute. The{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP versus private shopping guide
                </Link>{" "}
                is the cap-and-wait comparison. This piece is the occupancy
                calendar: do not treat a second home as a reason to drop
                flood.
              </p>
              <p>
                Citizens currently exempts condominium unit-owner policies
                from its statutory flood mandate. Houses with wind coverage
                and Coverage A at or above the phased thresholds — $400,000
                outside a Special Flood Hazard Area already in 2026, remaining
                personal-residential wind policies on January 1, 2027 — are a
                different{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  mandate conversation
                </Link>
                . Snowbirds in a west-of-Collins house should not confuse the
                HO-6 exemption with an HO-3 exemption. Zone X is not a
                hall-pass on that statute.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Loss of Use, Jewelry, and Who Is on the Lease
              </h2>
              <p>
                If wind makes the unit uninhabitable while you are in town,{" "}
                <Link
                  href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Coverage D additional living expenses
                </Link>{" "}
                can pay the extra cost of a hotel — after a covered peril,
                after the hurricane deductible math, and never on the NFIP
                Dwelling Form. If you are in New Jersey when the roof opens,
                you may not have extra living costs at all. Fair rental value
                is the sentence for a unit you rent to someone else. Seasonal
                occupancy endorsements can change both. Read them before the
                storm, not in the hotel lobby in Aventura.
              </p>
              <p>
                Contents limits on an HO-6 should match what actually travels
                south: watches, jewelry, art, and electronics that sit in a
                unit empty for half the year. Unscheduled jewelry is often
                tightly sublimited. A scheduled personal-property endorsement
                is a separate conversation from the master policy’s building
                coverage. Tenants who snowbird in a leased apartment need an{" "}
                <Link
                  href="/resources/renters-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  HO-4
                </Link>
                , contents flood if they want it, and whatever additional
                insured or certificate the lease demands. Owners who
                occasionally host family should not confuse a houseguest with
                a paying tenant.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Pre-Flight Checklist for ZIP 33160
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Count Florida days on the car before the second trip.
                  </strong>{" "}
                  Ninety days in a 365-day window, consecutive or not,
                  triggers Florida PIP and $10,000 property-damage liability
                  on a nonresident vehicle that remains here. Start a{" "}
                  <Link
                    href="/quote?type=auto"
                    className="text-ocean-500 hover:underline"
                  >
                    Florida auto quote
                  </Link>{" "}
                  if the calendar is close, and put the Collins Avenue garage
                  on the application if that is where the car sleeps.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Put seasonal occupancy on the property application in
                    writing.
                  </strong>{" "}
                  Furnished and coming back is usually unoccupied, not
                  vacant. Empty for sale or renovation is a different form.
                  Ask the carrier what monitoring, leak sensors, or water
                  shutoffs the seasonal program requires.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Leave flood in force through the off-season.
                  </strong>{" "}
                  The 30-day NFIP wait does not pause because September had
                  no hurricane. Bind{" "}
                  <Link
                    href="/quote?type=flood"
                    className="text-ocean-500 hover:underline"
                  >
                    flood
                  </Link>{" "}
                  against the October 7–13 and October 24–30 tide windows,
                  not against Hanna’s remnant low.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep comprehensive on a car that sits at grade or in a
                    low garage.
                  </strong>{" "}
                  King-tide water is salt water. Actual cash value, not
                  replacement cost, is the usual settlement. Wash the car
                  with fresh water if you do drive through it — that is
                  maintenance, not a coverage grant.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Match contents and loss-of-use to how you actually live.
                  </strong>{" "}
                  Schedule the jewelry that travels. Read Coverage D if you
                  would need a hotel in season. Do not treat a summer
                  vacation rental as a snowbird HO-6.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Leave the fish storms off the claim file.
                  </strong>{" "}
                  Hanna, Gonzalo, and Fay did not start a Miami-Dade
                  hurricane deductible. The season still runs through
                  November 30. A September shutout is a record. It is not
                  proof that ZIP 33160 is out of the High Velocity Hurricane
                  Zone.
                </li>
              </ul>
              <p>
                If you want a local reading of seasonal occupancy on a Sunny
                Isles Beach HO-6 or HO-3 — and a Florida auto quote that
                actually includes PIP once the 90-day clock is in view —
                start a{" "}
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
                , or an{" "}
                <Link
                  href="/quote?type=auto"
                  className="text-ocean-500 hover:underline"
                >
                  auto quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. National Hurricane Center
                public products on Tropical Storm Hanna (AL082026) as of
                September 30, 2026, public recaps of an eight-storm season
                with no hurricane and a September shutout, Miami-Dade and
                Miami Beach 2026 king-tide calendars, SFWMD’s 2026 east-coast
                tidal outlook, Florida Statutes 627.733 and 324.022, and the
                Florida Office of Insurance Regulation’s public rate
                environment are described as those agencies and outlets
                stated them as of this writing; an appointed agent still has
                to place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of any premium or
                  claim payment, or a recommendation of any carrier or
                  product. Seasonal occupancy, vacancy, unoccupancy, second-home
                  underwriting, Florida no-fault security, flood waiting
                  periods, and king-tide auto claims depend on the actual
                  policy and the facts of the risk. Florida Statutes 627.733
                  and 324.022, the National Hurricane Center’s September 30,
                  2026 Tropical Storm Hanna advisory (approximately 1,210
                  miles east of Bermuda, 40 mph, remnant low expected by that
                  night, no coastal watches), public reporting that 2026 has
                  produced eight named Atlantic storms and no hurricane as of
                  September 30 with September closing as a hurricane shutout,
                  a drought measured from Hurricane Melissa (October 13,
                  2025), Miami Beach and Miami-Dade 2026 king-tide windows
                  including September 26–30, October 7–13, and October
                  24–30, and SFWMD’s 2026 east-coast outlook including
                  September 24–October 15 with a predicted annual peak on
                  October 27 are described as those agencies and outlets
                  stated them as of this writing. Eligibility, deductibles,
                  waiting periods, and required limits depend on the property,
                  the vehicle, and underwriting. Review your documents and
                  speak with a licensed Florida insurance professional about
                  your situation.
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
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 still has to name seasonal occupancy. The master policy is not your winter contents policy.",
                },
                {
                  label: "Auto Insurance in Sunny Isles Beach",
                  href: "/auto-insurance",
                  desc: "Florida PIP and garaging are the snowbird auto stack, not a northern ID card.",
                },
                {
                  label: "Understanding Personal Injury Protection (PIP)",
                  href: "/resources/florida-auto-pip",
                  desc: "How the $10,000 no-fault benefit, 14-day rule, and 80/60 split work once you are on a Florida form.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "A car in a Collins Avenue garage is comprehensive — never NFIP — when the tide comes in.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "Fair rental value and your own hotel are neighboring sentences. Seasonal endorsements can change both.",
                },
                {
                  label: "What Does Condo Insurance Cover in Florida?",
                  href: "/resources/condo-insurance-florida",
                  desc: "Unit, belongings, and liability versus the association master policy.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "Seasonal tenants need HO-4, contents flood, and whatever additional insured the lease names.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Do not drop flood in May and try to beat a 30-day wait in November.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims even when you are only here in winter.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "HO-3 seasonal occupancy for houses and townhomes west of Collins Avenue.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "External water does not pause because the unit is unoccupied.",
                },
                {
                  label: "Best Auto Insurance Options in Sunny Isles Beach",
                  href: "/resources/best-auto-insurance-sunny-isles-beach-2026",
                  desc: "Compare Florida coverage — not only the northern premium — once the car is garaged in 33160.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Condo Quote",
                  href: "/quote?type=condo",
                  desc: "Match seasonal occupancy, contents, and loss of use on the HO-6.",
                },
                {
                  label: "Request an Auto Quote",
                  href: "/quote?type=auto",
                  desc: "Ask whether Florida PIP is in force before the 90-day clock runs out.",
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
            Snowbird Insurance Questions for 2026
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
            Get the Winter Stack Right Before You Land
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a condo, homeowners, or auto quote and we will help
            compare seasonal occupancy, Florida PIP, and flood that does not
            pause when you fly north.
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
