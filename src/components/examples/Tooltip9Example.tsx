import { useState } from 'react';

export default function Tooltip9Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all"
        >
          Dark Theme
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-950 border border-slate-800 text-white text-sm rounded-lg whitespace-nowrap shadow-2xl">
            Dark themed tooltip
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip9Code = `import { useState } from 'react';

export default function Tooltip9Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all"
        >
          Dark Theme
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-slate-950 border border-slate-800 text-white text-sm rounded-lg whitespace-nowrap shadow-2xl">
            Dark themed tooltip
          </div>
        )}
      </div>
    </div>
  );
}`;
