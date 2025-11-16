import { useState } from 'react';

export default function Nav13Example() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊', description: 'Overview' },
    { name: 'Analytics', icon: '📈', description: 'Statistics' },
    { name: 'Messages', icon: '💬', description: 'Chat' },
    { name: 'Calendar', icon: '📅', description: 'Events' },
    { name: 'Files', icon: '📁', description: 'Documents' },
    { name: 'Settings', icon: '⚙️', description: 'Config' },
  ];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4">
      <ul className="grid grid-cols-3 gap-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${
                activeItem === item.name
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="text-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const nav13Code = `import { useState } from 'react';

export default function Nav13Example() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊', description: 'Overview' },
    { name: 'Analytics', icon: '📈', description: 'Statistics' },
    { name: 'Messages', icon: '💬', description: 'Chat' },
    { name: 'Calendar', icon: '📅', description: 'Events' },
    { name: 'Files', icon: '📁', description: 'Documents' },
    { name: 'Settings', icon: '⚙️', description: 'Config' },
  ];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4">
      <ul className="grid grid-cols-3 gap-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActiveItem(item.name)}
              className={{\`w-full flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 \${
                activeItem === item.name
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
              }\`}}
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="text-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}`;
