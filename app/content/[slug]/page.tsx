import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { getPostBySlug } from "@/lib/content";
import { project, SITE_URL } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/content/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${SITE_URL}/content/${post.slug}`,
      images: post.imageUrl
        ? [{ url: post.imageUrl, alt: post.imageAlt || post.title }]
        : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl || undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "BudgetHomes",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/content/${post.slug}`,
    about: [
      { "@type": "Place", name: "Palghar West" },
      { "@type": "Thing", name: "Fair Township by OM Value Homes" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <article className="article-page">
          <header className="article-header">
            <div className="shell article-header-inner">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/guides">Guides</Link>
                <span>/</span>
                <span>{post.category}</span>
              </nav>
              <span className="eyebrow light">{post.category}</span>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
              <div className="article-byline">
                <span>By {post.author}</span>
                <span>Updated {new Date(post.updatedAt).toLocaleDateString("en-IN")}</span>
                <span>{post.language}</span>
              </div>
            </div>
          </header>
          <div className="shell article-layout">
            <div className="article-content">
              {post.imageUrl && (
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.imageUrl} alt={post.imageAlt || post.title} />
                  {post.imageAlt && <figcaption>{post.imageAlt}</figcaption>}
                </figure>
              )}
              <div className="answer-box article-answer">
                <strong>Answer first</strong>
                <p>{post.excerpt}</p>
              </div>
              {paragraphs.map((paragraph, index) => (
                <p key={`${post.slug}-${index}`}>{paragraph}</p>
              ))}
              {post.videoUrl && (
                <a
                  className="button button-secondary"
                  href={post.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch related video
                </a>
              )}
              <div className="article-verification">
                <strong>Verification note</strong>
                <p>
                  Project facts on this page were last reviewed on{" "}
                  {project.verifiedOn}. Prices, availability and finance terms
                  can change; request the latest official cost sheet before
                  booking.
                </p>
              </div>
            </div>
            <aside className="article-aside">
              <div className="panel">
                <span className="eyebrow">Fair Township</span>
                <h2>Need the latest verified details?</h2>
                <p>
                  Compare the current unit list, carpet area and possession
                  status before planning your visit.
                </p>
                <Link
                  className="button button-primary"
                  href="/projects/om-value-homes-palghar"
                >
                  View Project
                </Link>
                <Link className="text-link" href="/contact">
                  Book free site visit →
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
