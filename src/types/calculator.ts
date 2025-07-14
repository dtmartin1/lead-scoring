export interface ScoringMatrix {
  amountRequested: { label: string; score: number }[];
  timeInBusiness: { label: string; score: number }[];
  monthlyRevenue: { label: string; score: number }[];
  creditScore: { label: string; score: number }[];
}

export interface UserInputs {
  amountRequested: string;
  timeInBusiness: string;
  monthlyRevenue: string;
  creditScore: string;
}

export interface ScoreResult {
  field: string;
  value: string;
  score: number;
}

export interface FinalResult {
  individualScores: ScoreResult[];
  totalScore: number;
  tier: string;
  tierLabel: string;
}