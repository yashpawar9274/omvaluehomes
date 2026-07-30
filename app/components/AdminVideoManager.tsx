"use client";

import { useState } from "react";
import type { VideoItem } from "@/lib/videos";
import { uploadMedia } from "@/lib/supabase/upload";

const empty = {
  id: "",
  title: "",
  label: "Flat Tour",
  description: "",
  videoUrl: "",
  posterUrl: "",
  posterAlt: "",
  orientation: "landscape",
  status: "draft",
  featured: false,
  sortOrder: "0",
};

export function AdminVideoManager({ initialVideos }: { initialVideos: VideoItem[] }) {
  const [videos, setVideos] = useState(initialVideos);
  const [form, setForm] = useState(empty);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  function update(name: string, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function upload(file: File | null, destination: "posterUrl" | "videoUrl") {
    if (!file) return;
    setBusy(true);
    setMessage(destination === "posterUrl" ? "Poster upload ho raha hai…" : "Video upload ho raha hai…");
    try {
      const result = await uploadMedia(
        file,
        destination === "posterUrl" ? "content" : "videos",
        form.posterAlt,
      );
      update(destination, result.url);
      setMessage(
        destination === "posterUrl"
          ? "Poster uploaded to Supabase Storage."
          : "Video uploaded to Supabase Storage.",
      );
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("Video save ho raha hai…");
    const response = await fetch("/api/videos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    const result = (await response.json()) as { video?: VideoItem; error?: string };
    setBusy(false);
    if (!response.ok || !result.video) {
      setMessage(result.error || "Video save nahi hua.");
      return;
    }
    setVideos((current) =>
      [result.video!, ...current.filter((video) => video.id !== result.video!.id)]
        .sort((a, b) => a.sortOrder - b.sortOrder),
    );
    setForm(empty);
    setMessage("Video successfully saved.");
  }

  function edit(video: VideoItem) {
    setForm({
      id: String(video.id),
      title: video.title,
      label: video.label,
      description: video.description,
      videoUrl: video.videoUrl,
      posterUrl: video.posterUrl,
      posterAlt: video.posterAlt,
      orientation: video.orientation,
      status: video.status,
      featured: video.featured,
      sortOrder: String(video.sortOrder),
    });
    document.getElementById("video-editor")?.scrollIntoView({ behavior: "smooth" });
  }

  async function remove(id: number) {
    if (!window.confirm("Is video ko delete karein?")) return;
    const response = await fetch(`/api/videos?id=${id}`, { method: "DELETE" });
    if (response.ok) {
      setVideos((current) => current.filter((video) => video.id !== id));
      setMessage("Video deleted.");
    }
  }

  return (
    <section id="video-editor" className="admin-section">
      <div className="admin-section-heading">
        <div>
          <span className="eyebrow">Video library</span>
          <h2>Website videos control karein</h2>
          <p>YouTube URL paste karein ya apni MP4 upload karein. Draft video public website par nahi dikhega.</p>
        </div>
      </div>
      <div className="admin-layout">
        <form className="admin-form panel" onSubmit={save}>
          <div className="admin-form-heading">
            <div>
              <span className="eyebrow">Video editor</span>
              <h2>{form.id ? "Edit video" : "Add new video"}</h2>
            </div>
            {form.id && (
              <button type="button" className="button button-ghost" onClick={() => setForm(empty)}>
                New video
              </button>
            )}
          </div>
          <div className="admin-grid">
            <label className="full-field">
              <span>Video title</span>
              <input required value={form.title} onChange={(e) => update("title", e.target.value)} />
            </label>
            <label>
              <span>Label / BHK</span>
              <input value={form.label} onChange={(e) => update("label", e.target.value)} placeholder="1 BHK" />
            </label>
            <label>
              <span>Display order</span>
              <input type="number" min="0" value={form.sortOrder} onChange={(e) => update("sortOrder", e.target.value)} />
            </label>
            <label className="full-field">
              <span>Short description</span>
              <textarea rows={3} value={form.description} onChange={(e) => update("description", e.target.value)} />
            </label>
            <label className="full-field">
              <span>YouTube or uploaded video URL</span>
              <input required value={form.videoUrl} onChange={(e) => update("videoUrl", e.target.value)} placeholder="https://youtu.be/... or Supabase Storage URL" />
            </label>
            <label className="full-field upload-field">
              <span>Or upload MP4/WebM (max 50 MB on Supabase Free)</span>
              <input type="file" accept="video/mp4,video/webm,video/ogg" onChange={(e) => upload(e.target.files?.[0] ?? null, "videoUrl")} />
            </label>
            <label>
              <span>Poster image URL (optional)</span>
              <input value={form.posterUrl} onChange={(e) => update("posterUrl", e.target.value)} />
            </label>
            <label>
              <span>Poster alt text</span>
              <input value={form.posterAlt} onChange={(e) => update("posterAlt", e.target.value)} />
            </label>
            <label className="full-field upload-field">
              <span>Or upload poster image (max 10 MB)</span>
              <input type="file" accept="image/*" onChange={(e) => upload(e.target.files?.[0] ?? null, "posterUrl")} />
            </label>
            <label>
              <span>Video format</span>
              <select value={form.orientation} onChange={(e) => update("orientation", e.target.value)}>
                <option value="landscape">Landscape (YouTube)</option>
                <option value="vertical">Vertical (Shorts/Reels)</option>
              </select>
            </label>
            <label>
              <span>Status</span>
              <select value={form.status} onChange={(e) => update("status", e.target.value)}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
            <label className="check-field full-field">
              <input type="checkbox" checked={form.featured} onChange={(e) => update("featured", e.target.checked)} />
              <span>Feature this video first</span>
            </label>
          </div>
          <button className="button button-primary" disabled={busy}>
            {busy ? "Please wait…" : form.id ? "Update video" : "Save video"}
          </button>
          {message && <p className="admin-message">{message}</p>}
        </form>

        <section className="panel admin-list">
          <span className="eyebrow">Saved videos</span>
          <h2>{videos.length} database videos</h2>
          <div className="admin-items">
            {videos.length === 0 && <p>No database video yet. Starter videos public site par fallback ke roop mein active hain.</p>}
            {videos.map((video) => (
              <article key={video.id}>
                <div>
                  <span className={`status ${video.status}`}>{video.status}</span>
                  <strong>{video.title}</strong>
                  <small>{video.label} · Order {video.sortOrder} · {video.orientation}</small>
                </div>
                <div className="admin-item-actions">
                  <button type="button" onClick={() => edit(video)}>Edit</button>
                  <button type="button" onClick={() => remove(video.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
