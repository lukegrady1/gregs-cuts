export type Review = {
  name: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
  source: "Google" | "Facebook";
};

/**
 * Placeholder reviews — names and dates are fabricated for now.
 * Replace with real, approved reviews from Google/Facebook before launch.
 */
export const REVIEWS: Review[] = [
  {
    name: "Trisha M.",
    date: "Mar 2026",
    rating: 5,
    source: "Google",
    body:
      "Greg is an incredible hairstylist. He takes the time to listen to what you want and makes sure you leave feeling confident and happy. I'm so grateful to have found someone who really understands my vision!",
  },
  {
    name: "Katherine Pena",
    date: "Dec 2025",
    rating: 5,
    source: "Google",
    body:
      "Greg is the best. I've been going to him for four years now and the fact that he has his own salon now is amazing. He cuts everyone's hair in my family and we all have different hair types, and my husband's beard always smells so good when he comes back — I never have any complaints. The salon is nice and clean, everything is well kept, and very friendly. Highly recommend this place.",
  },
  {
    name: "Scott D'Agostino",
    date: "Feb 2026",
    rating: 5,
    source: "Google",
    body:
      "I was in the area on business, so stopped by for a haircut. It was a pleasure meeting Greg. Business was extremely clean and the product was worth driving another hour and a half. Went in there looking like a honky that just crawled out of the woods and left looking like a GQ model. My wife will be happy! Will be back.",
  },
  {
    name: "Carlos M.",
    date: "Jan 2026",
    rating: 5,
    source: "Google",
    body:
      "Greg does a beard trim like nobody else. Shape is clean, line is sharp, and he uses the good oil.",
  },
  {
    name: "Liam B.",
    date: "Dec 2025",
    rating: 5,
    source: "Facebook",
    body:
      "Old-school shop, the way it should be. The hot towel shave is worth the trip alone.",
  },
];
