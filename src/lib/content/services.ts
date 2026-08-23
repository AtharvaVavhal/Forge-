export type Service = {
  slug: string;
  name: string;
  homeWhat: string;
  homeWho: string;
  homeCta: string | null;
  what: string;
  who: string;
  useCases: string[];
  deliverables: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    homeWhat: "Static and dynamic business websites.",
    homeWho: "For gyms, restaurants, clinics, consultants, local retailers.",
    homeCta: "Start a Project",
    what: "Business websites that present your company clearly and load fast on any device — from a single landing page to a full multi-page site with an editable content area.",
    who: "Gyms, restaurants, clinics, consultants and local retailers that need a professional presence and a straightforward way for people to find and contact them online.",
    useCases: [
      "A restaurant's menu, location and reservation page",
      "A clinic's services, doctors and booking information",
      "A consultant's portfolio and enquiry page",
      "A retailer's store locator and product catalog",
    ],
    deliverables:
      "A responsive design, clear content structure, contact and enquiry forms, and domain and SSL setup — with hosting handled on request.",
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    homeWhat: "Custom software built around a specific business workflow.",
    homeWho: "For businesses whose operations don't fit an off-the-shelf tool.",
    homeCta: "Discuss Your Project",
    what: "Custom software built around how your business actually operates — not a generic template stretched to fit.",
    who: "Businesses whose day-to-day workflow doesn't fit an off-the-shelf tool: scheduling, membership tracking, inventory, or internal operations that need their own system.",
    useCases: [
      "Membership and attendance systems",
      "Booking and scheduling tools",
      "Internal dashboards for staff and operations",
      "Workflow tracking between staff, customers and management",
    ],
    deliverables:
      "A requirements review, a scoped build plan, a working system delivered in milestones, and documentation for your team.",
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    homeWhat: "Online stores with payment integration.",
    homeWho: "For retailers and product-based businesses.",
    homeCta: "Get a Quote",
    what: "Online stores that let customers browse, order and pay, with a backend to manage products and orders.",
    who: "Retailers and product-based businesses that want to sell directly online instead of relying on marketplaces alone.",
    useCases: [
      "A product catalog with checkout",
      "Order tracking and inventory management",
      "Integration with a payment gateway",
      "A store your team can update without a developer",
    ],
    deliverables:
      "Store setup, payment integration, order and inventory management, and a system your team can run day to day.",
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    homeWhat: "Systems that remove repetitive manual work.",
    homeWho: "For any business running a process on WhatsApp, Excel, or memory.",
    homeCta: "Discuss Your Project",
    what: "Systems that take a manual, repetitive process and turn it into something that runs itself — or close to it.",
    who: "Any business currently running a process on WhatsApp, Excel, or memory, and losing time or accuracy because of it.",
    useCases: [
      "Automated reminders and follow-ups",
      "Spreadsheet-based processes moved into a proper system",
      "Repetitive admin work reduced to a few clicks",
      "Notifications that used to depend on someone remembering",
    ],
    deliverables:
      "A review of the current process, a system designed to replace the manual steps, and handover training for your team.",
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    homeWhat: "Mobile applications, when the use case genuinely needs one.",
    homeWho: "For businesses where the use case genuinely needs an app.",
    homeCta: "Discuss Your Project",
    what: "A mobile application, built only when the use case genuinely needs one rather than a mobile-friendly website.",
    who: "Businesses where customers or staff need an app-specific experience — offline access, push notifications, or a dedicated on-the-go tool.",
    useCases: [
      "A companion app to an existing web platform",
      "A staff-facing tool for field or on-site use",
      "A customer app where push notifications matter",
    ],
    deliverables:
      "An honest assessment of whether an app is the right call for your use case, followed by a scoped build if it is.",
  },
  {
    slug: "maintenance-support",
    name: "Maintenance & Support",
    homeWhat: "Ongoing technical support after launch, included in every proposal by default.",
    homeWho: "For every client — this isn't sold separately.",
    homeCta: null,
    what: "Ongoing technical support after your site or system goes live.",
    who: "Every client. This is included as a line item in every proposal by default, not sold as an add-on.",
    useCases: [
      "Bug fixes and small content updates",
      "Monitoring for issues before they affect users",
      "Keeping the software running as your business changes",
    ],
    deliverables:
      "A support plan scoped and agreed at project delivery, so you know exactly what's covered before launch.",
  },
];
