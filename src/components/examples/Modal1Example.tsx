import { useState } from 'react';

export default function Modal1Example() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-slate-950/10"

          />

          {/* Modal */}
          <div className="relative bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md min-w-[400px] p-6 border border-slate-700 animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-100">Modal Title</h3>
              <button
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-slate-400 mb-6">
              This is a simple centered modal dialog. Click outside or press the close button to dismiss.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const modal1Code = `import { useState } from 'react';

export default function Modal1Example() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            
          />

          <div className="relative bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md min-w-[400px] p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-100">Modal Title</h3>
              <button
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-slate-400 mb-6">
              This is a simple centered modal dialog. Click outside or press the close button to dismiss.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
