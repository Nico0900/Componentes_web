export default function Alert12Example() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl">
        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 animate-pulse"></div>
        <div className="relative flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-red-500 p-1.5 rounded-full">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-red-300 mb-1">Critical Error</h4>
            <p className="text-sm text-red-200/80 mb-3">An unexpected error occurred. Please contact support if this persists.</p>
            <div className="flex gap-2">
              <button className="text-xs font-medium text-red-400 hover:text-red-300 underline">
                View Details
              </button>
              <span className="text-red-600">•</span>
              <button className="text-xs font-medium text-red-400 hover:text-red-300 underline">
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert12Code = `export default function Alert12Example() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl">
        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 animate-pulse"></div>
        <div className="relative flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="bg-red-500 p-1.5 rounded-full">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-red-300 mb-1">Critical Error</h4>
            <p className="text-sm text-red-200/80 mb-3">An unexpected error occurred. Please contact support if this persists.</p>
            <div className="flex gap-2">
              <button className="text-xs font-medium text-red-400 hover:text-red-300 underline">
                View Details
              </button>
              <span className="text-red-600">•</span>
              <button className="text-xs font-medium text-red-400 hover:text-red-300 underline">
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
