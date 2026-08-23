import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  type ContactFormData,
  emptyContactForm,
  validateContactForm,
} from "@/lib/contact";

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

function emailText(data: ContactFormData): string {
  return [
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline || "Not specified"}`,
    "",
    "Project description:",
    data.description,
  ].join("\n");
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "Contact form is not configured: set RESEND_API_KEY, CONTACT_EMAIL_TO and CONTACT_EMAIL_FROM."
    );
    return NextResponse.json(
      {
        error:
          "This form isn't fully set up yet — the submission couldn't be sent. Please try again shortly.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New project enquiry — ${data.businessName}`,
      text: emailText(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "We couldn't send this submission just now. Please try again in a moment.",
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't send this submission just now. Please try again in a moment.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
