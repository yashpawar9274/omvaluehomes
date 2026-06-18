import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.asset.json";
import towerExterior from "@/assets/tower-exterior.jpeg.asset.json";
import entranceLobby from "@/assets/entrance-lobby.jpeg.asset.json";
import livingRoom from "@/assets/living-room.jpeg.asset.json";
import masterBedroom from "@/assets/master-bedroom.jpeg.asset.json";
import masterBedroomWardrobe from "@/assets/master-bedroom-wardrobe.jpeg.asset.json";
import kitchenPlatform from "@/assets/kitchen-platform.jpeg.asset.json";
import kitchenBalcony from "@/assets/kitchen-balcony.jpeg.asset.json";
import washroomWestern from "@/assets/washroom-western.jpeg.asset.json";
import washroomIndian from "@/assets/washroom-indian.jpeg.asset.json";
import gardenPhoto from "@/assets/garden.jpeg.asset.json";
import {
  MapPin, Phone, TreePine, ShoppingBag, Users, Baby, Activity,
  Gamepad2, Church, Train, Plane, Ship, Waves, GraduationCap, Hospital,
  CheckCircle2, ArrowRight, Building2, Sparkles, X, MessageCircle,
  Gift, Percent, Clock, Eye, Navigation, ShieldCheck, Star,
} from "lucide-react";

const PHONE = "8828300415";
const WHATSAPP = "917264005103";
const WHATSAPP_DISPLAY = "+91 72640 05103";
const MAPS_URL = "https://share.google/EB6uE6GS9beAbhgmz";
const MAPS_EMBED = "https://www.google.com/maps?q=Dhansar+Old+Satpati+Road+Palghar+West&output=embed";

const SITE_URL = "https://omvalueshome.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OM Value Homes Palghar — 1, 2 & 3 BHK from ₹19.90 Lacs" },
      { name: "description", content: "Own your dream home in Palghar! 1, 2 & 3 BHK premium apartments from ₹19.90 Lacs by OM Value Homes at Dhansar, Old Satpati Road. MahaRERA approved. Call 8828300415." },
      { name: "keywords", content: "OM Value Homes, Palghar flats, 1 BHK Palghar, 2 BHK Palghar, 3 BHK Palghar, Dhansar, MahaRERA, affordable homes Mumbai" },
      { property: "og:title", content: "OM Value Homes Palghar — Dream Homes at Dream Price" },
      { property: "og:description", content: "1, 2 & 3 BHK premium apartments starting just ₹19.90 Lacs in Palghar (W). MahaRERA P99000055618." },
      { property: "og:image", content: `${SITE_URL}${heroBanner.url}` },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "OM Value Homes Palghar — 1, 2 & 3 BHK from ₹19.90 Lacs" },
      { name: "twitter:description", content: "Premium apartments in Palghar (W) by OM Value Homes. MahaRERA approved." },
      { name: "twitter:image", content: `${SITE_URL}${heroBanner.url}` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Landing,
});

const amenities = [
  { icon: Church, label: "Temple" },
  { icon: TreePine, label: "Garden" },
  { icon: ShoppingBag, label: "Shopping Area" },
  { icon: Users, label: "Multipurpose Hall" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Activity, label: "Jogging Track" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Sparkles, label: "& Much More" },
];

const connectivity = [
  { icon: Train, label: "Mumbai–Ahmedabad Bullet Train" },
  { icon: Plane, label: "Proposed 3rd Mumbai Airport" },
  { icon: Ship, label: "Wadhwan Port" },
  { icon: Navigation, label: "Mumbai–Delhi Expressway" },
  { icon: Activity, label: "Coastal Highway" },
  { icon: Ship, label: "Proposed Sea Link" },
];

const locationPerks = [
  { label: "Virar–Palghar Railway Station", meta: "Walking distance" },
  { label: "Schools & Colleges", meta: "Within 5 mins" },
  { label: "Hospitals", meta: "Nearby" },
  { label: "Shopping & Markets", meta: "Within reach" },
  { label: "Temples", meta: "On site & nearby" },
  { label: "Beaches", meta: "Short drive" },
];

const configurations = [
  { type: "1 BHK", price: "₹19.90 Lacs*", tag: "Best Value", desc: "Compact, smartly designed homes for couples & small families." },
  { type: "2 BHK", price: "On Request", tag: "Most Popular", desc: "Spacious living with premium finishes — ideal for growing families." },
  { type: "3 BHK", price: "On Request", tag: "Luxury", desc: "Expansive layouts with master suites and elegant balconies." },
];

