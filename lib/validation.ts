import { z } from "zod";

export const quoteFormSchema = z.object({
  insuranceType: z.enum(
    ["auto", "condo", "home", "renters", "flood", "business", "other"],
    { error: "Please select an insurance type." }
  ),
  firstName: z
    .string()
    .min(1, "First name is required.")
    .max(50, "First name is too long."),
  lastName: z
    .string()
    .min(1, "Last name is required.")
    .max(50, "Last name is too long."),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code."),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  // Auto-specific
  vehicleYear: z.string().optional(),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  // Property-specific
  propertyAddress: z.string().optional(),
  propertyType: z.string().optional(),
  // Business-specific
  businessType: z.string().optional(),
  // General
  additionalNotes: z.string().max(500, "Notes must be under 500 characters.").optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(1, "Subject is required.").max(100, "Subject is too long."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be under 1000 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
