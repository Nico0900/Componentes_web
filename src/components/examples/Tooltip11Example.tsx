import { useState } from 'react';

export default function Tooltip11Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all"
        >
          Icon Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Tooltip with icon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip11Code = `import { useState } from 'react';

export default function Tooltip11Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all"
        >
          Icon Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>Tooltip with icon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
