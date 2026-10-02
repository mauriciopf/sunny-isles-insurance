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
  title: "Special Assessments vs HO-6 Coverage in Sunny Isles Beach | 2026",
  description:
    "A 2026 Sunny Isles Beach how-to: which condo special assessments HO-6 loss assessment actually pays, the $2,000 statutory floor, hurricane-deductible math, and why SIRS and recertification bills are different.",
  path: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
});

const faqs = [
  {
    question:
      "Does my HO-6 pay a special assessment from my Sunny Isles Beach condo association?",
    answer:
      "Only if the assessment is your share of a direct property loss that your HO-6 would otherwise cover — typically a hurricane, fire, or similar sudden damage to association property — and only up to the loss-assessment limit in force the day before that occurrence. Florida Statute 627.714 requires at least $2,000 of that coverage. Assessments to fund a Structural Integrity Reserve Study, 25-year coastal recertification, roof replacement on a schedule, or deferred maintenance are generally not a covered “loss assessment,” no matter how large the bill.",
  },
  {
    question:
      "Is $2,000 of loss assessment coverage enough for a Collins Avenue high-rise?",
    answer:
      "It is the statutory floor, not a recommendation. A named-storm deductible on a commercial-residential master policy is usually a percentage of the building’s insured value. On a large ZIP 33160 tower, a 5% deductible spread across the units can produce a five-figure per-unit bill. Raising the HO-6 limit still matters for underinsured or uncovered building damage. Some forms also sub-limit the slice of an assessment that is simply the master-policy deductible, so read that endorsement — not only the declarations number.",
  },
  {
    question:
      "Can I raise my loss assessment limit after a hurricane and still collect on the assessment?",
    answer:
      "Usually no. Section 627.714(2) locks the applicable limit at the amount in force one day before the occurrence that gave rise to the loss. Buying a higher limit after the storm — or after the assessment letter arrives — does not apply to that event. The 2026 Atlantic season has remained historically quiet through mid-September, which is the window to review the limit before a named hurricane, not after one.",
  },
  {
    question:
      "Does HO-6 loss assessment cover SIRS funding or Miami-Dade 25-year recertification?",
    answer:
      "Generally no. A Structural Integrity Reserve Study under section 718.112 and a recertification or milestone inspection under Miami-Dade Code 8-11(f) and Florida Statute 553.899 are planning and safety requirements. The resulting reserve catch-up or repair assessment is not a sudden covered peril. In Sunny Isles Beach, condominiums three stories or taller within three miles of the coast typically recertify at 25 years, then every 10 years — a schedule that is producing large bills without an insurance claim attached.",
  },
  {
    question:
      "If the 2026 hurricane season stays quiet, do I still need higher loss assessment limits?",
    answer:
      "Yes, if your exposure is the master-policy deductible and any uninsured building damage. A quiet peak does not shrink a 5% or 10% named-storm deductible. Trade reporting on the June 1, 2026 reinsurance renewals described softer catastrophe pricing for Florida carriers; that can help the association’s premium. It does not change the percentage the building keeps on the first dollar of a hurricane loss. The season still runs through November 30.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Special Assessments vs HO-6 Loss Assessment",
    href: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
  },
];

const dateModified = "2026-09-16";

