import { useState } from 'react';

export default function Accordion4Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Design System', content: 'A comprehensive design system with consistent patterns, components, and guidelines for building cohesive user interfaces.' },
    { title: 'Component Library', content: 'Pre-built, tested components that follow best practices and design principles. Ready to use in your projects.' },
    { title: 'Documentation', content: 'Detailed documentation with examples, API references, and best practices for each component in the library.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="border border-slate-700/50 rounded-lg overflow-hidden bg-slate-900/50">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors ${
                index !== 0 ? 'border-t border-slate-700/50' : ''
              }`}
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
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
              <div className="px-4 py-3 text-slate-300 text-sm bg-slate-800/30 border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion4Code = `import { useState } from 'react';

export default function Accordion4Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Design System', content: 'A comprehensive design system with consistent patterns, components, and guidelines for building cohesive user interfaces.' },
    { title: 'Component Library', content: 'Pre-built, tested components that follow best practices and design principles. Ready to use in your projects.' },
    { title: 'Documentation', content: 'Detailed documentation with examples, API references, and best practices for each component in the library.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="border border-slate-700/50 rounded-lg overflow-hidden bg-slate-900/50">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleItem(index)}
              className={\`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors \${
                index !== 0 ? 'border-t border-slate-700/50' : ''
              }\`}
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={\`w-5 h-5 text-slate-400 transition-transform duration-300 \${
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
              <div className="px-4 py-3 text-slate-300 text-sm bg-slate-800/30 border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;