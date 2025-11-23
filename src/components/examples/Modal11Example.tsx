import { useState } from 'react';

export default function Modal11Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'projects', label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { id: 'tasks', label: 'Tasks', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
  ];

  return (
    <>
      {/* Preview Card - Vista previa del Drawer */}
      <div className="flex justify-center items-center w-full h-full p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-sm bg-slate-800 shadow-2xl rounded-lg overflow-hidden hover:shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="p-6 border-b border-slate-700 bg-slate-800/50">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-slate-100">Navigation Drawer</h3>
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <p className="text-xs text-slate-400">Side navigation menu</p>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-700/30 text-slate-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          <div className="p-4 text-center text-slate-400 text-sm">
            Click to open drawer
          </div>
        </button>
      </div>

      {/* Full Screen Drawer Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-9999 animate-fadeIn">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <div className="absolute left-0 top-0 h-full w-full max-w-xs bg-slate-800 shadow-2xl animate-slideInLeft overflow-auto">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-slate-100">Navigation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-400">Main menu and navigation</p>
            </div>

            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <div className="text-slate-100 font-medium">John Doe</div>
                  <div className="text-sm text-slate-400">john@example.com</div>
                </div>
              </div>
            </div>

            <nav className="p-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeItem === item.id
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 bg-slate-800">
              <button
                className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const modal11Code = `import { useState } from 'react';

export default function Modal11Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2...' },
    { id: 'projects', label: 'Projects', icon: 'M3 7v10a2...' }
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute left-0 top-0 h-full w-full max-w-xs bg-slate-800 overflow-auto">
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-xl font-bold text-slate-100">Navigation</h3>
            </div>
            <nav className="p-4 space-y-1">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => setActiveItem(item.id)} className={\`w-full flex items-center gap-3 px-4 py-3 rounded-lg \${activeItem === item.id ? 'bg-teal-600 text-white' : 'text-slate-300 hover:bg-slate-700'}\`}>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}`;
