import { getAdminContext } from "@/lib/admin-auth";
import {
  extractYouTubeId,
  isDirectVideo,
  normalizeVideo,
} from "@/lib/videos";

function isSupportedVideoUrl(value: string) {
  return Boolean(extractYouTubeId(value)) || isDirectVideo(value);
}

export async function POST(request: Request) {
  const context = await getAdminContext();
  if (!context) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const title = String(payload.title ?? "").trim();
    const videoUrl = String(payload.videoUrl ?? "").trim();

    if (!title || !videoUrl) {
      return Response.json(
        { error: "Video title and video URL are required." },
        { status: 400 },
      );
    }
    if (!isSupportedVideoUrl(videoUrl)) {
      return Response.json(
        { error: "Use a YouTube link or an uploaded MP4/WebM video." },
        { status: 400 },
      );
    }

    const values = {
      title,
      label: String(payload.label ?? "Flat Tour").trim() || "Flat Tour",
      description: String(payload.description ?? "").trim(),
      video_url: videoUrl,
      poster_url: String(payload.posterUrl ?? "").trim(),
      poster_alt: String(payload.posterAlt ?? "").trim(),
      orientation: payload.orientation === "vertical" ? "vertical" : "landscape",
      status: payload.status === "published" ? "published" : "draft",
      featured: Boolean(payload.featured),
      sort_order: Number.isFinite(Number(payload.sortOrder))
        ? Math.max(0, Math.round(Number(payload.sortOrder)))
        : 0,
      updated_at: new Date().toISOString(),
    };

    const id = Number(payload.id);
    const query =
      Number.isInteger(id) && id > 0
        ? context.supabase
            .from("video_items")
            .update(values)
            .eq("id", id)
            .select()
            .single()
        : context.supabase
            .from("video_items")
            .insert(values)
            .select()
            .single();
    const { data, error } = await query;
    if (error) throw error;

    return Response.json(
      { video: normalizeVideo(data) },
      { status: Number.isInteger(id) && id > 0 ? 200 : 201 },
    );
  } catch {
    return Response.json({ error: "Video could not be saved." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const context = await getAdminContext();
  if (!context) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id < 1) {
    return Response.json({ error: "Valid video id required." }, { status: 400 });
  }

  const { error } = await context.supabase
    .from("video_items")
    .delete()
    .eq("id", id);
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ ok: true });
}
