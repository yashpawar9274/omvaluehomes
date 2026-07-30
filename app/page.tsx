import type { Metadata } from "next";
import Link from "next/link";
import { ContentCard } from "@/app/components/ContentCard";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { LeadForm } from "@/app/components/LeadForm";
import { VideoCard, VideoPoster } from "@/app/components/VideoCard";
import { getPublishedPosts } from "@/lib/content";
import { getPublishedVideos } from "@/lib/videos";
import {
  CALL_NUMBER,
  MAP_URL,
  OM_GROUP_URL,
  project,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Flats in Palghar West, Tours & Buyer Guides",
  description:
    "Explore Fair Township by OM Value Homes in Palghar West: verified prices, carpet areas, possession status, video tours, amenities, location guides and free site visits.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "What is the starting price at Fair Township, Palghar West?",
    a: "Verified pricing starts from ₹20 Lakhs onwards for 1 BHK, ₹32 Lakhs onwards for 2 BHK and ₹42.56 Lakhs onwards for 3 BHK. Inventory and cost sheets should be reconfirmed before booking.",
  },
  {
    q: "Are ready-possession flats available?",
    a: "Ready-possession 1 BHK and 3 BHK homes are available subject to current inventory. B and C Wings also include under-construction 1 BHK, 2 BHK and 3 BHK options.",
  },
  {
    q: "How far is the project from Palghar Railway Station?",
    a: "Fair Township is approximately 2.5 km from Palghar Railway Station. Travel time depends on route and traffic.",
  },
  {
    q: "Is the project MahaRERA registered?",
    a: `Yes. The verified MahaRERA registration number is ${project.rera}.`,
  },
  {
    q: "Is home-loan assistance available?",
    a: "Yes, home-loan assistance is available. Final eligibility, interest rate and approval depend on the selected bank and buyer profile.",
  },
];

