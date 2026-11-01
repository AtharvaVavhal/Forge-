import NookMasthead from "@/components/nook/NookMasthead";
import NookOverview from "@/components/nook/NookOverview";
import NookProblem from "@/components/nook/NookProblem";
import NookSolution from "@/components/nook/NookSolution";
import NookArchitecture from "@/components/nook/NookArchitecture";
import NookBrandIdentity from "@/components/nook/NookBrandIdentity";
import NookProgress from "@/components/nook/NookProgress";
import NookTechStack from "@/components/nook/NookTechStack";
import NookProductDirection from "@/components/nook/NookProductDirection";
import NookCta from "@/components/nook/NookCta";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/work/nook-hostel-pg-platform";

export const metadata = pageMetadata({
  title: "Nook — Hostel & PG Management Platform — FORGE",
  description:
    "An in-house SaaS product by FORGE: A modern hostel and PG management platform designed to simplify resident management, admissions, bookings, bed allocation and financial operations.",
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
      name: "Nook — Hostel & PG Management Platform",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function NookCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NookMasthead />
      <NookOverview />
      <NookProblem />
      <NookSolution />
      <NookArchitecture />
      <NookBrandIdentity />
      <NookProgress />
      <NookTechStack />
      <NookProductDirection />
      <NookCta />
    </>
  );
}
