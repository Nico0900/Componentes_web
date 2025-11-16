export default function Alert1Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-blue-600/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-blue-200 mb-1">Information</h4>
          <p className="text-sm text-blue-300/90">This is an informational alert message. Used to display general information.</p>
        </div>
      </div>
    </div>
  );
}

export const alert1Code = `export default function Alert1Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-blue-600/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-blue-200 mb-1">Information</h4>
          <p className="text-sm text-blue-300/90">This is an informational alert message. Used to display general information.</p>
        </div>
      </div>
    </div>
  );
}`;
