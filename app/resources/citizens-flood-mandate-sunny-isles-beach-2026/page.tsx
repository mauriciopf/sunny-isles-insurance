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
  title: "Citizens Flood Mandate in Sunny Isles Beach | $400k Rule 2026",
  description:
    "Citizens requires flood for $400k+ Coverage A homes in 2026. HO-6 condos stay exempt. A Sunny Isles Beach guide to the mandate, the 2027 deadline, and NFIP’s Dec. 11 extension.",
  path: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does Citizens require flood insurance for a Sunny Isles Beach home in 2026?",
    answer:
      "If you have a Citizens personal-residential policy that includes wind, yes on a schedule. Homes in a FEMA Special Flood Hazard Area already had to carry flood. Homes outside that area with Coverage A (dwelling) of $400,000 or more have been in the mandate since January 1, 2026. Every remaining personal-residential wind policy joins at the first Citizens effective date on or after January 1, 2027. Two groups stay out: policies that exclude windstorm or hail, and condominium unit-owner (HO-6) policies.",
  },
  {
    question:
      "Does the Citizens flood mandate apply to a Collins Avenue condo (HO-6)?",
    answer:
      "No. Citizens currently states that condominium unit-owner policies are not required to buy flood as a condition of keeping Citizens. Tenant content policies and wind-excluded policies are also outside the statutory mandate. That legal exemption is not the same as “surge cannot reach the unit.” Storm surge is still generally excluded from HO-6. A separate flood policy is how a unit owner insures belongings and interior finishes against rising water, even when Citizens does not force the purchase.",
  },
  {
    question: "Did the National Flood Insurance Program expire on September 30, 2026?",
    answer:
      "No. President Trump signed H.R. 6500, the Continuing Appropriations and Extensions Act, 2027, on September 2, 2026. Section 139 of that act substitutes December 11, 2026, for September 30, 2026 in the National Flood Insurance Act’s authorization dates. The September 30 “cliff” warnings still circulating online are out of date. December 11 is the same date the broader continuing resolution ends, so NFIP’s next deadline rides with federal funding, not a standalone flood bill.",
  },
  {
    question:
      "If I am not in a high-risk flood zone, do I still need flood for Citizens?",
    answer:
      "Zone X does not automatically excuse you. For Citizens personal-residential wind policies, the $400,000 Coverage A threshold already applies outside the Special Flood Hazard Area. A federally backed mortgage typically requires flood only in AE, VE, and other SFHA zones. Citizens is a separate condition of keeping the wind policy. On a barrier island in ZIP 33160, a Zone X house can still flood from rainfall, backup, or a surge that reaches farther than the map’s 1% line.",
  },
  {
    question:
      "What proof does Citizens want, and how much flood coverage?",
    answer:
      "Citizens asks for proof of a qualifying NFIP or private flood policy plus a completed Policyholder Affirmation Regarding Flood Insurance (form CIT FW01). For dwelling policies, flood Coverage A generally needs to be at least the Citizens dwelling limit, or the maximum NFIP amount you are eligible for if the NFIP cap is lower — $250,000 dwelling in the Regular Program. Missing the packet can lead to nonrenewal of the Citizens policy, which is the wind coverage, not only the flood layer.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Citizens Flood Mandate in Sunny Isles Beach",
    href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-11";

export default function CitizensFloodMandateSunnyIslesArticle() {
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
                "Citizens Flood Insurance Mandate in Sunny Isles Beach in 2026: The $400k Rule and the 2027 Deadline",
              description:
                "A Sunny Isles Beach homeowners guide to Citizens’ $400,000 Coverage A flood mandate already in force, the January 1, 2027 remaining phase-in, the HO-6 exemption, and NFIP’s extension to December 11, 2026 during a record-quiet Atlantic peak.",
              path: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
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
            Citizens Flood Insurance Mandate in Sunny Isles Beach in 2026: The
            $400k Rule and the 2027 Deadline
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A record-quiet Atlantic peak does not pause Florida&rsquo;s flood
            condition for Citizens homeowners. The $400,000 Coverage A step is
            already in force. January 1, 2027 is next.
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
                Two clocks are running on a barrier island this week, and they
                are easy to mix up. The weather clock is unusually slow: as of
                September 11, 2026, the Atlantic has tied the satellite-era
                record for the latest first hurricane of a season, matching
                Gustav (2002) and Humberto (2013). The insurance clock is not
                slow. If you keep a Citizens{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                policy with wind coverage and Coverage A of $400,000 or more,
                Florida law already treats a separate{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood policy
                </Link>{" "}
                as a condition of that wind coverage — including in Zone X.
                Condo unit owners on Collins Avenue are usually in a different
                bucket. Read the form, not the forecast.
              </p>
              <p>
                The National Hurricane Center had listed five named storms
                through early September — Arthur, Bertha, Cristobal, Dolly, and
                Edouard — and zero hurricanes. El Niño wind shear is a large
                part of why the basin is quiet. Roughly 60% of a typical
                Atlantic season still occurs after September 10. Tropical Storm
                Edouard, which moved ashore near the Louisiana–Texas line on
                September 1, was a reminder that a system that never becomes a
                hurricane can still put water in buildings. None of that
                cancels a 30-day{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  NFIP waiting period
                </Link>
                , and none of it moves Citizens&rsquo; January 1, 2027 remaining
                phase-in.
              </p>
              <p>
                One other piece of circulating advice is already stale. The
                National Flood Insurance Program did not expire on September
                30. President Trump signed H.R. 6500, the Continuing
                Appropriations and Extensions Act, 2027, on September 2.
                Section 139 of that act substitutes December 11, 2026 for
                September 30, 2026 in the National Flood Insurance Act&rsquo;s
                authorization dates. You can still buy an NFIP policy this
                week. December 11 is the same date the broader continuing
                resolution ends, so the next NFIP deadline is tied to federal
                funding, not a special flood-only calendar. Do not wait for a
                lapse that already got patched — and do not treat December 11
                as a reason to skip the 30-day clock that starts when you
                actually bind.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Citizens Requires in 2026 vs. What Arrives in 2027
              </h2>
              <p>
                Citizens does not sell flood. Florida Statute 627.351(6)
                directs the corporation to require flood insurance as a
                condition of covering a personal-lines residential risk that
                includes wind. The legislature phased that in by dwelling
                replacement cost for properties outside FEMA&rsquo;s Special
                Flood Hazard Area, and it already required flood inside that
                area. Citizens&rsquo; published schedule, as of this writing:
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Inside the Special Flood Hazard Area (AE, VE, and related A/V zones)",
                    desc: "New Citizens personal-residential wind policies have needed flood since April 1, 2023. Renewals have needed it since July 1, 2023. On Collins Avenue and the oceanfront, AE (still water with a published base-flood elevation) and VE (coastal high hazard with wave action) are the maps most 33160 owners actually see. A federally backed mortgage usually requires flood in these zones whether or not Citizens is the wind carrier.",
                  },
                  {
                    title: "Outside the SFHA, Coverage A of $400,000 or more — in force now",
                    desc: "For policies effective on or after January 1, 2026, a Citizens dwelling valued at $400,000 or more must carry flood even in Zone X. That is the step that catches houses, townhomes, and some low-rise buildings that people assume are “not in a flood zone.” Coverage A on a Sunny Isles Beach or Golden Beach house is routinely above that number. The prior steps were $600,000 (2024) and $500,000 (2025).",
                  },
                  {
                    title: "All remaining personal-residential wind policies — January 1, 2027",
                    desc: "At the first Citizens new-business or renewal effective date on or after January 1, 2027, the dwelling-value test drops. Remaining personal-residential wind policies join the mandate regardless of Coverage A. That is the date a smaller inland house still on Citizens, or a modest Coverage A policy that squeezed under $400,000, has to show flood. Senate Bill 1024 (2026), which would have added more flood exemptions, died in the Banking and Insurance Committee on March 13, 2026. The statute still reads as Citizens publishes it.",
                  },
                  {
                    title: "Who is still exempt",
                    desc: "Citizens currently states that condominium unit-owner policies, tenant content policies, and policies that exclude windstorm or hail are not required to buy flood to stay eligible. Most occupied residences in Sunny Isles Beach are condos. The HO-6 exemption is the local fact people get backwards: the tower is in a flood zone; the unit-owner Citizens form is still not in the statutory mandate. A tenant HO-4 is a different exemption, covered in the renters guide.",
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
                If you are shopping a{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens takeout offer
                </Link>{" "}
                this fall, the assuming carrier does not inherit a flood
                policy you never bought. A new HO-3 or HO-6 declarations page
                is not proof of flood. Keep the flood layer on its own
                paperwork.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Collins Avenue Split: HO-3 Mandate vs. HO-6 Exemption
              </h2>
              <p>
                Sunny Isles Beach sits between Golden Beach and Haulover Inlet
                in Miami-Dade County&rsquo;s High-Velocity Hurricane Zone. The
                city has said nearly all of the island is in a flood zone. That
                geography is why{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  hurricane damage splits into wind, surge, and flood
                </Link>{" "}
                — and why the Citizens mandate is a homeowners conversation more
                often than a condo conversation.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Houses, townhomes, and dwelling policies (HO-3 / DP).
                  </strong>{" "}
                  If Citizens writes the wind and Coverage A is $400,000 or
                  more, flood is already a renewal condition. Adjacent Golden
                  Beach, North Miami Beach, and Aventura houses in the same
                  shopping conversation follow the same Citizens schedule even
                  when the mailbox is not 33160.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Condo unit owners (HO-6).
                  </strong>{" "}
                  The unit-owner form is currently outside the mandate.
                  Interior finishes, betterments, and belongings still need a
                  flood decision because an{" "}
                  <Link
                    href="/condo-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    HO-6
                  </Link>{" "}
                  generally excludes flood the same way an HO-3 does. The
                  association&rsquo;s master flood policy, if it exists, is
                  written for the building and common elements — not your
                  kitchen, furniture, or assessment after a surge.
                </li>
                <li>
                  <strong className="text-navy-800">Tenants (HO-4).</strong>{" "}
                  Citizens still treats tenant content policies as exempt. A
                  2023 bulletin pointed to January 1, 2027 for bringing those
                  policies into a later phase. Confirm the current Citizens
                  flood page before you treat 2027 as a reason to wait. Floor
                  level and garage storage still decide whether contents flood
                  is a good idea. That is the{" "}
                  <Link
                    href="/resources/renters-insurance-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    renters article
                  </Link>
                  , not this one.
                </li>
              </ul>
              <p>
                Do not borrow unincorporated Miami-Dade&rsquo;s Community
                Rating System number for a Sunny Isles Beach NFIP quote.
                Unincorporated Miami-Dade is Class 3 (a 35% NFIP discount for
                eligible policies). The City of Sunny Isles Beach has published
                a Class 8 rating, which is a 10% NFIP discount. The city&rsquo;s
                flood-risk portal and Floodplain Coordinator are how SIB is
                trying to improve that class; they do not change today&rsquo;s
                CID discount, and CRS does not make an HO-3 cover surge.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Proof, Limits, and Why Nonrenewal Is the Wind Problem
              </h2>
              <p>
                Citizens asks new and renewing policyholders who are in the
                mandate to send two things: proof of qualifying flood coverage,
                and a completed Policyholder Affirmation Regarding Flood
                Insurance (CIT FW01). A declarations page or a pending
                application with payment is the usual proof. The affirmation is
                the form that says, in writing, that you understand Citizens
                does not cover flood.
              </p>
              <p>
                For dwelling policies, flood Coverage A generally needs to equal
                or exceed the Citizens dwelling value. If the NFIP Regular
                Program cap ($250,000 on the building, $100,000 on contents) is
                lower than your Citizens Coverage A — which it will be on almost
                every $400,000-and-up house — Citizens accepts the maximum NFIP
                amount for which you are eligible. Private flood can sit above
                those caps, add replacement-cost wording, or shorten the wait.
                It has to match what Citizens will accept, not merely exist.
              </p>
              <p>
                Failure to show flood is a Citizens eligibility problem. The
                consequence people underestimate is losing the{" "}
                <em>wind</em> policy at renewal, not only going bare on surge.
                A flood-only notice can often be cured before the term ends;
                waiting until the week a named storm is in the Gulf is how
                households lose both the wait period and the renewal window.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why a Quiet Peak Is Still the Window to Bind
              </h2>
              <p>
                A standard NFIP policy has a 30-day waiting period before
                coverage begins, with narrow exceptions such as certain loan
                closings and map revisions. Buying flood the afternoon a watch
                is posted for Miami-Dade is usually too late for that storm.
                Private flood can offer a shorter wait; it is not automatically
                cheaper or broader.
              </p>
              <p>
                That is the useful version of this hurricane season, not the
                scary one. A basin that has not produced a hurricane by
                September 11 is historically rare. It is also the stretch when
                a 30-day clock can actually finish before the climatological
                late-season window. El Niño years still produce Gulf and East
                Coast storms; NOAA&rsquo;s seasonal forecasters have said as
                much. A quiet peak is not a closed season.
              </p>
              <p>
                Wind mitigation credits, roof age, and the April 2026
                OIR-B1-1802 form change the{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  wind portion of a premium
                </Link>
                . They do not substitute for flood. A 2% or 5% hurricane
                deductible on Coverage A is a wind conversation. Surge is a
                flood conversation. Mixing them is how a 33160 claim becomes
                two adjusters and one denial.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist for ZIP 33160
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Identify the form before the mandate.
                  </strong>{" "}
                  HO-3 / dwelling with wind, HO-6 unit-owner, HO-4 tenant, or
                  wind-excluded. Only the first group is clearly in the 2026
                  $400,000 rule. Confirm the declarations page, not a verbal
                  “I have Citizens.”
                </li>
                <li>
                  <strong className="text-navy-800">
                    Pull Coverage A and the flood zone separately.
                  </strong>{" "}
                  Citizens dwelling limit versus FEMA zone (AE, VE, X) versus
                  lender requirement. The city flood-risk portal is the local
                  starting point; Floodsmart.gov and a current elevation
                  certificate still matter for pricing.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you are in the mandate, send CIT FW01 and the flood
                    declarations.
                  </strong>{" "}
                  Match flood dwelling limits to Citizens&rsquo; rule or the
                  NFIP maximum. Do not assume a private form is accepted until
                  the agent confirms it.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you are HO-6 and exempt, still decide flood on geography.
                  </strong>{" "}
                  Ground-floor, lobby-level, parking storage, and lower-floor
                  finishes are the surge problem. A high floor still has
                  contents and betterments an HO-6 will not rebuild after
                  rising water.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Start the 30-day NFIP clock during this quiet peak.
                  </strong>{" "}
                  September 30 is no longer the NFIP expiration date.
                  December 11 is the next shared funding deadline. Neither date
                  is a substitute for binding.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not skip auto comprehensive because the house has flood.
                  </strong>{" "}
                  A parked car is not a dwelling item.{" "}
                  <Link
                    href="/auto-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    Comprehensive
                  </Link>{" "}
                  is what responds to flood or flying debris hitting the car.
                </li>
              </ul>
              <p>
                If you want a local reading of a Citizens homeowners
                declarations page against a flood quote — including whether
                Coverage A has already crossed $400,000, whether an HO-6 is
                correctly treated as exempt, and whether NFIP or private flood
                fits the CIT FW01 packet — start a{" "}
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
                when an insurer issues it. Citizens&rsquo; flood page,
                Floodsmart.gov, and the City of Sunny Isles Beach flood-risk
                portal are public; your appointed agent still has to place the
                policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any premium or claim
                  payment, or a recommendation of any carrier or flood
                  product. 2026 Atlantic hurricane-season statistics are
                  described as public National Hurricane Center and
                  meteorological summaries stated them as of this writing.
                  Citizens&rsquo; $400,000 Coverage A flood threshold (in force
                  January 1, 2026), the January 1, 2027 remaining
                  personal-residential phase-in, HO-6 / tenant / wind-excluded
                  exemptions, form CIT FW01, NFIP Regular Program caps, CRS
                  Class 8 for the City of Sunny Isles Beach, H.R. 6500&rsquo;s
                  December 11, 2026 NFIP extension, and the death of SB 1024
                  on March 13, 2026 are described as Citizens, FEMA, Congress,
                  the Florida Senate, and the City state them as of this
                  writing. Eligibility, deductibles, and required limits depend
                  on the actual policy, flood zone, and underwriting. Review
                  your documents and speak with a licensed Florida insurance
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
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood options for coastal properties.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The mandate says you must buy. This shopping guide compares $250k caps, waits, and ALE.",
                },
                {
                  label: "Collins Avenue Business Insurance (2026)",
                  href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
                  desc: "Commercial flood is a storefront decision — not the Citizens $400k homeowners rule.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability coverage for South Florida homes.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood is a separate policy from wind and HO-3.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood for Sunny Isles Beach properties.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "A takeout does not start a flood policy you never bought.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 is still outside the Citizens flood mandate.",
                },
                {
                  label: "Condo Insurance in Florida",
                  href: "/resources/condo-insurance-florida",
                  desc: "HO-6 unit-owner forms are currently exempt from the mandate.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "Wind credits do not substitute for flood coverage.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=flood",
                  desc: "Start a no-obligation flood or homeowners quote.",
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
            Citizens Flood Mandate Questions for 2026
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
            Review Flood Coverage Against a Citizens Policy
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a flood or homeowners quote and we will help match Coverage
            A, flood zone, and whether CIT FW01 applies — or whether an HO-6
            exemption still leaves a surge gap.
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
