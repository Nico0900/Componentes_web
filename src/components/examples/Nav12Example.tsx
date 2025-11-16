import { useState } from 'react';

export default function Nav12Example() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', content: 'General settings and preferences' },
    { id: 'security', label: 'Security', content: 'Security and privacy options' },
    { id: 'appearance', label: 'Appearance', content: 'Theme and display settings' },
    { id: 'advanced', label: 'Advanced', content: 'Advanced configuration options' },
  ];

  return (
    <div className="flex gap-4 w-full max-w-3xl bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
      <nav className="w-48 border-r border-slate-700/50 p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 p-6">
        <div className="text-slate-300">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}

export const nav12Code = `import { useState } from 'react';

export default function Nav12Example() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', content: 'General settings and preferences' },
    { id: 'security', label: 'Security', content: 'Security and privacy options' },
    { id: 'appearance', label: 'Appearance', content: 'Theme and display settings' },
    { id: 'advanced', label: 'Advanced', content: 'Advanced configuration options' },
  ];

  return (
    <div className="flex gap-4 w-full max-w-3xl bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
      <nav className="w-48 border-r border-slate-700/50 p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={{\`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 \${
                  activeTab === tab.id
                    ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                }\`}}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 p-6">
        <div className="text-slate-300">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}`;
