import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services/",
    "/about/",
    "/gallery/",
    "/updates/",
    "/contact/",
    "/policies/",
    "/privacy/",
    "/terms/",
  ];
  const legal = new Set(["/policies/", "/privacy/", "/terms/"]);
  return routes.map((route) => ({
    url: `${SITE.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : legal.has(route) ? 0.3 : 0.8,
  }));
}
