import { SCORING_MATRIX, TIER_RANGES } from "./config/scoringMatrix";
import { ScoreResult, UserInputs } from "./types/calculator";

export const getScore = (
  field: keyof typeof SCORING_MATRIX,
  value: string
): number => {
  const option = SCORING_MATRIX[field].find((opt) => opt.label === value);
  return option ? option.score : 0;
};

export const calculateTier = (inputs: UserInputs) => {
  const individualScores: ScoreResult[] = [
    {
      field: "Time in Business",
      value: inputs.timeInBusiness,
      score: getScore("timeInBusiness", inputs.timeInBusiness),
    },
    {
      field: "Monthly Revenue",
      value: inputs.monthlyRevenue,
      score: getScore("monthlyRevenue", inputs.monthlyRevenue),
    },
    {
      field: "Credit Score",
      value: inputs.creditScore,
      score: getScore("creditScore", inputs.creditScore),
    },
  ];

  const tScore =
    individualScores.find((score) => score.field === "Time in Business")
      ?.score ?? 0;
  const rScore =
    individualScores.find((score) => score.field === "Monthly Revenue")
      ?.score ?? 0;
  const cScore =
    individualScores.find((score) => score.field === "Credit Score")?.score ??
    0;

  const weightedScore = tScore * 0.4 + rScore * 0.4 + cScore * 0.2;

  // DNQ logic
  if (
    inputs.creditScore === "549-or-below" ||
    inputs.monthlyRevenue === "Under $10K" ||
    inputs.timeInBusiness === "< 6 months" ||
    weightedScore < 20
  ) {
    return {
      individualScores,
      tier: "D",
      tierLabel: TIER_RANGES.D.label,
      totalScore: weightedScore,
    };
  }

  // Tier classification
  if (weightedScore >= 80) {
    return {
      individualScores,
      tier: "S",
      tierLabel: TIER_RANGES.S.label,
      totalScore: weightedScore,
    };
  }
  if (weightedScore >= 60) {
    return {
      individualScores,
      tier: "A",
      tierLabel: TIER_RANGES.A.label,
      totalScore: weightedScore,
    };
  }
  if (weightedScore >= 40) {
    return {
      individualScores,
      tier: "B",
      tierLabel: TIER_RANGES.B.label,
      totalScore: weightedScore,
    };
  }
  return {
    individualScores,
    tier: "C",
    tierLabel: TIER_RANGES.C.label,
    totalScore: weightedScore,
  };
};
