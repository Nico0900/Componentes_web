import { useState } from 'react';

export default function Accordion5Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Minimal Design', content: 'Clean and minimal design with no borders or backgrounds. Perfect for a sleek, modern interface.' },
    { title: 'Lightweight', content: 'Minimal markup and styles mean faster loading times and better performance for your application.' },
    { title: 'Focus on Content', content: 'The flush design puts the focus on your content without distracting visual elements.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-0">
        {items.map((item, index) => (
          <div key={index} className={index !== 0 ? 'border-t border-slate-700/30' : ''}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-0 py-3 text-left flex items-center justify-between hover:text-blue-400 transition-colors group"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={`w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 ${
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
                openIndex === index ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="text-slate-300 text-sm">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion5Code = `import { useState } from 'react';

export default function Accordion5Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Minimal Design', content: 'Clean and minimal design with no borders or backgrounds. Perfect for a sleek, modern interface.' },
    { title: 'Lightweight', content: 'Minimal markup and styles mean faster loading times and better performance for your application.' },
    { title: 'Focus on Content', content: 'The flush design puts the focus on your content without distracting visual elements.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-0">
        {items.map((item, index) => (
          <div key={index} className={index !== 0 ? 'border-t border-slate-700/30' : ''}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-0 py-3 text-left flex items-center justify-between hover:text-blue-400 transition-colors group"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={\`w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 \${
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
                openIndex === index ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div className="text-slate-300 text-sm">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;