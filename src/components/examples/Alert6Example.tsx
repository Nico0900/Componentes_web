import { useState } from 'react';

export default function Alert6Example() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <button
          onClick={() => setIsVisible(true)}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg transition-colors duration-200"
        >
          Show Alert
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-green-600/20 border border-green-500/30 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <h4 className="font-semibold text-green-200 mb-1">Success!</h4>
          <p className="text-sm text-green-300/90">Your profile has been updated successfully.</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-green-400 hover:text-green-300 transition-colors duration-200 p-1 hover:bg-green-600/20 rounded"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export const alert6Code = `import { useState } from 'react';

export default function Alert6Example() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <button
          onClick={() => setIsVisible(true)}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg transition-colors duration-200"
        >
          Show Alert
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-green-600/20 border border-green-500/30 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <h4 className="font-semibold text-green-200 mb-1">Success!</h4>
          <p className="text-sm text-green-300/90">Your profile has been updated successfully.</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-green-400 hover:text-green-300 transition-colors duration-200 p-1 hover:bg-green-600/20 rounded"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}`;
