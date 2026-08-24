"use client";

import { useState, type FormEvent } from "react";
import {
  budgetRanges,
  emptyContactForm,
  projectTypes,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact";

const fieldClass =
  "w-full rounded-lg border bg-paper-elev px-4 py-3 text-base text-ink placeholder:text-steel/50 focus:outline-none focus:ring-2 focus:ring-ink/20";
const labelClass = "font-display text-sm font-semibold text-ink";

function borderClass(hasError: boolean) {
  return hasError ? "border-ember" : "border-steel/30";
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<ContactFormData | null>(null);

  function updateField<K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors as ContactFormErrors);
          setStatus("idle");
          return;
        }
        setSubmitError(
          data.error ?? "Something went wrong sending this. Please try again."
        );
        setStatus("error");
        return;
      }

      setSubmitted(form);
      setStatus("success");
    } catch {
      setSubmitError(
        "Something went wrong sending this. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  if (status === "success" && submitted) {
    return (
      <div className="rounded-2xl border border-steel/20 bg-paper-elev p-8 md:p-10">
        <p className="mono text-xs uppercase tracking-[0.2em] text-steel">
          Submitted
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
          Thanks — we&apos;ve got it.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
          We read every project enquiry ourselves and reply by email — no
          automated sales sequence. Here&apos;s what you sent:
        </p>

        <dl className="mt-8 space-y-4 border-t border-steel/15 pt-6">
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Name
            </dt>
            <dd className="text-base text-ink">{submitted.name}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Business
            </dt>
            <dd className="text-base text-ink">{submitted.businessName}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Email
            </dt>
            <dd className="text-base text-ink">{submitted.email}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Phone
            </dt>
            <dd className="text-base text-ink">{submitted.phone}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Project type
            </dt>
            <dd className="text-base text-ink">{submitted.projectType}</dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Budget
            </dt>
            <dd className="text-base text-ink">{submitted.budget}</dd>
          </div>
          {submitted.timeline && (
            <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
              <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
                Timeline
              </dt>
              <dd className="text-base text-ink">{submitted.timeline}</dd>
            </div>
          )}
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <dt className="mono text-xs uppercase tracking-[0.15em] text-steel">
              Description
            </dt>
            <dd className="whitespace-pre-wrap text-base text-ink/80">
              {submitted.description}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => {
            setForm(emptyContactForm);
            setErrors({});
            setSubmitted(null);
            setStatus("idle");
          }}
          className="font-display mt-8 text-sm font-semibold text-ink transition-colors hover:text-ember-deep"
        >
          Submit another project →
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-steel/20 bg-paper-elev p-6 md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`mt-2 ${fieldClass} ${borderClass(!!errors.name)}`}
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-ember-deep">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business name
          </label>
          <input
            id="businessName"
            type="text"
            className={`mt-2 ${fieldClass} ${borderClass(
              !!errors.businessName
            )}`}
            value={form.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            aria-invalid={!!errors.businessName}
            aria-describedby={
              errors.businessName ? "businessName-error" : undefined
            }
          />
          {errors.businessName && (
            <p id="businessName-error" className="mt-2 text-sm text-ember-deep">
              {errors.businessName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`mt-2 ${fieldClass} ${borderClass(!!errors.email)}`}
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-ember-deep">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={`mt-2 ${fieldClass} ${borderClass(!!errors.phone)}`}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-ember-deep">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="projectType" className={labelClass}>
          Project type
        </label>
        <select
          id="projectType"
          className={`mt-2 ${fieldClass} ${borderClass(
            !!errors.projectType
          )}`}
          value={form.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          aria-invalid={!!errors.projectType}
          aria-describedby={
            errors.projectType ? "projectType-error" : undefined
          }
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="projectType-error" className="mt-2 text-sm text-ember-deep">
            {errors.projectType}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="description" className={labelClass}>
          Project description
        </label>
        <textarea
          id="description"
          rows={8}
          placeholder="What are you building, and what should it do? The more detail, the better we can scope it."
          className={`mt-2 ${fieldClass} ${borderClass(
            !!errors.description
          )}`}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          aria-invalid={!!errors.description}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
        />
        {errors.description && (
          <p id="description-error" className="mt-2 text-sm text-ember-deep">
            {errors.description}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="budget" className={labelClass}>
          Budget
        </label>
        <select
          id="budget"
          className={`mt-2 ${fieldClass} ${borderClass(!!errors.budget)}`}
          value={form.budget}
          onChange={(e) => updateField("budget", e.target.value)}
          aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? "budget-error" : undefined}
        >
          <option value="">Select a budget range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p id="budget-error" className="mt-2 text-sm text-ember-deep">
            {errors.budget}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="timeline" className={labelClass}>
          Timeline{" "}
          <span className="font-body font-normal text-steel">
            (optional)
          </span>
        </label>
        <input
          id="timeline"
          type="text"
          placeholder="e.g. flexible, within 4 weeks, or a specific launch date"
          className={`mt-2 ${fieldClass} border-steel/30`}
          value={form.timeline}
          onChange={(e) => updateField("timeline", e.target.value)}
        />
      </div>

      {status === "error" && submitError && (
        <p className="mt-6 text-sm text-ember-deep">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="font-display mt-8 rounded-full bg-ember-deep px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Start a Project"}
      </button>
    </form>
  );
}
