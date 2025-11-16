export default function Card3Example() {
  return (
    <div className="max-w-sm mx-auto relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

      {/* Card */}
      <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/30 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs text-cyan-400 font-medium">Premium</span>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2">Glassmorphism</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          Modern glass effect card with glowing border and blur.
        </p>

        <div className="flex gap-2">
          <button className="flex-1 bg-cyan-600/80 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300">
            Select
          </button>
          <button className="px-3 py-2 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 text-sm rounded-lg transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export const card3Code = `export default function Card3Example() {
  return (
    <div className="max-w-sm mx-auto relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

      {/* Card */}
      <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-2xl p-6 border border-slate-700/30 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs text-cyan-400 font-medium">Premium</span>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2">Glassmorphism</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          Modern glass effect card with glowing border and blur.
        </p>

        <div className="flex gap-2">
          <button className="flex-1 bg-cyan-600/80 hover:bg-cyan-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300">
            Select
          </button>
          <button className="px-3 py-2 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 text-sm rounded-lg transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}`;
