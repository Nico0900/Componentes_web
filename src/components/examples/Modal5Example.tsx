import { useState } from 'react';

export default function Modal5Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Preview Card - Vista previa centrada */}
      <div className="flex justify-center items-center w-full h-full p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-2xl bg-slate-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="relative aspect-video bg-gradient-to-br from-violet-600/20 to-slate-900 flex items-center justify-center border-b border-slate-700">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Fullscreen Modal</p>
              <p className="text-slate-400 text-sm mt-1">Click to open</p>
            </div>
          </div>
          <div className="bg-slate-800 p-4">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Immersive Experience</h3>
            <p className="text-slate-400 text-sm">
              Perfect for detailed content, multi-step forms, or when you need maximum space
            </p>
          </div>
        </button>
      </div>

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-9999 bg-slate-950/15 animate-fadeIn overflow-auto">
          <div className="sticky top-0 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 z-10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-100">Fullscreen Modal</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">Welcome to Fullscreen</h3>
                <p className="text-slate-400 leading-relaxed">
                  This modal takes up the entire screen, perfect for immersive content, detailed forms,
                  or when you need maximum space for your content.
                </p>
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">Feature 1</h4>
                  <p className="text-slate-400">
                    Use fullscreen modals for detailed content that requires user focus.
                  </p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">Feature 2</h4>
                  <p className="text-slate-400">
                    Perfect for multi-step processes, galleries, or detailed forms.
                  </p>
                </div>
              </section>

              <section>
                <div className="h-64 bg-gradient-to-b from-violet-600/20 to-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                  <p className="text-slate-300">Content Area</p>
                </div>
              </section>
            </div>
          </div>

          <div className="sticky bottom-0 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 mt-8">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const modal5Code = `import { useState } from 'react';

export default function Modal5Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Fullscreen</button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900 overflow-auto">
          <div className="sticky top-0 bg-slate-800 border-b border-slate-700">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-100">Fullscreen Modal</h2>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-200">✕</button>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <p className="text-slate-400">Fullscreen content goes here...</p>
          </div>
        </div>
      )}
    </>
  );
}`;
