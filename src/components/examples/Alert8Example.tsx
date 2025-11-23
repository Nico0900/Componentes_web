export default function Alert8Example() {
  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden bg-orange-500/10 border-2 border-dashed border-orange-500/40 p-5 rounded-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      <div className="relative flex items-center gap-4">
        <div className="bg-orange-500 p-3 rounded-full animate-pulse">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-orange-300 mb-1 text-lg">Warning Notice</h4>
          <p className="text-sm text-orange-200/80">Please review the following changes before proceeding.</p>
        </div>
      </div>
    </div>
  );
}

export const alert8Code = `export default function Alert8Example() {
  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden bg-orange-500/10 border-2 border-dashed border-orange-500/40 p-5 rounded-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      <div className="relative flex items-center gap-4">
        <div className="bg-orange-500 p-3 rounded-full animate-pulse">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-orange-300 mb-1 text-lg">Warning Notice</h4>
          <p className="text-sm text-orange-200/80">Please review the following changes before proceeding.</p>
        </div>
      </div>
    </div>
  );
}`;
