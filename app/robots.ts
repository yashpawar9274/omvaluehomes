import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"],
        allow: ["/", "/projects/", "/guides", "/videos", "/content/"],
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: "https://www.budgethomes4u.com/sitemap.xml",
    host: "https://www.budgethomes4u.com",
  };
}
