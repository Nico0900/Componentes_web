import { useState } from 'react';

export default function Accordion2Example() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const items = [
    { title: 'Features', content: 'Multiple items can be open at the same time. Click any header to toggle its content visibility independently.' },
    { title: 'Performance', content: 'Built with React hooks for optimal performance. Uses efficient state management to handle multiple open items.' },
    { title: 'Customization', content: 'Fully customizable with Tailwind CSS. Change colors, spacing, and animations to match your design.' },
    { title: 'Accessibility', content: 'Keyboard navigation support and ARIA attributes ensure the component is accessible to all users.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <span className="text-slate-400 text-sm">
                {openIndexes.includes(index) ? '−' : '+'}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndexes.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

export const accordion2Code = `import { useState } from 'react';

export default function Accordion2Example() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const items = [
    { title: 'Features', content: 'Multiple items can be open at the same time. Click any header to toggle its content visibility independently.' },
    { title: 'Performance', content: 'Built with React hooks for optimal performance. Uses efficient state management to handle multiple open items.' },
    { title: 'Customization', content: 'Fully customizable with Tailwind CSS. Change colors, spacing, and animations to match your design.' },
    { title: 'Accessibility', content: 'Keyboard navigation support and ARIA attributes ensure the component is accessible to all users.' },
  ];

  const toggleItem = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <span className="text-slate-400 text-sm">
                {openIndexes.includes(index) ? '−' : '+'}
              </span>
            </button>
            <div
              className={\`transition-all duration-300 ease-in-out \${
                openIndexes.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
