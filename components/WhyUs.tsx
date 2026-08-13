import { whyUsPoints } from "@/lib/constants";

export default function WhyUs() {
  const icons = [
    // Personal
    <svg key="personal" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>,
    // Florida
    <svg key="florida" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>,
    // Easy to reach
    <svg key="reach" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>,
    // Coverage
    <svg key="coverage" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
  ];

  return (
    <section
      id="why-us"
      className="section-py-lg bg-white"
      aria-labelledby="why-heading"
    >
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight"
          >
            Why Choose a Local Sunny Isles Insurance Agency?
          </h2>
          <p className="text-lg text-navy-500">
            We built this agency around a simpler customer experience — one that
            puts your needs before a sales script.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPoints.map((point, i) => (
            <div
              key={point.title}
              className="group bg-sand-50 hover:bg-navy-900 rounded-2xl p-7 border border-sand-200 hover:border-navy-900 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-ocean-50 group-hover:bg-ocean-500/20 text-ocean-500 flex items-center justify-center mb-5 transition-colors">
                {icons[i]}
              </div>
              <h3 className="font-semibold text-navy-900 group-hover:text-white text-base mb-2.5 transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-navy-500 group-hover:text-white/60 leading-relaxed transition-colors">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
