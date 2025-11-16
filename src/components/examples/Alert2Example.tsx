export default function Alert2Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-green-600/20 border-l-4 border-green-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-green-200 mb-1">Success</h4>
          <p className="text-sm text-green-300/90">Your changes have been saved successfully!</p>
        </div>
      </div>
    </div>
  );
}

export const alert2Code = `export default function Alert2Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-green-600/20 border-l-4 border-green-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-green-200 mb-1">Success</h4>
          <p className="text-sm text-green-300/90">Your changes have been saved successfully!</p>
        </div>
      </div>
    </div>
  );
}`;
