export type PricingTier = {
  name: string;
  price: string;
};

export const websiteTiers: PricingTier[] = [
  { name: "Landing Page", price: "from ₹5,000" },
  { name: "Static Website", price: "from ₹10,000" },
  { name: "Dynamic Website", price: "from ₹20,000" },
];

export const scopeSteps: string[] = [
  "Requirements",
  "Scope",
  "Fixed Proposal",
  "Milestones",
  "Development",
  "Delivery",
];
