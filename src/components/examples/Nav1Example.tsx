import { useState } from 'react';

export default function Nav1Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About', 'Services', 'Products', 'Contact'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveItem(item)}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  activeItem === item
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-slate-300'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export const nav1Code = `import { useState } from 'react';

export default function Nav1Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About', 'Services', 'Products', 'Contact'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveItem(item)}
                className={{\`text-sm font-medium transition-all duration-300 hover:text-blue-400 \${
                  activeItem === item
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-slate-300'
                }\`}}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}`;
