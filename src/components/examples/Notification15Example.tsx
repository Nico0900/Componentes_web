export default function Notification15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-lg p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-100 mb-1">Error Alert</h3>
            <p className="text-xs text-pink-400 font-medium">Component #15</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Error notification
        </p>
        <div className="mt-4 pt-4 border-t border-slate-700/50 flex gap-2">
          <button className="flex-1 bg-pink-600/80 hover:bg-pink-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all">
            Action
          </button>
          <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-sm rounded-lg transition-all">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export const notification15Code = `export default function Notification15Example() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-6">
      <div className="w-full max-w-lg p-6 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-100 mb-1">Error Alert</h3>
            <p className="text-xs text-pink-400 font-medium">Component #15</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Error notification
        </p>
        <div className="mt-4 pt-4 border-t border-slate-700/50 flex gap-2">
          <button className="flex-1 bg-pink-600/80 hover:bg-pink-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all">
            Action
          </button>
          <button className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-sm rounded-lg transition-all">
            More
          </button>
        </div>
      </div>
    </div>
  );
}`;
