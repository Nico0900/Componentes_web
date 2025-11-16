import { useState } from 'react';

export default function Nav3Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <button
              onClick={() => setActiveItem('Home')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                activeItem === 'Home' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              Home
            </button>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown('Products')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 flex items-center gap-1 ${
                activeItem === 'Products' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              Products
              <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'Products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Products' && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                {['Electronics', 'Clothing', 'Books', 'Sports'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        setOpenDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown('Services')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 flex items-center gap-1 ${
                activeItem === 'Services' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'Services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Services' && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                {['Consulting', 'Development', 'Design', 'Support'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        setOpenDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setActiveItem('About')}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                activeItem === 'About' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const nav3Code = `import { useState } from 'react';

export default function Nav3Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <button
              onClick={() => setActiveItem('Home')}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 \${
                activeItem === 'Home' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              Home
            </button>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown('Products')}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 flex items-center gap-1 \${
                activeItem === 'Products' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              Products
              <svg className={{\`w-4 h-4 transition-transform duration-300 \${openDropdown === 'Products' ? 'rotate-180' : ''}\`}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Products' && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                {['Electronics', 'Clothing', 'Books', 'Sports'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        setOpenDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown('Services')}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 flex items-center gap-1 \${
                activeItem === 'Services' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              Services
              <svg className={{\`w-4 h-4 transition-transform duration-300 \${openDropdown === 'Services' ? 'rotate-180' : ''}\`}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Services' && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                {['Consulting', 'Development', 'Design', 'Support'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActiveItem(item);
                        setOpenDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => setActiveItem('About')}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 \${
                activeItem === 'About' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}`;
