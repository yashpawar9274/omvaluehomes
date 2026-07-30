export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.budgethomes4u.com";
export const OM_GROUP_URL = "https://www.omgroupofcompanies.com/";
export const CALL_NUMBER = "8828300415";
export const WHATSAPP_NUMBER = "917264005103";
export const WHATSAPP_DISPLAY = "+91 72640 05103";
export const EMAIL = "ashish.budgethomes@gmail.com";
export const MAP_URL = "https://maps.app.goo.gl/CUSLEJwMwkqFnm6P9";
export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.481841992919!2d72.7340837!3d19.6920997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71dae99c2aec1%3A0xd2a5461dd44590bb!2sOM%20VALUE%20HOMES!5e0!3m2!1sen!2sin!4v1785066658919!5m2!1sen!2sin";

export const socialLinks = {
  instagram: "https://www.instagram.com/omvalueshome/",
  facebook: "https://www.facebook.com/profile.php?id=61590572766376",
  youtube: "https://youtube.com/@budgethomes4u?si=mqZXPba-MBWACec0",
};

export const project = {
  name: "Fair Township",
  brand: "OM Value Homes",
  parent: "OM Group of Companies",
  location: "Dhansar, Old Satpati Road, Palghar West, Maharashtra",
  rera: "P99000055618",
  stationDistance: "Approximately 2.5 km from Palghar Railway Station",
  verifiedOn: "30 July 2026",
  configurations: [
    {
      type: "1 BHK",
      price: "₹20 Lakhs onwards",
      carpet: "356.50–384.59 sq. ft.",
      ready: "Ready Possession & Under Construction",
    },
    {
      type: "2 BHK",
      price: "₹32 Lakhs onwards",
      carpet: "561.45 sq. ft.",
      ready: "Under Construction — B & C Wing",
    },
    {
      type: "3 BHK",
      price: "₹42.56 Lakhs onwards",
      carpet: "717.85 sq. ft.",
      ready: "Ready Possession & Under Construction",
    },
  ],
  amenities: [
    "Temple",
    "Landscaped Garden",
    "Children’s Play Area",
    "Jogging Track",
    "Indoor Games",
    "Gated Community",
    "Shops within Premises",
    "Main Road Touch",
    "Lift",
    "Car Parking",
    "CCTV & 24×7 Security",
    "Home Loan Assistance",
  ],
  connectivity: [
    "Palghar Railway Station — approximately 2.5 km",
    "Schools and colleges nearby",
    "Hospitals and daily markets within easy reach",
    "Beaches and leisure destinations around Palghar",
    "Mumbai–Ahmedabad Bullet Train corridor",
    "Wadhwan Port and regional infrastructure growth",
    "Mumbai–Delhi Expressway connectivity",
    "Proposed coastal connectivity projects",
  ],
};

