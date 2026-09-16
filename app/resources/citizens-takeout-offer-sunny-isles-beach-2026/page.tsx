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
    "Got a Citizens Takeout Letter in Sunny Isles Beach? 2026 HO-6 Guide",
  description:
    "Citizens’ October 20, 2026 assumption is next. Choice deadline is October 5. A Sunny Isles Beach guide to the 20% takeout rule, HO-6 coverage differences, and what coastal condo owners should compare besides premium.",
  path: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "What is a Citizens takeout or depopulation offer?",
    answer:
      "Depopulation is the Florida Legislature’s program for moving policies from Citizens Property Insurance Corporation — the state-created insurer of last resort — back to private companies approved by the Office of Insurance Regulation. If a takeout company selects your policy, Citizens mails a Depopulation Packet with coverage worksheets and estimated renewal premiums. Registering a choice by the date on the Offer Form is how you pick among those offers, or remain with Citizens if you are still eligible.",
  },
  {
    question:
      "What is the 20% rule on a Citizens takeout offer?",
    answer:
      "Under Senate Bill 2-A (December 2022) and section 627.351(6), Florida Statutes, a policy that receives a private-market offer of comparable coverage that is not more than 20% greater than Citizens’ estimated renewal premium is no longer eligible to remain with Citizens. An offer 15% higher than Citizens can still end eligibility. If every offer is more than 20% above Citizens, you may elect to stay — but only if you register that choice by the deadline. Silence is not staying.",
  },
  {
    question:
      "What happens if I ignore a Citizens depopulation letter?",
    answer:
      "Citizens will assign the policy to the participating takeout company that offered the lowest estimated premium, whether or not you were eligible to remain. There is no 30-day post-assumption window to reverse the transfer. Once assumption occurs, it is final. You would have to apply again later and meet current eligibility rules — including the 20% private-market test — to return to Citizens.",
  },
  {
    question:
      "Does a takeout of my HO-6 change my Sunny Isles Beach association’s master policy?",
    answer:
      "No. Your unit policy and the building’s master policy are separate contracts. A personal-lines takeout moves your HO-6 (or a house policy) to a private carrier. The association’s commercial-residential master policy is a board-level placement. Confirm that the new HO-6 still lines up with the master policy’s walls-in vs. bare-walls form, hurricane deductible, and loss-assessment exposure.",
  },
  {
    question:
      "When is the next Citizens personal-lines assumption after September 2026?",
    answer:
      "Citizens’ 2026 personal-lines calendar lists a September 15 assumption (policyholder choice deadline was September 3) and an October 20 assumption with a choice deadline of October 5. Later 2026 dates include November 17 (choice deadline November 5) and December 15 (choice deadline December 4). Always use the date printed on your own Offer Form — it controls, not a general calendar.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Citizens Takeout Offers in Sunny Isles Beach",
    href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-04";

export default function CitizensTakeoutSunnyIslesArticle() {
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
                "Got a Citizens Takeout Letter in Sunny Isles Beach? What It Means for Your HO-6 in 2026",
              description:
                "A Sunny Isles Beach guide to Citizens’ October 20, 2026 depopulation round, the 20% takeout rule, and how coastal condo owners should compare HO-6 coverage — not only the estimated premium.",
              path: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
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
            Got a Citizens Takeout Letter in Sunny Isles Beach? What It Means
            for Your HO-6 in 2026
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Private carriers are selecting coastal unit policies again. If a
            Depopulation Packet landed in a 33160 mailbox this summer, the
            October 5 choice deadline is the date that matters — not the
            premium on the first page.
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
                For several years, many Collins Avenue condo owners treated
                Citizens as the only{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                that would write a barrier-island unit. That is no longer the
                whole story. Florida’s Office of Insurance Regulation is still
                approving takeout companies for 2026 assumption dates, and
                Citizens is still mailing Depopulation Packets. The letter is
                not a courtesy. Under current law, a private offer inside a
                20% band of Citizens’ estimated renewal premium can end your
                eligibility to stay — and if nobody registers a choice,
                Citizens assigns the policy for you.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why This Letter Showed Up in September 2026
              </h2>
              <p>
                Citizens’ 2026 personal-lines depopulation calendar is public.
                Two dates sit on top of each other this month:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    September 15, 2026 assumption.
                  </strong>{" "}
                  Policyholder choice for that round was due{" "}
                  <strong className="text-navy-800">September 3</strong>. If
                  you were selected and did not register, Citizens will assign
                  the policy to the takeout company with the lowest estimated
                  premium. Assumption notices go out on the assumption date.
                </li>
                <li>
                  <strong className="text-navy-800">
                    October 20, 2026 assumption.
                  </strong>{" "}
                  Packets for this round were mailed around{" "}
                  <strong className="text-navy-800">August 27</strong>. The
                  choice deadline is{" "}
                  <strong className="text-navy-800">October 5, 2026</strong>.
                  That is the window still open for most households reading
                  this on or after September 4.
                </li>
              </ul>
              <p>
                Later 2026 personal-lines dates on the same calendar are
                November 17 (choice deadline November 5) and December 15
                (choice deadline December 4). Use the date printed on{" "}
                <em>your</em> Offer Form. A general calendar is orientation,
                not a substitute for the packet.
              </p>
              <p>
                OIR publishes the companies it has approved to participate in
                each round. For the October 20 assumption, consent orders
                posted in 2026 include Praxis Reciprocal Exchange, Southern
                Oak Insurance Company, American Integrity Insurance Company,
                and Florida Peninsula Insurance Company. Being on that list
                means the company met OIR’s takeout filing standard for that
                date. It is not a ranking, a solvency guarantee, or a
                recommendation for a Sunny Isles Beach unit. Compare the
                coverage worksheet in your packet — and the carrier’s
                financials on OIR’s take-out page — against the unit you
                actually own.
              </p>
              <p>
                One calendar footnote: Citizens’ offices are closed Monday,
                September 7, 2026 for Labor Day (claims can still be reported
                24/7). The October 5 deadline does not move. Do not wait for
                a holiday week to open the envelope.
              </p>
              <p>
                Peak Atlantic hurricane season still clusters around early
                September even in a quieter year. NOAA’s late-season outlook
                kept 2026 below normal, but a quiet basin is not a coverage
                plan. A takeout that changes your hurricane deductible or
                water wording in the same month the climatological peak
                arrives is worth reading slowly. Wind, surge, and flood are
                still different conversations — see{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  how hurricane damage is treated in Sunny Isles Beach
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                How a Personal-Lines Takeout Actually Works
              </h2>
              <p>
                Section 627.351(6)(q) of the Florida Statutes authorizes
                Citizens to reduce its exposure by letting approved insurers
                assume policies. Citizens’ own personal-lines depopulation
                page describes the mechanics in four beats:
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "1. The packet",
                    desc: "If one or more private companies select your policy, Citizens mails a Depopulation Packet: all available offers, estimated renewal premiums for each offer and for Citizens, and coverage worksheets. Some offers make the policy ineligible to remain with Citizens.",
                  },
                  {
                    title: "2. Register a choice",
                    desc: "Have your agent submit the choice, or use Citizens’ online Policyholder Choice tool with the policy number and registration code on the Offer Form. The due date on that form is the only deadline that counts.",
                  },
                  {
                    title: "3. Silence assigns the policy",
                    desc: "If no choice is registered by the Offer Form date, Citizens assigns the policy to the private-market company that offered the lowest estimated premium — including when you were eligible to stay.",
                  },
                  {
                    title: "4. Assumption is final",
                    desc: "If the policy is assumed, Citizens sends a Notice of Assumption and Nonrenewal and a Certificate of Assumption. There is no 30-day post-assumption period to return. Citizens’ wording is blunt: once an assumption occurs, the transfer is final.",
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
                Remaining with Citizens, when you are eligible, is also not a
                lifetime pass. Citizens warns that you may receive future
                offers and must respond to each one if you want to stay.
                Florida law also requires continued eligibility checks through
                renewal remarketing. Rejecting one assumption does not freeze
                you in Citizens forever.
              </p>
              <p>
                After a successful assumption, the new company generally
                services the existing Citizens forms through the end of the
                current term. The estimated premiums in the packet are
                estimates. The takeout company’s own OIR-approved rates and
                forms apply at renewal. That is when a “similar premium” can
                become a different deductible, a different water sublimit, or
                a different loss-assessment number.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The 20% Rule, Without the Marketing Version
              </h2>
              <p>
                Senate Bill 2-A, passed in December 2022, is the reason the
                letter feels mandatory. Citizens restates it this way:
                policies that receive an offer of coverage that is{" "}
                <strong className="text-navy-800">
                  not more than 20% greater
                </strong>{" "}
                than Citizens’ estimated renewal premium are no longer
                eligible to remain. You can still pick among the private
                offers. You cannot pick Citizens.
              </p>
              <p>
                Work a simple example. If Citizens’ estimated renewal for
                comparable coverage is $2,000, an offer of $2,400 is exactly
                20% higher and ends eligibility to stay. An offer of $2,300
                (15% higher) also ends it. An offer of $2,500 (25% higher)
                leaves the option to remain — if you register that choice.
                The comparison is to Citizens’ estimated renewal for
                comparable coverage, not to last year’s bill and not to a
                neighbor’s HO-6.
              </p>
              <p>
                Two letters look similar in the mailbox. A{" "}
                <strong className="text-navy-800">
                  Policyholder Choice
                </strong>{" "}
                packet generally means you still have a remain-with-Citizens
                option. A packet that treats you as ineligible to remain means
                at least one offer landed inside the 20% band. Read the
                eligibility sentence on the first page before you compare
                dollar amounts.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What “Comparable Coverage” Means on a Barrier-Island HO-6
              </h2>
              <p>
                Sunny Isles Beach is a small Atlantic barrier-island city in
                northeast Miami-Dade — between Golden Beach and Haulover
                Inlet, with Aventura and North Miami Beach inland. Most
                residents live in high-rises along Collins Avenue (A1A) in
                ZIP 33160. The unit policy has to fit that stock, not a
                suburban HO-3. Premium is the easy column. These are the
                columns that usually decide whether a takeout is actually a
                better{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  condo policy
                </Link>
                :
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Loss assessment.
                  </strong>{" "}
                  Florida requires at least $2,000 of property loss-assessment
                  coverage on a unit-owner residential policy (s. 627.714),
                  with a deductible of no more than $250 on that coverage.
                  That floor is not sized for a Collins Avenue tower whose
                  master-policy hurricane deductible can be spread across a
                  few hundred units. Confirm the takeout form’s limit — and
                  whether it still responds to a covered building loss. SIRS
                  and reserve special assessments are a different problem;
                  see{" "}
                  <Link
                    href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                    className="text-ocean-500 hover:underline"
                  >
                    why association costs and HO-6 premiums moved differently
                    in 2026
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy-800">
                    Hurricane or wind deductible.
                  </strong>{" "}
                  A percentage deductible on Coverage A or C can dwarf a
                  modest premium “savings.” Match the trigger (named storm vs.
                  hurricane vs. wind) and the percentage to what you carry
                  today.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Interior / upgrades (Coverage A).
                  </strong>{" "}
                  Citizens HO-6 Coverage A is often modest. A renovated
                  kitchen on the 28th floor is not a $1,000 problem. Check
                  whether the takeout uses replacement cost on improvements
                  and how it treats the association’s walls-in vs. bare-walls
                  master policy.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Water, backup, and mold sublimits.
                  </strong>{" "}
                  High-rise claims are frequently water, not wind. Citizens
                  forms are thinner on several of these endorsements than
                  many private HO-6s. A cheaper estimated premium that
                  excludes water backup is not automatically the better
                  policy in a tower.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Liability and scheduled items.
                  </strong>{" "}
                  Citizens personal liability is commonly capped well below
                  what a private carrier will write, and scheduled jewelry or
                  fine arts often is not available. If the unit is a
                  second home with guests, the liability number matters as
                  much as contents.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Combined Coverage A and C caps.
                  </strong>{" "}
                  Citizens generally will not write a unit-owner policy whose
                  dwelling and contents limits combined reach $700,000 —
                  $1 million in Miami-Dade and Monroe. A takeout that can
                  actually insure a high-value interior is sometimes the
                  point of leaving, even if the estimated premium is not
                  lower.
                </li>
              </ul>
              <p>
                Flood still is not in the HO-6. Storm surge at the beach is
                a flood conversation. Neither Citizens nor a private takeout
                of your unit policy replaces{" "}
                <Link
                  href="/flood-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  flood insurance
                </Link>
                . NFIP contents and private flood quotes have waiting
                periods; buying the week a watch is posted is usually too
                late. See{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  why standard policies do not cover flooding
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Your HO-6 Can Move While the Building Stays Put
              </h2>
              <p>
                A personal-lines takeout does not rewrite the association
                master policy. In 2026 that split is easy to miss: Citizens
                cut many personal-line HO-6 rates on July 1 renewals, while
                commercial-residential condo association rates went up. The
                board’s wind or multiperil placement, the building hurricane
                deductible, and any SIRS assessment are unchanged by your
                unit’s assumption date.
              </p>
              <p>
                Ask for a current certificate of the master policy before you
                accept a takeout that shrinks loss assessment or Coverage A.
                If the building is still with Citizens commercially, or still
                wind-only, your unit policy is the only contract you control.
                Matching the two is the job — not chasing the lowest estimate
                in the packet.
              </p>
              <p>
                The same logic applies if you own a house or townhome in the
                33160 / 33180 pocket rather than a high-rise. Takeout rules
                are the same personal-lines machinery. Roof age, opening
                protection, and{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners
                </Link>{" "}
                hurricane deductibles replace loss assessment on the
                worksheet, but the 20% eligibility test and the October 5
                deadline do not.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                A Practical Checklist Before October 5
              </h2>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    Find the Offer Form date.
                  </strong>{" "}
                  If it was September 3 and you did nothing, watch for the
                  September 15 assumption mail. If it is October 5, you still
                  have time to compare worksheets.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Confirm eligibility to remain.
                  </strong>{" "}
                  If any offer is not more than 20% above Citizens’ estimate,
                  staying is not on the menu. Spend the time choosing among
                  private forms, not drafting an opt-out that will not file.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Line up the worksheets, not the headlines.
                  </strong>{" "}
                  Loss assessment, hurricane deductible, Coverage A, water
                  backup, liability, and ordinance or law (for houses) before
                  the dollar column.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Check OIR’s take-out company page.
                  </strong>{" "}
                  Consent orders, assumption dates, and company materials are
                  public at floir.gov. Read them the way a lender will.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Register the choice.
                  </strong>{" "}
                  Agent submission or Citizens’ online tool with the
                  registration code. If you are eligible to stay and want to
                  stay, that still has to be registered. No response assigns
                  the lowest estimated premium.
                </li>
                <li>
                  <strong className="text-navy-800">
                    Keep flood in force.
                  </strong>{" "}
                  A new HO-6 does not start a flood policy. Confirm the flood
                  declarations separately, especially if the unit sits in a
                  coastal AE or VE zone on FEMA’s map.
                </li>
              </ul>
              <p>
                If you want a local reading of the packet against a Sunny
                Isles Beach unit — HO-6 limits, loss assessment, and whether
                a private market quote outside the takeout might fit better —
                start a{" "}
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
                </Link>
                . A quote request does not bind coverage. Coverage exists
                only when an insurer issues it. Citizens Customer Care is
                888-685-1555 / 866-411-2742 for packet questions; your
                appointed agent can register the choice.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a recommendation of any takeout
                  company, or a prediction that any specific Sunny Isles Beach
                  policy will be selected. 2026 assumption and choice dates
                  are from Citizens’ personal-lines depopulation calendar;
                  your Offer Form controls. The 20% eligibility test and
                  assumption-final rule are described as Citizens and Florida
                  law (including s. 627.351(6) and SB 2-A) state them as of
                  this writing. OIR takeout approvals are public filings, not
                  endorsements. Coverage, deductibles, and eligibility depend
                  on the actual policy forms, underwriting, and your
                  association documents. Review the packet, the declarations
                  page, and speak with a licensed Florida insurance
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
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 coverage that sits beside the association master policy.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "Which inspection form a Collins Avenue tower uses, and how July 1 HO-6 tables changed.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "2026 HO-6 rate cuts vs. association master-policy increases.",
                },
                {
                  label: "Special Assessments vs HO-6 Loss Assessment (2026)",
                  href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
                  desc: "Compare loss-assessment limits on a takeout — not only the estimated premium.",
                },
                {
                  label: "What Does Condo Insurance Cover in Florida?",
                  href: "/resources/condo-insurance-florida",
                  desc: "HO-6 vs. master policy: belongings, upgrades, and liability.",
                },
                {
                  label: "Does Home Insurance Cover Hurricane Damage?",
                  href: "/resources/hurricane-damage-home-insurance-sunny-isles",
                  desc: "Wind, surge, flood, and hurricane deductibles locally.",
                },
                {
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Takeout rules also apply to house policies in 33160.",
                },
                {
                  label: "Citizens Flood Mandate in Sunny Isles Beach (2026)",
                  href: "/resources/citizens-flood-mandate-sunny-isles-beach-2026",
                  desc: "A takeout does not replace CIT FW01 or a flood policy already required on $400k+ homes.",
                },
                {
                  label: "Request a Condo Quote",
                  href: "/quote?type=condo",
                  desc: "Review HO-6 limits and loss assessment before a takeout deadline.",
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
            Citizens Takeout Questions for 2026
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
            Review a Takeout Offer for a Sunny Isles Beach Unit
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request an HO-6 quote or call us to walk through loss assessment,
            deductibles, and the October 5 choice deadline against your
            packet.
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
