import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/content";
import { SITE_URL } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts(100);
  const base = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/projects/om-value-homes-palghar",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    { path: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/videos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.25, changeFrequency: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];
  return [
    ...base.map((item) => ({
      url: `${SITE_URL}${item.path}`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/content/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: post.featured ? 0.8 : 0.65,
    })),
  ];
}
