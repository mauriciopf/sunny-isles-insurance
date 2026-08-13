"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validation";
import { business, insuranceProducts } from "@/lib/constants";
import type { InsuranceType, QuoteStep } from "@/types";

interface InsuranceTypeOption {
  id: InsuranceType;
  label: string;
  icon: string;
}

const insuranceTypeOptions: InsuranceTypeOption[] = [
  { id: "auto", label: "Auto", icon: "🚗" },
  { id: "condo", label: "Condo", icon: "🏢" },
  { id: "home", label: "Home", icon: "🏠" },
  { id: "renters", label: "Renters", icon: "🔑" },
  { id: "flood", label: "Flood", icon: "💧" },
  { id: "business", label: "Business", icon: "🏪" },
  { id: "other", label: "Other", icon: "+" },
];

interface QuoteFormProps {
  defaultType?: InsuranceType;
}

export default function QuoteForm({ defaultType }: QuoteFormProps) {
  const [step, setStep] = useState<QuoteStep>(defaultType ? 2 : 1);
  const [selectedType, setSelectedType] = useState<InsuranceType | null>(
    defaultType ?? null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { insuranceType: defaultType },
  });

  const selectType = (type: InsuranceType) => {
    setSelectedType(type);
    setValue("insuranceType", type);
  };

  const goToStep2 = () => {
    if (!selectedType) return;
    setStep(2);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message ?? "Submission failed.");
      }

      setStep(3);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      {step !== 3 && (
        <div className="flex items-center gap-2 mb-10" aria-label="Quote progress">
          {([1, 2] as const).map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-colors ${
                  step >= s
                    ? "bg-ocean-500 text-white"
                    : "bg-sand-200 text-navy-400"
                }`}
                aria-current={step === s ? "step" : undefined}
              >
                {s}
              </div>
              {s < 2 && (
                <div
                  className={`flex-1 h-px transition-colors ${
                    step > s ? "bg-ocean-500" : "bg-sand-200"
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Insurance type */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
            What would you like to insure?
          </h2>
          <p className="text-navy-500 mb-8">
            Select the type of coverage you&rsquo;re exploring.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {insuranceTypeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => selectType(opt.id)}
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl border-2 transition-all duration-150 cursor-pointer ${
                  selectedType === opt.id
                    ? "border-ocean-500 bg-ocean-50 shadow-sm"
                    : "border-sand-200 bg-white hover:border-navy-300 hover:bg-sand-50"
                }`}
                aria-pressed={selectedType === opt.id}
              >
                <span className="text-2xl" role="img" aria-label={opt.label}>
                  {opt.icon}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    selectedType === opt.id ? "text-ocean-600" : "text-navy-800"
                  }`}
                >
                  {opt.label}
                </span>
              </button>
            ))}
          </div>

          {errors.insuranceType && (
            <p className="text-red-600 text-sm mb-4" role="alert">
              {errors.insuranceType.message}
            </p>
          )}

          <button
            type="button"
            onClick={goToStep2}
            disabled={!selectedType}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 disabled:bg-sand-300 disabled:cursor-not-allowed text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
          >
            Continue
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      )}

      {/* Step 2: Contact info */}
      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-navy-500 hover:text-navy-900 transition-colors"
              aria-label="Back to step 1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {selectedType && (
              <span className="inline-flex items-center gap-1.5 bg-ocean-50 text-ocean-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-ocean-200">
                {insuranceTypeOptions.find((o) => o.id === selectedType)?.icon}{" "}
                {insuranceTypeOptions.find((o) => o.id === selectedType)?.label} Insurance
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
            Tell us a bit about yourself
          </h2>
          <p className="text-navy-500 mb-8">
            We&rsquo;ll use this to follow up with the right information for you.
          </p>

          <div className="space-y-5">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-navy-800 mb-1.5"
                >
                  First Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  {...register("firstName")}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
                    errors.firstName ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
                  }`}
                  placeholder="Maria"
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-red-600 text-xs mt-1.5" role="alert">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-navy-800 mb-1.5"
                >
                  Last Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  autoComplete="family-name"
                  {...register("lastName")}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
                    errors.lastName ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
                  }`}
                  placeholder="Rodriguez"
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-red-600 text-xs mt-1.5" role="alert">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* ZIP + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-navy-800 mb-1.5"
                >
                  ZIP Code <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="zipCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={10}
                  {...register("zipCode")}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
                    errors.zipCode ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
                  }`}
                  placeholder="33160"
                  aria-describedby={errors.zipCode ? "zipCode-error" : undefined}
                  aria-invalid={!!errors.zipCode}
                />
                {errors.zipCode && (
                  <p id="zipCode-error" className="text-red-600 text-xs mt-1.5" role="alert">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-navy-800 mb-1.5"
                >
                  Phone <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
                    errors.phone ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
                  }`}
                  placeholder="(305) 555-0100"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-600 text-xs mt-1.5" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-800 mb-1.5"
              >
                Email <span className="text-red-500" aria-label="required">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
                  errors.email ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
                }`}
                placeholder="maria@example.com"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-xs mt-1.5" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Type-specific fields */}
            {selectedType === "auto" && (
              <div className="grid sm:grid-cols-3 gap-4 pt-2 border-t border-sand-200">
                <div>
                  <label htmlFor="vehicleYear" className="block text-sm font-medium text-navy-800 mb-1.5">
                    Vehicle Year
                  </label>
                  <input
                    id="vehicleYear"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    {...register("vehicleYear")}
                    className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow"
                    placeholder="2022"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-navy-800 mb-1.5">
                    Make
                  </label>
                  <input
                    id="vehicleMake"
                    type="text"
                    {...register("vehicleMake")}
                    className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow"
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-navy-800 mb-1.5">
                    Model
                  </label>
                  <input
                    id="vehicleModel"
                    type="text"
                    {...register("vehicleModel")}
                    className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow"
                    placeholder="Camry"
                  />
                </div>
              </div>
            )}

            {(selectedType === "condo" ||
              selectedType === "home" ||
              selectedType === "renters" ||
              selectedType === "flood") && (
              <div className="pt-2 border-t border-sand-200">
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-navy-800 mb-1.5">
                  Property ZIP Code or City (optional)
                </label>
                <input
                  id="propertyAddress"
                  type="text"
                  {...register("propertyAddress")}
                  className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow"
                  placeholder="Sunny Isles Beach, FL 33160"
                />
              </div>
            )}

            {selectedType === "business" && (
              <div className="pt-2 border-t border-sand-200">
                <label htmlFor="businessType" className="block text-sm font-medium text-navy-800 mb-1.5">
                  Type of Business (optional)
                </label>
                <input
                  id="businessType"
                  type="text"
                  {...register("businessType")}
                  className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow"
                  placeholder="e.g. Restaurant, Retail, Consulting"
                />
              </div>
            )}

            {/* Additional notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-navy-800 mb-1.5">
                Anything else you&rsquo;d like us to know? (optional)
              </label>
              <textarea
                id="additionalNotes"
                rows={3}
                {...register("additionalNotes")}
                className="w-full border border-sand-300 focus:border-ocean-400 rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow resize-none"
                placeholder="Current coverage, specific questions, etc."
                aria-describedby={errors.additionalNotes ? "notes-error" : undefined}
              />
              {errors.additionalNotes && (
                <p id="notes-error" className="text-red-600 text-xs mt-1.5" role="alert">
                  {errors.additionalNotes.message}
                </p>
              )}
            </div>
          </div>

          {submitError && (
            <div
              className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
              role="alert"
            >
              {submitError}
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-400 disabled:bg-sand-300 disabled:cursor-not-allowed text-white font-semibold px-10 py-4 rounded-xl transition-colors text-base"
            >
              {isSubmitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit My Request
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-xs text-navy-400">
              No obligation. No coverage is bound by submitting this form.
            </p>
          </div>
        </form>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="text-center py-10">
          <div className="w-20 h-20 rounded-full bg-ocean-50 border-2 border-ocean-200 flex items-center justify-center mx-auto mb-7">
            <svg className="w-9 h-9 text-ocean-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
            You&rsquo;re All Set.
          </h2>
          <p className="text-navy-500 max-w-md mx-auto mb-8">
            We received your request and will use the information you provided
            to help with the next step. We&rsquo;ll be in touch soon.
          </p>

          <div className="bg-sand-100 border border-sand-200 rounded-2xl p-6 max-w-sm mx-auto mb-8">
            <p className="text-sm text-navy-500 mb-2">
              Prefer to connect right away?
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-ocean-500 hover:text-ocean-600 font-semibold text-lg transition-colors"
              aria-label={`Call us at ${business.phoneDisplay}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {business.phoneDisplay}
            </a>
          </div>

          <Link
            href="/"
            className="text-sm text-navy-500 hover:text-navy-900 transition-colors underline underline-offset-2"
          >
            Return to homepage
          </Link>
        </div>
      )}
    </div>
  );
}
