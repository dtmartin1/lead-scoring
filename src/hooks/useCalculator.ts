import { useState, useMemo } from "react";
import { UserInputs, FinalResult } from "../types/calculator";
import { SCORING_MATRIX } from "../config/scoringMatrix";
import { calculateTier } from "../calculateScore";

export const getScore = (
  field: keyof typeof SCORING_MATRIX,
  value: string
): number => {
  const option = SCORING_MATRIX[field].find((opt) => opt.label === value);
  return option ? option.score : 0;
};

export const useCalculator = () => {
  const [inputs, setInputs] = useState<UserInputs>({
    timeInBusiness: "",
    monthlyRevenue: "",
    creditScore: "",
  });

  const handleInputChange = (field: keyof UserInputs, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateResults = useMemo((): FinalResult | null => {
    const allInputsFilled = Object.values(inputs).every(
      (input) => input !== ""
    );

    if (!allInputsFilled) {
      return null;
    }

    return calculateTier(inputs);
  }, [inputs]);

  return {
    inputs,
    handleInputChange,
    calculateResults,
  };
};
