export default function Alert15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-sm p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Stacked</h3>
            <p className="text-xs text-slate-500">Component #15</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Stackable notifications
        </p>
        <button className="mt-4 w-full bg-green-600/80 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export const alert15Code = `export default function Alert15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-sm p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Stacked</h3>
            <p className="text-xs text-slate-500">Component #15</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Stackable notifications
        </p>
        <button className="mt-4 w-full bg-green-600/80 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}`;
