import Link from "next/link";
import { AdminContentManager } from "@/app/components/AdminContentManager";
import { AdminVideoManager } from "@/app/components/AdminVideoManager";
import { requireAdmin } from "@/lib/admin-auth";
import { getAllPosts } from "@/lib/content";
import { getAllVideos } from "@/lib/videos";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { user } = await requireAdmin();
  const [posts, videos] = await Promise.all([getAllPosts(), getAllVideos()]);

  return (
    <main className="admin-page">
      <div className="shell">
        <header className="admin-header">
          <div>
            <span className="eyebrow">BudgetHomes CMS</span>
            <h1>Marketing Content Admin</h1>
            <p>Articles, updates, videos, SEO metadata and cover images manage karein.</p>
          </div>
          <div className="admin-user">
            <span>Signed in as {user.displayName}</span>
            <Link href="/">View website</Link>
            <form action="/auth/signout" method="post">
              <button type="submit">Sign out</button>
            </form>
          </div>
        </header>
        <nav className="admin-nav" aria-label="Admin sections">
          <a href="#video-editor">Manage videos</a>
          <a href="#content-editor">Manage articles</a>
          <Link href="/videos">View video page</Link>
        </nav>
        <AdminVideoManager initialVideos={videos} />
        <section id="content-editor" className="admin-section">
          <div className="admin-section-heading">
            <div>
              <span className="eyebrow">Marketing library</span>
              <h2>Articles & SEO content</h2>
            </div>
          </div>
        <AdminContentManager initialPosts={posts} />
        </section>
      </div>
    </main>
  );
}
