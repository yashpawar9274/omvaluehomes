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
  MapPin, Phone, Home, TreePine, ShoppingBag, Users, Baby, Activity,
  Gamepad2, Church, Train, Plane, Ship, Waves, GraduationCap, Hospital,
  CheckCircle2, ArrowRight, Building2, IndianRupee, Calendar, Sparkles,
  X, MessageCircle, Gift, Percent, Clock, Eye, Navigation,
} from "lucide-react";

const PHONE = "8828300415";
const WHATSAPP = "917264005103";
const WHATSAPP_DISPLAY = "+91 72640 05103";
const MAPS_URL = "https://share.google/EB6uE6GS9beAbhgmz";
const MAPS_EMBED = "https://www.google.com/maps?q=Dhansar+Old+Satpati+Road+Palghar+West&output=embed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fair Township Palghar — 1, 2 & 3 BHK from ₹19.90 Lacs | Om Value Homes" },
      { name: "description", content: "Own your dream home in Palghar! 1, 2 & 3 BHK premium apartments from ₹19.90 Lacs at Dhansar, Old Satpati Road. Modern amenities, MahaRERA approved. Call 8828300415." },
      { property: "og:title", content: "Fair Township Palghar — Dream Homes at Dream Price" },
      { property: "og:description", content: "1, 2 & 3 BHK premium apartments starting just ₹19.90 Lacs in Palghar (W). Modern architecture, prime location, future-ready connectivity." },
      { property: "og:image", content: heroBanner.url },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
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

const locationPerks = [
  { icon: Train, label: "Railway Station" },
  { icon: Hospital, label: "Hospitals" },
  { icon: GraduationCap, label: "Schools & Colleges" },
  { icon: Waves, label: "Beaches" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Church, label: "Temples" },
];

const connectivity = [
  { icon: Train, label: "Mumbai–Ahmedabad Bullet Train" },
  { icon: Plane, label: "Proposed 3rd Mumbai Airport" },
  { icon: Ship, label: "Wadhwan Port" },
  { icon: Navigation, label: "Mumbai–Delhi Expressway" },
  { icon: Activity, label: "Coastal Highway" },
  { icon: Ship, label: "Proposed Sea Link" },
];

const configurations = [
  { type: "1 BHK", price: "19.90", tag: "Best Value", desc: "Compact, smartly designed homes perfect for couples & small families." },
  { type: "2 BHK", price: "On Request", tag: "Most Popular", desc: "Spacious living with premium finishes — ideal for growing families." },
  { type: "3 BHK", price: "On Request", tag: "Luxury", desc: "Expansive layouts with master suites and elegant balconies." },
];

const offers = [
  { icon: Gift, title: "Semi-Furnished Flats", desc: "Modular kitchen included" },
  { icon: Percent, title: "0% Stamp Duty", desc: "Limited period offer" },
  { icon: Clock, title: "Instant Possession", desc: "Move in within 30 days" },
  { icon: IndianRupee, title: "Book at ₹11,000", desc: "Token amount only" },
];

const gallery = [
  { src: towerExterior.url, label: "Tower Exterior" },
  { src: entranceLobby.url, label: "Entrance Lobby" },
  { src: livingRoom.url, label: "Living Room with Designer Ceilings" },
  { src: masterBedroom.url, label: "Master Bedroom" },
  { src: masterBedroomWardrobe.url, label: "Master Bedroom with Wardrobe Space" },
  { src: kitchenPlatform.url, label: "Modular Kitchen with Both-side Platform" },
  { src: kitchenBalcony.url, label: "Modular Kitchen with Dry Balcony" },
  { src: washroomWestern.url, label: "Washroom — Western" },
  { src: washroomIndian.url, label: "Washroom — Indian" },
  { src: gardenPhoto.url, label: "Main Road Touch Project with Garden" },
];