export default async function Home() {
  const [posts, videos] = await Promise.all([
    getPublishedPosts(6),
    getPublishedVideos(6),
  ]);
  const featuredVideo = videos[0];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BudgetHomes",
    url: SITE_URL,
    description:
      "Verified Palghar property information, flat tours and buyer education.",
    publisher: {
      "@type": "Organization",
      name: "OM Group of Companies",
      url: OM_GROUP_URL,
    },
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span>Verified project information</span>
                <span>Palghar West</span>
              </div>
              <h1>
                Palghar mein budget-friendly homes,{" "}
                <em>clearly explained.</em>
              </h1>
              <p className="hero-lead">
                Real flat tours, verified prices, carpet areas, buyer guides and
                free site-visit assistance—without confusing claims.
              </p>
              <div className="hero-actions">
                <Link
                  className="button button-primary"
                  href="/projects/om-value-homes-palghar"
                >
                  Explore Fair Township
                </Link>
                <Link className="button button-secondary" href="/videos">
                  Watch Flat Tours
                </Link>
              </div>
              <div className="trust-row">
                <div>
                  <strong>₹20L+</strong>
                  <span>1 BHK onwards</span>
                </div>
                <div>
                  <strong>{project.rera}</strong>
                  <span>MahaRERA</span>
                </div>
                <div>
                  <strong>~2.5 km</strong>
                  <span>Palghar Station</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-media">
                {featuredVideo && <VideoPoster video={featuredVideo} />}
                {featuredVideo && (
                  <a
                    className="play-button"
                    href={featuredVideo.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Watch ${featuredVideo.title}`}
                  >
                    ▶
                  </a>
                )}
                <span className="media-chip">Real project tour</span>
              </div>
              <div className="hero-card-content">
                <div>
                  <span className="eyebrow">Featured project</span>
                  <h2>Fair Township</h2>
                  <p>By OM Value Homes · Palghar West</p>
                </div>
                <Link href="/projects/om-value-homes-palghar">View details →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-find">
          <div className="shell">
            <div className="quick-find-inner">
              <div>
                <span className="eyebrow">Quick discovery</span>
                <strong>What are you looking for?</strong>
              </div>
              <div className="quick-links">
                <Link href="/projects/om-value-homes-palghar#homes">1 BHK</Link>
                <Link href="/projects/om-value-homes-palghar#homes">2 BHK</Link>
                <Link href="/projects/om-value-homes-palghar#homes">3 BHK</Link>
                <Link href="/projects/om-value-homes-palghar#possession">
                  Ready Possession
                </Link>
                <Link href="/guides">Buyer Guides</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">Homes at Fair Township</span>
                <h2>Clear numbers before you visit.</h2>
              </div>
              <p>
                These are the latest verified starting prices and carpet areas
                available to BudgetHomes. Final cost sheets and inventory must
                be confirmed with the sales team.
              </p>
            </div>
            <div className="config-grid">
              {project.configurations.map((item, index) => (
                <article className="config-card" key={item.type}>
                  <span className="config-index">0{index + 1}</span>
                  <h3>{item.type}</h3>
                  <strong>{item.price}</strong>
                  <dl>
                    <div>
                      <dt>Carpet area</dt>
                      <dd>{item.carpet}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>{item.ready}</dd>
                    </div>
                  </dl>
                  <Link href="/contact">Check current availability →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section video-section">
          <div className="shell">
            <div className="section-heading">
              <span className="eyebrow light">Real video tours</span>
              <h2>See the home before you plan a visit.</h2>
              <p>
                Actual project walkthrough content from the BudgetHomes channel.
              </p>
            </div>
            <div className="video-grid">
              {videos.map((video) => <VideoCard key={video.id} video={video} />)}
            </div>
            {videos.length === 0 && (
              <p className="empty-video-note">New flat tours are being prepared. Please check back soon.</p>
            )}
            <div className="center-action">
              <Link className="button button-light" href="/videos">
                View all flat tours
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="palghar">
          <div className="shell location-grid">
            <div className="location-copy">
              <span className="eyebrow">Palghar West location guide</span>
              <h2>Everyday convenience, with long-term regional growth.</h2>
              <p>
                Fair Township is at Dhansar on Old Satpati Road. Palghar Railway
                Station is approximately 2.5 km away, with schools, hospitals,
                markets and daily services nearby.
              </p>
              <div className="answer-box">
                <strong>Quick answer</strong>
                <p>
                  Buyers choose this location for practical pricing, railway
                  access and a growing infrastructure corridor. Future projects
                  should be considered as long-term context, not guaranteed
                  returns.
                </p>
              </div>
              <div className="inline-actions">
                <a
                  className="button button-secondary"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Google Map
                </a>
                <Link className="text-link" href="/content/why-buy-home-palghar-west">
                  Read Palghar guide →
                </Link>
              </div>
            </div>
            <div className="location-panel">
              {project.connectivity.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section content-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">BudgetHomes knowledge hub</span>
                <h2>Useful content for serious home buyers.</h2>
              </div>
              <Link className="text-link" href="/guides">
                Explore all guides →
              </Link>
            </div>
            <div className="content-grid">
              {posts.map((post) => (
                <ContentCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="section amenities-section">
          <div className="shell">
            <div className="section-heading">
              <span className="eyebrow">Project amenities</span>
              <h2>Designed around daily family life.</h2>
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

        <section className="section faq-section">
          <div className="shell faq-grid">
            <div>
              <span className="eyebrow">Frequently asked</span>
              <h2>Direct answers to common buyer questions.</h2>
              <p>
                Facts last verified on {project.verifiedOn}. Ask the sales team
                for the current cost sheet and available units.
              </p>
              <a className="text-link" href={`tel:${CALL_NUMBER}`}>
                Call {CALL_NUMBER} →
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="lead-section">
          <div className="shell lead-grid">
            <div>
              <span className="eyebrow light">Free guided site visit</span>
              <h2>Tell us your requirement. See the home, then decide.</h2>
              <p>
                Share your BHK preference and budget. The sales team will send
                the latest verified details and help plan your visit.
              </p>
              <div className="lead-direct">
                <a href={`tel:${CALL_NUMBER}`}>Call {CALL_NUMBER}</a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Direct WhatsApp
                </a>
              </div>
            </div>
            <div className="lead-card">
              <LeadForm source="homepage" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
