import { useState } from 'react';

export default function Accordion13Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Compact Item 1', content: 'Minimal spacing for dense information display.' },
    { title: 'Compact Item 2', content: 'Perfect for mobile or sidebar layouts.' },
    { title: 'Compact Item 3', content: 'Saves screen space while staying functional.' },
    { title: 'Compact Item 4', content: 'Ideal for lists with many items.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors text-sm"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-3 py-2 text-slate-300 text-xs border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion13Code = `import { useState } from 'react';

export default function Accordion13Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Compact Item 1', content: 'Minimal spacing for dense information display.' },
    { title: 'Compact Item 2', content: 'Perfect for mobile or sidebar layouts.' },
    { title: 'Compact Item 3', content: 'Saves screen space while staying functional.' },
    { title: 'Compact Item 4', content: 'Ideal for lists with many items.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors text-sm"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={\`w-4 h-4 text-slate-400 transition-transform duration-300 \${
                  openIndex === index ? 'rotate-180' : ''
                }\`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={\`transition-all duration-300 ease-in-out \${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div className="px-3 py-2 text-slate-300 text-xs border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;