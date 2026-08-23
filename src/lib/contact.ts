export const projectTypes = [
  "Static Website",
  "Dynamic Website",
  "Web Application",
  "E-Commerce",
  "Mobile App",
  "Business Automation",
  "Other",
] as const;

export const budgetRanges = [
  "Under ₹10k",
  "₹10k–₹25k",
  "₹25k–₹50k",
  "₹50k–₹1L",
  "₹1L+",
] as const;

export type ContactFormData = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
};

export const emptyContactForm: ContactFormData = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "",
  description: "",
  budget: "",
  timeline: "",
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,20}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!data.businessName.trim()) {
    errors.businessName = "Enter your business name.";
  }

  if (!data.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address, like name@business.com.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Enter a phone number we can reach you on.";
  } else if (!phonePattern.test(data.phone.trim())) {
    errors.phone =
      "Enter a valid phone number — digits only, with optional +, spaces or -.";
  }

  if (!data.projectType) {
    errors.projectType = "Select the type of project you need.";
  } else if (
    !projectTypes.includes(data.projectType as (typeof projectTypes)[number])
  ) {
    errors.projectType = "Select a project type from the list.";
  }

  if (!data.description.trim()) {
    errors.description =
      "Describe what you're building — a few sentences is enough to start.";
  } else if (data.description.trim().length < 20) {
    errors.description =
      "Add a bit more detail — a couple of sentences helps us scope this properly.";
  }

  if (!data.budget) {
    errors.budget = "Select a budget range.";
  } else if (
    !budgetRanges.includes(data.budget as (typeof budgetRanges)[number])
  ) {
    errors.budget = "Select a budget range from the list.";
  }

  return errors;
}
