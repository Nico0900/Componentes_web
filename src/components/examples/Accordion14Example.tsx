import { useState } from 'react';

export default function Accordion14Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Premium Design', content: 'Features a sophisticated gradient background with custom styling that makes your content stand out with elegance.' },
    { title: 'Modern Aesthetics', content: 'Combines vibrant colors and smooth transitions to create a visually appealing and modern user interface.' },
    { title: 'Eye-Catching', content: 'The gradient effect draws attention while maintaining readability and professional appearance.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              openIndex === index
                ? 'border-purple-500/50 shadow-xl shadow-purple-500/20'
                : 'border-transparent'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full px-5 py-4 text-left flex items-center justify-between transition-all duration-300 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-blue-600/30`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'scale-110' : 'scale-100'
                }`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-slate-100 font-semibold">{item.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
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
              <div className="px-5 py-4 text-slate-300 text-sm bg-slate-800/50 border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion14Code = `import { useState } from 'react';

export default function Accordion14Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Premium Design', content: 'Features a sophisticated gradient background with custom styling that makes your content stand out with elegance.' },
    { title: 'Modern Aesthetics', content: 'Combines vibrant colors and smooth transitions to create a visually appealing and modern user interface.' },
    { title: 'Eye-Catching', content: 'The gradient effect draws attention while maintaining readability and professional appearance.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={\`rounded-lg overflow-hidden border-2 transition-all duration-300 \${
              openIndex === index
                ? 'border-purple-500/50 shadow-xl shadow-purple-500/20'
                : 'border-transparent'
            }\`}
          >
            <button
              onClick={() => toggleItem(index)}
              className={\`w-full px-5 py-4 text-left flex items-center justify-between transition-all duration-300 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 hover:from-purple-600/30 hover:via-pink-600/30 hover:to-blue-600/30\`}
            >
              <div className="flex items-center gap-3">
                <div className={\`w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 \${
                  openIndex === index ? 'scale-110' : 'scale-100'
                }\`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-slate-100 font-semibold">{item.title}</span>
              </div>
              <svg
                className={\`w-5 h-5 text-purple-400 transition-transform duration-300 \${
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
              <div className="px-5 py-4 text-slate-300 text-sm bg-slate-800/50 border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;