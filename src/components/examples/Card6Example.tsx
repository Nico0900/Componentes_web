export default function Card6Example() {
  return (
    <div className="max-w-sm mx-auto perspective-1000">
      <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30 font-medium">
              Trending
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-100 mb-2">Hover 3D Effect</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Interactive card with smooth 3D transform and animations.
          </p>

          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">React</span>
            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">CSS</span>
          </div>

          <button className="w-full bg-blue-600/80 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export const card6Code = `export default function Card6Example() {
  return (
    <div className="max-w-sm mx-auto perspective-1000">
      <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30 font-medium">
              Trending
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-100 mb-2">Hover 3D Effect</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Interactive card with smooth 3D transform and animations.
          </p>

          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">React</span>
            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">CSS</span>
          </div>

          <button className="w-full bg-blue-600/80 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}`;
