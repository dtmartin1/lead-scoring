import { ScoringMatrix } from '../types/calculator';

export const SCORING_MATRIX: ScoringMatrix = {
  amountRequested: [
    { label: '$5K - $25K', score: 4 },
    { label: '$25K - $50K', score: 3 },
    { label: '$50K - $100K', score: 3 },
    { label: '$100K - $250K', score: 2 },
    { label: '$250K - $500K', score: 2 },
    { label: '$500K - $1M', score: 1 },
    { label: '$1M+', score: 1 }
  ],
  timeInBusiness: [
    { label: 'Under 1 year', score: 1 },
    { label: '1 - 3 years', score: 2 },
    { label: '3 - 5 years', score: 3 },
    { label: '5+ years', score: 4 }
  ],
  monthlyRevenue: [
    { label: 'Under $10K', score: 1 },
    { label: '$10K - $25K', score: 2 },
    { label: '$25K - $50K', score: 2 },
    { label: '$50K - $100K', score: 3 },
    { label: '$100K+', score: 4 }
  ],
  creditScore: [
    { label: 'Under 650', score: 1 },
    { label: '650 - 679', score: 2 },
    { label: '680 - 719', score: 3 },
    { label: '720+', score: 4 }
  ]
};

export const TIER_RANGES = {
  S: { min: 13, max: 16, label: 'S - Premium' },
  A: { min: 9, max: 12, label: 'A - Excellent' },
  B: { min: 5, max: 8, label: 'B - Good' },
  C: { min: 0, max: 4, label: 'C - Fair' }
};

export const TIER_COLORS = {
  S: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  A: 'bg-blue-100 text-blue-800 border-blue-300',
  B: 'bg-amber-100 text-amber-800 border-amber-300',
  C: 'bg-red-100 text-red-800 border-red-300'
};