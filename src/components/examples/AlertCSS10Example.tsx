export default function AlertCSS10Example() {
  return (
    <>
      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .alert-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .alert-icon-rotate {
          animation: rotate-360 2s linear infinite;
        }
        @keyframes background-pan {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .alert-bg-pan {
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.15) 50%, rgba(6, 182, 212, 0.1) 100%);
          background-size: 200% 100%;
          animation: background-pan 3s linear infinite;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto border border-cyan-500/30 rounded-2xl p-5 alert-slide-up alert-bg-pan">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-full">
            <svg className="w-6 h-6 text-cyan-400 alert-icon-rotate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-cyan-300 text-lg mb-1">System Processing</h4>
            <p className="text-sm text-cyan-200/80">Your request is being processed in the background</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-2 bg-cyan-900/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-3/4 rounded-full"></div>
          </div>
          <span className="text-xs text-cyan-400 font-medium">75%</span>
        </div>
      </div>
    </>
  );
}

export const alertcss10Code = `export default function AlertCSS10Example() {
  return (
    <>
      <style>{\`
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .alert-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .alert-icon-rotate {
          animation: rotate-360 2s linear infinite;
        }
        @keyframes background-pan {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .alert-bg-pan {
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.15) 50%, rgba(6, 182, 212, 0.1) 100%);
          background-size: 200% 100%;
          animation: background-pan 3s linear infinite;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto border border-cyan-500/30 rounded-2xl p-5 alert-slide-up alert-bg-pan">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/20 p-3 rounded-full">
            <svg className="w-6 h-6 text-cyan-400 alert-icon-rotate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-cyan-300 text-lg mb-1">System Processing</h4>
            <p className="text-sm text-cyan-200/80">Your request is being processed in the background</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-2 bg-cyan-900/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-3/4 rounded-full"></div>
          </div>
          <span className="text-xs text-cyan-400 font-medium">75%</span>
        </div>
      </div>
    </>
  );
}`;
