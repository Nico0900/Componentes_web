import { useState } from 'react';

export default function Nav6Example() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', content: 'Profile settings and information' },
    { id: 'account', label: 'Account', content: 'Account preferences and security' },
    { id: 'notifications', label: 'Notifications', content: 'Notification settings' },
    { id: 'billing', label: 'Billing', content: 'Billing and payment information' },
  ];

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
      <div className="border-b border-slate-700/50">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <div className="text-slate-300">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}

export const nav6Code = `import { useState } from 'react';

export default function Nav6Example() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', content: 'Profile settings and information' },
    { id: 'account', label: 'Account', content: 'Account preferences and security' },
    { id: 'notifications', label: 'Notifications', content: 'Notification settings' },
    { id: 'billing', label: 'Billing', content: 'Billing and payment information' },
  ];

  return (
    <div className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
      <div className="border-b border-slate-700/50">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={{\`px-6 py-3 text-sm font-medium transition-all duration-300 relative \${
                  activeTab === tab.id
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }\`}}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6">
        <div className="text-slate-300">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}`;
