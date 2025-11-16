import { useState } from 'react';

export default function Nav10Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Search', icon: '🔍' },
    { name: 'Add', icon: '➕' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-xs text-slate-400 text-center mb-4">
        Mobile-style bottom navigation
      </div>
      <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1">
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex flex-col items-center gap-1 py-3 transition-all duration-300 ${
                  activeItem === item.name
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.name}</span>
                {activeItem === item.name && (
                  <div className="w-12 h-0.5 bg-blue-400 rounded-full mt-1" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export const nav10Code = `import { useState } from 'react';

export default function Nav10Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Search', icon: '🔍' },
    { name: 'Add', icon: '➕' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-xs text-slate-400 text-center mb-4">
        Mobile-style bottom navigation
      </div>
      <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm overflow-hidden">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => (
            <li key={item.name} className="flex-1">
              <button
                onClick={() => setActiveItem(item.name)}
                className={{\`w-full flex flex-col items-center gap-1 py-3 transition-all duration-300 \${
                  activeItem === item.name
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }\`}}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-medium">{item.name}</span>
                {activeItem === item.name && (
                  <div className="w-12 h-0.5 bg-blue-400 rounded-full mt-1" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}`;
