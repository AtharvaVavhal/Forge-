import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  "",
  "/work",
  "/work/gym-retention-platform",
  "/services",
  "/about",
  "/pricing",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
