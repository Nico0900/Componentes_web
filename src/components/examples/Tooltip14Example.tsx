import { useState } from 'react';

export default function Tooltip14Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all"
        >
          Custom Styled
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-sm rounded-xl whitespace-nowrap shadow-2xl border-2 border-white/20">
            <div className="font-bold">Custom styled tooltip!</div>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip14Code = `import { useState } from 'react';

export default function Tooltip14Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[200px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all"
        >
          Custom Styled
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-sm rounded-xl whitespace-nowrap shadow-2xl border-2 border-white/20">
            <div className="font-bold">Custom styled tooltip!</div>
          </div>
        )}
      </div>
    </div>
  );
}`;
