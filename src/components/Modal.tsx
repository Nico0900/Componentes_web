import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  code: string;
  category?: string;
  technologies?: string[];
  onDownload: () => void;
  onCopy: () => void;
  children?: React.ReactNode;
  gridSize?: 'normal' | 'wide' | 'tall' | 'large';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  code,
  category = 'General',
  technologies = [],
  onDownload,
  onCopy,
  children,
  gridSize = 'normal'
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Responsive width based on card gridSize
  const modalWidthClass = {
    'normal': 'max-w-6xl',
    'wide': 'max-w-7xl',
    'tall': 'max-w-6xl',
    'large': 'max-w-[90rem]',
  }[gridSize];

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative glass rounded-2xl shadow-2xl ${modalWidthClass} w-full max-h-[90vh] flex flex-col border border-slate-800/50 animate-scale-in`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/50 rounded-t-2xl">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{title}</h2>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider px-2 py-1 bg-slate-800/50 rounded-md border border-slate-700/30">
                {category}
              </span>
            </div>
            <p className="text-sm text-slate-400">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
            aria-label="Cerrar modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - Two Columns */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row min-h-0">
          {/* Left Column - Component Preview (only if children exist) */}
          {children && (
            <div className="w-full lg:w-1/2 border-r border-slate-800/50 flex flex-col min-h-0">
              {/* Preview Header */}
              <div className="px-6 py-4 border-b border-slate-800/30 bg-slate-900/30 shrink-0">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Vista Previa
                </h3>
              </div>
              {/* Preview Content */}
              <div className="flex-1 overflow-auto p-8 bg-slate-950/30 min-h-0">
                <div className="h-full flex items-center justify-center">
                  {children}
                </div>
              </div>
            </div>
          )}

          {/* Right Column - Code */}
          <div className={`w-full ${children ? 'lg:w-1/2' : ''} flex flex-col min-h-0`}>
            {/* Code Header */}
            <div className="px-6 py-4 border-b border-slate-800/30 bg-slate-900/30 shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Código Fuente
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={onCopy}
                    className="text-xs bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 font-medium"
                  >
                    Copiar
                  </button>
                  <button
                    onClick={onDownload}
                    className="text-xs bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 font-medium"
                  >
                    Descargar
                  </button>
                </div>
              </div>

              {/* Info Pills */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-mono text-slate-500">
                  {title.toLowerCase().replace(/\s+/g, '-')}.tsx
                </span>
                {technologies.length > 0 && (
                  <>
                    <span className="text-slate-700">•</span>
                    <div className="flex gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto bg-slate-950/50 min-h-0">
              <pre className="p-6 h-full">
                <code className="text-sm font-mono text-slate-300 leading-relaxed">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800/30 rounded-b-2xl flex justify-between items-center bg-slate-900/30">
          <div className="text-xs text-slate-500">
            Presiona <kbd className="px-2 py-1 bg-slate-800/50 rounded border border-slate-700/30 font-mono">ESC</kbd> para cerrar
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50 text-sm"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onDownload();
                onClose();
              }}
              className="px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 text-sm"
            >
              Descargar y Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
