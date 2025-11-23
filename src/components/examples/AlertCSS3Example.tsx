export default function AlertCSS3Example() {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .alert-gradient-bg {
          background: linear-gradient(270deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15));
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes icon-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .alert-icon-spin:hover {
          animation: icon-spin 1s linear infinite;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto alert-gradient-bg border border-blue-500/30 rounded-2xl p-5 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full alert-icon-spin">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-300 text-lg">Syncing Data</h4>
            <p className="text-sm text-slate-300">Your data is being synchronized across devices...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss3Code = `export default function AlertCSS3Example() {
  return (
    <>
      <style>{\`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .alert-gradient-bg {
          background: linear-gradient(270deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), rgba(236, 72, 153, 0.15));
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes icon-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .alert-icon-spin:hover {
          animation: icon-spin 1s linear infinite;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto alert-gradient-bg border border-blue-500/30 rounded-2xl p-5 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full alert-icon-spin">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-300 text-lg">Syncing Data</h4>
            <p className="text-sm text-slate-300">Your data is being synchronized across devices...</p>
          </div>
        </div>
      </div>
    </>
  );
}`;