function EnquiryPopup({ open, onClose, title = "Quick Enquiry", subtitle = "We will call you back in 10 minutes" }: { open: boolean; onClose: () => void; title?: string; subtitle?: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition" aria-label="Close">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="text-center mb-5">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/15 flex items-center justify-center">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-navy">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
            const type = (form.elements.namedItem("type") as HTMLSelectElement).value;
            const msg = `Hi, I'm interested in Fair Township.\nName: ${name}\nPhone: ${phone}\nType: ${type}`;
            window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
            onClose();
          }}
        >
          <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          <select name="type" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent">
            <option>Interested in 1 BHK</option>
            <option>Interested in 2 BHK</option>
            <option>Interested in 3 BHK</option>
          </select>
          <button type="submit" className="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:opacity-90 transition flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Send on WhatsApp
          </button>
          <a href={`tel:${PHONE}`} className="w-full py-2.5 rounded-xl border border-border text-navy font-semibold text-sm hover:bg-muted transition flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> Call Now {PHONE}
          </a>
        </form>
      </div>
    </div>
  );
}

// Live visitor counter — simulates real-time site visitors
function useLiveVisitors() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Seed with a believable baseline that changes through the day
    const seed = () => {
      const hour = new Date().getHours();
      const base = 18 + Math.floor(Math.sin((hour / 24) * Math.PI) * 14);
      return Math.max(8, base + Math.floor(Math.random() * 8));
    };
    setCount(seed());
    const t = setInterval(() => {
      setCount((c) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = c + delta;
        return Math.max(6, Math.min(48, next));
      });
    }, 4000);
    return () => clearInterval(t);
  }, []);
  return count;
}

