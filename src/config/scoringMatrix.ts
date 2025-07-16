import { ScoringMatrix } from "../types/calculator";

export const SCORING_MATRIX: ScoringMatrix = {
  timeInBusiness: [
    { label: "< 6 months", score: 0 },
    { label: "6–12 months", score: 50 },
    { label: "1–2 years", score: 80 },
    { label: "2–3 years", score: 100 },
    { label: "3–4 years", score: 100 },
    { label: "4+ years", score: 100 },
  ],
  monthlyRevenue: [
    { label: "Under $10K", score: 0 },
    { label: "$10K-$25K", score: 30 },
    { label: "$25K-$50K", score: 80 },
    { label: "$50K-$100K", score: 100 },
    { label: "$100K+", score: 100 },
  ],
  creditScore: [
    { label: "549-or-below", score: 0 },
    { label: "550-559", score: 20 },
    { label: "600-649", score: 30 },
    { label: "650-679", score: 50 },
    { label: "680-719", score: 70 },
    { label: "720-or-higher", score: 100 },
  ],
};

export const TIER_RANGES = {
  S: { min: 80, max: 100, label: "S - Premium" },
  A: { min: 60, max: 79, label: "A - Excellent" },
  B: { min: 40, max: 59, label: "B - Good" },
  C: { min: 20, max: 39, label: "C - Fair" },
  D: { min: 0, max: 19, label: "D - Decline" },
};

export const TIER_COLORS = {
  S: "bg-emerald-100 text-emerald-800 border-emerald-300",
  A: "bg-blue-100 text-blue-800 border-blue-300",
  B: "bg-amber-100 text-amber-800 border-amber-300",
  C: "bg-red-100 text-red-800 border-red-300",
  D: "bg-gray-100 text-gray-800 border-gray-300",
};
