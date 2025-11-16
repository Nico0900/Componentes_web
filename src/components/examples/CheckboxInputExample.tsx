import { useState } from 'react';

export default function CheckboxInputExample() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

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
    </div>
  );
}

export const checkboxInputCode = `import { useState } from 'react';

export default function CheckboxInputExample() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

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
    </div>
  );
}`;
