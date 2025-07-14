import React from 'react';
import { SCORING_MATRIX } from '../config/scoringMatrix';
import { UserInputs } from '../types/calculator';

interface CalculatorFormProps {
  inputs: UserInputs;
  onInputChange: (field: keyof UserInputs, value: string) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ inputs, onInputChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Business Loan Score</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount Requested
          </label>
          <select
            value={inputs.amountRequested}
            onChange={(e) => onInputChange('amountRequested', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select amount range</option>
            {SCORING_MATRIX.amountRequested.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time in Business
          </label>
          <select
            value={inputs.timeInBusiness}
            onChange={(e) => onInputChange('timeInBusiness', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select time range</option>
            {SCORING_MATRIX.timeInBusiness.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Revenue
          </label>
          <select
            value={inputs.monthlyRevenue}
            onChange={(e) => onInputChange('monthlyRevenue', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select revenue range</option>
            {SCORING_MATRIX.monthlyRevenue.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Credit Score
          </label>
          <select
            value={inputs.creditScore}
            onChange={(e) => onInputChange('creditScore', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Select credit range</option>
            {SCORING_MATRIX.creditScore.map((option, index) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;