import { useState } from 'react';

export default function Tooltip4Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[250px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all"
        >
          Rich Content Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
            <div className="font-bold text-purple-400 mb-2">Rich Tooltip</div>
            <p className="text-slate-300 mb-2">This tooltip contains <strong className="text-white">formatted text</strong> and multiple elements.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export const tooltip4Code = `import { useState } from 'react';

export default function Tooltip4Example() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6 min-h-[250px]">
      <div className="relative inline-block">
        <button
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all"
        >
          Rich Content Tooltip
        </button>

        {isVisible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 px-4 py-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
            <div className="font-bold text-purple-400 mb-2">Rich Tooltip</div>
            <p className="text-slate-300 mb-2">This tooltip contains <strong className="text-white">formatted text</strong> and multiple elements.</p>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}`;
