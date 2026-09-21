import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type ContactFormData,
  emptyContactForm,
  validateContactForm,
} from "@/lib/contact";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { renderInternalNotificationEmail } from "@/lib/email/internalNotification";
import { renderClientConfirmationEmail } from "@/lib/email/clientConfirmation";

function toContactFormData(body: unknown): ContactFormData {
  const record =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const field = (key: keyof ContactFormData) => {
    const value = record[key];
    return typeof value === "string" ? value : "";
  };

  return {
    name: field("name"),
    businessName: field("businessName"),
    email: field("email"),
    phone: field("phone"),
    projectType: field("projectType"),
    description: field("description"),
    budget: field("budget"),
    timeline: field("timeline"),
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "That request couldn't be read. Please try submitting again." },
      { status: 400 }
    );
  }

  const data = toContactFormData(body ?? emptyContactForm);
  const errors = validateContactForm(data);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // --- 1. Save to Supabase ---------------------------------------------
  let dbSaved = false;

  try {
    const supabase = getSupabaseAdmin();

    if (supabase) {
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        name: data.name,
        business_name: data.businessName,
        email: data.email,
        phone: data.phone,
        project_type: data.projectType,
        description: data.description,
        budget: data.budget,
        timeline: data.timeline || null,
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
      } else {
        dbSaved = true;
      }
    } else {
      console.error(
        "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
      );
    }
  } catch (err) {
    console.error("Supabase insert threw:", err);
  }

  // --- 2. Notify the Forge team via Resend -------------------------------
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  let emailSent = false;
  const resend = apiKey ? new Resend(apiKey) : null;

  if (resend && to && from) {
    try {
      const internal = renderInternalNotificationEmail(data);
      const { error: emailError } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: internal.subject,
        html: internal.html,
        text: internal.text,
      });

      if (emailError) {
        console.error("Resend error (internal notification):", emailError);
      } else {
        emailSent = true;
      }
    } catch (err) {
      console.error("Internal notification send failed:", err);
    }
  } else {
    console.error(
      "Email is not configured: set RESEND_API_KEY, CONTACT_EMAIL_TO and CONTACT_EMAIL_FROM."
    );
  }

  // --- 3. Send the client a confirmation ---------------------------------
  // Best-effort: the lead is already captured above (Supabase and/or the
  // internal notification), so a failure here must never fail the request.
  if (resend && from) {
    try {
      const confirmation = renderClientConfirmationEmail(data);
      const { error: confirmationError } = await resend.emails.send({
        from,
        to: data.email,
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      });

      if (confirmationError) {
        console.error("Resend error (client confirmation):", confirmationError);
      }
    } catch (err) {
      console.error("Client confirmation send failed:", err);
    }
  }

  // --- 4. Decide the response ---------------------------------------------
  // The submission only truly fails if we failed to both store it AND
  // notify anyone about it — otherwise the lead isn't lost.
  if (!dbSaved && !emailSent) {
    return NextResponse.json(
      {
        error:
          "We couldn't process this submission just now. Please try again in a moment, or reach out directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, dbSaved, emailSent });
}