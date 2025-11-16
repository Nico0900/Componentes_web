export default function Card4Example() {
  return (
    <div className="max-w-sm mx-auto relative p-[2px] rounded-2xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-xl group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
      <div className="bg-slate-900 rounded-2xl p-6 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 mb-1">Gradient Border</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Pro Feature</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Eye-catching card with animated gradient border effect.
        </p>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-2 border-slate-900" />
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-slate-900" />
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-indigo-600 border-2 border-slate-900" />
          </div>
          <span className="text-xs text-slate-400">+12 members</span>
        </div>

        <button className="w-full bg-linear-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/50">
          Join Now
        </button>
      </div>
    </div>
  );
}

export const card4Code = `export default function Card4Example() {
  return (
    <div className="max-w-sm mx-auto relative p-[2px] rounded-2xl bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-xl group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
      <div className="bg-slate-900 rounded-2xl p-6 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 mb-1">Gradient Border</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Pro Feature</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Eye-catching card with animated gradient border effect.
        </p>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-2 border-slate-900" />
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-slate-900" />
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-400 to-indigo-600 border-2 border-slate-900" />
          </div>
          <span className="text-xs text-slate-400">+12 members</span>
        </div>

        <button className="w-full bg-linear-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-900/50">
          Join Now
        </button>
      </div>
    </div>
  );
}`;
