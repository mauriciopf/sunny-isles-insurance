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
    "Does Home Insurance Cover Hurricane Damage in Sunny Isles Beach? | 2026 Guide",
  description:
    "Hurricane wind, storm surge, and flood are often treated as different losses in Florida. A 2026 Sunny Isles Beach guide to homeowners coverage, hurricane deductibles, and what to review before peak season.",
  path: "/resources/hurricane-damage-home-insurance-sunny-isles",
});

const faqs = [
  {
    question:
      "Does homeowners insurance cover hurricane damage in Sunny Isles Beach?",
    answer:
      "Most Florida homeowners policies are designed to cover wind damage from a hurricane, subject to policy terms and a separate hurricane deductible. Storm surge and flooding from external water are generally excluded and typically require a separate flood policy. Always review your declarations page — some coastal policies limit or exclude wind.",
  },
  {
    question: "Does homeowners insurance cover storm surge in Sunny Isles Beach?",
    answer:
      "Storm surge is generally treated as flooding, not as wind. Standard homeowners and condo policies typically do not cover flood or storm-surge damage. Sunny Isles Beach sits on a barrier island, so flood coverage is a separate conversation from wind coverage.",
  },
  {
    question: "What is a Florida hurricane deductible?",
    answer:
      "A hurricane deductible is a separate amount you pay before the insurer pays a hurricane wind claim. In Florida it is often a percentage of the dwelling limit (commonly 2%, 5%, or 10%), not a flat $1,000. Florida law generally applies that deductible on an annual basis for policies with the same insurer or insurer group, rather than once per storm.",
  },
  {
    question:
      "Do Sunny Isles Beach condo owners need their own hurricane coverage?",
    answer:
      "The association's master policy typically insures the building and common areas, including much of the structure's wind exposure. An individual HO-6 policy is still important for belongings, interior improvements, personal liability, and often loss assessments after a storm. Flood for the unit's contents is usually a separate policy as well.",
  },
  {
    question:
      "Can I buy flood insurance right before a hurricane approaches Miami-Dade?",
    answer:
      "National Flood Insurance Program policies typically have a 30-day waiting period before coverage takes effect. Private flood policies may use different waiting periods, but last-minute purchase is still a poor plan. Review flood coverage well before a named storm is in the forecast.",
  },
];

const breadcrumb = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  {
    name: "Hurricane Damage Coverage",
    href: "/resources/hurricane-damage-home-insurance-sunny-isles",
  },
];

const dateModified = "2026-08-28";

