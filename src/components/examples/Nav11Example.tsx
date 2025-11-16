import { useState } from 'react';

export default function Nav11Example() {
  const [activeItem, setActiveItem] = useState('All');

  const navItems = ['All', 'Active', 'Completed', 'Archived', 'Starred'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm px-6 py-4">
      <ul className="flex items-center gap-3 flex-wrap">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActiveItem(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeItem === item
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const nav11Code = `import { useState } from 'react';

export default function Nav11Example() {
  const [activeItem, setActiveItem] = useState('All');

  const navItems = ['All', 'Active', 'Completed', 'Archived', 'Starred'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm px-6 py-4">
      <ul className="flex items-center gap-3 flex-wrap">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActiveItem(item)}
              className={{\`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 \${
                activeItem === item
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-slate-100'
              }\`}}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}`;
