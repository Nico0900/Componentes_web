export default function Card2Example() {
  return (
    <div className="max-w-md mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex">
        <div className="w-32 h-full bg-gradient-to-br from-purple-500 to-pink-600 shrink-0" />
        <div className="p-5 flex-1">
          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30 font-medium">
            Featured
          </span>
          <h3 className="text-lg font-bold text-slate-100 mt-2 mb-1">Horizontal Card</h3>
          <p className="text-slate-400 text-xs mb-3 leading-relaxed">
            Card with side image layout for compact display.
          </p>
          <button className="bg-purple-600/80 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export const card2Code = `export default function Card2Example() {
  return (
    <div className="max-w-md mx-auto bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex">
        <div className="w-32 h-full bg-gradient-to-br from-purple-500 to-pink-600 shrink-0" />
        <div className="p-5 flex-1">
          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30 font-medium">
            Featured
          </span>
          <h3 className="text-lg font-bold text-slate-100 mt-2 mb-1">Horizontal Card</h3>
          <p className="text-slate-400 text-xs mb-3 leading-relaxed">
            Card with side image layout for compact display.
          </p>
          <button className="bg-purple-600/80 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}`;
