import { useState } from 'react';

export default function Notification1Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative min-h-[300px] w-full max-w-2xl mx-auto p-6">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isVisible ? 'Hide Toast' : 'Show Toast'}
      </button>

      {/* Toast Notification - Bottom Right */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl p-4 min-w-[320px] max-w-md">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-slate-100 font-semibold mb-1">Success!</h4>
                <p className="text-slate-400 text-sm">Your changes have been saved successfully.</p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export const notification1Code = `import { useState } from 'react';

export default function Notification1Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative min-h-[300px] w-full max-w-2xl mx-auto p-6">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isVisible ? 'Hide Toast' : 'Show Toast'}
      </button>

      {/* Toast Notification - Bottom Right */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl p-4 min-w-[320px] max-w-md">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-slate-100 font-semibold mb-1">Success!</h4>
                <p className="text-slate-400 text-sm">Your changes have been saved successfully.</p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{\`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      \`}</style>
    </div>
  );
}`;