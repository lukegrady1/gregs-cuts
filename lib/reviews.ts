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
    name: "Marcus T.",
    date: "Apr 2026",
    rating: 5,
    source: "Google",
    body:
      "Best cut I've had in years. Greg actually listened to what I wanted and the fade is clean. Already booked my next one.",
  },
  {
    name: "Jen R.",
    date: "Mar 2026",
    rating: 5,
    source: "Facebook",
    body:
      "Brought my son for his first real cut. They were patient, made him laugh, and the cut was sharp. We're regulars now.",
  },
  {
    name: "Dave K.",
    date: "Feb 2026",
    rating: 5,
    source: "Google",
    body:
      "Online booking is the move. In and out in 30 minutes, looked like a million bucks for the wedding the next day.",
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
      "Old-school shop with new-school booking. The hot towel shave is worth the trip alone.",
  },
];
