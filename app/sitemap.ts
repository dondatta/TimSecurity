import type { MetadataRoute } from "next";
import { company, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/robotics", "/about", "/contact", ...services.map((s) => `/${s.slug}`)];
  return paths.map((p) => ({ url: `${company.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
