export default function AlertCSS1Example() {
  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .alert-slide-in {
          animation: slideInRight 0.5s ease-out;
        }
        .alert-glow {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }
      `}</style>
      <div className="w-full max-w-md mx-auto bg-emerald-600/15 border border-emerald-500/40 rounded-xl p-5 alert-slide-in alert-glow">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-emerald-300 text-lg">Payment Successful</h4>
            <p className="text-sm text-emerald-200/80">Your transaction has been processed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const alertcss1Code = `export default function AlertCSS1Example() {
  return (
    <>
      <style>{\`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .alert-slide-in {
          animation: slideInRight 0.5s ease-out;
        }
        .alert-glow {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }
      \`}</style>
      <div className="w-full max-w-md mx-auto bg-emerald-600/15 border border-emerald-500/40 rounded-xl p-5 alert-slide-in alert-glow">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-emerald-300 text-lg">Payment Successful</h4>
            <p className="text-sm text-emerald-200/80">Your transaction has been processed</p>
          </div>
        </div>
      </div>
    </>
  );
}`;
