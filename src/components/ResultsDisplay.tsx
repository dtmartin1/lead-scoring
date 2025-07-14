import React from 'react';
import { FinalResult } from '../types/calculator';
import { TIER_COLORS } from '../config/scoringMatrix';
import { TrendingUp, Award, BarChart3 } from 'lucide-react';

interface ResultsDisplayProps {
  result: FinalResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  if (!result) return null;

  const tierColorClass = TIER_COLORS[result.tier as keyof typeof TIER_COLORS];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Award className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Your Loan Score Results</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Individual Scores</h3>
          </div>
          <div className="space-y-3">
            {result.individualScores.map((score, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{score.field}</p>
                  <p className="text-sm text-gray-600">{score.value}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-blue-600 mr-2">{score.score}</span>
                  <span className="text-sm text-gray-500">/4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <TrendingUp className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Final Results</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Total Score</p>
              <p className="text-3xl font-bold text-blue-600">{result.totalScore}<span className="text-lg text-gray-500">/16</span></p>
            </div>

            <div className={`p-6 rounded-lg border ${tierColorClass}`}>
              <p className="text-sm opacity-80 mb-1">Loan Tier</p>
              <p className="text-2xl font-bold">{result.tierLabel}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">What This Means</h4>
              <div className="text-sm text-gray-600">
                {result.tier === 'S' && (
                  <p>Excellent! Your business profile shows strong financial health and low risk. You're likely to qualify for the best loan terms and rates.</p>
                )}
                {result.tier === 'A' && (
                  <p>Very good! Your business shows solid financial performance. You should qualify for competitive loan terms with favorable rates.</p>
                )}
                {result.tier === 'B' && (
                  <p>Good standing! Your business profile is acceptable for most lenders. You may qualify for standard loan terms.</p>
                )}
                {result.tier === 'C' && (
                  <p>Fair profile. You may need to improve certain areas or consider alternative lending options. Focus on building credit and revenue.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;