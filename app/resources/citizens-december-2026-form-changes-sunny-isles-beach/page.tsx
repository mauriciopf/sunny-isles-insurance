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
    "Citizens Dec 2026 Form Changes in Sunny Isles Beach | Wind & Flood",
  description:
    "Citizens’ Dec. 1, 2026 forms can drop wind coverage if required flood lapses. A Sunny Isles Beach guide to the 14-day authorization, HO-6 exemptions, and short-term rentals.",
  path: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
});

const faqs = [
  {
    question:
      "If my Citizens flood policy lapses, can I still collect on a hurricane wind claim in Sunny Isles Beach?",
    answer:
      "Starting with new and renewal personal-lines policies effective December 1, 2026, Citizens added a Flood Insurance condition: if you were required to carry flood, Citizens verified that flood at issue or renewal, and the required flood is not in force at the level Florida law requires on the date of a wind loss, the policy may provide no coverage for that wind-related loss. That is a wind-claim problem, not only a flood-claim problem. Keep the flood policy current, and keep the proof. This condition does not apply to HO-4, HO-6, HW-4, HW-6, or DW-6 forms.",
  },
  {
    question:
      "Does the December 1, 2026 Citizens flood-and-wind form apply to a Collins Avenue condo (HO-6)?",
    answer:
      "The new Flood Insurance condition, the 14-day flood-document authorization, and the declarations flood statement do not apply to HO-4, HO-6, HW-4, HW-6, or DW-6. Most Collins Avenue unit owners on a Citizens HO-6 are outside that wind-for-flood trade. They are still outside Citizens’ statutory flood mandate. Storm surge is still generally excluded from HO-6. A separate flood policy is how you insure finishes and belongings against rising water. The same December 1 package does change the HO-6 business definition for short-term rentals — that part is not an HO-6 exemption.",
  },
  {
    question:
      "What is the 14-day Citizens flood-document authorization?",
    answer:
      "If Citizens or its representative asks you to sign the Authorization To Release Flood Insurance Policy Documents and Information, the December 1, 2026 forms give you 14 days from delivery to return it. Failure to return the signed form may preclude coverage for any wind loss. Duties After Loss also adds a request to sign and return the authorization within a specified timeframe. Those duties do not apply to HO-4, HO-6, HW-4, and HW-6. A king-tide week is a poor week to leave that envelope on the kitchen counter.",
  },
  {
    question:
      "Can I list my Sunny Isles Beach house on Airbnb and keep a Citizens HO-3?",
    answer:
      "The December 1, 2026 HO-3, HO-4, HO-6, and HO-8 forms amend the Business definition and the Section II Business exclusion. Renting or leasing the insured location to guests more than three times in a calendar year for periods of less than 30 days or one calendar month, whichever is less, or holding the location out to the public as a place regularly rented to guests, is treated as a business use. Guests of a home-sharing occupant are excluded from Roomer, Boarder, Tenant, or Guest. Occasional family stays are not the same as a listing. A furnished snowbird house that sits empty is an occupancy question. A listing calendar is a different form.",
  },
  {
    question:
      "Is the new Wind-Driven Rain Damage Important Notice extra coverage?",
    answer:
      "No. WDR1 12 26 is a notice Citizens is adding to new and renewal personal-residential packages that include wind coverage. It flags that wind-driven rain is not the same loss as flood or storm surge. Impact glass and a quiet October do not convert king-tide street flooding on Collins Avenue into a wind claim. Read the notice against your declarations page and a separate flood policy. Do not treat a notice as a grant of coverage that was not already in the form.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Citizens December 2026 Form Changes in Sunny Isles Beach",
    href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
  },
];

const dateModified = "2026-10-05";

