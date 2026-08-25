
import type { MetadataRoute } from "next";

const BASE_URL = "https://SIZNING-DOMENINGIZ.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const tests = Array.from({ length: 10 }, (_, index) => index + 1);

  const testPages = tests.flatMap((id) => [
    {
      url: `${BASE_URL}/okuma/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/okuma/${id}/bolum/1`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/okuma`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...testPages,
  ];
}

import type { MetadataRoute } from "next";

const BASE_URL = "https://SIZNING-DOMENINGIZ.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const tests = Array.from({ length: 10 }, (_, index) => index + 1);

  const testPages = tests.flatMap((id) => [
    {
      url: `${BASE_URL}/okuma/${id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/okuma/${id}/bolum/1`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/okuma`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...testPages,
  ];
}

