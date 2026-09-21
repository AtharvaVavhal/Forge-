import type { ContactFormData } from "@/lib/contact";
import {
  bodyCopy,
  ctaButton,
  divider,
  escapeHtml,
  footerBlock,
  infoCard,
  logoHeader,
  metaLabel,
  padded,
  headline,
  renderShell,
  sanitizeHeaderValue,
  spacer,
  withFallback,
} from "./shared";

export function internalNotificationSubject(data: ContactFormData): string {
  return `New project enquiry — ${sanitizeHeaderValue(data.businessName)}`;
}

function replyMailto(data: ContactFormData): string {
  const subject = encodeURIComponent(
    `Re: Your project enquiry — ${sanitizeHeaderValue(data.businessName)}`
  );
  return `mailto:${data.email}?subject=${subject}`;
}

export function renderInternalNotificationEmail(data: ContactFormData): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = internalNotificationSubject(data);

  const body = [
    logoHeader(),
    spacer(28),
    padded(divider()),
    spacer(24),
    padded(metaLabel("Project enquiry / 01")),
    spacer(14),
    padded(headline(["New project", "enquiry."])),
    spacer(16),
    padded(
      bodyCopy(
        "A new project enquiry has been submitted through forgebuilds.in."
      )
    ),
    spacer(32),
    padded(metaLabel("Project information")),
    spacer(12),
    padded(
      infoCard([
        { label: "Name", value: withFallback(data.name, "—") },
        { label: "Business", value: withFallback(data.businessName, "—") },
        { label: "Email", value: escapeHtml(data.email) },
        { label: "Phone", value: withFallback(data.phone, "—") },
        { label: "Project type", value: withFallback(data.projectType, "—") },
        { label: "Budget", value: withFallback(data.budget, "—") },
        { label: "Timeline", value: withFallback(data.timeline) },
      ])
    ),
    spacer(32),
    padded(metaLabel("Project description")),
    spacer(12),
    padded(
      bodyCopy(
        `<div style="white-space:pre-wrap;">${escapeHtml(data.description)}</div>`
      )
    ),
    spacer(36),
    padded(metaLabel("Review. Respond. Build.")),
    spacer(12),
    padded(
      bodyCopy(
        "Review the enquiry and follow up with the right next steps.",
        { muted: true }
      )
    ),
    spacer(28),
    padded(ctaButton("Reply to this enquiry", replyMailto(data))),
    spacer(40),
    padded(divider()),
    footerBlock(),
  ].join("\n");

  const html = renderShell({
    subject,
    preheaderText:
      "A new project enquiry has been submitted through forgebuilds.in.",
    bodyHtml: body,
  });

  const text = [
    "NEW PROJECT ENQUIRY",
    "",
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
    "",
    `Reply directly to this email to respond to ${data.name}.`,
  ].join("\n");

  return { subject, html, text };
}
