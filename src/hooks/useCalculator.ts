import { useState, useMemo } from 'react';
import { UserInputs, FinalResult, ScoreResult } from '../types/calculator';
import { SCORING_MATRIX, TIER_RANGES } from '../config/scoringMatrix';

export const useCalculator = () => {
  const [inputs, setInputs] = useState<UserInputs>({
    amountRequested: '',
    timeInBusiness: '',
    monthlyRevenue: '',
    creditScore: ''
  });

  const handleInputChange = (field: keyof UserInputs, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getScore = (field: keyof typeof SCORING_MATRIX, value: string): number => {
    const option = SCORING_MATRIX[field].find(opt => opt.label === value);
    return option ? option.score : 0;
  };

  const calculateResults = useMemo((): FinalResult | null => {
    const allInputsFilled = Object.values(inputs).every(input => input !== '');
    
    if (!allInputsFilled) {
      return null;
    }

    const individualScores: ScoreResult[] = [
      {
        field: 'Amount Requested',
        value: inputs.amountRequested,
        score: getScore('amountRequested', inputs.amountRequested)
      },
      {
        field: 'Time in Business',
        value: inputs.timeInBusiness,
        score: getScore('timeInBusiness', inputs.timeInBusiness)
      },
      {
        field: 'Monthly Revenue',
        value: inputs.monthlyRevenue,
        score: getScore('monthlyRevenue', inputs.monthlyRevenue)
      },
      {
        field: 'Credit Score',
        value: inputs.creditScore,
        score: getScore('creditScore', inputs.creditScore)
      }
    ];

    const totalScore = individualScores.reduce((sum, score) => sum + score.score, 0);

    let tier = 'C';
    let tierLabel = 'C - Fair';

    if (totalScore >= TIER_RANGES.S.min) {
      tier = 'S';
      tierLabel = TIER_RANGES.S.label;
    } else if (totalScore >= TIER_RANGES.A.min) {
      tier = 'A';
      tierLabel = TIER_RANGES.A.label;
    } else if (totalScore >= TIER_RANGES.B.min) {
      tier = 'B';
      tierLabel = TIER_RANGES.B.label;
    }

    return {
      individualScores,
      totalScore,
      tier,
      tierLabel
    };
  }, [inputs]);

  return {
    inputs,
    handleInputChange,
    calculateResults
  };
};