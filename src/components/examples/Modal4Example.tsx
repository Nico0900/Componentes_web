import { useState } from 'react';

type AlertType = 'success' | 'error' | 'warning';

export default function Modal4Example() {
  const [isOpen, setIsOpen] = useState(true);
  const [alertType, setAlertType] = useState<AlertType>('success');

  const openAlert = (type: AlertType) => {
    setAlertType(type);
    setIsOpen(true);
  };

  const alertConfig = {
    success: {
      bg: 'bg-emerald-500/20',
      text: 'text-emerald-500',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Success!',
      message: 'Your action has been completed successfully.'
    },
    error: {
      bg: 'bg-red-500/20',
      text: 'text-red-500',
      button: 'bg-red-600 hover:bg-red-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Error!',
      message: 'Something went wrong. Please try again.'
    },
    warning: {
      bg: 'bg-amber-500/20',
      text: 'text-amber-500',
      button: 'bg-amber-600 hover:bg-amber-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Warning!',
      message: 'Please review your action before continuing.'
    }
  };

  const config = alertConfig[alertType];

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/10"  />
          <div className="relative bg-slate-800 rounded-2xl max-w-md w-full p-6 border border-slate-700">
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 ${config.bg} rounded-full flex items-center justify-center mb-4`}>
                <div className={config.text}>{config.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{config.title}</h3>
              <p className="text-slate-400 mb-6">{config.message}</p>
              <button className={`w-full px-4 py-2 ${config.button} text-white rounded-lg transition-colors`}>Dismiss</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const modal4Code = `import { useState } from 'react';

type AlertType = 'success' | 'error' | 'warning';

export default function Modal4Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [alertType, setAlertType] = useState<AlertType>('success');

  const openAlert = (type: AlertType) => {
    setAlertType(type);
    setIsOpen(true);
  };

  const alertConfig = {
    success: {
      bg: 'bg-emerald-500/20',
      text: 'text-emerald-500',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Success!',
      message: 'Your action has been completed successfully.'
    },
    error: {
      bg: 'bg-red-500/20',
      text: 'text-red-500',
      button: 'bg-red-600 hover:bg-red-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Error!',
      message: 'Something went wrong. Please try again.'
    },
    warning: {
      bg: 'bg-amber-500/20',
      text: 'text-amber-500',
      button: 'bg-amber-600 hover:bg-amber-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Warning!',
      message: 'Please review your action before continuing.'
  };

  const config = alertConfig[alertType];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex gap-3">
        <button onClick={() => openAlert('success')} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">Success</button>
        <button onClick={() => openAlert('error')} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Error</button>
        <button onClick={() => openAlert('warning')} className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg">Warning</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/10" onClick={() => setIsOpen(false)} />
          <div className="relative bg-slate-800 rounded-2xl max-w-md w-full p-6 border border-slate-700">
            <div className="flex flex-col items-center text-center">
              <div className={\`w-16 h-16 \${config.bg} rounded-full flex items-center justify-center mb-4\`}>
                <div className={config.text}>{config.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{config.title}</h3>
              <p className="text-slate-400 mb-6">{config.message}</p>
              <button onClick={() => setIsOpen(false)} className={\`w-full px-4 py-2 \${config.button} text-white rounded-lg\`}>Dismiss</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
