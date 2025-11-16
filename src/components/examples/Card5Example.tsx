export default function Card5Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/20 backdrop-blur-sm rounded-lg p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-200 mb-0.5 truncate">Minimal Card</h3>
          <p className="text-xs text-slate-500">Clean and simple design</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        A minimalist approach focusing on content and readability.
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">2 min read</span>
        <button className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors duration-300">
          Read →
        </button>
      </div>
    </div>
  );
}

export const card5Code = `export default function Card5Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/20 backdrop-blur-sm rounded-lg p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-200 mb-0.5 truncate">Minimal Card</h3>
          <p className="text-xs text-slate-500">Clean and simple design</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        A minimalist approach focusing on content and readability.
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">2 min read</span>
        <button className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors duration-300">
          Read →
        </button>
      </div>
    </div>
  );
}`;
