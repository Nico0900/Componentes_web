import { useState } from 'react';

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState('Opción 1');

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <p className="text-xs text-slate-400 mb-3">Selecciona una opción:</p>
      {['Opción 1', 'Opción 2', 'Opción 3'].map((option) => (
        <label key={option} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="radio"
              name="radio-group"
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="sr-only"
            />
            <div className={`w-5 h-5 border-2 rounded-full bg-slate-800/50 transition-all duration-300 flex items-center justify-center ${
              selectedOption === option ? 'border-blue-500' : 'border-slate-700/50'
            }`}>
              {selectedOption === option && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
              )}
            </div>
          </div>
          <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}

export const radioButtonCode = `import { useState } from 'react';

export default function RadioButtonExample() {
  const [selectedOption, setSelectedOption] = useState('Opción 1');

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <p className="text-xs text-slate-400 mb-3">Selecciona una opción:</p>
      {['Opción 1', 'Opción 2', 'Opción 3'].map((option) => (
        <label key={option} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="radio"
              name="radio-group"
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="sr-only"
            />
            <div className={\`w-5 h-5 border-2 rounded-full bg-slate-800/50 transition-all duration-300 flex items-center justify-center \${
              selectedOption === option ? 'border-blue-500' : 'border-slate-700/50'
            }\`}>
              {selectedOption === option && (
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
              )}
            </div>
          </div>
          <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
}`;
