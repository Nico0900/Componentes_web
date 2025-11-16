import { useState } from 'react';

export default function Accordion10Example() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const items = [
    { title: 'Always Open Item', content: 'This first item is always open and cannot be closed. It ensures at least one section is visible at all times.' },
    { title: 'Optional Item 1', content: 'This item can be toggled open and closed freely. Click the header to expand or collapse this section.' },
    { title: 'Optional Item 2', content: 'Another optional item that can be opened or closed independently of the other sections.' },
  ];

  const toggleItem = (index: number) => {
    if (index === 0) return; // First item always stays open

    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                index === 0 ? 'cursor-default' : 'hover:bg-slate-700/30 cursor-pointer'
              }`}
            >
              <span className="text-slate-100 font-medium flex items-center gap-2">
                {item.title}
                {index === 0 && (
                  <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    Always Open
                  </span>
                )}
              </span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  openIndexes.includes(index) ? 'rotate-180' : ''
                } ${index === 0 ? 'opacity-50' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndexes.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-4 py-3 text-slate-300 text-sm border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion10Code = `import { useState } from 'react';

export default function Accordion10Example() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const items = [
    { title: 'Always Open Item', content: 'This first item is always open and cannot be closed. It ensures at least one section is visible at all times.' },
    { title: 'Optional Item 1', content: 'This item can be toggled open and closed freely. Click the header to expand or collapse this section.' },
    { title: 'Optional Item 2', content: 'Another optional item that can be opened or closed independently of the other sections.' },
  ];

  const toggleItem = (index: number) => {
    if (index === 0) return; // First item always stays open

    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className={\`w-full px-4 py-3 text-left flex items-center justify-between transition-colors \${
                index === 0 ? 'cursor-default' : 'hover:bg-slate-700/30 cursor-pointer'
              }\`}
            >
              <span className="text-slate-100 font-medium flex items-center gap-2">
                {item.title}
                {index === 0 && (
                  <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    Always Open
                  </span>
                )}
              </span>
              <svg
                className={\`w-5 h-5 text-slate-400 transition-transform duration-300 \${
                  openIndexes.includes(index) ? 'rotate-180' : ''
                } \${index === 0 ? 'opacity-50' : ''}\`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={\`transition-all duration-300 ease-in-out \${
                openIndexes.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div className="px-4 py-3 text-slate-300 text-sm border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;