export default function SpecialAssessmentsHo6Article() {
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
                "Special Assessments vs HO-6 Loss Assessment Coverage in Sunny Isles Beach in 2026",
              description:
                "A Sunny Isles Beach how-to for reading a 2026 condo assessment letter: which bills HO-6 loss assessment actually pays, the $2,000 statutory floor, hurricane-deductible math on a Collins Avenue tower, and why SIRS and 25-year recertification assessments are different.",
              path: "/resources/special-assessments-ho6-sunny-isles-beach-2026",
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
            Special Assessments vs HO-6 Loss Assessment Coverage in Sunny Isles
            Beach in 2026
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            A record-quiet Atlantic peak is the window to size the HO-6 limit
            that actually responds to a storm assessment — not the SIRS or
            recertification bill that arrived this year.
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
                Mid-September 2026 still has no Atlantic hurricane. Five named
                storms have formed; none has reached 74 mph. That is the latest
                first hurricane in the satellite era, past the September 11
                mark set in 2002 and 2013. For a Collins Avenue owner, the
                useful fact is not the trivia. It is the calendar. Florida
                Statute 627.714(2) freezes your{" "}
                <Link
                  href="/condo-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  HO-6
                </Link>{" "}
                loss-assessment limit at the amount in force the day before the
                occurrence. A quieter peak is when you still have time to
                change that number. It is not an all-clear on the assessment
                you already received — or the one a named storm would still
                produce in October or November.
              </p>
              <p>
                This month also produced a reminder a few miles inland. On
                September 11, 2026, the Miami-Dade State Attorney&rsquo;s Office
                announced charges in an alleged kickback scheme at Venetian
                Gardens at Country Club Miami, a 21-building condominium. The
                association had levied a 2024 special assessment for roofs,
                windows, and railings; some owners told reporters they paid and
                still did not see the work. Those are allegations in a pending
                case, not a Sunny Isles Beach building. The insurance lesson
                travels: a special assessment is a bill with a purpose. If the
                purpose is deferred maintenance or a contractor invoice,{" "}
                <Link
                  href="/resources/condo-insurance-florida"
                  className="text-ocean-500 hover:underline"
                >
                  your HO-6
                </Link>{" "}
                is usually not the checkbook. If the purpose is a hurricane
                deductible on the master policy, it might be — up to a limit
                that is often far too small.
              </p>
              <p>
                We already covered{" "}
                <Link
                  href="/resources/why-florida-condo-insurance-is-getting-more-expensive"
                  className="text-ocean-500 hover:underline"
                >
                  why 2026 association premiums and SIRS funding pushed dues up
                </Link>
                . This guide is the next step: how to read the letter, do the
                per-unit math, and decide what on your HO-6 is actually
                designed to respond.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Three Assessments, Three Insurance Answers
              </h2>
              <p>
                Boards in ZIP 33160 use the same envelope for very different
                costs. Sort the letter before you assume the HO-6 will
                reimburse it.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "1. Covered-peril loss assessment (HO-6 may respond)",
                    desc: "A hurricane, fire, or similar sudden damage hits association property. The master policy pays after its deductible, or does not fully pay because of limits or exclusions. Florida Statute 718.111(11)(j) makes that deductible and the uninsured remainder a common expense. Your share is a loss assessment. Section 627.714 requires at least $2,000 of property loss-assessment coverage on the unit-owner policy, with a deductible of no more than $250 on that coverage (and none if you already took a deductible on the same direct loss).",
                  },
                  {
                    title: "2. SIRS, milestone, and recertification (usually not)",
                    desc: "A Structural Integrity Reserve Study prices remaining life and replacement cost for roofs, structure, waterproofing, windows, electrical, plumbing, and fire protection. Milestone inspections and Miami-Dade recertification look for actual deterioration. The resulting reserve catch-up or repair assessment is planning and code compliance. It is not a claim from a covered peril, so raising the HO-6 loss-assessment limit does not pay it.",
                  },
                  {
                    title: "3. Flood or surge assessment (different policy)",
                    desc: "Storm surge and rising water are flood, not wind. A standard HO-6 and a typical wind master policy exclude that. If the association assesses owners because the building flood policy’s deductible or limits left a gap, your unit-owner flood policy — NFIP or private — is the form to read, not the HO-6 loss-assessment line. See our flood and hurricane guides for the wind-versus-surge split.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-sand-50 border border-sand-200 rounded-2xl p-5"
                  >
                    <p className="font-semibold text-navy-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Collins Avenue Math: Why $2,000 Disappears
              </h2>
              <p>
                Named-storm deductibles on Florida commercial-residential master
                policies are usually a percentage of the building&rsquo;s insured
                value, commonly in the 2% to 10% range. Trade reporting on the
                June 1, 2026 reinsurance renewals described catastrophe
                placement costs falling roughly 15–20% year over year for
                Florida risk, with some condo-association writers citing
                softer commercial-property premiums. Softer reinsurance can
                help the premium the board pays. It does not shrink the
                percentage deductible the building keeps on the first dollar
                of a hurricane loss.
              </p>
              <p>
                Use this only as an illustration, not a quote for any address.
                Suppose a 200-unit Collins Avenue tower is insured for $80
                million on the master policy:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  A <strong className="text-navy-800">5% named-storm deductible</strong>{" "}
                  is $4 million. Split equally, that is about{" "}
                  <strong className="text-navy-800">$20,000 per unit</strong>{" "}
                  before any extra uninsured damage.
                </li>
                <li>
                  A <strong className="text-navy-800">10% deductible</strong> is
                  $8 million, or about{" "}
                  <strong className="text-navy-800">$40,000 per unit</strong>.
                </li>
                <li>
                  The statutory HO-6 floor of{" "}
                  <strong className="text-navy-800">$2,000</strong> would leave
                  most of either bill with the owner.
                </li>
              </ul>
              <p>
                Actual shares follow the declaration, not a simple headcount.
                Parking, cabana, and commercial units can change the
                percentage. Ask the association for the current master
                declarations page: Coverage A, the named-storm or hurricane
                deductible percentage, and whether the form is wind-only or
                multiperil. Then size the HO-6 against{" "}
                <em>your</em> percentage, not a neighbor&rsquo;s.
              </p>
              <p>
                One more form trap: some HO-6 endorsements sub-limit the
                portion of an assessment that is attributable only to the
                master policy&rsquo;s deductible — a common figure discussed in
                the Florida market is around $1,000 — even when the headline
                loss-assessment limit is $25,000 or $50,000. That sub-limit is
                policy language, not the $2,000 statutory floor. Higher limits
                still matter for assessments driven by underinsurance or
                excluded building damage. They may not swallow a
                percentage hurricane deductible on their own. Read the
                endorsement, not the brochure.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                SIRS and the City&rsquo;s 25-Year Recertification Clock
              </h2>
              <p>
                After the 2021 Champlain Towers South collapse in Surfside,
                Florida required condominiums and cooperatives three stories
                or taller to complete a Structural Integrity Reserve Study at
                least every 10 years and to fund listed structural components.
                Boards can no longer waive those structural reserves. For
                associations that existed on or before July 1, 2022, the
                initial SIRS was generally due by December 31, 2025. Florida
                law allows an association that also has a milestone inspection
                due by December 31, 2026 to complete the SIRS with that
                inspection — but not later. The Department of Business and
                Professional Regulation publishes a SIRS reporting database
                from association filings; it is a public check, not a
                substitute for the study itself.
              </p>
              <p>
                Sunny Isles Beach adds a local clock. The city&rsquo;s Building
                Recertification Program, implementing Miami-Dade Code section
                8-11(f), treats condominium and cooperative buildings three
                stories or taller within three miles of the coastline as
                coastal property. Buildings completed on or after 1998
                generally recertify at 25 years of age, then every 10 years.
                Milestone inspections under Florida Statute 553.899 follow the
                same coastal logic when the local enforcement agency applies
                the 25-year trigger. A tower that opened in the late 1990s or
                early 2000s is in that window now. The engineer&rsquo;s report,
                the repair list, and the reserve catch-up arrive as dues or a
                special assessment. They are real costs of owning on a barrier
                island. They are not a{" "}
                <Link
                  href="/resources/hurricane-damage-home-insurance-sunny-isles"
                  className="text-ocean-500 hover:underline"
                >
                  hurricane claim
                </Link>
                .
              </p>
              <p>
                Venetian Gardens is not on Collins Avenue, but the September
                11 charging announcement is the county-level news that makes
                the distinction urgent. Owners who paid a 2024 assessment for
                roofs and windows were funding construction and compliance,
                not filing an HO-6 loss-assessment claim. If work stalls, the
                remedy is the association, the contractor, and — if the facts
                warrant it — law enforcement or civil process. It is not a
                higher loss-assessment limit purchased after the letter.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Raise the Limit Before the Occurrence — Not After the Letter
              </h2>
              <p>
                Section 627.714(2) is the timing rule most owners miss. The
                maximum the insurer must pay is the loss-assessment limit in
                effect one day before the occurrence that caused the loss.
                Increasing the limit after landfall, or after the board votes
                the assessment, does not apply to that event. As of this
                writing on September 16, 2026, the National Hurricane Center
                has still not recorded a 2026 Atlantic hurricane. The season
                ends November 30. South Florida Water Management District
                2026 east-coast king-tide windows still include September
                24–October 15 and October 22–November 12, with the predicted
                annual peak around October 27. King tides are flood. A named
                hurricane, if one finally forms, is wind plus whatever surge
                it pushes onto the sandbar.
              </p>
              <p>
                If you have a{" "}
                <Link
                  href="/resources/citizens-takeout-offer-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  Citizens takeout offer
                </Link>{" "}
                still open, the October 20, 2026 assumption (choice deadline
                October 5) is another reason to compare loss-assessment
                limits — not only the estimated premium. A cheaper takeout
                that drops the line from $25,000 to the $2,000 floor is not a
                savings if a 5% master deductible is sitting on the building.
              </p>
              <p>
                Miami-Dade County&rsquo;s Condominium Special Assessment Loan
                Program — up to $50,000, zero percent interest for eligible
                households at or below 140% of area median income, with
                priority for residents 62 and older — accepted applications
                from June 1 through June 30, 2026. That window is closed as of
                this writing. The City of Sunny Isles Beach has pointed
                residents to the county program; check Housing and Community
                Development before assuming a new round exists. A loan is for
                a bill you owe. It is not HO-6 coverage.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Request Before You Size the HO-6
              </h2>
              <p>
                Bring documents, not a premium guess, to a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo quote
                </Link>
                .
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  Master-policy declarations: Coverage A, named-storm or
                  hurricane deductible, wind-only versus multiperil, and the
                  effective dates.
                </li>
                <li>
                  Your unit&rsquo;s common-expense percentage from the
                  declaration or a recent estoppel.
                </li>
                <li>
                  The assessment letter itself — purpose, amount, due dates,
                  and whether it is a one-time levy or a monthly add-on.
                </li>
                <li>
                  The SIRS summary and, if applicable, the milestone or
                  recertification report. Confirm the association&rsquo;s SIRS
                  filing in DBPR&rsquo;s public database.
                </li>
                <li>
                  Proof of building flood coverage (often an NFIP RCBAP) and
                  whether you carry unit{" "}
                  <Link
                    href="/flood-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    flood
                  </Link>{" "}
                  for interiors and contents.{" "}
                  <Link
                    href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                    className="text-ocean-500 hover:underline"
                  >
                    Wind-mitigation credits
                  </Link>{" "}
                  do not substitute for either.
                </li>
                <li>
                  Your current HO-6 declarations: loss-assessment limit,
                  any deductible-assessment sub-limit, Coverage A (interior),
                  and personal property. Liability loss assessment, if shown
                  separately, is a different line from the property coverage
                  in section 627.714.
                </li>
              </ul>
              <p>
                A quote request does not bind coverage. Coverage exists only
                when an insurer issues it. Public statutes, city recertification
                rules, and a board letter still have to be matched to the
                actual policy forms.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only. It is
                  not insurance advice, a guarantee of any claim payment, or a
                  recommendation of any carrier or product. Florida Statutes
                  627.714 and 718.111(11), the SIRS framework in chapter 718,
                  milestone inspections under s. 553.899, and Miami-Dade Code
                  section 8-11(f) as applied by the City of Sunny Isles Beach
                  Building Recertification Program are described as those
                  sources state them as of this writing. 2026 Atlantic
                  hurricane-season statistics are public National Hurricane
                  Center and meteorological summaries as of mid-September
                  2026. The Venetian Gardens charging announcement is
                  Miami-Dade news about alleged conduct in a pending case; it
                  is not a finding about any Sunny Isles Beach association.
                  The $80 million / 200-unit deductible example is an
                  illustration, not a quote. Reinsurance and commercial-property
                  premium commentary reflects trade reporting, not a fetched
                  filing for a specific tower. Miami-Dade special-assessment
                  loan windows change; confirm current programs with the
                  county. Eligibility, deductibles, sub-limits, and required
                  coverage depend on the actual policy, declaration, and
                  underwriting. Review your documents and speak with a
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
                  label: "Condo Insurance in Sunny Isles Beach",
                  href: "/condo-insurance",
                  desc: "HO-6 coverage that sits beside the association master policy.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "2026 HO-6 rate cuts vs. association master-policy increases and SIRS dues.",
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
                  label: "NFIP vs Private Flood in Sunny Isles Beach (2026)",
                  href: "/resources/nfip-vs-private-flood-sunny-isles-beach-2026",
                  desc: "A flood or surge assessment is not an HO-6 loss-assessment claim. Compare NFIP caps and private ALE separately.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 20 assumption — compare loss assessment, not just premium.",
                },
                {
                  label: "My Safe Florida Home Grants in Sunny Isles Beach (2026)",
                  href: "/resources/my-safe-florida-home-sunny-isles-beach-2026",
                  desc: "Association-only Condo Pilot money can shrink a glass or roof assessment — if the board qualifies.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "Inspection forms for towers; credits do not pay a SIRS assessment.",
                },
                {
                  label: "Flood Insurance for South Florida",
                  href: "/flood-insurance",
                  desc: "Surge and flood assessments sit outside a standard HO-6.",
                },
                {
                  label: "Request a Condo Quote",
                  href: "/quote?type=condo",
                  desc: "Review loss-assessment limits against your building’s deductible.",
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
            Special Assessment and HO-6 Questions for 2026
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
            Review Loss Assessment Limits for a Sunny Isles Beach Unit
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request an HO-6 quote or call us with the master declarations and
            assessment letter. We will help separate a SIRS bill from a storm
            deductible before the quiet 2026 season changes.
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
