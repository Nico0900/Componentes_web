import { useState } from 'react';

export default function Tooltip1Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Hover me
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            This is a basic tooltip
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip1Code = `import { useState } from 'react';

export default function Tooltip1Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Hover me
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            This is a basic tooltip
          </div>
        )}
      </div>
    </div>
  );
}`;
