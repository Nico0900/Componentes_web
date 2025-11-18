import { useState } from 'react';

export default function Modal6Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Preview Card - Vista previa centrada */}
      <div className="flex justify-center items-center w-full h-full p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-md bg-slate-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="p-6 border-b border-slate-700 bg-slate-800/50">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-slate-100">Sidebar Panel</h3>
              <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <p className="text-xs text-slate-400">Settings and configuration</p>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <span className="text-sm text-slate-300">Notifications</span>
              <div className="w-10 h-5 bg-indigo-600 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <span className="text-sm text-slate-300">Auto-save</span>
              <div className="w-10 h-5 bg-slate-600 rounded-full flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <span className="text-sm text-slate-300">Dark mode</span>
              <div className="w-10 h-5 bg-indigo-600 rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="p-4 text-center text-slate-400 text-sm border-t border-slate-700">
            Click to open sidebar
          </div>
        </button>
      </div>

      {/* Full Screen Sidebar Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-9999 animate-fadeIn">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-md min-w-[420px] bg-slate-800 border-l border-slate-700 shadow-2xl animate-slideInRight overflow-auto">
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-100">Sidebar Panel</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <section>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Notifications</span>
                    <input type="checkbox" className="w-4 h-4 text-indigo-600" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Auto-save</span>
                    <input type="checkbox" className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Dark mode</span>
                    <input type="checkbox" className="w-4 h-4 text-indigo-600" defaultChecked />
                  </div>
                </div>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Profile</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-700/50 rounded-lg">
                    <label className="block text-sm text-slate-400 mb-1">Username</label>
                    <input
                      type="text"
                      defaultValue="johndoe"
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 bg-slate-800 border-t border-slate-700 p-6">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const modal6Code = `import { useState } from 'react';

export default function Modal6Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Sidebar</button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute right-0 top-0 h-full w-full max-w-md min-w-[420px] bg-slate-800 border-l border-slate-700 overflow-auto">
            <h3 className="p-6 text-xl font-bold text-slate-100 border-b border-slate-700">Sidebar Panel</h3>
            <div className="p-6">
              <p className="text-slate-400">Sidebar content goes here...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`;
