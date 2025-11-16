export default function Card1Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30 font-medium">
            New
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">Classic Card</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          A modern card design with gradient header and glassmorphism effect.
        </p>
        <button className="w-full bg-blue-600/80 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30">
          View Details
        </button>
      </div>
    </div>
  );
}

export const card1Code = `export default function Card1Example() {
  return (
    <div className="max-w-sm mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30 font-medium">
            New
          </span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">Classic Card</h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          A modern card design with gradient header and glassmorphism effect.
        </p>
        <button className="w-full bg-blue-600/80 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30">
          View Details
        </button>
      </div>
    </div>
  );
}`;
