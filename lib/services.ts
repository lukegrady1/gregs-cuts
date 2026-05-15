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

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "haircuts-and-trims",
    title: "Haircuts & Trims",
    services: [
      { name: "Haircut w/ Beard Trim", price: "$45" },
      { name: "Shampoo and Haircut", price: "$40" },
      { name: "Haircut", price: "$30" },
      { name: "Line Up", price: "$10" },
      { name: "Bang Trim", price: "$10" },
      { name: "Beard Trim and Lineup", price: "$25" },
      { name: "Shampoo", price: "$15" },
      { name: "Veteran Haircut", price: "$25", note: "With proper I.D." },
    ],
  },
  {
    slug: "haircuts-with-blow-dry",
    title: "Haircuts with Blow-Dry",
    services: [
      { name: "Short", price: "$40" },
      { name: "Medium", price: "$50" },
      { name: "Long", price: "$60" },
    ],
  },
  {
    slug: "styling",
    title: "Styling",
    note: "Without shampoo and haircut.",
    services: [
      { name: "Short", price: "$30" },
      { name: "Medium", price: "$40" },
      { name: "Long", price: "$50" },
    ],
  },
  {
    slug: "shampoo-cut-blow-dry",
    title: "Shampoo, Cut & Blow-Dry",
    note: "Curl or flat iron add-on: +$10 short, +$15 medium, +$20 long.",
    services: [
      { name: "Short", price: "$45" },
      { name: "Medium", price: "$55" },
      { name: "Long", price: "$65" },
    ],
  },
  {
    slug: "conditioning-treatment",
    title: "Conditioning Treatment",
    services: [
      { name: "Short", price: "$10" },
      { name: "Medium", price: "$15" },
      { name: "Long", price: "$20" },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    services: [
      { name: "Eyebrow Wax", price: "$25" },
      { name: "Eyebrow, Lip, Chin Wax", price: "$40" },
    ],
  },
  {
    slug: "other",
    title: "Other",
    services: [
      { name: "Consultation", price: "Free" },
      {
        name: "Perm",
        price: "$70+",
        note: "Starting price; final cost depends on length and condition.",
      },
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
    name: "Haircut w/ Beard Trim",
    shortBlurb: "Cut and beard line, clean finish.",
    price: "$45",
    anchor: "haircuts-and-trims",
  },
  {
    name: "Shampoo and Haircut",
    shortBlurb: "Wash, cut, ready to go.",
    price: "$40",
    anchor: "haircuts-and-trims",
  },
  {
    name: "Haircut",
    shortBlurb: "Classic cut, your style.",
    price: "$30",
    anchor: "haircuts-and-trims",
  },
];