export default function CitizensDecember2026FormChangesArticle() {
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
                "Citizens December 2026 Form Changes in Sunny Isles Beach: Wind Coverage, Flood Proof, and Short-Term Rentals",
              description:
                "A Sunny Isles Beach guide to Citizens’ December 1, 2026 personal-lines forms — wind coverage that can fail if required flood lapses, the 14-day flood-document authorization, HO-6 exemptions, and new short-term rental definitions.",
              path: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
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
            Citizens December 2026 Form Changes in Sunny Isles Beach: Wind
            Coverage, Flood Proof, and Short-Term Rentals
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A quiet 2026 Atlantic is not a reason to let a required flood
            policy lapse. On December 1, Citizens’ personal-lines forms can
            treat that lapse as a wind-claim problem for houses — and they
            rewrite how often you can list a 33160 address to guests.
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
                Monday morning, October 5, the National Hurricane Center’s 8
                a.m. EDT Atlantic outlook finally had a Gulf map to talk
                about. Forecaster Kelly described a trough of low pressure in
                the southwestern Gulf of America producing disorganized
                showers and thunderstorms. Formation chance through 48
                hours: low, 30 percent. Through seven days: high, 70 percent.
                A tropical depression is likely to form during the middle or
                latter portion of the week, drifting eastward before turning
                northward. No coastal watches. No named storm. The next
                Atlantic name is still Isaias. Eight named storms — Arthur
                through Hanna — and still zero hurricanes. AccuWeather’s
                latest-first-hurricane marker, October 8, 1905, is three days
                from this morning.
              </p>
              <p>
                That is the weather. The paperwork that actually changed last
                week is not a cone. On October 1, Citizens Property Insurance
                Corporation posted that the Office of Insurance Regulation
                had approved updates to personal-lines policy forms, effective
                for new and renewal business as of December 1, 2026. Two of
                those updates matter on a barrier island in ZIP 33160. First:
                if Florida law requires you to keep flood insurance as a
                condition of Citizens wind coverage, and that flood is not in
                force at the required level on the date of a wind loss,
                Citizens may provide no coverage for the wind-related loss.
                Second: listing the house — or the unit — to short-term
                guests more than three times in a calendar year is written
                into the Business definition.
              </p>
              <p>
                This is not a rewrite of{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens’ $400,000 flood mandate and the 2027 remaining
                  phase-in
                </Link>
                . That guide is about having to buy flood to keep the wind
                policy. This one is about what the December 1 form does if
                the flood you already bought is not there when the wind
                claim arrives. It is also not a rewrite of{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  the October 20 takeout / October 5 choice-deadline guide
                </Link>
                . Today is that choice deadline for anyone who still has an
                open Offer Form. Register the choice on the packet. Then
                read the December 1 forms against whichever company actually
                writes the renewal.
              </p>
              <p>
                King tides have not left. The South Florida Water Management
                District’s east-coast window of September 24 through October
                15 is still open. Miami-Dade’s enhanced tidal forecast still
                lists October 7–13, with the highest predicted tide around
                October 10. The east-coast annual peak remains October 27,
                inside the October 22–November 12 window. Those tides are a{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                claim. A Gulf depression that never reaches 74 mph can still
                put wind-driven rain against a west-of-Collins house. The
                December 1 forms are how Citizens is telling you not to mix
                those files.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Mandate vs. the December 1 Condition
              </h2>
              <p>
                Sunny Isles Beach sits in Miami-Dade’s High-Velocity
                Hurricane Zone, on a barrier island between Golden Beach and
                Haulover Inlet. Houses and low-rise attached homes west of
                Collins Avenue, and in adjoining 33180, are the buildings
                that typically carry a Citizens HO-3 or dwelling form with
                wind. High-rises along Collins Avenue (A1A) are usually{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                unit policies beside an association master policy.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "The 2026 flood mandate (already in force)",
                    desc: "Florida Statute 627.351(6) requires flood as a condition of Citizens personal-residential wind coverage. Homes in a FEMA Special Flood Hazard Area already had to carry it. Homes outside that area with Coverage A of $400,000 or more have been in the mandate since January 1, 2026. Remaining personal-residential wind policies join at the first Citizens effective date on or after January 1, 2027. Citizens does not sell flood. Proof is typically an NFIP or private flood policy plus CIT FW01.",
                  },
                  {
                    title: "The December 1, 2026 Flood Insurance condition (new)",
                    desc: "A new Section I and II condition tells required-flood policyholders that no coverage may be provided for wind-related losses if Citizens verified flood at issue or renewal and the required flood is not in force on the date of the wind loss. The declarations page will print that statement. CIT FW01 12 26 is amended so you acknowledge you have secured flood and will maintain it through the policy term and any renewal terms.",
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
                Those are two different failures. Missing the mandate packet
                can lead to nonrenewal of the Citizens wind policy. Letting
                flood lapse after Citizens already verified it can, on a
                December 1 form, leave you with a wind deductible and no
                wind check — on a house that still has a hurricane
                percentage deductible on the declarations page. Review{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  how wind, surge, and flood split on a Sunny Isles Beach
                  claim
                </Link>{" "}
                before you treat a quiet October as permission to cancel
                flood and “buy it back later.”
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Declarations Page Will Say
              </h2>
              <p>
                Citizens’ October 1 bulletin quotes the new declarations
                flood-coverage statement in full. It is worth reading once
                without a broker’s paraphrase:
              </p>
              <blockquote className="border-l-4 border-ocean-400 bg-sand-50 rounded-r-xl px-5 py-4 text-sm text-navy-700 italic">
                If you are required to secure and maintain flood insurance as
                a condition of coverage with us under Florida law, this
                Policy may not provide coverage for any wind related losses
                when a wind loss occurs during the Policy period for which we
                have verified that you have flood insurance at the time your
                Policy was issued or renewed and flood insurance was not in
                force at the level of coverage required by Florida law on the
                date of the wind loss.
              </blockquote>
              <p>
                “May not provide coverage for any wind related losses” is
                the sentence. Not “we will send a reminder.” Not “we will
                nonrenew next year.” The trigger is a verified flood policy
                at issue or renewal that is not in force, at the required
                level, on the date of the wind loss. For dwelling policies,
                that required level is generally the Citizens dwelling
                limit, or the maximum NFIP amount you are eligible for if
                the federal cap is lower — $250,000 dwelling in the Regular
                Program. A private or supplemental flood policy can fill a
                house above that cap; see{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  how NFIP caps, waiting periods, and private flood compare
                  in 33160
                </Link>
                . The National Flood Insurance Program’s typical 30-day
                waiting period is unchanged. Canceling flood on October 5
                because the Gulf is only a trough does not get you a bound
                NFIP policy for a mid-week depression.
              </p>
              <p>
                This declarations update does not apply to HO-4, HO-6,
                HW-4, HW-6, or DW-6. If you rent a Collins Avenue unit, or
                own one on an HO-6, the new wind-for-flood sentence is not
                your form. It is the house west of Collins, and many
                townhomes and dwellings that carry Citizens wind, that need
                the calendar reminder.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The 14-Day Authorization Is a Wind Condition
              </h2>
              <p>
                Citizens is not only asking you to keep flood. It is asking
                for permission to see the flood file. Under Section I Duties
                After Loss, a condition requires the insured, upon request,
                to sign and return the Authorization To Release Flood
                Insurance Documents And Information. Under the new Flood
                Insurance condition, if Citizens or a representative
                delivers that authorization, you have 14 days from the date
                of delivery to return the signed form. Failure to return it
                may preclude coverage under the policy for any wind loss.
              </p>
              <p>
                Those duties do not apply to HO-4, HO-6, HW-4, and HW-6.
                They do apply to the HO-3 and similar dwelling forms that
                already sit inside the statutory flood mandate. A snowbird
                who homesteaded in the Northeast and forwards mail slowly
                should treat the 14-day clock as a reason to keep a Florida
                contact on the file — occupancy, PIP, and vacant versus
                unoccupied questions are{" "}
                <Link
                  href="/resources/snowbird-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  a separate seasonal-resident stack
                </Link>
                , but a missed authorization is a wind-claim stack.
              </p>
              <p>
                Practical steps before a December 1 renewal, or before a
                Gulf system has a name:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Confirm flood is in force at the required limit.
                  </strong>{" "}
                  Match the flood declarations to the Citizens dwelling
                  limit, or to the NFIP maximum you can buy. A $400,000
                  Coverage A house with a $150,000 NFIP dwelling limit is
                  not automatically “in force at the level required.”
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep CIT FW01 current.
                  </strong>{" "}
                  The 12 26 edition is amended to say you will maintain
                  flood through this term and any renewal. Do not sign it
                  and then cancel flood in May.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Return the authorization in 14 days.
                  </strong>{" "}
                  Photograph the signed form. If you are north of 33160
                  when it arrives, have someone who can sign under a
                  power of attorney, or overnight it yourself. Silence is
                  not a coverage grant.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not wait out a named storm to restart flood.
                  </strong>{" "}
                  NFIP’s 30-day wait, and a private-flood wait that is
                  often 10–15 days, both start when you bind — not when
                  the NHC raises a 70 percent seven-day number.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Wind-Driven Rain Is a Notice, Not a Flood Policy
              </h2>
              <p>
                Citizens is adding a Wind-Driven Rain Damage Important
                Notice, WDR1 12 26, to all new and renewal personal
                residential packages that include wind coverage. A notice
                is not a new insuring agreement. It is a flag that rain
                pushed by wind through a failed opening is a different
                conversation from water that rises from Biscayne Bay,
                Indian Creek, or Collins Avenue during a king tide.
              </p>
              <p>
                Opening protection, roof-to-wall clips, and secondary water
                resistance still belong on the{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  OIR-B1-1802 wind-mitigation file
                </Link>
                . They do not insure storm surge. They do not insure
                sunny-day flooding on October 10. A homestead west of
                Collins that still qualifies for{" "}
                <Link
                  href="/resources/my-safe-florida-home-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  a My Safe Florida Home inspection or grant
                </Link>{" "}
                can harden the envelope and still need a flood policy that
                stays in force if Citizens is the wind carrier. Windows are
                not a flood policy. A notice in the packet is not one
                either.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Short-Term Rentals: Three Listings Is the New Line
              </h2>
              <p>
                The same December 1 package rewrites how Citizens treats
                home-sharing. This part is not an HO-6 exemption. Changes
                to the Business definition apply to the HO-3, HO-4, HO-6,
                and HO-8 base policy forms. Section II’s Business
                exclusion is amended to match: the policy does not provide
                coverage when the insured location is rented or leased to
                guests more than three times in a calendar year for
                periods of less than 30 days or one calendar month,
                whichever is less, or is held out to the public as a place
                regularly rented to guests.
              </p>
              <p>
                Guests of a home-sharing occupant are expressly excluded
                from the definitions of Roomer, Boarder, Tenant, or Guest.
                Personal-liability forms used with some dwelling products
                add definitions for home-sharing host activities,
                home-sharing network platform, and home-sharing occupant,
                and they exclude bodily injury to a home-sharing occupant.
                Withdrawn day-care endorsements are not a coverage change;
                Citizens points agents back to the base-form business
                exclusions.
              </p>
              <p>
                For a Sunny Isles Beach owner, the split is local:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    A furnished seasonal house that sits empty
                  </strong>{" "}
                  is still vacant versus unoccupied, Florida PIP if the
                  car comes south, and flood while you are north. That is
                  the snowbird file. It is not, by itself, a listing.
                </li>
                <li>
                  <strong className="text-navy-800">
                    A Collins Avenue unit on a booking calendar
                  </strong>{" "}
                  more than three times a year, for stays under 30 days,
                  is now written as a business use on the HO-6 form
                  Citizens will issue on or after December 1. Association
                  rules, City of Sunny Isles Beach short-term-rental
                  registration, and a landlord or commercial policy are
                  the coverage conversation — not an assumption that
                  “guest” still means your cousin.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Holding the address out as regularly rented
                  </strong>{" "}
                  can trip the exclusion even if you have not yet closed
                  four stays. A live listing is the public holding-out.
                </li>
              </ul>
              <p>
                If the board already restricts rentals, the form change
                does not rewrite the declaration. If you have been treating
                an HO-6 as a de facto Airbnb policy, December 1 is when
                that reading gets harder. Start a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>{" "}
                or{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>{" "}
                with the actual occupancy — seasonal, owner-occupied, or
                listed — rather than the occupancy you used on last year’s
                application.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Other December 1 Changes Worth a File Note
              </h2>
              <p>
                The bulletin is not only flood and rentals. Alternative
                dispute resolution is amended on all personal-lines base
                forms so either the insured or Citizens may submit a
                request to the Division of Administrative Hearings if the
                appraisers fail to agree on the amount of the loss, and
                either party may ask a DOAH judge — or, if DOAH declines,
                a judge of a court of record — to choose an umpire. A new
                Attorney Fee Reporting endorsement, CIT 03 16 12 26, will
                attach to new and renewal policies and specifies what the
                insured, claimant, or attorney must give Citizens when a
                claim is settled for a single amount that includes
                indemnity plus attorney fees and costs. Privacy notices
                PNMPR-7 12 26 and PNW-7 12 26 update why Social Security
                numbers are collected. None of that replaces reading the
                12-26 editions. Agents are told to review the full forms
                and the Required Document Guide; this page is a local
                reading of the public bulletin, not the policy jacket.
              </p>
              <p>
                If a takeout company assumes the policy on October 20, you
                will not be on a Citizens 12-26 form at all — you will be
                on that company’s form. Compare flood conditions, rental
                definitions, hurricane deductibles, and loss-assessment
                limits before you treat a lower estimated premium as the
                whole file. The 20% rule and the October 5 choice deadline
                are still the takeout guide. The December 1 Citizens
                language is what remains if you stay, or if a later 2026
                round leaves you at Citizens through a December renewal.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Do This Week in 33160
              </h2>
              <p>
                A 70 percent seven-day Gulf number is not a Florida
                hurricane. It is also not a reason to ignore a form that
                takes effect on the next renewal after December 1. For a
                house on Citizens wind in Sunny Isles Beach:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Pull the flood declarations and confirm the limit still
                  matches what Citizens required at the last issue or
                  renewal. If it does not, bind the correction before a
                  waiting period and a named storm overlap.
                </li>
                <li>
                  If an authorization to release flood documents is in the
                  mail, sign it within 14 days. Do not wait for the king
                  tide window that starts October 7.
                </li>
                <li>
                  If today is still your takeout choice deadline, register
                  the choice on the Offer Form. Then ask whether the
                  assuming company uses a similar flood-maintenance
                  condition.
                </li>
                <li>
                  If the property is listed for stays under 30 days, count
                  the 2026 calendar. Four stays, or a live “regularly
                  rented” listing, is a business-exclusion question on the
                  December 1 HO-3 and HO-6 forms.
                </li>
                <li>
                  If the building is a Collins Avenue tower, confirm you
                  are on HO-6 before you panic about the wind-for-flood
                  sentence — and still buy flood for surge and contents if
                  that is the exposure you actually have.
                </li>
              </ul>
              <p>
                If you want a local reading of a Citizens renewal, a
                takeout worksheet, or whether a 33160 occupancy is still a
                personal-lines risk, start a{" "}
                <Link
                  href="/quote"
                  className="text-ocean-500 hover:underline"
                >
                  quote request
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="text-ocean-500 hover:underline"
                >
                  contact the agency
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. Citizens’ bulletin is an
                overview; the 12-26 policy forms control.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of coverage or any
                  claim payment, or a recommendation of any insurer,
                  takeout company, or flood product. Citizens’ October 1,
                  2026 Personal Lines: 2026 Form Changes bulletin, the
                  National Hurricane Center’s 8 a.m. EDT October 5, 2026
                  Tropical Weather Outlook, and the South Florida Water
                  Management District’s 2026 king-tide windows are
                  described as published on the date above. Form language
                  takes effect for new and renewal business as of December
                  1, 2026 and can differ by policy type. HO-4, HO-6, HW-4,
                  HW-6, and DW-6 exclusions from the flood-and-wind
                  condition do not mean flood or surge is covered. Short-term
                  rental rules, city registration, and association
                  documents can be stricter than the insurance form.
                  Coverage, deductibles, and eligibility depend on the
                  actual policy and underwriting. Review your declarations
                  page and the 12-26 editions, and speak with a licensed
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
                  label: "Ordinance or Law Coverage in Sunny Isles Beach (2026)",
                  href: "/resources/ordinance-or-law-coverage-sunny-isles-beach-2026",
                  desc: "Keep required flood in force, then read the 25% vs 50% rebuild line on the same HO-3.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "The $400k rule and 2027 deadline — why you had to buy flood before this form could use it against a wind claim.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 5 choice deadline for the October 20 assumption — a different letter from a 12-26 form.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability for houses that actually receive the new Flood Insurance condition.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood — the policy the December 1 form expects you to keep in force.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Caps, waiting periods, and why canceling flood this week does not beat a mid-week Gulf depression.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims even after the declarations page adds a fourth sentence.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 is outside the wind-for-flood condition and inside the new short-term rental definition.",
                },
                {
                  label: "Snowbird Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/snowbird-insurance-sunny-isles-beach-2026",
                  desc: "Empty and furnished is occupancy. A listing calendar is the December 1 business exclusion.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "OIR-B1-1802 credits do not replace the flood policy the new form can test on a wind loss date.",
                },
                {
                  label: "My Safe Florida Home Grants in Sunny Isles Beach (2026)",
                  href: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
                  desc: "Impact glass is not a flood policy, and a grant does not satisfy CIT FW01.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote",
                  desc: "Start a no-obligation homeowners, condo, or flood quote.",
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
            Citizens December 2026 Form Questions
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
            Review a Citizens Renewal Before December 1
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners, condo, or flood quote and we will help
            separate a required flood file from an HO-6 rental question.
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
