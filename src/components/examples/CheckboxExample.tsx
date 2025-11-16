import { useState } from 'react';

export default function CheckboxExample() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState('Opción 1');

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Standard Checkbox */}
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 border-2 border-slate-700/50 rounded bg-slate-800/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300 flex items-center justify-center">
            {checked1 && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Acepto los términos y condiciones
        </span>
      </label>

      {/* Checkbox with Description */}
      <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 border-2 border-slate-700/50 rounded bg-slate-800/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300 flex items-center justify-center">
            {checked2 && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
            Recibir notificaciones
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Te enviaremos emails sobre actualizaciones importantes
          </div>
        </div>
      </label>

      {/* Toggle Switch */}
      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Modo oscuro
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={checked3}
            onChange={(e) => setChecked3(e.target.checked)}
            className="peer sr-only"
          />
          <div className={`w-11 h-6 rounded-full transition-all duration-300 ${
            checked3 ? 'bg-blue-500' : 'bg-slate-700/50'
          }`}>
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              checked3 ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </div>
        </div>
      </label>

      {/* Radio Buttons */}
      <div className="space-y-2 pt-4 border-t border-slate-800/50">
        <p className="text-xs text-slate-400 mb-3">Selecciona una opción:</p>
        {['Opción 1', 'Opción 2', 'Opción 3'].map((option) => (
          <label key={option} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="radio-group"
                checked={selectedRadio === option}
                onChange={() => setSelectedRadio(option)}
                className="sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded-full bg-slate-800/50 transition-all duration-300 flex items-center justify-center ${
                selectedRadio === option ? 'border-blue-500' : 'border-slate-700/50'
              }`}>
                {selectedRadio === option && (
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
    </div>
  );
}

export const checkboxCode = `import { useState } from 'react';

export default function CheckboxExample() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState('Opción 1');

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Standard Checkbox */}
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 border-2 border-slate-700/50 rounded bg-slate-800/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300 flex items-center justify-center">
            {checked1 && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Acepto los términos y condiciones
        </span>
      </label>

      {/* Checkbox with Description */}
      <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
            className="peer sr-only"
          />
          <div className="w-5 h-5 border-2 border-slate-700/50 rounded bg-slate-800/50 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300 flex items-center justify-center">
            {checked2 && (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
            Recibir notificaciones
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Te enviaremos emails sobre actualizaciones importantes
          </div>
        </div>
      </label>

      {/* Toggle Switch */}
      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Modo oscuro
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={checked3}
            onChange={(e) => setChecked3(e.target.checked)}
            className="peer sr-only"
          />
          <div className={\`w-11 h-6 rounded-full transition-all duration-300 \${
            checked3 ? 'bg-blue-500' : 'bg-slate-700/50'
          }\`}>
            <div className={\`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 \${
              checked3 ? 'translate-x-5' : 'translate-x-0'
            }\`} />
          </div>
        </div>
      </label>

      {/* Radio Buttons */}
      <div className="space-y-2 pt-4 border-t border-slate-800/50">
        <p className="text-xs text-slate-400 mb-3">Selecciona una opción:</p>
        {['Opción 1', 'Opción 2', 'Opción 3'].map((option) => (
          <label key={option} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="radio-group"
                checked={selectedRadio === option}
                onChange={() => setSelectedRadio(option)}
                className="sr-only"
              />
              <div className={\`w-5 h-5 border-2 rounded-full bg-slate-800/50 transition-all duration-300 flex items-center justify-center \${
                selectedRadio === option ? 'border-blue-500' : 'border-slate-700/50'
              }\`}>
                {selectedRadio === option && (
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
    </div>
  );
}`;
