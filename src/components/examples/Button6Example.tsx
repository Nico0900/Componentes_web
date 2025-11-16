export default function Button6Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {/* Spinner Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg cursor-not-allowed opacity-70">
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Loading...
      </button>

      {/* Dots Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg cursor-not-allowed opacity-70">
        Processing
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </button>

      {/* Pulse Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg cursor-not-allowed">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        Uploading...
      </button>

      {/* Disabled State */}
      <button className="px-6 py-2.5 bg-slate-700 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-50" disabled>
        Disabled
      </button>
    </div>
  );
}

export const button6Code = `export default function Button6Example() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {/* Spinner Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg cursor-not-allowed opacity-70">
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Loading...
      </button>

      {/* Dots Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg cursor-not-allowed opacity-70">
        Processing
        <span className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      </button>

      {/* Pulse Loading */}
      <button className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white font-medium rounded-lg cursor-not-allowed">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        Uploading...
      </button>

      {/* Disabled State */}
      <button className="px-6 py-2.5 bg-slate-700 text-slate-400 font-medium rounded-lg cursor-not-allowed opacity-50" disabled>
        Disabled
      </button>
    </div>
  );
}`;
