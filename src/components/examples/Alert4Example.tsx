export default function Alert4Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-red-600/20 border-l-4 border-red-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-red-200 mb-1">Error</h4>
          <p className="text-sm text-red-300/90">An error occurred while processing your request. Please try again.</p>
        </div>
      </div>
    </div>
  );
}

export const alert4Code = `export default function Alert4Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-red-600/20 border-l-4 border-red-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-red-200 mb-1">Error</h4>
          <p className="text-sm text-red-300/90">An error occurred while processing your request. Please try again.</p>
        </div>
      </div>
    </div>
  );
}`;
