import { useState } from 'react';

export default function Nav14Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (name: string) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <button
              onClick={() => {
                setActiveItem('Home');
                setOpenDropdown(null);
              }}
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
              className="text-sm font-medium transition-colors duration-300 hover:text-blue-400 text-slate-300 flex items-center gap-1"
            >
              Products
              <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'Products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Products' && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                <li className="relative group">
                  <button
                    onClick={() => toggleSubDropdown('Electronics')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200 flex items-center justify-between"
                  >
                    Electronics
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {openSubDropdown === 'Electronics' && (
                    <ul className="absolute left-full top-0 ml-1 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                      {['Phones', 'Laptops', 'Tablets', 'Accessories'].map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveItem(item);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
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
                <li className="relative group">
                  <button
                    onClick={() => toggleSubDropdown('Clothing')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200 flex items-center justify-between"
                  >
                    Clothing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {openSubDropdown === 'Clothing' && (
                    <ul className="absolute left-full top-0 ml-1 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                      {['Men', 'Women', 'Kids', 'Accessories'].map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveItem(item);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
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
                {['Books', 'Sports'].map((item) => (
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
              onClick={() => {
                setActiveItem('About');
                setOpenDropdown(null);
              }}
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

export const nav14Code = `import { useState } from 'react';

export default function Nav14Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (name: string) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <button
              onClick={() => {
                setActiveItem('Home');
                setOpenDropdown(null);
              }}
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
              className="text-sm font-medium transition-colors duration-300 hover:text-blue-400 text-slate-300 flex items-center gap-1"
            >
              Products
              <svg className={{\`w-4 h-4 transition-transform duration-300 \${openDropdown === 'Products' ? 'rotate-180' : ''}\`}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'Products' && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                <li className="relative group">
                  <button
                    onClick={() => toggleSubDropdown('Electronics')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200 flex items-center justify-between"
                  >
                    Electronics
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {openSubDropdown === 'Electronics' && (
                    <ul className="absolute left-full top-0 ml-1 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                      {['Phones', 'Laptops', 'Tablets', 'Accessories'].map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveItem(item);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
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
                <li className="relative group">
                  <button
                    onClick={() => toggleSubDropdown('Clothing')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200 flex items-center justify-between"
                  >
                    Clothing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {openSubDropdown === 'Clothing' && (
                    <ul className="absolute left-full top-0 ml-1 w-48 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden">
                      {['Men', 'Women', 'Kids', 'Accessories'].map((item) => (
                        <li key={item}>
                          <button
                            onClick={() => {
                              setActiveItem(item);
                              setOpenDropdown(null);
                              setOpenSubDropdown(null);
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
                {['Books', 'Sports'].map((item) => (
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
              onClick={() => {
                setActiveItem('About');
                setOpenDropdown(null);
              }}
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
