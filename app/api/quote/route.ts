import { type NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation";
import type { ApiResponse } from "@/types";

/**
 * Quote submission API route.
 *
 * INTEGRATION HOOKS:
 * To connect to a CRM or email service, add your integration in the
 * "FUTURE INTEGRATIONS" section below. Available options include:
 *
 * - Resend (email):         process.env.RESEND_API_KEY
 * - HubSpot:                process.env.HUBSPOT_API_KEY
 * - GoHighLevel:            process.env.GHL_API_KEY
 * - Salesforce:             process.env.SALESFORCE_CLIENT_ID / _SECRET
 * - Supabase:               process.env.SUPABASE_URL / SUPABASE_SERVICE_KEY
 * - Webhook (generic):      process.env.WEBHOOK_URL
 *
 * See .env.example for full list of environment variables.
 */
export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    const parsed = quoteFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data. Please check your entries." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // ============================================================
    // FUTURE INTEGRATIONS — add your CRM/email code here
    // ============================================================
    //
    // Example: Resend email notification
    // -----------------------------------
    // if (process.env.RESEND_API_KEY) {
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "quotes@sunnyislesinsurancefl.com",
    //     to: process.env.QUOTE_NOTIFICATION_EMAIL!,
    //     subject: `New ${data.insuranceType} quote request from ${data.firstName} ${data.lastName}`,
    //     html: `<p>${JSON.stringify(data)}</p>`,
    //   });
    // }
    //
    // Example: Webhook (GoHighLevel / HubSpot / generic)
    // ---------------------------------------------------
    // if (process.env.WEBHOOK_URL) {
    //   await fetch(process.env.WEBHOOK_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    // }
    //
    // Example: Supabase insert
    // -------------------------
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
    // await supabase.from("quote_requests").insert([data]);
    // ============================================================

    // Log to console in development (remove or replace in production)
    if (process.env.NODE_ENV !== "production") {
      console.log("[Quote Request]", {
        type: data.insuranceType,
        name: `${data.firstName} ${data.lastName}`,
        zip: data.zipCode,
        email: data.email,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Quote request received successfully.",
    });
  } catch (err) {
    console.error("[API /api/quote] Error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
