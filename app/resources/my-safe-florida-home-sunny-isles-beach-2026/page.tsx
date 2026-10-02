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
    "My Safe Florida Home Grants in Sunny Isles Beach | 2026 HVHZ Guide",
  description:
    "October 2026 is still hurricane-free. How Sunny Isles Beach homesteaders should read the $700k My Safe Florida Home cap, and why Collins Avenue condos use the association-only Condo Pilot.",
  path: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Can I apply for a My Safe Florida Home grant on a Collins Avenue condo in Sunny Isles Beach?",
    answer:
      "Not as an individual unit owner. Florida Statute 215.5586’s homeowner program excludes condominiums. The My Safe Florida Condominium Pilot Program under section 215.55871 is association-only. A unit owner may benefit if the association is awarded a grant, but you cannot submit your own application for the unit. Ask the board whether it has applied at mysafeflcondo.com — do not pay a contractor and hope the state will reimburse you later.",
  },
  {
    question:
      "Does a $2 million Sunny Isles Beach house still get a free My Safe Florida Home inspection?",
    answer:
      "It can, if the house is a site-built, owner-occupied homestead on its own parcel and otherwise meets the inspection rules in section 215.5586(1). The $700,000 insured-value cap is a grant rule, not an inspection rule. Subsection (1)(c) lets an eligible applicant take the free inspection without being eligible for a grant. The inspection can still feed a private-market wind-mitigation credit on OIR-B1-1802. The state matching dollars will not follow a Coverage A number above the cap.",
  },
  {
    question:
      "If I homestead in New York and winter in Sunny Isles Beach, can I use the grant on the Florida house?",
    answer:
      "Usually no. The 2026 statute requires the home to be owner-occupied and the applicant to hold a Florida homestead exemption under chapter 196. Second homes, vacation homes, and rentals are outside the homeowner program. Seasonal occupancy is an insurance underwriting question — vacant versus unoccupied, Florida PIP, flood while you are north — not a DFS grant question. The free inspection and the $10,000 match are built for the homestead you actually live in.",
  },
  {
    question:
      "Is a My Safe Florida Home grant the same as a wind-mitigation insurance credit?",
    answer:
      "No. The grant reimburses a share of the construction bill after DFS approves the project and a final inspection confirms the work. A wind-loss mitigation credit is a premium discount on the wind portion of a homeowners, condo, or renters policy, scored from OIR-B1-1802 or a high-rise MIT-BT form. You can receive a credit without ever touching state grant money. You can also complete grant work and still need the current inspection form on the insurance file before the credit appears. They are two paperwork trails.",
  },
  {
    question:
      "Do I still need flood insurance if the grant pays for impact windows?",
    answer:
      "Yes. Opening protection, roof-to-wall clips, and secondary water resistance are wind and wind-driven-rain upgrades. They do not insure storm surge, king-tide street flooding, or other external water. A standard homeowners or HO-6 form still excludes flood. The National Flood Insurance Program’s typical 30-day waiting period is unchanged. King tides return to coastal Miami-Dade October 7–13, with the highest predicted tide around October 10. Windows are not a flood policy.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "My Safe Florida Home Grants in Sunny Isles Beach",
    href: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-10-02";

export default function MySafeFloridaHomeSunnyIslesArticle() {
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
                "My Safe Florida Home Grants in Sunny Isles Beach in 2026: HVHZ Houses, the $700k Cap, and the Condo Pilot",
              description:
                "A Sunny Isles Beach guide to Florida’s 2026 My Safe Florida Home homestead, income, and $700,000 insured-value rules, and why Collins Avenue towers use the association-only Condominium Pilot instead.",
              path: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
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
            My Safe Florida Home Grants in Sunny Isles Beach in 2026: HVHZ
            Houses, the $700k Cap, and the Condo Pilot
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A historic quiet October does not pay for impact glass. The state
            programs that might — if you homestead here, and if the building
            is the right kind — still have income, value, and association
            votes attached.
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
                Friday morning, October 2, the National Hurricane Center’s 8
                a.m. Atlantic outlook was still watching the remnants of
                former Tropical Storm Fay several hundred miles
                south-southeast of Bermuda. Forecaster Robbie Berg put the
                chance of regeneration at 10%, ending by Sunday in strong
                upper-level winds. Hanna, the eighth named storm, dissipated
                late September 30. No coastal watches. No Florida threat. The
                next Atlantic name is Isaias. None of the eight storms
                reached 74 mph. AccuWeather’s historical marker for the
                latest first hurricane on record is October 8, 1905 — six
                days from this morning. Colorado State University’s September
                30 two-week outlook still flagged a possible southern-Gulf
                development window around October 8–13. That is weather. It
                is not a building-permit schedule.
              </p>
              <p>
                King tides are the local calendar item that actually arrives
                next week. Miami-Dade’s enhanced tidal forecast lists October
                7–13, with the highest predicted tide around October 10. The
                South Florida Water Management District’s east-coast annual
                peak remains October 27, inside the October 24–30 window.
                Those tides are a{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood
                </Link>{" "}
                conversation. My Safe Florida Home and the Condominium Pilot
                pay for wind work. Mixing the two is how a ZIP 33160 owner
                spends grant money and still has an uncovered garage when
                Collins Avenue ponds.
              </p>
              <p>
                This guide is not a rewrite of{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  how wind-mitigation credits are scored in 2026
                </Link>
                . Credits live on the insurance file. Grants live at the
                Florida Department of Financial Services. Most Collins
                Avenue towers will never see the homeowner grant at all.
                That is the point of reading the statute before you call a
                glass company.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Two Programs, Two Doors
              </h2>
              <p>
                Sunny Isles Beach sits in Miami-Dade’s High-Velocity
                Hurricane Zone, on a barrier island between Golden Beach and
                Haulover Inlet. Most of 33160 is high-rise condominiums
                along Collins Avenue (A1A). A smaller pocket of houses and
                low-rise attached homes sits west of the beach and in
                adjoining 33180. Florida funds hurricane hardening for those
                buildings through two statutes, not one.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "My Safe Florida Home (s. 215.5586)",
                    desc: "Free inspections and, if you also meet the grant tests, a reimbursement toward recommended wind upgrades on a homesteaded, owner-occupied, site-built single-family unit on its own parcel — detached, or attached and not more than three stories. Condominiums, cooperatives, mobile homes, second homes, and rentals are out. Chapter 2026-174 (SB 1452), signed June 26, 2026, is the current eligibility text.",
                  },
                  {
                    title: "My Safe Florida Condominium Pilot (s. 215.55871)",
                    desc: "Association-only. Buildings three stories or taller, at least two residential units, within 15 miles of the coast — which includes every Collins Avenue tower in Sunny Isles Beach. A unit owner cannot apply alone. The association applies at the Condo Pilot portal, pays for the work, and seeks reimbursement after a final inspection.",
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
                Neither program is an entitlement. Both are subject to
                annual appropriations. DFS may stop taking grant applications
                once the money is obligated. A quiet Atlantic does not
                refill the account.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The House West of Collins: Homestead, $700k, Pre-2008
              </h2>
              <p>
                If you own a site-built house or a qualifying attached home
                of three stories or fewer, start at mysafeflhome.com — not
                the condo portal. Inspection eligibility in section
                215.5586(1) is narrower than “I pay a Florida
                homeowners premium.”
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Homestead and owner-occupied.
                  </strong>{" "}
                  You need a chapter 196 homestead exemption on that
                  address, and you have to live there. A snowbird who
                  homesteaded in the Northeast and keeps a furnished
                  seasonal house in 33160 is outside this program. That
                  stack is{" "}
                  <Link
                    href="/resources/snowbird-insurance-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    occupancy, PIP, and flood while you are north
                  </Link>
                  , not a DFS reimbursement.
                </li>
                <li>
                  <strong className="text-navy-800">
                    The $700,000 insured-value cap is for the grant.
                  </strong>{" "}
                  Coverage A above $700,000 does not, by itself, block the
                  free inspection. It does block the matching dollars.
                  Plenty of waterfront and Intracoastal houses in and next
                  to Sunny Isles Beach sit above that number. The
                  inspection can still produce the photos an insurer wants
                  for a private-market credit. The state will not split the
                  glass bill.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Built before January 1, 2008.
                  </strong>{" "}
                  Grant eligibility follows the year shown on the Miami-Dade
                  County Property Appraiser site, not a contractor’s memory
                  of the original permit. Post-2008 Florida Building Code
                  houses are already supposed to have been built to a
                  tighter wind standard; the grant is aimed at older
                  envelopes.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Low or moderate income for the grant.
                  </strong>{" "}
                  Section 215.5586(2)(a)7 requires the grant applicant to
                  be a low-income or moderate-income person as defined in
                  section 420.0004 — generally up to 80% and 120% of area
                  median income. The program may accept a signed
                  certification under penalty of perjury. Above that band,
                  the statute still allows a free inspection. It does not
                  pay the match. DFS reviews applications in income-and-age
                  order: low-income applicants 60 and older first.
                </li>
              </ul>
              <p>
                Matching grants reimburse $2 of state money for every $1
                you spend, up to a $10,000 state contribution toward the
                actual cost of the recommended work. A $15,000 impact-window
                invoice can draw the $10,000 maximum; a $9,000 invoice
                draws $6,000. Low-income applicants who otherwise qualify
                can receive up to $10,000 with no match. You must have
                written grant approval before construction starts. Begin
                work early and the reimbursement is denied. Finish the
                project and request the final inspection within 18 months
                of approval, or the application is abandoned and the money
                reverts.
              </p>
              <p>
                Eligible improvements are only those the program inspector
                recommended: opening protection (windows, exterior doors,
                garage doors, skylights), roof-to-wall connections,
                roof-deck nailing, and secondary water resistance —
                including a roof covering replacement when it is needed to
                install SWR. Miami-Dade HVHZ work still needs products with
                a Florida Product Approval or a Miami-Dade Notice of
                Acceptance, pulled permits, and a DBPR-licensed contractor.
                The program does not keep a contractor list. You pick; you
                pay; you close the permit; then you draw.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Collins Avenue Tower: Association Only
              </h2>
              <p>
                If you own an{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                in a 20- or 40-story building, the homeowner grant will not
                harden your balcony glass. Section 215.55871 is written for
                the association that owns the envelope.
              </p>
              <p>
                Inspection eligibility for the pilot: the building is three
                or more stories, contains at least two residential units,
                sits within 15 miles of the coastline, and is not a
                collection of detached units on separate parcels. The board
                — or a majority of the voting interests — must vote to
                participate, at the annual budget meeting or at a meeting
                called for that vote. Written notice to unit owners follows
                within 14 days. The association also has to be current on
                the milestone and structural-integrity inspections in
                sections 553.899 and 718.112(2)(g) and (h). A building that
                has not done that work is not first in line for hurricane
                glass money.
              </p>
              <p>
                Grant eligibility is stricter. The association cannot have
                started the mitigation project. It needs the pilot’s initial
                inspection report with recommended improvements. Unit owners
                must receive DFS Form DFS-O1-012. At least 75 percent of the
                unit owners in the building that would receive the work must
                approve. Opening-protection grants additionally require that
                the windows are common elements in the declaration — if
                each owner already “owns” the glass, the association cannot
                use this grant to replace it. The association must document
                that the work will produce a mitigation credit or other
                rate differential on the master policy, and it must have
                the cash to pay the contractor up front. The state
                reimburses. It does not advance.
              </p>
              <p>
                Funding is a $2 state / $1 association match. An association
                may combine roof-related and opening-protection projects,
                but the maximum total award is $175,000 per association.
                Construction and the final-inspection request are due within
                one year of grant approval unless DFS grants an extension.
                Grant funds cannot pay an insurance deductible, and they
                cannot be used to swap one already-compliant opening
                protection for a different product — shutters that already
                meet code are not a reason to bill the state for impact
                windows.
              </p>
              <p>
                For a unit owner, the practical move this week is not a
                personal grant application. It is a question to the board:
                has the association created an account at the Condo Pilot
                portal, and has it pulled the current master-policy
                wind-mitigation documentation? A later special assessment
                for glass or a roof still follows{" "}
                <Link
                  href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  the HO-6 loss-assessment rules
                </Link>{" "}
                and the master-policy deductible. The pilot, if the
                association qualifies and the appropriation is still open,
                is one way to shrink that bill. It is not a substitute for
                the unit policy.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Grant Paperwork Is Not the Credit File
              </h2>
              <p>
                After the work is done, two documents have to move. The DFS
                final inspection supports the reimbursement. The insurance
                credit still needs a current Uniform Mitigation Verification
                Inspection Form — OIR-B1-1802 (Rev. 04/26) for houses and
                buildings of one to three stories, or the Building Type II
                and III form for personal-residential units in buildings
                four stories and taller. Most Collins Avenue towers are the
                second form. Credits do not transfer from a prior owner.
                They apply to the wind portion of the premium, not to{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  flood, surge, or the hurricane deductible
                </Link>
                .
              </p>
              <p>
                September’s{" "}
                <Link
                  href="/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  admitted-market homeowners rate decreases
                </Link>{" "}
                also do not replace hardening. A quieter reinsurance market
                can lower the average premium. It does not nail a roof deck.
                Bring the grant report and the credit form to a{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                or condo remarket as two exhibits, not as one PDF with two
                titles.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What This Quiet Week Is For
              </h2>
              <p>
                October 5 is the policyholder choice deadline for Citizens’
                October 20 personal-lines assumption — a different mailbox,
                covered in the{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  existing takeout guide
                </Link>
                . Do not confuse a depopulation packet with a grant portal.
                Do not wait for Isaias, or for the southern-Gulf window
                CSU mentioned, to start an inspection you could have
                scheduled while Fay is a remnant low.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Houses and qualifying attached homes.
                  </strong>{" "}
                  Confirm homestead, Coverage A, year built on the property
                  appraiser site, and whether household income is in the
                  420.0004 band. Apply for the free inspection at
                  mysafeflhome.com if you have not had one in the last 24
                  months. Do not sign a construction contract for grant
                  work until DFS issues the grant approval.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Collins Avenue unit owners.
                  </strong>{" "}
                  Email the association president or manager: Condo Pilot
                  status, common-element window language, milestone/SIRS
                  compliance, and whether a 75% vote has been noticed. Your{" "}
                  <Link
                    href="/quote?type=condo"
                    className="text-ocean-500 hover:underline"
                  >
                    HO-6 quote
                  </Link>{" "}
                  still needs its own contents, loss-assessment, and
                  loss-of-use limits while that process runs.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep flood on a separate clock.
                  </strong>{" "}
                  King tides October 7–13 do not wait for a grant. NFIP’s
                  typical 30-day wait and private flood’s shorter wait are
                  unchanged by impact glass. Shop{" "}
                  <Link
                    href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    NFIP versus private flood
                  </Link>{" "}
                  as its own decision.
                </li>
                <li>
                  <strong className="text-navy-800">
                    HVHZ product paperwork.
                  </strong>{" "}
                  Miami-Dade will not close a permit on openings that lack
                  an NOA or Florida Product Approval rated for the
                  address. A grant reimbursement that lacks a closed permit
                  does not fund. Neither does an insurance credit.
                </li>
              </ul>
              <p>
                If you want a local reading of whether a Sunny Isles Beach
                house is even in the grant band — or whether the useful
                next step is an association question plus an HO-6
                remarket — start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>{" "}
                or{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. DFS, not an agency website,
                decides grant eligibility.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of grant funding or
                  any premium credit, or a recommendation of any contractor,
                  inspector, or mitigation product. Sections 215.5586 and
                  215.55871, Florida Statutes, Chapter 2026-174, DFS program
                  guides, and the National Hurricane Center’s October 2,
                  2026 outlook are described as published on the date above.
                  Grant and inspection programs are subject to
                  appropriation, portal rules, and eligibility review. Income
                  limits, insured-value caps, building-year tests, homestead
                  status, and association votes can disqualify an otherwise
                  interested owner. Coverage, deductibles, and credits
                  depend on the actual policy forms and underwriting. Review
                  your declarations page, association documents, and the
                  live DFS portals, and speak with a licensed Florida
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
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "OIR-B1-1802 vs MIT-BT forms — the credit file the grant does not replace.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability for houses that may or may not clear the $700k grant cap.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 still sits beside the master policy while the association pursues the Condo Pilot.",
                },
                {
                  label: "Snowbird Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/snowbird-insurance-sunny-isles-beach-2026",
                  desc: "No Florida homestead usually means no My Safe Florida Home grant.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "If the association funds glass or a roof without a grant, the assessment still has an HO-6 question.",
                },
                {
                  label: "Florida Homeowners Insurance Rate Cuts (2026)",
                  href: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
                  desc: "A filing decrease is not a roof-to-wall clip.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind upgrades do not close the surge and flood gap.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "King tides October 7–13 are still a flood wait, not a grant wait.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "Master-policy wind cost is why association hardening still matters.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 5 choice deadline — a different letter from a grant portal login.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote",
                  desc: "Start a no-obligation homeowners or condo quote.",
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
            My Safe Florida Home Questions for 2026
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
            Match the Building to the Right Program
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners or condo quote and we will help separate a
            homestead grant conversation from an HO-6 and master-policy
            file.
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
