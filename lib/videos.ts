import { createClient } from "@/lib/supabase/server";
import { videos as starterVideos } from "@/lib/site-data";

export type VideoItem = {
  id: number;
  title: string;
  label: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  posterAlt: string;
  orientation: string;
  status: string;
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

type VideoRow = {
  id: number;
  title: string;
  label: string;
  description: string;
  video_url: string;
  poster_url: string;
  poster_alt: string;
  orientation: string;
  status: string;
  featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export function normalizeVideo(row: VideoRow): VideoItem {
  return {
    id: row.id,
    title: row.title,
    label: row.label,
    description: row.description,
    videoUrl: row.video_url,
    posterUrl: row.poster_url,
    posterAlt: row.poster_alt,
    orientation: row.orientation,
    status: row.status,
    featured: Boolean(row.featured),
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function extractYouTubeId(value: string): string | null {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return url.pathname.split("/").filter(Boolean)[0] ?? null;
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      const parts = url.pathname.split("/").filter(Boolean);
      if (["shorts", "embed", "live"].includes(parts[0])) return parts[1] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}

export function getVideoEmbedUrl(videoUrl: string): string | null {
  const id = extractYouTubeId(videoUrl);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

export function isDirectVideo(videoUrl: string): boolean {
  return /\.(mp4|webm|ogg)(?:$|[?#])/i.test(videoUrl);
}

export async function getPublishedVideos(limit = 12): Promise<VideoItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("video_items")
      .select("*")
      .eq("status", "published")
      .order("featured", { ascending: false })
      .order("sort_order", { ascending: true })
      .order("updated_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    const rows = (data ?? []) as VideoRow[];
    if (rows.length) return rows.map(normalizeVideo);

    const { count } = await supabase
      .from("video_items")
      .select("id", { count: "exact", head: true });
    return count ? [] : starterVideos.slice(0, limit);
  } catch {
    return starterVideos.slice(0, limit);
  }
}

export async function getAllVideos(): Promise<VideoItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("video_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return ((data ?? []) as VideoRow[]).map(normalizeVideo);
}
