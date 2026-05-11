export type Service = {
  slug: string;
  name: string;
  shortBlurb: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1400&q=80&auto=format&fit=crop`;

export const SERVICES: Service[] = [
  {
    slug: "classic-cut",
    name: "Classic Cut",
    shortBlurb: "Scissor + clipper cut, hot towel finish.",
    description:
      "Traditional cut shaped to your head and your hair — clipper work on the sides, scissor on top, blended clean. Includes a hot towel finish and a quick neck shave.",
    price: "$35",
    duration: "30 min",
    image: U("1503951914875-452162b0f3f1"),
  },
  {
    slug: "skin-fade",
    name: "Skin Fade",
    shortBlurb: "Bald-fade taper, tight and even.",
    description:
      "Bald-fade taper from the skin up, blended into whatever length you want on top. Done with care — no patchy lines, no rushed work. Includes hot towel + neck shave.",
    price: "$45",
    duration: "45 min",
    image: U("1647140655214-e4a2d914971f"),
  },
  {
    slug: "beard-trim",
    name: "Beard Trim",
    shortBlurb: "Shape, line, and clean finish.",
    description:
      "Shape and line up the beard with clippers and a straight razor. Hot towel, beard oil, and a clean cheek line so it grows back right.",
    price: "$25",
    duration: "20 min",
    image: U("1517832606299-7ae9b720a186"),
  },
  {
    slug: "cut-and-beard",
    name: "Cut + Beard Combo",
    shortBlurb: "Full reset — head and face.",
    description:
      "The full reset. Cut of your choice plus a shaped beard trim, hot towel, and finish. Best value if you're keeping both tidy.",
    price: "$55",
    duration: "50 min",
    image: U("1599351431202-1e0f0137899a"),
  },
  {
    slug: "kids-cut",
    name: "Kids Cut",
    shortBlurb: "Under 12 — quick and easy.",
    description:
      "Cut for kids under 12. We keep it quick, keep it fun, and let them pick the music. First-cut certificates available on request.",
    price: "$25",
    duration: "25 min",
    image: U("1576168056582-0a851a87ab8e"),
  },
  {
    slug: "senior-cut",
    name: "Senior Cut",
    shortBlurb: "65+, classic service.",
    description:
      "Classic cut with a hot towel and a slower pace. For our regulars who've been coming in since opening day.",
    price: "$28",
    duration: "30 min",
    image: U("1549271568-e87e07c5406b"),
  },
  {
    slug: "hot-towel-shave",
    name: "Hot Towel Shave",
    shortBlurb: "Straight razor, full ritual.",
    description:
      "The full straight-razor shave — pre-shave oil, hot towel, lather, two passes, cold towel finish. The closest shave you can get.",
    price: "$40",
    duration: "35 min",
    image: U("1621605815971-fbc98d665033"),
  },
  {
    slug: "line-up",
    name: "Line-Up",
    shortBlurb: "Edges only — quick refresh.",
    description:
      "Edge-up between cuts. Hairline, sideburns, and neck cleaned with the trimmer. In and out in fifteen.",
    price: "$15",
    duration: "15 min",
    image: U("1605497788044-5a32c7078486"),
  },
];

export const TOP_SERVICES = SERVICES.filter((s) =>
  ["classic-cut", "beard-trim", "cut-and-beard"].includes(s.slug),
);
