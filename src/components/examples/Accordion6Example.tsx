import { useState } from 'react';

export default function Accordion6Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Primary Section',
      content: 'This section uses a blue color scheme. Great for highlighting primary information or main features.',
      color: 'blue'
    },
    {
      title: 'Success Section',
      content: 'This section uses a green color scheme. Perfect for success messages or completed items.',
      color: 'green'
    },
    {
      title: 'Warning Section',
      content: 'This section uses an orange color scheme. Ideal for warnings or important notices.',
      color: 'orange'
    },
    {
      title: 'Danger Section',
      content: 'This section uses a red color scheme. Best for errors or critical information.',
      color: 'red'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
    green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30',
    orange: 'bg-orange-500/20 border-orange-500/50 hover:bg-orange-500/30',
    red: 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30',
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className={`rounded-lg overflow-hidden border ${colorClasses[item.color as keyof typeof colorClasses]}`}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={`w-5 h-5 text-slate-100 transition-transform duration-300 ${
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
              <div className="px-4 py-3 text-slate-200 text-sm border-t border-current">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion6Code = `import { useState } from 'react';

export default function Accordion6Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Primary Section',
      content: 'This section uses a blue color scheme. Great for highlighting primary information or main features.',
      color: 'blue'
    },
    {
      title: 'Success Section',
      content: 'This section uses a green color scheme. Perfect for success messages or completed items.',
      color: 'green'
    },
    {
      title: 'Warning Section',
      content: 'This section uses an orange color scheme. Ideal for warnings or important notices.',
      color: 'orange'
    },
    {
      title: 'Danger Section',
      content: 'This section uses a red color scheme. Best for errors or critical information.',
      color: 'red'
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
    green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30',
    orange: 'bg-orange-500/20 border-orange-500/50 hover:bg-orange-500/30',
    red: 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30',
  };

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className={\`rounded-lg overflow-hidden border \${colorClasses[item.color as keyof typeof colorClasses]}\`}>
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={\`w-5 h-5 text-slate-100 transition-transform duration-300 \${
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
              <div className="px-4 py-3 text-slate-200 text-sm border-t border-current">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;