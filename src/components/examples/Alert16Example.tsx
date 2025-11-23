export default function Alert16Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 border-2 border-cyan-500/30 rounded-2xl p-5 shadow-2xl shadow-cyan-500/10">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-50"></div>
          <div className="relative bg-cyan-500 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-bold text-cyan-300 text-lg">Quick Tip</h4>
            <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-2 py-0.5 rounded-full">Pro</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Use keyboard shortcuts to navigate faster. Press <kbd className="px-2 py-1 bg-slate-700 rounded text-xs font-mono">Ctrl + K</kbd> to open command palette.
          </p>
          <div className="flex gap-2">
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert16Code = `export default function Alert16Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 border-2 border-cyan-500/30 rounded-2xl p-5 shadow-2xl shadow-cyan-500/10">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-50"></div>
          <div className="relative bg-cyan-500 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-bold text-cyan-300 text-lg">Quick Tip</h4>
            <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-2 py-0.5 rounded-full">Pro</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Use keyboard shortcuts to navigate faster. Press <kbd className="px-2 py-1 bg-slate-700 rounded text-xs font-mono">Ctrl + K</kbd> to open command palette.
          </p>
          <div className="flex gap-2">
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
