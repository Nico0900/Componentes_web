import { useState } from 'react';

export default function Accordion7Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Chevron Icon',
      content: 'This item uses a chevron icon that rotates when expanded.',
      icon: 'chevron'
    },
    {
      title: 'Plus/Minus Icon',
      content: 'This item toggles between plus and minus icons to show state.',
      icon: 'plusminus'
    },
    {
      title: 'Circle Icon',
      content: 'This item uses a circular expand/collapse indicator.',
      icon: 'circle'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderIcon = (iconType: string, isOpen: boolean) => {
    if (iconType === 'chevron') {
      return (
        <svg
          className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    } else if (iconType === 'plusminus') {
      return isOpen ? (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      );
    } else {
      return (
        <div className={`w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-blue-400' : 'bg-transparent'
        }`}>
          {isOpen && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      );
    }
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
              {renderIcon(item.icon, openIndex === index)}
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

export const accordion7Code = `import { useState } from 'react';

export default function Accordion7Example() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'Chevron Icon',
      content: 'This item uses a chevron icon that rotates when expanded.',
      icon: 'chevron'
    },
    {
      title: 'Plus/Minus Icon',
      content: 'This item toggles between plus and minus icons to show state.',
      icon: 'plusminus'
    },
    {
      title: 'Circle Icon',
      content: 'This item uses a circular expand/collapse indicator.',
      icon: 'circle'
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderIcon = (iconType: string, isOpen: boolean) => {
    if (iconType === 'chevron') {
      return (
        <svg
          className={\`w-5 h-5 text-blue-400 transition-transform duration-300 \${
            isOpen ? 'rotate-180' : ''
          }\`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    } else if (iconType === 'plusminus') {
      return isOpen ? (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      );
    } else {
      return (
        <div className={\`w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center transition-all duration-300 \${
          isOpen ? 'bg-blue-400' : 'bg-transparent'
        }\`}>
          {isOpen && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      );
    }
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
              {renderIcon(item.icon, openIndex === index)}
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