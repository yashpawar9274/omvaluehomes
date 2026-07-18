import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import towerExterior from "@/assets/tower-exterior.jpeg.asset.json";
import livingRoom from "@/assets/living-room.jpeg.asset.json";
import masterBedroom from "@/assets/master-bedroom.jpeg.asset.json";
import {
  Phone, ArrowLeft, CheckCircle2, Users, Building2, MapPin,
  Calendar, Home, Play, Sparkles, ShieldCheck, IndianRupee,
} from "lucide-react";

const PHONE = "8828300415";
const WHATSAPP = "917264005103";
const SITE_URL = "https://omvalueshome.lovable.app";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Flat — 1 BHK & 3 BHK Tour | OM Value Homes Palghar" },
      { name: "description", content: "Book your 1 BHK flat at just ₹19.90 Lacs* at OM Value Homes Palghar. Watch 1 BHK & 3 BHK walkthrough videos and reserve your home online." },
      { property: "og:title", content: "Book Your Flat — OM Value Homes Palghar" },
      { property: "og:description", content: "1 BHK from ₹19.90 Lacs*. Watch walkthroughs & book online. MahaRERA P99000055618." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/booking` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/booking` }],
  }),
  component: BookingPage,
});

const configOptions = [
  {
    id: "1bhk",
    type: "1 BHK",
    price: "₹19.90 Lacs*",
    emi: "Starting ₹15,000/mo*",
    tag: "Ready Possession",
    poster: livingRoom.url,
    video: "", // add mp4 URL when available
    features: ["Carpet-smart layout", "Modular kitchen", "Designer ceiling", "Attached balcony"],
  },
  {
    id: "3bhk",
    type: "3 BHK",
    price: "On Request",
    emi: "Flexible bank finance",
    tag: "Luxury Home",
    poster: masterBedroom.url,
    video: "",
    features: ["Spacious master suite", "Both-side platform kitchen", "3 wardrobes", "2 balconies"],
  },
];