function Landing() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [followUpOpen, setFollowUpOpen] = useState(false);
  const visitors = useLiveVisitors();

  // Follow-up popup: show ONCE per visitor (localStorage), after 8 seconds
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const seen = localStorage.getItem("ft_followup_shown");
      if (seen) return;
      const t = setTimeout(() => {
        setFollowUpOpen(true);
        localStorage.setItem("ft_followup_shown", "1");
      }, 8000);
      return () => clearTimeout(t);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0 shadow-sm">
              <Home className="w-5 h-5 text-gold" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-display font-bold text-navy text-sm truncate">OM VALUE HOMES</div>
              <div className="text-[10px] text-muted-foreground tracking-wide hidden sm:block">DREAM HOMES AT DREAM PRICE</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white font-semibold text-xs hover:opacity-90 transition">
              <MessageCircle className="w-3.5 h-3.5" /> Chat
            </a>
            <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-[90vh] sm:min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner.url} alt="Fair Township Palghar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-24 sm:pb-32 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-primary-foreground min-w-0">
            {/* Live visitor pill */}
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-2xl bg-emerald-500/25 border border-emerald-300/60 text-emerald-100 text-[11px] sm:text-xs font-semibold mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Eye className="w-3.5 h-3.5" />
              <span className="min-w-0 leading-snug"><span className="text-white font-bold">{visitors}</span> people viewing this property now</span>
            </div>
            <div className="inline-flex sm:ml-2 items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gold/25 border border-gold/50 text-gold text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Ready Possession Homes
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] mb-4 sm:mb-6 break-words text-white">
              FAIR<br />
              <span className="text-gold">TOWNSHIP</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-2 flex items-center gap-2 flex-wrap">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" /> <span>Dhansar, Old Satpati Road, Palghar (W)</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/85 mb-6 sm:mb-8 max-w-xl">
              Own your dream home! 1, 2 & 3 BHK premium apartments with modern architecture, world-class amenities and future-ready connectivity to Mumbai.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/25">
                <div className="text-[10px] sm:text-xs text-white/85 uppercase tracking-wider">Starts From</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gold">19.90</span>
                  <span className="text-sm sm:text-lg font-semibold text-white">Lacs*</span>
                </div>
              </div>
              <div className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-gold text-navy">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold">EMI Starts</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black">15,000</span>
                  <span className="text-xs sm:text-sm font-semibold">/month*</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button onClick={() => setPopupOpen(true)} className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
                Book a Site Visit <ArrowRight className="w-4 h-4" />
              </button>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
        {/* Floating stats */}
        <div className="relative z-20 w-full sm:absolute sm:bottom-0 sm:inset-x-0 bg-white/95 backdrop-blur border-t border-border shadow-[0_-12px_35px_-25px_rgba(0,0,0,0.35)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {[
              { icon: CheckCircle2, label: "Ready Possession" },
              { icon: MapPin, label: "Prime Palghar (W)" },
              { icon: Users, label: "Ideal for Families" },
              { icon: Building2, label: "MahaRERA Approved" },
            ].map((s) => (
              <div key={s.label} className="flex min-w-0 items-center gap-2 sm:gap-3 text-navy rounded-xl bg-secondary/70 px-3 py-2 sm:bg-transparent sm:px-0 sm:py-0">
                <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-semibold leading-tight break-words">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Limited Time Offers</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">Exciting Deals for Early Buyers</h2>
            <p className="text-muted-foreground text-sm sm:text-base">⚡ Limited units available — grab yours today!</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offers.map((o) => (
              <div key={o.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-gold hover:shadow-[var(--shadow-gold)] transition text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition">
                  <o.icon className="w-6 h-6 text-navy" />
                </div>
                <div className="font-bold text-navy text-base mb-1">{o.title}</div>
                <div className="text-sm text-muted-foreground">{o.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => setPopupOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-semibold text-sm hover:opacity-90 transition">
              <Sparkles className="w-4 h-4" /> Claim Your Offer Now
            </button>
          </div>
        </div>
      </section>

      {/* CONFIGURATIONS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Configurations</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">A Home for Every Family</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">Thoughtfully designed apartments with smart layouts, abundant natural light and premium fittings.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {configurations.map((c, i) => (
              <div key={c.type} className={`group relative p-6 sm:p-8 rounded-3xl border transition-all hover:-translate-y-1 ${i === 1 ? "bg-[var(--gradient-hero)] text-white border-transparent shadow-[var(--shadow-elegant)]" : "bg-card border-border hover:shadow-[var(--shadow-elegant)]"}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 sm:mb-6 ${i === 1 ? "bg-gold text-navy" : "bg-accent/15 text-accent"}`}>{c.tag}</div>
                <div className={`text-4xl sm:text-5xl font-black mb-2 font-display ${i === 1 ? "text-white" : "text-navy"}`}>{c.type}</div>
                <div className={`text-sm mb-4 sm:mb-6 ${i === 1 ? "text-white/85" : "text-muted-foreground"}`}>{c.desc}</div>
                <div className={`pt-4 sm:pt-6 border-t ${i === 1 ? "border-white/20" : "border-border"}`}>
                  <div className={`text-xs uppercase tracking-wider mb-1 ${i === 1 ? "text-white/75" : "text-muted-foreground"}`}>
                    {c.price === "On Request" ? "Pricing" : "Starts From"}
                  </div>
                  <div className="flex items-baseline gap-1">
                    {c.price !== "On Request" && <IndianRupee className={`w-5 h-5 ${i === 1 ? "text-gold" : "text-navy"}`} />}
                    <span className={`text-2xl sm:text-3xl font-black ${i === 1 ? "text-gold" : "text-navy"}`}>{c.price}</span>
                    {c.price !== "On Request" && <span className={`text-sm font-semibold ${i === 1 ? "text-white" : "text-navy"}`}>Lacs</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — full property tour */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Property Tour</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">Step Inside Your Future Home</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">Real photos from inside Fair Township — every room finished to premium standards.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <figure key={g.label} className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-[var(--shadow-elegant)] transition">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent">
                  <figcaption className="text-white font-semibold text-sm sm:text-base">{g.label}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Exclusive Amenities</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">Live the Lifestyle You Deserve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {amenities.map((a) => (
              <div key={a.label} className="group p-5 sm:p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-[var(--shadow-elegant)] transition text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition">
                  <a.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-white transition" />
                </div>
                <div className="font-semibold text-navy text-sm sm:text-base">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION PERKS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Prime Location</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Everything You Need, Minutes Away</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-20">
            {locationPerks.map((p) => (
              <div key={p.label} className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition">
                <p.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-gold" />
                <div className="text-xs sm:text-sm font-semibold text-white">{p.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-10 sm:mb-12">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Future-Ready Growth</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Gateway to the 4th Mumbai</h3>
            <p className="text-white/85 max-w-2xl mx-auto text-sm sm:text-base">Palghar is at the heart of Mumbai's next-generation infrastructure boom.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {connectivity.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[var(--gradient-gold)] text-navy">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Find Us</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">Visit Our Project</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">S.No. 232/5/1, Vill. Dhansaar, Old Satpati Road, Palghar (W)</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] bg-card">
            <div className="aspect-[16/9] w-full">
              <iframe
                title="Fair Township Location"
                src={MAPS_EMBED}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-navy">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Dhansar, Old Satpati Road, Palghar (W)</span>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-semibold text-sm hover:opacity-90 transition">
                <Navigation className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRE / CTA */}
      <section id="enquire" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] grid md:grid-cols-2">
          <div className="bg-[var(--gradient-hero)] p-8 sm:p-12 text-white">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gold/25 border border-gold/50 text-gold text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Limited Units Available
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Book Your Site Visit Today</h2>
            <p className="text-white/85 mb-6 sm:mb-8 text-sm sm:text-base">Schedule a site visit and unlock exclusive launch offers. Our team is ready to assist you.</p>
            <div className="space-y-3 sm:space-y-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/10 hover:bg-white/15 transition">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-navy" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-white/75 uppercase tracking-wider">Call Now</div>
                  <div className="font-bold text-base sm:text-lg text-white">+91 88283 00415</div>
                </div>
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-emerald-500/25 hover:bg-emerald-500/35 border border-emerald-400/40 transition">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-white/75 uppercase tracking-wider">WhatsApp</div>
                  <div className="font-bold text-base sm:text-lg text-white">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-card p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">Request a Callback</h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">Fill in your details — we'll reach out within 10 minutes.</p>
            <div className="flex gap-3 p-3 sm:p-4 rounded-xl bg-secondary mb-6">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div className="text-sm text-foreground leading-relaxed">
                <div className="font-semibold text-navy mb-1">Site Address</div>
                S.No. 232/5/1, Vill. Dhansaar,<br />Old Satpati Road, Palghar (W)
              </div>
            </div>
            <form
              className="space-y-3 sm:space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const name = (form.elements.namedItem("cb_name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("cb_phone") as HTMLInputElement).value;
                const type = (form.elements.namedItem("cb_type") as HTMLSelectElement).value;
                const msg = `Hi, I'd like a callback for Fair Township.\nName: ${name}\nPhone: ${phone}\nType: ${type}`;
                window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
              }}
            >
              <input name="cb_name" type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <input name="cb_phone" type="tel" required placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
              <select name="cb_type" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Interested in 1 BHK</option>
                <option>Interested in 2 BHK</option>
                <option>Interested in 3 BHK</option>
              </select>
              <button type="submit" className="w-full py-3 sm:py-3.5 rounded-xl bg-accent text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Request Callback <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-white/80 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <div className="font-display font-bold text-white">OM VALUE HOMES</div>
                  <div className="text-xs">Dream Homes at Dream Price</div>
                </div>
              </div>
              <p className="text-sm">Fair Township — modern living in the heart of Palghar (W).</p>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">Contact</div>
              <div className="text-sm space-y-1">
                <div>📞 +91 88283 00415</div>
                <div>📲 WhatsApp: {WHATSAPP_DISPLAY}</div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-white mb-3">RERA</div>
              <div className="text-sm">MahaRERA Registration No.<br />P99000055618</div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 text-xs text-center">
            © {new Date().getFullYear()} Om Value Homes · Fair Township, Palghar (W). All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* ENQUIRY POPUP (CTA-triggered) */}
      <EnquiryPopup open={popupOpen} onClose={() => setPopupOpen(false)} />

      {/* FOLLOW-UP POPUP — shown once per visitor */}
      <EnquiryPopup
        open={followUpOpen}
        onClose={() => setFollowUpOpen(false)}
        title="🏡 Still looking?"
        subtitle="Get pricing, floor plans & a free site visit — leave your details and we'll call back."
      />
    </div>
  );
}
