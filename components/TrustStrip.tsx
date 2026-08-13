import { trustPoints } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section
      className="bg-white border-b border-sand-200"
      aria-label="Trust indicators"
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand-200">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center justify-center gap-2.5 py-5 px-4 md:px-6"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-aqua-500 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-navy-800 text-center">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
