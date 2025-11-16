import { useState } from 'react';

export default function Accordion8Example() {
  const [openIndexes, setOpenIndexes] = useState<string[]>(['0']);

  const items = [
    {
      id: '0',
      title: 'Parent Item 1',
      content: 'This is a parent accordion item with nested children below.',
      children: [
        { id: '0-0', title: 'Child Item 1.1', content: 'First nested item under Parent 1.' },
        { id: '0-1', title: 'Child Item 1.2', content: 'Second nested item under Parent 1.' },
      ]
    },
    {
      id: '1',
      title: 'Parent Item 2',
      content: 'Another parent item with its own nested children.',
      children: [
        { id: '1-0', title: 'Child Item 2.1', content: 'First nested item under Parent 2.' },
        { id: '1-1', title: 'Child Item 2.2', content: 'Second nested item under Parent 2.' },
      ]
    },
  ];

  const toggleItem = (id: string) => {
    setOpenIndexes(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  openIndexes.includes(item.id) ? 'rotate-180' : ''
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
                openIndexes.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-4 py-3 border-t border-slate-700/50">
                <p className="text-slate-300 text-sm mb-3">{item.content}</p>
                <div className="space-y-1 ml-4">
                  {item.children.map((child) => (
                    <div key={child.id} className="bg-slate-900/50 rounded overflow-hidden border border-slate-600/30">
                      <button
                        onClick={() => toggleItem(child.id)}
                        className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors text-sm"
                      >
                        <span className="text-slate-200">{child.title}</span>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                            openIndexes.includes(child.id) ? 'rotate-180' : ''
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
                          openIndexes.includes(child.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-3 py-2 text-slate-400 text-xs border-t border-slate-600/30">
                          {child.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const accordion8Code = `import { useState } from 'react';

export default function Accordion8Example() {
  const [openIndexes, setOpenIndexes] = useState<string[]>(['0']);

  const items = [
    {
      id: '0',
      title: 'Parent Item 1',
      content: 'This is a parent accordion item with nested children below.',
      children: [
        { id: '0-0', title: 'Child Item 1.1', content: 'First nested item under Parent 1.' },
        { id: '0-1', title: 'Child Item 1.2', content: 'Second nested item under Parent 1.' },
      ]
    },
    {
      id: '1',
      title: 'Parent Item 2',
      content: 'Another parent item with its own nested children.',
      children: [
        { id: '1-0', title: 'Child Item 2.1', content: 'First nested item under Parent 2.' },
        { id: '1-1', title: 'Child Item 2.2', content: 'Second nested item under Parent 2.' },
      ]
    },
  ];

  const toggleItem = (id: string) => {
    setOpenIndexes(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
            >
              <span className="text-slate-100 font-medium">{item.title}</span>
              <svg
                className={\`w-5 h-5 text-slate-400 transition-transform duration-300 \${
                  openIndexes.includes(item.id) ? 'rotate-180' : ''
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
                openIndexes.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden\`}
            >
              <div className="px-4 py-3 border-t border-slate-700/50">
                <p className="text-slate-300 text-sm mb-3">{item.content}</p>
                <div className="space-y-1 ml-4">
                  {item.children.map((child) => (
                    <div key={child.id} className="bg-slate-900/50 rounded overflow-hidden border border-slate-600/30">
                      <button
                        onClick={() => toggleItem(child.id)}
                        className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors text-sm"
                      >
                        <span className="text-slate-200">{child.title}</span>
                        <svg
                          className={\`w-4 h-4 text-slate-400 transition-transform duration-300 \${
                            openIndexes.includes(child.id) ? 'rotate-180' : ''
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
                          openIndexes.includes(child.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden\`}
                      >
                        <div className="px-3 py-2 text-slate-400 text-xs border-t border-slate-600/30">
                          {child.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`;