import Link from "next/link";
import { CALL_NUMBER, OM_GROUP_URL, WHATSAPP_NUMBER } from "@/lib/site-data";

const nav = [
  { href: "/projects/om-value-homes-palghar", label: "Project" },
  { href: "/videos", label: "Flat Tours" },
  { href: "/guides", label: "Buyer Guides" },
  { href: "/#palghar", label: "Palghar" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>A real-estate marketing platform by OM Group of Companies</span>
          <a href={OM_GROUP_URL} target="_blank" rel="noreferrer">
            Visit corporate website ↗
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="BudgetHomes home">
            <span className="brand-mark">B</span>
            <span>
              <strong>BudgetHomes</strong>
              <small>Verified homes. Clear decisions.</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="text-action" href={`tel:${CALL_NUMBER}`}>
              Call
            </a>
            <a
              className="button button-primary button-small"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi, I want verified details and a free site visit for Fair Township, Palghar West.",
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-menu-panel">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <a href={`tel:${CALL_NUMBER}`}>Call {CALL_NUMBER}</a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
