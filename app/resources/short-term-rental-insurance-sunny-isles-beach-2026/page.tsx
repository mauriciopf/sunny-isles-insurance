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
    "Short-Term Rental Insurance in Sunny Isles Beach | License 2026",
  description:
    "SIB STR enforcement started Oct. 1. How ZIP 33160 hosts should read guest liability, association rules, and why an HO-6 is not a hotel policy before the Oct. 27 king-tide peak.",
  path: "/resources/short-term-rental-insurance-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does a Sunny Isles Beach HO-6 satisfy the city’s short-term rental insurance requirement?",
    answer:
      "Usually not by itself. Chapter 217 requires a statement that liability coverage will be in effect at all times while the unit is used as a short-term vacation rental, to cover injury or harm to transient occupants. A standard HO-6 is written for owner or seasonal personal use. Section II often excludes business activity, and paying guests are not the same as a visiting cousin. The city is asking for guest liability that stays in force for every stay. That is typically a landlord, commercial habitational, or specialty short-term rental form — not a declarations page that still says owner-occupied. Bring the actual liability form, not only the HO-6, when Planning and Zoning asks for proof.",
  },
  {
    question:
      "Can I advertise a Collins Avenue condo on Airbnb without a Sunny Isles Beach license if I only rent a few weekends?",
    answer:
      "No. Ordinance 2018-522 requires a Short-Term Vacation Rental License before advertising, leasing, or renting a multi-family unit for a rental period of six months or less. The code treats advertising itself as evidence of operating. A separate license is required for each unit, and it does not transfer to a new owner or a different unit. City enforcement for the current cycle began October 1. First offense in a 12-month period is a $1,000 civil penalty. A few weekends is still a rental period under the ordinance. Citizens’ three-stay business definition on the December 1, 2026 forms is a different line — it does not replace the city license.",
  },
  {
    question:
      "If my association bans short-term rentals, can the city still issue a license?",
    answer:
      "No. Section 217-14 says a Short-Term Vacation Rental License shall not be issued where the condominium association or building owner prohibits short-term rental. The application must include the declaration or bylaws on leasing, or a consent letter. Stricter association rules control even if Florida law does not let the city ban the frequency of stays. Insurance cannot paper over a bylaw prohibition. If the board only allows 30-day or six-month leases, that is a long-term landlord conversation — not an Airbnb file.",
  },
  {
    question:
      "Does Airbnb or VRBO host protection replace a landlord or commercial policy?",
    answer:
      "Treat platform programs as secondary, not as the city’s required liability file. Host-protection and host-guarantee products typically sit excess to whatever insurance you already carry, and they come with their own exclusions, notice deadlines, and occupancy rules. They do not rewrite an HO-6 business exclusion. They do not pay a king-tide flood. They do not satisfy a mortgagee who asked for a landlord policy. If a guest is injured in the unit, the first question is which primary form names that exposure — not which app collected the booking fee.",
  },
  {
    question:
      "If king-tide flooding cancels October bookings, does my HO-6 pay the lost rent?",
    answer:
      "Not as additional living expenses, and not as flood. Coverage D on an owner-occupied or seasonal HO-6 pays extra living costs after a covered wind or fire loss to the unit you live in. Lost bookings are fair rental value or business-income language on a landlord or commercial form — and only after a covered peril. Street and garage water from the October 24–30 king-tide window, including the October 27 annual peak, is still generally a flood file on a separate NFIP or private flood policy. NFIP does not pay additional living expenses or lost rental income. A parked guest car is comprehensive auto, never NFIP.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Short-Term Vacation Rental Insurance in Sunny Isles Beach",
    href: "/resources/short-term-rental-insurance-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-14";

export default function ShortTermRentalInsuranceSunnyIslesBeach2026Article() {
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
                "Short-Term Vacation Rental Insurance in Sunny Isles Beach in 2026: City License, Guest Liability, and Why HO-6 Is Not a Hotel Policy",
              description:
                "A Sunny Isles Beach guide to city short-term vacation rental licenses after October 1 enforcement, the liability statement Planning and Zoning actually asks for, association consent, and why a personal HO-6 is not a substitute for landlord or commercial coverage before the October 27 king-tide peak.",
              path: "/resources/short-term-rental-insurance-sunny-isles-beach-2026",
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
            Short-Term Vacation Rental Insurance in Sunny Isles Beach in
            2026: City License, Guest Liability, and Why HO-6 Is Not a
            Hotel Policy
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Enforcement started October 1. The Atlantic is quiet. The
            annual king-tide peak is not. A live listing is a city file,
            an association file, and an insurance form — not a seasonal
            HO-6 with a new calendar.
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
                Wednesday morning, October 14, the National Hurricane
                Center’s 8 a.m. EDT Tropical Weather Outlook was a single
                sentence. Forecaster Beven: tropical cyclone formation is
                not expected over the next seven days. The 2 a.m. outlook
                from Forecaster Reinhart said the same. Next name on the
                2026 Atlantic list, still unused: Josephine.
              </p>
              <p>
                The season summary as of 09 UTC October 14 lists nine named
                storms, one hurricane, and one major hurricane. Accumulated
                cyclone energy sits at 18.0 — 83 percent below the
                1991–2020 normal. Isaias (October 6–10) is the only storm
                in that table with hurricane intensity, peak 105 kt / 959
                mb. The{" "}
                <Link
                  href="/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  October 10 Citizens bind lift
                </Link>{" "}
                already reopened new and increased personal-lines coverage
                in ZIP 33160. A quiet cone does not reopen a city license
                you never pulled, and it does not convert a personal{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                into a hotel policy.
              </p>
              <p>
                Local water is the nearer deadline. Miami-Dade County
                Environmental Resources Management posted yesterday,
                October 13, that the next king-tide windows are October
                24–30 — marked as the highest predicted tides — then
                November 6–9 and November 23–26. The South Florida Water
                Management District’s east-coast annual maximum remains
                October 27, inside the October 22–November 12 window. NOAA
                Station 8723080 at Haulover Pier, the tide point for North
                Miami Beach and Sunny Isles Beach, predicts a 3.51-foot
                MLLW high at 9:36 a.m. on the 27th, with a −0.10-foot low
                at 3:09 a.m. and a 3.16-foot evening high at 9:39 p.m.
                Guests still have to park. Lobbies still flood. Bookings
                still cancel. None of that is a Panhandle wind claim.
              </p>
              <p>
                This page is the dedicated short-term rental file the
                December 1 Citizens guide said to write later: city
                registration, association leases, and commercial landlord
                forms. It is not a rewrite of{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens’ three-stay Business definition
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/snowbird-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  vacant-versus-unoccupied snowbird guide
                </Link>
                . It is not the{" "}
                <Link
                  href="/resources/collins-avenue-business-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Collins Avenue storefront BOP
                </Link>
                . A furnished unit on a booking calendar is a different
                occupancy from a snowbird who leaves the linens and flies
                north.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The City File Starts Before the Insurance Form
              </h2>
              <p>
                Chapter 217, Article II of the Sunny Isles Beach Code —
                Ordinance 2018-522 — regulates short-term vacation rentals
                in multi-family buildings: condominiums, apartments, and
                cooperatives. A Short-Term Vacation Rental is a unit, or
                portion of a unit, leased for a rental period of less than
                six months. The Owner or Responsible Party must obtain a
                license{" "}
                <em>before</em> advertising, leasing, or renting. A
                separate license is required for each unit. It does not
                transfer between units or to a new owner.
              </p>
              <p>
                Planning and Zoning, on the third floor of the Government
                Center at 18070 Collins Avenue, is the counter. The city’s
                published stack for a first license includes a $100 Local
                Business Tax Receipt and a $300 vacation rental license.
                Renewals open August 1 each year; the city asks that
                renewal applications land by September 30 to avoid late
                fees, then charges a $400 renewal fee after approval. A
                $50 late fee applies to late license payments. Enforcement
                begins October 1. As of this morning, that date is already
                two weeks behind you.
              </p>
              <p>
                Advertising is not a gray area in the ordinance. Section
                217-13(C) says advertising for a short-term vacation rental
                is direct evidence of operating one. A live listing on
                Airbnb, VRBO, or a similar platform is the public
                holding-out. Civil penalties inside any continuous
                12-month period run $1,000 for a first offense, $2,500 for
                a second, and $2,500 plus a one-year license suspension
                for a third. The city may also refuse to issue or renew if
                the application withholds or falsifies information.
              </p>
              <p>
                Single-family houses in the R-1 and R-TH districts sit on
                a different article. Article I requires registration for
                seasonal rental of a detached house, with a maximum of four
                registrations in a 12-month period. That is not the Collins
                Avenue tower file. Do not mix the two applications.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What the Application Asks Insurance to Do
              </h2>
              <p>
                The application packet is a compliance list, not a quote
                form. Beside the DBPR Transient Public Lodging
                Establishment license, Florida Department of Revenue
                certificate, Miami-Dade tourist-tax account, Local Business
                Tax Receipt, rental agreement, platform list, emergency-exit
                sketch, smoke and carbon detectors, and fire extinguisher,
                section 217-14(9) requires a statement that insurance
                coverage will be in effect at all times while the dwelling
                unit is being used as a Short-Term Vacation Rental{" "}
                <em>to cover liability for injury or harm to transient
                occupants</em>.
              </p>
              <p>
                Read that sentence against a standard{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                . Personal liability on a unit-owner form is written for
                people you invite as guests of a residence — not for paying
                occupants of a lodging establishment. Business-use
                exclusions are the usual problem. Medical payments to
                others is not the same as premises liability for a
                transient occupant. A declarations page that still says
                owner-occupied or seasonal personal use is the wrong exhibit
                to photocopy for Planning and Zoning.
              </p>
              <p>
                The Responsible Party rule is operational, and it is
                local. That person must be reachable 24 hours a day, seven
                days a week, live in South Florida, and be close enough to
                appear in person within one hour of a call from a guest,
                the police, emergency personnel, or the city. The city
                wants written notice within ten days if that person
                changes. An out-of-state snowbird who lists the unit from
                New Jersey still needs someone who can stand in the lobby
                on Collins Avenue. Insurance does not substitute for that
                hour.
              </p>
              <p>
                Occupancy on the city side is two persons per bedroom plus
                two additional persons per property, up to 12, excluding
                children under three. Open code violations block a license.
                Homestead status has to be disclosed on the application.
                None of those lines is an ISO form. They still change how
                a carrier will underwrite the same address.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Association Consent Is a Hard Stop
              </h2>
              <p>
                The city will not issue a license where the condominium
                association or building owner prohibits short-term rental.
                The packet requires the declaration or bylaws on leasing,
                or a consent letter. Many Collins Avenue towers already
                cap lease frequency, minimum stay, or the number of times
                a unit may be rented in a year. Some ban stays under 30
                days or six months outright. Ordinance 2018-522 says
                nothing in Article II stops an association from imposing
                stricter rules than the city.
              </p>
              <p>
                If the board only allows a six-month tenant, you are in a
                long-term landlord conversation: dwelling-fire or landlord
                HO-6 endorsements, loss of rents, and a lease additional
                insured — not a short-term listing. If the board allows
                nightly stays, you still have to match that use on the
                insurance application. Misrepresenting occupancy to keep a
                cheaper personal-lines premium is how claims get denied
                after a guest is injured, a pipe bursts during a stay, or
                a hurricane deductible lands on a unit the carrier thought
                was owner-occupied.
              </p>
              <p>
                Master-policy deductibles and special assessments do not
                get cheaper because the unit is listed. After a wind event,
                the association still bills the{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  deductible as a common expense
                </Link>
                . An HO-6 loss-assessment limit that was sized for a
                homestead unit is the same limit when paying guests are in
                the bedrooms — and some landlord forms handle assessments
                differently. Read the assessment line before you assume
                the personal policy still follows the unit.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Which Insurance Form Matches a Listing
              </h2>
              <p>
                There is no single “Airbnb policy” that every Florida
                carrier sells. What exists is a stack, and the city,
                the association, the mortgagee, and the carrier each care
                about a different layer:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Guest liability
                  </strong>{" "}
                  — the city’s statement. Premises liability for injury to
                  transient occupants, usually on a commercial general
                  liability, commercial habitational, or specialty
                  short-term rental program. A personal HO-6 Section II
                  grant is the wrong starting point once the unit is held
                  out as regularly rented.
                </li>
                <li>
                  <strong className="text-navy-800">
                    The unit and your contents
                  </strong>{" "}
                  — interior improvements, furniture, and stocked kitchens
                  on a landlord dwelling or short-term rental property
                  form. Guest belongings are the guest’s problem unless
                  you contracted otherwise. Platform host-guarantee
                  language is not a contents schedule.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Lost bookings after a covered peril
                  </strong>{" "}
                  — fair rental value or business income, not{" "}
                  <Link
                    href="/resources/additional-living-expenses-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    additional living expenses
                  </Link>{" "}
                  for your own hotel. ALE pays extra costs of living
                  elsewhere after a covered loss to the home you occupy.
                  Cancelled October weekends are rental income.
                </li>
                <li>
                  <strong className="text-navy-800">Flood</strong> — still
                  a separate policy. Storm surge, king-tide street
                  flooding, and other external water stay off the wind
                  form. See{" "}
                  <Link
                    href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    NFIP versus private flood
                  </Link>{" "}
                  for caps and waiting periods, and{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    flood coverage options
                  </Link>{" "}
                  for the quote. A 30-day NFIP wait that starts today is
                  roughly November 13 — after the October 24–30 peak.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Guest vehicles
                  </strong>{" "}
                  —{" "}
                  <Link
                    href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    comprehensive auto
                  </Link>
                  , never NFIP, never the host HO-6. Tell guests where to
                  park before a 3.5-foot Haulover high. Salt water on a
                  street-level stall is their comprehensive claim if they
                  carry it.
                </li>
              </ul>
              <p>
                Platform host-protection insurance and host-guarantee
                programs typically sit excess to whatever you already
                have. They can help after a covered guest-injury or
                property event. They do not replace the primary form. They
                do not satisfy a mortgagee. They do not answer section
                217-14(9) if the only policy in the file excludes business
                use. Start a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=business"
                  className="text-ocean-500 hover:underline"
                >
                  business quote
                </Link>{" "}
                with the actual calendar — nights booked, minimum stay,
                and whether you still sleep there — rather than the
                occupancy on last year’s HO-6.
              </p>
              <p>
                Houses west of Collins that actually operate as short-term
                rentals under Article I have the same insurance mismatch
                on an{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-3
                </Link>
                . Personal homeowners is not a lodging form. A dwelling
                landlord policy, or a specialty vacation-rental program,
                is the usual rewrite.{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-4
                </Link>{" "}
                is for a tenant who lives there, not for a host who lists
                the unit.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Citizens, Takeout, and Why December 1 Still Matters
              </h2>
              <p>
                The residual market is open again. Citizens lifted the
                Isaias binding suspension at 5 a.m. ET on October 10.
                That lift lets a qualifying personal-lines risk bind. It
                does not turn a listed Collins Avenue unit into a
                personal-lines risk. If the occupancy is short-term
                rental, ask whether Citizens will write it at all before
                you treat a reopen bulletin as a yes.
              </p>
              <p>
                The December 1, 2026 personal-lines package still rewrites
                the Business definition on HO-3, HO-4, HO-6, and HO-8:
                renting the insured location to guests more than three
                times in a calendar year for periods of less than 30 days
                or one calendar month, or holding it out as regularly
                rented, is treated as a business use. That form change is
                already covered in the{" "}
                <Link
                  href="/resources/citizens-december-2026-form-changes-sunny-isles-beach"
                  className="text-ocean-500 hover:underline"
                >
                  December 2026 form guide
                </Link>
                . This page does not restate that three-stay test as if it
                were new. It is the reason a live listing and a personal
                Citizens HO-6 are on a collision course this winter even if
                the city license is already in the drawer.
              </p>
              <p>
                The October 20 personal-lines assumption is still on the
                calendar; the October 5 choice deadline has already
                passed. A takeout moves an in-force policy. It is not a
                new bind, and it does not convert a personal form into a
                lodging form. Compare rental definitions on the assuming
                company’s jacket the same way you would compare hurricane
                deductibles. That worksheet remains the{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  takeout guide
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                King Tide Week Is a Host Problem, Not a Hurricane Claim
              </h2>
              <p>
                Miami-Dade’s October 13 advisory is the local weather that
                actually reaches Collins Avenue this month. The October
                7–13 window is already behind. October 24–30 is the next
                highest predicted set, with SFWMD’s east-coast annual peak
                on October 27. Haulover Pier’s morning high that Tuesday
                is 3.51 feet MLLW. Nuisance flooding on sunny days is
                still flooding. If it coincides with rain or a breeze off
                the Atlantic, the city and the county both warn it gets
                worse.
              </p>
              <p>
                For a listed unit, that week is four separate files:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Access and parking for guests — street-level stalls,
                  garage ramps, and sidewalks along Collins and the
                  east–west approaches. Move host and guest cars before
                  the high, not after. Wash salt off with fresh water.
                </li>
                <li>
                  Building water in lobbies, elevators, and storage. The
                  master policy and the unit-owner flood policy are the
                  property conversation. Wind is not.
                </li>
                <li>
                  Cancelled stays. Lost rent follows a covered peril on a
                  landlord or commercial form. King-tide flood is generally
                  not a covered peril on the wind policy. NFIP does not pay
                  the hotel and does not pay the booking.
                </li>
                <li>
                  A new flood application. The typical NFIP 30-day wait
                  means a policy bound today does not attach for the
                  October 27 high. Private flood sometimes uses a shorter
                  wait; confirm the form. Congress has authorized NFIP
                  only through December 11, 2026 (Public Law 119-103).
                  That cliff is not a reason to republish the shopping
                  guide. It is a reason not to let a required flood policy
                  lapse while you wait for a longer bill.
                </li>
              </ul>
              <p>
                Wind, storm surge, and flood are still three claims on a
                barrier island. That split did not change because Isaias
                went ashore near Destin. Read{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  hurricane versus flood in Sunny Isles Beach
                </Link>{" "}
                if the question is a named storm. This week’s question is
                a listing, a city license, and a tide table.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Do This Week in 33160
              </h2>
              <p>
                A seven-day quiet outlook is the window to match the
                occupancy to the form — before the October 24 tide window
                and before a December 1 Citizens renewal lands on the
                wrong definition of “guest.”
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  If the unit is listed or will be listed for stays under
                  six months, pull the city license status. Enforcement
                  is already on. Planning and Zoning: 305-792-1740,
                  infopz@sibfl.net, 18070 Collins Avenue.
                </li>
                <li>
                  Read the association declaration on leasing before you
                  pay a renewal fee. A prohibited use cannot be licensed,
                  and it cannot be insured as if it were allowed.
                </li>
                <li>
                  Put the liability form that names transient occupants
                  next to the HO-6. If the only policy in the drawer
                  excludes business use, the city statement is not true
                  yet.
                </li>
                <li>
                  Count 2026 stays and look at whether the listing is live.
                  More than three short stays, or a public calendar, is
                  the December 1 Citizens business line — already explained
                  in that form guide, not here.
                </li>
                <li>
                  If flood is not in force, do not pretend a bind today
                  covers October 27. Shop the wait against the tide
                  calendar, then keep the policy through the November
                  windows and the December 11 NFIP authorization date.
                </li>
                <li>
                  Tell guests, in the listing and the house manual, where
                  to park during October 24–30 and how to treat salt water.
                  Their car is comprehensive. The building’s lobby is not
                  their comprehensive claim.
                </li>
              </ul>
              <p>
                If you want a local reading of a listed Collins Avenue
                unit, a house on Article I registration, or whether the
                current HO-6 still matches the calendar, start a{" "}
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
                only when an insurer issues it. The city ordinance, the
                association documents, and the policy jacket control —
                not a platform badge.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, legal advice, a guarantee of
                  coverage or any claim payment, or a recommendation of any
                  insurer, platform, or city process. The National Hurricane
                  Center’s 8 a.m. EDT October 14, 2026 Tropical Weather
                  Outlook, the 2026 Atlantic season summary as of 09 UTC
                  October 14, Miami-Dade County’s October 13, 2026 king-tide
                  advisory, the South Florida Water Management District’s
                  2026 east-coast peak of October 27, NOAA Station 8723080
                  Haulover Pier predictions, and the City of Sunny Isles
                  Beach Chapter 217 / Ordinance 2018-522 licensing rules are
                  described as published on the date above. License fees,
                  enforcement dates, occupancy limits, and insurance
                  requirements can change. Association documents can be
                  stricter than the city. Citizens’ December 1, 2026
                  Business definition is summarized by pointer to the
                  separate form guide and is not restated here as new
                  coverage. Platform host-protection products are not
                  primary insurance. Coverage, deductibles, and eligibility
                  depend on the actual policy and underwriting. Review your
                  declarations page, the city license file, and the
                  association leasing rules, and speak with a licensed
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
                  label: "Citizens December 2026 Form Changes in Sunny Isles Beach",
                  href: "/resources/citizens-december-2026-form-changes-sunny-isles-beach",
                  desc: "The three-stay Business definition on HO-3 and HO-6. This page is the city license and landlord-form file that guide pointed to.",
                },
                {
                  label: "Snowbird Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/snowbird-insurance-sunny-isles-beach-2026",
                  desc: "Empty and furnished is occupancy. A listing calendar is not a snowbird HO-6.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 for unit owners. A listed unit usually needs a different occupancy and a different liability form.",
                },
                {
                  label: "Business Insurance in Sunny Isles Beach",
                  href: "/business-insurance",
                  desc: "Commercial liability and property options when the city already treats the unit as a lodging business.",
                },
                {
                  label: "Business Insurance on Collins Avenue (2026)",
                  href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
                  desc: "Storefront BOP, flood, and liquor — a ground-floor file, not a unit listing.",
                },
                {
                  label: "What Does Condo Insurance Cover in Florida?",
                  href: "/resources/condo-insurance-florida",
                  desc: "Unit, belongings, and liability versus the association master policy.",
                },
                {
                  label: "Florida Renters Insurance Rate Cuts (2026)",
                  href: "/resources/renters-insurance-rate-cuts-sunny-isles-beach-2026",
                  desc: "A cheaper tenant HO-4 is still not a host policy or a city license.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 is for a tenant who lives there. It is not a host policy.",
                },
                {
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "Your hotel after a covered wind loss is not the same sentence as cancelled guest bookings.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "A bind today misses the October 27 high. Caps and waits still apply to a listed unit.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "Guest cars on Collins are comprehensive. The host HO-6 does not pay them.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "A listing does not shrink the association deductible billed after a wind event.",
                },
                {
                  label: "Citizens Binding Freeze Lifted After Isaias (2026)",
                  href: "/resources/citizens-binding-suspension-lifted-isaias-sunny-isles-beach-2026",
                  desc: "Personal-lines binds reopened October 10. A listed occupancy is still a different underwriting question.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims even when paying guests are in the unit.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "HO-3 for houses. Article I seasonal registration is not an HO-3 lodging endorsement.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "External water does not care that the occupant paid a cleaning fee.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote?type=condo",
                  desc: "Start a no-obligation condo or business quote with the actual listing calendar.",
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
            Short-Term Rental Insurance Questions
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
            Match the Listing to the Form — Then Quote
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a quote and we will help sort a city license, an
            association lease rule, and a personal HO-6 from the liability
            a paying guest actually requires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=condo"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Condo Quote
            </Link>
            <Link
              href="/quote?type=business"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Business Quote
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
