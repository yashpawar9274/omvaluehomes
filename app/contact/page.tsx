import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { LeadForm } from "@/app/components/LeadForm";
import {
  CALL_NUMBER,
  EMAIL,
  MAP_EMBED,
  MAP_URL,
  project,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book a Free Site Visit | Fair Township Palghar West",
  description:
    "Book a free guided site visit for Fair Township, Palghar West. Get verified availability, prices, carpet areas and directions on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="inner-hero">
          <div className="shell">
            <span className="eyebrow light">Free site visit assistance</span>
            <h1>See the home first. Decide with clarity.</h1>
            <p>
              Tell us your preferred BHK, budget and visit date. We will help
              you verify the latest available options at Fair Township.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="shell contact-grid">
            <div className="panel contact-panel">
              <span className="eyebrow">Enquiry form</span>
              <h2>Plan your site visit</h2>
              <LeadForm source="contact-page" />
            </div>
            <div className="contact-details">
              <span className="eyebrow">Direct contact</span>
              <h2>BudgetHomes sales assistance</h2>
              <p>
                Fair Township by OM Value Homes, {project.location}.
              </p>
              <dl>
                <div>
                  <dt>Call</dt>
                  <dd>
                    <a href={`tel:${CALL_NUMBER}`}>{CALL_NUMBER}</a>
                  </dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </dd>
                </div>
                <div>
                  <dt>Project RERA</dt>
                  <dd>{project.rera}</dd>
                </div>
              </dl>
              <div className="map-frame contact-map">
                <iframe
                  src={MAP_EMBED}
                  title="Fair Township location"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <a href={MAP_URL} target="_blank" rel="noreferrer">
                  Open Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
