import { useState } from 'react';

export default function Tooltip2Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
        >
          Tooltip with Arrow
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
            <div className="relative px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
              Arrow tooltip example
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="border-8 border-transparent border-t-slate-900"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip2Code = `import { useState } from 'react';

export default function Tooltip2Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
        >
          Tooltip with Arrow
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
            <div className="relative px-4 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
              Arrow tooltip example
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="border-8 border-transparent border-t-slate-900"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
