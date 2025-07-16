import React from "react";
import { SCORING_MATRIX } from "../config/scoringMatrix";
import { useCalculator } from "../hooks/useCalculator";
import { calculateTier, getScore } from "../calculateScore";

const DATA = [
  {
    timeInBusiness: SCORING_MATRIX.timeInBusiness[2].label,
    monthlyRevenue: SCORING_MATRIX.monthlyRevenue[3].label,
    creditScore: SCORING_MATRIX.creditScore[5].label,
  },
  {
    timeInBusiness: SCORING_MATRIX.timeInBusiness[2].label,
    monthlyRevenue: SCORING_MATRIX.monthlyRevenue[2].label,
    creditScore: SCORING_MATRIX.creditScore[4].label,
  },
  {
    timeInBusiness: SCORING_MATRIX.timeInBusiness[1].label,
    monthlyRevenue: SCORING_MATRIX.monthlyRevenue[2].label,
    creditScore: SCORING_MATRIX.creditScore[2].label,
  },
  {
    timeInBusiness: SCORING_MATRIX.timeInBusiness[1].label,
    monthlyRevenue: SCORING_MATRIX.monthlyRevenue[1].label,
    creditScore: SCORING_MATRIX.creditScore[1].label,
  },
  {
    timeInBusiness: SCORING_MATRIX.timeInBusiness[2].label,
    monthlyRevenue: SCORING_MATRIX.monthlyRevenue[2].label,
    creditScore: SCORING_MATRIX.creditScore[0].label,
  },
];

const ScoringMatrix: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Business Loan Scoring Matrix
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">
                Tier
              </th>

              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">
                Time in Business
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">
                Monthly Revenue
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">
                Credit Score
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                ...DATA[0],
                tier: calculateTier({
                  ...DATA[0],
                }),

              },
              {
                ...DATA[1],
                tier: calculateTier({
                  ...DATA[1],
                }),
              },
              {
                ...DATA[2],
                tier: calculateTier({
                  ...DATA[2],
                }),
              },
              {
                ...DATA[3],
                tier: calculateTier({
                  ...DATA[3],
                }),
              },
              {
                ...DATA[4],
                tier: calculateTier({
                  ...DATA[4],
                }),
              },
            ].map(
              ({ tier, timeInBusiness, monthlyRevenue, creditScore }, i) => (
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 whitespace-nowrap min-w-[60px]">
                      {tier.tier} ({i + 1})
                    </span>
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                    {timeInBusiness}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                    {monthlyRevenue}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                    {creditScore}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Scoring Notes:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>
            • Time in business: longevity shows stability, so 5+ years is top
            tier
          </li>
          <li>
            • Monthly revenue: higher recurring sales boost your ability to
            repay
          </li>
          <li>• Credit score: 720+ reflects excellent credit history</li>
        </ul>
      </div>
    </div>
  );
};

export default ScoringMatrix;

{
  /*       <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 whitespace-nowrap min-w-[60px]">
                  S (4)
                </span>
              </td>

              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                12 Months
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                50K+
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                720+
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 whitespace-nowrap min-w-[60px]">
                  A (3)
                </span>
              </td>

              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                3 – 5 years
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                $50K – $100K
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                680 – 719
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800 whitespace-nowrap min-w-[60px]">
                  B (2)
                </span>
              </td>

              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                1 – 3 years
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                $25K – $50K, $10K – $25K
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                650 – 679
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-800 whitespace-nowrap min-w-[60px]">
                  C (1)
                </span>
              </td>

              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                Under 1 year
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                Under $10K
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                Under 650
              </td>
            </tr> */
}
