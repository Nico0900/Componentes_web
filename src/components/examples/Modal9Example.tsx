import { useState } from 'react';

export default function Modal9Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Preview Card - Vista previa centrada */}
      <div className="flex justify-center items-center w-full h-full">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-2xl bg-slate-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white font-medium">Video Player Modal</p>
                <p className="text-slate-400 text-sm mt-1">Click to open</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-4 border-t border-slate-700">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Sample Video</h3>
            <p className="text-slate-400 text-sm">
              Click to view full video player modal
            </p>
          </div>
        </button>
      </div>

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-4xl bg-slate-900 rounded-lg overflow-hidden shadow-2xl animate-scaleIn">
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="bg-slate-800 p-4 border-t border-slate-700">
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Sample Video</h3>
              <p className="text-slate-400 text-sm">
                This is a video player modal that can display embedded videos from YouTube or other sources.
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  1.2M views
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  3:42
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const modal9Code = `import { useState } from 'react';

export default function Modal9Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Video Modal</button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">✕</button>
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-lg overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" allowFullScreen />
            </div>
            <div className="bg-slate-800 p-4">
              <h3 className="text-lg font-semibold text-slate-100">Sample Video</h3>
              <p className="text-slate-400 text-sm">Video description goes here...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`;
