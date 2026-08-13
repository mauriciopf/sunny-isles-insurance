import { type NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import type { ApiResponse } from "@/types";

/**
 * Contact form API route.
 *
 * See app/api/quote/route.ts for integration hook documentation.
 */
export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data. Please check your entries." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // ============================================================
    // FUTURE INTEGRATIONS — add your email/CRM code here
    // ============================================================
    //
    // Example: Resend email notification
    // if (process.env.RESEND_API_KEY) { ... }
    //
    // Example: Webhook
    // if (process.env.WEBHOOK_URL) { ... }
    // ============================================================

    if (process.env.NODE_ENV !== "production") {
      console.log("[Contact Submission]", {
        name: data.name,
        subject: data.subject,
        email: data.email,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (err) {
    console.error("[API /api/contact] Error:", err);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
