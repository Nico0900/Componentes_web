import { useState } from 'react';

export default function Modal12Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Show Notification
      </button>

      {isOpen && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full animate-slideInRight">
          <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-semibold text-slate-100">New Notification</h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-slate-200 transition-colors ml-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-400 mb-3">
                  You have a new message from the team. Check it out!
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xs px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xs px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600 animate-shrink" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const modal12Code = \`import { useState } from 'react';

export default function Modal12Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center p-6">
      <button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-sky-600 text-white rounded-lg">
        Show Notification
      </button>

      {isOpen && (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
          <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-semibold text-slate-100">New Notification</h4>
                  <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-200">✕</button>
                </div>
                <p className="text-sm text-slate-400 mb-3">You have a new message!</p>
                <div className="flex gap-2">
                  <button onClick={() => setIsOpen(false)} className="text-xs px-3 py-1.5 bg-sky-600 text-white rounded">View</button>
                  <button onClick={() => setIsOpen(false)} className="text-xs px-3 py-1.5 bg-slate-700 text-slate-200 rounded">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}\`;
