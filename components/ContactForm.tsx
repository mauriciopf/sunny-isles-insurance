"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { business } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message ?? "Submission failed.");
      }

      setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-ocean-50 border-2 border-ocean-200 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-ocean-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent</h3>
        <p className="text-navy-500 text-sm">
          We received your message and will be in touch soon. You can also reach
          us directly at{" "}
          <a
            href={business.phoneHref}
            className="text-ocean-500 font-semibold"
          >
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-navy-800 mb-1.5"
        >
          Name <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
            errors.name ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
          }`}
          placeholder="Your full name"
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-red-600 text-xs mt-1.5" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Email <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
              errors.email ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
            }`}
            placeholder="you@example.com"
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-red-600 text-xs mt-1.5" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-navy-800 mb-1.5"
          >
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
              errors.phone ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
            }`}
            placeholder="(305) 555-0100"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1.5" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-medium text-navy-800 mb-1.5"
        >
          Subject <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          {...register("subject")}
          className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow ${
            errors.subject ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
          }`}
          placeholder="Condo insurance question"
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p id="contact-subject-error" className="text-red-600 text-xs mt-1.5" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-navy-800 mb-1.5"
        >
          Message <span className="text-red-500" aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className={`w-full border rounded-xl px-4 py-3 text-sm text-navy-900 bg-white placeholder-navy-300 outline-none focus:ring-2 focus:ring-ocean-400/50 transition-shadow resize-none ${
            errors.message ? "border-red-400" : "border-sand-300 focus:border-ocean-400"
          }`}
          placeholder="How can we help you?"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-red-600 text-xs mt-1.5" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && (
        <div
          className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700"
          role="alert"
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 disabled:bg-sand-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-colors text-base"
      >
        {isSubmitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
