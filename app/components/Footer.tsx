import Link from "next/link";
import {
  CALL_NUMBER,
  EMAIL,
  OM_GROUP_URL,
  socialLinks,
  WHATSAPP_DISPLAY,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">BudgetHomes</div>
          <p>
            Palghar property information, real flat tours, buyer education and
            guided site visits in one trusted place.
          </p>
          <div className="entity-note">
            Fair Township is marketed under OM Value Homes. OM Group of
            Companies is the corporate parent.
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/projects/om-value-homes-palghar">Fair Township</Link>
          <Link href="/videos">Flat Tours</Link>
          <Link href="/guides">Buyer Guides</Link>
          <Link href="/contact">Book Site Visit</Link>
        </div>
        <div>
          <h2>Official links</h2>
          <a href={OM_GROUP_URL} target="_blank" rel="noreferrer">
            OM Group of Companies
          </a>
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`tel:${CALL_NUMBER}`}>Call: {CALL_NUMBER}</a>
          <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>Palghar West, Maharashtra</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} BudgetHomes</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/admin">Content Admin</Link>
        </div>
      </div>
    </footer>
  );
}
