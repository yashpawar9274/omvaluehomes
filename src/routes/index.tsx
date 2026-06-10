import { createFileRoute } from "@tanstack/react-router";
import heroBanner from "@/assets/hero-banner.asset.json";
import building1 from "@/assets/building-1.asset.json";
import building2 from "@/assets/building-2.asset.json";
import building3 from "@/assets/building-3.asset.json";
import building4 from "@/assets/building-4.asset.json";
import {
  MapPin, Phone, Home, TreePine, ShoppingBag, Users, Baby, Activity,
  Gamepad2, Church, Train, Plane, Ship, Waves, GraduationCap, Hospital,
  CheckCircle2, ArrowRight, Building2, IndianRupee, Calendar, Sparkles
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fair Township Palghar — 1, 2 & 3 BHK from ₹19.90 Lacs | Om Value Homes" },
      { name: "description", content: "Luxurious 1, 2 & 3 BHK ready-possession apartments at Fair Township, Palghar (W). Starting ₹19.90 Lacs. Temple, garden, kids play, jogging tracks & more. Call 8828300415." },
      { property: "og:title", content: "Fair Township Palghar — Dream Homes at Dream Price" },
      { property: "og:description", content: "1, 2 & 3 BHK luxurious apartments starting just ₹19.90 Lacs in Palghar (W). Future-ready connectivity to Mumbai." },
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
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Users, label: "Multipurpose Area" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Activity, label: "Jogging Tracks" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Sparkles, label: "& Much More" },
];

const locationPerks = [
  { icon: ShoppingBag, label: "Shopping" },
  { icon: GraduationCap, label: "Schools & Colleges" },
  { icon: Church, label: "Temples" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Train, label: "Railway Station" },
  { icon: Waves, label: "Beaches" },
];

const connectivity = [
  "Local Train 4 Track",
  "3rd Airport Proposed",
  "Wadhwan Port",
  "Mumbai–Ahmedabad Bullet Train",
  "Mumbai–Delhi Expressway",
  "Proposed Coastal Highways",
  "Proposed Sea Link",
];

