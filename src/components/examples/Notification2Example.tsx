import { useState } from 'react';

export default function Notification2Example() {
  const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info' | null>(null);

  const alerts = {
    success: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/50',
      iconBg: 'bg-green-500',
      title: 'Success',
      message: 'Operation completed successfully!'
    },
    error: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500/20 to-rose-500/20 border-red-500/50',
      iconBg: 'bg-red-500',
      title: 'Error',
      message: 'Something went wrong. Please try again.'
    },
    warning: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50',
      iconBg: 'bg-yellow-500',
      title: 'Warning',
      message: 'Please review your input carefully.'
    },
    info: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/50',
      iconBg: 'bg-blue-500',
      title: 'Information',
      message: 'Here is some helpful information for you.'
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex flex-wrap gap-3">
        {Object.keys(alerts).map((type) => (
          <button
            key={type}
            onClick={() => setAlertType(type as any)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 ${
              type === 'success' ? 'bg-green-600 hover:bg-green-700' :
              type === 'error' ? 'bg-red-600 hover:bg-red-700' :
              type === 'warning' ? 'bg-yellow-600 hover:bg-yellow-700' :
              'bg-blue-600 hover:bg-blue-700'
            } text-white shadow-lg hover:shadow-xl`}
          >
            Show {type}
          </button>
        ))}
      </div>

      {alertType && (
        <div className={`bg-gradient-to-r ${alerts[alertType].color} backdrop-blur-xl border rounded-xl p-4 animate-fade-in`}>
          <div className="flex items-start gap-4">
            <div className={`${alerts[alertType].iconBg} rounded-lg p-2 text-white flex-shrink-0`}>
              {alerts[alertType].icon}
            </div>
            <div className="flex-1">
              <h4 className="text-slate-100 font-bold mb-1">{alerts[alertType].title}</h4>
              <p className="text-slate-300 text-sm">{alerts[alertType].message}</p>
            </div>
            <button
              onClick={() => setAlertType(null)}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export const notification2Code = `import { useState } from 'react';

export default function Notification2Example() {
  const [alertType, setAlertType] = useState<'success' | 'error' | 'warning' | 'info' | null>(null);

  const alerts = {
    success: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500/20 to-emerald-500/20 border-green-500/50',
      iconBg: 'bg-green-500',
      title: 'Success',
      message: 'Operation completed successfully!'
    },
    error: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500/20 to-rose-500/20 border-red-500/50',
      iconBg: 'bg-red-500',
      title: 'Error',
      message: 'Something went wrong. Please try again.'
    },
    warning: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50',
      iconBg: 'bg-yellow-500',
      title: 'Warning',
      message: 'Please review your input carefully.'
    },
    info: {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/50',
      iconBg: 'bg-blue-500',
      title: 'Information',
      message: 'Here is some helpful information for you.'
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex flex-wrap gap-3">
        {Object.keys(alerts).map((type) => (
          <button
            key={type}
            onClick={() => setAlertType(type as any)}
            className={\`px-4 py-2 rounded-lg font-medium capitalize transition-all duration-300 \${
              type === 'success' ? 'bg-green-600 hover:bg-green-700' :
              type === 'error' ? 'bg-red-600 hover:bg-red-700' :
              type === 'warning' ? 'bg-yellow-600 hover:bg-yellow-700' :
              'bg-blue-600 hover:bg-blue-700'
            } text-white shadow-lg hover:shadow-xl\`}
          >
            Show {type}
          </button>
        ))}
      </div>

      {alertType && (
        <div className={\`bg-gradient-to-r \${alerts[alertType].color} backdrop-blur-xl border rounded-xl p-4 animate-fade-in\`}>
          <div className="flex items-start gap-4">
            <div className={\`\${alerts[alertType].iconBg} rounded-lg p-2 text-white flex-shrink-0\`}>
              {alerts[alertType].icon}
            </div>
            <div className="flex-1">
              <h4 className="text-slate-100 font-bold mb-1">{alerts[alertType].title}</h4>
              <p className="text-slate-300 text-sm">{alerts[alertType].message}</p>
            </div>
            <button
              onClick={() => setAlertType(null)}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{\`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      \`}</style>
    </div>
  );
}`;