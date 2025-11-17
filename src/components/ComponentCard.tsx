import { useState } from 'react';
import Modal from './Modal';
import Toast from './Toast';

interface ComponentCardProps {
  title: string;
  description: string;
  code: string;
  category?: string;
  technologies?: string[];
  children?: React.ReactNode;
  gridSize?: 'normal' | 'wide' | 'tall' | 'large';
}

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

// Category Icon Component for Cards (colorful version)
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
    case 'Navs':
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
    case 'Accordions':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="3" rx="1" fill="#14b8a6"/>
          <rect x="4" y="10" width="16" height="3" rx="1" fill="#2dd4bf"/>
          <rect x="4" y="16" width="16" height="3" rx="1" fill="#5eead4"/>
          <path d="M18 7L16 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'Carousels':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="6" y="6" width="12" height="12" rx="2" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1.5"/>
          <path d="M10 12l4-3v6l-4-3z" fill="white"/>
          <circle cx="4" cy="12" r="1.5" fill="#fed7aa"/>
          <circle cx="20" cy="12" r="1.5" fill="#fed7aa"/>
        </svg>
      );
    case 'Feedback':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" fill="#10b981" stroke="#34d399" strokeWidth="1.5"/>
          <path d="M8 12l2 2l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'Notifications':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M12 5C10.3 5 9 6.3 9 8v3c0 1-1 2-2 2v1h10v-1c-1 0-2-1-2-2V8c0-1.7-1.3-3-3-3z" fill="#ef4444" stroke="#f87171" strokeWidth="1.5"/>
          <circle cx="12" cy="17" r="1" fill="#fca5a5"/>
          <circle cx="16" cy="7" r="2" fill="#dc2626"/>
        </svg>
      );
    case 'Paginations':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="4" y="10" width="3" height="4" rx="1" fill="#3b82f6"/>
          <rect x="9" y="10" width="3" height="4" rx="1" fill="#60a5fa"/>
          <rect x="14" y="10" width="3" height="4" rx="1" fill="#93c5fd"/>
          <circle cx="19" cy="12" r="1" fill="#dbeafe"/>
        </svg>
      );
    case 'Search':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <circle cx="10" cy="10" r="6" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
          <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="10" r="3" fill="#c4b5fd" opacity="0.5"/>
        </svg>
      );
    case 'Stats':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="14" width="3" height="5" rx="1" fill="#06b6d4"/>
          <rect x="10" y="10" width="3" height="9" rx="1" fill="#22d3ee"/>
          <rect x="15" y="6" width="3" height="13" rx="1" fill="#67e8f9"/>
        </svg>
      );
    case 'Timelines':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <line x1="7" y1="6" x2="7" y2="18" stroke="#a855f7" strokeWidth="2"/>
          <circle cx="7" cy="6" r="2" fill="#c084fc"/>
          <circle cx="7" cy="12" r="2" fill="#d8b4fe"/>
          <circle cx="7" cy="18" r="2" fill="#e9d5ff"/>
          <line x1="9" y1="6" x2="17" y2="6" stroke="#e9d5ff" strokeWidth="1.5"/>
          <line x1="9" y1="12" x2="17" y2="12" stroke="#e9d5ff" strokeWidth="1.5"/>
        </svg>
      );
    case 'Tooltips':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="6" y="4" width="12" height="7" rx="1.5" fill="#64748b" stroke="#94a3b8" strokeWidth="1.5"/>
          <path d="M12 11L10 13h4l-2-2z" fill="#94a3b8"/>
          <circle cx="12" cy="7" r="1.5" fill="white"/>
        </svg>
      );
    case 'UI Elements':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="5" width="6" height="6" rx="1" fill="#f43f5e"/>
          <rect x="13" y="5" width="6" height="6" rx="1" fill="#fb7185"/>
          <rect x="5" y="13" width="6" height="6" rx="1" fill="#fda4af"/>
          <rect x="13" y="13" width="6" height="6" rx="1" fill="#fecdd3"/>
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

// Tech Icon Component for Cards (colorful version)
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
    default:
      return null;
  }
}

export default function ComponentCard({
  title,
  description,
  code,
  category = 'General',
  technologies = [],
  children,
  gridSize = 'normal'
}: ComponentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  // Dynamic height based on grid size
  const heightClasses = {
    'normal': 'min-h-[380px]',
    'wide': 'min-h-[380px]',
    'tall': 'min-h-[780px]', // Double height for tall
    'large': 'min-h-[780px]', // Double height for large
  }[gridSize];

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
      setToast({ show: true, message: 'Código copiado al portapapeles!', type: 'success' });
    } catch (err) {
      console.error('Error al copiar:', err);
      setToast({ show: true, message: 'Error al copiar el código', type: 'error' });
    }
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-slate-900/30 backdrop-blur-xl rounded-3xl border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer flex flex-col"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        </div>

        {/* Category Badge - Top Right */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div
            className="p-2.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg"
            title={category}
          >
            <CategoryIcon category={category} />
          </div>
        </div>

        {/* Preview Area */}
        <div className={`p-12 flex-1 flex items-center justify-center relative z-10 ${heightClasses}`}>
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Technologies Badge - Bottom Left */}
        {technologies.length > 0 && (
          <div className="absolute bottom-4 left-4 flex gap-2 z-20 pointer-events-none">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg"
                title={tech}
              >
                <TechIconSmall name={tech} />
              </div>
            ))}
          </div>
        )}

        {/* Download Button - Bottom Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDownload();
          }}
          className="absolute bottom-4 right-4 z-20 p-3 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm border border-slate-700/50 rounded-lg transition-all duration-300 shadow-lg hover:scale-110 group/btn"
          title="Descargar componente"
        >
          <svg className="w-5 h-5 text-slate-300 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        code={code}
        category={category}
        technologies={technologies}
        onDownload={handleDownload}
        onCopy={handleCopyCode}
      >
        {children}
      </Modal>

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </>
  );
}
