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
  title: "Collins Avenue Business Insurance in Sunny Isles Beach | 2026",
  description:
    "A 2026 guide for Collins Avenue storefronts in Sunny Isles Beach: what a BOP covers, why flood and liquor sit outside it, and how a record-quiet Atlantic peak plus fall king tides still matter.",
  path: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does a Business Owners Policy cover flood on Collins Avenue in Sunny Isles Beach?",
    answer:
      "No. A standard BOP bundles general liability and commercial property — often with business-income coverage after a covered peril — but the property form excludes flood. Storm surge, king-tide overflow, and rainfall that enters from outside are flood, not wind. On a barrier island in ZIP 33160, that exclusion is the usual gap. Commercial flood is a separate NFIP General Property Form or private flood policy.",
  },
  {
    question:
      "If I lease a ground-floor space, does the landlord’s insurance cover my inventory?",
    answer:
      "Usually not. The building owner’s commercial property policy is written for the structure and, sometimes, the owner’s fixtures. Tenant improvements, stock, furniture, point-of-sale equipment, and business income from your operation are typically yours to insure. Most Collins Avenue leases also require you to name the landlord as an additional insured and to carry a stated liability limit. Read the insurance exhibit, not the lobby certificate.",
  },
  {
    question:
      "Do I need liquor liability if Florida’s dram-shop law is narrow?",
    answer:
      "Florida Statute 768.125 generally does not make a vendor liable for serving a person of lawful drinking age, with two exceptions: willfully furnishing alcohol to a minor, and knowingly serving a person habitually addicted to alcohol. That statute is not a substitute for insurance. Commercial general liability still excludes claims arising from being in the business of selling or serving alcohol. Defense costs on a denied claim are the practical reason restaurants and hotel bars buy a separate liquor liability policy or endorsement.",
  },
  {
    question:
      "When does a Sunny Isles Beach business have to carry workers’ compensation?",
    answer:
      "The Florida Division of Workers’ Compensation states that most non-construction employers must cover employees once they have four or more, counting full-time and part-time staff and, in many entity types, working corporate officers or LLC members. Construction employers generally must cover from the first employee. A BOP never includes workers’ compensation. A Stop-Work Order and statutory penalties can follow a coverage gap.",
  },
  {
    question:
      "Does NFIP commercial flood pay for lost restaurant or boutique income after a surge?",
    answer:
      "No. The NFIP General Property Form pays for direct physical loss by or from flood to the building and/or contents, with Regular Program caps of $500,000 building and $500,000 contents per building. It expressly does not pay for lost revenue, lost profits, loss of use, or interruption of business. Private flood and some excess flood forms can add business-income wording. Confirm the form, not the brochure.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Collins Avenue Business Insurance in Sunny Isles Beach",
    href: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-14";

export default function CollinsAvenueBusinessInsuranceArticle() {
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
                "Business Insurance on Collins Avenue in Sunny Isles Beach in 2026: BOP, Flood, and Liquor Liability",
              description:
                "A Sunny Isles Beach storefront guide to what a Business Owners Policy actually covers, why flood and liquor sit outside it, commercial NFIP limits, workers’ compensation thresholds, and how a record-quiet 2026 Atlantic peak plus fall king tides still set the calendar for binding coverage.",
              path: "/resources/collins-avenue-business-insurance-sunny-isles-beach-2026",
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
              Business Insurance
            </span>
            <span className="text-white/40 text-xs">Updated {dateModified}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
            Business Insurance on Collins Avenue in Sunny Isles Beach in 2026:
            BOP, Flood, and Liquor Liability
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A record-quiet Atlantic peak does not remove king tides, storm
            surge, or a liquor exclusion. Ground-floor storefronts in ZIP 33160
            need a different stack than a condo HO-6.
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
                Collins Avenue is the commercial spine of Sunny Isles Beach: hotels,
                restaurants, boutiques, and leased ground-floor space under the
                same towers whose owners already shop{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                . The unit upstairs and the storefront downstairs do not share a
                policy. As of September 14, 2026, the Atlantic has gone more than
                100 days into the season without a hurricane — past the
                satellite-era record that Gustav (2002) and Humberto (2013) set
                on September 11. That is weather news. It is not a reason to
                treat a Business Owners Policy as flood coverage, or to wait out
                the next king-tide window before starting a 30-day{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  commercial flood
                </Link>{" "}
                clock.
              </p>
              <p>
                Five named storms have formed through early September — Arthur,
                Bertha, Cristobal, Dolly, and Edouard — and none reached hurricane
                strength. El Niño wind shear is a large part of why the Main
                Development Region has been hostile. Roughly half of a typical
                Atlantic season&rsquo;s activity still occurs after September 10.
                Tropical Storm Edouard, which moved ashore near the
                Louisiana–Texas line in early September, was a reminder that a
                system that never becomes a hurricane can still put water in
                buildings. A quiet basin is useful only if you use it to bind
                coverage that a named storm will later freeze.
              </p>
              <p>
                A second clock is already on the island. The South Florida Water
                Management District&rsquo;s 2026 king-tide calendar for the east
                coast lists September 8–15 (this week), September 24–October 15,
                and a stretch through October 22–November 12 whose annual
                maximum predicted peak is October 27. King tides are not
                hurricanes. They are the highest astronomical tides of the year,
                and on a barrier island they regularly produce sunny-day street
                flooding that closes access to a ground-floor door. Standard
                commercial property still treats that water as flood. This
                article is the first{" "}
                <Link
                  href="/business-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  business insurance
                </Link>{" "}
                guide on this site. It is not a Citizens homeowners or HO-6
                piece.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What a BOP Covers on Collins Avenue — and What It Does Not
              </h2>
              <p>
                A Business Owners Policy is the usual starting package for a
                small restaurant, retailer, salon, or professional office. It
                typically bundles commercial general liability with commercial
                property, and it often includes business-income (interruption)
                coverage after a covered physical loss. For many Collins Avenue
                tenants, that is the right chassis. It is not the whole vehicle.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Usually inside the BOP",
                    desc: "Premises liability (a guest slip in the dining room), products liability for food served, and commercial property for your tenant improvements, furniture, and stock against fire, theft, and named wind — subject to a separate hurricane deductible, often 2%–5% of the insured property value in Miami-Dade’s High-Velocity Hurricane Zone. Business income after a covered wind or fire loss may be in the form; read the waiting period (often 72 hours) and the period of restoration.",
                  },
                  {
                    title: "Flood — always a separate policy",
                    desc: "The property section of a BOP excludes flood. Storm surge from the Atlantic or the Intracoastal, king-tide overflow, and rainfall that has nowhere to drain on a low island are flood conversations. A city parcel on Collins Avenue — 18050 Collins Ave, classified commercial and sitting in FEMA Zone AE with a published base-flood elevation of 7.0 feet — is a reminder that the commercial strip is inside the Special Flood Hazard Area, not adjacent to it. Do not borrow the Citizens personal-residential flood mandate for this. That $400,000 Coverage A rule is for homeowners wind policies, not storefronts.",
                  },
                  {
                    title: "Liquor liability — excluded once you sell alcohol",
                    desc: "Commercial general liability contains a liquor exclusion for anyone “in the business of” manufacturing, distributing, selling, serving, or furnishing alcoholic beverages. A hotel bar, a Collins Avenue restaurant with a wine list, or a grocery that sells beer is in that business. A host-liquor exception for an office holiday party is not the same coverage. Buy a separate liquor liability policy or endorsement if you pour for money.",
                  },
                  {
                    title: "Workers’ compensation, commercial auto, and professional liability",
                    desc: "None of these live in a standard BOP. Florida non-construction employers generally need workers’ compensation at four or more employees (Florida Statute Chapter 440 / Division of Workers’ Compensation rules). Construction starts at one. Personal auto does not cover deliveries, catering runs, or a vehicle titled to the company. Real-estate, medical, and design offices on Collins or Sunny Isles Boulevard still need errors-and-omissions coverage for professional mistakes — a premises BOP will not defend a bad advice claim.",
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
                Wind mitigation credits, roof age, and the April 2026 OIR-B1-1802
                form change the{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  wind portion of a building premium
                </Link>
                . They belong to the association or the building owner more often
                than to a ground-floor tenant. They never substitute for flood,
                liquor, or workers&rsquo; compensation.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Commercial Flood: NFIP Caps, No Lost Income, and a 30-Day Wait
              </h2>
              <p>
                The National Flood Insurance Program writes commercial risks on
                the General Property Form. In the Regular Program the caps are
                $500,000 for the building and $500,000 for contents (stock,
                furniture, equipment) per building. That is double the
                residential dwelling cap, and it is still too low for many
                Collins Avenue interiors once you add kitchen equipment, wine
                inventory, or a jewelry case. Private flood and excess flood sit
                above those numbers. They are not automatically cheaper, and
                they are not automatically broader.
              </p>
              <p>
                What the federal form will not do is replace a month of covers
                after a surge closes the dining room. The Standard Flood
                Insurance Policy states that it does not pay for lost revenue or
                profits, loss of use, interruption of business, or extra
                expenses while the building is being repaired. Increased Cost of
                Compliance (up to $30,000, and it counts against the $500,000
                building cap) can help with elevation or floodproofing after a
                substantial-damage declaration. It does not pay payroll. If
                business-income after flood matters, you are shopping a private
                flood form or a difference-in-conditions layer, not assuming the
                BOP&rsquo;s interruption wording extends to rising water.
              </p>
              <p>
                Timing is the other commercial-flood fact people miss during a
                quiet peak. A new NFIP policy generally waits 30 days, with
                narrow exceptions such as certain loan closings. Private flood
                often quotes a shorter wait — commonly around 10 to 15 days —
                but moratoriums still appear once a storm is in the basin.
                President Trump signed H.R. 6500 on September 2, 2026, which
                substituted December 11, 2026 for September 30 in the National
                Flood Insurance Act&rsquo;s authorization dates. You can still
                buy an NFIP policy this week. December 11 is the same date the
                broader continuing resolution ends, so the next NFIP deadline
                rides with federal funding. Neither date is a substitute for
                binding. September 30 &ldquo;cliff&rdquo; posts still circulating
                online are out of date.
              </p>
              <p>
                Do not borrow unincorporated Miami-Dade&rsquo;s Community Rating
                System number for a Sunny Isles Beach commercial quote.
                Unincorporated Miami-Dade is Class 3 (a 35% NFIP discount for
                eligible policies). The City of Sunny Isles Beach has published
                a Class 8 rating, which is a 10% NFIP discount. CRS applies to
                qualifying NFIP policies, including many commercial forms. It
                does not make a BOP cover surge, and it does not follow you if
                you moved the storefront from Aventura into 33160.
              </p>
              <p>
                For a residential contrast — Citizens&rsquo; $400,000 Coverage A
                flood mandate, the HO-6 exemption, and the January 1, 2027
                remaining phase-in — see the{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens flood mandate guide
                </Link>
                . That statute does not place commercial flood. A storefront
                still needs its own decision because{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  standard property insurance does not cover flooding
                </Link>
                , and because{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  wind, surge, and flood remain three different claims
                </Link>{" "}
                on this island.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Liquor Liability vs. Florida&rsquo;s Narrow Dram-Shop Statute
              </h2>
              <p>
                Florida Statute 768.125 is one of the narrower dram-shop laws in
                the country. A person who sells or furnishes alcoholic beverages
                to someone of lawful drinking age is generally not liable for
                injury caused by that person&rsquo;s intoxication. Two exceptions
                remain: willfully and unlawfully furnishing alcohol to a minor,
                and knowingly serving a person habitually addicted to alcohol.
                The Florida Supreme Court has treated that statute as occupying
                the field for overservice claims against vendors.
              </p>
              <p>
                None of that language appears on a general-liability
                declarations page. Insurers still exclude liquor because they
                underwrite “in the business of” alcohol as a separate class.
                A lawsuit that names the restaurant still has to be defended.
                Landlords and hotel management companies on Collins Avenue
                routinely require evidence of liquor liability in the lease
                package even when the statute would likely bar the underlying
                claim. The insurance question is the contract and the defense
                obligation, not a prediction about who would win at trial.
              </p>
              <p>
                If you only serve complimentary wine at a real-estate open house
                and you are not in the business of selling alcohol, ask whether
                host liquor on the BOP actually responds. If a server pours for
                a check, treat liquor as its own line. Spoilage and food
                contamination endorsements are a different, restaurant-specific
                gap: a multi-day power loss after wind can ruin a walk-in
                without a drop of floodwater, and neither flood nor a bare
                property form is guaranteed to pick it up.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Tenant vs. Building Owner, Inland Marine, and the Lease Exhibit
              </h2>
              <p>
                Most occupied storefronts on Collins Avenue are leases inside a
                condominium or hotel podium. The association&rsquo;s master
                commercial-residential policy and the unit owner&rsquo;s HO-6
                are not your inventory policy. Three files should sit together
                before you bind:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    The lease insurance exhibit.
                  </strong>{" "}
                  Additional-insured wording for the landlord and, often, the
                  association; waiver of subrogation; required liability limits;
                  and whether you must insure tenant improvements to
                  replacement cost. A certificate of insurance that does not
                  match the exhibit is how a claim becomes a lease default.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Who insures the glass, sign, and sidewalk café.
                  </strong>{" "}
                  Exterior signage, awnings, and outdoor seating are easy to
                  leave off a contents-only tenant form. Wind-borne debris in
                  the HVHZ is a property claim, not a flood claim. Confirm
                  whether the building or the tenant schedules them.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Inland marine for goods that move.
                  </strong>{" "}
                  Jewelry, art, and high-end inventory that leaves the premises
                  — trunk shows, repairs, consignment, deliveries to Bal Harbour
                  or Aventura — often sit outside a locked BOP location. Inland
                  marine (or a jewelers&rsquo; block form) is how those values
                  are scheduled. A homeowners policy on a residence in Golden
                  Beach does not pick up the boutique.
                </li>
              </ul>
              <p>
                Delivery and catering vehicles need{" "}
                <Link
                  href="/auto-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  commercial auto
                </Link>
                , not a personal policy with an occasional-business story.
                Hired and non-owned auto matters when employees run errands in
                their own cars. Comprehensive on a parked work van is still
                what responds to flood or flying debris hitting the vehicle —
                the commercial flood policy on the storefront will not.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist for ZIP 33160 Storefronts This Month
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Separate the BOP from flood before the next tide window.
                  </strong>{" "}
                  September 24–October 15 is already on the SFWMD calendar, and
                  October 27 is the east-coast annual predicted peak. A 30-day
                  NFIP wait started this week can finish before that peak. A
                  wait started the afternoon a watch is posted for Miami-Dade
                  generally cannot.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Price NFIP and private flood on the same values.
                  </strong>{" "}
                  Building vs. contents vs. business income.                   If replacement
                  cost of equipment and stock sits above $500,000, the federal
                  cap is a known shortfall. Private flood that adds
                  loss-of-income wording is a different product from an NFIP
                  contents layer.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Use the City of Sunny Isles Beach CRS Class 8, not Miami-Dade
                    Class 3.
                  </strong>{" "}
                  The city flood-risk portal and Building Department (305.947.2150)
                  can confirm zone and elevation-certificate files. Floodsmart.gov
                  remains the NFIP rules source.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you serve alcohol, add liquor liability even though
                    § 768.125 is narrow.
                  </strong>{" "}
                  Match the limit to the lease. Keep ID-checking procedures;
                  they help the underwriting file and the two statutory
                  exceptions.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Count employees the way Florida counts them.
                  </strong>{" "}
                  Four or more in non-construction, including part-time and,
                  often, working owners. Construction at one. Do not assume a
                  BOP certificate satisfies a landlord who asked for evidence of
                  workers&rsquo; compensation.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not treat a quiet hurricane season as a closed season.
                  </strong>{" "}
                  El Niño years still produce Gulf and East Coast storms.
                  Binding restrictions follow the cone, not the seasonal
                  outlook. December 11 is the next shared NFIP funding date, not
                  a reason to skip the wait that starts when you actually bind.
                </li>
              </ul>
              <p>
                If you want a local reading of a Collins Avenue lease exhibit
                against a BOP, commercial flood quote, and liquor or workers&rsquo;
                compensation gap — including whether NFIP or private flood fits
                the contents values in 33160 — start a{" "}
                <Link
                  href="/quote?type=business"
                  className="text-ocean-500 hover:underline"
                >
                  business quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage exists only
                when an insurer issues it. The City of Sunny Isles Beach
                flood-risk portal, Floodsmart.gov, the Florida Division of
                Workers&rsquo; Compensation, and your lease are public or
                contractual sources; an appointed agent still has to place the
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
                  Atlantic hurricane-season statistics are described as public
                  National Hurricane Center and meteorological summaries stated
                  them as of this writing. South Florida Water Management
                  District 2026 east-coast king-tide windows (including the
                  October 27 predicted annual peak), H.R. 6500&rsquo;s December
                  11, 2026 NFIP extension, NFIP General Property Form Regular
                  Program caps of $500,000 building and $500,000 contents,
                  NFIP&rsquo;s exclusion of business interruption, CRS Class 8
                  for the City of Sunny Isles Beach, Florida Statute 768.125,
                  and Florida workers&rsquo; compensation thresholds (generally
                  four or more employees in non-construction; one or more in
                  construction) are described as those agencies and statutes
                  state them as of this writing. The FEMA Zone AE / 7.0-foot
                  BFE example for 18050 Collins Avenue is a public flood-layer
                  illustration, not a quote for that address. Eligibility,
                  deductibles, and required limits depend on the actual policy,
                  flood zone, lease, and underwriting. Review your documents and
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
                  label: "Business Insurance in Sunny Isles Beach",
                  href: "/business-insurance",
                  desc: "BOP, liability, and commercial property options for local businesses.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for coastal properties — including commercial.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The residential shopping comparison: $250k/$100k caps vs. commercial $500k/$500k.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood is a separate policy from wind and property forms.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood for Sunny Isles Beach properties.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A personal-residential rule — not the commercial flood decision.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "Wind credits do not substitute for commercial flood or a BOP.",
                },
                {
                  label: "Auto Insurance in Sunny Isles Beach",
                  href: "/auto-insurance",
                  desc: "Personal auto is not commercial auto for deliveries and catering.",
                },
                {
                  label: "Request a Business Quote",
                  href: "/quote?type=business",
                  desc: "Start a no-obligation commercial or flood quote.",
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
            Collins Avenue Business Insurance Questions for 2026
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
            Review a Collins Avenue Storefront Against a BOP and Flood Quote
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a business or flood quote and we will help match the lease
            exhibit, contents values, liquor exposure, and whether NFIP or
            private flood fits a 33160 ground floor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=business"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
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
