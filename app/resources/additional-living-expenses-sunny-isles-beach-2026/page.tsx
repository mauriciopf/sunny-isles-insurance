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
    "Additional Living Expenses in Sunny Isles Beach | Hotel After a Storm 2026",
  description:
    "NFIP still pays no hotel bill. How Sunny Isles Beach owners should read HO-3 and HO-6 loss-of-use during a 330-day hurricane drought and this week’s king tides.",
  path: "/resources/additional-living-expenses-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does homeowners insurance pay for a hotel after a hurricane in Sunny Isles Beach?",
    answer:
      "It can — but only when a covered peril makes the house or unit uninhabitable, and only for the extra cost of keeping a comparable standard of living. Wind, a fallen tree, or fire on an HO-3 or HO-6 is the usual trigger. Storm surge, king-tide street flooding, and other external flood are not covered perils on a standard homeowners or condo form. The National Flood Insurance Program Dwelling Form does not pay additional living expenses. Read Coverage D (loss of use) on the declarations page, including any dollar, percentage, or time cap, before you assume a hotel is prepaid.",
  },
  {
    question:
      "If king tides flood Collins Avenue, will my homeowners policy put me in a hotel?",
    answer:
      "Usually no. Additional living expenses follow a covered loss to the insured residence, not wet pavement. The South Florida Water Management District’s 2026 east-coast window still includes September 24–October 15, with the predicted annual peak on October 27. Local outlooks also flagged September 26–30 and October 7–13 as king-tide periods. Water on low Collins Avenue streets is a flood conversation — NFIP or a private flood form under Florida Statute 627.715 — not Coverage D on the house or HO-6 policy. If surge enters the dwelling, the hotel bill still is not on the federal flood form.",
  },
  {
    question:
      "Does NFIP flood insurance cover additional living expenses in Florida?",
    answer:
      "No. The Standard Flood Insurance Policy Dwelling Form pays direct physical loss by or from flood to the building and, if purchased, contents. It does not pay a hotel, short-term rental, extra meals, or extra commuting while you wait for dry-out. Some private flood policies sold under section 627.715 may offer extra living expense or loss-of-use; that is a form comparison, not a federal benefit. Shop ALE on the private quote the same way you shop the $250,000 Regular Program dwelling cap.",
  },
  {
    question:
      "If my Collins Avenue condo unit is dry but the elevators are out, can HO-6 loss of use apply?",
    answer:
      "Sometimes, if a covered wind or other insured peril made the building unsafe or unusable as a residence even though your interior finishes were spared. That is a facts-and-policy question: civil-authority wording, whether the association’s damage is from wind versus flood, and whether you actually incurred extra living costs. The association master policy is not a hotel policy for unit owners. A special assessment for repairs is a different stack from Coverage D. Flood of a ground-floor garage or lobby is still flood.",
  },
  {
    question:
      "Do Friday’s homeowners rate cuts change my additional living expenses limit?",
    answer:
      "Not by themselves. The September 22, 2026 Office of Insurance Regulation homeowners decreases apply at renewal to premium. They do not rewrite Coverage D. The American Property Casualty Insurance Association’s late-September 2026 study said Floridians paid nearly $3 billion less for home and auto in 2025 than the year before, and that nearly half of shoppers who compared quotes found a better price. Use that remarketing window to match ALE limits, hurricane-deductible wording, and a flood form that actually addresses extra living costs — not only the statewide average premium.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Additional Living Expenses in Sunny Isles Beach",
    href: "/resources/additional-living-expenses-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-28";

export default function AdditionalLivingExpensesSunnyIslesArticle() {
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
                "Additional Living Expenses in Sunny Isles Beach in 2026: Who Pays If Wind or Flood Keeps You Out",
              description:
                "A Sunny Isles Beach guide to HO-3 and HO-6 loss of use versus NFIP’s hotel gap, timed to the 330-day Atlantic hurricane drought and September–October 2026 king tides.",
              path: "/resources/additional-living-expenses-sunny-isles-beach-2026",
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
            Additional Living Expenses in Sunny Isles Beach in 2026: Who Pays
            If Wind or Flood Keeps You Out
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A quiet Atlantic does not rewrite Coverage D. On a barrier island,
            the hotel bill still depends on whether the peril was wind — or
            water the homeowners form never insured.
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
                Monday, September 28, the Atlantic is still waiting on its
                first hurricane of 2026. Public trackers put the drought at
                more than 330 days since Hurricane Melissa formed on October
                13, 2025. Seven named storms have come and gone. None reached
                74 mph. Tropical Depression Fay, the season’s longest-lived
                system, is a fish storm with no land threat. National Hurricane
                Center products over the weekend pointed to Invest 91L well
                east of the Carolinas as a possible next name — Hannah — on a
                track that would still miss Florida. That is weather. The
                insurance work this week is the king-tide water already in the
                South Florida forecast, and the Coverage D line most people
                never read until they are standing in a hotel lobby.
              </p>
              <p>
                This site already explained{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  why wind, storm surge, and flood are three claims
                </Link>{" "}
                and{" "}
                <Link
                  href="/resources/nfip-vs-private-flood-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  why the federal flood form caps the building at $250,000
                </Link>
                . The NFIP shopping guide flagged the hotel gap in one
                paragraph. This piece is that gap: additional living expenses
                — loss of use — on an HO-3 house west of Collins Avenue, an
                HO-6 on the beach, and an HO-4 rental, versus the flood layer
                that still does not buy a room.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Additional Living Expenses Actually Pay
              </h2>
              <p>
                On a typical Florida homeowners, condo, or renters form,
                Coverage D (loss of use) reimburses the extra cost of
                maintaining your normal standard of living when a covered
                peril makes the residence unfit to live in. The usual examples
                are a hotel or short-term rental, incremental meal cost above
                what you would have spent at home, laundry, pet boarding, and
                extra commuting. It is not a per diem gift. Insurers subtract
                the expenses you would have incurred anyway. Mortgage,
                association dues, and the grocery bill you would have paid in
                ZIP 33160 stay yours.
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Covered peril, then uninhabitable",
                    desc: "Wind that opens the roof, a kitchen fire, or a tree through the living room is the classic HO-3 path. The house or unit has to be unfit as a residence — not merely inconvenient. A damp garage after a king tide, with the bedrooms dry and the power on, is not a hotel claim on the homeowners form.",
                  },
                  {
                    title: "A limit you can miss on the declarations page",
                    desc: "ALE is often a percentage of Coverage A, a stated dollar cap, a number of months, or some mix. A cheaper renewal that quietly lowered that percentage is not a bargain the first week you cannot sleep in the house. Friday’s Office of Insurance Regulation homeowners decreases price premium at renewal. They do not automatically restore a thin Coverage D.",
                  },
                  {
                    title: "Hurricane deductible math",
                    desc: "A 2%, 5%, or 10% hurricane deductible is a percentage of Coverage A, not of the hotel folio. On many forms it applies to the entire hurricane loss, which can include dwelling, contents, and loss of use. A large percentage deductible can eat the first days of extra living costs before Coverage D starts to look like a reimbursement.",
                  },
                  {
                    title: "Fair rental value is a different sentence",
                    desc: "If you rent the dwelling or unit to someone else, loss of use may include fair rental value for the period a covered peril keeps the tenant out. That is not additional living expenses for your own hotel if you live elsewhere. Snowbirds should read both clauses before assuming a vacant-home winter policy behaves like a primary-residence HO-3.",
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

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Flood Still Does Not Buy the Hotel on the Federal Form
              </h2>
              <p>
                Standard{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>
                ,{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>
                , and{" "}
                <Link
                  href="/renters-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  renters
                </Link>{" "}
                policies exclude flood from external water. Storm surge at
                Sunny Isles Beach is generally treated as flooding. The
                National Flood Insurance Program Dwelling Form pays direct
                physical loss by or from flood to the building and, if you
                bought it, contents. It does not pay additional living
                expenses. That is why a surge claim can rebuild the first
                floor up to the Regular Program cap and still leave the family
                paying the Marriott until the dry-out is done.
              </p>
              <p>
                Private flood under Florida Statute 627.715 is the place to
                ask the ALE question out loud. Some preferred or flexible
                private forms include extra living expense or loss-of-use;
                many do not, or they cap it tightly. Excess flood that sits
                above NFIP usually follows the federal form unless the
                surplus-lines wording says otherwise. Compare that sentence
                on the quote, not the binder later. Citizens’ flood product
                and the remaining{" "}
                <Link
                  href="/resources/citizens-flood-mandate-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  $400,000 Coverage A flood proof
                </Link>{" "}
                tell you that you must buy a flood policy. They do not tell
                you the hotel is included.
              </p>
              <p>
                The waiting-period calendar has not moved because September is
                quiet. NFIP’s typical 30-day wait still applies to a voluntary
                purchase. Private flood often binds faster, commonly on the
                order of 10 to 15 days, depending on the market. Binding
                moratoriums that freeze new wind limits are not the Miami-Dade
                story this morning — there is no Florida tropical-storm watch
                as of this writing — but underwriting photos and a flood
                application still have to be dated before anyone needs the
                room.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Houses, Towers, and This Week’s Tide
              </h2>
              <p>
                Most of ZIP 33160 is high-rise condominiums along Collins
                Avenue. A smaller pocket of houses and townhomes sits west of
                the beach and in adjoining 33180. Loss of use does not treat
                those as the same building.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Single-family and townhome HO-3.
                  </strong>{" "}
                  If wind makes the dwelling unsafe, Coverage D is the hotel
                  conversation on the homeowners policy. If water comes in
                  from the bay or the Atlantic, switch stacks: dwelling and
                  contents on{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    flood
                  </Link>
                  , and do not look for ALE on the NFIP declarations page.
                  Interior water from a sudden pipe break is a different
                  homeowners water claim — still not flood.
                </li>
                <li>
                  <strong className="text-navy-800">HO-6 on a tower.</strong>{" "}
                  The unit owner’s loss-of-use wording can respond when a
                  covered peril makes the unit uninhabitable, including some
                  cases where the interior is intact but wind damage took out
                  elevators, power, or required a civil-authority evacuation.
                  The association master policy pays the building, not your
                  extra rent. A{" "}
                  <Link
                    href="/resources/special-assessments-ho6-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    special assessment
                  </Link>{" "}
                  for repairs is not Coverage D. Flood of the lobby or a
                  ground-floor garage remains flood.
                </li>
                <li>
                  <strong className="text-navy-800">HO-4 tenants.</strong>{" "}
                  Renters loss of use follows the same covered-peril logic.
                  Landlord additional-insured rules and a contents-only flood
                  policy are the rest of the{" "}
                  <Link
                    href="/resources/renters-insurance-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    2026 renters stack
                  </Link>
                  . Street flooding that keeps you from parking on Collins
                  Avenue is not, by itself, a hotel claim.
                </li>
              </ul>
              <p>
                The tide calendar is the local weather that actually reached
                the island. The South Florida Water Management District’s 2026
                east-coast outlook still lists September 24–October 15, then
                October 22–November 12, with the predicted annual maximum on
                October 27. Miami-area roundups also listed September 26–30
                and October 7–13 as king-tide windows, with especially high
                predicted stands around October 10, 26, and 27. That water
                can stall a car — a{" "}
                <Link
                  href="/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  comprehensive auto claim
                </Link>
                , never NFIP — without ever opening Coverage D on the
                residence.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Shop ALE in the Same Window Carriers Are Cutting Premium
              </h2>
              <p>
                On September 27, Insurance Business reported the American
                Property Casualty Insurance Association’s latest actuarial
                study: Florida policyholders paid nearly $3 billion less for
                home and auto insurance in 2025 than the year before. Chase
                Mitchell of APCIA tied the trend to the 2022–23 legal reforms
                and to a quiet 2026 Atlantic season, with June 1, 2027
                reinsurance renewals still ahead. Commissioner Mike
                Yaworsky’s September 22 homeowners decreases — covered in our{" "}
                <Link
                  href="/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  33160 renewal shopping guide
                </Link>{" "}
                — are the premium headline. Additional living expenses are
                the coverage headline most shoppers skip.
              </p>
              <p>
                APCIA also said nearly half of policyholders who shopped
                found a better price. A better price that dropped Coverage D,
                raised the hurricane deductible, or left flood without extra
                living expense is not the comparison Citizens CEO Tim Cerio
                asked for at the September 23 board meeting. The season still
                runs through November 30. A 330-day hurricane drought is a
                shopping window. It is not proof that ZIP 33160 will go
                unused as a High Velocity Hurricane Zone.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Loss-of-Use Checklist for ZIP 33160
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Write down Coverage D before you shop the premium.
                  </strong>{" "}
                  Dollar limit, percentage of Coverage A, number of months,
                  and whether a hurricane percentage deductible applies to
                  the whole loss. Ask every competing{" "}
                  <Link
                    href="/quote?type=home"
                    className="text-ocean-500 hover:underline"
                  >
                    homeowners
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/quote?type=condo"
                    className="text-ocean-500 hover:underline"
                  >
                    condo
                  </Link>{" "}
                  quote to match those lines.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Ask the flood quote a question NFIP cannot answer with
                    “yes.”
                  </strong>{" "}
                  “Does this form pay extra living expenses, and for how
                  long?” If the answer is the Dwelling Form, the answer is
                  no. If it is a private 627.715 policy, get the sublimit in
                  writing.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep receipts as if the adjuster will ask tomorrow.
                  </strong>{" "}
                  Hotels, meals above normal, laundry, pet boarding, and
                  extra mileage are the usual proof. A covered peril that
                  never produced extra cost does not generate a Coverage D
                  check.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Do not confuse access with habitability.
                  </strong>{" "}
                  King-tide water on Collins Avenue, a garage you would
                  rather not use, or a longer drive around a flooded
                  intersection is not, by itself, additional living expenses.
                </li>
                <li>
                  <strong className="text-navy-800">
                    If you rent the unit, separate your hotel from the
                    tenant’s.
                  </strong>{" "}
                  Fair rental value and additional living expenses are
                  neighboring sentences. A vacant-home or seasonal occupancy
                  endorsement can change both.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Leave the fish storms off the claim file.
                  </strong>{" "}
                  Fay and a possible Hannah far from Florida do not start a
                  Miami-Dade wind deductible. The tide windows through
                  mid-October, and the rest of a hurricane season that still
                  has two months left, do.
                </li>
              </ul>
              <p>
                If you want a local reading of Coverage D on a Sunny Isles
                Beach house or HO-6 — and a flood quote that states whether
                extra living expense exists at all — start a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>
                , a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                , or a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. National Hurricane Center
                public products on Fay and Invest 91L, SFWMD’s 2026 king-tide
                calendar, the Florida Office of Insurance Regulation’s
                September 22 homeowners bulletin, and APCIA’s late-September
                2026 cost study are public sources; an appointed agent still
                has to place the policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It
                  is not insurance advice, a guarantee of any premium or
                  claim payment, or a recommendation of any carrier or
                  product. Additional living expenses, loss of use, hurricane
                  deductibles, civil-authority wording, and flood extra
                  living expense depend on the actual policy. The National
                  Flood Insurance Program Dwelling Form’s lack of additional
                  living expenses, Florida Statute 627.715 private-flood
                  forms, the Florida Office of Insurance Regulation’s
                  September 22, 2026 homeowners rate-decrease bulletin,
                  APCIA’s late-September 2026 finding that Florida
                  policyholders paid nearly $3 billion less for home and auto
                  in 2025 than the year before, National Hurricane Center and
                  public tracking of a 2026 Atlantic season with seven named
                  storms and no hurricane as of September 28, 2026, a drought
                  of more than 330 days since Hurricane Melissa (October 13,
                  2025), Tropical Depression Fay as a distant weakening
                  system, Invest 91L as a possible next name far from
                  Florida, and SFWMD’s 2026 east-coast king-tide windows
                  including September 24–October 15 with a predicted annual
                  peak on October 27 are described as those agencies and
                  outlets stated them as of this writing. Eligibility,
                  deductibles, waiting periods, and required limits depend on
                  the property and underwriting. Review your documents and
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
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, liability, and the Coverage D line this guide unpacks.",
                },
                {
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 loss of use is not the association’s master-policy claim.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, and flood remain three claims — ALE only follows a covered peril.",
                },
                {
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "The federal form still has no hotel bill. Ask private flood the ALE question.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "External flood is excluded from a standard homeowners form before Coverage D is even reached.",
                },
                {
                  label: "Does Auto Insurance Cover King Tide Flooding?",
                  href: "/resources/auto-insurance-flood-king-tide-sunny-isles-beach-2026",
                  desc: "Street water on the car is comprehensive — not additional living expenses.",
                },
                {
                  label: "Florida Homeowners Insurance Rate Cuts (2026)",
                  href: "/resources/homeowners-insurance-rate-cuts-sunny-isles-beach-2026",
                  desc: "Shop the premium and the ALE limit in the same remarketing window.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 loss of use follows the same covered-peril rule as the owner forms.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "An assessment for building repairs is not a hotel reimbursement.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A required flood policy still is not, on the NFIP form, a hotel policy.",
                },
                {
                  label: "Flood Insurance in Sunny Isles Beach",
                  href: "/flood-insurance",
                  desc: "NFIP and private flood for the dwelling, separate from wind and ALE.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Homeowners Quote",
                  href: "/quote?type=home",
                  desc: "Match Coverage D, the hurricane deductible, and the flood ALE question.",
                },
                {
                  label: "Request a Flood Quote",
                  href: "/quote?type=flood",
                  desc: "Ask whether extra living expense exists — NFIP’s Dwelling Form does not include it.",
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
            Additional Living Expense Questions for 2026
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
            Read Coverage D Before You Need the Hotel
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a homeowners, condo, or flood quote and we will help
            compare loss-of-use limits against a flood form that may not pay
            additional living expenses at all.
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