function VideoCard({ item }: { item: typeof configOptions[number] }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-video bg-navy">
        {playing && item.video ? (
          <video src={item.video} controls autoPlay playsInline className="w-full h-full object-cover" />
        ) : (
          <>
            <img src={item.poster} alt={`${item.type} walkthrough`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
            <button
              onClick={() => item.video ? setPlaying(true) : window.open(`https://wa.me/${WHATSAPP}?text=Please%20share%20the%20${item.type}%20walkthrough%20video`, "_blank")}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
            >
              <span className="w-16 h-16 rounded-full bg-white/95 text-primary grid place-items-center shadow-2xl hover:scale-110 transition">
                <Play className="w-7 h-7 ml-1" fill="currentColor" />
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold">
                {item.video ? "Play walkthrough" : "Request video on WhatsApp"}
              </span>
            </button>
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wide">
              {item.tag}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy">{item.type} Apartment</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Palghar (W) · MahaRERA registered</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-navy flex items-center gap-0.5"><IndianRupee className="w-4 h-4" />{item.price.replace("₹","")}</div>
            <div className="text-[11px] text-muted-foreground">{item.emi}</div>
          </div>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {item.features.map(f => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-navy">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BookingPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const config = get("config");
    const visitDate = get("visitDate");
    const budget = get("budget");
    const notes = get("notes");

    const lines = [
      "*New Booking Request — OM Value Homes*",
      "",
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      email ? `✉️ Email: ${email}` : "",
      `🏠 Configuration: ${config}`,
      `💰 Budget: ${budget || "Not specified"}`,
      `📅 Preferred Visit: ${visitDate || "Flexible"}`,
      notes ? `📝 Notes: ${notes}` : "",
      "",
      "Please confirm my booking and site visit slot.",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-primary">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={`tel:${PHONE}`} className="hidden sm:flex items-center gap-2 text-sm text-navy font-medium hover:text-primary">
              <Phone className="w-4 h-4 text-primary" /> +91 {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-lg text-white text-sm font-semibold hover:brightness-110 transition"
              style={{ background: "var(--gradient-gold)" }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-10 pb-10 sm:pt-14 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src={towerExterior.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Book Your Dream Home
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-bold leading-tight max-w-3xl">
            Watch. Choose. Book Your Flat Online.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/85">
            Take a virtual walkthrough of 1 BHK & 3 BHK homes at OM Value Homes, then reserve your flat instantly on WhatsApp — no waiting, no paperwork upfront.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-primary" /> MahaRERA P99000055618
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-primary" /> Dhansar, Palghar (W)
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white text-xs sm:text-sm font-semibold">
              <IndianRupee className="w-4 h-4" /> 1 BHK from ₹19.90 Lacs*
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Property Walkthrough</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-navy">1 BHK & 3 BHK Video Tour</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              See every room, corner and finish before you visit. Tap play to watch each walkthrough.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {configOptions.map(c => <VideoCard key={c.id} item={c} />)}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--gradient-hero)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">Reserve Your Home</div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-navy">Book Your Flat in 60 Seconds</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill your details — we'll send them to our sales team on WhatsApp and confirm your booking within an hour.
            </p>
          </div>

          {sent ? (
            <div className="bg-card rounded-2xl p-8 sm:p-10 text-center shadow-[var(--shadow-elegant)] border border-border">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">Booking Sent on WhatsApp!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team will confirm your booking & site visit slot within 60 minutes.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={`tel:${PHONE}`} className="px-5 py-2.5 rounded-lg border border-border text-navy text-sm font-semibold hover:bg-muted transition inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Sales Team
                </a>
                <Link to="/" className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:brightness-110 transition inline-flex items-center gap-2"
                  style={{ background: "var(--gradient-gold)" }}>
                  <Home className="w-4 h-4" /> Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-elegant)] border border-border space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-navy flex items-center gap-1.5 mb-1.5"><Users className="w-3.5 h-3.5" /> Full Name *</span>
                  <input name="name" required placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-navy flex items-center gap-1.5 mb-1.5"><Phone className="w-3.5 h-3.5" /> Phone *</span>
                  <input name="phone" type="tel" required pattern="[0-9+\s-]{10,15}" placeholder="10-digit mobile"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold text-navy mb-1.5 block">Email (optional)</span>
                <input name="email" type="email" placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-navy flex items-center gap-1.5 mb-1.5"><Building2 className="w-3.5 h-3.5" /> Configuration *</span>
                  <select name="config" required defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card">
                    <option value="" disabled>Select flat type</option>
                    <option>1 BHK — ₹19.90 Lacs*</option>
                    <option>2 BHK — On Request</option>
                    <option>3 BHK — On Request</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-navy flex items-center gap-1.5 mb-1.5"><IndianRupee className="w-3.5 h-3.5" /> Budget</span>
                  <select name="budget" defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card">
                    <option value="">Select budget</option>
                    <option>Under ₹25 Lacs</option>
                    <option>₹25 – 40 Lacs</option>
                    <option>₹40 – 60 Lacs</option>
                    <option>Above ₹60 Lacs</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold text-navy flex items-center gap-1.5 mb-1.5"><Calendar className="w-3.5 h-3.5" /> Preferred Site Visit Date</span>
                <input name="visitDate" type="date"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-navy mb-1.5 block">Notes / Requirements</span>
                <textarea name="notes" rows={3} placeholder="Anything else you'd like us to know?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card resize-none" />
              </label>

              <button type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-[var(--shadow-gold)] hover:brightness-110 transition"
                style={{ background: "var(--gradient-gold)" }}>
                Confirm Booking on WhatsApp →
              </button>
              <p className="text-[11px] text-center text-muted-foreground">
                Your details will be sent directly to our sales team on WhatsApp. No spam, no third-party sharing.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 sm:px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} OM Value Homes · MahaRERA P99000055618</div>
          <Link to="/" className="text-navy font-semibold hover:text-primary">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