export const videos = [
  {
    id: -1,
    title: "3 BHK Complete Flat Tour",
    label: "3 BHK",
    description: "Fair Township ka complete 3 BHK walkthrough.",
    videoUrl: "https://youtu.be/IPvHVd5iHvc?si=asPja69zWMfEKALl",
    posterUrl: "",
    posterAlt: "Fair Township 3 BHK flat tour in Palghar West",
    orientation: "landscape",
    status: "published",
    featured: true,
    sortOrder: 1,
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
  {
    id: -2,
    title: "1 BHK Ready Home Short Tour",
    label: "1 BHK",
    description: "Ready-possession 1 BHK ka quick vertical tour.",
    videoUrl: "https://youtube.com/shorts/5tqn5cNVZi8?si=bvUjbE0DfqK5sLDT",
    posterUrl: "",
    posterAlt: "Fair Township 1 BHK ready home tour",
    orientation: "vertical",
    status: "published",
    featured: false,
    sortOrder: 2,
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
  {
    id: -3,
    title: "2 BHK Layout Short Tour",
    label: "2 BHK",
    description: "2 BHK layout aur room planning ka quick walkthrough.",
    videoUrl: "https://youtube.com/shorts/1w-MIlqGU8Q?si=ZzlatyAgOfmAimFx",
    posterUrl: "",
    posterAlt: "Fair Township 2 BHK layout tour",
    orientation: "vertical",
    status: "published",
    featured: false,
    sortOrder: 3,
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
];

export type DefaultPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  language: string;
  imageUrl: string;
  imageAlt: string;
  videoUrl: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  status: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export const defaultPosts: DefaultPost[] = [
  {
    id: -1,
    title: "1 BHK Flat in Palghar West: Price, Carpet Area and Possession",
    slug: "1-bhk-flat-palghar-west-price-carpet-area",
    excerpt:
      "A verified, simple breakdown of the 1 BHK homes at Fair Township, Palghar West.",
    body:
      "Fair Township by OM Value Homes offers 1 BHK homes in Palghar West from ₹20 Lakhs onwards. Verified carpet areas range from 356.50 to 384.59 sq. ft. Ready-possession inventory and under-construction options are available, subject to the latest sales inventory. Home-loan assistance, lift, parking, security, garden and family amenities are available. Buyers should inspect the flat, review the latest cost sheet and verify availability before making a decision.",
    category: "Buyer Guide",
    language: "English",
    imageUrl: "",
    imageAlt: "1 BHK flat tour at Fair Township Palghar West",
    videoUrl: videos[1].videoUrl,
    metaTitle: "1 BHK Flat in Palghar West from ₹20 Lakhs",
    metaDescription:
      "Explore verified price, carpet area, possession status and amenities for 1 BHK flats at Fair Township, Palghar West.",
    author: "BudgetHomes Editorial",
    status: "published",
    featured: true,
    publishedAt: "2026-07-30",
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
  {
    id: -2,
    title: "Ready Possession vs Under Construction Homes in Palghar",
    slug: "ready-possession-vs-under-construction-palghar",
    excerpt:
      "Understand the practical difference before selecting your home in Palghar West.",
    body:
      "Ready-possession homes let buyers inspect the finished property and plan an earlier move. Under-construction homes can offer a wider choice of floors or layouts, but buyers should review the construction timeline, agreement terms and approved documents. Fair Township currently has ready-possession 1 BHK and 3 BHK options, while B and C Wings include under-construction 1 BHK, 2 BHK and 3 BHK homes. Inventory changes, so ask for the latest verified availability.",
    category: "Property Education",
    language: "English",
    imageUrl: "",
    imageAlt: "Residential flat interior in Palghar West",
    videoUrl: "",
    metaTitle: "Ready Possession vs Under Construction Flats in Palghar",
    metaDescription:
      "Compare ready-possession and under-construction homes in Palghar before booking a site visit.",
    author: "BudgetHomes Editorial",
    status: "published",
    featured: false,
    publishedAt: "2026-07-30",
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
  {
    id: -3,
    title: "Why Buyers Are Exploring Palghar West for Affordable Homes",
    slug: "why-buy-home-palghar-west",
    excerpt:
      "Connectivity, daily convenience and developing infrastructure are making Palghar West easier to consider.",
    body:
      "Palghar West combines railway connectivity, schools, hospitals, markets and access to regional infrastructure. Fair Township is located at Dhansar on Old Satpati Road, approximately 2.5 km from Palghar Railway Station. Proposed and developing projects such as the bullet-train corridor, Wadhwan Port and broader road connectivity may influence the region over time, but buyers should treat future infrastructure as a long-term factor rather than a guaranteed return.",
    category: "Palghar Insights",
    language: "English",
    imageUrl: "",
    imageAlt: "Palghar West property and connectivity guide",
    videoUrl: "",
    metaTitle: "Why Buy a Home in Palghar West? BudgetHomes Guide",
    metaDescription:
      "Explore verified location advantages and infrastructure context for home buyers considering Palghar West.",
    author: "BudgetHomes Editorial",
    status: "published",
    featured: false,
    publishedAt: "2026-07-30",
    createdAt: "2026-07-30",
    updatedAt: "2026-07-30",
  },
];
