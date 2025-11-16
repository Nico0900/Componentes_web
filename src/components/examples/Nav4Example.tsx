import { useState } from 'react';

export default function Nav4Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const megaMenuItems = [
    {
      category: 'Electronics',
      items: ['Laptops', 'Phones', 'Tablets', 'Accessories']
    },
    {
      category: 'Clothing',
      items: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
      category: 'Home & Garden',
      items: ['Furniture', 'Decor', 'Kitchen', 'Outdoor']
    },
    {
      category: 'Sports',
      items: ['Running', 'Cycling', 'Swimming', 'Gym']
    }
  ];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-8">
          <li>
            <button
              onClick={() => {
                setActiveItem('Home');
                setShowMegaMenu(false);
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
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="text-sm font-medium transition-colors duration-300 hover:text-blue-400 text-slate-300 flex items-center gap-1"
            >
              All Products
              <svg className={`w-4 h-4 transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showMegaMenu && (
              <div
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
                className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800 border border-slate-700/50 rounded-lg shadow-2xl p-6"
              >
                <div className="grid grid-cols-4 gap-6">
                  {megaMenuItems.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-sm font-semibold text-blue-400 mb-3">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => {
                                setActiveItem(item);
                                setShowMegaMenu(false);
                              }}
                              className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <button
              onClick={() => {
                setActiveItem('About');
                setShowMegaMenu(false);
              }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                activeItem === 'About' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setActiveItem('Contact');
                setShowMegaMenu(false);
              }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                activeItem === 'Contact' ? 'text-blue-400' : 'text-slate-300'
              }`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const nav4Code = `import { useState } from 'react';

export default function Nav4Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const megaMenuItems = [
    {
      category: 'Electronics',
      items: ['Laptops', 'Phones', 'Tablets', 'Accessories']
    },
    {
      category: 'Clothing',
      items: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
      category: 'Home & Garden',
      items: ['Furniture', 'Decor', 'Kitchen', 'Outdoor']
    },
    {
      category: 'Sports',
      items: ['Running', 'Cycling', 'Swimming', 'Gym']
    }
  ];

  return (
    <nav className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm">
      <div className="px-6 py-4">
        <ul className="flex items-center gap-8">
          <li>
            <button
              onClick={() => {
                setActiveItem('Home');
                setShowMegaMenu(false);
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
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="text-sm font-medium transition-colors duration-300 hover:text-blue-400 text-slate-300 flex items-center gap-1"
            >
              All Products
              <svg className={{\`w-4 h-4 transition-transform duration-300 \${showMegaMenu ? 'rotate-180' : ''}\`}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showMegaMenu && (
              <div
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
                className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800 border border-slate-700/50 rounded-lg shadow-2xl p-6"
              >
                <div className="grid grid-cols-4 gap-6">
                  {megaMenuItems.map((category) => (
                    <div key={category.category}>
                      <h3 className="text-sm font-semibold text-blue-400 mb-3">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => {
                                setActiveItem(item);
                                setShowMegaMenu(false);
                              }}
                              className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <button
              onClick={() => {
                setActiveItem('About');
                setShowMegaMenu(false);
              }}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 \${
                activeItem === 'About' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setActiveItem('Contact');
                setShowMegaMenu(false);
              }}
              className={{\`text-sm font-medium transition-colors duration-300 hover:text-blue-400 \${
                activeItem === 'Contact' ? 'text-blue-400' : 'text-slate-300'
              }\`}}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}`;
