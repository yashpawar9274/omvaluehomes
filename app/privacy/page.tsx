import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { EMAIL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="shell legal-content">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>
            BudgetHomes collects enquiry information such as name, phone number,
            home preference, budget and preferred visit date only to provide
            property assistance, send requested information and coordinate site
            visits.
          </p>
          <h2>How information is used</h2>
          <p>
            Information may be used by the authorized BudgetHomes/OM Value Homes
            sales team for follow-up. We do not sell enquiry data. Website
            analytics may collect standard device, traffic-source and page-visit
            information to improve marketing performance.
          </p>
          <h2>Your choices</h2>
          <p>
            You may ask us to stop follow-up or request correction/deletion of
            your enquiry information by emailing {EMAIL}.
          </p>
          <p>Last updated: 30 July 2026.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
