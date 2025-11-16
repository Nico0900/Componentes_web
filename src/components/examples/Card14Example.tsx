export default function Card14Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-sm p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Image Overlay</h3>
            <p className="text-xs text-slate-500">Component #14</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Card with image overlay on hover
        </p>
        <button className="mt-4 w-full bg-teal-600/80 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

export const card14Code = `export default function Card14Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="max-w-sm p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Image Overlay</h3>
            <p className="text-xs text-slate-500">Component #14</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Card with image overlay on hover
        </p>
        <button className="mt-4 w-full bg-teal-600/80 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}`;