export default function HurricaneDamageHomeInsuranceArticle() {
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
                "Does Home Insurance Cover Hurricane Damage in Sunny Isles Beach?",
              description:
                "Wind, storm surge, and flood are often treated as different losses. A 2026 guide for Sunny Isles Beach homeowners and condo owners on hurricane deductibles, HVHZ, and flood coverage.",
              path: "/resources/hurricane-damage-home-insurance-sunny-isles",
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
            Does Home Insurance Cover Hurricane Damage in Sunny Isles Beach?
          </h1>
          <p className="text-lg text-white/65 max-w-2xl">
            Late August sits in the heart of Atlantic hurricane season. For
            barrier-island property in Sunny Isles Beach, the useful answer is
            not a simple yes or no — wind, storm surge, and flood are often
            three different insurance conversations.
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
                Most Florida{" "}
                <Link
                  href="/homeowners-insurance"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners insurance
                </Link>{" "}
                policies are built to cover wind damage from a hurricane —
                roof, siding, windows, and interior water that enters after wind
                creates an opening. They generally do{" "}
                <strong className="text-navy-900">not</strong> cover flooding or
                storm surge. That split matters on a barrier island between the
                Atlantic and the Intracoastal Waterway.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Why This Question Is Especially Relevant in 2026
              </h2>
              <p>
                Two things are happening at once this year. First, Atlantic
                hurricane season runs from June 1 through November 30, with
                climatological peak activity typically clustered from late
                August into September. Second, Florida&rsquo;s property-insurance
                market has been shifting after several years of strain.
              </p>
              <p>
                Citizens Property Insurance Corporation — Florida&rsquo;s insurer of
                last resort — received Office of Insurance Regulation approval
                for 2026 rate updates that took effect July 1, 2026 for new
                business and as existing policies renew. Citizens reported an
                average statewide decrease of about 8.8% for homeowners
                multiperil policies and about 5.1% for homeowners wind-only
                policies. Earlier in the year, the Governor&rsquo;s office said
                Miami-Dade Citizens customers were among those projected to see
                some of the larger average reductions in the state (about 14%
                across roughly 42,000 homes in that announcement).
              </p>
              <p>
                Those are averages, not a promise for every Collins Avenue condo
                or Golden Shores home. Individual renewals still depend on
                policy form, whether the property is primary, territory, roof
                age, and claims history. A lower premium can also come with a
                higher hurricane deductible or narrower water-damage terms. The
                coverage questions below are worth checking even if this
                year&rsquo;s renewal looks cheaper.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Wind, Rain, Surge, and Flood Are Not the Same Claim
              </h2>
              <p>
                After a hurricane, people often describe everything as
                &ldquo;storm damage.&rdquo; Insurers sort it by how the water or
                force reached the building.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Wind and wind-created openings",
                    desc: "Typically considered under the homeowners or windstorm policy. Examples include a torn roof, broken impact glass, missing soffits, or rain that enters after wind damages the building envelope. Florida's statutory definition of hurricane coverage generally includes interior damage when the direct force of the wind first creates an opening.",
                  },
                  {
                    title: "Storm surge and rising water",
                    desc: "Generally treated as flooding — water that overflows from the ocean, bays, or other bodies of water, or that accumulates on the ground and enters from outside. Standard homeowners and HO-6 policies typically exclude this. A separate flood policy is the usual way to address it.",
                  },
                  {
                    title: "Internal water vs. external flood",
                    desc: "A burst pipe or overflowing appliance is not the same peril as surge coming in from Collins Avenue or the Intracoastal. Internal water may be covered, limited, or excluded depending on the policy. External flood almost always needs flood insurance.",
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
                A single storm can produce both kinds of loss. Roof tiles blown
                off by wind and a parking level filled by surge are not paid
                from the same bucket. That is why we also publish a separate
                guide on{" "}
                <Link
                  href="/resources/flood-insurance-basics"
                  className="text-ocean-500 hover:underline"
                >
                  whether homeowners insurance covers flooding
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Hurricane Deductibles: The Number Most People Underestimate
              </h2>
              <p>
                If your policy includes windstorm or hurricane coverage, it
                almost certainly has a separate hurricane deductible. In Florida
                that deductible is often a percentage of Coverage A (the
                dwelling limit), not the flat dollar amount that applies to a
                kitchen fire or a stolen bicycle.
              </p>
              <p>
                Florida insurers are generally required to offer hurricane
                deductible options of $500, 2%, 5%, and 10%. On a home insured
                for $600,000, a 5% hurricane deductible is $30,000 out of pocket
                before the wind claim is paid. Percentage deductibles scale with
                the insured value of the structure — not with the size of the
                repair bill.
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  The hurricane deductible typically applies to damage during a
                  defined hurricane event period, not to every thunderstorm.
                </li>
                <li>
                  Florida generally applies the hurricane deductible on an{" "}
                  <strong className="text-navy-800">annual</strong> basis for
                  policies with the same insurer or insurer group. You usually
                  do not pay a second full hurricane deductible for a later
                  storm in the same calendar year with that same company.
                </li>
                <li>
                  Some policies use a &ldquo;named storm&rdquo; deductible that
                  can trigger for tropical storms as well as hurricanes. The
                  label on your declarations page matters.
                </li>
                <li>
                  Wind-only policies still exist in parts of coastal Florida
                  when a multiperil policy excludes wind. Read the forms, not
                  the marketing summary.
                </li>
              </ul>
              <p>
                Before a watch is posted for Miami-Dade, it is worth knowing
                the dollar amount on your declarations page and whether you
                could fund it from savings. That number is a real obligation the
                moment a covered hurricane loss occurs. Documented opening
                protection and roof features can still change the wind premium
                — see{" "}
                <Link
                  href="/resources/wind-mitigation-credits-sunny-isles-beach-2026"
                  className="text-ocean-500 hover:underline"
                >
                  how 2026 wind mitigation credits work in Sunny Isles Beach
                </Link>
                — but they do not shrink a percentage hurricane deductible.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What Is Different in Sunny Isles Beach
              </h2>
              <p>
                Sunny Isles Beach is a small Atlantic barrier-island city in
                northeast Miami-Dade County, between Golden Beach to the north
                and Haulover Inlet to the south, with Aventura and North Miami
                Beach just inland. The building stock is not one product:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <strong className="text-navy-800">
                    High-rise condos along Collins Avenue (A1A)
                  </strong>{" "}
                  — wind-driven rain, balcony doors, impact glass, and
                  association assessments after a building-wide loss. The
                  master policy and your{" "}
                  <Link
                    href="/condo-insurance"
                    className="text-ocean-500 hover:underline"
                  >
                    HO-6 condo policy
                  </Link>{" "}
                  do different jobs. See also{" "}
                  <Link
                    href="/resources/condo-insurance-florida"
                    className="text-ocean-500 hover:underline"
                  >
                    what Florida condo insurance covers
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy-800">
                    Lower-rise homes and townhomes west of the beach
                  </strong>{" "}
                  — roof age, opening protection, and flood zone often drive
                  both price and claim outcome as much as the storm&rsquo;s
                  category.
                </li>
                <li>
                  <strong className="text-navy-800">
                    High-Velocity Hurricane Zone (HVHZ)
                  </strong>{" "}
                  — all of Miami-Dade sits in Florida&rsquo;s HVHZ. Opening
                  protection (impact-rated openings or approved shutters) is a
                  building-code issue here, not a nice-to-have. Documented
                  wind-mitigation features can also affect how insurers rate
                  the property.
                </li>
              </ul>
              <p>
                Coastal exposure here is a combination of Atlantic wind, storm
                surge, and rainfall flooding that does not drain quickly on a
                low-lying island. Neighbors in Bal Harbour, Miami Beach, and
                Aventura face similar splits between wind and flood, even when
                the buildings look different.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                Condo Buildings vs. Individual Units After a Hurricane
              </h2>
              <p>
                For many Sunny Isles Beach residents, the &ldquo;home&rdquo; is
                a condominium. After a hurricane, three layers often come into
                play:
              </p>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  The association master policy for the building and common
                  areas (and, separately, any association flood policy).
                </li>
                <li>
                  Your HO-6 policy for belongings, interior finishes, liability,
                  additional living expenses, and often loss assessment.
                </li>
                <li>
                  Your own flood policy for contents and, depending on the
                  form, certain interior building items the master flood policy
                  does not cover.
                </li>
              </ul>
              <p>
                Special assessments after a major storm are one of the least
                discussed exposures in this corridor. Loss-assessment coverage
                on an HO-6 policy can help with your share of certain
                association charges, subject to limits and exclusions. It is
                not a blank check, and flood assessments are not automatically
                treated the same as wind assessments.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What to Review Before the Next Named Storm
              </h2>
              <p>
                Practical steps that help in Sunny Isles Beach and the rest of
                Miami-Dade, without waiting for a cone over South Florida:
              </p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Read the declarations page, not just the premium",
                    desc: "Confirm whether wind is included or written on a separate wind-only form. Note the hurricane or named-storm deductible as a dollar amount. Check roof-payment terms (replacement cost vs. actual cash value) and any water-damage limitations.",
                  },
                  {
                    title: "Treat flood as its own decision",
                    desc: "If you do not have flood coverage, NFIP policies typically impose a 30-day waiting period. That is why flood planning belongs in May — not when a tropical wave is east of the Lesser Antilles. Explore flood options for South Florida properties.",
                  },
                  {
                    title: "Document opening protection and roof work",
                    desc: "Miami-Dade HVHZ rules and insurer wind-mitigation credits both depend on what is actually installed and permitted. Keep NOA or product-approval paperwork, shutter photos, and roof invoices where you can find them after a storm.",
                  },
                  {
                    title: "Inventory the interior",
                    desc: "Photos or a simple video walk-through of each room, plus receipts for higher-value items, make an HO-6 or homeowners contents claim far easier. Balcony furniture and storage-unit contents are easy to forget until they are gone.",
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
                If you are comparing options this season, start with a{" "}
                <Link
                  href="/quote?type=home"
                  className="text-ocean-500 hover:underline"
                >
                  homeowners quote
                </Link>
                , a{" "}
                <Link
                  href="/quote?type=flood"
                  className="text-ocean-500 hover:underline"
                >
                  flood quote
                </Link>
                , or a{" "}
                <Link
                  href="/quote?type=condo"
                  className="text-ocean-500 hover:underline"
                >
                  condo (HO-6) quote
                </Link>
                . Coverage is only in force when an insurer actually issues it
                — a quote request does not bind a policy.
              </p>

              <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 mt-8">
                <h3 className="font-semibold text-navy-900 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm leading-relaxed">
                  This article is for general educational purposes only.
                  Coverage terms, deductibles, eligibility, and availability
                  vary by insurer and by property. Nothing here is a guarantee
                  of coverage, a rate quote, or legal advice. Rate figures
                  cited from 2026 Citizens and state announcements are averages
                  and do not predict any individual premium. Review your policy
                  documents and speak with a licensed Florida insurance
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
                  label: "Homeowners Insurance in Sunny Isles Beach",
                  href: "/homeowners-insurance",
                  desc: "Dwelling, wind, and liability coverage for South Florida homes.",
                },
                {
                  label: "Flood Insurance for South Florida",
                  href: "/flood-insurance",
                  desc: "Storm surge and flood are usually a separate policy.",
                },
                {
                  label: "Wind Mitigation Credits in Sunny Isles Beach (2026)",
                  href: "/resources/wind-mitigation-credits-sunny-isles-beach-2026",
                  desc: "April 2026 inspection form, July 1 HO-6 credit tables, and the 15-year roof-age rule.",
                },
                {
                  label: "Does Homeowners Insurance Cover Flooding?",
                  href: "/resources/flood-insurance-basics",
                  desc: "Why flood and wind are treated as different losses.",
                },
                {
                  label: "Renters Insurance in Sunny Isles Beach (2026)",
                  href: "/resources/renters-insurance-sunny-isles-beach-2026",
                  desc: "HO-4 wind vs. contents flood, and hurricane deductibles on a tenant form.",
                },
                {
                  label: "Got a Citizens Takeout Letter?",
                  href: "/resources/citizens-takeout-offer-sunny-isles-beach-2026",
                  desc: "October 2026 assumption dates and how a takeout can change hurricane deductibles.",
                },
                {
                  label: "Condo Insurance in Florida",
                  href: "/resources/condo-insurance-florida",
                  desc: "How HO-6 works with an association master policy.",
                },
                {
                  label: "Why Florida Condo Insurance Is Getting More Expensive",
                  href: "/resources/why-florida-condo-insurance-is-getting-more-expensive",
                  desc: "2026 master-policy rate increases vs. HO-6 personal-line cuts.",
                },
                {
                  label: "Sunny Isles Beach Insurance Guide",
                  href: "/sunny-isles-beach-insurance",
                  desc: "Local coverage options for the barrier-island community.",
                },
                {
                  label: "Request a Quote",
                  href: "/quote",
                  desc: "Start a no-obligation quote for home, condo, or flood.",
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
            Hurricane Coverage Questions
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
            Review Wind and Flood Coverage for Sunny Isles Beach
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto">
            Request a quote or call us to walk through homeowners, condo, and
            flood options before the next named storm.
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
