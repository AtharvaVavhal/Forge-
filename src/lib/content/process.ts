export type ProcessStep = {
  label: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    label: "Discover",
    detail:
      "We start by understanding your business, your current process, and what the software actually needs to do — before any design or code. This is what stops a project from solving the wrong problem.",
  },
  {
    label: "Plan",
    detail:
      "We turn that understanding into a defined scope: what's included, what isn't, and how the project will be delivered. This is what keeps a project from expanding quietly and going over budget.",
  },
  {
    label: "Design",
    detail:
      "We design the interface around how your team and your customers will actually use it, not just how it looks in a mockup. This is what keeps the finished product usable, not just presentable.",
  },
  {
    label: "Build",
    detail:
      "We build against the agreed scope, in milestones you can see and review as they're completed. This is what keeps you informed instead of waiting for one big reveal at the end.",
  },
  {
    label: "Test",
    detail:
      "We test the system against real use cases before it reaches your customers or your team. This is what catches problems before they become your problem.",
  },
  {
    label: "Launch",
    detail:
      "We handle deployment, domain, hosting and the technical details of going live. This is what keeps launch day from being the riskiest day of the project.",
  },
  {
    label: "Improve",
    detail:
      "We stay involved after launch with an agreed support plan, so issues get fixed and the system keeps working as your business changes. This is what stops the software from being abandoned the moment it ships.",
  },
];
