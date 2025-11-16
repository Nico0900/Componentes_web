import { useState } from 'react';

type Notification = {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  time: string;
};

export default function Notification8Example() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: 'File Uploaded', message: 'Document.pdf uploaded successfully', type: 'success', time: '2m ago' },
    { id: 2, title: 'Server Error', message: 'Failed to connect to the server', type: 'error', time: '5m ago' },
    { id: 3, title: 'Low Storage', message: 'You have 10% storage remaining', type: 'warning', time: '10m ago' },
  ]);

  const addNotification = () => {
    const types: Array<'success' | 'error' | 'warning' | 'info'> = ['success', 'error', 'warning', 'info'];
    const messages = [
      { title: 'Payment Received', message: 'Your payment of $99 was processed', type: 'success' },
      { title: 'Connection Lost', message: 'Network connection interrupted', type: 'error' },
      { title: 'Update Available', message: 'A new version is ready to install', type: 'info' },
      { title: 'Battery Low', message: 'Device battery at 15%', type: 'warning' },
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    const newNotif: Notification = {
      id: Date.now(),
      ...random,
      type: random.type as any,
      time: 'Just now'
    };
    setNotifications([newNotif, ...notifications]);
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      case 'error':
        return 'from-red-500/20 to-rose-500/20 border-red-500/30';
      case 'warning':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      default:
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-4">
        <button
          onClick={addNotification}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Add Notification
        </button>
      </div>

      {/* Stacked Notifications */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={`bg-gradient-to-r ${getTypeStyles(notif.type)} backdrop-blur-xl border rounded-lg p-4 animate-slide-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getIcon(notif.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-slate-100 font-semibold text-sm">{notif.title}</h4>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{notif.time}</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">{notif.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notif.id)}
                className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-12 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-slate-400">No notifications</p>
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <button
          onClick={() => setNotifications([])}
          className="w-full mt-4 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
        >
          Clear All
        </button>
      )}

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export const notification8Code = `import { useState } from 'react';

type Notification = {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  time: string;
};

export default function Notification8Example() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: 'File Uploaded', message: 'Document.pdf uploaded successfully', type: 'success', time: '2m ago' },
    { id: 2, title: 'Server Error', message: 'Failed to connect to the server', type: 'error', time: '5m ago' },
    { id: 3, title: 'Low Storage', message: 'You have 10% storage remaining', type: 'warning', time: '10m ago' },
  ]);

  const addNotification = () => {
    const types: Array<'success' | 'error' | 'warning' | 'info'> = ['success', 'error', 'warning', 'info'];
    const messages = [
      { title: 'Payment Received', message: 'Your payment of $99 was processed', type: 'success' },
      { title: 'Connection Lost', message: 'Network connection interrupted', type: 'error' },
      { title: 'Update Available', message: 'A new version is ready to install', type: 'info' },
      { title: 'Battery Low', message: 'Device battery at 15%', type: 'warning' },
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    const newNotif: Notification = {
      id: Date.now(),
      ...random,
      type: random.type as any,
      time: 'Just now'
    };
    setNotifications([newNotif, ...notifications]);
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      case 'error':
        return 'from-red-500/20 to-rose-500/20 border-red-500/30';
      case 'warning':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      default:
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="mb-4">
        <button
          onClick={addNotification}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Add Notification
        </button>
      </div>

      {/* Stacked Notifications */}
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className={\`bg-gradient-to-r \${getTypeStyles(notif.type)} backdrop-blur-xl border rounded-lg p-4 animate-slide-in\`}
            style={{ animationDelay: \`\${index * 0.1}s\` }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getIcon(notif.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-slate-100 font-semibold text-sm">{notif.title}</h4>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{notif.time}</span>
                </div>
                <p className="text-slate-300 text-xs mt-1">{notif.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notif.id)}
                className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-12 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-slate-400">No notifications</p>
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <button
          onClick={() => setNotifications([])}
          className="w-full mt-4 px-4 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-all duration-300"
        >
          Clear All
        </button>
      )}

      <style>{\`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      \`}</style>
    </div>
  );
}`;