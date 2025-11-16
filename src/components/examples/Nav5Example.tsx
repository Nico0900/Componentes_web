import { useState } from 'react';

export default function Nav5Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'Features', 'Pricing', 'About', 'Contact'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-slate-200">Brand</div>

          {/* Desktop Menu */}
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

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-slate-700/50 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveItem(item);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeItem === item
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export const nav5Code = `import { useState } from 'react';

export default function Nav5Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'Features', 'Pricing', 'About', 'Contact'];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-slate-200">Brand</div>

          {/* Desktop Menu */}
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

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-slate-700/50 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveItem(item);
                    setIsOpen(false);
                  }}
                  className={{\`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 \${
                    activeItem === item
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-slate-100'
                  }\`}}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}`;