const offers = [
  { icon: Gift, title: "Semi-Furnished Flats", desc: "Modular kitchen included" },
  { icon: Percent, title: "0% Stamp Duty", desc: "Limited period offer" },
  { icon: Clock, title: "Instant Possession", desc: "Move in within 30 days" },
  { icon: Sparkles, title: "Book at ₹11,000", desc: "Token amount only" },
];

const gallery = [
  { src: towerExterior.url, label: "Tower Exterior" },
  { src: entranceLobby.url, label: "Entrance Lobby" },
  { src: livingRoom.url, label: "Living Room with Designer Ceilings" },
  { src: masterBedroom.url, label: "Master Bedroom" },
  { src: masterBedroomWardrobe.url, label: "Master Bedroom + Wardrobe" },
  { src: kitchenPlatform.url, label: "Modular Kitchen — Both-side Platform" },
  { src: kitchenBalcony.url, label: "Kitchen with Dry Balcony" },
  { src: washroomWestern.url, label: "Washroom — Western" },
  { src: washroomIndian.url, label: "Washroom — Indian" },
  { src: gardenPhoto.url, label: "Garden — Main Road Touch Project" },
];

// ---------- shared form ----------
function EnquiryForm({ compact = false, onDone }: { compact?: boolean; onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="mt-4 text-xl font-display font-bold text-navy">Thank You!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Our team will reach out within 24 hours.</p>
      </div>
    );
  }
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const f = e.currentTarget as HTMLFormElement;
        const name = (f.elements.namedItem("name") as HTMLInputElement).value;
        const phone = (f.elements.namedItem("phone") as HTMLInputElement).value;
        const config = (f.elements.namedItem("config") as HTMLSelectElement).value;
        const msg = `Hi, I'm interested in OM Value Homes.%0AName: ${name}%0APhone: ${phone}%0AConfig: ${config}`;
        window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
        setSent(true);
        setTimeout(() => onDone?.(), 1200);
      }}
    >
      <div className="relative">
        <Users className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input name="name" required placeholder="Full Name *"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
      </div>
      <div className="relative">
        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input name="phone" type="tel" required placeholder="Phone Number * (10 digits)"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card" />
      </div>
      <div className="relative">
        <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <select name="config" defaultValue=""
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-secondary/40 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card">
          <option value="" disabled>Select Configuration</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
        </select>
      </div>
      {!compact && (
        <p className="text-[11px] text-muted-foreground leading-snug">
          By submitting, you agree to be contacted by Om Value Homes and accept the Terms of Use & Privacy Policy.
        </p>
      )}
      <button type="submit"
        className="w-full py-3.5 rounded-xl text-white font-semibold text-sm shadow-[var(--shadow-gold)] transition hover:brightness-110"
        style={{ background: "var(--gradient-gold)" }}>
        Submit Enquiry →
      </button>
      <div className="text-center text-[11px] text-muted-foreground pt-1">
        Limited Inventory · MahaRERA registered project
      </div>
    </form>
  );
}

// ---------- popup ----------
function EnquiryPopup({ open, onClose, title, subtitle }: { open: boolean; onClose: () => void; title: string; subtitle: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted" aria-label="Close">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="text-center mb-5">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-display font-bold text-navy">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <EnquiryForm compact onDone={onClose} />
      </div>
    </div>
  );
}

