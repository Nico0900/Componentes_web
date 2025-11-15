import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;
  onDownload: () => void;
  onCopy: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  code,
  onDownload,
  onCopy
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-800/50">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/50 rounded-t-2xl">
          <h2 className="text-xl font-semibold text-slate-100 tracking-tight">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300"
            aria-label="Cerrar modal"
          >
            <svg
              className="w-5 h-5"
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

        {/* Code Display */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-slate-950/50 rounded-xl overflow-hidden border border-slate-800/30">
            <div className="flex items-center justify-between px-5 py-3 bg-slate-900/50 border-b border-slate-800/30">
              <span className="text-xs font-mono text-slate-400">
                {title.toLowerCase().replace(/\s+/g, '-')}.tsx
              </span>
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
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-slate-300 leading-relaxed">
                {code}
              </code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800/30 rounded-b-2xl flex justify-end gap-2">
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
            className="px-4 py-2 bg-slate-800/60 hover:bg-slate-700/70 text-slate-200 hover:text-white font-medium rounded-lg transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 text-sm"
          >
            Descargar y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
