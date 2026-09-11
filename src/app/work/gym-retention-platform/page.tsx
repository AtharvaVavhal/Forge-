import CaseStudyMasthead from "@/components/case-study/CaseStudyMasthead";
import Industry from "@/components/case-study/Industry";
import Problem from "@/components/case-study/Problem";
import Objective from "@/components/case-study/Objective";
import Solution from "@/components/case-study/Solution";
import Workflow from "@/components/case-study/Workflow";
import Features from "@/components/case-study/Features";
import ProductScreens from "@/components/case-study/ProductScreens";
import TechnicalImplementation from "@/components/case-study/TechnicalImplementation";
import Outcome from "@/components/case-study/Outcome";
import Technology from "@/components/case-study/Technology";
import CaseStudyCta from "@/components/case-study/CaseStudyCta";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/work/gym-retention-platform";

export const metadata = pageMetadata({
  title: "Gym Retention & Operations Platform — FORGE",
  description:
    "A retention-and-operations platform built for gyms — attendance, inactivity detection, follow-up and owner visibility in one workflow.",
  path: PATH,
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gym Retention & Operations Platform",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function GymRetentionPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyMasthead />
      <Industry />
      <Problem />
      <Objective />
      <Solution />
      <Workflow />
      <Features />
      <ProductScreens />
      <TechnicalImplementation />
      <Outcome />
      <Technology />
      <CaseStudyCta />
    </>
  );
}
