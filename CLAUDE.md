# FORGE — Project Memory

This repo is the marketing / lead-generation website for FORGE itself (a Pune web & software development studio) — not a client project.

**Source of truth:** the approved Brand & Website Blueprint (Revision 2) and the Implementation Readiness Report. If any build decision conflicts with what's below, stop and ask — do not silently deviate from locked strategy.

## Brand

- Position: a small, highly capable web & software development studio. Never call it a "startup," "agency," "IT company," "digital marketing agency," or "cheap freelance service."
- UVP (locked, verbatim): "We build websites and software that businesses actually run on — not just launch and forget."
- Primary tagline (locked, verbatim): "Websites and software your business actually runs on."
- Secondary lines (use selectively, never compete with the primary tagline): "Built to work. Built to last." · "Real software for real businesses."
- Banned phrases, anywhere on the site: transform your digital presence, empower your business, bring your vision to life, next-generation solutions, cutting-edge technology, seamless digital transformation, revolutionary, ecosystem.
- Voice test for any copy: could a competitor's marketing team have written this exact sentence about their own company? If yes, rewrite it.

## Visual system — fixed art direction, NOT a theme toggle

Section background is fixed by content type. Do not build a light/dark mode switcher.

- **Dark** (`bg-ink` `#17140F`, text `#F2ECDF`): Hero, Final CTA, Footer, case-study opening (Industry/Problem/Objective) and closing (Technology/CTA) bands.
- **Light** (`bg-paper` `#F3EFE7`): What We Build, Featured Work, Services, Who We Build For, How We Work, Why FORGE, Pricing, FAQ, and the case-study body (Solution/Workflow/Features/Screens/Technical Implementation/Outcome).
- **Accent** (`ember` `#B85A22`): CTAs, links, active states, section numerals only. Never a background fill. Never more than 1–2 ember elements visible at once. Contrast-check ember-on-paper for WCAG AA before shipping any ember text/button on the light surface — use a darkened ember variant for small text if the base value fails.
- **Secondary neutral** (`steel` `#6B6459`): secondary text, borders, dividers, captions.
- Supporting tones: `paper-elev` `#FFFFFF` (cards on light sections), `ember-soft` `#E8DCC8` (subtle tinted backgrounds behind ember callouts).

## Typography — Direction B: Editorial Engineering

Proposed defaults for implementation (swap later if licensing/performance testing says otherwise):

- Display: **Archivo** (700–800 weight) — headlines, section numerals, nav.
- Body: **Source Serif 4** — paragraph copy, case-study narrative. Verify legibility at 15–17px on a real phone before locking this in; it must not feel like a decorative/display serif at body size.
- Accents: **IBM Plex Mono** — spec labels, section numbers, technical callouts only, never body copy.

Load all three via `next/font/google`.

## Sitemap — do not add pages beyond this

`/` (home) · `/work` · `/work/gym-retention-platform` · `/services` · `/about` · `/pricing` · `/contact`

No standalone Process page. No per-service pages. No blog. Primary CTA everywhere: **Start a Project**.

## Services — six public categories only

Websites · Web Applications · E-Commerce · Business Automation · Mobile Apps · Maintenance & Support.

Payment integration, third-party API integration, domain/SSL, hosting/deployment, performance optimization, backend development, SaaS development are real capabilities but must live as line items inside these six — never their own card, page, or nav entry.

## Trust rules — hard constraint

Never fabricate: client logos, testimonials, awards, statistics, years of experience, client/user counts, team size, revenue, or case-study outcomes — under any framing, anywhere on the site. If real data doesn't exist yet, state the honest current state or omit the section entirely. A placeholder must be visibly marked as a placeholder; it must never read as real content.

## Case study — the flagship page, gets the most care of anything on the site

**Gym Retention & Operations Platform.**

Structure: Industry → Problem → Objective → Solution → Workflow → Features → Product Screens → Technical Implementation → Outcome → Technology → CTA.

Workflow: Attendance → Inactivity Detection → Follow-up → Return → Renewal → Add-ons → Owner Visibility.

Features: member management, membership management, QR attendance, attendance history, streaks/weekly goals, inactive-member red list, follow-up tracking, renewals, payment integration, notifications, PT/diet/supplement add-ons, owner dashboard, retention KPIs, audit logging.

## Pricing

Websites — visible starting prices: Landing Page ₹5,000+ · Static Website ₹10,000+ · Dynamic Website ₹20,000+.

Custom software — never a bare public number. Explain scope-based pricing: Requirements → Scope → Fixed Proposal → Milestones → Development → Delivery.

Maintenance line: "Support plans are scoped monthly and agreed at project delivery."

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Case-study and marketing copy hardcoded in-repo — no CMS for v1. Target host: Vercel.
