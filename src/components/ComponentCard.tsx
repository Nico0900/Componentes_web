import { useState } from 'react';
import Modal from './Modal';

interface ComponentCardProps {
  title: string;
  description: string;
  code: string;
  category?: string;
  children?: React.ReactNode;
}

export default function ComponentCard({
  title,
  description,
  code,
  category = 'General',
  children
}: ComponentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert('Código copiado al portapapeles!');
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <>
      <div className="group relative bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-slate-800/50 hover:border-slate-700/80 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 max-h-[400px]">
        {/* Preview Area */}
        <div className="p-10 h-full flex items-center justify-center">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Info Overlay - Appears on Hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-slate-900/95 via-slate-900/90 to-transparent backdrop-blur-xl px-6 py-6 pt-20">
          {/* Title & Category */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-slate-100 tracking-tight">{title}</h3>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{category}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-white text-sm py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 font-medium"
            >
              Código
            </button>
            <button
              onClick={handleCopyCode}
              className="flex-1 bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-white text-sm py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 font-medium"
            >
              Copiar
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-white text-sm py-2.5 px-4 rounded-xl transition-all duration-300 border border-slate-700/30 hover:border-blue-500/30 font-medium"
            >
              Descargar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        code={code}
        onDownload={handleDownload}
        onCopy={handleCopyCode}
      />
    </>
  );
}
