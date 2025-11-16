export default function Alert5Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-blue-600/20 border border-blue-500/30 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <h4 className="font-semibold text-blue-200 mb-1">New Update Available</h4>
          <p className="text-sm text-blue-300/90 mb-3">A new version of the application is available. Update now to get the latest features.</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              Update Now
            </button>
            <button className="px-3 py-1.5 bg-transparent hover:bg-blue-600/10 text-blue-300 text-sm font-medium rounded-lg transition-colors duration-200">
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert5Code = `export default function Alert5Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-blue-600/20 border border-blue-500/30 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div className="flex-1">
          <h4 className="font-semibold text-blue-200 mb-1">New Update Available</h4>
          <p className="text-sm text-blue-300/90 mb-3">A new version of the application is available. Update now to get the latest features.</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              Update Now
            </button>
            <button className="px-3 py-1.5 bg-transparent hover:bg-blue-600/10 text-blue-300 text-sm font-medium rounded-lg transition-colors duration-200">
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
