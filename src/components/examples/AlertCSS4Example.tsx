export default function AlertCSS4Example() {
  return (
    <>
      <style>{`
        @keyframes border-dance {
          0%, 100% { border-color: rgba(251, 191, 36, 0.5); }
          25% { border-color: rgba(245, 158, 11, 0.5); }
          50% { border-color: rgba(251, 191, 36, 0.5); }
          75% { border-color: rgba(245, 158, 11, 0.5); }
        }
        .alert-border-dance {
          animation: border-dance 2s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .alert-shake:hover {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-amber-600/15 border-2 rounded-xl p-5 alert-border-dance alert-shake">
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 p-2.5 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-amber-300 mb-1">Caution Required</h4>
            <p className="text-sm text-amber-200/80 mb-3">This action cannot be undone. Please proceed with caution.</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors">Continue</button>
              <button className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium rounded-lg transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss4Code = `export default function AlertCSS4Example() {
  return (
    <>
      <style>{\`
        @keyframes border-dance {
          0%, 100% { border-color: rgba(251, 191, 36, 0.5); }
          25% { border-color: rgba(245, 158, 11, 0.5); }
          50% { border-color: rgba(251, 191, 36, 0.5); }
          75% { border-color: rgba(245, 158, 11, 0.5); }
        }
        .alert-border-dance {
          animation: border-dance 2s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        .alert-shake:hover {
          animation: shake 0.5s ease-in-out;
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-amber-600/15 border-2 rounded-xl p-5 alert-border-dance alert-shake">
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 p-2.5 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-amber-300 mb-1">Caution Required</h4>
            <p className="text-sm text-amber-200/80 mb-3">This action cannot be undone. Please proceed with caution.</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors">Continue</button>
              <button className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium rounded-lg transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
