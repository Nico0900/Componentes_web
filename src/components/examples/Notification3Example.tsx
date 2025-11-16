import { useState } from 'react';

export default function Notification3Example() {
  const [bannerVisible, setBannerVisible] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setBannerVisible(!bannerVisible)}
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mx-6"
      >
        {bannerVisible ? 'Hide Banner' : 'Show Banner'}
      </button>

      {/* Top Banner Notification */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
          <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 border-b border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">New Feature Available!</h4>
                    <p className="text-white/90 text-sm">Check out our latest updates and improvements to enhance your experience.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2 bg-white text-purple-700 hover:bg-white/90 font-semibold rounded-lg transition-all duration-300 text-sm">
                    Learn More
                  </button>
                  <button
                    onClick={() => setBannerVisible(false)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export const notification3Code = `import { useState } from 'react';

export default function Notification3Example() {
  const [bannerVisible, setBannerVisible] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setBannerVisible(!bannerVisible)}
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mx-6"
      >
        {bannerVisible ? 'Hide Banner' : 'Show Banner'}
      </button>

      {/* Top Banner Notification */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
          <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 border-b border-white/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">New Feature Available!</h4>
                    <p className="text-white/90 text-sm">Check out our latest updates and improvements to enhance your experience.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2 bg-white text-purple-700 hover:bg-white/90 font-semibold rounded-lg transition-all duration-300 text-sm">
                    Learn More
                  </button>
                  <button
                    onClick={() => setBannerVisible(false)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{\`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      \`}</style>
    </div>
  );
}`;