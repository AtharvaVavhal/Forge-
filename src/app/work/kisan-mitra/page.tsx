import KisanMitraMasthead from "@/components/kisan-mitra/KisanMitraMasthead";
import KisanMitraOverview from "@/components/kisan-mitra/KisanMitraOverview";
import KisanMitraProblem from "@/components/kisan-mitra/KisanMitraProblem";
import KisanMitraSolution from "@/components/kisan-mitra/KisanMitraSolution";
import KisanMitraGrounding from "@/components/kisan-mitra/KisanMitraGrounding";
import KisanMitraBrandIdentity from "@/components/kisan-mitra/KisanMitraBrandIdentity";
import KisanMitraProgress from "@/components/kisan-mitra/KisanMitraProgress";
import KisanMitraArchitecture from "@/components/kisan-mitra/KisanMitraArchitecture";
import KisanMitraCta from "@/components/kisan-mitra/KisanMitraCta";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/work/kisan-mitra";

export const metadata = pageMetadata({
  title: "Kisan Mitra — A Farming Companion for Grape Growers — FORGE",
  description:
    "An in-house product by FORGE, in development: a Marathi-first agronomy platform for grape growers with crop schedules, knowledge-base-first answers and photo diagnosis.",
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
      name: "Kisan Mitra — A Farming Companion for Grape Growers",
      item: `${SITE_URL}${PATH}`,
    },
  ],
};

export default function KisanMitraCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <KisanMitraMasthead />
      <KisanMitraOverview />
      <KisanMitraProblem />
      <KisanMitraSolution />
      <KisanMitraGrounding />
      <KisanMitraBrandIdentity />
      <KisanMitraProgress />
      <KisanMitraArchitecture />
      <KisanMitraCta />
    </>
  );
}
