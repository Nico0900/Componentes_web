export default function Form15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-md p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Settings</h3>
              <p className="text-xs text-emerald-400">#15</p>
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Settings panel form
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-emerald-600/80 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300">
            Primary
          </button>
          <button className="px-4 py-2.5 border border-slate-700/50 hover:border-emerald-500/50 text-slate-300 rounded-lg transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export const form15Code = `export default function Form15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-md p-8 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100">Settings</h3>
              <p className="text-xs text-emerald-400">#15</p>
            </div>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Settings panel form
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-emerald-600/80 hover:bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300">
            Primary
          </button>
          <button className="px-4 py-2.5 border border-slate-700/50 hover:border-emerald-500/50 text-slate-300 rounded-lg transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}`;
