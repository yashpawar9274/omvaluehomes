import Link from "next/link";
import type { ContentPost } from "@/lib/content";

export function ContentCard({ post }: { post: ContentPost }) {
  return (
    <article className="content-card">
      <Link href={`/content/${post.slug}`} className="content-card-media">
        {post.imageUrl ? (
          // External YouTube thumbnails and uploaded Supabase images are intentionally
          // rendered with a plain img so newly uploaded domains need no rebuild.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.imageUrl} alt={post.imageAlt || post.title} />
        ) : (
          <span>{post.category}</span>
        )}
      </Link>
      <div className="content-card-body">
        <div className="card-meta">
          <span>{post.category}</span>
          <time dateTime={post.updatedAt}>
            {new Date(post.updatedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <h3>
          <Link href={`/content/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link className="card-link" href={`/content/${post.slug}`}>
          Read verified guide →
        </Link>
      </div>
    </article>
  );
}
