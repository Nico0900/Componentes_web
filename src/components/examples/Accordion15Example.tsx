import { useState } from 'react';

export default function Accordion15Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Vibrant Gradient 1',
      content: 'Beautiful gradient transitions from blue to purple creating a stunning visual effect.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Vibrant Gradient 2',
      content: 'Eye-catching gradient blending green and blue for a fresh, modern look.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Vibrant Gradient 3',
      content: 'Dynamic gradient mixing orange and pink for warmth and energy.',
      gradient: 'from-orange-500 to-pink-500'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-slate-700/50 shadow-lg">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full px-4 py-4 text-left flex items-center justify-between transition-all duration-300 bg-gradient-to-r ${item.gradient} hover:opacity-90`}
            >
              <span className="text-white font-bold text-lg drop-shadow-lg">{item.title}</span>
              <svg
                className={`w-5 h-5 text-white drop-shadow-lg transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-4 py-4 text-slate-100 text-sm bg-slate-800/80 backdrop-blur">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion15Code = `import { useState } from 'react';

export default function Accordion15Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Vibrant Gradient 1',
      content: 'Beautiful gradient transitions from blue to purple creating a stunning visual effect.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Vibrant Gradient 2',
      content: 'Eye-catching gradient blending green and blue for a fresh, modern look.',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Vibrant Gradient 3',
      content: 'Dynamic gradient mixing orange and pink for warmth and energy.',
      gradient: 'from-orange-500 to-pink-500'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-slate-700/50 shadow-lg">
            <button
              onClick={() => toggleItem(index)}
              className={\`w-full px-4 py-4 text-left flex items-center justify-between transition-all duration-300 bg-gradient-to-r \${item.gradient} hover:opacity-90\`}
            >
              <span className="text-white font-bold text-lg drop-shadow-lg">{item.title}</span>
              <svg
                className={\`w-5 h-5 text-white drop-shadow-lg transition-transform duration-300 \${
                  openIndex === index ? 'rotate-180' : ''
                }\`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={\`transition-all duration-300 ease-in-out \${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div className="px-4 py-4 text-slate-100 text-sm bg-slate-800/80 backdrop-blur">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;