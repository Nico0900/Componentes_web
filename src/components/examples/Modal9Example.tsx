import { useState } from 'react';

export default function Modal9Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center p-6">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Play Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fadeIn">
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
    </div>
  );
}

export const modal9Code = \`import { useState } from 'react';

export default function Modal9Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center p-6">
      <button onClick={() => setIsOpen(true)} className="px-6 py-3 bg-rose-600 text-white rounded-lg flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        Play Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
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
    </div>
  );
}\`;
