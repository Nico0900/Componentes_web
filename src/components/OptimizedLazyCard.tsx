import { useState, useEffect, useRef, Suspense } from 'react';
import type { ComponentItem } from '../data/componentsData';
import Modal from './Modal';
import Toast from './Toast';

interface OptimizedLazyCardProps {
  item: ComponentItem;
  delay?: number;
  onDownload: (code: string, title: string) => void;
}

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

// Category Icon Component
function CategoryIcon({ category }: { category: string }) {
  const iconClass = "w-6 h-6";

  switch (category) {
    case 'Buttons':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="9" width="16" height="6" rx="2" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5"/>
          <circle cx="8" cy="12" r="1" fill="white"/>
        </svg>
      );
    case 'Cards':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="14" rx="2" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="1.5"/>
          <line x1="6" y1="9" x2="18" y2="9" stroke="#c4b5fd" strokeWidth="1.5"/>
          <circle cx="7" cy="7" r="0.5" fill="#e9d5ff"/>
          <circle cx="9" cy="7" r="0.5" fill="#e9d5ff"/>
        </svg>
      );
    case 'Alerts':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 20h20L12 2z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1.5"/>
          <line x1="12" y1="10" x2="12" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="17" r="0.8" fill="white"/>
        </svg>
      );
    case 'Badges':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="10" width="16" height="4" rx="2" fill="#10b981" stroke="#34d399" strokeWidth="1.5"/>
          <circle cx="8" cy="12" r="1" fill="white"/>
        </svg>
      );
    case 'Inputs':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="8" width="18" height="8" rx="2" fill="#6366f1" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="6" y1="12" x2="6.5" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'Loading':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="#ec4899" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
          <circle cx="12" cy="4" r="2" fill="#f472b6"/>
        </svg>
      );
    case 'Modals':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="6" width="14" height="12" rx="2" fill="#0ea5e9" stroke="#38bdf8" strokeWidth="1.5"/>
          <rect x="7" y="4" width="10" height="2" rx="1" fill="#7dd3fc"/>
          <circle cx="17" cy="8" r="1" fill="white"/>
        </svg>
      );
    case 'Navigation':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="3" rx="1" fill="#8b5cf6"/>
          <rect x="3" y="11" width="10" height="2" rx="1" fill="#a78bfa"/>
          <rect x="3" y="16" width="14" height="2" rx="1" fill="#c4b5fd"/>
        </svg>
      );
    case 'Tables':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="14" rx="1" stroke="#06b6d4" strokeWidth="1.5" fill="none"/>
          <line x1="4" y1="9" x2="20" y2="9" stroke="#22d3ee" strokeWidth="1.5"/>
          <line x1="12" y1="9" x2="12" y2="19" stroke="#22d3ee" strokeWidth="1.5"/>
        </svg>
      );
    case 'Forms':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="14" height="16" rx="2" fill="#6366f1" stroke="#818cf8" strokeWidth="1.5"/>
          <line x1="8" y1="8" x2="16" y2="8" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="12" x2="16" y2="12" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="16" x2="13" y2="16" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="5" width="14" height="14" rx="2" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
        </svg>
      );
  }
}

