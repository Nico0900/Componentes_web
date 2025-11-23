/**
 * Version Content Component
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

import { useState, useEffect } from 'react';
import { versions, type Version } from '../data/versions';

export default function VersionContent() {
  const [selectedVersion, setSelectedVersion] = useState<Version>(versions[0]);

  useEffect(() => {
    const handleVersionChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const version = versions.find(v => v.version === customEvent.detail);
      if (version) {
        setSelectedVersion(version);
      }
    };

    window.addEventListener('versionChange', handleVersionChange);
    return () => window.removeEventListener('versionChange', handleVersionChange);
  }, []);

  return (
    <div className="glass rounded-xl border border-slate-700/50 p-8">
      {/* Version Header */}
      <div className="mb-8 pb-8 border-b border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-base font-semibold rounded-full">
            v{selectedVersion.version}
          </span>
          <span className="text-sm text-slate-500">{selectedVersion.date}</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-100 mt-3">
          {selectedVersion.title}
        </h2>
      </div>

      {/* Changes */}
      <div className="space-y-8">
        {selectedVersion.changes.map((change, changeIndex) => (
          <div key={changeIndex} className="group">
            <h3 className="text-base font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              {change.category}
            </h3>
            <ul className="space-y-3 ml-5">
              {change.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-sm text-slate-400 flex items-start gap-3 pl-2 py-1"
                >
                  <span className="text-blue-400/60 mt-0.5">•</span>
                  <span className="flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-10 pt-8 border-t border-slate-700/50">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Esta versión contiene {selectedVersion.changes.length} categorías de cambios</span>
        </div>
      </div>
    </div>
  );
}
