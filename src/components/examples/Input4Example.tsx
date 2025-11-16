export default function Input4Example() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full pl-10 pr-10 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <kbd className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-700/50 border border-slate-600/50 rounded">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}

export const input4Code = `export default function Input4Example() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <label className="block text-sm font-medium text-slate-300 mb-2">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full pl-10 pr-10 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <kbd className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-700/50 border border-slate-600/50 rounded">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}`;
