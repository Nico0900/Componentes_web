import { useState } from 'react';

export default function Modal6Example() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 animate-fadeIn">
          <div
            className="absolute inset-0 bg-slate-950/10"
            
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-800 border-l border-slate-700 shadow-2xl animate-slideInRight overflow-auto">
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-100">Sidebar Panel</h3>
              <button
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
    </div>
  );
}

export const modal6Code = `import { useState } from 'react';

export default function Modal6Example() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/80"  />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-800 border-l border-slate-700 overflow-auto">
            <h3 className="p-6 text-xl font-bold text-slate-100 border-b border-slate-700">Sidebar Panel</h3>
            <div className="p-6">
              <p className="text-slate-400">Sidebar content goes here...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
