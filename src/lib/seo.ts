import type { Metadata } from "next";

export const SITE_URL = "https://forgebuilds.in";
export const SITE_NAME = "FORGE";
export const SITE_EMAIL = "shrikant.salunkhe@forgebuilds.in";

export const SITE_TITLE = "FORGE — Web & Software Development Studio, Pune";

export const SITE_DESCRIPTION =
  "FORGE is a small, focused web and software development studio in Pune, building websites, web applications and business systems that businesses actually run on.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/** Canonical + Open Graph + Twitter metadata for a single route, from one title/description. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
