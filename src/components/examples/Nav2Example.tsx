import { useState } from 'react';

export default function Nav2Example() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Tasks', icon: '✓' },
    { name: 'Reports', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <nav className="w-64 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-200 px-3">Menu</h2>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeItem === item.name
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const nav2Code = `import { useState } from 'react';

export default function Nav2Example() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Tasks', icon: '✓' },
    { name: 'Reports', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <nav className="w-64 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-200 px-3">Menu</h2>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setActiveItem(item.name)}
              className={{\`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 \${
                activeItem === item.name
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
              }\`}}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}`;
