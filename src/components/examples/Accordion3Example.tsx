import { useState } from 'react';

export default function Accordion3Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Getting Started', content: 'Install the package using npm or yarn. Then import the components you need into your project.' },
    { title: 'Configuration', content: 'Configure your build tools to support TypeScript and Tailwind CSS. Add the necessary plugins to your configuration files.' },
    { title: 'Usage', content: 'Import the accordion component and use it in your React application. Pass the items as props to customize the content.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors group"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <div className="flex items-center gap-2">
                <svg
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

export const accordion3Code = `import { useState } from 'react';

export default function Accordion3Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Getting Started', content: 'Install the package using npm or yarn. Then import the components you need into your project.' },
    { title: 'Configuration', content: 'Configure your build tools to support TypeScript and Tailwind CSS. Add the necessary plugins to your configuration files.' },
    { title: 'Usage', content: 'Import the accordion component and use it in your React application. Pass the items as props to customize the content.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors group"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <div className="flex items-center gap-2">
                <svg
                  className={\`w-5 h-5 text-blue-400 transition-transform duration-300 \${
                    openIndex === index ? 'rotate-90' : ''
                  }\`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            <div
              className={\`transition-all duration-300 ease-in-out \${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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