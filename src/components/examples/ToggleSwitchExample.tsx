import { useState } from 'react';

export default function ToggleSwitchExample() {
  const [enabled1, setEnabled1] = useState(true);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Modo oscuro
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled1}
            onChange={(e) => setEnabled1(e.target.checked)}
            className="peer sr-only"
          />
          <div className={`w-11 h-6 rounded-full transition-all duration-300 ${
            enabled1 ? 'bg-blue-500' : 'bg-slate-700/50'
          }`}>
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              enabled1 ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </div>
        </div>
      </label>

      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Notificaciones push
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled2}
            onChange={(e) => setEnabled2(e.target.checked)}
            className="peer sr-only"
          />
          <div className={`w-11 h-6 rounded-full transition-all duration-300 ${
            enabled2 ? 'bg-blue-500' : 'bg-slate-700/50'
          }`}>
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              enabled2 ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </div>
        </div>
      </label>

      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Actualizaciones automáticas
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled3}
            onChange={(e) => setEnabled3(e.target.checked)}
            className="peer sr-only"
          />
          <div className={`w-11 h-6 rounded-full transition-all duration-300 ${
            enabled3 ? 'bg-blue-500' : 'bg-slate-700/50'
          }`}>
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              enabled3 ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </div>
        </div>
      </label>
    </div>
  );
}

export const toggleSwitchCode = `import { useState } from 'react';

export default function ToggleSwitchExample() {
  const [enabled1, setEnabled1] = useState(true);
  const [enabled2, setEnabled2] = useState(false);
  const [enabled3, setEnabled3] = useState(true);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Modo oscuro
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled1}
            onChange={(e) => setEnabled1(e.target.checked)}
            className="peer sr-only"
          />
          <div className={\`w-11 h-6 rounded-full transition-all duration-300 \${
            enabled1 ? 'bg-blue-500' : 'bg-slate-700/50'
          }\`}>
            <div className={\`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 \${
              enabled1 ? 'translate-x-5' : 'translate-x-0'
            }\`} />
          </div>
        </div>
      </label>

      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Notificaciones push
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled2}
            onChange={(e) => setEnabled2(e.target.checked)}
            className="peer sr-only"
          />
          <div className={\`w-11 h-6 rounded-full transition-all duration-300 \${
            enabled2 ? 'bg-blue-500' : 'bg-slate-700/50'
          }\`}>
            <div className={\`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 \${
              enabled2 ? 'translate-x-5' : 'translate-x-0'
            }\`} />
          </div>
        </div>
      </label>

      <label className="flex items-center justify-between cursor-pointer group p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
        <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
          Actualizaciones automáticas
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={enabled3}
            onChange={(e) => setEnabled3(e.target.checked)}
            className="peer sr-only"
          />
          <div className={\`w-11 h-6 rounded-full transition-all duration-300 \${
            enabled3 ? 'bg-blue-500' : 'bg-slate-700/50'
          }\`}>
            <div className={\`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 \${
              enabled3 ? 'translate-x-5' : 'translate-x-0'
            }\`} />
          </div>
        </div>
      </label>
    </div>
  );
}`;
