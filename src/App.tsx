import React from 'react';
import { Calculator } from 'lucide-react';
import ScoringMatrix from './components/ScoringMatrix';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import { useCalculator } from './hooks/useCalculator';

function App() {
  const { inputs, handleInputChange, calculateResults } = useCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto px-6 py-8 max-w-[1800px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left side - Scoring Matrix */}
            <div className="xl:sticky xl:top-8 xl:self-start">
              <ScoringMatrix />
            </div>
            
            {/* Right side - Calculator and Results */}
            <div className="space-y-6">
              <CalculatorForm inputs={inputs} onInputChange={handleInputChange} />
              <ResultsDisplay result={calculateResults} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;