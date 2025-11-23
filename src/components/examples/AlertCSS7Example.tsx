export default function AlertCSS7Example() {
  return (
    <>
      <style>{`
        @keyframes fade-scale {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-fade-scale {
          animation: fade-scale 0.4s ease-out;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .alert-shimmer {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(16, 185, 129, 0.1) 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-emerald-600/10 border border-emerald-500/30 rounded-xl p-5 alert-fade-scale alert-shimmer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2.5 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300">Backup Complete</h4>
              <p className="text-sm text-emerald-200/80">All files backed up successfully</p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
            Done
          </span>
        </div>
      </div>
    </>
  );
}

export const alertcss7Code = `export default function AlertCSS7Example() {
  return (
    <>
      <style>{\`
        @keyframes fade-scale {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-fade-scale {
          animation: fade-scale 0.4s ease-out;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .alert-shimmer {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(16, 185, 129, 0.1) 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-emerald-600/10 border border-emerald-500/30 rounded-xl p-5 alert-fade-scale alert-shimmer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2.5 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-emerald-300">Backup Complete</h4>
              <p className="text-sm text-emerald-200/80">All files backed up successfully</p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
            Done
          </span>
        </div>
      </div>
    </>
  );
}`;
