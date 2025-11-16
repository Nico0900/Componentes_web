import { useState } from 'react';

export default function Accordion12Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Large Heading Section', content: 'This accordion features generous padding and larger text sizes for improved readability and a more spacious feel. Perfect for documentation or content-heavy applications.' },
    { title: 'Comfortable Spacing', content: 'The increased padding and spacing makes the content easier to scan and read. This design is particularly effective on larger screens and desktop displays.' },
    { title: 'Enhanced Visibility', content: 'Larger text and more breathing room helps important information stand out. Great for accessibility and user-friendly interfaces.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-semibold text-lg">{item.title}</span>
              <svg
                className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
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
              <div className="px-6 py-5 text-slate-300 text-base leading-relaxed border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion12Code = `import { useState } from 'react';

export default function Accordion12Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: 'Large Heading Section', content: 'This accordion features generous padding and larger text sizes for improved readability and a more spacious feel. Perfect for documentation or content-heavy applications.' },
    { title: 'Comfortable Spacing', content: 'The increased padding and spacing makes the content easier to scan and read. This design is particularly effective on larger screens and desktop displays.' },
    { title: 'Enhanced Visibility', content: 'Larger text and more breathing room helps important information stand out. Great for accessibility and user-friendly interfaces.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-semibold text-lg">{item.title}</span>
              <svg
                className={\`w-6 h-6 text-slate-400 transition-transform duration-300 \${
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
              <div className="px-6 py-5 text-slate-300 text-base leading-relaxed border-t border-slate-700/50">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;