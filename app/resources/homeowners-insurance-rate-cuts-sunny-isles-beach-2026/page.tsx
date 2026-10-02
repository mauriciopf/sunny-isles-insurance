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
    "Homeowners Insurance Rate Cuts in Sunny Isles Beach | 2026",
  description:
    "OIR approved four more HO rate cuts on Sept. 22 for 62,000 policies. What Sunny Isles Beach owners should shop at renewal besides the statewide average — HVHZ, flood, and Citizens.",
  path: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Did Florida homeowners insurance rates go down in September 2026?",
    answer:
      "For some books, yes — at renewal, not mid-term. On September 22, 2026 the Florida Office of Insurance Regulation approved homeowners rate decreases at four companies affecting more than 62,000 policies: One Alliance North America and Vyrd at an average 10.4% each, Safe Harbor at 4.1%, and Unique at 3.2%. Commissioner Mike Yaworsky said more decrease filings are pending, from about 0.3% to 19.7%. Those are carrier-wide averages. A Sunny Isles Beach house in Miami-Dade’s High Velocity Hurricane Zone can see a different number than the statewide headline.",
  },
  {
    question:
      "If I live in ZIP 33160, will I automatically get a 7% or 20% cut?",
    answer:
      "No. The four OIR approvals this week average about 7% across those companies’ Florida books. Kin separately said it would cut homeowners rates by an average of more than 20% for qualifying new and existing customers in Broward, Miami-Dade, and Palm Beach. Averages mix inland and coastal risks. Barrier-island dwellings, older roofs, and homes without a current wind-mitigation inspection often sit on the expensive side of the same filing. The only number that matters is the renewal offer on your declarations page — compared with other admitted quotes that use the same Coverage A, hurricane deductible, and roof settlement terms.",
  },
  {
    question:
      "Does a homeowners rate cut include flood insurance in Sunny Isles Beach?",
    answer:
      "No. A homeowners or dwelling rate filing prices wind, fire, theft, and other covered perils on that form. It does not price a National Flood Insurance Program policy or a private flood form under Florida Statute 627.715. King-tide water on Collins Avenue this weekend is still a flood conversation. Shop the homeowners renewal and the flood policy as two quotes. A cheaper HO-3 that dropped water coverage or raised the hurricane deductible is not a bargain if the flood layer is still missing.",
  },
  {
    question:
      "Should I leave Citizens if private rates are falling?",
    answer:
      "Shop, then compare coverage — not only the estimated premium. Citizens’ policy count fell to 255,099 as of September 18, 2026, from more than 1.4 million at the 2023 peak. CEO Tim Cerio told the September 23 board that if you see an increase you should shop, and that even a flat renewal is worth shopping. A takeout letter is a different process from a voluntary move; the October 5 choice deadline for the October 20 assumption still controls if a Depopulation Packet is already in the mailbox. A private quote that is not more than 20% above Citizens can also end eligibility to stay.",
  },
  {
    question:
      "When do the September 2026 homeowners rate cuts take effect?",
    answer:
      "OIR said the four approved decreases are effective at renewals. They do not rewrite a policy that is already in force for the current term. If your anniversary is October or November, ask whether the new rate page is in the filing that applies to your renewal. If your anniversary is later, the statewide headline is a reason to request competing quotes now — not a reason to assume the current bill already dropped.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Homeowners Insurance Rate Cuts in Sunny Isles Beach",
    href: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-25";

export default function HomeownersInsuranceRateCutsSunnyIslesArticle() {
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
                "Florida Homeowners Insurance Rate Cuts in 2026: What Sunny Isles Beach Owners Should Shop at Renewal",
              description:
                "A Sunny Isles Beach shopping guide for the September 22, 2026 OIR homeowners rate cuts: four-carrier averages, why ZIP 33160 may not match the statewide number, flood as a separate layer, and Citizens’ shrinking book.",
              path: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
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
            Florida Homeowners Insurance Rate Cuts in 2026: What Sunny Isles
            Beach Owners Should Shop at Renewal
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Tallahassee approved another wave of homeowners decreases this
            week. On a barrier island, the work is still comparing coverage —
            not celebrating a statewide average.
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
                On Tuesday, September 22, Florida Insurance Commissioner Mike
                Yaworsky’s office announced homeowners rate decreases at four
                companies, affecting more than 62,000 policies at renewal.
                Wednesday morning, Citizens Property Insurance Corporation’s
                board heard the same market story from the other side: the
                residual market is still shrinking, and CEO Tim Cerio told
                agents and policyholders to shop even a flat renewal. None of
                that is a landfall story. Tropical Storm Gonzalo formed late
                Thursday near the Cabo Verde Islands as the Atlantic’s seventh
                named storm of 2026, with winds near 45 mph and no U.S.
                watches. Fay, far west of the Azores, is again a fish storm.
                The basin still has not produced a hurricane. The weather that
                actually reached ZIP 33160 this week is the king-tide window
                that started September 24 — a National Weather Service coastal
                flood statement for coastal Miami-Dade through Saturday
                evening, and water on low Collins Avenue streets that a
                homeowners rate filing never priced.
              </p>
              <p>
                This site already published a{" "}
                <Link
                  href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                  className="text-ocean-500 hover:underline"
                >
                  2026 condo-cost guide
                </Link>{" "}
                when Citizens’ commercial-residential master policies moved
                up, and a{" "}
                <Link
                  href="/resources/best-auto-insurance-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  2026 auto shopping guide
                </Link>{" "}
                when personal-auto rates eased. This piece is the house
                policy: what the September 22{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                approvals actually change for a Sunny Isles Beach dwelling,
                and what they do not. Association master policies and HO-6
                unit forms remain a different stack. So does flood.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What OIR Approved This Week — and What It Did Not
              </h2>
              <p>
                The official bulletin, sent at 2:28 p.m. EDT on September 22,
                named four admitted homeowners writers. The decreases apply at
                renewal:
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "One Alliance North America — 10.4% average",
                    desc: "17,148 policies. The company was formerly Universal North America. A 10.4% average is the company’s Florida homeowners book, not a promise that every 33160 renewal prints that number.",
                  },
                  {
                    title: "Vyrd — 10.4% average",
                    desc: "26,751 policies, the largest of the four books in the announcement. A June 2026 filing description that circulated while the request was pending showed a mix of component changes — including water and other-peril decreases offset by non-hurricane wind increases — that still produced a 10.4% overall cut. Component mix is why two houses on the same street can see different renewal math.",
                  },
                  {
                    title: "Safe Harbor — 4.1% average",
                    desc: "10,501 policies. Smaller than the 10% headlines, and still a decrease at renewal rather than a mid-term endorsement.",
                  },
                  {
                    title: "Unique — 3.2% average",
                    desc: "8,266 policies. Together with the other three, OIR’s round covered just over 62,600 policies. Insurance Journal summarized the four-company average as about 7%.",
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
                Yaworsky said OIR is receiving more decrease requests, from
                about 0.3% to 19.7%, and that the office will expedite those
                reviews. Since January 2024, 48 companies have filed a
                homeowners decrease and 53 have asked for no change. The
                30-day average requested homeowners change is now −4.8%,
                versus −1.1% a year earlier and +5.2% five years ago. In July
                2022 the average approved homeowners rate was +15.33%. Those
                are regulator statistics about filings. They are not a quote
                for a house west of Collins Avenue or a waterfront lot on the
                Atlantic side of the island.
              </p>
              <p>
                Two other September headlines sit next to the four approvals
                and should stay in their lanes. Kin said it would cut
                homeowners rates by an average of more than 20% for
                qualifying new and existing customers in Broward, Miami-Dade,
                and Palm Beach — useful South Florida color, not a ranking
                and not a guarantee for a High Velocity Hurricane Zone
                dwelling. Dairyland, a Sentry auto writer, said it would send
                about $30 million in dividends to Florida auto customers
                after a 14% auto rate cut. That is an auto story. If you are
                shopping a house this week, keep the auto dividend off the
                homeowners comparison sheet.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why a Barrier-Island Average Is Not the Statewide Average
              </h2>
              <p>
                Sunny Isles Beach is a narrow barrier island in Miami-Dade
                County. Most of the residential strip sits in a Special Flood
                Hazard Area — typically Zone AE, with VE wave pockets on the
                open Atlantic — and inside Florida’s High Velocity Hurricane
                Zone. Rating models price that geography whether or not the
                2026 Atlantic season has produced a hurricane. NOAA’s August
                update still gave a 75% chance of a below-normal season.
                Morningstar DBRS, in a report discussed at Citizens’
                Wednesday board meeting, said the quieter year gives carriers
                time to rebuild capital and that a major hurricane remains
                the stress test. A below-normal basin does not re-rate a
                33160 house as if it were inland Orange County.
              </p>
              <p>
                Three local facts usually move a renewal more than a
                Tallahassee average:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">Roof age and settlement.</strong>{" "}
                  Florida’s 15-year roof-age floor under section 627.7011
                  still shapes whether a carrier will write replacement cost
                  on the roof or actual cash value. A{" "}
                  <Link
                    href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    current OIR-B1-1802 inspection
                  </Link>{" "}
                  can change the wind portion of the premium. A rate-cut
                  filing does not replace a missing inspection.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Hurricane deductible, not the all-other-peril deductible.
                  </strong>{" "}
                  A 2%, 5%, or 10% hurricane deductible on a $1.2 million
                  Coverage A dwelling is a five- or six-figure number. A
                  cheaper renewal that quietly raised that percentage can
                  erase the advertised cut the first time a named storm is a
                  Miami-Dade problem.{" "}
                  <Link
                    href="/resources/hurricane-damage-home-insurance-sunny-isles"
                    className="text-ocean-500 hover:underline"
                  >
                    Wind, storm surge, and flood remain three conversations
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy-800">
                    Water and limited-water endorsements.
                  </strong>{" "}
                  Some 2026 filings cut “all other perils” and water rates
                  while leaving hurricane rates flat or raising non-hurricane
                  wind. Read the water wording. A cheaper premium that
                  narrowed sudden-and-accidental water, or that kept a
                  limited-water endorsement you no longer wanted, is a
                  coverage change dressed as a rate cut.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Citizens Is Smaller. Shopping Is Still the Assignment.
              </h2>
              <p>
                Citizens’ latest public count in the September 24 market
                write-ups was 255,099 policies in force as of September 18 —
                down from a 2023 peak above 1.4 million. The August snapshot
                cited at Wednesday’s board was 266,231. Total insured value
                at Citizens has fallen from about $553 billion in 2023 to an
                expected $85 billion this year, the corporation’s data show.
                That is depopulation working. It is not a notice that every
                remaining coastal policy is now cheap in the private market.
              </p>
              <p>
                Cerio’s line at the board meeting is the practical one: if
                the renewal goes up, shop; if it is flat, shop anyway. For a
                Sunny Isles Beach owner still on Citizens, that shopping
                list has two tracks. One is a voluntary move to an admitted
                private carrier that will actually write the address, with
                comparable Coverage A, ordinance-or-law, and hurricane
                deductible. The other is a{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Depopulation Packet
                </Link>{" "}
                if a takeout company already selected the policy. The
                October 20, 2026 assumption still has an October 5 choice
                deadline. Silence assigns the lowest offer. A private offer
                of comparable coverage that is not more than 20% above
                Citizens’ estimated renewal can also end eligibility to
                stay — the Senate Bill 2-A rule, not this week’s OIR
                averages.
              </p>
              <p>
                Citizens personal-lines owners with Coverage A of $400,000
                or more already live under the{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  statutory flood-insurance mandate
                </Link>
                , including many Zone X risks inland of the island. The
                remaining personal-residential phase-in is still January 1,
                2027. A cheaper homeowners renewal does not satisfy that
                flood proof. HO-6 unit policies remain a different
                exemption conversation than a house.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                This Weekend’s Tide Does Not Belong on the Homeowners Invoice
              </h2>
              <p>
                The South Florida Water Management District’s 2026
                east-coast king-tide calendar still lists September
                24–October 15, with the predicted annual peak on October 27.
                Miami-Dade and local outlets spent Thursday and Friday
                warning that the first weekend of that window can put sunny-day
                water on low streets even without a named storm. NWS
                described isolated minor coastal flooding on low-lying roads
                and property through Saturday evening, plus a high rip-current
                risk. That water is why this site published a{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  residential NFIP-versus-private shopping guide
                </Link>{" "}
                last week and a{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive-versus-PIP guide for the car
                </Link>{" "}
                on September 21. A homeowners decrease does not shorten
                NFIP’s typical 30-day wait, raise the $250,000 Regular
                Program dwelling cap, or move a parked car onto the house
                policy.
              </p>
              <p>
                Gonzalo and Fay are useful only as a negative: there is no
                Miami-Dade tropical-storm watch as of this writing, so
                binding moratoriums that freeze new wind limits or
                deductible cuts are not the delay this weekend. The delay,
                if there is one, is still underwriting — photos, a
                four-point or wind-mitigation inspection, and a flood
                application that has to be dated before anyone needs the
                coverage. The season runs through November 30. A quiet
                September is the shopping window. It is not a closed
                season.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Renewal Checklist for ZIP 33160
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Pull the declarations page before you shop the headline.
                  </strong>{" "}
                  Write down Coverage A, the hurricane deductible
                  percentage, the all-other-peril deductible, ordinance or
                  law, replacement-cost versus actual-cash-value roof, and
                  whether water is limited. Ask every competing quote to
                  match those lines, then price differences in the open.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Confirm the cut is on your renewal, not last month’s
                    press release.
                  </strong>{" "}
                  The four September 22 approvals are renewal effective.
                  If the anniversary is later this fall, request quotes now
                  so a November bill is not the first time you see the new
                  number.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Bring the wind-mitigation form to the quote, not to the
                    claim.
                  </strong>{" "}
                  Credits apply to the wind premium. They do not travel
                  from a prior owner. A 2026 rate filing is a poor
                  substitute for a missing April 2026-edition inspection.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Price flood on a second worksheet.
                  </strong>{" "}
                  NFIP, a private 627.715 form, or Citizens’ flood product
                  is not inside the homeowners decrease. King tides through
                  mid-October are the calendar, not Gonzalo.{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    Start a flood conversation
                  </Link>{" "}
                  if the house or the lowest finished floor still has no
                  flood policy.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you are a condo owner, keep the stacks separate.
                  </strong>{" "}
                  A personal HO-6 can follow personal-lines decreases. The
                  association master policy is commercial residential and
                  was the product that{" "}
                  <Link
                    href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                    className="text-ocean-500 hover:underline"
                  >
                    moved up in the July 1, 2026 Citizens commercial filing
                  </Link>
                  . Dues and special assessments are not a homeowners
                  rate-cut story.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not drop coverage to manufacture a larger percentage.
                  </strong>{" "}
                  Lower Coverage A, a thinner water endorsement, or a
                  higher hurricane deductible will make almost any renewal
                  look cheaper. That is not the comparison Cerio was
                  asking for, and it is a poor trade on a barrier island
                  that still has more than two months of hurricane season
                  left.
                </li>
              </ul>
              <p>
                If you want a local reading of a Sunny Isles Beach
                homeowners renewal against this week’s OIR averages — and
                against a flood quote that the rate cut never included —
                start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>{" "}
                or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. The September 22 OIR
                bulletin, Citizens’ September policy-count snapshots, SFWMD’s
                2026 king-tide calendar, and National Hurricane Center
                advisories on Gonzalo and Fay are public sources; an
                appointed agent still has to place the policy.
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
                  September 22, 2026 homeowners rate-decrease bulletin (One
                  Alliance North America −10.4% / 17,148 policies; Vyrd
                  −10.4% / 26,751; Safe Harbor −4.1% / 10,501; Unique −3.2%
                  / 8,266; more than 62,000 policies at renewal),
                  Commissioner Yaworsky’s pending-filing range of about
                  0.3% to 19.7%, OIR’s since-January 2024 count of 48
                  decrease filings and 53 no-change filings, the −4.8%
                  30-day average requested homeowners change, Kin’s
                  announced average decrease of more than 20% in Broward,
                  Miami-Dade, and Palm Beach, Citizens’ August and
                  September 18, 2026 policy counts and CEO shopping
                  comments at the September 23 board meeting, NOAA’s August
                  2026 below-normal outlook, National Hurricane Center
                  public tracking of Tropical Storms Fay and Gonzalo as
                  distant systems with no Florida watches as of September
                  25, 2026, and SFWMD’s 2026 east-coast king-tide window
                  are described as those agencies and outlets stated them
                  as of this writing. Eligibility, deductibles, inspection
                  rules, takeout deadlines, flood waiting periods, and
                  required limits depend on the actual policy, property,
                  and underwriting. Review your documents and speak with a
                  licensed Florida insurance professional about your
                  situation.
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
                  label: "Additional Living Expenses in Sunny Isles Beach (2026)",
                  href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
                  desc: "A cheaper renewal does not rewrite Coverage D — or put a hotel on the NFIP form.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, liability, and storm deductibles for South Florida houses.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims even when HO rates fall.",
                },
                {
                  label: "My Safe Florida Home Grants in Sunny Isles Beach (2026)",
                  href: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
                  desc: "A rate-cut filing does not nail a roof deck or pay for HVHZ glass.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "A current inspection still changes the wind premium more than a press-release average.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "Personal-lines HO cuts are not the association master-policy story.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 5 choice deadline and the 20% rule — separate from this week’s OIR averages.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A cheaper HO renewal does not satisfy the $400k flood proof.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "Shop the flood layer on its own worksheet during the king-tide window.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is still excluded from a standard homeowners form.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "The car stays on comprehensive — not on this week’s homeowners filing.",
                },
                {
                  label: "Best Auto Insurance Options in Sunny Isles Beach in 2026",
                  href: "/resources/best-auto-insurance-sunny-isles-beach-2026",
                  desc: "Auto rate relief is a different shopping list from the house.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for the dwelling, separate from wind.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Homeowners Quote",
                  href: "/quote?type=home",
                  desc: "Compare a 33160 renewal against coverage — not only the statewide average.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Price the flood layer the homeowners decrease never included.",
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
            Homeowners Rate-Cut Questions for 2026
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
            Shop the Renewal — Not Just the Headline
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners quote and we will help compare a Sunny
            Isles Beach renewal against coverage, hurricane deductibles,
            and a flood layer the September rate cuts never included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=home"
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Get a Homeowners Quote
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
