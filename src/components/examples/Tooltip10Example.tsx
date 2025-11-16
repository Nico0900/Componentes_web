import { useState } from 'react';

export default function Tooltip10Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium rounded-lg transition-all"
        >
          Light Theme
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-white border border-slate-200 text-slate-900 text-sm rounded-lg whitespace-nowrap shadow-lg">
            Light themed tooltip
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip10Code = `import { useState } from 'react';

export default function Tooltip10Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium rounded-lg transition-all"
        >
          Light Theme
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-white border border-slate-200 text-slate-900 text-sm rounded-lg whitespace-nowrap shadow-lg">
            Light themed tooltip
          </div>
        )}
      </div>
    </div>
  );
}`;
