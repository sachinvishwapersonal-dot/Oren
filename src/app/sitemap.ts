import type { MetadataRoute } from "next";
import { collections, products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-11-25";
  const staticRoutes = [
    "",
    "/pages/about-us",
    "/pages/contact",
    "/pages/shipping",
    "/pages/returns",
    "/pages/privacy",
    "/pages/terms",
    "/pages/disclaimer",
    "/agents.md",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...collections.map((collection) => ({
      url: `${siteConfig.url}/collections/${collection.handle}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.handle}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
