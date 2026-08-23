export const workflowSteps: string[] = [
  "Attendance",
  "Inactivity Detection",
  "Follow-up",
  "Return",
  "Renewal",
  "Add-ons",
  "Owner Visibility",
];

export const features: string[] = [
  "Member management",
  "Membership management",
  "QR attendance",
  "Attendance history",
  "Streaks / weekly goals",
  "Inactive-member red list",
  "Follow-up tracking",
  "Membership renewal",
  "Payment integration",
  "Notifications",
  "PT / diet / supplement add-ons",
  "Owner dashboard",
  "Retention KPIs",
  "Audit logging",
];

export type ScreenPlaceholder = {
  heading: string;
};

export const screens: ScreenPlaceholder[] = [
  { heading: "Screen: Member List" },
  { heading: "Screen: Red List" },
  { heading: "Screen: Owner Dashboard" },
  { heading: "Screen: Attendance Flow" },
];

export const technology: string[] = ["Next.js", "TypeScript", "PostgreSQL"];
