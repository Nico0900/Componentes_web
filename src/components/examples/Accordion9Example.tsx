import { useState } from 'react';

export default function Accordion9Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Smooth Transitions', content: 'This accordion features smooth height and opacity transitions for a polished user experience.' },
    { title: 'Scale Animation', content: 'Watch as the content smoothly scales and fades in when expanded, creating an elegant reveal effect.' },
    { title: 'Icon Rotation', content: 'The chevron icon rotates smoothly, providing clear visual feedback about the accordion state.' },
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
            className={`bg-slate-800/50 rounded-lg overflow-hidden border transition-all duration-300 ${
              openIndex === index ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-700/50'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-300"
            >
              <span className={`font-medium transition-colors duration-300 ${
                openIndex === index ? 'text-blue-400' : 'text-slate-100'
              }`}>
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 transition-all duration-500 ${
                  openIndex === index ? 'rotate-180 text-blue-400' : 'text-slate-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div
                className={`px-4 py-3 text-slate-300 text-sm border-t border-slate-700/50 transition-all duration-500 ${
                  openIndex === index ? 'scale-100' : 'scale-95'
                }`}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion9Code = `import { useState } from 'react';

export default function Accordion9Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Smooth Transitions', content: 'This accordion features smooth height and opacity transitions for a polished user experience.' },
    { title: 'Scale Animation', content: 'Watch as the content smoothly scales and fades in when expanded, creating an elegant reveal effect.' },
    { title: 'Icon Rotation', content: 'The chevron icon rotates smoothly, providing clear visual feedback about the accordion state.' },
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
            className={\`bg-slate-800/50 rounded-lg overflow-hidden border transition-all duration-300 \${
              openIndex === index ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-slate-700/50'
            }\`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-300"
            >
              <span className={\`font-medium transition-colors duration-300 \${
                openIndex === index ? 'text-blue-400' : 'text-slate-100'
              }\`}>
                {item.title}
              </span>
              <svg
                className={\`w-5 h-5 transition-all duration-500 \${
                  openIndex === index ? 'rotate-180 text-blue-400' : 'text-slate-400'
                }\`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={\`transition-all duration-500 ease-in-out \${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div
                className={\`px-4 py-3 text-slate-300 text-sm border-t border-slate-700/50 transition-all duration-500 \${
                  openIndex === index ? 'scale-100' : 'scale-95'
                }\`}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;