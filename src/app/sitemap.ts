import type { MetadataRoute } from "next";

const siteUrl = "https://forge.studio";

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
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
