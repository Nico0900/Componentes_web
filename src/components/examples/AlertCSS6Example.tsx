export default function AlertCSS6Example() {
  return (
    <>
      <style>{`
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .alert-slide-down {
          animation: slide-down 0.5s ease-out;
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .alert-progress {
          animation: progress-bar 5s linear;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden alert-slide-down">
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="bg-cyan-500/20 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-cyan-300 mb-1">Processing Request</h4>
              <p className="text-sm text-slate-300">Your request is being processed. This may take a few moments.</p>
            </div>
          </div>
        </div>
        <div className="h-1 bg-slate-700">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 alert-progress"></div>
        </div>
      </div>
    </>
  );
}

export const alertcss6Code = `export default function AlertCSS6Example() {
  return (
    <>
      <style>{\`
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .alert-slide-down {
          animation: slide-down 0.5s ease-out;
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .alert-progress {
          animation: progress-bar 5s linear;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-slate-800/80 border border-slate-700 rounded-xl overflow-hidden alert-slide-down">
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="bg-cyan-500/20 p-2.5 rounded-lg">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-cyan-300 mb-1">Processing Request</h4>
              <p className="text-sm text-slate-300">Your request is being processed. This may take a few moments.</p>
            </div>
          </div>
        </div>
        <div className="h-1 bg-slate-700">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 alert-progress"></div>
        </div>
      </div>
    </>
  );
}`;
