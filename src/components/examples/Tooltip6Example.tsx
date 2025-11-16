import { useState } from 'react';

export default function Tooltip6Example() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all"
        >
          Interactive Tooltip
        </button>

        {isVisible && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <p className="mb-2">Click the button below!</p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-all"
            >
              Clicked {count} times
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip6Code = `import { useState } from 'react';

export default function Tooltip6Example() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all"
        >
          Interactive Tooltip
        </button>

        {isVisible && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <p className="mb-2">Click the button below!</p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded transition-all"
            >
              Clicked {count} times
            </button>
          </div>
        )}
      </div>
    </div>
  );
}`;
