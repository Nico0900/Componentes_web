export default function Loading129Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .overlay-spinner {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        `}
      </style>

      {/* Full Page Overlay Example 5 - Gradient Spinner */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg flex flex-col items-center justify-center gap-4" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <svg className="overlay-spinner" width="60" height="60" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#spinner-gradient)"
              strokeWidth="8"
            />
          </svg>
          <span className="text-slate-300 font-medium">Loading content...</span>
        </div>
      </div>
    </div>
  );
}

export const loading129Code = `export default function Loading129Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\\\`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .overlay-spinner {
            border: 4px solid rgba(148, 163, 184, 0.3);
            border-top-color: #8b5cf6;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
        \\\`}
      </style>

      {/* Full Page Overlay Example 5 - Gradient Spinner */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg flex flex-col items-center justify-center gap-4" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <svg className="overlay-spinner" width="60" height="60" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#spinner-gradient)"
              strokeWidth="8"
            />
          </svg>
          <span className="text-slate-300 font-medium">Loading content...</span>
        </div>
      </div>
    </div>
  );
}`;
