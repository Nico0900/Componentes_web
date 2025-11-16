import { useState } from 'react';

export default function Notification6Example() {
  const [notifications, setNotifications] = useState(5);
  const [messages, setMessages] = useState(12);
  const [alerts, setAlerts] = useState(3);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-6">Badge Notifications</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Notification Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-red-500 to-rose-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Alerts</span>
            </button>
            <button
              onClick={() => setNotifications(Math.max(0, notifications - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>

          {/* Message Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {messages > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {messages > 9 ? '9+' : messages}
                  </span>
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Messages</span>
            </button>
            <button
              onClick={() => setMessages(Math.max(0, messages - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>

          {/* Alert Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {alerts > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full animate-pulse" />
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Warnings</span>
            </button>
            <button
              onClick={() => setAlerts(Math.max(0, alerts - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          <button
            onClick={() => {
              setNotifications(Math.min(99, notifications + 1));
              setMessages(Math.min(99, messages + 1));
              setAlerts(Math.min(99, alerts + 1));
            }}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Add Notifications
          </button>
          <button
            onClick={() => {
              setNotifications(0);
              setMessages(0);
              setAlerts(0);
            }}
            className="px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export const notification6Code = `import { useState } from 'react';

export default function Notification6Example() {
  const [notifications, setNotifications] = useState(5);
  const [messages, setMessages] = useState(12);
  const [alerts, setAlerts] = useState(3);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-6">Badge Notifications</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Notification Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-red-500 to-rose-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                    {notifications}
                  </span>
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Alerts</span>
            </button>
            <button
              onClick={() => setNotifications(Math.max(0, notifications - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>

          {/* Message Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {messages > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {messages > 9 ? '9+' : messages}
                  </span>
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Messages</span>
            </button>
            <button
              onClick={() => setMessages(Math.max(0, messages - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>

          {/* Alert Badge */}
          <div className="relative">
            <button className="w-full flex items-center justify-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group">
              <div className="relative">
                <svg className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {alerts > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full animate-pulse" />
                )}
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium">Warnings</span>
            </button>
            <button
              onClick={() => setAlerts(Math.max(0, alerts - 1))}
              className="absolute -bottom-2 right-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-full transition-all"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          <button
            onClick={() => {
              setNotifications(Math.min(99, notifications + 1));
              setMessages(Math.min(99, messages + 1));
              setAlerts(Math.min(99, alerts + 1));
            }}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Add Notifications
          </button>
          <button
            onClick={() => {
              setNotifications(0);
              setMessages(0);
              setAlerts(0);
            }}
            className="px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}`;