function useLiveVisitors() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const seed = () => {
      const h = new Date().getHours();
      const base = 18 + Math.floor(Math.sin((h / 24) * Math.PI) * 14);
      return Math.max(8, base + Math.floor(Math.random() * 8));
    };
    setCount(seed());
    const t = setInterval(() => {
      setCount((c) => Math.max(6, Math.min(48, c + (Math.floor(Math.random() * 5) - 2))));
    }, 4000);
    return () => clearInterval(t);
  }, []);
  return count;
}

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow?: string; title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {eyebrow && (
          <div className="text-center mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">{eyebrow}</span>
          </div>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy text-center max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Landing() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [followUpOpen, setFollowUpOpen] = useState(false);
  const visitors = useLiveVisitors();

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem("ft_followup_shown")) return;
      const t = setTimeout(() => {
        setFollowUpOpen(true);
        localStorage.setItem("ft_followup_shown", "1");
      }, 8000);
      return () => clearTimeout(t);
    } catch { /* ignore */ }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-bold text-navy">Om Value Homes</span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-primary font-semibold">OM VALUE HOMES</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={`tel:${PHONE}`} className="hidden sm:flex items-center gap-2 text-sm text-navy font-medium hover:text-primary">
              <Phone className="w-4 h-4 text-primary" /> +91 {PHONE}
            </a>
            <button onClick={() => setPopupOpen(true)}
              className="px-4 sm:px-5 py-2 rounded-lg text-white text-sm font-semibold shadow-sm hover:brightness-110 transition"
              style={{ background: "var(--gradient-gold)" }}>
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 sm:pt-28 pb-12 bg-[var(--gradient-hero)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Hero image card */}
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] min-h-[460px] lg:min-h-[600px]">
            <img src={heroBanner.url} alt="OM Value Homes Palghar" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
              <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95]">
                <span className="block text-[oklch(0.82_0.14_80)]">FAIR</span>
                <span className="block">TOWNSHIP</span>
              </h1>
              <p className="mt-3 text-white/90 text-base sm:text-lg max-w-md">
                Own your dream home in Palghar. <br />Move-in ready 1, 2 & 3 BHK luxurious apartments.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/95 text-white text-[11px] sm:text-xs font-semibold w-fit">
                <Sparkles className="w-3.5 h-3.5" /> MOVE-IN READY · 1, 2 & 3 BHK
              </div>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-navy font-bold text-sm sm:text-base w-fit shadow-lg">
                STARTING AT JUST ₹19.90 LACS*
              </div>

              {/* stats badges */}
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 max-w-md">
                {[
                  { v: "1, 2 & 3", l: "BHK Options" },
                  { v: "MahaRERA", l: "Approved" },
                  { v: "OM VALUE", l: "Homes" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white/15 backdrop-blur border border-white/20 px-3 py-2.5 text-white">
                    <div className="text-sm sm:text-base font-bold font-display leading-tight">{s.v}</div>
                    <div className="text-[10px] sm:text-[11px] text-white/80 leading-tight mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {visitors} people viewing this project now
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl bg-card shadow-[var(--shadow-elegant)] p-6 sm:p-8 lg:p-10 border border-border">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy">Tell Us About You</h2>
              <p className="text-sm text-muted-foreground mt-1">Quick basics — takes 20 seconds.</p>
            </div>
            <EnquiryForm />
          </div>
        </div>

        {/* Quick action chips */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 flex flex-wrap gap-2 justify-center">
          {[
            { icon: Phone, label: `Call ${PHONE}`, href: `tel:${PHONE}` },
            { icon: MessageCircle, label: "WhatsApp Us", href: `https://wa.me/${WHATSAPP}` },
            { icon: MapPin, label: "Get Directions", href: MAPS_URL },
          ].map((a) => (
            <a key={a.label} href={a.href} target={a.href.startsWith("http") ? "_blank" : undefined}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-navy hover:border-primary hover:text-primary transition">
              <a.icon className="w-4 h-4" /> {a.label}
            </a>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <Section eyebrow="Overview" title="An Escape from the Ordinary.">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover <strong className="text-navy">OM Value Homes</strong> at Dhansar, Old Satpati Road, Palghar (W) — a thoughtfully crafted residential community. Premium 1, 2 & 3 BHK apartments designed for modern families, surrounded by gardens, temples and lifestyle amenities.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {["MahaRERA Approved", "Modern Architecture", "Lush Green Township", "Excellent Connectivity"].map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm text-navy">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <div className="text-xs text-muted-foreground">MahaRERA No.</div>
              <div className="text-sm font-mono font-semibold text-navy">P99000055618</div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
            <img src={towerExterior.url} alt="OM Value Homes tower" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur p-4 flex items-center gap-4">
              <div>
                <div className="text-2xl font-display font-bold text-primary">2024</div>
                <div className="text-xs text-muted-foreground">Launched</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-display font-bold text-primary">Move-in</div>
                <div className="text-xs text-muted-foreground">Ready in 30 days</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONFIGURATIONS */}
      <Section id="configs" eyebrow="Configurations" title="Find Your Perfect Home" className="bg-secondary/40">
        <p className="text-center text-muted-foreground -mt-6 mb-10">Thoughtfully designed residences for every family.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {configurations.map((c) => (
            <div key={c.type} className="group bg-card rounded-2xl border border-border p-7 shadow-sm hover:shadow-[var(--shadow-elegant)] transition">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">{c.tag}</div>
              <h3 className="mt-2 text-3xl font-display font-bold text-navy">{c.type}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Starting</div>
                  <div className="text-xl font-bold text-navy">{c.price}</div>
                </div>
                <button onClick={() => setPopupOpen(true)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Get Best Price <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Gallery" title="A Glimpse of Life at OM Value Homes">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <figure key={i} className={`group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] ${i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-square" : ""}`}>
              <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white text-xs sm:text-sm font-medium">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* AMENITIES */}
      <Section id="amenities" eyebrow="Amenities" title="Live Every Day Like a Holiday" className="bg-secondary/40">
        <p className="text-center text-muted-foreground -mt-6 mb-10">Resort-grade amenities curated for the entire family.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {amenities.map((a) => (
            <div key={a.label} className="bg-card rounded-2xl border border-border p-5 text-center hover:border-primary hover:-translate-y-1 transition">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mt-3 text-sm font-semibold text-navy">{a.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* OFFERS */}
      <Section eyebrow="Limited Time" title="Exclusive Offers for Early Bookings">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offers.map((o) => (
            <div key={o.title} className="relative rounded-2xl p-6 text-white overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
              <o.icon className="w-8 h-8 opacity-90" />
              <div className="mt-3 font-bold text-lg leading-tight">{o.title}</div>
              <div className="text-sm text-white/85 mt-1">{o.desc}</div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </Section>

      {/* LOCATION */}
      <Section id="location" eyebrow="Location & Connectivity" title="At the Heart of 4th Mumbai, Palghar (W)" className="bg-secondary/40">
        <p className="text-center text-muted-foreground -mt-6 mb-10 max-w-2xl mx-auto">
          Everything you need — schools, markets, transit and the beach — moments from your doorstep.
        </p>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            {locationPerks.map((p) => (
              <div key={p.label} className="flex items-center justify-between gap-4 bg-card rounded-xl border border-border px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-navy">{p.label}</span>
                </div>
                <span className="text-xs text-muted-foreground">{p.meta}</span>
              </div>
            ))}
            <div className="pt-3">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Future-Ready Connectivity</div>
              <div className="grid sm:grid-cols-2 gap-2">
                {connectivity.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 text-sm text-navy bg-card rounded-lg border border-border px-3 py-2.5">
                    <c.icon className="w-4 h-4 text-primary shrink-0" /> {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
            <iframe
              src={MAPS_EMBED}
              className="w-full h-[420px] lg:h-[560px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OM Value Homes Location Map"
            />
            <a href={MAPS_URL} target="_blank" rel="noreferrer"
              className="block text-center py-3.5 text-sm font-semibold text-white hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}>
              <Navigation className="inline w-4 h-4 mr-1.5" /> Open in Google Maps
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">Site: S.No. 232/5/1, Vill. Dhansar, Old Satpati Road, Palghar (W)</p>
      </Section>

      {/* DEVELOPER */}
      <Section eyebrow="About the Developer" title="Built on Trust. Crafted for Families.">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { v: "OM VALUE", l: "Homes Group" },
            { v: "100%", l: "MahaRERA Compliant" },
            { v: "4.5★", l: "Buyer Rated" },
          ].map((s) => (
            <div key={s.l} className="text-center bg-card rounded-2xl border border-border p-8">
              <div className="text-3xl sm:text-4xl font-display font-bold text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight">Ready to Find Your New Home?</h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Share your details and our relationship manager will reach out with floor plans and the latest pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => setPopupOpen(true)}
              className="px-7 py-3.5 rounded-xl text-white font-semibold shadow-lg hover:brightness-110 transition"
              style={{ background: "var(--gradient-gold)" }}>
              Enquire Now
            </button>
            <a href={`tel:${PHONE}`} className="px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
              className="px-7 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold hover:brightness-110 transition inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-8 text-xs text-white/60">
            <MapPin className="inline w-3.5 h-3.5 mr-1" />
            Dhansar, Old Satpati Road, Palghar (West) 401404 · {WHATSAPP_DISPLAY}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="font-display font-semibold text-navy text-sm">OM Value Homes</div>
          <div>From ₹19.90 Lacs* · 1, 2 & 3 BHK · MahaRERA P99000055618</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition">
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Live visitor pill */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-border shadow-lg text-xs">
        <Eye className="w-3.5 h-3.5 text-primary" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-navy font-semibold">{visitors}</span>
        <span className="text-muted-foreground">viewing now</span>
      </div>

      <EnquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} title="Quick Enquiry" subtitle="We will call you back in 10 minutes" />
      <EnquiryPopup open={followUpOpen} onClose={() => setFollowUpOpen(false)} title="Wait — Don't Miss Out!" subtitle="Get floor plans & best price from OM Value Homes" />
    </div>
  );
}
