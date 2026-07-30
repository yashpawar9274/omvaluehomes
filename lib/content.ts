import { createClient } from "@/lib/supabase/server";
import { defaultPosts, type DefaultPost } from "@/lib/site-data";

export type ContentPost = DefaultPost;

type ContentRow = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  language: string;
  image_url: string;
  image_alt: string;
  video_url: string;
  meta_title: string;
  meta_description: string;
  author: string;
  status: string;
  featured: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export function normalizePost(row: ContentRow): ContentPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    body: row.body,
    category: row.category,
    language: row.language,
    imageUrl: row.image_url,
    imageAlt: row.image_alt,
    videoUrl: row.video_url,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    author: row.author,
    status: row.status,
    featured: Boolean(row.featured),
    publishedAt: row.published_at ?? row.updated_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getPublishedPosts(limit = 12): Promise<ContentPost[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("content_posts")
      .select("*")
      .eq("status", "published")
      .order("featured", { ascending: false })
      .order("published_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    const rows = (data ?? []) as ContentRow[];
    return rows.length ? rows.map(normalizePost) : defaultPosts.slice(0, limit);
  } catch {
    return defaultPosts.slice(0, limit);
  }
}

export async function getAllPosts(): Promise<ContentPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("content_posts")
    .select("*")
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return ((data ?? []) as ContentRow[]).map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<ContentPost | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("content_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw error;
    if (data) return normalizePost(data as ContentRow);
  } catch {
    // Fall back to starter editorial content when Supabase is not configured.
  }
  return defaultPosts.find((post) => post.slug === slug) ?? null;
}
