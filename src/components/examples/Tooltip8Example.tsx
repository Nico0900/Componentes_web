import { useState } from 'react';

export default function Tooltip8Example() {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('blue')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
        >
          Blue
        </button>
        {visibleTooltip === 'blue' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Blue tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('green')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
        >
          Green
        </button>
        {visibleTooltip === 'green' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Green tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('red')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all"
        >
          Red
        </button>
        {visibleTooltip === 'red' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Red tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('purple')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Purple
        </button>
        {visibleTooltip === 'purple' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Purple tooltip
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip8Code = `import { useState } from 'react';

export default function Tooltip8Example() {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('blue')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
        >
          Blue
        </button>
        {visibleTooltip === 'blue' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Blue tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('green')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
        >
          Green
        </button>
        {visibleTooltip === 'green' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Green tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('red')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all"
        >
          Red
        </button>
        {visibleTooltip === 'red' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-red-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Red tooltip
          </div>
        )}
      </div>

      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('purple')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Purple
        </button>
        {visibleTooltip === 'purple' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Purple tooltip
          </div>
        )}
      </div>
    </div>
  );
}`;
