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
  title: "Auto Insurance and King Tide Flooding in Sunny Isles Beach | 2026",
  description:
    "Tropical Storm Fay is a distant fish storm. King tides start Sept. 24. How Sunny Isles Beach drivers should read comprehensive vs PIP, garage flooding, and why NFIP never covers the car.",
  path: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does auto insurance cover king-tide flooding in Sunny Isles Beach?",
    answer:
      "Usually only if the policy includes comprehensive — also called other-than-collision — coverage. The Florida Department of Financial Services lists flood among the losses that coverage can pay for, along with fire, theft, windstorm, vandalism, falling objects, and colliding with an animal. PIP, property-damage liability, and collision do not pay for water damage to your own vehicle. A National Flood Insurance Program policy does not cover cars.",
  },
  {
    question:
      "If my car floods in a Collins Avenue garage, is that a flood-policy claim or an auto claim?",
    answer:
      "The car is an auto comprehensive claim. The garage structure, elevators, and common-area pumps sit on the association’s master property and flood forms. Water around a parked vehicle does not move the claim onto NFIP, a Citizens dwelling policy, or an HO-6. Photograph the stall, the water line, and the VIN, then call the auto carrier. Do not start the engine.",
  },
  {
    question:
      "Does Florida’s required auto insurance cover flood damage to my car?",
    answer:
      "No. Florida still requires Personal Injury Protection and $10,000 of property-damage liability for most passenger vehicles. Those coverages pay medical bills under the no-fault law and damage you cause to someone else’s property. They do not repair or replace your own car after king-tide, storm-surge, or street flooding. Comprehensive is optional unless a lender requires it on a financed or leased vehicle.",
  },
  {
    question:
      "Can I add comprehensive this week before the September 24 king tides?",
    answer:
      "Often yes, because Tropical Storm Fay is hundreds of miles from Florida and is not generating coastal watches. Miami-Dade is one of the counties where section 627.744 requires a physical-damage inspection before collision or comprehensive can be added. Carriers can also post a binding moratorium once a named storm threatens the peninsula. Confirm the inspection and the effective date before Thursday’s tide window, not after water is in the street.",
  },
  {
    question:
      "Will my insurer pay for a rental if king-tide water totals the car?",
    answer:
      "Only if rental reimbursement — sometimes labeled transportation expense — is on the declarations page. Comprehensive pays to repair the vehicle or, more often after saltwater intrusion, its actual cash value minus the deductible. A rental car is a separate optional limit, usually a daily cap and a maximum number of days. Check that line before the next high tide, not after the adjuster totals the vehicle.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Auto Insurance and King Tide Flooding in Sunny Isles Beach",
    href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-21";

export default function AutoInsuranceKingTideFloodSunnyIslesArticle() {
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
                "Does Auto Insurance Cover King Tide Flooding in Sunny Isles Beach in 2026?",
              description:
                "A Sunny Isles Beach auto guide for the September 24 king-tide window: comprehensive versus PIP, why NFIP never covers the car, Collins Avenue garage flooding, Miami-Dade physical-damage inspections, and what Tropical Storm Fay does — and does not — change.",
              path: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
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
              Auto Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Does Auto Insurance Cover King Tide Flooding in Sunny Isles Beach
            in 2026?
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Fay will not flood Collins Avenue. Thursday’s tide can still put
            salt water around a parked car. Comprehensive is the coverage that
            responds — not PIP, and not the flood policy on the building.
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
                Tropical Storm Fay became the Atlantic’s sixth named storm of
                2026 on Sunday, well southwest of the Azores. Overnight it
                brushed 70 mph — four miles an hour short of hurricane strength
                — then began to weaken. As of 8 a.m. EDT Monday, September 21,
                the National Hurricane Center and Florida forecast offices had
                it at 65 mph, drifting south-southeast, with a remnant low
                expected mid-week and dissipation by Friday. There are no
                coastal watches. Forecasters are calling it a fish storm. The
                basin still has not produced a hurricane, which broke the
                satellite-era record that had stood at September 11. None of
                that is a Miami-Dade landfall story. It is also not a reason to
                ignore the next clock on the island.
              </p>
              <p>
                The South Florida Water Management District’s 2026 east-coast
                king-tide calendar lists September 24–October 15 next — three
                days from this writing — with the annual maximum predicted peak
                on October 27. King tides are the highest astronomical tides of
                the year. On Sunny Isles Beach they regularly put sunny-day
                water on Collins Avenue, the side streets behind it, and the
                lowest levels of coastal parking garages. This site already
                published a{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  residential flood shopping comparison
                </Link>{" "}
                last week. That piece is about the house and the unit. This
                one is about the car in ZIP 33160: what{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  auto insurance
                </Link>{" "}
                actually pays when tide water reaches the rocker panels, and
                what it does not.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Building’s Flood Policy Never Covers the Car
              </h2>
              <p>
                Florida’s Department of Financial Services says it plainly in
                its natural-disaster consumer guide: a National Flood Insurance
                Program policy will not cover your personal automobile. File
                that claim with the auto carrier. The same split holds for a
                private flood form written under Florida Statute 627.715, for a
                Citizens dwelling policy, and for a standard{" "}
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
                contract. Those forms insure a building, contents inside the
                building, and — on some private flood versions — additional
                living expenses. A vehicle is not contents. A vehicle in a
                deeded garage stall is still a vehicle.
              </p>
              <p>
                That is why last week’s flood guide could mention a parked car
                in one sentence and stop. The coverage conversation is a
                different policy, a different deductible, and a different
                waiting-period rule. An NFIP policy generally waits 30 days.
                Comprehensive on an auto policy, once it is bound and any
                required inspection is done, typically follows the effective
                date on the declarations page — unless the carrier has posted a
                storm moratorium.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Florida Auto Insurance Actually Pays After Water
              </h2>
              <p>
                “Required coverage” in Florida is still a short list. Most
                registered passenger vehicles need Personal Injury Protection
                and $10,000 of property-damage liability. Bills that would have
                repealed the no-fault law in 2026 died in March.{" "}
                <Link
                  href="/resources/florida-auto-pip"
                  className="text-ocean-500 hover:underline"
                >
                  PIP
                </Link>{" "}
                pays a portion of your medical bills and lost wages after a
                crash. Property-damage liability pays the other person’s fence
                or car when you are at fault. Neither repairs your own vehicle
                after tide water, storm surge, or a flooded garage.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Comprehensive (other than collision) — the flood line",
                    desc: "The Florida Department of Financial Services lists flood among the losses comprehensive can cover, along with fire, theft, windstorm, vandalism, falling objects, and colliding with an animal. King-tide water in the street, salt water in an underground stall, and storm-surge standing water are the same coverage conversation if that coverage is on the policy and not excluded. A deductible applies. Windshield glass on a Florida comprehensive form is generally not subject to that deductible; a flooded engine is.",
                  },
                  {
                    title: "Collision — not the tide",
                    desc: "Collision pays when the car hits another vehicle, flips, or strikes an object other than an animal. Driving into a puddle on Collins Avenue does not convert a water loss into a collision loss. If you hydroplane and strike a median, that impact can be collision even if water contributed. Read the cause of loss. Do not assume “I was moving, so it is collision.”",
                  },
                  {
                    title: "Liability and PIP — other people, not your car",
                    desc: "Bodily injury liability is still not required to register a Florida vehicle. Property-damage liability is. Neither pays to dry out your own electronics after a king tide. A liability-only policy that looked cheap on a paid-off older car is, in ZIP 33160, a decision to self-insure flood damage to that car.",
                  },
                  {
                    title: "Rental reimbursement — a separate optional limit",
                    desc: "If salt water totals the vehicle, comprehensive pays actual cash value minus the deductible — not a new-car invoice, unless you bought a stated-value or replacement-cost endorsement. A rental while you wait is transportation expense / rental reimbursement. DFS describes it as a daily cap and a maximum number of days, and only after a covered loss. It is not automatic with comprehensive.",
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
                Lenders and lessors almost always require comprehensive and
                collision on a financed or leased vehicle. Owners who dropped
                those coverages to chase the 2026 rate decreases — Florida’s
                top-five auto groups were indicating about an 8% average cut —
                should look at the declarations page before Thursday, not the
                renewal premium.{" "}
                <Link
                  href="/resources/best-auto-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  A lower 2026 rate
                </Link>{" "}
                does not put flood coverage on a car that only has PIP and
                property-damage liability.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Collins Avenue Street Parking and High-Rise Garages Are
                Different Exposures
              </h2>
              <p>
                Sunny Isles Beach is a barrier island. Street parking along
                Collins Avenue, the 174th Street connector, and the low lots
                west of the boulevard sits inside the same Special Flood Hazard
                Area that shows as Zone AE on much of the strip — with VE wave
                pockets on the open Atlantic. King-tide water here is usually
                salt. Salt water in a modern car’s electronics, airbag modules,
                and wiring harness is why insurers often treat even a
                relatively shallow intrusion as a total loss at actual cash
                value, not a detail-shop bill.
              </p>
              <p>
                Underground and podium garages in the Collins Avenue condo
                towers add a second pattern: the car never left the building,
                and the water still arrived. The stall, the pumps, and the
                elevator pits are an association flood and master-policy
                conversation — including{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  special assessments
                </Link>{" "}
                if the deductible or a SIRS gap lands on unit owners. The
                vehicle in that stall remains an auto comprehensive claim.
                Photograph the water line against the tire, the stall number,
                and the odometer. Do not start the engine to “see if it runs.”
                Starting a flooded engine can convert a repairable car into a
                totaled one, and it can complicate the claim.
              </p>
              <p>
                Valet tickets and “park at your own risk” signs do not rewrite
                the insurance. If the association’s garage flooded from
                external tide or surge, the car still follows the auto policy.
                If a staff driver hit a column, that can be collision or a
                liability claim against the operator. Cause of loss matters
                more than where the keys were.
              </p>
              <p>
                Collector, exotic, and stated-value policies need a closer
                read than a standard personal-auto form. Some of those
                endorsements exclude flood, tides, tidal water, and storm
                surge even when the brochure says “comprehensive.” A 2024
                Middle District of Florida dispute over collector cars lost to
                Hurricane Helene surge turned on exactly that kind of
                endorsement. If the car in the garage is scheduled on a
                valuable-collections form, confirm the water wording before
                the next high tide — do not borrow a neighbor’s everyday auto
                policy as a stand-in.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Adding Comprehensive in Miami-Dade Is Not Instant
              </h2>
              <p>
                Section 627.744, Florida Statutes, requires a pre-insurance
                physical-damage inspection before a policy can include
                collision or comprehensive in several counties, including
                Miami-Dade (the statute still says “Dade”). The inspection
                documents existing damage so a new comprehensive layer is not
                asked to pay for old dings. Carriers commonly will not bind
                physical-damage coverage on a 33160 vehicle until that photo
                inspection is complete. Thursday’s tide window is three days
                away. That is enough time this week. It is not enough time on
                Wednesday afternoon if the inspector cannot reach the car.
              </p>
              <p>
                Binding moratoriums are the other delay. Once a tropical storm
                or hurricane watch or warning is posted for the area — or once
                a carrier’s bulletin names Florida — many companies will not
                add comprehensive, raise limits, or cut deductibles. Fay is
                not that bulletin. The National Hurricane Center had no other
                areas of interest in the Atlantic this morning. The next name
                on the list would be Gonzalo. El Niño shear is a large part of
                why this season is still quiet; NOAA still expected a
                below-normal year, and roughly half of a typical season’s
                named-storm activity still occurs after September 10. The
                season runs through November 30. A fish storm does not close
                the season. It also does not create a Miami-Dade moratorium by
                itself.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist Before September 24
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Read the declarations page, not the word “full coverage.”
                  </strong>{" "}
                  Confirm comprehensive is listed, note the deductible, and
                  confirm rental reimbursement if you cannot be without a car
                  after a garage flood. PIP and property-damage liability are
                  not a substitute.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If comprehensive is missing, start the 627.744 inspection
                    this week.
                  </strong>{" "}
                  Miami-Dade physical-damage coverage generally cannot be added
                  from a phone call alone. Fay’s distance from Florida is the
                  window; a later named storm that actually threatens the
                  peninsula may not be.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Plan the parking, not just the premium.
                  </strong>{" "}
                  Higher garage floors beat the lowest level during the
                  September 24–October 15 window and again around the October
                  27 predicted peak. Inland lots west of Biscayne Boulevard
                  beat Collins Avenue street parking on the highest tide days.
                  SFWMD’s weekly tidal outlook and Miami-Dade’s king-tide page
                  are the public calendars.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not drive through flooded Collins Avenue.
                  </strong>{" "}
                  Turn Around Don’t Drown is still the rule. A stalled engine
                  in salt water is a comprehensive claim if you have the
                  coverage; it is also a safety and a towing bill. Moving water
                  that then hits a median can split the loss between
                  comprehensive and collision.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If the car does take on water, do not start it.
                  </strong>{" "}
                  Photograph the water line, the location, and the VIN. Call
                  the auto insurer. Ask about towing to a dry lot. Saltwater
                  claims are often actual-cash-value totals; arguing with the
                  starter will not raise the ACV.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep the building claim and the car claim on separate
                    tracks.
                  </strong>{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    Flood insurance
                  </Link>{" "}
                  on the unit or the house still matters for interiors and, on
                  some private forms, additional living expenses. It will not
                  pay for the SUV.{" "}
                  <Link
                    href="/resources/hurricane-damage-home-insurance-sunny-isles"
                    className="text-ocean-500 hover:underline"
                  >
                    Wind, surge, and flood remain three different property
                    claims
                  </Link>
                  . The car is a fourth conversation.
                </li>
              </ul>
              <p>
                If you want a local reading of an auto declarations page
                against king-tide and garage-flood exposure in Sunny Isles
                Beach — including whether comprehensive is actually on the
                policy, whether a Miami-Dade inspection is still outstanding,
                and whether rental reimbursement would respond — start an{" "}
                <Link
                  href="/quote?type=auto"
                  className="text-ocean-500 hover:underline"
                >
                  auto quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>{" "}
                for the building. A quote request does not bind coverage.
                Coverage exists only when an insurer issues it. The Florida
                Department of Financial Services’ automobile toolkit, section
                627.744, Floodsmart.gov, and SFWMD’s 2026 king-tide calendar
                are public sources; an appointed agent still has to place the
                policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any premium or claim
                  payment, or a recommendation of any carrier or product. 2026
                  Atlantic hurricane-season statistics, Tropical Storm Fay’s
                  Monday, September 21, 2026 status as a weakening tropical
                  storm that peaked near 70 mph and poses no U.S. threat,
                  South Florida Water Management District 2026 east-coast
                  king-tide windows (September 24–October 15 next, with an
                  October 27 predicted annual peak), Florida’s PIP and $10,000
                  property-damage liability requirements, Florida Statute
                  627.744 physical-damage inspections in Miami-Dade, the
                  Florida Department of Financial Services’ description of
                  comprehensive as covering flood, and NFIP’s exclusion of
                  personal automobiles are described as those agencies and
                  statutes state them as of this writing. Eligibility,
                  deductibles, waiting periods, moratoriums, and required
                  limits depend on the actual policy, vehicle, lender, and
                  underwriting. Review your documents and speak with a licensed
                  Florida insurance professional about your situation.
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
                  label: "Auto Insurance in Sunny Isles Beach",
                  href: "/auto-insurance",
                  desc: "Liability, PIP, collision, comprehensive, and UM options for 33160 drivers.",
                },
                {
                  label: "Best Auto Insurance Options in Sunny Isles Beach in 2026",
                  href: "/resources/best-auto-insurance-sunny-isles-beach-2026",
                  desc: "Rate relief and how to compare coverage — not only the renewal premium.",
                },
                {
                  label: "Understanding Florida PIP",
                  href: "/resources/florida-auto-pip",
                  desc: "Required no-fault medical coverage still does not repair a flooded car.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The building’s $250k/$100k shopping guide — which still excludes the vehicle.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood is a separate property policy from wind and HO-3.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood for the building — separate from auto comprehensive.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for the house or unit, not the parked car.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 and contents flood for tenants — still not the car in the garage.",
                },
                {
                  label: "Collins Avenue Business Insurance (2026)",
                  href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
                  desc: "Storefront flood and business personal property are a different stack than a company car.",
                },
                {
                  label: "Request an Auto Quote",
                  href: "/quote?type=auto",
                  desc: "Check comprehensive, deductibles, and rental reimbursement before the next tide window.",
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
            Auto Flood and King Tide Questions for 2026
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
            Check Comprehensive Before the Next King Tide
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request an auto quote and we will help confirm whether
            comprehensive, the deductible, and rental reimbursement actually
            sit on a Sunny Isles Beach vehicle — separate from the building’s
            flood policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=auto"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get an Auto Quote
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
