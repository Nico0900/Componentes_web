import { useState } from 'react';

export default function Modal7Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Preview Card - Vista previa centrada */}
      <div className="flex justify-center items-center w-full h-full p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-sm bg-slate-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="p-6 border-b border-slate-700 bg-slate-800/50">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1.5 bg-slate-600 rounded-full"></div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-slate-100 mb-1">Bottom Sheet</h3>
              <p className="text-xs text-slate-400">Mobile-style slide-up menu</p>
            </div>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-sm font-medium text-slate-300">Share</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-sm font-medium text-slate-300">Download</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-600/10 rounded-lg">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="text-sm font-medium text-red-400">Delete</span>
            </div>
          </div>

          <div className="p-4 text-center text-slate-400 text-sm border-t border-slate-700">
            Click to open bottom sheet
          </div>
        </button>
      </div>

      {/* Full Screen Bottom Sheet Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-9999 animate-fadeIn">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-slate-800 rounded-t-3xl shadow-2xl border-t border-slate-700 max-h-[80vh] overflow-auto animate-slideUp">
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
            </div>

            <div className="px-6 py-4 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-100">Bottom Sheet</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-slate-300 mb-4">
                This bottom sheet slides up from the bottom, commonly used in mobile interfaces.
              </p>

              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>

                <button className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download</span>
                </button>

                <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>Delete</span>
                </button>
              </div>
            </div>

            <div className="h-6" />
          </div>
        </div>
      )}
    </>
  );
}

export const modal7Code = `import { useState } from 'react';

export default function Modal7Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Bottom Sheet</button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div onClick={() => setIsOpen(false)} className="absolute inset-0 bg-slate-900/80" />
          <div className="absolute bottom-0 left-0 right-0 bg-slate-800 rounded-t-3xl max-h-[80vh] overflow-auto">
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-slate-600 rounded-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Bottom Sheet</h3>
              <p className="text-slate-400">Content goes here...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`;
