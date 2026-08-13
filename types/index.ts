export type InsuranceType =
  | "auto"
  | "condo"
  | "home"
  | "renters"
  | "flood"
  | "business"
  | "other";

export interface QuoteRequest {
  insuranceType: InsuranceType;
  firstName: string;
  lastName: string;
  zipCode: string;
  phone: string;
  email: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  propertyAddress?: string;
  propertyType?: string;
  businessType?: string;
  additionalNotes?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface InsuranceProduct {
  id: InsuranceType;
  label: string;
  href: string;
  shortDescription: string;
  cta: string;
  icon: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type QuoteStep = 1 | 2 | 3;

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
