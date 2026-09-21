import type { ContactFormData } from "@/lib/contact";
import {
  bodyCopy,
  divider,
  emphasisLine,
  footerBlock,
  infoCard,
  logoHeader,
  metaLabel,
  padded,
  headline,
  renderShell,
  spacer,
  withFallback,
} from "./shared";

export const CLIENT_CONFIRMATION_SUBJECT =
  "We received your project enquiry — Forge";

export function renderClientConfirmationEmail(data: ContactFormData): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = CLIENT_CONFIRMATION_SUBJECT;

  const body = [
    logoHeader(),
    spacer(28),
    padded(divider()),
    spacer(24),
    padded(metaLabel("Welcome / 01")),
    spacer(14),
    padded(headline(["Thanks", "for reaching out."])),
    spacer(16),
    padded(
      bodyCopy(
        "We've received your project details and will review them carefully."
      )
    ),
    spacer(24),
    padded(
      bodyCopy(
        "We don't believe in unnecessary sales pitches.<br><br>We'll look at what you're building, understand the problem, and come back with the right next steps.",
        { muted: true }
      )
    ),
    spacer(32),
    padded(metaLabel("Project")),
    spacer(12),
    padded(
      infoCard([
        { label: "Business", value: withFallback(data.businessName, "—") },
        { label: "Project type", value: withFallback(data.projectType, "—") },
        { label: "Budget", value: withFallback(data.budget, "—") },
        { label: "Timeline", value: withFallback(data.timeline) },
      ])
    ),
    spacer(36),
    padded(metaLabel("01 Review &nbsp;&nbsp;02 Understand &nbsp;&nbsp;03 Respond")),
    spacer(12),
    padded(
      bodyCopy(
        "We'll review your enquiry and get back to you with the next steps.",
        { muted: true }
      )
    ),
    spacer(32),
    padded(emphasisLine(["There is a lot to build.", "Let's build it well."])),
    spacer(40),
    padded(divider()),
    footerBlock(),
  ].join("\n");

  const html = renderShell({
    subject,
    preheaderText:
      "We've received your project details and will review them carefully.",
    bodyHtml: body,
  });

  const text = [
    "THANKS FOR REACHING OUT.",
    "",
    "We've received your project details and will review them carefully.",
    "",
    "We don't believe in unnecessary sales pitches. We'll look at what",
    "you're building, understand the problem, and come back with the",
    "right next steps.",
    "",
    "PROJECT",
    `Business: ${data.businessName}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline || "Not specified"}`,
    "",
    "01 Review  02 Understand  03 Respond",
    "We'll review your enquiry and get back to you with the next steps.",
    "",
    "There is a lot to build. Let's build it well.",
    "",
    "— FORGE",
    "forgebuilds.in · hello@forgebuilds.in",
  ].join("\n");

  return { subject, html, text };
}
