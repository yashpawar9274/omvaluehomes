"use client";

import { useState } from "react";
import type { ContentPost } from "@/lib/content";
import { uploadMedia } from "@/lib/supabase/upload";

const empty = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  category: "Property Updates",
  language: "English",
  imageUrl: "",
  imageAlt: "",
  videoUrl: "",
  metaTitle: "",
  metaDescription: "",
  author: "BudgetHomes Editorial",
  status: "draft",
  featured: false,
};

export function AdminContentManager({
  initialPosts,
}: {
  initialPosts: ContentPost[];
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [form, setForm] = useState(empty);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  function update(name: string, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function uploadImage(file: File | null) {
    if (!file) return;
    setBusy(true);
    setMessage("Uploading image…");
    try {
      const result = await uploadMedia(file, "content", form.imageAlt);
      update("imageUrl", result.url);
      setMessage("Image uploaded to Supabase Storage.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Image upload failed.");
    } finally {
      setBusy(false);
    }
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("Saving content…");
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = (await response.json()) as {
      post?: ContentPost;
      error?: string;
    };
    setBusy(false);
    if (!response.ok || !result.post) {
      setMessage(result.error || "Content could not be saved.");
      return;
    }
    setPosts((current) => [
      result.post!,
      ...current.filter((post) => post.id !== result.post!.id),
    ]);
    setForm(empty);
    setMessage("Content saved successfully.");
  }

  function edit(post: ContentPost) {
    setForm({
      id: String(post.id),
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      body: post.body,
      category: post.category,
      language: post.language,
      imageUrl: post.imageUrl,
      imageAlt: post.imageAlt,
      videoUrl: post.videoUrl,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      author: post.author,
      status: post.status,
      featured: post.featured,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function remove(id: number) {
    if (!window.confirm("Delete this content item?")) return;
    const response = await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
    if (response.ok) setPosts((current) => current.filter((post) => post.id !== id));
  }

  return (
    <div className="admin-layout">
      <form className="admin-form panel" onSubmit={save}>
        <div className="admin-form-heading">
          <div>
            <span className="eyebrow">Content editor</span>
            <h2>{form.id ? "Edit content" : "Create new content"}</h2>
          </div>
          {form.id && (
            <button type="button" className="button button-ghost" onClick={() => setForm(empty)}>
              New article
            </button>
          )}
        </div>
        <div className="admin-grid">
          <label className="full-field">
            <span>Title</span>
            <input required value={form.title} onChange={(e) => update("title", e.target.value)} />
          </label>
          <label>
            <span>Slug (optional)</span>
            <input value={form.slug} onChange={(e) => update("slug", e.target.value)} placeholder="auto-from-title" />
          </label>
          <label>
            <span>Category</span>
            <select value={form.category} onChange={(e) => update("category", e.target.value)}>
              <option>Property Updates</option>
              <option>Buyer Guide</option>
              <option>Palghar Insights</option>
              <option>Home Loan</option>
              <option>Video Tour</option>
              <option>Customer Story</option>
              <option>Offers</option>
              <option>FAQ</option>
            </select>
          </label>
          <label className="full-field">
            <span>Short excerpt</span>
            <textarea rows={2} value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} />
          </label>
          <label className="full-field">
            <span>Article content</span>
            <textarea required rows={10} value={form.body} onChange={(e) => update("body", e.target.value)} />
          </label>
          <label>
            <span>Cover image URL</span>
            <input value={form.imageUrl} onChange={(e) => update("imageUrl", e.target.value)} />
          </label>
          <label>
            <span>Image alt text</span>
            <input value={form.imageAlt} onChange={(e) => update("imageAlt", e.target.value)} />
          </label>
          <label className="full-field upload-field">
            <span>Or upload an image (max 10 MB)</span>
            <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files?.[0] ?? null)} />
          </label>
          <label className="full-field">
            <span>YouTube / video URL</span>
            <input value={form.videoUrl} onChange={(e) => update("videoUrl", e.target.value)} />
          </label>
          <label>
            <span>Language</span>
            <select value={form.language} onChange={(e) => update("language", e.target.value)}>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Hinglish</option>
            </select>
          </label>
          <label>
            <span>Author</span>
            <input value={form.author} onChange={(e) => update("author", e.target.value)} />
          </label>
          <label className="full-field">
            <span>SEO title</span>
            <input value={form.metaTitle} onChange={(e) => update("metaTitle", e.target.value)} maxLength={65} />
          </label>
          <label className="full-field">
            <span>SEO description</span>
            <textarea rows={2} value={form.metaDescription} onChange={(e) => update("metaDescription", e.target.value)} maxLength={165} />
          </label>
          <label>
            <span>Status</span>
            <select value={form.status} onChange={(e) => update("status", e.target.value)}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <label className="check-field">
            <input type="checkbox" checked={form.featured} onChange={(e) => update("featured", e.target.checked)} />
            <span>Feature on homepage</span>
          </label>
        </div>
        <button className="button button-primary" disabled={busy}>
          {busy ? "Please wait…" : form.id ? "Update content" : "Save content"}
        </button>
        {message && <p className="admin-message">{message}</p>}
      </form>

      <section className="panel admin-list">
        <span className="eyebrow">Content library</span>
        <h2>{posts.length} saved items</h2>
        <div className="admin-items">
          {posts.length === 0 && <p>No database content yet. Create your first article.</p>}
          {posts.map((post) => (
            <article key={post.id}>
              <div>
                <span className={`status ${post.status}`}>{post.status}</span>
                <strong>{post.title}</strong>
                <small>{post.category} · {post.language}</small>
              </div>
              <div className="admin-item-actions">
                <button type="button" onClick={() => edit(post)}>Edit</button>
                <button type="button" onClick={() => remove(post.id)}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
