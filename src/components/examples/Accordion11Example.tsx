import { useState } from 'react';

export default function Accordion11Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I install the component library?',
      answer: 'You can install the library using npm or yarn. Run "npm install component-library" or "yarn add component-library" in your project directory. Then import the components you need.'
    },
    {
      question: 'Is this library compatible with TypeScript?',
      answer: 'Yes! This library is built with TypeScript and includes full type definitions. You will get complete IntelliSense support and type checking in your IDE.'
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Absolutely. The components use Tailwind CSS utility classes, making them highly customizable. You can override styles using Tailwind classes or custom CSS.'
    },
    {
      question: 'What browsers are supported?',
      answer: 'The library supports all modern browsers including Chrome, Firefox, Safari, and Edge. IE11 is not supported.'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-start justify-between hover:bg-slate-700/30 transition-colors gap-3"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="text-blue-400 font-bold text-lg mt-0.5">Q</span>
                <span className="text-slate-100 font-medium">{faq.question}</span>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 mt-0.5 ${
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
              <div className="px-4 py-3 border-t border-slate-700/50">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-lg">A</span>
                  <p className="text-slate-300 text-sm flex-1">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion11Code = `import { useState } from 'react';

export default function Accordion11Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I install the component library?',
      answer: 'You can install the library using npm or yarn. Run "npm install component-library" or "yarn add component-library" in your project directory. Then import the components you need.'
    },
    {
      question: 'Is this library compatible with TypeScript?',
      answer: 'Yes! This library is built with TypeScript and includes full type definitions. You will get complete IntelliSense support and type checking in your IDE.'
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Absolutely. The components use Tailwind CSS utility classes, making them highly customizable. You can override styles using Tailwind classes or custom CSS.'
    },
    {
      question: 'What browsers are supported?',
      answer: 'The library supports all modern browsers including Chrome, Firefox, Safari, and Edge. IE11 is not supported.'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-start justify-between hover:bg-slate-700/30 transition-colors gap-3"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="text-blue-400 font-bold text-lg mt-0.5">Q</span>
                <span className="text-slate-100 font-medium">{faq.question}</span>
              </div>
              <svg
                className={\`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 mt-0.5 \${
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
              <div className="px-4 py-3 border-t border-slate-700/50">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-lg">A</span>
                  <p className="text-slate-300 text-sm flex-1">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;