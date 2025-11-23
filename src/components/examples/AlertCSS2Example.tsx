export default function AlertCSS2Example() {
  return (
    <>
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-bounce {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .alert-shadow-pulse {
          animation: shadow-pulse 2s infinite;
        }
        @keyframes shadow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-red-600/15 border-2 border-red-500/50 rounded-2xl p-5 alert-bounce alert-shadow-pulse">
        <div className="flex items-start gap-4">
          <div className="bg-red-500 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-red-300 text-lg mb-1">Security Alert!</h4>
            <p className="text-sm text-red-200/80">Suspicious activity detected on your account.</p>
            <button className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
              Review Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss2Code = `export default function AlertCSS2Example() {
  return (
    <>
      <style>{\`
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        .alert-bounce {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .alert-shadow-pulse {
          animation: shadow-pulse 2s infinite;
        }
        @keyframes shadow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-red-600/15 border-2 border-red-500/50 rounded-2xl p-5 alert-bounce alert-shadow-pulse">
        <div className="flex items-start gap-4">
          <div className="bg-red-500 p-3 rounded-xl">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-red-300 text-lg mb-1">Security Alert!</h4>
            <p className="text-sm text-red-200/80">Suspicious activity detected on your account.</p>
            <button className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">
              Review Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
}`;
