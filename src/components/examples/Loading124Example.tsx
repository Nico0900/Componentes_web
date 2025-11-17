export default function Loading124Example() {
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
    </div>
  );
}

export const loading124Code = `export default function Loading124Example() {
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
    </div>
  );
}`;
