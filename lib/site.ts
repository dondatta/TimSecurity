export const company = {
  name: "UA Securities",
  legalName: "UA Securities LLC",
  owner: "Timothy Fleming",
  founded: 2021,
  phone: "(206) 605-8091",
  phoneHref: "tel:+12066058091",
  email: "info@uasecurities.com",
  ownerEmail: "timothy.fleming@uasecurities.com",
  url: "https://www.uasecurities.com",
  motto: "Service-minded. Conflict-ready. Always present.",
  credentials: [
    "Veteran-owned (VOSB certified)",
    "Licensed & bonded in Washington",
    "Fully insured",
  ],
  serviceArea: [
    "Seattle", "Bellevue", "Redmond", "Kirkland", "Renton", "Kent",
    "Tacoma", "Everett", "Shoreline", "Burien", "Federal Way", "Bothell",
  ],
  clients: [
    { name: "Coast Hotels Seattle", since: "August 2022", current: true },
    { name: "Paramount Hotel Seattle", since: "June 2022", current: false },
    { name: "Thompson Hotel Seattle", since: "July 2021", current: false },
  ],
};

export type Service = {
  slug: string;
  short: string;
  title: string;
  tagline: string;
  intro: string;
  points: string[];
  image?: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "hotel-hospitality-security",
    short: "Hotel Security",
    title: "Hotel & Hospitality Security in Seattle",
    tagline: "Guest safety. Staff confidence. A calm front door.",
    intro:
      "Guests judge a hotel by how safe and how welcome they feel, usually at the front door. UA Securities provides uniformed, service-minded officers who greet first and enforce second, and who know your property the way your own staff does.",
    points: [
      "Overnight tours of the full property: lobby, guest floors, stairwells, garage and back-of-house",
      "Incident response and de-escalation, handled professionally and documented",
      "A daily activity report to hotel management every morning, reviewed by our owner",
      "Guest assistance, escorts and a visible presence at lobbies and entrances",
      "Coordination with hotel management, parking operators and local police",
    ],
    image: { src: "/images/hotel-officer.jpg", alt: "UA Securities officer on duty at a busy Seattle venue" },
  },
  {
    slug: "condo-apartment-security",
    short: "Condo & Apartment Security",
    title: "Condo & Apartment Security in Seattle",
    tagline: "Residents feel looked after, not watched.",
    intro:
      "Uniformed security for condominium and apartment communities: a visible, professional presence for residents and their guests, with patrol coverage and reporting your property manager can rely on.",
    points: [
      "Patrol coverage of the property, garage and common areas",
      "Checks of amenities, package rooms and resident-only spaces",
      "A professional presence at entrances for residents and guests",
      "Incident response and documentation",
      "Daily activity reporting to property management",
    ],
  },
  {
    slug: "parking-lot-garage-security",
    short: "Parking Security",
    title: "Parking Lot & Garage Security in Seattle",
    tagline: "Visible deterrence. Documented patrols.",
    intro:
      "An unwatched lot invites break-ins, loitering and liability. We keep Seattle lots and garages watched with uniformed officers and a marked patrol vehicle, so the deterrence is visible before anything happens.",
    points: [
      "Marked-vehicle patrols: watch for the white UA Securities Jeep",
      "Foot tours of every level, stairwell and elevator lobby",
      "Deterrence of break-ins, loitering and unauthorized vehicles",
      "Incident documentation and reporting to the operator",
      "24/7 coverage available",
    ],
    image: { src: "/images/patrol-jeep.jpg", alt: "The white UA Securities Jeep Wrangler patrol vehicle at night" },
  },
  {
    slug: "construction-site-security",
    short: "Construction Site Security",
    title: "Construction Site Security in Seattle",
    tagline: "Protect your equipment. Protect your timeline.",
    intro:
      "Equipment and materials left overnight are a target. We provide after-hours coverage for active and inactive job sites across the Seattle metro, protecting your tools, materials and schedule.",
    points: [
      "Overnight and after-hours site coverage",
      "Perimeter and access-point checks",
      "Deterrence of theft, vandalism and trespassing",
      "Incident logs for insurance and compliance",
      "Coverage scaled to your project phase",
    ],
    image: { src: "/images/construction-officer.jpg", alt: "UA Securities officer in a high-visibility security vest on a Seattle sidewalk" },
  },
];
