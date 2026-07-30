import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { LeadForm } from "@/app/components/LeadForm";
import { VideoCard, VideoPoster } from "@/app/components/VideoCard";
import { getPublishedVideos } from "@/lib/videos";
import {
  MAP_EMBED,
  MAP_URL,
  OM_GROUP_URL,
  project,
  SITE_URL,
} from "@/lib/site-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Fair Township Palghar West | Price, Carpet Area & Tours",
  description:
    "Fair Township by OM Value Homes in Palghar West: 1, 2 and 3 BHK verified prices, carpet areas, possession status, amenities, RERA number, map and video tours.",
  alternates: { canonical: "/projects/om-value-homes-palghar" },
};

export default async function ProjectPage() {
  const videos = await getPublishedVideos(8);
  const featuredVideo = videos[0];
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Fair Township by OM Value Homes",
    url: `${SITE_URL}/projects/om-value-homes-palghar`,
    description:
      "Residential project in Dhansar, Palghar West with ready-possession and under-construction 1, 2 and 3 BHK homes.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhansar, Old Satpati Road",
      addressLocality: "Palghar West",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    amenityFeature: project.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    isPartOf: {
      "@type": "Organization",
      name: "OM Group of Companies",
      url: OM_GROUP_URL,
    },
  };

  return (
    <>
      <Header />
      <main>
        <section className="project-hero">
          <div className="shell project-hero-grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <span>Fair Township</span>
              </nav>
              <span className="eyebrow light">Featured residential project</span>
              <h1>Fair Township, Palghar West</h1>
              <p className="project-subtitle">
                By OM Value Homes · Corporate parent: OM Group of Companies
              </p>
              <p className="project-intro">
                Ready-possession and under-construction homes with practical
                layouts, family amenities and guided site visits in Dhansar,
                Palghar West.
              </p>
              <div className="project-badges">
                <span>MahaRERA {project.rera}</span>
                <span>1, 2 & 3 BHK</span>
                <span>Home loan assistance</span>
              </div>
              <div className="hero-actions">
                <Link className="button button-primary" href="/contact">
                  Book Free Site Visit
                </Link>
                <a
                  className="button button-dark-outline"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="project-hero-media">
              {featuredVideo && <VideoPoster video={featuredVideo} />}
              {featuredVideo ? (
                <a href={featuredVideo.videoUrl} target="_blank" rel="noreferrer">
                  <span>▶</span> Watch actual {featuredVideo.label} tour
                </a>
              ) : (
                <Link href="/contact"><span>→</span> Book an actual flat visit</Link>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="homes">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">Configurations & price</span>
                <h2>Choose the home that fits your family.</h2>
              </div>
              <div className="verification-card">
                <strong>Last verified</strong>
                <span>{project.verifiedOn}</span>
                <p>Prices are starting values; request the current cost sheet.</p>
              </div>
            </div>
            <div className="project-table-wrap">
              <table className="project-table">
                <thead>
                  <tr>
                    <th>Configuration</th>
                    <th>Starting price</th>
                    <th>Verified carpet area</th>
                    <th>Possession status</th>
                  </tr>
                </thead>
                <tbody>
                  {project.configurations.map((item) => (
                    <tr key={item.type}>
                      <td>
                        <strong>{item.type}</strong>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.carpet}</td>
                      <td>{item.ready}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-note">
              Stamp duty, registration, floor-rise, maintenance and other
              charges may apply. Confirm the official cost sheet before paying
              any amount.
            </p>
          </div>
        </section>

        <section className="section status-section" id="possession">
          <div className="shell status-grid">
            <article>
              <span className="status-number">01</span>
              <span className="eyebrow">Ready possession</span>
              <h2>Inspect the finished home before deciding.</h2>
              <p>
                Ready-possession 1 BHK and 3 BHK inventory is available subject
                to the latest unit list. Schedule a guided visit to check the
                actual flat, common areas and surroundings.
              </p>
            </article>
            <article>
              <span className="status-number">02</span>
              <span className="eyebrow">Under construction</span>
              <h2>More configuration choices in B & C Wings.</h2>
              <p>
                Under-construction 1 BHK, 2 BHK and 3 BHK options are available.
                Review the approved plan, payment schedule and agreement
                timeline with the sales team.
              </p>
            </article>
          </div>
        </section>

        <section className="section amenities-section">
          <div className="shell">
            <div className="section-heading">
              <span className="eyebrow">Amenities</span>
              <h2>What your family gets at Fair Township.</h2>
            </div>
            <div className="amenity-grid">
              {project.amenities.map((amenity, index) => (
                <div key={amenity}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{amenity}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <span className="eyebrow">Video walkthroughs</span>
              <h2>See the rooms, layout and finish.</h2>
            </div>
            <div className="video-grid project-videos">
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} context="Actual walkthrough" />
              ))}
            </div>
            {videos.length === 0 && (
              <p className="empty-video-note dark">Published video abhi available nahi hai.</p>
            )}
          </div>
        </section>

        <section className="section map-section">
          <div className="shell map-grid">
            <div>
              <span className="eyebrow">Location</span>
              <h2>Dhansar, Old Satpati Road, Palghar West.</h2>
              <p>{project.stationDistance}.</p>
              <div className="location-panel compact-panel">
                {project.connectivity.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="map-frame">
              <iframe
                src={MAP_EMBED}
                title="Fair Township OM Value Homes location map"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a href={MAP_URL} target="_blank" rel="noreferrer">
                Open full map ↗
              </a>
            </div>
          </div>
        </section>

        <section className="lead-section">
          <div className="shell lead-grid">
            <div>
              <span className="eyebrow light">Site visit assistance</span>
              <h2>Get the latest availability before you travel.</h2>
              <p>
                Share your preferred BHK and budget. We will help you inspect the
                right flat and obtain the current cost sheet.
              </p>
            </div>
            <div className="lead-card">
              <LeadForm source="project-page" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </>
  );
}
