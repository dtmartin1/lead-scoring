import React from 'react';
import { SCORING_MATRIX } from '../config/scoringMatrix';

const ScoringMatrix: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Loan Scoring Matrix</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Tier</th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Amount Requested</th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Time in Business</th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Monthly Revenue</th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-700">Credit Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-6 py-4">
                <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 whitespace-nowrap min-w-[60px]">
                  S (4)
                </span>
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                $5K – $25K
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                5+ years
              </td>
              <td className="border border-gray-300 px-6 py-4 text-sm text-gray-600">
                $100K+
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
                $25K – $50K, $50K – $100K
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
                $100K – $250K, $250K – $500K
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
                $500K – $1M, $1M+
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
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Scoring Notes:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Amount requested: smaller asks score higher because they're easier to fund</li>
          <li>• Time in business: longevity shows stability, so 5+ years is top tier</li>
          <li>• Monthly revenue: higher recurring sales boost your ability to repay</li>
          <li>• Credit score: 720+ reflects excellent credit history</li>
        </ul>
      </div>
    </div>
  );
};

export default ScoringMatrix;