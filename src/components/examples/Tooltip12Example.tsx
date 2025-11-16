import { useState } from 'react';

export default function Tooltip12Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all"
        >
          Multi-line Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg">
            <div className="space-y-1">
              <div>This is a multi-line tooltip.</div>
              <div>It can display multiple lines of text.</div>
              <div className="text-amber-400">Perfect for detailed info!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip12Code = `import { useState } from 'react';

export default function Tooltip12Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all"
        >
          Multi-line Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg">
            <div className="space-y-1">
              <div>This is a multi-line tooltip.</div>
              <div>It can display multiple lines of text.</div>
              <div className="text-amber-400">Perfect for detailed info!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;
