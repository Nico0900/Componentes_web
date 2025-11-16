import { useState } from 'react';

export default function Tooltip3Example() {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center p-6 min-h-[300px]">
      {/* Top */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('top')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Top
        </button>
        {visibleTooltip === 'top' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on top
          </div>
        )}
      </div>

      {/* Right */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('right')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
        >
          Right
        </button>
        {visibleTooltip === 'right' && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on right
          </div>
        )}
      </div>

      {/* Bottom */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('bottom')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all"
        >
          Bottom
        </button>
        {visibleTooltip === 'bottom' && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on bottom
          </div>
        )}
      </div>

      {/* Left */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('left')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-all"
        >
          Left
        </button>
        {visibleTooltip === 'left' && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on left
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip3Code = `import { useState } from 'react';

export default function Tooltip3Example() {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-8 justify-center items-center p-6 min-h-[300px]">
      {/* Top */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('top')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Top
        </button>
        {visibleTooltip === 'top' && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on top
          </div>
        )}
      </div>

      {/* Right */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('right')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
        >
          Right
        </button>
        {visibleTooltip === 'right' && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on right
          </div>
        )}
      </div>

      {/* Bottom */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('bottom')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all"
        >
          Bottom
        </button>
        {visibleTooltip === 'bottom' && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on bottom
          </div>
        )}
      </div>

      {/* Left */}
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setVisibleTooltip('left')}
          onMouseLeave={() => setVisibleTooltip(null)}
          className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-all"
        >
          Left
        </button>
        {visibleTooltip === 'left' && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap">
            Tooltip on left
          </div>
        )}
      </div>
    </div>
  );
}`;