// Tech Icon Component (Small)
function TechIconSmall({ name }: { name: string }) {
  const iconClass = "w-5 h-5 opacity-80";

  switch (name) {
    case 'JavaScript':
      return (
        <svg className={iconClass} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#F7DF1E"/>
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={iconClass} viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#3178C6"/>
          <path fill="#FFF" d="M56.612 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.203l-44.739.122-.122 10.443Zm149.955-10.742c6.501 1.625 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.111 6.136 8.208.08.325-11.053 7.802-17.798 11.988-.244.162-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.867-12.028-7.233-7.76-.528-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.536 4.876 5.649 14.832 9.956 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.879-28.323 20.276-4.388.772-14.79.65-19.504-.203-10.28-1.828-20.033-6.908-26.047-13.572-2.357-2.6-6.949-9.387-6.664-9.874.122-.163 1.178-.813 2.356-1.504 1.138-.65 5.446-3.129 9.509-5.485l7.355-4.267 1.544 2.276c2.154 3.29 6.867 7.801 9.712 9.305 8.167 4.307 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.501-1.99-2.845-6.054-5.242-17.595-10.24-13.206-5.69-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.617-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.659 26.25-24.3 4.51-.853 14.994-.528 19.424.569Z"/>
        </svg>
      );
    case 'React':
      return (
        <svg className={iconClass} viewBox="-11.5 -10.232 23 20.463">
          <circle r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'Vite':
      return (
        <svg className={iconClass} viewBox="0 0 256 257">
          <defs>
            <linearGradient id="viteLogoSmall1" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stopColor="#41D1FF"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
            <linearGradient id="viteLogoSmall2" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
              <stop offset="0%" stopColor="#FFEA83"/>
              <stop offset="8.333%" stopColor="#FFDD35"/>
              <stop offset="100%" stopColor="#FFA800"/>
            </linearGradient>
          </defs>
          <path fill="url(#viteLogoSmall1)" d="m255.153 37.938-134.897 236.241c-1.654 2.898-5.78 2.898-7.434 0L-.275 37.938c-1.753-3.072.393-6.875 3.88-6.875L251.273 31.063c3.487 0 5.633 3.803 3.88 6.875Z"/>
          <path fill="url(#viteLogoSmall2)" d="m135.072 0 105.276 186.064-1.431 2.51-133.69-73.485a6.63 6.63 0 0 1-3.228-5.717V18.056c0-4.915 5.913-7.337 9.373-3.838l23.7 27.782Z"/>
        </svg>
      );
    case 'Astro':
      return (
        <svg className={iconClass} viewBox="0 0 256 366">
          <defs>
            <linearGradient id="astroLogoSmall" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF"/>
              <stop offset="100%" stopColor="#FFF" stopOpacity=".5"/>
            </linearGradient>
          </defs>
          <path fill="url(#astroLogoSmall)" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/>
          <path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"/>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={iconClass} viewBox="0 0 256 154">
          <defs>
            <linearGradient id="tailwindLogoSmall1" x1="-2.778%" x2="100%" y1="32%" y2="67.556%">
              <stop offset="0%" stopColor="#2298BD"/>
              <stop offset="100%" stopColor="#0ED7B5"/>
            </linearGradient>
          </defs>
          <path fill="url(#tailwindLogoSmall1)" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function OptimizedLazyCard({ item, delay = 0, onDownload }: OptimizedLazyCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialCheck, setIsInitialCheck] = useState(true);
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading with animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isInitialCheck) {
              setIsVisible(true);
              setIsInitialCheck(false);
            } else {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            }
            observer.unobserve(entry.target);
          } else if (isInitialCheck) {
            setIsInitialCheck(false);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '200px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, isInitialCheck]);

  // Lazy load component when visible
  useEffect(() => {
    if (isVisible && !Component) {
      const componentFileName = getComponentFileName(item.id);

      import(`./examples/${componentFileName}.tsx`)
        .then((module) => {
          setComponent(() => module.default);
        })
        .catch((err) => {
          console.error(`Failed to load component ${item.id}:`, err);
        });
    }
  }, [isVisible, item.id, Component]);

  const handleDownload = () => {
    onDownload(item.code, item.title);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(item.code);
      setToast({ show: true, message: '¡Código copiado al portapapeles!', type: 'success' });
    } catch (err) {
      console.error('Error al copiar:', err);
      setToast({ show: true, message: 'Error al copiar el código', type: 'error' });
    }
  };

  const heightClasses = {
    'normal': 'min-h-[380px]',
    'wide': 'min-h-[380px]',
    'tall': 'min-h-[780px]',
    'large': 'min-h-[780px]',
  }[item.gridSize || 'normal'];

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delay}ms`,
      }}
    >
      <div className="group relative bg-slate-900/30 backdrop-blur-xl rounded-3xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        </div>

        {/* Action Buttons - Top Right */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 group/btn cursor-pointer"
            title="Ver código completo"
          >
            <svg className="w-5 h-5 text-slate-300 group-hover/btn:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="p-2.5 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 group/btn cursor-pointer"
            title="Descargar componente"
          >
            <svg className="w-5 h-5 text-slate-300 group-hover/btn:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        {/* Preview Area */}
        <div className={`relative z-10 ${heightClasses} overflow-hidden`}>
          <div className="w-full h-full p-12 overflow-auto scrollbar-custom">
            <style>{`
              .preview-disabled input,
              .preview-disabled textarea,
              .preview-disabled select,
              .preview-disabled button:not([type="button"]):not([type="submit"]):not([type="reset"]) {
                pointer-events: none !important;
                opacity: 0.7;
                cursor: not-allowed;
              }
              .preview-disabled input[type="file"] {
                pointer-events: none !important;
                opacity: 0.7;
              }
              .preview-disabled a {
                pointer-events: none !important;
                cursor: default;
              }

              /* Custom scrollbar styles */
              .scrollbar-custom::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }
              .scrollbar-custom::-webkit-scrollbar-track {
                background: rgba(15, 23, 42, 0.3);
                border-radius: 4px;
              }
              .scrollbar-custom::-webkit-scrollbar-thumb {
                background: rgba(100, 116, 139, 0.5);
                border-radius: 4px;
                transition: background 0.3s ease;
              }
              .scrollbar-custom::-webkit-scrollbar-thumb:hover {
                background: rgba(148, 163, 184, 0.7);
              }
              .scrollbar-custom::-webkit-scrollbar-corner {
                background: rgba(15, 23, 42, 0.3);
              }

              /* Firefox scrollbar */
              .scrollbar-custom {
                scrollbar-width: thin;
                scrollbar-color: rgba(100, 116, 139, 0.5) rgba(15, 23, 42, 0.3);
              }

              /* Smooth scroll behavior */
              .scrollbar-custom {
                scroll-behavior: smooth;
              }
            `}</style>
            <div className="preview-disabled flex items-center justify-center min-h-full">
              {!isVisible ? (
                <div className="text-slate-500 text-sm text-center">Cargando...</div>
              ) : Component ? (
                <Suspense fallback={<div className="text-slate-500 text-sm text-center">Cargando componente...</div>}>
                  <Component />
                </Suspense>
              ) : (
                <div className="text-slate-500 text-sm text-center">Cargando componente...</div>
              )}
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-slate-900/95 via-slate-900/90 to-transparent backdrop-blur-sm pointer-events-none">
          {/* Category and Title */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <CategoryIcon category={item.category} />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.category}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 leading-tight line-clamp-2">{item.title}</h3>
          </div>

          {/* Technologies */}
          {item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg"
                >
                  <TechIconSmall name={tech} />
                  <span className="text-xs font-medium text-slate-300">{tech}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={item.title}
        description={item.description}
        code={item.code}
        category={item.category}
        technologies={item.technologies}
        onDownload={handleDownload}
        onCopy={handleCopyCode}
        gridSize={item.gridSize}
      >
        {null}
      </Modal>

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
}

// Helper para obtener el nombre del archivo del componente
function getComponentFileName(id: string): string {
  const parts = id.split('-');
  const name = parts.map((part) => {
    if (!isNaN(Number(part))) {
      return part;
    }
    if (part.toLowerCase() === 'js') {
      return 'JS';
    }
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join('');

  return `${name}Example`;
}
