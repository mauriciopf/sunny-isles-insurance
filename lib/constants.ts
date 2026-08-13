export const business = {
  name: "Sunny Isles Insurance",
  tagline: "Florida Insurance. Made Personal.",
  phoneDisplay: "412-583-2544",
  phoneHref: "tel:+14125832544",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  domain: "sunnyislesinsurancefl.com",
  url: "https://sunnyislesinsurancefl.com",
  serviceArea: "Florida",
  serviceAreaFull:
    "Serving Sunny Isles Beach, Miami-Dade, South Florida and customers throughout Florida.",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "",
} as const;

export const insuranceProducts = [
  {
    id: "auto",
    label: "Auto Insurance",
    href: "/auto-insurance",
    shortDescription: "Coverage designed to keep you moving on Florida roads.",
    cta: "Explore Auto",
    color: "ocean",
    icon: "auto",
  },
  {
    id: "condo",
    label: "Condo Insurance",
    href: "/condo-insurance",
    shortDescription:
      "Personal coverage designed to work alongside your condominium association's master policy.",
    cta: "Explore Condo",
    color: "aqua",
    icon: "condo",
    featured: true,
  },
  {
    id: "home",
    label: "Homeowners Insurance",
    href: "/homeowners-insurance",
    shortDescription:
      "Protection for your home, belongings and personal liability.",
    cta: "Explore Home",
    color: "navy",
    icon: "home",
  },
  {
    id: "flood",
    label: "Flood Insurance",
    href: "/flood-insurance",
    shortDescription:
      "Understand your flood risk and explore dedicated flood coverage options.",
    cta: "Explore Flood",
    color: "blue",
    icon: "flood",
  },
  {
    id: "renters",
    label: "Renters Insurance",
    href: "/renters-insurance",
    shortDescription:
      "Affordable protection for your belongings and personal liability.",
    cta: "Explore Renters",
    color: "teal",
    icon: "renters",
  },
  {
    id: "business",
    label: "Business Insurance",
    href: "/business-insurance",
    shortDescription:
      "Coverage options designed around the risks your business faces.",
    cta: "Explore Business",
    color: "indigo",
    icon: "business",
  },
] as const;

export const navInsurance = [
  { label: "Auto Insurance", href: "/auto-insurance" },
  { label: "Homeowners Insurance", href: "/homeowners-insurance" },
  { label: "Condo Insurance", href: "/condo-insurance" },
  { label: "Flood Insurance", href: "/flood-insurance" },
  { label: "Renters Insurance", href: "/renters-insurance" },
  { label: "Business Insurance", href: "/business-insurance" },
] as const;

export const navMain = [
  { label: "Insurance", href: "#insurance", hasDropdown: true },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  coverage: [
    { label: "Auto", href: "/auto-insurance" },
    { label: "Condo", href: "/condo-insurance" },
    { label: "Home", href: "/homeowners-insurance" },
    { label: "Flood", href: "/flood-insurance" },
    { label: "Renters", href: "/renters-insurance" },
    { label: "Business", href: "/business-insurance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Resources", href: "/resources" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;

export const trustPoints = [
  { label: "Florida-Focused" },
  { label: "Personal Guidance" },
  { label: "Multiple Coverage Options" },
  { label: "Fast, Simple Quotes" },
] as const;

export const whyUsPoints = [
  {
    title: "Personal, Not Transactional",
    description:
      "We focus on understanding what you're protecting before discussing coverage options.",
  },
  {
    title: "Florida Focused",
    description:
      "Insurance decisions can look different in Florida. We keep the conversation relevant to where you live and what you own.",
  },
  {
    title: "Easy to Reach",
    description:
      "Call, message or request a quote without navigating complicated corporate systems.",
  },
  {
    title: "Coverage That Makes Sense",
    description:
      "We help explain your options so you can make a more informed decision.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Choose the type of insurance and provide a few details about what you'd like to cover.",
  },
  {
    step: "02",
    title: "We Review Your Options",
    description:
      "We use your information to help identify appropriate coverage options for your situation.",
  },
  {
    step: "03",
    title: "Choose With Confidence",
    description:
      "Review your options and decide what works best for you — no pressure, no obligation.",
  },
] as const;

export const homeFaqs = [
  {
    question: "Where can I find an insurance agent in Sunny Isles Beach?",
    answer:
      "Sunny Isles Insurance is a local insurance agency focused on Sunny Isles Beach and South Florida. You can request a quote online or call us directly at 412-583-2544.",
  },
  {
    question: "Do you provide condo insurance in Sunny Isles Beach?",
    answer:
      "Yes. Condo insurance (HO-6) is one of our primary offerings. Sunny Isles Beach has a large condominium community, and understanding the gap between an association's master policy and individual coverage is something we help customers navigate.",
  },
  {
    question: "What types of insurance does Sunny Isles Insurance offer?",
    answer:
      "We help customers in Sunny Isles Beach and across Florida explore auto, condo (HO-6), homeowners, flood, renters, and business insurance options. Coverage availability and eligibility vary by product and individual circumstances.",
  },
  {
    question: "Do you serve customers outside Sunny Isles Beach?",
    answer:
      "Our primary focus is Sunny Isles Beach and South Florida — including Aventura, North Miami Beach, Bal Harbour, Miami Beach, and Miami-Dade County. We also work with customers throughout Florida, subject to product availability.",
  },
  {
    question: "Can you help with auto insurance in Sunny Isles?",
    answer:
      "Yes. We help drivers in Sunny Isles Beach and South Florida understand their auto coverage options and submit quote requests. Call 412-583-2544 or start a quote online.",
  },
  {
    question: "How do I request an insurance quote?",
    answer:
      "You can start a quote request online through our Get My Quote form, or you can call us directly at 412-583-2544. The initial form takes just a few minutes to complete.",
  },
  {
    question: "Does requesting a quote bind insurance coverage?",
    answer:
      "No. Submitting a quote request does not create or bind insurance coverage. Coverage is only effective when formally confirmed and issued by the appropriate insurer or authorized party.",
  },
] as const;

export const disclaimer =
  "Insurance products, eligibility, availability, terms and coverage vary by insurer and individual circumstances. Information on this website is provided for general informational purposes and does not modify or bind insurance coverage. Submitting a quote request does not create insurance coverage.";
