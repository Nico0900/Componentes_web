/**
 * Version Modal Component
 *
 * Desarrollado por: Nicolás Vargas
 * Proyecto: BibliotecaUI - Galería de Componentes Web
 * Licencia: Código libre y de código abierto
 */

import { useEffect } from 'react';

interface Version {
  version: string;
  date: string;
  title: string;
  changes: {
    category: string;
    items: string[];
  }[];
}

interface VersionModalProps {
  isOpen: boolean;
  onClose: () => void;
  versions: Version[];
}

export default function VersionModal({ isOpen, onClose, versions }: VersionModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100">
                  Historial de Versiones
                </h2>
                <p className="text-sm text-slate-400">
                  Actualizaciones y nuevos componentes
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 text-slate-400 hover:text-slate-200 transition-all duration-200 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-88px)] px-6 py-6">
          <div className="space-y-8">
            {versions.map((version, versionIndex) => (
              <div
                key={versionIndex}
                className="relative pl-8 pb-8 border-l-2 border-slate-700/50 last:border-transparent"
              >
                {/* Version Badge */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />

                {/* Version Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold rounded-full">
                      v{version.version}
                    </span>
                    <span className="text-sm text-slate-500">{version.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mt-2">
                    {version.title}
                  </h3>
                </div>

                {/* Changes */}
                <div className="space-y-4">
                  {version.changes.map((change, changeIndex) => (
                    <div key={changeIndex}>
                      <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {change.category}
                      </h4>
                      <ul className="space-y-1.5 ml-4">
                        {change.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-sm text-slate-400 flex items-start gap-2"
                          >
                            <span className="text-blue-400/60 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Total de versiones: {versions.length}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/30 text-blue-400 text-sm font-medium rounded-lg transition-all duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
