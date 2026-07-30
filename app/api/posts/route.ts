import { getAdminContext } from "@/lib/admin-auth";
import { normalizePost } from "@/lib/content";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
}

export async function POST(request: Request) {
  const context = await getAdminContext();
  if (!context) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const title = String(payload.title ?? "").trim();
    const body = String(payload.body ?? "").trim();
    const slug = slugify(String(payload.slug || title));

    if (!title || !slug || !body) {
      return Response.json(
        { error: "Title, slug and article content are required." },
        { status: 400 },
      );
    }

    const values = {
      title,
      slug,
      excerpt: String(payload.excerpt ?? "").trim(),
      body,
      category: String(payload.category ?? "Property Updates").trim(),
      language: String(payload.language ?? "English").trim(),
      image_url: String(payload.imageUrl ?? "").trim(),
      image_alt: String(payload.imageAlt ?? "").trim(),
      video_url: String(payload.videoUrl ?? "").trim(),
      meta_title: String(payload.metaTitle ?? "").trim(),
      meta_description: String(payload.metaDescription ?? "").trim(),
      author: String(payload.author || context.user.displayName).trim(),
      status: payload.status === "published" ? "published" : "draft",
      featured: Boolean(payload.featured),
      published_at:
        payload.status === "published"
          ? String(payload.publishedAt || new Date().toISOString())
          : null,
      updated_at: new Date().toISOString(),
    };

    const id = Number(payload.id);
    const query =
      Number.isInteger(id) && id > 0
        ? context.supabase
            .from("content_posts")
            .update(values)
            .eq("id", id)
            .select()
            .single()
        : context.supabase
            .from("content_posts")
            .insert(values)
            .select()
            .single();
    const { data, error } = await query;
    if (error) throw error;

    return Response.json(
      { post: normalizePost(data) },
      { status: Number.isInteger(id) && id > 0 ? 200 : 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error && error.message.toLowerCase().includes("duplicate")
        ? "This slug is already in use."
        : "Content could not be saved.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const context = await getAdminContext();
  if (!context) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id < 1) {
    return Response.json({ error: "Valid post id required." }, { status: 400 });
  }

  const { error } = await context.supabase
    .from("content_posts")
    .delete()
    .eq("id", id);
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ ok: true });
}
