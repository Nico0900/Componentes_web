import { useState } from 'react';

export default function Tooltip7Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[300px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all"
        >
          Large Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 px-5 py-4 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
            <h3 className="font-bold text-lg text-violet-400 mb-2">Large Tooltip Example</h3>
            <p className="text-slate-300 mb-3">
              This is a larger tooltip that can contain much more content. It's perfect for
              displaying detailed information, instructions, or help text.
            </p>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Feature enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fully responsive</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip7Code = `import { useState } from 'react';

export default function Tooltip7Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[300px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all"
        >
          Large Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 px-5 py-4 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
            <h3 className="font-bold text-lg text-violet-400 mb-2">Large Tooltip Example</h3>
            <p className="text-slate-300 mb-3">
              This is a larger tooltip that can contain much more content. It's perfect for
              displaying detailed information, instructions, or help text.
            </p>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Feature enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fully responsive</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
