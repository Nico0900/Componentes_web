import { useState } from 'react';

export default function Nav9Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'Features', 'Pricing', 'About'];

  return (
    <div className="w-full">
      <nav className="w-full bg-slate-800/90 border border-slate-700/50 rounded-lg backdrop-blur-md shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-lg font-bold text-slate-200">MyApp</div>
              <ul className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveItem(item)}
                      className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                        activeItem === item ? 'text-blue-400' : 'text-slate-300'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-300">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-4 text-xs text-slate-400 text-center">
        This is a fixed top navigation bar (simulated)
      </div>
    </div>
  );
}

export const nav9Code = `import { useState } from 'react';

export default function Nav9Example() {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'Features', 'Pricing', 'About'];

  return (
    <div className="w-full">
      <nav className="w-full bg-slate-800/90 border border-slate-700/50 rounded-lg backdrop-blur-md shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-lg font-bold text-slate-200">MyApp</div>
              <ul className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveItem(item)}
                      className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 \${
                        activeItem === item ? 'text-blue-400' : 'text-slate-300'
                      }\`}}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-300">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-4 text-xs text-slate-400 text-center">
        This is a fixed top navigation bar (simulated)
      </div>
    </div>
  );
}`;
