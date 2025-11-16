import { useState } from 'react';

export default function Tooltip15Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-flex items-center gap-2">
        <span className="text-slate-300">Need help?</span>
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="w-6 h-6 bg-slate-600 hover:bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold transition-all"
          >
            ?
          </button>

          {isVisible && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
              <div className="font-bold text-sky-400 mb-1">Help Information</div>
              <p className="text-slate-300">
                This is a help tooltip. Click the ? icon for assistance with this feature.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const tooltip15Code = `import { useState } from 'react';

export default function Tooltip15Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-flex items-center gap-2">
        <span className="text-slate-300">Need help?</span>
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="w-6 h-6 bg-slate-600 hover:bg-slate-500 text-white rounded-full flex items-center justify-center text-sm font-bold transition-all"
          >
            ?
          </button>

          {isVisible && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
              <div className="font-bold text-sky-400 mb-1">Help Information</div>
              <p className="text-slate-300">
                This is a help tooltip. Click the ? icon for assistance with this feature.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`;
