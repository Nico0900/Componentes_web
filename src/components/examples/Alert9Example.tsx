export default function Alert9Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2"></div>
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="bg-teal-500/20 p-2.5 rounded-xl">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-teal-300 text-lg">System Update</h4>
              <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">Just now</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">A new version is available. Update now to get the latest features.</p>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors">
                Update
              </button>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg transition-colors">
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const alert9Code = `export default function Alert9Example() {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2"></div>
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="bg-teal-500/20 p-2.5 rounded-xl">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-teal-300 text-lg">System Update</h4>
              <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">Just now</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">A new version is available. Update now to get the latest features.</p>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors">
                Update
              </button>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg transition-colors">
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
