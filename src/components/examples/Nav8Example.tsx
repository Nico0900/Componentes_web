import { useState } from 'react';

export default function Nav8Example() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Messages', icon: '💬' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <nav
      className={`bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && <h2 className="text-lg font-bold text-slate-200">Menu</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
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
              title={isCollapsed ? item.name : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const nav8Code = `import { useState } from 'react';

export default function Nav8Example() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Messages', icon: '💬' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <nav
      className={{\`bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm p-4 transition-all duration-300 \${
        isCollapsed ? 'w-20' : 'w-64'
      }\`}}
    >
      <div className="flex items-center justify-between mb-6">
        {!isCollapsed && <h2 className="text-lg font-bold text-slate-200">Menu</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            className={{\`w-5 h-5 transition-transform duration-300 \${isCollapsed ? 'rotate-180' : ''}\`}}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
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
              title={isCollapsed ? item.name : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}`;
