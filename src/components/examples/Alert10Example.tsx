export default function Alert10Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-lg">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-semibold text-emerald-400 mb-1">Successfully saved!</h3>
          <p className="text-sm text-emerald-300/70">Your changes have been saved successfully.</p>
          <div className="mt-3">
            <div className="h-1 bg-emerald-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full animate-progress" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert10Code = `export default function Alert10Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-lg">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-semibold text-emerald-400 mb-1">Successfully saved!</h3>
          <p className="text-sm text-emerald-300/70">Your changes have been saved successfully.</p>
          <div className="mt-3">
            <div className="h-1 bg-emerald-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full animate-progress" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
