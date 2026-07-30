import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { socialLinks } from "@/lib/site-data";
import { getPublishedVideos } from "@/lib/videos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fair Township Flat Tours | 1, 2 & 3 BHK Videos",
  description:
    "Watch real 1 BHK, 2 BHK and 3 BHK flat tours for Fair Township by OM Value Homes in Palghar West.",
  alternates: { canonical: "/videos" },
};

export default async function VideosPage() {
  const videos = await getPublishedVideos(24);
  return (
    <>
      <Header />
      <main>
        <section className="inner-hero">
          <div className="shell">
            <span className="eyebrow light">BudgetHomes video library</span>
            <h1>Actual flat tours. No guesswork.</h1>
            <p>
              Watch Fair Township homes before you plan a physical site visit.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="shell">
            <div className="video-library">
              {videos.map((video) => (
                <article key={video.id}>
                  <VideoPlayer video={video} />
                  <span className="eyebrow">{video.label} tour</span>
                  <h2>{video.title}</h2>
                  <p>{video.description || "Fair Township by OM Value Homes, Dhansar, Palghar West."}</p>
                </article>
              ))}
            </div>
            {videos.length === 0 && (
              <div className="empty-video-note dark">
                <strong>New videos coming soon.</strong>
                <p>Latest published flat tour ke liye YouTube channel visit karein.</p>
              </div>
            )}
            <div className="channel-cta">
              <div>
                <h2>More Palghar property videos</h2>
                <p>Subscribe for flat tours, buyer FAQs and project updates.</p>
              </div>
              <a
                className="button button-primary"
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
              >
                Visit YouTube Channel
              </a>
            </div>
            <div className="center-action">
              <Link className="text-link" href="/contact">
                Ready to inspect the flat? Book a site visit →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
