import type { Metadata } from "next";
import { ContentCard } from "@/app/components/ContentCard";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { getPublishedPosts } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Palghar Home Buyer Guides",
  description:
    "Practical guides about Palghar West flats, ready possession, carpet area, home loans, site visits and property verification.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage() {
  const posts = await getPublishedPosts(30);
  return (
    <>
      <Header />
      <main>
        <section className="inner-hero">
          <div className="shell">
            <span className="eyebrow light">Knowledge before booking</span>
            <h1>Home buying, explained in plain language.</h1>
            <p>
              Verified project information and practical Palghar buyer
              education—written to help you ask better questions.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="shell">
            <div className="guide-intro answer-box">
              <strong>BudgetHomes editorial standard</strong>
              <p>
                We separate verified project facts from proposed infrastructure
                and future expectations. Prices and availability are dated and
                buyers are encouraged to request current documents.
              </p>
            </div>
            <div className="content-grid">
              {posts.map((post) => (
                <ContentCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
