/**
 * Version Sidebar Component
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

import { useState } from 'react';
import { versions } from '../data/versions';

export default function VersionSidebar() {
  const [selectedVersion, setSelectedVersion] = useState(versions[0].version);

  const handleVersionClick = (version: string) => {
    setSelectedVersion(version);
    // Dispatch custom event para comunicar el cambio al VersionContent
    window.dispatchEvent(new CustomEvent('versionChange', { detail: version }));
  };

  return (
    <div className="sticky top-24">
      <div className="glass rounded-xl border border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          Versiones
        </h2>
        <div className="space-y-2">
          {versions.map((version) => (
            <button
              key={version.version}
              onClick={() => handleVersionClick(version.version)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedVersion === version.version
                  ? 'bg-blue-500/10 border border-blue-500/30 text-blue-400'
                  : 'bg-slate-800/30 border border-slate-700/30 text-slate-400 hover:bg-slate-800/50 hover:border-slate-600/50 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">v{version.version}</div>
                  <div className="text-xs mt-0.5 opacity-70">{version.date}</div>
                </div>
                {selectedVersion === version.version && (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 pt-6 border-t border-slate-700/50">
          <div className="text-xs text-slate-500 mb-2">Estadísticas</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Total versiones</span>
              <span className="font-semibold text-slate-300">{versions.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
