import { useState, useEffect } from 'react';

export default function Nav15Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <div className="w-full">
      <nav
        className={`w-full bg-slate-800/90 border border-slate-700/50 rounded-lg backdrop-blur-md shadow-lg transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-200">Brand</div>
            <ul className="flex items-center gap-6">
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
        </div>
      </nav>
      <div className="mt-4 text-xs text-slate-400 text-center">
        Scroll down/up to see sticky behavior (simulated)
      </div>
    </div>
  );
}

export const nav15Code = `import { useState, useEffect } from 'react';

export default function Nav15Example() {
  const [activeItem, setActiveItem] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <div className="w-full">
      <nav
        className={{\`w-full bg-slate-800/90 border border-slate-700/50 rounded-lg backdrop-blur-md shadow-lg transition-all duration-300 \${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }\`}}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-200">Brand</div>
            <ul className="flex items-center gap-6">
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
        </div>
      </nav>
      <div className="mt-4 text-xs text-slate-400 text-center">
        Scroll down/up to see sticky behavior (simulated)
      </div>
    </div>
  );
}`;
