import type { Metadata } from "next";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { project } from "@/lib/site-data";

export const metadata: Metadata = { title: "Project & Marketing Disclaimer" };

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="shell legal-content">
          <span className="eyebrow">Transparency</span>
          <h1>Project & Marketing Disclaimer</h1>
          <p>
            BudgetHomes is a marketing and property-information platform. Fair
            Township is marketed under OM Value Homes; OM Group of Companies is
            the corporate parent. MahaRERA number: {project.rera}.
          </p>
          <h2>Prices and availability</h2>
          <p>
            Prices shown are verified starting values available at the stated
            review date. Inventory, offers, charges and finance terms can
            change. The latest official cost sheet and agreement documents take
            precedence over website content.
          </p>
          <h2>Images and videos</h2>
          <p>
            Project videos are provided for buyer understanding. Interior
            furniture and décor shown in marketing visuals may be illustrative
            and are not included unless specifically mentioned in writing.
          </p>
          <h2>Future infrastructure</h2>
          <p>
            Proposed infrastructure is presented as regional context. Timelines,
            routes and economic outcomes are controlled by relevant authorities
            and should not be treated as guaranteed investment returns.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
