export default function Loading15Example() {
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

      {/* Full Page Overlay Example 1 - Basic */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-16 h-16"></div>
        </div>
      </div>

      {/* Full Page Overlay Example 2 - With Text */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-4" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-14 h-14"></div>
          <div className="text-center">
            <h3 className="text-slate-200 font-semibold mb-1">Loading</h3>
            <p className="text-slate-400 text-sm">Please wait...</p>
          </div>
        </div>
      </div>

      {/* Full Page Overlay Example 3 - Card Style */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-md flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="overlay-spinner w-12 h-12"></div>
              <div className="text-center">
                <h3 className="text-slate-200 font-semibold mb-1">Processing</h3>
                <p className="text-slate-400 text-sm">This won't take long</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Page Overlay Example 4 - Progress */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="w-64 flex flex-col items-center gap-4">
            <div className="overlay-spinner w-14 h-14"></div>
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm font-medium">Loading...</span>
                <span className="text-slate-500 text-sm">45%</span>
              </div>
              <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '45%', transition: 'width 0.3s ease' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export const loading15Code = `export default function Loading15Example() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-8">
      <style>
        {\`
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
        \`}
      </style>

      {/* Full Page Overlay Example 1 - Basic */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-16 h-16"></div>
        </div>
      </div>

      {/* Full Page Overlay Example 2 - With Text */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-4" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="overlay-spinner w-14 h-14"></div>
          <div className="text-center">
            <h3 className="text-slate-200 font-semibold mb-1">Loading</h3>
            <p className="text-slate-400 text-sm">Please wait...</p>
          </div>
        </div>
      </div>

      {/* Full Page Overlay Example 3 - Card Style */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-md flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="overlay-spinner w-12 h-12"></div>
              <div className="text-center">
                <h3 className="text-slate-200 font-semibold mb-1">Processing</h3>
                <p className="text-slate-400 text-sm">This won't take long</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Page Overlay Example 4 - Progress */}
      <div className="relative w-full max-w-md h-64 bg-slate-800/40 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex items-center justify-center" style={{ animation: 'fade-in 0.3s ease-out' }}>
          <div className="w-64 flex flex-col items-center gap-4">
            <div className="overlay-spinner w-14 h-14"></div>
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="text-slate-300 text-sm font-medium">Loading...</span>
                <span className="text-slate-500 text-sm">45%</span>
              </div>
              <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '45%', transition: 'width 0.3s ease' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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