const configurations = [
  { type: "1 BHK", price: "19.90", tag: "Best Value", desc: "Compact, smartly designed homes perfect for couples & small families." },
  { type: "2 BHK", price: "On Request", tag: "Most Popular", desc: "Spacious living with premium finishes — ideal for growing families." },
  { type: "3 BHK", price: "On Request", tag: "Luxury", desc: "Expansive layouts with master suites and elegant balconies." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--gradient-hero)] flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-navy text-sm">OM VALUE HOMES</div>
              <div className="text-[10px] text-muted-foreground tracking-wide">DREAM HOMES AT DREAM PRICE</div>
            </div>
          </div>
          <a href="tel:8828300415" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition">
            <Phone className="w-4 h-4" /> 8828300415
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner.url} alt="Fair Township Palghar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Ready Possession Homes
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              FAIR<br />
              <span className="text-gold">TOWNSHIP</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" /> Palghar (W), Maharashtra
            </p>
            <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl">
              Discover 1, 2 & 3 BHK luxurious apartments designed for modern families — with world-class amenities and future-ready connectivity to Mumbai.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-6 py-4 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20">
                <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">Starts From</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <IndianRupee className="w-6 h-6 text-gold" />
                  <span className="text-4xl md:text-5xl font-black text-gold">19.90</span>
                  <span className="text-lg font-semibold text-primary-foreground/80">Lacs</span>
                </div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-gold/90 text-navy">
                <div className="text-xs uppercase tracking-wider font-semibold">EMI Starts</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <IndianRupee className="w-5 h-5" />
                  <span className="text-3xl md:text-4xl font-black">15,000</span>
                  <span className="text-sm font-semibold">/month*</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#enquire" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition shadow-[var(--shadow-elegant)]">
                Book a Site Visit <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:8828300415" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
        {/* Floating stats */}
        <div className="absolute bottom-0 inset-x-0 bg-primary-foreground/95 backdrop-blur border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, label: "Ready Possession" },
              { icon: MapPin, label: "Prime Palghar (W)" },
              { icon: Users, label: "Ideal for Families" },
              { icon: Building2, label: "MahaRERA Approved" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 text-navy">
                <s.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Configurations</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">A Home for Every Family</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Thoughtfully designed apartments with smart layouts, abundant natural light and premium fittings.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {configurations.map((c, i) => (
              <div key={c.type} className={`group relative p-8 rounded-3xl border transition-all hover:-translate-y-1 ${i === 1 ? "bg-[var(--gradient-hero)] text-primary-foreground border-transparent shadow-[var(--shadow-elegant)]" : "bg-card border-border hover:shadow-[var(--shadow-elegant)]"}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 ${i === 1 ? "bg-gold text-navy" : "bg-accent/10 text-accent"}`}>{c.tag}</div>
                <div className="text-5xl font-black mb-2 font-display">{c.type}</div>
                <div className={`text-sm mb-6 ${i === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{c.desc}</div>
                <div className={`pt-6 border-t ${i === 1 ? "border-primary-foreground/20" : "border-border"}`}>
                  <div className={`text-xs uppercase tracking-wider mb-1 ${i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {c.price === "On Request" ? "Pricing" : "Starts From"}
                  </div>
                  <div className="flex items-baseline gap-1">
                    {c.price !== "On Request" && <IndianRupee className={`w-5 h-5 ${i === 1 ? "text-gold" : "text-navy"}`} />}
                    <span className={`text-3xl font-black ${i === 1 ? "text-gold" : "text-navy"}`}>{c.price}</span>
                    {c.price !== "On Request" && <span className="text-sm">Lacs</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Project Gallery</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Built to Inspire, Designed to Last</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden aspect-square md:aspect-auto group">
              <img src={building1.url} alt="Fair Township tower view" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square group">
              <img src={building2.url} alt="Booking office" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square group">
              <img src={building3.url} alt="Sales office" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-[2/1] group">
              <img src={building4.url} alt="Tower elevation" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Exclusive Amenities</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Live the Lifestyle You Deserve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((a) => (
              <div key={a.label} className="group p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-[var(--shadow-elegant)] transition text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition">
                  <a.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition" />
                </div>
                <div className="font-semibold text-navy">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION PERKS */}
      <section className="py-24 px-6 bg-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Prime Location</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need, Minutes Away</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {locationPerks.map((p) => (
              <div key={p.label} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-center hover:bg-primary-foreground/10 transition">
                <p.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                <div className="text-sm font-semibold">{p.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Future-Ready Connectivity</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Gateway to the 4th Mumbai</h3>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">Palghar is at the heart of Mumbai's next-generation infrastructure boom.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {connectivity.map((item, i) => {
              const icons = [Train, Plane, Ship, Train, Activity, Activity, Ship];
              const Icon = icons[i];
              return (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--gradient-gold)] text-navy">
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENQUIRE / CTA */}
      <section id="enquire" className="py-24 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] grid md:grid-cols-2">
          <div className="bg-[var(--gradient-hero)] p-12 text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase mb-6">
              <Calendar className="w-3.5 h-3.5" /> Limited Inventory
            </div>
            <h2 className="text-4xl font-bold mb-4">Book Your Dream Home Today</h2>
            <p className="text-primary-foreground/80 mb-8">Schedule a site visit and unwrap exclusive launch offers. Our team is ready to assist you.</p>
            <div className="space-y-4">
              <a href="tel:8828300415" className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">Call Now</div>
                  <div className="font-bold text-lg">+91 8828 300 415</div>
                </div>
              </a>
              <a href="tel:9146100650" className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">Booking Office</div>
                  <div className="font-bold text-lg">+91 9146 100 650</div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-card p-12">
            <h3 className="text-2xl font-bold text-navy mb-2">Visit Our Site</h3>
            <p className="text-muted-foreground mb-6">Walk through ready-possession homes and our sample flat.</p>
            <div className="flex gap-3 p-4 rounded-xl bg-secondary mb-6">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div className="text-sm text-foreground/80 leading-relaxed">
                <div className="font-semibold text-navy mb-1">Site Address</div>
                S.No. 232/5/1, Vill. Dhansaar,<br />Old Satpati Road, Palghar (W)
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent">
                <option>Interested in 1 BHK</option>
                <option>Interested in 2 BHK</option>
                <option>Interested in 3 BHK</option>
              </select>
              <button type="button" onClick={() => window.location.href = "tel:8828300415"} className="w-full py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Request Callback <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-primary-foreground/80 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                  <Home className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <div className="font-display font-bold text-primary-foreground">OM VALUE HOMES</div>
                  <div className="text-xs">Dream Homes at Dream Price</div>
                </div>
              </div>
              <p className="text-sm">Fair Township — modern living in the heart of Palghar (W).</p>
            </div>
            <div>
              <div className="font-semibold text-primary-foreground mb-3">Contact</div>
              <div className="text-sm space-y-1">
                <div>+91 8828 300 415</div>
                <div>+91 9146 100 650</div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-primary-foreground mb-3">RERA</div>
              <div className="text-sm">MahaRERA Registration No.<br />P99000055618</div>
            </div>
          </div>
          <div className="pt-6 border-t border-primary-foreground/10 text-xs text-center">
            © {new Date().getFullYear()} Om Value Homes · Fair Township, Palghar (W). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
