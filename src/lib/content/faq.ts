export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Starts from ₹10,000 for a static site; depends on pages, content and features.",
  },
  {
    question: "How long does development take?",
    answer:
      "Websites: 1–3 weeks typically. Web applications: scoped per project, often 6–10 weeks.",
  },
  {
    question: "Do you work with businesses outside Pune?",
    answer:
      "Yes — most work is remote-friendly; Pune is where the studio is based, not a limit on who we work with.",
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes — we review what exists before quoting.",
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, along with domain and SSL setup.",
  },
  {
    question: "Can you integrate payments?",
    answer: "Yes, using standard payment gateways.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, support plans are set up at delivery.",
  },
  {
    question: "What happens after launch?",
    answer: "Handover, documentation, and an agreed support plan.",
  },
];
