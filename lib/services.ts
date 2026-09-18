export type Service = {
  name: string;
  price: string;
  note?: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  note?: string;
  services: Service[];
};

/** Menu effective September 2026 (in-shop printout). */
export const MENU_EFFECTIVE = "September 2026";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "haircuts-and-grooming",
    title: "Haircuts & Grooming",
    services: [
      { name: "Haircut", price: "$35", note: "Includes up to 30 minutes." },
      { name: "Haircut + Beard Trim", price: "$50" },
      {
        name: "Veteran Haircut",
        price: "$30",
        note: "Valid veteran/military ID required.",
      },
      { name: "Line Up", price: "$15" },
      { name: "Bang Trim", price: "$15" },
    ],
  },
  {
    slug: "shampoo-and-haircut",
    title: "Shampoo + Haircut",
    note: "No blow dry.",
    services: [
      { name: "Short Hair", price: "$45" },
      { name: "Medium Hair", price: "$55" },
      { name: "Long Hair", price: "$65" },
    ],
  },
  {
    slug: "styling",
    title: "Styling",
    note: "Prices listed for short / medium / long hair.",
    services: [
      { name: "Style Only", price: "$35 / $45 / $55" },
      { name: "Haircut + Blow Dry", price: "$45 / $55 / $65" },
      { name: "Shampoo + Haircut + Blow Dry", price: "$55 / $65 / $75" },
    ],
  },
  {
    slug: "beard-services",
    title: "Beard Services",
    services: [
      { name: "Beard Trim + Lineup", price: "$30" },
      { name: "Men's Beard Color", price: "$55" },
    ],
  },
  {
    slug: "shampoo-and-treatments",
    title: "Shampoo & Treatments",
    services: [
      { name: "Shampoo Only", price: "$20" },
      {
        name: "Conditioning Treatment",
        price: "$15 / $20 / $25",
        note: "Short / medium / long hair.",
      },
      {
        name: "Perm",
        price: "$80+",
        note: "Starting price; final cost depends on length and condition.",
      },
    ],
  },
  {
    slug: "waxing-and-specialty",
    title: "Waxing & Specialty Services",
    services: [
      { name: "Eyebrow Wax", price: "$25" },
      { name: "Eyebrow + Lip + Chin", price: "$45" },
      { name: "Gentleman's Signature Facial", price: "$60" },
      { name: "Hot Oil Treatment", price: "$60" },
      { name: "Consultation", price: "Free" },
    ],
  },
];

export type TopService = {
  name: string;
  shortBlurb: string;
  price: string;
  anchor: string;
};

export const TOP_SERVICES: TopService[] = [
  {
    name: "Haircut",
    shortBlurb: "Classic cut, your style.",
    price: "$35",
    anchor: "haircuts-and-grooming",
  },
  {
    name: "Haircut + Beard Trim",
    shortBlurb: "Cut and beard line, clean finish.",
    price: "$50",
    anchor: "haircuts-and-grooming",
  },
  {
    name: "Shampoo + Haircut",
    shortBlurb: "Wash, cut, ready to go.",
    price: "From $45",
    anchor: "shampoo-and-haircut",
  },
];
